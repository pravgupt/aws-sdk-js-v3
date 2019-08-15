import { DeleteProjectInput } from "./DeleteProjectInput";
import { DeleteProjectOutput } from "./DeleteProjectOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteProject",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteProjectInput
  },
  output: {
    shape: DeleteProjectOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};