import { DetachInstancesFromLoadBalancerInput } from "./DetachInstancesFromLoadBalancerInput";
import { DetachInstancesFromLoadBalancerOutput } from "./DetachInstancesFromLoadBalancerOutput";
import { ServiceException } from "./ServiceException";
import { InvalidInputException } from "./InvalidInputException";
import { NotFoundException } from "./NotFoundException";
import { OperationFailureException } from "./OperationFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { AccountSetupInProgressException } from "./AccountSetupInProgressException";
import { UnauthenticatedException } from "./UnauthenticatedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetachInstancesFromLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachInstancesFromLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachInstancesFromLoadBalancerInput
  },
  output: {
    shape: DetachInstancesFromLoadBalancerOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: NotFoundException
    },
    {
      shape: OperationFailureException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: AccountSetupInProgressException
    },
    {
      shape: UnauthenticatedException
    }
  ]
};