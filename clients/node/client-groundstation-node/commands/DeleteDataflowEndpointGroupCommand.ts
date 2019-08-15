import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDataflowEndpointGroup } from "../model/DeleteDataflowEndpointGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDataflowEndpointGroupInput } from "../types/DeleteDataflowEndpointGroupInput";
import { DeleteDataflowEndpointGroupOutput } from "../types/DeleteDataflowEndpointGroupOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/DeleteDataflowEndpointGroupInput";
export * from "../types/DeleteDataflowEndpointGroupOutput";
export * from "../types/DeleteDataflowEndpointGroupExceptionsUnion";

export class DeleteDataflowEndpointGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDataflowEndpointGroupInput,
      OutputTypesUnion,
      DeleteDataflowEndpointGroupOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDataflowEndpointGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDataflowEndpointGroupInput,
    DeleteDataflowEndpointGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDataflowEndpointGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDataflowEndpointGroupInput,
    DeleteDataflowEndpointGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDataflowEndpointGroupInput,
        DeleteDataflowEndpointGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}