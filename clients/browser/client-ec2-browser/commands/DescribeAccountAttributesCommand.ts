import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAccountAttributes } from "../model/DescribeAccountAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAccountAttributesInput } from "../types/DescribeAccountAttributesInput";
import { DescribeAccountAttributesOutput } from "../types/DescribeAccountAttributesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeAccountAttributesInput";
export * from "../types/DescribeAccountAttributesOutput";
export * from "../types/DescribeAccountAttributesExceptionsUnion";

export class DescribeAccountAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAccountAttributesInput,
      OutputTypesUnion,
      DescribeAccountAttributesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAccountAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAccountAttributesInput,
    DescribeAccountAttributesOutput,
    Blob
  >();

  constructor(readonly input: DescribeAccountAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAccountAttributesInput,
    DescribeAccountAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAccountAttributesInput, DescribeAccountAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}