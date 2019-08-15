import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSqlInjectionMatchSet } from "../model/CreateSqlInjectionMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSqlInjectionMatchSetInput } from "../types/CreateSqlInjectionMatchSetInput";
import { CreateSqlInjectionMatchSetOutput } from "../types/CreateSqlInjectionMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateSqlInjectionMatchSetInput";
export * from "../types/CreateSqlInjectionMatchSetOutput";
export * from "../types/CreateSqlInjectionMatchSetExceptionsUnion";

export class CreateSqlInjectionMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSqlInjectionMatchSetInput,
      OutputTypesUnion,
      CreateSqlInjectionMatchSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSqlInjectionMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSqlInjectionMatchSetInput,
    CreateSqlInjectionMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSqlInjectionMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSqlInjectionMatchSetInput,
    CreateSqlInjectionMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSqlInjectionMatchSetInput,
        CreateSqlInjectionMatchSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}