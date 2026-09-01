import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from '../supabase/supabase.module';
import { Database, projectsType } from '@repo/types';
@Injectable()
export class ProjectsService {
  constructor(
    @Inject(SUPABASE_CLIENT)
    private readonly supabase: SupabaseClient<Database>,
  ) {}

  async findAll(): Promise<projectsType.projects[]> {
    const { data, error } = await this.supabase.from('projects').select('*');
    if (error) {
      throw new Error(error.message);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }
}
