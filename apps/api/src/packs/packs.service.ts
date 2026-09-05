import { Database, packsType, taskPacksType } from '@repo/types';
import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from '../supabase/supabase.module';

@Injectable()
export class PacksService {
  constructor(
    @Inject(SUPABASE_CLIENT)
    private readonly supabase: SupabaseClient<Database>,
  ) {}
  async findAllPacks(): Promise<packsType.Packs[]> {
    const { data, error } = await this.supabase.from('Packs').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
  async findAllTasks(): Promise<taskPacksType.pack_task[]> {
    const { data, error } = await this.supabase.from('pack_task').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
  async findTaskByPack(pack: number): Promise<string[]> {
    const { data, error } = await this.supabase
      .from('pack_task')
      .select(
        `
        task (
          name
        )
      `,
      )
      .eq('pack', pack);
    if (error) {
      throw new Error(error.message);
    }
    const tasks: taskPacksType.TaskName[] = data;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return tasks.map((item) => item.task.name);
  }
}
