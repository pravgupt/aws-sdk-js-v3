import { GetAddressBookInput } from "./GetAddressBookInput";
import { GetAddressBookOutput } from "./GetAddressBookOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAddressBook: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAddressBook",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetAddressBookInput
  },
  output: {
    shape: GetAddressBookOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};