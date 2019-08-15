import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAccessKey } from "../model/DeleteAccessKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAccessKeyInput } from "../types/DeleteAccessKeyInput";
import { DeleteAccessKeyOutput } from "../types/DeleteAccessKeyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteAccessKeyInput";
export * from "../types/DeleteAccessKeyOutput";
export * from "../types/DeleteAccessKeyExceptionsUnion";

export class DeleteAccessKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAccessKeyInput,
      OutputTypesUnion,
      DeleteAccessKeyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAccessKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAccessKeyInput,
    DeleteAccessKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAccessKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAccessKeyInput, DeleteAccessKeyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAccessKeyInput, DeleteAccessKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}