import { Database, skillsType } from '@repo/types';
import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from '../supabase/supabase.module';

@Injectable()
export class SkillsService {
  constructor(
    @Inject(SUPABASE_CLIENT)
    private readonly supabase: SupabaseClient<Database>,
  ) {}
  async findAll(): Promise<skillsType.skills[]> {
    const { data, error } = await this.supabase.from('skills').select('*');
    if (error) {
      throw new Error(error.message);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  // findAll() {
  //   return `This action returns all skills`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} skill`;
  // }

  // update(id: number, updateSkillDto: UpdateSkillDto) {
  //   return `This action updates a #${id} skill`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} skill`;
  // }
}
