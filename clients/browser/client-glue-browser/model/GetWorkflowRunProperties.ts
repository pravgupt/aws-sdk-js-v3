import { GetWorkflowRunPropertiesInput } from "./GetWorkflowRunPropertiesInput";
import { GetWorkflowRunPropertiesOutput } from "./GetWorkflowRunPropertiesOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetWorkflowRunProperties: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWorkflowRunProperties",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWorkflowRunPropertiesInput
  },
  output: {
    shape: GetWorkflowRunPropertiesOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};