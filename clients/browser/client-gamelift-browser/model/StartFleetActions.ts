import { StartFleetActionsInput } from "./StartFleetActionsInput";
import { StartFleetActionsOutput } from "./StartFleetActionsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartFleetActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartFleetActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartFleetActionsInput
  },
  output: {
    shape: StartFleetActionsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    }
  ]
};