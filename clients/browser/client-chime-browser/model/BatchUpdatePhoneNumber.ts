import { BatchUpdatePhoneNumberInput } from "./BatchUpdatePhoneNumberInput";
import { BatchUpdatePhoneNumberOutput } from "./BatchUpdatePhoneNumberOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const BatchUpdatePhoneNumber: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchUpdatePhoneNumber",
  http: {
    method: "POST",
    requestUri: "/phone-numbers?operation=batch-update"
  },
  input: {
    shape: BatchUpdatePhoneNumberInput
  },
  output: {
    shape: BatchUpdatePhoneNumberOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ThrottledClientException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};