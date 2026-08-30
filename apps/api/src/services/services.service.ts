import { Database, servicesType } from '@repo/types';
import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from '../supabase/supabase.module';

@Injectable()
export class ServicesService {
  constructor(
    @Inject(SUPABASE_CLIENT)
    private readonly supabase: SupabaseClient<Database>,
  ) {}
  async findAll(): Promise<servicesType.services[]> {
    const { data, error } = await this.supabase.from('services').select('*');
    if (error) {
      throw new Error(error.message);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  }
}
