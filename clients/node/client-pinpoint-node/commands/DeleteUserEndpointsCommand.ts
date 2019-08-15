import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteUserEndpoints } from "../model/DeleteUserEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserEndpointsInput } from "../types/DeleteUserEndpointsInput";
import { DeleteUserEndpointsOutput } from "../types/DeleteUserEndpointsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteUserEndpointsInput";
export * from "../types/DeleteUserEndpointsOutput";
export * from "../types/DeleteUserEndpointsExceptionsUnion";

export class DeleteUserEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserEndpointsInput,
      OutputTypesUnion,
      DeleteUserEndpointsOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteUserEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserEndpointsInput,
    DeleteUserEndpointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteUserEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteUserEndpointsInput,
    DeleteUserEndpointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUserEndpointsInput, DeleteUserEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}