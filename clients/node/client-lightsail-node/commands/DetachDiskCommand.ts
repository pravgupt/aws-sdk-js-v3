import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachDisk } from "../model/DetachDisk";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachDiskInput } from "../types/DetachDiskInput";
import { DetachDiskOutput } from "../types/DetachDiskOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DetachDiskInput";
export * from "../types/DetachDiskOutput";
export * from "../types/DetachDiskExceptionsUnion";

export class DetachDiskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachDiskInput,
      OutputTypesUnion,
      DetachDiskOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachDisk;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachDiskInput,
    DetachDiskOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachDiskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachDiskInput, DetachDiskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachDiskInput, DetachDiskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}