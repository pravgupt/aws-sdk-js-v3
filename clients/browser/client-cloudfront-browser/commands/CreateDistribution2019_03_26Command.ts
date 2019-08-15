import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDistribution2019_03_26 } from "../model/CreateDistribution2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDistribution2019_03_26Input } from "../types/CreateDistribution2019_03_26Input";
import { CreateDistribution2019_03_26Output } from "../types/CreateDistribution2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateDistribution2019_03_26Input";
export * from "../types/CreateDistribution2019_03_26Output";
export * from "../types/CreateDistribution2019_03_26ExceptionsUnion";

export class CreateDistribution2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDistribution2019_03_26Input,
      OutputTypesUnion,
      CreateDistribution2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDistribution2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDistribution2019_03_26Input,
    CreateDistribution2019_03_26Output,
    Blob
  >();

  constructor(readonly input: CreateDistribution2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDistribution2019_03_26Input,
    CreateDistribution2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDistribution2019_03_26Input,
        CreateDistribution2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}