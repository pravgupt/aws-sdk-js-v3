import { ListConfigurationsInput } from "./ListConfigurationsInput";
import { ListConfigurationsOutput } from "./ListConfigurationsOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListConfigurations",
  http: {
    method: "GET",
    requestUri: "/v1/configurations"
  },
  input: {
    shape: ListConfigurationsInput
  },
  output: {
    shape: ListConfigurationsOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};