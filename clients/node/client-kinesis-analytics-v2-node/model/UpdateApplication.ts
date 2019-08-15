import { UpdateApplicationInput } from "./UpdateApplicationInput";
import { UpdateApplicationOutput } from "./UpdateApplicationOutput";
import { CodeValidationException } from "./CodeValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidApplicationConfigurationException } from "./InvalidApplicationConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateApplicationInput
  },
  output: {
    shape: UpdateApplicationOutput
  },
  errors: [
    {
      shape: CodeValidationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidApplicationConfigurationException
    }
  ]
};