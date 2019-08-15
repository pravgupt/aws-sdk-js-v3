import { UpdateContainerInstancesStateInput } from "./UpdateContainerInstancesStateInput";
import { UpdateContainerInstancesStateOutput } from "./UpdateContainerInstancesStateOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateContainerInstancesState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateContainerInstancesState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateContainerInstancesStateInput
  },
  output: {
    shape: UpdateContainerInstancesStateOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClusterNotFoundException
    }
  ]
};