import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { personalDataModule } from './personal-data/personal-data.module';
import { ServicesModule } from './services/services.module';
import { SkillsModule } from './skills/skills.module';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        path.resolve(process.cwd(), 'apps/api/.env'),
        path.resolve(process.cwd(), '.env'),
      ],
    }),
    SupabaseModule,
    ProjectsModule,
    personalDataModule,
    ServicesModule,
    SkillsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
