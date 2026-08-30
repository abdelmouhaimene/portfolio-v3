import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const SUPABASE_CLIENT = 'SUPABASE_CLIENT';

@Global() // Makes SupabaseClient available app-wide without re-importing
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: SUPABASE_CLIENT,
      useFactory: (configService: ConfigService): SupabaseClient => {
        const url = configService.get<string>('SUPABASE_URL');
        const key = configService.get<string>('SUPABASE_KEY');

        if (!url || !key) {
          throw new Error(
            `Supabase initialization failed. URL: "${url}", Key: "${key ? 'EXISTS' : 'MISSING'}"`,
          );
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return createClient(url, key, {
          auth: {
            persistSession: false, // Essential for stateless server side APIs
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [SUPABASE_CLIENT],
})
export class SupabaseModule {}
