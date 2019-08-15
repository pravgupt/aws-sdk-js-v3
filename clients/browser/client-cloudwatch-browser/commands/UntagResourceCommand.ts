import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagResource } from "../model/UntagResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagResourceInput } from "../types/UntagResourceInput";
import { UntagResourceOutput } from "../types/UntagResourceOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/UntagResourceInput";
export * from "../types/UntagResourceOutput";
export * from "../types/UntagResourceExceptionsUnion";

export class UntagResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagResourceInput,
      OutputTypesUnion,
      UntagResourceOutput,
      CloudWatchResolvedConfiguration,
      Blob
    > {
  readonly model = UntagResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagResourceInput,
    UntagResourceOutput,
    Blob
  >();

  constructor(readonly input: UntagResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagResourceInput, UntagResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagResourceInput, UntagResourceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}