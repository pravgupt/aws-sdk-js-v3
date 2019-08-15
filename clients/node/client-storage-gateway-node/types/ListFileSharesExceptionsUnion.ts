import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type ListFileSharesExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;