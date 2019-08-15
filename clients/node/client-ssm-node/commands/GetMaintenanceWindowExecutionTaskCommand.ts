import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMaintenanceWindowExecutionTask } from "../model/GetMaintenanceWindowExecutionTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMaintenanceWindowExecutionTaskInput } from "../types/GetMaintenanceWindowExecutionTaskInput";
import { GetMaintenanceWindowExecutionTaskOutput } from "../types/GetMaintenanceWindowExecutionTaskOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetMaintenanceWindowExecutionTaskInput";
export * from "../types/GetMaintenanceWindowExecutionTaskOutput";
export * from "../types/GetMaintenanceWindowExecutionTaskExceptionsUnion";

export class GetMaintenanceWindowExecutionTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMaintenanceWindowExecutionTaskInput,
      OutputTypesUnion,
      GetMaintenanceWindowExecutionTaskOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMaintenanceWindowExecutionTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMaintenanceWindowExecutionTaskInput,
    GetMaintenanceWindowExecutionTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMaintenanceWindowExecutionTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMaintenanceWindowExecutionTaskInput,
    GetMaintenanceWindowExecutionTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetMaintenanceWindowExecutionTaskInput,
        GetMaintenanceWindowExecutionTaskOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}