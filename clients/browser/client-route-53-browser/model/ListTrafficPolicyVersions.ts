import { ListTrafficPolicyVersionsInput } from "./ListTrafficPolicyVersionsInput";
import { ListTrafficPolicyVersionsOutput } from "./ListTrafficPolicyVersionsOutput";
import { InvalidInput } from "./InvalidInput";
import { NoSuchTrafficPolicy } from "./NoSuchTrafficPolicy";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTrafficPolicyVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTrafficPolicyVersions",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/trafficpolicies/{Id}/versions"
  },
  input: {
    shape: ListTrafficPolicyVersionsInput
  },
  output: {
    shape: ListTrafficPolicyVersionsOutput
  },
  errors: [
    {
      shape: InvalidInput
    },
    {
      shape: NoSuchTrafficPolicy
    }
  ]
};