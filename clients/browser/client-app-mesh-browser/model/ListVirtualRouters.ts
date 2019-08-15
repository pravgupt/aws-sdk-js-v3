import { ListVirtualRoutersInput } from "./ListVirtualRoutersInput";
import { ListVirtualRoutersOutput } from "./ListVirtualRoutersOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListVirtualRouters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVirtualRouters",
  http: {
    method: "GET",
    requestUri: "/v20190125/meshes/{meshName}/virtualRouters"
  },
  input: {
    shape: ListVirtualRoutersInput
  },
  output: {
    shape: ListVirtualRoutersOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};