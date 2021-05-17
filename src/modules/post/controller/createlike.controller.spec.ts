import { Test, TestingModule } from '@nestjs/testing';
import { CreatelikeController } from './createlike.controller';

describe('CreatelikeController', () => {
  let controller: CreatelikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatelikeController],
    }).compile();

    controller = module.get<CreatelikeController>(CreatelikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
