import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCluster } from "../model/DescribeCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterInput } from "../types/DescribeClusterInput";
import { DescribeClusterOutput } from "../types/DescribeClusterOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/DescribeClusterInput";
export * from "../types/DescribeClusterOutput";
export * from "../types/DescribeClusterExceptionsUnion";

export class DescribeClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterInput,
      OutputTypesUnion,
      DescribeClusterOutput,
      KafkaResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterInput,
    DescribeClusterOutput,
    Blob
  >();

  constructor(readonly input: DescribeClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeClusterInput, DescribeClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClusterInput, DescribeClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}