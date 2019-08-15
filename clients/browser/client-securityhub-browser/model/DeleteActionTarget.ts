import { DeleteActionTargetInput } from "./DeleteActionTargetInput";
import { DeleteActionTargetOutput } from "./DeleteActionTargetOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteActionTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteActionTarget",
  http: {
    method: "DELETE",
    requestUri: "/actionTargets/{ActionTargetArn+}"
  },
  input: {
    shape: DeleteActionTargetInput
  },
  output: {
    shape: DeleteActionTargetOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};