import { Database, personalDataType } from '@repo/types';
import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from '../supabase/supabase.module';

@Injectable()
export class personalDataService {
  constructor(
    @Inject(SUPABASE_CLIENT)
    private readonly supabase: SupabaseClient<Database>,
  ) {}

  async getPersonalData(): Promise<
    personalDataType.PersonalDataWithoutPassword[]
  > {
    const { data, error } = await this.supabase
      .from('personalData')
      .select('name,email,profession,date,phone');
    if (error) {
      throw new Error(error.message);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }

  async update(
    personalData: personalDataType.PersonalDataUpdate,
  ): Promise<personalDataType.PersonalData> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, error } = await this.supabase
      .from('personalData')
      .update(personalData)
      .eq('name', 'Abdelmouhaimene Assila')
      .select()
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
