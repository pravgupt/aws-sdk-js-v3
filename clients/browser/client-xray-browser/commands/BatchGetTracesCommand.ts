import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetTraces } from "../model/BatchGetTraces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetTracesInput } from "../types/BatchGetTracesInput";
import { BatchGetTracesOutput } from "../types/BatchGetTracesOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/BatchGetTracesInput";
export * from "../types/BatchGetTracesOutput";
export * from "../types/BatchGetTracesExceptionsUnion";

export class BatchGetTracesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetTracesInput,
      OutputTypesUnion,
      BatchGetTracesOutput,
      XRayResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetTraces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetTracesInput,
    BatchGetTracesOutput,
    Blob
  >();

  constructor(readonly input: BatchGetTracesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetTracesInput, BatchGetTracesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetTracesInput, BatchGetTracesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}