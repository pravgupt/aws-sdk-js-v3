import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetJobRuns } from "../model/GetJobRuns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobRunsInput } from "../types/GetJobRunsInput";
import { GetJobRunsOutput } from "../types/GetJobRunsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetJobRunsInput";
export * from "../types/GetJobRunsOutput";
export * from "../types/GetJobRunsExceptionsUnion";

export class GetJobRunsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobRunsInput,
      OutputTypesUnion,
      GetJobRunsOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetJobRuns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobRunsInput,
    GetJobRunsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetJobRunsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobRunsInput, GetJobRunsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobRunsInput, GetJobRunsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}