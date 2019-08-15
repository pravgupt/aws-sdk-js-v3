import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBackupVaultNotifications } from "../model/GetBackupVaultNotifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBackupVaultNotificationsInput } from "../types/GetBackupVaultNotificationsInput";
import { GetBackupVaultNotificationsOutput } from "../types/GetBackupVaultNotificationsOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/GetBackupVaultNotificationsInput";
export * from "../types/GetBackupVaultNotificationsOutput";
export * from "../types/GetBackupVaultNotificationsExceptionsUnion";

export class GetBackupVaultNotificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBackupVaultNotificationsInput,
      OutputTypesUnion,
      GetBackupVaultNotificationsOutput,
      BackupResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBackupVaultNotifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBackupVaultNotificationsInput,
    GetBackupVaultNotificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBackupVaultNotificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBackupVaultNotificationsInput,
    GetBackupVaultNotificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetBackupVaultNotificationsInput,
        GetBackupVaultNotificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}