import { Database } from '../database.types';

export type PersonalData =
  Database['public']['Tables']['personalData']['Row'];
export type PersonalDataInsert =
  Database['public']['Tables']['personalData']['Insert'];
export type PersonalDataUpdate =
  Database['public']['Tables']['personalData']['Update'];

export type PersonalDataWithoutPassword = Omit<
  PersonalData,
  'password'
>;



