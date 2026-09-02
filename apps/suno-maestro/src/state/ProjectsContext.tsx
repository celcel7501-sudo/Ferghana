import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Brief, GenerationResult, Project, ProjectStatus } from '@/types';
import { projectRepository } from '@/storage/projectRepository';
import { buildSeedProject } from '@/data/seed';

interface ProjectsValue {
  projects: Project[];
  loading: boolean;
  reload: () => Promise<void>;
  create: (brief: Brief) => Promise<Project>;
  update: (project: Project) => Promise<void>;
  attachResult: (projectId: string, result: GenerationResult) => Promise<void>;
  setStatus: (projectId: string, status: ProjectStatus) => Promise<void>;
  remove: (id: string) => Promise<void>;
  duplicate: (id: string) => Promise<void>;
  byId: (id: string) => Project | undefined;
}

const Ctx = createContext<ProjectsValue | null>(null);

const uid = (): string => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setProjects(await projectRepository.list());
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      // Amorçage : un projet d'exemple au premier lancement seulement.
      if (!(await projectRepository.hasSeeded())) {
        await projectRepository.save(await buildSeedProject());
        await projectRepository.markSeeded();
      }
      const list = await projectRepository.list();
      if (alive) {
        setProjects(list);
        setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const create = useCallback(async (brief: Brief): Promise<Project> => {
    const now = new Date().toISOString();
    const project: Project = {
      id: uid(),
      title: brief.title || 'Sans titre',
      styleId: brief.styleId,
      status: 'brouillon',
      createdAt: now,
      updatedAt: now,
      brief,
      results: [],
    };
    await projectRepository.save(project);
    await reload();
    return project;
  }, [reload]);

  const update = useCallback(async (project: Project) => {
    await projectRepository.save(project);
    await reload();
  }, [reload]);

  const attachResult = useCallback(async (projectId: string, result: GenerationResult) => {
    const p = await projectRepository.get(projectId);
    if (!p) return;
    await projectRepository.save({ ...p, status: 'genere', results: [result, ...p.results] });
    await reload();
  }, [reload]);

  const setStatus = useCallback(async (projectId: string, status: ProjectStatus) => {
    const p = await projectRepository.get(projectId);
    if (!p) return;
    await projectRepository.save({ ...p, status });
    await reload();
  }, [reload]);

  const remove = useCallback(async (id: string) => {
    await projectRepository.remove(id);
    await reload();
  }, [reload]);

  const duplicate = useCallback(async (id: string) => {
    await projectRepository.duplicate(id);
    await reload();
  }, [reload]);

  const byId = useCallback(
    (id: string): Project | undefined => projects.find((p) => p.id === id),
    [projects],
  );

  const value = useMemo<ProjectsValue>(
    () => ({ projects, loading, reload, create, update, attachResult, setStatus, remove, duplicate, byId }),
    [projects, loading, reload, create, update, attachResult, setStatus, remove, duplicate, byId],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useProjects = (): ProjectsValue => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useProjects doit être utilisé dans un ProjectsProvider.');
  return ctx;
};
