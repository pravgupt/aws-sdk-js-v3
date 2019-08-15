import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagResources } from "../model/UntagResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagResourcesInput } from "../types/UntagResourcesInput";
import { UntagResourcesOutput } from "../types/UntagResourcesOutput";
import { ResourceGroupsTaggingAPIResolvedConfiguration } from "../ResourceGroupsTaggingAPIConfiguration";
export * from "../types/UntagResourcesInput";
export * from "../types/UntagResourcesOutput";
export * from "../types/UntagResourcesExceptionsUnion";

export class UntagResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagResourcesInput,
      OutputTypesUnion,
      UntagResourcesOutput,
      ResourceGroupsTaggingAPIResolvedConfiguration,
      Blob
    > {
  readonly model = UntagResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagResourcesInput,
    UntagResourcesOutput,
    Blob
  >();

  constructor(readonly input: UntagResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ResourceGroupsTaggingAPIResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagResourcesInput, UntagResourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagResourcesInput, UntagResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}