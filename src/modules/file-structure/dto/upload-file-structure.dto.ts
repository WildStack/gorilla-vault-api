import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { IsMulterFile } from '../../../decorator/class-validator.decorator';
import { constants } from '../../../common/constants';
import { fileStructureHelper } from '../file-structure.helper';

/**
 * Custom validation: dto will only containt both parentId and rootParentId or none
 */
export class UploadFileStructureDto {
  @IsNotEmpty()
  @IsMulterFile({
    fileTypes: Object.values(fileStructureHelper.fileTypeEnumToRawMime),
    maxSize: constants.singleFileMaxSize,
  })
  file: Express.Multer.File;

  @IsOptional()
  @IsBoolean()
  replaceExisting?: boolean;

  @IsOptional()
  @IsInt()
  parentId?: number;

  @IsOptional()
  @IsInt()
  rootParentId?: number;
}