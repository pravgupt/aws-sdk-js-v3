import { UpdatePresetInput } from "./UpdatePresetInput";
import { UpdatePresetOutput } from "./UpdatePresetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePreset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePreset",
  http: {
    method: "PUT",
    requestUri: "/2017-08-29/presets/{name}"
  },
  input: {
    shape: UpdatePresetInput
  },
  output: {
    shape: UpdatePresetOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};