import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteEventBus } from "../model/DeleteEventBus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEventBusInput } from "../types/DeleteEventBusInput";
import { DeleteEventBusOutput } from "../types/DeleteEventBusOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/DeleteEventBusInput";
export * from "../types/DeleteEventBusOutput";
export * from "../types/DeleteEventBusExceptionsUnion";

export class DeleteEventBusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEventBusInput,
      OutputTypesUnion,
      DeleteEventBusOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteEventBus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEventBusInput,
    DeleteEventBusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteEventBusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteEventBusInput, DeleteEventBusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEventBusInput, DeleteEventBusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}