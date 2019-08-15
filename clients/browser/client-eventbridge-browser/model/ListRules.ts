import { ListRulesInput } from "./ListRulesInput";
import { ListRulesOutput } from "./ListRulesOutput";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRules: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRules",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRulesInput
  },
  output: {
    shape: ListRulesOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};