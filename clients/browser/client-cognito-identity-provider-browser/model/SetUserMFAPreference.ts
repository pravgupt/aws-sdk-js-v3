import { SetUserMFAPreferenceInput } from "./SetUserMFAPreferenceInput";
import { SetUserMFAPreferenceOutput } from "./SetUserMFAPreferenceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetUserMFAPreference: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetUserMFAPreference",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetUserMFAPreferenceInput
  },
  output: {
    shape: SetUserMFAPreferenceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: PasswordResetRequiredException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: UserNotConfirmedException
    },
    {
      shape: InternalErrorException
    }
  ]
};