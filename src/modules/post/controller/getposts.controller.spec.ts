import { Test, TestingModule } from '@nestjs/testing';
import { GetpostsController } from './getposts.controller';

describe('GetpostsController', () => {
  let controller: GetpostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetpostsController],
    }).compile();

    controller = module.get<GetpostsController>(GetpostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
