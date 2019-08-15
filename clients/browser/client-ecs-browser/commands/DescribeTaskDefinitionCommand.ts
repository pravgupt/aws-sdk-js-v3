import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTaskDefinition } from "../model/DescribeTaskDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTaskDefinitionInput } from "../types/DescribeTaskDefinitionInput";
import { DescribeTaskDefinitionOutput } from "../types/DescribeTaskDefinitionOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DescribeTaskDefinitionInput";
export * from "../types/DescribeTaskDefinitionOutput";
export * from "../types/DescribeTaskDefinitionExceptionsUnion";

export class DescribeTaskDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTaskDefinitionInput,
      OutputTypesUnion,
      DescribeTaskDefinitionOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTaskDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTaskDefinitionInput,
    DescribeTaskDefinitionOutput,
    Blob
  >();

  constructor(readonly input: DescribeTaskDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTaskDefinitionInput,
    DescribeTaskDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTaskDefinitionInput, DescribeTaskDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}