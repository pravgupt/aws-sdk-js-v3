import { DeletePolicyVersionInput } from "./DeletePolicyVersionInput";
import { DeletePolicyVersionOutput } from "./DeletePolicyVersionOutput";
import { DeleteConflictException } from "./DeleteConflictException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePolicyVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePolicyVersion",
  http: {
    method: "DELETE",
    requestUri: "/policies/{policyName}/version/{policyVersionId}"
  },
  input: {
    shape: DeletePolicyVersionInput
  },
  output: {
    shape: DeletePolicyVersionOutput
  },
  errors: [
    {
      shape: DeleteConflictException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};