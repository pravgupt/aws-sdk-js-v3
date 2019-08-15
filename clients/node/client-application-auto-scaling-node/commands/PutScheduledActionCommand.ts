import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutScheduledAction } from "../model/PutScheduledAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutScheduledActionInput } from "../types/PutScheduledActionInput";
import { PutScheduledActionOutput } from "../types/PutScheduledActionOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/PutScheduledActionInput";
export * from "../types/PutScheduledActionOutput";
export * from "../types/PutScheduledActionExceptionsUnion";

export class PutScheduledActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutScheduledActionInput,
      OutputTypesUnion,
      PutScheduledActionOutput,
      ApplicationAutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutScheduledAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutScheduledActionInput,
    PutScheduledActionOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutScheduledActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutScheduledActionInput,
    PutScheduledActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutScheduledActionInput, PutScheduledActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}