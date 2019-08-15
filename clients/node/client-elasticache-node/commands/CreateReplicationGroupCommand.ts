import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateReplicationGroup } from "../model/CreateReplicationGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReplicationGroupInput } from "../types/CreateReplicationGroupInput";
import { CreateReplicationGroupOutput } from "../types/CreateReplicationGroupOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/CreateReplicationGroupInput";
export * from "../types/CreateReplicationGroupOutput";
export * from "../types/CreateReplicationGroupExceptionsUnion";

export class CreateReplicationGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReplicationGroupInput,
      OutputTypesUnion,
      CreateReplicationGroupOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateReplicationGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReplicationGroupInput,
    CreateReplicationGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateReplicationGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateReplicationGroupInput,
    CreateReplicationGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateReplicationGroupInput, CreateReplicationGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}