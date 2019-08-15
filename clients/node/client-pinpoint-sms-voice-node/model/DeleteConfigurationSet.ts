import { DeleteConfigurationSetInput } from "./DeleteConfigurationSetInput";
import { DeleteConfigurationSetOutput } from "./DeleteConfigurationSetOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteConfigurationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationSet",
  http: {
    method: "DELETE",
    requestUri: "/v1/sms-voice/configuration-sets/{ConfigurationSetName}"
  },
  input: {
    shape: DeleteConfigurationSetInput
  },
  output: {
    shape: DeleteConfigurationSetOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};