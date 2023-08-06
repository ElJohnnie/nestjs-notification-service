import { Body, Controller, Get, Post } from '@nestjs/common';
// import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

import { randomUUID } from 'node:crypto';

// inversão de dependências recebendo os paramêtros por um construtor
@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  // passando decorators como parâmetros
  @Post()
  async create(@Body() body: any) {
    const { recipientId, content, category } = body;
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content: category,
        category: content,
        recipientId: recipientId,
      },
    });
  }
}
