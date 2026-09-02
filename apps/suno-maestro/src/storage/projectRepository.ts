import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Project } from '@/types';
import { STORAGE_KEYS } from './keys';

/** Persistance locale. Aucune donnee ne quitte l'appareil sans action explicite. */

const readAll = async (): Promise<Project[]> => {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEYS.projects);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Project[]) : [];
  } catch {
    // Donnees corrompues : on ne perd pas l'app pour autant.
    return [];
  }
};

const writeAll = async (projects: Project[]): Promise<void> => {
  await AsyncStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(projects));
};

export const projectRepository = {
  list: readAll,

  async get(id: string): Promise<Project | undefined> {
    return (await readAll()).find((p) => p.id === id);
  },

  async save(project: Project): Promise<Project> {
    const all = await readAll();
    const next = { ...project, updatedAt: new Date().toISOString() };
    const i = all.findIndex((p) => p.id === project.id);
    if (i >= 0) all[i] = next;
    else all.unshift(next);
    await writeAll(all);
    return next;
  },

  async remove(id: string): Promise<void> {
    await writeAll((await readAll()).filter((p) => p.id !== id));
  },

  async duplicate(id: string): Promise<Project | undefined> {
    const all = await readAll();
    const src = all.find((p) => p.id === id);
    if (!src) return undefined;
    const now = new Date().toISOString();
    const copy: Project = {
      ...src,
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
      title: `${src.title} (copie)`,
      createdAt: now,
      updatedAt: now,
    };
    all.unshift(copy);
    await writeAll(all);
    return copy;
  },

  async hasSeeded(): Promise<boolean> {
    return (await AsyncStorage.getItem(STORAGE_KEYS.seeded)) === '1';
  },

  async markSeeded(): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.seeded, '1');
  },
};
