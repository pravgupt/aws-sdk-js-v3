import { UpdateObjectAttributesInput } from "./UpdateObjectAttributesInput";
import { UpdateObjectAttributesOutput } from "./UpdateObjectAttributesOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LinkNameAlreadyInUseException } from "./LinkNameAlreadyInUseException";
import { FacetValidationException } from "./FacetValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateObjectAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateObjectAttributes",
  http: {
    method: "PUT",
    requestUri: "/amazonclouddirectory/2017-01-11/object/update"
  },
  input: {
    shape: UpdateObjectAttributesInput
  },
  output: {
    shape: UpdateObjectAttributesOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: RetryableConflictException
    },
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: DirectoryNotEnabledException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LinkNameAlreadyInUseException
    },
    {
      shape: FacetValidationException
    }
  ]
};