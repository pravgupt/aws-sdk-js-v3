import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DefineSuggester } from "../model/DefineSuggester";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DefineSuggesterInput } from "../types/DefineSuggesterInput";
import { DefineSuggesterOutput } from "../types/DefineSuggesterOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DefineSuggesterInput";
export * from "../types/DefineSuggesterOutput";
export * from "../types/DefineSuggesterExceptionsUnion";

export class DefineSuggesterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DefineSuggesterInput,
      OutputTypesUnion,
      DefineSuggesterOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DefineSuggester;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DefineSuggesterInput,
    DefineSuggesterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DefineSuggesterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<DefineSuggesterInput, DefineSuggesterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DefineSuggesterInput, DefineSuggesterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}