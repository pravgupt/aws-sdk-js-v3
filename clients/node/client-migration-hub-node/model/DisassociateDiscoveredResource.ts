import { DisassociateDiscoveredResourceInput } from "./DisassociateDiscoveredResourceInput";
import { DisassociateDiscoveredResourceOutput } from "./DisassociateDiscoveredResourceOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DryRunOperation } from "./DryRunOperation";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateDiscoveredResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateDiscoveredResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateDiscoveredResourceInput
  },
  output: {
    shape: DisassociateDiscoveredResourceOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: DryRunOperation
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};