import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAccountSetting } from "../model/DeleteAccountSetting";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAccountSettingInput } from "../types/DeleteAccountSettingInput";
import { DeleteAccountSettingOutput } from "../types/DeleteAccountSettingOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DeleteAccountSettingInput";
export * from "../types/DeleteAccountSettingOutput";
export * from "../types/DeleteAccountSettingExceptionsUnion";

export class DeleteAccountSettingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAccountSettingInput,
      OutputTypesUnion,
      DeleteAccountSettingOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAccountSetting;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAccountSettingInput,
    DeleteAccountSettingOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAccountSettingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAccountSettingInput,
    DeleteAccountSettingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAccountSettingInput, DeleteAccountSettingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}