import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PurchaseReservedCacheNodesOffering } from "../model/PurchaseReservedCacheNodesOffering";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseReservedCacheNodesOfferingInput } from "../types/PurchaseReservedCacheNodesOfferingInput";
import { PurchaseReservedCacheNodesOfferingOutput } from "../types/PurchaseReservedCacheNodesOfferingOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/PurchaseReservedCacheNodesOfferingInput";
export * from "../types/PurchaseReservedCacheNodesOfferingOutput";
export * from "../types/PurchaseReservedCacheNodesOfferingExceptionsUnion";

export class PurchaseReservedCacheNodesOfferingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseReservedCacheNodesOfferingInput,
      OutputTypesUnion,
      PurchaseReservedCacheNodesOfferingOutput,
      ElastiCacheResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PurchaseReservedCacheNodesOffering;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseReservedCacheNodesOfferingInput,
    PurchaseReservedCacheNodesOfferingOutput,
    _stream.Readable
  >();

  constructor(readonly input: PurchaseReservedCacheNodesOfferingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PurchaseReservedCacheNodesOfferingInput,
    PurchaseReservedCacheNodesOfferingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PurchaseReservedCacheNodesOfferingInput,
        PurchaseReservedCacheNodesOfferingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}