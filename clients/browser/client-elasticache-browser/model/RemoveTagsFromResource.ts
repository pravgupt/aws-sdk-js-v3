import { RemoveTagsFromResourceInput } from "./RemoveTagsFromResourceInput";
import { RemoveTagsFromResourceOutput } from "./RemoveTagsFromResourceOutput";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { InvalidARNFault } from "./InvalidARNFault";
import { TagNotFoundFault } from "./TagNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveTagsFromResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTagsFromResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsFromResourceInput
  },
  output: {
    shape: RemoveTagsFromResourceOutput,
    resultWrapper: "RemoveTagsFromResourceResult"
  },
  errors: [
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: SnapshotNotFoundFault
    },
    {
      shape: InvalidARNFault
    },
    {
      shape: TagNotFoundFault
    }
  ]
};