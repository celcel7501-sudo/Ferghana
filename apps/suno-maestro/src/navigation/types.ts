import type { GenerationScope } from '@/types';

export type RootStackParamList = {
  Tabs: undefined;
  Brief: { projectId?: string } | undefined;
  Direction: { projectId: string };
  Generate: { projectId: string; scope?: GenerationScope };
  Result: { projectId: string; resultId: string };
};

export type TabParamList = {
  Home: undefined;
  Library: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
