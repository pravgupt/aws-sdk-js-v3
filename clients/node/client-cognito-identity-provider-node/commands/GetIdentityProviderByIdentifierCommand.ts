import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_region_provider from "@aws-sdk/region-provider";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetIdentityProviderByIdentifier } from "../model/GetIdentityProviderByIdentifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityProviderByIdentifierInput } from "../types/GetIdentityProviderByIdentifierInput";
import { GetIdentityProviderByIdentifierOutput } from "../types/GetIdentityProviderByIdentifierOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetIdentityProviderByIdentifierInput";
export * from "../types/GetIdentityProviderByIdentifierOutput";
export * from "../types/GetIdentityProviderByIdentifierExceptionsUnion";

export class GetIdentityProviderByIdentifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityProviderByIdentifierInput,
      OutputTypesUnion,
      GetIdentityProviderByIdentifierOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetIdentityProviderByIdentifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityProviderByIdentifierInput,
    GetIdentityProviderByIdentifierOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetIdentityProviderByIdentifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityProviderByIdentifierInput,
    GetIdentityProviderByIdentifierOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        InputTypesUnion,
        OutputTypesUnion,
        _stream.Readable
      >(this.config.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<
        GetIdentityProviderByIdentifierInput,
        GetIdentityProviderByIdentifierOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}