import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from '../supabase/supabase.module';
import { Database, reviewType } from '@repo/types';

@Injectable()
export class ReviewsService {
  constructor(
    @Inject(SUPABASE_CLIENT)
    private readonly supabase: SupabaseClient<Database>,
  ) {}
  async findAll(): Promise<reviewType.review[]> {
    const { data, error } = await this.supabase.from('review').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
