import { Test, TestingModule } from '@nestjs/testing';
import { GetauthordataController } from './getauthordata.controller';

describe('GetauthordataController', () => {
  let controller: GetauthordataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetauthordataController],
    }).compile();

    controller = module.get<GetauthordataController>(GetauthordataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
