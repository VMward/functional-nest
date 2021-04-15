import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PostService, UserService, PrismaService],
})
export class AppModule {}
