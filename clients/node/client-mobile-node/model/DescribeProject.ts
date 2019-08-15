import { DescribeProjectInput } from "./DescribeProjectInput";
import { DescribeProjectOutput } from "./DescribeProjectOutput";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProject",
  http: {
    method: "GET",
    requestUri: "/project"
  },
  input: {
    shape: DescribeProjectInput
  },
  output: {
    shape: DescribeProjectOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    }
  ]
};