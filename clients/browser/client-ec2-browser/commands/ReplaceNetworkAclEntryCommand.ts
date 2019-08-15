import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReplaceNetworkAclEntry } from "../model/ReplaceNetworkAclEntry";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReplaceNetworkAclEntryInput } from "../types/ReplaceNetworkAclEntryInput";
import { ReplaceNetworkAclEntryOutput } from "../types/ReplaceNetworkAclEntryOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReplaceNetworkAclEntryInput";
export * from "../types/ReplaceNetworkAclEntryOutput";
export * from "../types/ReplaceNetworkAclEntryExceptionsUnion";

export class ReplaceNetworkAclEntryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReplaceNetworkAclEntryInput,
      OutputTypesUnion,
      ReplaceNetworkAclEntryOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ReplaceNetworkAclEntry;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReplaceNetworkAclEntryInput,
    ReplaceNetworkAclEntryOutput,
    Blob
  >();

  constructor(readonly input: ReplaceNetworkAclEntryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReplaceNetworkAclEntryInput,
    ReplaceNetworkAclEntryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReplaceNetworkAclEntryInput, ReplaceNetworkAclEntryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}