import type { Brief } from './brief';
import type { GenerationResult } from './generation';

export type ProjectStatus = 'brouillon' | 'genere' | 'finalise';

export interface Project {
  id: string;
  title: string;
  styleId: string;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  brief: Brief;
  results: GenerationResult[];
}

export interface ProjectSummary {
  id: string;
  title: string;
  styleId: string;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  resultCount: number;
}

export const toSummary = (p: Project): ProjectSummary => ({
  id: p.id,
  title: p.title,
  styleId: p.styleId,
  status: p.status,
  createdAt: p.createdAt,
  updatedAt: p.updatedAt,
  resultCount: p.results.length,
});
