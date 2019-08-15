import { CancelJobInput } from "./CancelJobInput";
import { CancelJobOutput } from "./CancelJobOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelJob",
  http: {
    method: "DELETE",
    requestUri: "/2017-08-29/jobs/{id}"
  },
  input: {
    shape: CancelJobInput
  },
  output: {
    shape: CancelJobOutput
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