import { UpdateRateBasedRuleInput } from "./UpdateRateBasedRuleInput";
import { UpdateRateBasedRuleOutput } from "./UpdateRateBasedRuleOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRateBasedRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRateBasedRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRateBasedRuleInput
  },
  output: {
    shape: UpdateRateBasedRuleOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFInvalidOperationException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFNonexistentContainerException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFReferencedItemException
    },
    {
      shape: WAFLimitsExceededException
    }
  ]
};