import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTagsForResource2019_03_26 } from "../model/ListTagsForResource2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForResource2019_03_26Input } from "../types/ListTagsForResource2019_03_26Input";
import { ListTagsForResource2019_03_26Output } from "../types/ListTagsForResource2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/ListTagsForResource2019_03_26Input";
export * from "../types/ListTagsForResource2019_03_26Output";
export * from "../types/ListTagsForResource2019_03_26ExceptionsUnion";

export class ListTagsForResource2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForResource2019_03_26Input,
      OutputTypesUnion,
      ListTagsForResource2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = ListTagsForResource2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForResource2019_03_26Input,
    ListTagsForResource2019_03_26Output,
    Blob
  >();

  constructor(readonly input: ListTagsForResource2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTagsForResource2019_03_26Input,
    ListTagsForResource2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListTagsForResource2019_03_26Input,
        ListTagsForResource2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}