import { Test, TestingModule } from '@nestjs/testing';
import { CreatecommentController } from './createcomment.controller';

describe('CreatecommentController', () => {
  let controller: CreatecommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatecommentController],
    }).compile();

    controller = module.get<CreatecommentController>(CreatecommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
