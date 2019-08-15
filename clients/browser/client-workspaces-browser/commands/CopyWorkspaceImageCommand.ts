import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CopyWorkspaceImage } from "../model/CopyWorkspaceImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyWorkspaceImageInput } from "../types/CopyWorkspaceImageInput";
import { CopyWorkspaceImageOutput } from "../types/CopyWorkspaceImageOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/CopyWorkspaceImageInput";
export * from "../types/CopyWorkspaceImageOutput";
export * from "../types/CopyWorkspaceImageExceptionsUnion";

export class CopyWorkspaceImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyWorkspaceImageInput,
      OutputTypesUnion,
      CopyWorkspaceImageOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = CopyWorkspaceImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyWorkspaceImageInput,
    CopyWorkspaceImageOutput,
    Blob
  >();

  constructor(readonly input: CopyWorkspaceImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CopyWorkspaceImageInput,
    CopyWorkspaceImageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyWorkspaceImageInput, CopyWorkspaceImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}