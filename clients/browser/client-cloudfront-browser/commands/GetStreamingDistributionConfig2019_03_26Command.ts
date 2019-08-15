import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetStreamingDistributionConfig2019_03_26 } from "../model/GetStreamingDistributionConfig2019_03_26";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetStreamingDistributionConfig2019_03_26Input } from "../types/GetStreamingDistributionConfig2019_03_26Input";
import { GetStreamingDistributionConfig2019_03_26Output } from "../types/GetStreamingDistributionConfig2019_03_26Output";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetStreamingDistributionConfig2019_03_26Input";
export * from "../types/GetStreamingDistributionConfig2019_03_26Output";
export * from "../types/GetStreamingDistributionConfig2019_03_26ExceptionsUnion";

export class GetStreamingDistributionConfig2019_03_26Command
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetStreamingDistributionConfig2019_03_26Input,
      OutputTypesUnion,
      GetStreamingDistributionConfig2019_03_26Output,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = GetStreamingDistributionConfig2019_03_26;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetStreamingDistributionConfig2019_03_26Input,
    GetStreamingDistributionConfig2019_03_26Output,
    Blob
  >();

  constructor(readonly input: GetStreamingDistributionConfig2019_03_26Input) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetStreamingDistributionConfig2019_03_26Input,
    GetStreamingDistributionConfig2019_03_26Output
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetStreamingDistributionConfig2019_03_26Input,
        GetStreamingDistributionConfig2019_03_26Output
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}