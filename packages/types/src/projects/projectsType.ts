import { Database } from '../database.types';

export type projects =
  Database['public']['Tables']['projects']['Row'];
export type projectsInsert =
  Database['public']['Tables']['projects']['Insert'];
export type projectsUpdate =
  Database['public']['Tables']['projects']['Update'];




