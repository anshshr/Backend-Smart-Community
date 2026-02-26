
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model PurchaseRequest
 * 
 */
export type PurchaseRequest = $Result.DefaultSelection<Prisma.$PurchaseRequestPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model NotificationUser
 * 
 */
export type NotificationUser = $Result.DefaultSelection<Prisma.$NotificationUserPayload>
/**
 * Model FCMTokens
 * 
 */
export type FCMTokens = $Result.DefaultSelection<Prisma.$FCMTokensPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserVisibility: {
  PUBLIC: 'PUBLIC',
  AFTER_REQUEST: 'AFTER_REQUEST',
  AFTER_ACCEPT: 'AFTER_ACCEPT'
};

export type UserVisibility = (typeof UserVisibility)[keyof typeof UserVisibility]


export const ProductStatus: {
  AVAILABLE: 'AVAILABLE',
  REQUESTED: 'REQUESTED',
  SOLD: 'SOLD'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const RequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type UserVisibility = $Enums.UserVisibility

export const UserVisibility: typeof $Enums.UserVisibility

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseRequest`: Exposes CRUD operations for the **PurchaseRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseRequests
    * const purchaseRequests = await prisma.purchaseRequest.findMany()
    * ```
    */
  get purchaseRequest(): Prisma.PurchaseRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationUser`: Exposes CRUD operations for the **NotificationUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationUsers
    * const notificationUsers = await prisma.notificationUser.findMany()
    * ```
    */
  get notificationUser(): Prisma.NotificationUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fCMTokens`: Exposes CRUD operations for the **FCMTokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FCMTokens
    * const fCMTokens = await prisma.fCMTokens.findMany()
    * ```
    */
  get fCMTokens(): Prisma.FCMTokensDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    Purchase: 'Purchase',
    PurchaseRequest: 'PurchaseRequest',
    Chat: 'Chat',
    Notification: 'Notification',
    NotificationUser: 'NotificationUser',
    FCMTokens: 'FCMTokens'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "product" | "purchase" | "purchaseRequest" | "chat" | "notification" | "notificationUser" | "fCMTokens"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      PurchaseRequest: {
        payload: Prisma.$PurchaseRequestPayload<ExtArgs>
        fields: Prisma.PurchaseRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>
          }
          findFirst: {
            args: Prisma.PurchaseRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>
          }
          findMany: {
            args: Prisma.PurchaseRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>[]
          }
          create: {
            args: Prisma.PurchaseRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>
          }
          createMany: {
            args: Prisma.PurchaseRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>[]
          }
          delete: {
            args: Prisma.PurchaseRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>
          }
          update: {
            args: Prisma.PurchaseRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseRequestPayload>
          }
          aggregate: {
            args: Prisma.PurchaseRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseRequest>
          }
          groupBy: {
            args: Prisma.PurchaseRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseRequestCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      NotificationUser: {
        payload: Prisma.$NotificationUserPayload<ExtArgs>
        fields: Prisma.NotificationUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>
          }
          findFirst: {
            args: Prisma.NotificationUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>
          }
          findMany: {
            args: Prisma.NotificationUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>[]
          }
          create: {
            args: Prisma.NotificationUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>
          }
          createMany: {
            args: Prisma.NotificationUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>[]
          }
          delete: {
            args: Prisma.NotificationUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>
          }
          update: {
            args: Prisma.NotificationUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>
          }
          deleteMany: {
            args: Prisma.NotificationUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationUserPayload>
          }
          aggregate: {
            args: Prisma.NotificationUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationUser>
          }
          groupBy: {
            args: Prisma.NotificationUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationUserCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationUserCountAggregateOutputType> | number
          }
        }
      }
      FCMTokens: {
        payload: Prisma.$FCMTokensPayload<ExtArgs>
        fields: Prisma.FCMTokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FCMTokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FCMTokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>
          }
          findFirst: {
            args: Prisma.FCMTokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FCMTokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>
          }
          findMany: {
            args: Prisma.FCMTokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>[]
          }
          create: {
            args: Prisma.FCMTokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>
          }
          createMany: {
            args: Prisma.FCMTokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FCMTokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>[]
          }
          delete: {
            args: Prisma.FCMTokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>
          }
          update: {
            args: Prisma.FCMTokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>
          }
          deleteMany: {
            args: Prisma.FCMTokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FCMTokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FCMTokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>[]
          }
          upsert: {
            args: Prisma.FCMTokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FCMTokensPayload>
          }
          aggregate: {
            args: Prisma.FCMTokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFCMTokens>
          }
          groupBy: {
            args: Prisma.FCMTokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<FCMTokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.FCMTokensCountArgs<ExtArgs>
            result: $Utils.Optional<FCMTokensCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    product?: ProductOmit
    purchase?: PurchaseOmit
    purchaseRequest?: PurchaseRequestOmit
    chat?: ChatOmit
    notification?: NotificationOmit
    notificationUser?: NotificationUserOmit
    fCMTokens?: FCMTokensOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chatsRecv: number
    chatsSent: number
    notifications: number
    products: number
    sales: number
    purchases: number
    requests: number
    fcmtokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatsRecv?: boolean | UserCountOutputTypeCountChatsRecvArgs
    chatsSent?: boolean | UserCountOutputTypeCountChatsSentArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    products?: boolean | UserCountOutputTypeCountProductsArgs
    sales?: boolean | UserCountOutputTypeCountSalesArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    fcmtokens?: boolean | UserCountOutputTypeCountFcmtokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsRecvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFcmtokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FCMTokensWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    chats: number
    requests: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | ProductCountOutputTypeCountChatsArgs
    requests?: boolean | ProductCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseRequestWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    users: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | NotificationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    profileImage: string | null
    visibility: $Enums.UserVisibility | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    profileImage: string | null
    visibility: $Enums.UserVisibility | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    profileImage: number
    visibility: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    profileImage?: true
    visibility?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    profileImage?: true
    visibility?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    profileImage?: true
    visibility?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    username: string | null
    profileImage: string | null
    visibility: $Enums.UserVisibility | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    profileImage?: boolean
    visibility?: boolean
    chatsRecv?: boolean | User$chatsRecvArgs<ExtArgs>
    chatsSent?: boolean | User$chatsSentArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    fcmtokens?: boolean | User$fcmtokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    profileImage?: boolean
    visibility?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    profileImage?: boolean
    visibility?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    profileImage?: boolean
    visibility?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "profileImage" | "visibility", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatsRecv?: boolean | User$chatsRecvArgs<ExtArgs>
    chatsSent?: boolean | User$chatsSentArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    fcmtokens?: boolean | User$fcmtokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chatsRecv: Prisma.$ChatPayload<ExtArgs>[]
      chatsSent: Prisma.$ChatPayload<ExtArgs>[]
      notifications: Prisma.$NotificationUserPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      sales: Prisma.$PurchasePayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      requests: Prisma.$PurchaseRequestPayload<ExtArgs>[]
      fcmtokens: Prisma.$FCMTokensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      username: string | null
      profileImage: string | null
      visibility: $Enums.UserVisibility | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatsRecv<T extends User$chatsRecvArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsRecvArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatsSent<T extends User$chatsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends User$salesArgs<ExtArgs> = {}>(args?: Subset<T, User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fcmtokens<T extends User$fcmtokensArgs<ExtArgs> = {}>(args?: Subset<T, User$fcmtokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly visibility: FieldRef<"User", 'UserVisibility'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chatsRecv
   */
  export type User$chatsRecvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.chatsSent
   */
  export type User$chatsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    where?: NotificationUserWhereInput
    orderBy?: NotificationUserOrderByWithRelationInput | NotificationUserOrderByWithRelationInput[]
    cursor?: NotificationUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationUserScalarFieldEnum | NotificationUserScalarFieldEnum[]
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.sales
   */
  export type User$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    where?: PurchaseRequestWhereInput
    orderBy?: PurchaseRequestOrderByWithRelationInput | PurchaseRequestOrderByWithRelationInput[]
    cursor?: PurchaseRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseRequestScalarFieldEnum | PurchaseRequestScalarFieldEnum[]
  }

  /**
   * User.fcmtokens
   */
  export type User$fcmtokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    where?: FCMTokensWhereInput
    orderBy?: FCMTokensOrderByWithRelationInput | FCMTokensOrderByWithRelationInput[]
    cursor?: FCMTokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FCMTokensScalarFieldEnum | FCMTokensScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    price: number | null
    ownerId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    price: number | null
    ownerId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    price: number | null
    status: $Enums.ProductStatus | null
    ownerId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    price: number | null
    status: $Enums.ProductStatus | null
    ownerId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    images: number
    latitude: number
    longitude: number
    address: number
    price: number
    status: number
    ownerId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    price?: true
    ownerId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    price?: true
    ownerId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    address?: true
    price?: true
    status?: true
    ownerId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    latitude?: true
    longitude?: true
    address?: true
    price?: true
    status?: true
    ownerId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    images?: true
    latitude?: true
    longitude?: true
    address?: true
    price?: true
    status?: true
    ownerId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string
    images: string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    ownerId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    price?: boolean
    status?: boolean
    ownerId?: boolean
    chats?: boolean | Product$chatsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | Product$purchaseArgs<ExtArgs>
    requests?: boolean | Product$requestsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    price?: boolean
    status?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    price?: boolean
    status?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    images?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    price?: boolean
    status?: boolean
    ownerId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "images" | "latitude" | "longitude" | "address" | "price" | "status" | "ownerId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | Product$chatsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    purchase?: boolean | Product$purchaseArgs<ExtArgs>
    requests?: boolean | Product$requestsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      chats: Prisma.$ChatPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
      purchase: Prisma.$PurchasePayload<ExtArgs> | null
      requests: Prisma.$PurchaseRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      images: string[]
      latitude: number
      longitude: number
      address: string
      price: number
      status: $Enums.ProductStatus
      ownerId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends Product$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Product$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchase<T extends Product$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, Product$purchaseArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requests<T extends Product$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Product$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly images: FieldRef<"Product", 'String[]'>
    readonly latitude: FieldRef<"Product", 'Float'>
    readonly longitude: FieldRef<"Product", 'Float'>
    readonly address: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly ownerId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.chats
   */
  export type Product$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Product.purchase
   */
  export type Product$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
  }

  /**
   * Product.requests
   */
  export type Product$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    where?: PurchaseRequestWhereInput
    orderBy?: PurchaseRequestOrderByWithRelationInput | PurchaseRequestOrderByWithRelationInput[]
    cursor?: PurchaseRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseRequestScalarFieldEnum | PurchaseRequestScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    purchaserId: number | null
    ownerId: number | null
    paymentAmount: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    productId: number | null
    purchaserId: number | null
    ownerId: number | null
    paymentAmount: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    productId: number | null
    purchaserId: number | null
    ownerId: number | null
    paymentAmount: number | null
    paymentMethod: string | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    purchaserId: number | null
    ownerId: number | null
    paymentAmount: number | null
    paymentMethod: string | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    productId: number
    purchaserId: number
    ownerId: number
    paymentAmount: number
    paymentMethod: number
    paymentStatus: number
    createdAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    productId?: true
    purchaserId?: true
    ownerId?: true
    paymentAmount?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    productId?: true
    purchaserId?: true
    ownerId?: true
    paymentAmount?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    productId?: true
    purchaserId?: true
    ownerId?: true
    paymentAmount?: true
    paymentMethod?: true
    paymentStatus?: true
    createdAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    productId?: true
    purchaserId?: true
    ownerId?: true
    paymentAmount?: true
    paymentMethod?: true
    paymentStatus?: true
    createdAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    productId?: true
    purchaserId?: true
    ownerId?: true
    paymentAmount?: true
    paymentMethod?: true
    paymentStatus?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: number
    productId: number
    purchaserId: number
    ownerId: number
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    purchaserId?: boolean
    ownerId?: boolean
    paymentAmount?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchaser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    purchaserId?: boolean
    ownerId?: boolean
    paymentAmount?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchaser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    purchaserId?: boolean
    ownerId?: boolean
    paymentAmount?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchaser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    productId?: boolean
    purchaserId?: boolean
    ownerId?: boolean
    paymentAmount?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "purchaserId" | "ownerId" | "paymentAmount" | "paymentMethod" | "paymentStatus" | "createdAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchaser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchaser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchaser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      purchaser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      purchaserId: number
      ownerId: number
      paymentAmount: number
      paymentMethod: string
      paymentStatus: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchaser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'Int'>
    readonly productId: FieldRef<"Purchase", 'Int'>
    readonly purchaserId: FieldRef<"Purchase", 'Int'>
    readonly ownerId: FieldRef<"Purchase", 'Int'>
    readonly paymentAmount: FieldRef<"Purchase", 'Float'>
    readonly paymentMethod: FieldRef<"Purchase", 'String'>
    readonly paymentStatus: FieldRef<"Purchase", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseRequest
   */

  export type AggregatePurchaseRequest = {
    _count: PurchaseRequestCountAggregateOutputType | null
    _avg: PurchaseRequestAvgAggregateOutputType | null
    _sum: PurchaseRequestSumAggregateOutputType | null
    _min: PurchaseRequestMinAggregateOutputType | null
    _max: PurchaseRequestMaxAggregateOutputType | null
  }

  export type PurchaseRequestAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    requesterId: number | null
    amount: number | null
  }

  export type PurchaseRequestSumAggregateOutputType = {
    id: number | null
    productId: number | null
    requesterId: number | null
    amount: number | null
  }

  export type PurchaseRequestMinAggregateOutputType = {
    id: number | null
    productId: number | null
    requesterId: number | null
    amount: number | null
    message: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
  }

  export type PurchaseRequestMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    requesterId: number | null
    amount: number | null
    message: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
  }

  export type PurchaseRequestCountAggregateOutputType = {
    id: number
    productId: number
    requesterId: number
    amount: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type PurchaseRequestAvgAggregateInputType = {
    id?: true
    productId?: true
    requesterId?: true
    amount?: true
  }

  export type PurchaseRequestSumAggregateInputType = {
    id?: true
    productId?: true
    requesterId?: true
    amount?: true
  }

  export type PurchaseRequestMinAggregateInputType = {
    id?: true
    productId?: true
    requesterId?: true
    amount?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type PurchaseRequestMaxAggregateInputType = {
    id?: true
    productId?: true
    requesterId?: true
    amount?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type PurchaseRequestCountAggregateInputType = {
    id?: true
    productId?: true
    requesterId?: true
    amount?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseRequest to aggregate.
     */
    where?: PurchaseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseRequests to fetch.
     */
    orderBy?: PurchaseRequestOrderByWithRelationInput | PurchaseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseRequests
    **/
    _count?: true | PurchaseRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseRequestMaxAggregateInputType
  }

  export type GetPurchaseRequestAggregateType<T extends PurchaseRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseRequest[P]>
      : GetScalarType<T[P], AggregatePurchaseRequest[P]>
  }




  export type PurchaseRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseRequestWhereInput
    orderBy?: PurchaseRequestOrderByWithAggregationInput | PurchaseRequestOrderByWithAggregationInput[]
    by: PurchaseRequestScalarFieldEnum[] | PurchaseRequestScalarFieldEnum
    having?: PurchaseRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseRequestCountAggregateInputType | true
    _avg?: PurchaseRequestAvgAggregateInputType
    _sum?: PurchaseRequestSumAggregateInputType
    _min?: PurchaseRequestMinAggregateInputType
    _max?: PurchaseRequestMaxAggregateInputType
  }

  export type PurchaseRequestGroupByOutputType = {
    id: number
    productId: number
    requesterId: number
    amount: number | null
    message: string | null
    status: $Enums.RequestStatus
    createdAt: Date
    _count: PurchaseRequestCountAggregateOutputType | null
    _avg: PurchaseRequestAvgAggregateOutputType | null
    _sum: PurchaseRequestSumAggregateOutputType | null
    _min: PurchaseRequestMinAggregateOutputType | null
    _max: PurchaseRequestMaxAggregateOutputType | null
  }

  type GetPurchaseRequestGroupByPayload<T extends PurchaseRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseRequestGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    requesterId?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseRequest"]>

  export type PurchaseRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    requesterId?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseRequest"]>

  export type PurchaseRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    requesterId?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseRequest"]>

  export type PurchaseRequestSelectScalar = {
    id?: boolean
    productId?: boolean
    requesterId?: boolean
    amount?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PurchaseRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "requesterId" | "amount" | "message" | "status" | "createdAt", ExtArgs["result"]["purchaseRequest"]>
  export type PurchaseRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PurchaseRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseRequest"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      requesterId: number
      amount: number | null
      message: string | null
      status: $Enums.RequestStatus
      createdAt: Date
    }, ExtArgs["result"]["purchaseRequest"]>
    composites: {}
  }

  type PurchaseRequestGetPayload<S extends boolean | null | undefined | PurchaseRequestDefaultArgs> = $Result.GetResult<Prisma.$PurchaseRequestPayload, S>

  type PurchaseRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseRequestCountAggregateInputType | true
    }

  export interface PurchaseRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseRequest'], meta: { name: 'PurchaseRequest' } }
    /**
     * Find zero or one PurchaseRequest that matches the filter.
     * @param {PurchaseRequestFindUniqueArgs} args - Arguments to find a PurchaseRequest
     * @example
     * // Get one PurchaseRequest
     * const purchaseRequest = await prisma.purchaseRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseRequestFindUniqueArgs>(args: SelectSubset<T, PurchaseRequestFindUniqueArgs<ExtArgs>>): Prisma__PurchaseRequestClient<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseRequestFindUniqueOrThrowArgs} args - Arguments to find a PurchaseRequest
     * @example
     * // Get one PurchaseRequest
     * const purchaseRequest = await prisma.purchaseRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseRequestClient<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRequestFindFirstArgs} args - Arguments to find a PurchaseRequest
     * @example
     * // Get one PurchaseRequest
     * const purchaseRequest = await prisma.purchaseRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseRequestFindFirstArgs>(args?: SelectSubset<T, PurchaseRequestFindFirstArgs<ExtArgs>>): Prisma__PurchaseRequestClient<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRequestFindFirstOrThrowArgs} args - Arguments to find a PurchaseRequest
     * @example
     * // Get one PurchaseRequest
     * const purchaseRequest = await prisma.purchaseRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseRequestClient<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseRequests
     * const purchaseRequests = await prisma.purchaseRequest.findMany()
     * 
     * // Get first 10 PurchaseRequests
     * const purchaseRequests = await prisma.purchaseRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseRequestWithIdOnly = await prisma.purchaseRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseRequestFindManyArgs>(args?: SelectSubset<T, PurchaseRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseRequest.
     * @param {PurchaseRequestCreateArgs} args - Arguments to create a PurchaseRequest.
     * @example
     * // Create one PurchaseRequest
     * const PurchaseRequest = await prisma.purchaseRequest.create({
     *   data: {
     *     // ... data to create a PurchaseRequest
     *   }
     * })
     * 
     */
    create<T extends PurchaseRequestCreateArgs>(args: SelectSubset<T, PurchaseRequestCreateArgs<ExtArgs>>): Prisma__PurchaseRequestClient<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseRequests.
     * @param {PurchaseRequestCreateManyArgs} args - Arguments to create many PurchaseRequests.
     * @example
     * // Create many PurchaseRequests
     * const purchaseRequest = await prisma.purchaseRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseRequestCreateManyArgs>(args?: SelectSubset<T, PurchaseRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseRequests and returns the data saved in the database.
     * @param {PurchaseRequestCreateManyAndReturnArgs} args - Arguments to create many PurchaseRequests.
     * @example
     * // Create many PurchaseRequests
     * const purchaseRequest = await prisma.purchaseRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseRequests and only return the `id`
     * const purchaseRequestWithIdOnly = await prisma.purchaseRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseRequest.
     * @param {PurchaseRequestDeleteArgs} args - Arguments to delete one PurchaseRequest.
     * @example
     * // Delete one PurchaseRequest
     * const PurchaseRequest = await prisma.purchaseRequest.delete({
     *   where: {
     *     // ... filter to delete one PurchaseRequest
     *   }
     * })
     * 
     */
    delete<T extends PurchaseRequestDeleteArgs>(args: SelectSubset<T, PurchaseRequestDeleteArgs<ExtArgs>>): Prisma__PurchaseRequestClient<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseRequest.
     * @param {PurchaseRequestUpdateArgs} args - Arguments to update one PurchaseRequest.
     * @example
     * // Update one PurchaseRequest
     * const purchaseRequest = await prisma.purchaseRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseRequestUpdateArgs>(args: SelectSubset<T, PurchaseRequestUpdateArgs<ExtArgs>>): Prisma__PurchaseRequestClient<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseRequests.
     * @param {PurchaseRequestDeleteManyArgs} args - Arguments to filter PurchaseRequests to delete.
     * @example
     * // Delete a few PurchaseRequests
     * const { count } = await prisma.purchaseRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseRequestDeleteManyArgs>(args?: SelectSubset<T, PurchaseRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseRequests
     * const purchaseRequest = await prisma.purchaseRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseRequestUpdateManyArgs>(args: SelectSubset<T, PurchaseRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseRequests and returns the data updated in the database.
     * @param {PurchaseRequestUpdateManyAndReturnArgs} args - Arguments to update many PurchaseRequests.
     * @example
     * // Update many PurchaseRequests
     * const purchaseRequest = await prisma.purchaseRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseRequests and only return the `id`
     * const purchaseRequestWithIdOnly = await prisma.purchaseRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseRequest.
     * @param {PurchaseRequestUpsertArgs} args - Arguments to update or create a PurchaseRequest.
     * @example
     * // Update or create a PurchaseRequest
     * const purchaseRequest = await prisma.purchaseRequest.upsert({
     *   create: {
     *     // ... data to create a PurchaseRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseRequest we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseRequestUpsertArgs>(args: SelectSubset<T, PurchaseRequestUpsertArgs<ExtArgs>>): Prisma__PurchaseRequestClient<$Result.GetResult<Prisma.$PurchaseRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRequestCountArgs} args - Arguments to filter PurchaseRequests to count.
     * @example
     * // Count the number of PurchaseRequests
     * const count = await prisma.purchaseRequest.count({
     *   where: {
     *     // ... the filter for the PurchaseRequests we want to count
     *   }
     * })
    **/
    count<T extends PurchaseRequestCountArgs>(
      args?: Subset<T, PurchaseRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseRequestAggregateArgs>(args: Subset<T, PurchaseRequestAggregateArgs>): Prisma.PrismaPromise<GetPurchaseRequestAggregateType<T>>

    /**
     * Group by PurchaseRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseRequestGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseRequest model
   */
  readonly fields: PurchaseRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseRequest model
   */
  interface PurchaseRequestFieldRefs {
    readonly id: FieldRef<"PurchaseRequest", 'Int'>
    readonly productId: FieldRef<"PurchaseRequest", 'Int'>
    readonly requesterId: FieldRef<"PurchaseRequest", 'Int'>
    readonly amount: FieldRef<"PurchaseRequest", 'Float'>
    readonly message: FieldRef<"PurchaseRequest", 'String'>
    readonly status: FieldRef<"PurchaseRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"PurchaseRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseRequest findUnique
   */
  export type PurchaseRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRequest to fetch.
     */
    where: PurchaseRequestWhereUniqueInput
  }

  /**
   * PurchaseRequest findUniqueOrThrow
   */
  export type PurchaseRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRequest to fetch.
     */
    where: PurchaseRequestWhereUniqueInput
  }

  /**
   * PurchaseRequest findFirst
   */
  export type PurchaseRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRequest to fetch.
     */
    where?: PurchaseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseRequests to fetch.
     */
    orderBy?: PurchaseRequestOrderByWithRelationInput | PurchaseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseRequests.
     */
    cursor?: PurchaseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseRequests.
     */
    distinct?: PurchaseRequestScalarFieldEnum | PurchaseRequestScalarFieldEnum[]
  }

  /**
   * PurchaseRequest findFirstOrThrow
   */
  export type PurchaseRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRequest to fetch.
     */
    where?: PurchaseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseRequests to fetch.
     */
    orderBy?: PurchaseRequestOrderByWithRelationInput | PurchaseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseRequests.
     */
    cursor?: PurchaseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseRequests.
     */
    distinct?: PurchaseRequestScalarFieldEnum | PurchaseRequestScalarFieldEnum[]
  }

  /**
   * PurchaseRequest findMany
   */
  export type PurchaseRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseRequests to fetch.
     */
    where?: PurchaseRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseRequests to fetch.
     */
    orderBy?: PurchaseRequestOrderByWithRelationInput | PurchaseRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseRequests.
     */
    cursor?: PurchaseRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseRequests.
     */
    skip?: number
    distinct?: PurchaseRequestScalarFieldEnum | PurchaseRequestScalarFieldEnum[]
  }

  /**
   * PurchaseRequest create
   */
  export type PurchaseRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseRequest.
     */
    data: XOR<PurchaseRequestCreateInput, PurchaseRequestUncheckedCreateInput>
  }

  /**
   * PurchaseRequest createMany
   */
  export type PurchaseRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseRequests.
     */
    data: PurchaseRequestCreateManyInput | PurchaseRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseRequest createManyAndReturn
   */
  export type PurchaseRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseRequests.
     */
    data: PurchaseRequestCreateManyInput | PurchaseRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseRequest update
   */
  export type PurchaseRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseRequest.
     */
    data: XOR<PurchaseRequestUpdateInput, PurchaseRequestUncheckedUpdateInput>
    /**
     * Choose, which PurchaseRequest to update.
     */
    where: PurchaseRequestWhereUniqueInput
  }

  /**
   * PurchaseRequest updateMany
   */
  export type PurchaseRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseRequests.
     */
    data: XOR<PurchaseRequestUpdateManyMutationInput, PurchaseRequestUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseRequests to update
     */
    where?: PurchaseRequestWhereInput
    /**
     * Limit how many PurchaseRequests to update.
     */
    limit?: number
  }

  /**
   * PurchaseRequest updateManyAndReturn
   */
  export type PurchaseRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseRequests.
     */
    data: XOR<PurchaseRequestUpdateManyMutationInput, PurchaseRequestUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseRequests to update
     */
    where?: PurchaseRequestWhereInput
    /**
     * Limit how many PurchaseRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseRequest upsert
   */
  export type PurchaseRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseRequest to update in case it exists.
     */
    where: PurchaseRequestWhereUniqueInput
    /**
     * In case the PurchaseRequest found by the `where` argument doesn't exist, create a new PurchaseRequest with this data.
     */
    create: XOR<PurchaseRequestCreateInput, PurchaseRequestUncheckedCreateInput>
    /**
     * In case the PurchaseRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseRequestUpdateInput, PurchaseRequestUncheckedUpdateInput>
  }

  /**
   * PurchaseRequest delete
   */
  export type PurchaseRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
    /**
     * Filter which PurchaseRequest to delete.
     */
    where: PurchaseRequestWhereUniqueInput
  }

  /**
   * PurchaseRequest deleteMany
   */
  export type PurchaseRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseRequests to delete
     */
    where?: PurchaseRequestWhereInput
    /**
     * Limit how many PurchaseRequests to delete.
     */
    limit?: number
  }

  /**
   * PurchaseRequest without action
   */
  export type PurchaseRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseRequest
     */
    select?: PurchaseRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseRequest
     */
    omit?: PurchaseRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseRequestInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    productId: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    productId: number | null
    senderId: number | null
    receiverId: number | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    senderId: number | null
    receiverId: number | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    productId: number
    senderId: number
    receiverId: number
    message: number
    images: number
    createdAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    productId?: true
    senderId?: true
    receiverId?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    productId?: true
    senderId?: true
    receiverId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    productId?: true
    senderId?: true
    receiverId?: true
    message?: true
    createdAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    productId?: true
    senderId?: true
    receiverId?: true
    message?: true
    createdAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    productId?: true
    senderId?: true
    receiverId?: true
    message?: true
    images?: true
    createdAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    productId: number
    senderId: number
    receiverId: number
    message: string
    images: string[]
    createdAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    images?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    images?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    images?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    productId?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    images?: boolean
    createdAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "senderId" | "receiverId" | "message" | "images" | "createdAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      senderId: number
      receiverId: number
      message: string
      images: string[]
      createdAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly productId: FieldRef<"Chat", 'Int'>
    readonly senderId: FieldRef<"Chat", 'Int'>
    readonly receiverId: FieldRef<"Chat", 'Int'>
    readonly message: FieldRef<"Chat", 'String'>
    readonly images: FieldRef<"Chat", 'String[]'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    body: number
    images: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    images?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    title: string
    body: string
    images: string[]
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    images?: boolean
    createdAt?: boolean
    users?: boolean | Notification$usersArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    images?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    images?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    images?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "images" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Notification$usersArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      users: Prisma.$NotificationUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      body: string
      images: string[]
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Notification$usersArgs<ExtArgs> = {}>(args?: Subset<T, Notification$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly images: FieldRef<"Notification", 'String[]'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.users
   */
  export type Notification$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    where?: NotificationUserWhereInput
    orderBy?: NotificationUserOrderByWithRelationInput | NotificationUserOrderByWithRelationInput[]
    cursor?: NotificationUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationUserScalarFieldEnum | NotificationUserScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model NotificationUser
   */

  export type AggregateNotificationUser = {
    _count: NotificationUserCountAggregateOutputType | null
    _avg: NotificationUserAvgAggregateOutputType | null
    _sum: NotificationUserSumAggregateOutputType | null
    _min: NotificationUserMinAggregateOutputType | null
    _max: NotificationUserMaxAggregateOutputType | null
  }

  export type NotificationUserAvgAggregateOutputType = {
    userId: number | null
    notificationId: number | null
  }

  export type NotificationUserSumAggregateOutputType = {
    userId: number | null
    notificationId: number | null
  }

  export type NotificationUserMinAggregateOutputType = {
    userId: number | null
    notificationId: number | null
  }

  export type NotificationUserMaxAggregateOutputType = {
    userId: number | null
    notificationId: number | null
  }

  export type NotificationUserCountAggregateOutputType = {
    userId: number
    notificationId: number
    _all: number
  }


  export type NotificationUserAvgAggregateInputType = {
    userId?: true
    notificationId?: true
  }

  export type NotificationUserSumAggregateInputType = {
    userId?: true
    notificationId?: true
  }

  export type NotificationUserMinAggregateInputType = {
    userId?: true
    notificationId?: true
  }

  export type NotificationUserMaxAggregateInputType = {
    userId?: true
    notificationId?: true
  }

  export type NotificationUserCountAggregateInputType = {
    userId?: true
    notificationId?: true
    _all?: true
  }

  export type NotificationUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationUser to aggregate.
     */
    where?: NotificationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationUsers to fetch.
     */
    orderBy?: NotificationUserOrderByWithRelationInput | NotificationUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationUsers
    **/
    _count?: true | NotificationUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationUserMaxAggregateInputType
  }

  export type GetNotificationUserAggregateType<T extends NotificationUserAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationUser[P]>
      : GetScalarType<T[P], AggregateNotificationUser[P]>
  }




  export type NotificationUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationUserWhereInput
    orderBy?: NotificationUserOrderByWithAggregationInput | NotificationUserOrderByWithAggregationInput[]
    by: NotificationUserScalarFieldEnum[] | NotificationUserScalarFieldEnum
    having?: NotificationUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationUserCountAggregateInputType | true
    _avg?: NotificationUserAvgAggregateInputType
    _sum?: NotificationUserSumAggregateInputType
    _min?: NotificationUserMinAggregateInputType
    _max?: NotificationUserMaxAggregateInputType
  }

  export type NotificationUserGroupByOutputType = {
    userId: number
    notificationId: number
    _count: NotificationUserCountAggregateOutputType | null
    _avg: NotificationUserAvgAggregateOutputType | null
    _sum: NotificationUserSumAggregateOutputType | null
    _min: NotificationUserMinAggregateOutputType | null
    _max: NotificationUserMaxAggregateOutputType | null
  }

  type GetNotificationUserGroupByPayload<T extends NotificationUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationUserGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationUserGroupByOutputType[P]>
        }
      >
    >


  export type NotificationUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    notificationId?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationUser"]>

  export type NotificationUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    notificationId?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationUser"]>

  export type NotificationUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    notificationId?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationUser"]>

  export type NotificationUserSelectScalar = {
    userId?: boolean
    notificationId?: boolean
  }

  export type NotificationUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "notificationId", ExtArgs["result"]["notificationUser"]>
  export type NotificationUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationUser"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      notificationId: number
    }, ExtArgs["result"]["notificationUser"]>
    composites: {}
  }

  type NotificationUserGetPayload<S extends boolean | null | undefined | NotificationUserDefaultArgs> = $Result.GetResult<Prisma.$NotificationUserPayload, S>

  type NotificationUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationUserCountAggregateInputType | true
    }

  export interface NotificationUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationUser'], meta: { name: 'NotificationUser' } }
    /**
     * Find zero or one NotificationUser that matches the filter.
     * @param {NotificationUserFindUniqueArgs} args - Arguments to find a NotificationUser
     * @example
     * // Get one NotificationUser
     * const notificationUser = await prisma.notificationUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationUserFindUniqueArgs>(args: SelectSubset<T, NotificationUserFindUniqueArgs<ExtArgs>>): Prisma__NotificationUserClient<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationUserFindUniqueOrThrowArgs} args - Arguments to find a NotificationUser
     * @example
     * // Get one NotificationUser
     * const notificationUser = await prisma.notificationUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationUserFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationUserClient<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserFindFirstArgs} args - Arguments to find a NotificationUser
     * @example
     * // Get one NotificationUser
     * const notificationUser = await prisma.notificationUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationUserFindFirstArgs>(args?: SelectSubset<T, NotificationUserFindFirstArgs<ExtArgs>>): Prisma__NotificationUserClient<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserFindFirstOrThrowArgs} args - Arguments to find a NotificationUser
     * @example
     * // Get one NotificationUser
     * const notificationUser = await prisma.notificationUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationUserFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationUserClient<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationUsers
     * const notificationUsers = await prisma.notificationUser.findMany()
     * 
     * // Get first 10 NotificationUsers
     * const notificationUsers = await prisma.notificationUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const notificationUserWithUserIdOnly = await prisma.notificationUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends NotificationUserFindManyArgs>(args?: SelectSubset<T, NotificationUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationUser.
     * @param {NotificationUserCreateArgs} args - Arguments to create a NotificationUser.
     * @example
     * // Create one NotificationUser
     * const NotificationUser = await prisma.notificationUser.create({
     *   data: {
     *     // ... data to create a NotificationUser
     *   }
     * })
     * 
     */
    create<T extends NotificationUserCreateArgs>(args: SelectSubset<T, NotificationUserCreateArgs<ExtArgs>>): Prisma__NotificationUserClient<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationUsers.
     * @param {NotificationUserCreateManyArgs} args - Arguments to create many NotificationUsers.
     * @example
     * // Create many NotificationUsers
     * const notificationUser = await prisma.notificationUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationUserCreateManyArgs>(args?: SelectSubset<T, NotificationUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationUsers and returns the data saved in the database.
     * @param {NotificationUserCreateManyAndReturnArgs} args - Arguments to create many NotificationUsers.
     * @example
     * // Create many NotificationUsers
     * const notificationUser = await prisma.notificationUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationUsers and only return the `userId`
     * const notificationUserWithUserIdOnly = await prisma.notificationUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationUserCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationUser.
     * @param {NotificationUserDeleteArgs} args - Arguments to delete one NotificationUser.
     * @example
     * // Delete one NotificationUser
     * const NotificationUser = await prisma.notificationUser.delete({
     *   where: {
     *     // ... filter to delete one NotificationUser
     *   }
     * })
     * 
     */
    delete<T extends NotificationUserDeleteArgs>(args: SelectSubset<T, NotificationUserDeleteArgs<ExtArgs>>): Prisma__NotificationUserClient<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationUser.
     * @param {NotificationUserUpdateArgs} args - Arguments to update one NotificationUser.
     * @example
     * // Update one NotificationUser
     * const notificationUser = await prisma.notificationUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUserUpdateArgs>(args: SelectSubset<T, NotificationUserUpdateArgs<ExtArgs>>): Prisma__NotificationUserClient<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationUsers.
     * @param {NotificationUserDeleteManyArgs} args - Arguments to filter NotificationUsers to delete.
     * @example
     * // Delete a few NotificationUsers
     * const { count } = await prisma.notificationUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationUserDeleteManyArgs>(args?: SelectSubset<T, NotificationUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationUsers
     * const notificationUser = await prisma.notificationUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUserUpdateManyArgs>(args: SelectSubset<T, NotificationUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationUsers and returns the data updated in the database.
     * @param {NotificationUserUpdateManyAndReturnArgs} args - Arguments to update many NotificationUsers.
     * @example
     * // Update many NotificationUsers
     * const notificationUser = await prisma.notificationUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationUsers and only return the `userId`
     * const notificationUserWithUserIdOnly = await prisma.notificationUser.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUserUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationUser.
     * @param {NotificationUserUpsertArgs} args - Arguments to update or create a NotificationUser.
     * @example
     * // Update or create a NotificationUser
     * const notificationUser = await prisma.notificationUser.upsert({
     *   create: {
     *     // ... data to create a NotificationUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationUser we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUserUpsertArgs>(args: SelectSubset<T, NotificationUserUpsertArgs<ExtArgs>>): Prisma__NotificationUserClient<$Result.GetResult<Prisma.$NotificationUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserCountArgs} args - Arguments to filter NotificationUsers to count.
     * @example
     * // Count the number of NotificationUsers
     * const count = await prisma.notificationUser.count({
     *   where: {
     *     // ... the filter for the NotificationUsers we want to count
     *   }
     * })
    **/
    count<T extends NotificationUserCountArgs>(
      args?: Subset<T, NotificationUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationUserAggregateArgs>(args: Subset<T, NotificationUserAggregateArgs>): Prisma.PrismaPromise<GetNotificationUserAggregateType<T>>

    /**
     * Group by NotificationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationUserGroupByArgs['orderBy'] }
        : { orderBy?: NotificationUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationUser model
   */
  readonly fields: NotificationUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationUser model
   */
  interface NotificationUserFieldRefs {
    readonly userId: FieldRef<"NotificationUser", 'Int'>
    readonly notificationId: FieldRef<"NotificationUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NotificationUser findUnique
   */
  export type NotificationUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * Filter, which NotificationUser to fetch.
     */
    where: NotificationUserWhereUniqueInput
  }

  /**
   * NotificationUser findUniqueOrThrow
   */
  export type NotificationUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * Filter, which NotificationUser to fetch.
     */
    where: NotificationUserWhereUniqueInput
  }

  /**
   * NotificationUser findFirst
   */
  export type NotificationUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * Filter, which NotificationUser to fetch.
     */
    where?: NotificationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationUsers to fetch.
     */
    orderBy?: NotificationUserOrderByWithRelationInput | NotificationUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationUsers.
     */
    cursor?: NotificationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationUsers.
     */
    distinct?: NotificationUserScalarFieldEnum | NotificationUserScalarFieldEnum[]
  }

  /**
   * NotificationUser findFirstOrThrow
   */
  export type NotificationUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * Filter, which NotificationUser to fetch.
     */
    where?: NotificationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationUsers to fetch.
     */
    orderBy?: NotificationUserOrderByWithRelationInput | NotificationUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationUsers.
     */
    cursor?: NotificationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationUsers.
     */
    distinct?: NotificationUserScalarFieldEnum | NotificationUserScalarFieldEnum[]
  }

  /**
   * NotificationUser findMany
   */
  export type NotificationUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * Filter, which NotificationUsers to fetch.
     */
    where?: NotificationUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationUsers to fetch.
     */
    orderBy?: NotificationUserOrderByWithRelationInput | NotificationUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationUsers.
     */
    cursor?: NotificationUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationUsers.
     */
    skip?: number
    distinct?: NotificationUserScalarFieldEnum | NotificationUserScalarFieldEnum[]
  }

  /**
   * NotificationUser create
   */
  export type NotificationUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationUser.
     */
    data: XOR<NotificationUserCreateInput, NotificationUserUncheckedCreateInput>
  }

  /**
   * NotificationUser createMany
   */
  export type NotificationUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationUsers.
     */
    data: NotificationUserCreateManyInput | NotificationUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationUser createManyAndReturn
   */
  export type NotificationUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationUsers.
     */
    data: NotificationUserCreateManyInput | NotificationUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationUser update
   */
  export type NotificationUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationUser.
     */
    data: XOR<NotificationUserUpdateInput, NotificationUserUncheckedUpdateInput>
    /**
     * Choose, which NotificationUser to update.
     */
    where: NotificationUserWhereUniqueInput
  }

  /**
   * NotificationUser updateMany
   */
  export type NotificationUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationUsers.
     */
    data: XOR<NotificationUserUpdateManyMutationInput, NotificationUserUncheckedUpdateManyInput>
    /**
     * Filter which NotificationUsers to update
     */
    where?: NotificationUserWhereInput
    /**
     * Limit how many NotificationUsers to update.
     */
    limit?: number
  }

  /**
   * NotificationUser updateManyAndReturn
   */
  export type NotificationUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * The data used to update NotificationUsers.
     */
    data: XOR<NotificationUserUpdateManyMutationInput, NotificationUserUncheckedUpdateManyInput>
    /**
     * Filter which NotificationUsers to update
     */
    where?: NotificationUserWhereInput
    /**
     * Limit how many NotificationUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationUser upsert
   */
  export type NotificationUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationUser to update in case it exists.
     */
    where: NotificationUserWhereUniqueInput
    /**
     * In case the NotificationUser found by the `where` argument doesn't exist, create a new NotificationUser with this data.
     */
    create: XOR<NotificationUserCreateInput, NotificationUserUncheckedCreateInput>
    /**
     * In case the NotificationUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUserUpdateInput, NotificationUserUncheckedUpdateInput>
  }

  /**
   * NotificationUser delete
   */
  export type NotificationUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
    /**
     * Filter which NotificationUser to delete.
     */
    where: NotificationUserWhereUniqueInput
  }

  /**
   * NotificationUser deleteMany
   */
  export type NotificationUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationUsers to delete
     */
    where?: NotificationUserWhereInput
    /**
     * Limit how many NotificationUsers to delete.
     */
    limit?: number
  }

  /**
   * NotificationUser without action
   */
  export type NotificationUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationUser
     */
    select?: NotificationUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationUser
     */
    omit?: NotificationUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationUserInclude<ExtArgs> | null
  }


  /**
   * Model FCMTokens
   */

  export type AggregateFCMTokens = {
    _count: FCMTokensCountAggregateOutputType | null
    _avg: FCMTokensAvgAggregateOutputType | null
    _sum: FCMTokensSumAggregateOutputType | null
    _min: FCMTokensMinAggregateOutputType | null
    _max: FCMTokensMaxAggregateOutputType | null
  }

  export type FCMTokensAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FCMTokensSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FCMTokensMinAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
  }

  export type FCMTokensMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
  }

  export type FCMTokensCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    _all: number
  }


  export type FCMTokensAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FCMTokensSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FCMTokensMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
  }

  export type FCMTokensMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
  }

  export type FCMTokensCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    _all?: true
  }

  export type FCMTokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FCMTokens to aggregate.
     */
    where?: FCMTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCMTokens to fetch.
     */
    orderBy?: FCMTokensOrderByWithRelationInput | FCMTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FCMTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCMTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCMTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FCMTokens
    **/
    _count?: true | FCMTokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FCMTokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FCMTokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FCMTokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FCMTokensMaxAggregateInputType
  }

  export type GetFCMTokensAggregateType<T extends FCMTokensAggregateArgs> = {
        [P in keyof T & keyof AggregateFCMTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFCMTokens[P]>
      : GetScalarType<T[P], AggregateFCMTokens[P]>
  }




  export type FCMTokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FCMTokensWhereInput
    orderBy?: FCMTokensOrderByWithAggregationInput | FCMTokensOrderByWithAggregationInput[]
    by: FCMTokensScalarFieldEnum[] | FCMTokensScalarFieldEnum
    having?: FCMTokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FCMTokensCountAggregateInputType | true
    _avg?: FCMTokensAvgAggregateInputType
    _sum?: FCMTokensSumAggregateInputType
    _min?: FCMTokensMinAggregateInputType
    _max?: FCMTokensMaxAggregateInputType
  }

  export type FCMTokensGroupByOutputType = {
    id: number
    token: string
    userId: number
    _count: FCMTokensCountAggregateOutputType | null
    _avg: FCMTokensAvgAggregateOutputType | null
    _sum: FCMTokensSumAggregateOutputType | null
    _min: FCMTokensMinAggregateOutputType | null
    _max: FCMTokensMaxAggregateOutputType | null
  }

  type GetFCMTokensGroupByPayload<T extends FCMTokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FCMTokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FCMTokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FCMTokensGroupByOutputType[P]>
            : GetScalarType<T[P], FCMTokensGroupByOutputType[P]>
        }
      >
    >


  export type FCMTokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fCMTokens"]>

  export type FCMTokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fCMTokens"]>

  export type FCMTokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fCMTokens"]>

  export type FCMTokensSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
  }

  export type FCMTokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId", ExtArgs["result"]["fCMTokens"]>
  export type FCMTokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FCMTokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FCMTokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FCMTokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FCMTokens"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      userId: number
    }, ExtArgs["result"]["fCMTokens"]>
    composites: {}
  }

  type FCMTokensGetPayload<S extends boolean | null | undefined | FCMTokensDefaultArgs> = $Result.GetResult<Prisma.$FCMTokensPayload, S>

  type FCMTokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FCMTokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FCMTokensCountAggregateInputType | true
    }

  export interface FCMTokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FCMTokens'], meta: { name: 'FCMTokens' } }
    /**
     * Find zero or one FCMTokens that matches the filter.
     * @param {FCMTokensFindUniqueArgs} args - Arguments to find a FCMTokens
     * @example
     * // Get one FCMTokens
     * const fCMTokens = await prisma.fCMTokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FCMTokensFindUniqueArgs>(args: SelectSubset<T, FCMTokensFindUniqueArgs<ExtArgs>>): Prisma__FCMTokensClient<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FCMTokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FCMTokensFindUniqueOrThrowArgs} args - Arguments to find a FCMTokens
     * @example
     * // Get one FCMTokens
     * const fCMTokens = await prisma.fCMTokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FCMTokensFindUniqueOrThrowArgs>(args: SelectSubset<T, FCMTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FCMTokensClient<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FCMTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMTokensFindFirstArgs} args - Arguments to find a FCMTokens
     * @example
     * // Get one FCMTokens
     * const fCMTokens = await prisma.fCMTokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FCMTokensFindFirstArgs>(args?: SelectSubset<T, FCMTokensFindFirstArgs<ExtArgs>>): Prisma__FCMTokensClient<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FCMTokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMTokensFindFirstOrThrowArgs} args - Arguments to find a FCMTokens
     * @example
     * // Get one FCMTokens
     * const fCMTokens = await prisma.fCMTokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FCMTokensFindFirstOrThrowArgs>(args?: SelectSubset<T, FCMTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__FCMTokensClient<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FCMTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMTokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FCMTokens
     * const fCMTokens = await prisma.fCMTokens.findMany()
     * 
     * // Get first 10 FCMTokens
     * const fCMTokens = await prisma.fCMTokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fCMTokensWithIdOnly = await prisma.fCMTokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FCMTokensFindManyArgs>(args?: SelectSubset<T, FCMTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FCMTokens.
     * @param {FCMTokensCreateArgs} args - Arguments to create a FCMTokens.
     * @example
     * // Create one FCMTokens
     * const FCMTokens = await prisma.fCMTokens.create({
     *   data: {
     *     // ... data to create a FCMTokens
     *   }
     * })
     * 
     */
    create<T extends FCMTokensCreateArgs>(args: SelectSubset<T, FCMTokensCreateArgs<ExtArgs>>): Prisma__FCMTokensClient<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FCMTokens.
     * @param {FCMTokensCreateManyArgs} args - Arguments to create many FCMTokens.
     * @example
     * // Create many FCMTokens
     * const fCMTokens = await prisma.fCMTokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FCMTokensCreateManyArgs>(args?: SelectSubset<T, FCMTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FCMTokens and returns the data saved in the database.
     * @param {FCMTokensCreateManyAndReturnArgs} args - Arguments to create many FCMTokens.
     * @example
     * // Create many FCMTokens
     * const fCMTokens = await prisma.fCMTokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FCMTokens and only return the `id`
     * const fCMTokensWithIdOnly = await prisma.fCMTokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FCMTokensCreateManyAndReturnArgs>(args?: SelectSubset<T, FCMTokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FCMTokens.
     * @param {FCMTokensDeleteArgs} args - Arguments to delete one FCMTokens.
     * @example
     * // Delete one FCMTokens
     * const FCMTokens = await prisma.fCMTokens.delete({
     *   where: {
     *     // ... filter to delete one FCMTokens
     *   }
     * })
     * 
     */
    delete<T extends FCMTokensDeleteArgs>(args: SelectSubset<T, FCMTokensDeleteArgs<ExtArgs>>): Prisma__FCMTokensClient<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FCMTokens.
     * @param {FCMTokensUpdateArgs} args - Arguments to update one FCMTokens.
     * @example
     * // Update one FCMTokens
     * const fCMTokens = await prisma.fCMTokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FCMTokensUpdateArgs>(args: SelectSubset<T, FCMTokensUpdateArgs<ExtArgs>>): Prisma__FCMTokensClient<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FCMTokens.
     * @param {FCMTokensDeleteManyArgs} args - Arguments to filter FCMTokens to delete.
     * @example
     * // Delete a few FCMTokens
     * const { count } = await prisma.fCMTokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FCMTokensDeleteManyArgs>(args?: SelectSubset<T, FCMTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FCMTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMTokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FCMTokens
     * const fCMTokens = await prisma.fCMTokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FCMTokensUpdateManyArgs>(args: SelectSubset<T, FCMTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FCMTokens and returns the data updated in the database.
     * @param {FCMTokensUpdateManyAndReturnArgs} args - Arguments to update many FCMTokens.
     * @example
     * // Update many FCMTokens
     * const fCMTokens = await prisma.fCMTokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FCMTokens and only return the `id`
     * const fCMTokensWithIdOnly = await prisma.fCMTokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FCMTokensUpdateManyAndReturnArgs>(args: SelectSubset<T, FCMTokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FCMTokens.
     * @param {FCMTokensUpsertArgs} args - Arguments to update or create a FCMTokens.
     * @example
     * // Update or create a FCMTokens
     * const fCMTokens = await prisma.fCMTokens.upsert({
     *   create: {
     *     // ... data to create a FCMTokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FCMTokens we want to update
     *   }
     * })
     */
    upsert<T extends FCMTokensUpsertArgs>(args: SelectSubset<T, FCMTokensUpsertArgs<ExtArgs>>): Prisma__FCMTokensClient<$Result.GetResult<Prisma.$FCMTokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FCMTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMTokensCountArgs} args - Arguments to filter FCMTokens to count.
     * @example
     * // Count the number of FCMTokens
     * const count = await prisma.fCMTokens.count({
     *   where: {
     *     // ... the filter for the FCMTokens we want to count
     *   }
     * })
    **/
    count<T extends FCMTokensCountArgs>(
      args?: Subset<T, FCMTokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FCMTokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FCMTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMTokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FCMTokensAggregateArgs>(args: Subset<T, FCMTokensAggregateArgs>): Prisma.PrismaPromise<GetFCMTokensAggregateType<T>>

    /**
     * Group by FCMTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FCMTokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FCMTokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FCMTokensGroupByArgs['orderBy'] }
        : { orderBy?: FCMTokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FCMTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFCMTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FCMTokens model
   */
  readonly fields: FCMTokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FCMTokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FCMTokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FCMTokens model
   */
  interface FCMTokensFieldRefs {
    readonly id: FieldRef<"FCMTokens", 'Int'>
    readonly token: FieldRef<"FCMTokens", 'String'>
    readonly userId: FieldRef<"FCMTokens", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FCMTokens findUnique
   */
  export type FCMTokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * Filter, which FCMTokens to fetch.
     */
    where: FCMTokensWhereUniqueInput
  }

  /**
   * FCMTokens findUniqueOrThrow
   */
  export type FCMTokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * Filter, which FCMTokens to fetch.
     */
    where: FCMTokensWhereUniqueInput
  }

  /**
   * FCMTokens findFirst
   */
  export type FCMTokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * Filter, which FCMTokens to fetch.
     */
    where?: FCMTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCMTokens to fetch.
     */
    orderBy?: FCMTokensOrderByWithRelationInput | FCMTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FCMTokens.
     */
    cursor?: FCMTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCMTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCMTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FCMTokens.
     */
    distinct?: FCMTokensScalarFieldEnum | FCMTokensScalarFieldEnum[]
  }

  /**
   * FCMTokens findFirstOrThrow
   */
  export type FCMTokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * Filter, which FCMTokens to fetch.
     */
    where?: FCMTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCMTokens to fetch.
     */
    orderBy?: FCMTokensOrderByWithRelationInput | FCMTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FCMTokens.
     */
    cursor?: FCMTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCMTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCMTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FCMTokens.
     */
    distinct?: FCMTokensScalarFieldEnum | FCMTokensScalarFieldEnum[]
  }

  /**
   * FCMTokens findMany
   */
  export type FCMTokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * Filter, which FCMTokens to fetch.
     */
    where?: FCMTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FCMTokens to fetch.
     */
    orderBy?: FCMTokensOrderByWithRelationInput | FCMTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FCMTokens.
     */
    cursor?: FCMTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FCMTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FCMTokens.
     */
    skip?: number
    distinct?: FCMTokensScalarFieldEnum | FCMTokensScalarFieldEnum[]
  }

  /**
   * FCMTokens create
   */
  export type FCMTokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * The data needed to create a FCMTokens.
     */
    data: XOR<FCMTokensCreateInput, FCMTokensUncheckedCreateInput>
  }

  /**
   * FCMTokens createMany
   */
  export type FCMTokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FCMTokens.
     */
    data: FCMTokensCreateManyInput | FCMTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FCMTokens createManyAndReturn
   */
  export type FCMTokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * The data used to create many FCMTokens.
     */
    data: FCMTokensCreateManyInput | FCMTokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FCMTokens update
   */
  export type FCMTokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * The data needed to update a FCMTokens.
     */
    data: XOR<FCMTokensUpdateInput, FCMTokensUncheckedUpdateInput>
    /**
     * Choose, which FCMTokens to update.
     */
    where: FCMTokensWhereUniqueInput
  }

  /**
   * FCMTokens updateMany
   */
  export type FCMTokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FCMTokens.
     */
    data: XOR<FCMTokensUpdateManyMutationInput, FCMTokensUncheckedUpdateManyInput>
    /**
     * Filter which FCMTokens to update
     */
    where?: FCMTokensWhereInput
    /**
     * Limit how many FCMTokens to update.
     */
    limit?: number
  }

  /**
   * FCMTokens updateManyAndReturn
   */
  export type FCMTokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * The data used to update FCMTokens.
     */
    data: XOR<FCMTokensUpdateManyMutationInput, FCMTokensUncheckedUpdateManyInput>
    /**
     * Filter which FCMTokens to update
     */
    where?: FCMTokensWhereInput
    /**
     * Limit how many FCMTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FCMTokens upsert
   */
  export type FCMTokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * The filter to search for the FCMTokens to update in case it exists.
     */
    where: FCMTokensWhereUniqueInput
    /**
     * In case the FCMTokens found by the `where` argument doesn't exist, create a new FCMTokens with this data.
     */
    create: XOR<FCMTokensCreateInput, FCMTokensUncheckedCreateInput>
    /**
     * In case the FCMTokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FCMTokensUpdateInput, FCMTokensUncheckedUpdateInput>
  }

  /**
   * FCMTokens delete
   */
  export type FCMTokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
    /**
     * Filter which FCMTokens to delete.
     */
    where: FCMTokensWhereUniqueInput
  }

  /**
   * FCMTokens deleteMany
   */
  export type FCMTokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FCMTokens to delete
     */
    where?: FCMTokensWhereInput
    /**
     * Limit how many FCMTokens to delete.
     */
    limit?: number
  }

  /**
   * FCMTokens without action
   */
  export type FCMTokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FCMTokens
     */
    select?: FCMTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FCMTokens
     */
    omit?: FCMTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FCMTokensInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    profileImage: 'profileImage',
    visibility: 'visibility'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    images: 'images',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    price: 'price',
    status: 'status',
    ownerId: 'ownerId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    purchaserId: 'purchaserId',
    ownerId: 'ownerId',
    paymentAmount: 'paymentAmount',
    paymentMethod: 'paymentMethod',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PurchaseRequestScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    requesterId: 'requesterId',
    amount: 'amount',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PurchaseRequestScalarFieldEnum = (typeof PurchaseRequestScalarFieldEnum)[keyof typeof PurchaseRequestScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    message: 'message',
    images: 'images',
    createdAt: 'createdAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    images: 'images',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationUserScalarFieldEnum: {
    userId: 'userId',
    notificationId: 'notificationId'
  };

  export type NotificationUserScalarFieldEnum = (typeof NotificationUserScalarFieldEnum)[keyof typeof NotificationUserScalarFieldEnum]


  export const FCMTokensScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId'
  };

  export type FCMTokensScalarFieldEnum = (typeof FCMTokensScalarFieldEnum)[keyof typeof FCMTokensScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserVisibility'
   */
  export type EnumUserVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserVisibility'>
    


  /**
   * Reference to a field of type 'UserVisibility[]'
   */
  export type ListEnumUserVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserVisibility[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    visibility?: EnumUserVisibilityNullableFilter<"User"> | $Enums.UserVisibility | null
    chatsRecv?: ChatListRelationFilter
    chatsSent?: ChatListRelationFilter
    notifications?: NotificationUserListRelationFilter
    products?: ProductListRelationFilter
    sales?: PurchaseListRelationFilter
    purchases?: PurchaseListRelationFilter
    requests?: PurchaseRequestListRelationFilter
    fcmtokens?: FCMTokensListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    visibility?: SortOrderInput | SortOrder
    chatsRecv?: ChatOrderByRelationAggregateInput
    chatsSent?: ChatOrderByRelationAggregateInput
    notifications?: NotificationUserOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    sales?: PurchaseOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
    requests?: PurchaseRequestOrderByRelationAggregateInput
    fcmtokens?: FCMTokensOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    visibility?: EnumUserVisibilityNullableFilter<"User"> | $Enums.UserVisibility | null
    chatsRecv?: ChatListRelationFilter
    chatsSent?: ChatListRelationFilter
    notifications?: NotificationUserListRelationFilter
    products?: ProductListRelationFilter
    sales?: PurchaseListRelationFilter
    purchases?: PurchaseListRelationFilter
    requests?: PurchaseRequestListRelationFilter
    fcmtokens?: FCMTokensListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    visibility?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    visibility?: EnumUserVisibilityNullableWithAggregatesFilter<"User"> | $Enums.UserVisibility | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    latitude?: FloatFilter<"Product"> | number
    longitude?: FloatFilter<"Product"> | number
    address?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    ownerId?: IntFilter<"Product"> | number
    chats?: ChatListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchase?: XOR<PurchaseNullableScalarRelationFilter, PurchaseWhereInput> | null
    requests?: PurchaseRequestListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    price?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    chats?: ChatOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
    requests?: PurchaseRequestOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    latitude?: FloatFilter<"Product"> | number
    longitude?: FloatFilter<"Product"> | number
    address?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    ownerId?: IntFilter<"Product"> | number
    chats?: ChatListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchase?: XOR<PurchaseNullableScalarRelationFilter, PurchaseWhereInput> | null
    requests?: PurchaseRequestListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    price?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    latitude?: FloatWithAggregatesFilter<"Product"> | number
    longitude?: FloatWithAggregatesFilter<"Product"> | number
    address?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    ownerId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: IntFilter<"Purchase"> | number
    productId?: IntFilter<"Purchase"> | number
    purchaserId?: IntFilter<"Purchase"> | number
    ownerId?: IntFilter<"Purchase"> | number
    paymentAmount?: FloatFilter<"Purchase"> | number
    paymentMethod?: StringFilter<"Purchase"> | string
    paymentStatus?: EnumPaymentStatusFilter<"Purchase"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    purchaser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    purchaserId?: SortOrder
    ownerId?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    purchaser?: UserOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productId?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    purchaserId?: IntFilter<"Purchase"> | number
    ownerId?: IntFilter<"Purchase"> | number
    paymentAmount?: FloatFilter<"Purchase"> | number
    paymentMethod?: StringFilter<"Purchase"> | string
    paymentStatus?: EnumPaymentStatusFilter<"Purchase"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    purchaser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "productId">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    purchaserId?: SortOrder
    ownerId?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchase"> | number
    productId?: IntWithAggregatesFilter<"Purchase"> | number
    purchaserId?: IntWithAggregatesFilter<"Purchase"> | number
    ownerId?: IntWithAggregatesFilter<"Purchase"> | number
    paymentAmount?: FloatWithAggregatesFilter<"Purchase"> | number
    paymentMethod?: StringWithAggregatesFilter<"Purchase"> | string
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Purchase"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type PurchaseRequestWhereInput = {
    AND?: PurchaseRequestWhereInput | PurchaseRequestWhereInput[]
    OR?: PurchaseRequestWhereInput[]
    NOT?: PurchaseRequestWhereInput | PurchaseRequestWhereInput[]
    id?: IntFilter<"PurchaseRequest"> | number
    productId?: IntFilter<"PurchaseRequest"> | number
    requesterId?: IntFilter<"PurchaseRequest"> | number
    amount?: FloatNullableFilter<"PurchaseRequest"> | number | null
    message?: StringNullableFilter<"PurchaseRequest"> | string | null
    status?: EnumRequestStatusFilter<"PurchaseRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"PurchaseRequest"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PurchaseRequestOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    requesterId?: SortOrder
    amount?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
  }

  export type PurchaseRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseRequestWhereInput | PurchaseRequestWhereInput[]
    OR?: PurchaseRequestWhereInput[]
    NOT?: PurchaseRequestWhereInput | PurchaseRequestWhereInput[]
    productId?: IntFilter<"PurchaseRequest"> | number
    requesterId?: IntFilter<"PurchaseRequest"> | number
    amount?: FloatNullableFilter<"PurchaseRequest"> | number | null
    message?: StringNullableFilter<"PurchaseRequest"> | string | null
    status?: EnumRequestStatusFilter<"PurchaseRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"PurchaseRequest"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PurchaseRequestOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    requesterId?: SortOrder
    amount?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PurchaseRequestCountOrderByAggregateInput
    _avg?: PurchaseRequestAvgOrderByAggregateInput
    _max?: PurchaseRequestMaxOrderByAggregateInput
    _min?: PurchaseRequestMinOrderByAggregateInput
    _sum?: PurchaseRequestSumOrderByAggregateInput
  }

  export type PurchaseRequestScalarWhereWithAggregatesInput = {
    AND?: PurchaseRequestScalarWhereWithAggregatesInput | PurchaseRequestScalarWhereWithAggregatesInput[]
    OR?: PurchaseRequestScalarWhereWithAggregatesInput[]
    NOT?: PurchaseRequestScalarWhereWithAggregatesInput | PurchaseRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseRequest"> | number
    productId?: IntWithAggregatesFilter<"PurchaseRequest"> | number
    requesterId?: IntWithAggregatesFilter<"PurchaseRequest"> | number
    amount?: FloatNullableWithAggregatesFilter<"PurchaseRequest"> | number | null
    message?: StringNullableWithAggregatesFilter<"PurchaseRequest"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"PurchaseRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseRequest"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    productId?: IntFilter<"Chat"> | number
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringFilter<"Chat"> | string
    images?: StringNullableListFilter<"Chat">
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    productId?: IntFilter<"Chat"> | number
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringFilter<"Chat"> | string
    images?: StringNullableListFilter<"Chat">
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    productId?: IntWithAggregatesFilter<"Chat"> | number
    senderId?: IntWithAggregatesFilter<"Chat"> | number
    receiverId?: IntWithAggregatesFilter<"Chat"> | number
    message?: StringWithAggregatesFilter<"Chat"> | string
    images?: StringNullableListFilter<"Chat">
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    images?: StringNullableListFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    users?: NotificationUserListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    users?: NotificationUserOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    images?: StringNullableListFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    users?: NotificationUserListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    images?: StringNullableListFilter<"Notification">
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type NotificationUserWhereInput = {
    AND?: NotificationUserWhereInput | NotificationUserWhereInput[]
    OR?: NotificationUserWhereInput[]
    NOT?: NotificationUserWhereInput | NotificationUserWhereInput[]
    userId?: IntFilter<"NotificationUser"> | number
    notificationId?: IntFilter<"NotificationUser"> | number
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationUserOrderByWithRelationInput = {
    userId?: SortOrder
    notificationId?: SortOrder
    notification?: NotificationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NotificationUserWhereUniqueInput = Prisma.AtLeast<{
    userId_notificationId?: NotificationUserUserIdNotificationIdCompoundUniqueInput
    AND?: NotificationUserWhereInput | NotificationUserWhereInput[]
    OR?: NotificationUserWhereInput[]
    NOT?: NotificationUserWhereInput | NotificationUserWhereInput[]
    userId?: IntFilter<"NotificationUser"> | number
    notificationId?: IntFilter<"NotificationUser"> | number
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_notificationId">

  export type NotificationUserOrderByWithAggregationInput = {
    userId?: SortOrder
    notificationId?: SortOrder
    _count?: NotificationUserCountOrderByAggregateInput
    _avg?: NotificationUserAvgOrderByAggregateInput
    _max?: NotificationUserMaxOrderByAggregateInput
    _min?: NotificationUserMinOrderByAggregateInput
    _sum?: NotificationUserSumOrderByAggregateInput
  }

  export type NotificationUserScalarWhereWithAggregatesInput = {
    AND?: NotificationUserScalarWhereWithAggregatesInput | NotificationUserScalarWhereWithAggregatesInput[]
    OR?: NotificationUserScalarWhereWithAggregatesInput[]
    NOT?: NotificationUserScalarWhereWithAggregatesInput | NotificationUserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"NotificationUser"> | number
    notificationId?: IntWithAggregatesFilter<"NotificationUser"> | number
  }

  export type FCMTokensWhereInput = {
    AND?: FCMTokensWhereInput | FCMTokensWhereInput[]
    OR?: FCMTokensWhereInput[]
    NOT?: FCMTokensWhereInput | FCMTokensWhereInput[]
    id?: IntFilter<"FCMTokens"> | number
    token?: StringFilter<"FCMTokens"> | string
    userId?: IntFilter<"FCMTokens"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FCMTokensOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FCMTokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FCMTokensWhereInput | FCMTokensWhereInput[]
    OR?: FCMTokensWhereInput[]
    NOT?: FCMTokensWhereInput | FCMTokensWhereInput[]
    token?: StringFilter<"FCMTokens"> | string
    userId?: IntFilter<"FCMTokens"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FCMTokensOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    _count?: FCMTokensCountOrderByAggregateInput
    _avg?: FCMTokensAvgOrderByAggregateInput
    _max?: FCMTokensMaxOrderByAggregateInput
    _min?: FCMTokensMinOrderByAggregateInput
    _sum?: FCMTokensSumOrderByAggregateInput
  }

  export type FCMTokensScalarWhereWithAggregatesInput = {
    AND?: FCMTokensScalarWhereWithAggregatesInput | FCMTokensScalarWhereWithAggregatesInput[]
    OR?: FCMTokensScalarWhereWithAggregatesInput[]
    NOT?: FCMTokensScalarWhereWithAggregatesInput | FCMTokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FCMTokens"> | number
    token?: StringWithAggregatesFilter<"FCMTokens"> | string
    userId?: IntWithAggregatesFilter<"FCMTokens"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    sales?: PurchaseCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
  }

  export type ProductCreateInput = {
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    chats?: ChatCreateNestedManyWithoutProductInput
    owner: UserCreateNestedOneWithoutProductsInput
    purchase?: PurchaseCreateNestedOneWithoutProductInput
    requests?: PurchaseRequestCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    ownerId: number
    chats?: ChatUncheckedCreateNestedManyWithoutProductInput
    purchase?: PurchaseUncheckedCreateNestedOneWithoutProductInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    chats?: ChatUpdateManyWithoutProductNestedInput
    owner?: UserUpdateOneRequiredWithoutProductsNestedInput
    purchase?: PurchaseUpdateOneWithoutProductNestedInput
    requests?: PurchaseRequestUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    ownerId?: IntFieldUpdateOperationsInput | number
    chats?: ChatUncheckedUpdateManyWithoutProductNestedInput
    purchase?: PurchaseUncheckedUpdateOneWithoutProductNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    ownerId: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseCreateInput = {
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutSalesInput
    product: ProductCreateNestedOneWithoutPurchaseInput
    purchaser: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    productId: number
    purchaserId: number
    ownerId: number
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PurchaseUpdateInput = {
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSalesNestedInput
    product?: ProductUpdateOneRequiredWithoutPurchaseNestedInput
    purchaser?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    purchaserId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: number
    productId: number
    purchaserId: number
    ownerId: number
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    purchaserId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRequestCreateInput = {
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutRequestsInput
    requester: UserCreateNestedOneWithoutRequestsInput
  }

  export type PurchaseRequestUncheckedCreateInput = {
    id?: number
    productId: number
    requesterId: number
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type PurchaseRequestUpdateInput = {
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutRequestsNestedInput
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type PurchaseRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    requesterId?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRequestCreateManyInput = {
    id?: number
    productId: number
    requesterId: number
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type PurchaseRequestUpdateManyMutationInput = {
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    requesterId?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutChatsInput
    receiver: UserCreateNestedOneWithoutChatsRecvInput
    sender: UserCreateNestedOneWithoutChatsSentInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    productId: number
    senderId: number
    receiverId: number
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type ChatUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutChatsNestedInput
    receiver?: UserUpdateOneRequiredWithoutChatsRecvNestedInput
    sender?: UserUpdateOneRequiredWithoutChatsSentNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyInput = {
    id?: number
    productId: number
    senderId: number
    receiverId: number
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    body: string
    images?: NotificationCreateimagesInput | string[]
    createdAt?: Date | string
    users?: NotificationUserCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    title: string
    body: string
    images?: NotificationCreateimagesInput | string[]
    createdAt?: Date | string
    users?: NotificationUserUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    images?: NotificationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: NotificationUserUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    images?: NotificationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: NotificationUserUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: number
    title: string
    body: string
    images?: NotificationCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    images?: NotificationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    images?: NotificationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUserCreateInput = {
    notification: NotificationCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUserUncheckedCreateInput = {
    userId: number
    notificationId: number
  }

  export type NotificationUserUpdateInput = {
    notification?: NotificationUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUserCreateManyInput = {
    userId: number
    notificationId: number
  }

  export type NotificationUserUpdateManyMutationInput = {

  }

  export type NotificationUserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    notificationId?: IntFieldUpdateOperationsInput | number
  }

  export type FCMTokensCreateInput = {
    token: string
    user: UserCreateNestedOneWithoutFcmtokensInput
  }

  export type FCMTokensUncheckedCreateInput = {
    id?: number
    token: string
    userId: number
  }

  export type FCMTokensUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFcmtokensNestedInput
  }

  export type FCMTokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FCMTokensCreateManyInput = {
    id?: number
    token: string
    userId: number
  }

  export type FCMTokensUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type FCMTokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserVisibilityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserVisibility | EnumUserVisibilityFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserVisibility[] | ListEnumUserVisibilityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserVisibility[] | ListEnumUserVisibilityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserVisibilityNullableFilter<$PrismaModel> | $Enums.UserVisibility | null
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type NotificationUserListRelationFilter = {
    every?: NotificationUserWhereInput
    some?: NotificationUserWhereInput
    none?: NotificationUserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type PurchaseRequestListRelationFilter = {
    every?: PurchaseRequestWhereInput
    some?: PurchaseRequestWhereInput
    none?: PurchaseRequestWhereInput
  }

  export type FCMTokensListRelationFilter = {
    every?: FCMTokensWhereInput
    some?: FCMTokensWhereInput
    none?: FCMTokensWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FCMTokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    profileImage?: SortOrder
    visibility?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    profileImage?: SortOrder
    visibility?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    profileImage?: SortOrder
    visibility?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserVisibilityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserVisibility | EnumUserVisibilityFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserVisibility[] | ListEnumUserVisibilityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserVisibility[] | ListEnumUserVisibilityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserVisibilityNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserVisibility | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserVisibilityNullableFilter<$PrismaModel>
    _max?: NestedEnumUserVisibilityNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PurchaseNullableScalarRelationFilter = {
    is?: PurchaseWhereInput | null
    isNot?: PurchaseWhereInput | null
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    images?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    price?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    price?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    price?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    ownerId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    purchaserId?: SortOrder
    ownerId?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    purchaserId?: SortOrder
    ownerId?: SortOrder
    paymentAmount?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    purchaserId?: SortOrder
    ownerId?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    purchaserId?: SortOrder
    ownerId?: SortOrder
    paymentAmount?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    purchaserId?: SortOrder
    ownerId?: SortOrder
    paymentAmount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type PurchaseRequestCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    requesterId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    requesterId?: SortOrder
    amount?: SortOrder
  }

  export type PurchaseRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    requesterId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseRequestMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    requesterId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseRequestSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    requesterId?: SortOrder
    amount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationScalarRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type NotificationUserUserIdNotificationIdCompoundUniqueInput = {
    userId: number
    notificationId: number
  }

  export type NotificationUserCountOrderByAggregateInput = {
    userId?: SortOrder
    notificationId?: SortOrder
  }

  export type NotificationUserAvgOrderByAggregateInput = {
    userId?: SortOrder
    notificationId?: SortOrder
  }

  export type NotificationUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    notificationId?: SortOrder
  }

  export type NotificationUserMinOrderByAggregateInput = {
    userId?: SortOrder
    notificationId?: SortOrder
  }

  export type NotificationUserSumOrderByAggregateInput = {
    userId?: SortOrder
    notificationId?: SortOrder
  }

  export type FCMTokensCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type FCMTokensAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FCMTokensMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type FCMTokensMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type FCMTokensSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChatCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type NotificationUserCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationUserCreateWithoutUserInput, NotificationUserUncheckedCreateWithoutUserInput> | NotificationUserCreateWithoutUserInput[] | NotificationUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationUserCreateOrConnectWithoutUserInput | NotificationUserCreateOrConnectWithoutUserInput[]
    createMany?: NotificationUserCreateManyUserInputEnvelope
    connect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PurchaseCreateWithoutOwnerInput, PurchaseUncheckedCreateWithoutOwnerInput> | PurchaseCreateWithoutOwnerInput[] | PurchaseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutOwnerInput | PurchaseCreateOrConnectWithoutOwnerInput[]
    createMany?: PurchaseCreateManyOwnerInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutPurchaserInput = {
    create?: XOR<PurchaseCreateWithoutPurchaserInput, PurchaseUncheckedCreateWithoutPurchaserInput> | PurchaseCreateWithoutPurchaserInput[] | PurchaseUncheckedCreateWithoutPurchaserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutPurchaserInput | PurchaseCreateOrConnectWithoutPurchaserInput[]
    createMany?: PurchaseCreateManyPurchaserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<PurchaseRequestCreateWithoutRequesterInput, PurchaseRequestUncheckedCreateWithoutRequesterInput> | PurchaseRequestCreateWithoutRequesterInput[] | PurchaseRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: PurchaseRequestCreateOrConnectWithoutRequesterInput | PurchaseRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: PurchaseRequestCreateManyRequesterInputEnvelope
    connect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
  }

  export type FCMTokensCreateNestedManyWithoutUserInput = {
    create?: XOR<FCMTokensCreateWithoutUserInput, FCMTokensUncheckedCreateWithoutUserInput> | FCMTokensCreateWithoutUserInput[] | FCMTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FCMTokensCreateOrConnectWithoutUserInput | FCMTokensCreateOrConnectWithoutUserInput[]
    createMany?: FCMTokensCreateManyUserInputEnvelope
    connect?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type NotificationUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationUserCreateWithoutUserInput, NotificationUserUncheckedCreateWithoutUserInput> | NotificationUserCreateWithoutUserInput[] | NotificationUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationUserCreateOrConnectWithoutUserInput | NotificationUserCreateOrConnectWithoutUserInput[]
    createMany?: NotificationUserCreateManyUserInputEnvelope
    connect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PurchaseCreateWithoutOwnerInput, PurchaseUncheckedCreateWithoutOwnerInput> | PurchaseCreateWithoutOwnerInput[] | PurchaseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutOwnerInput | PurchaseCreateOrConnectWithoutOwnerInput[]
    createMany?: PurchaseCreateManyOwnerInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutPurchaserInput = {
    create?: XOR<PurchaseCreateWithoutPurchaserInput, PurchaseUncheckedCreateWithoutPurchaserInput> | PurchaseCreateWithoutPurchaserInput[] | PurchaseUncheckedCreateWithoutPurchaserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutPurchaserInput | PurchaseCreateOrConnectWithoutPurchaserInput[]
    createMany?: PurchaseCreateManyPurchaserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<PurchaseRequestCreateWithoutRequesterInput, PurchaseRequestUncheckedCreateWithoutRequesterInput> | PurchaseRequestCreateWithoutRequesterInput[] | PurchaseRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: PurchaseRequestCreateOrConnectWithoutRequesterInput | PurchaseRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: PurchaseRequestCreateManyRequesterInputEnvelope
    connect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
  }

  export type FCMTokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FCMTokensCreateWithoutUserInput, FCMTokensUncheckedCreateWithoutUserInput> | FCMTokensCreateWithoutUserInput[] | FCMTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FCMTokensCreateOrConnectWithoutUserInput | FCMTokensCreateOrConnectWithoutUserInput[]
    createMany?: FCMTokensCreateManyUserInputEnvelope
    connect?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumUserVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.UserVisibility | null
  }

  export type ChatUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput | ChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverInput | ChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput | ChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type NotificationUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationUserCreateWithoutUserInput, NotificationUserUncheckedCreateWithoutUserInput> | NotificationUserCreateWithoutUserInput[] | NotificationUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationUserCreateOrConnectWithoutUserInput | NotificationUserCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUserUpsertWithWhereUniqueWithoutUserInput | NotificationUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationUserCreateManyUserInputEnvelope
    set?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    disconnect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    delete?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    connect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    update?: NotificationUserUpdateWithWhereUniqueWithoutUserInput | NotificationUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUserUpdateManyWithWhereWithoutUserInput | NotificationUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationUserScalarWhereInput | NotificationUserScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutOwnerInput | ProductUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutOwnerInput | ProductUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutOwnerInput | ProductUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PurchaseCreateWithoutOwnerInput, PurchaseUncheckedCreateWithoutOwnerInput> | PurchaseCreateWithoutOwnerInput[] | PurchaseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutOwnerInput | PurchaseCreateOrConnectWithoutOwnerInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutOwnerInput | PurchaseUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PurchaseCreateManyOwnerInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutOwnerInput | PurchaseUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutOwnerInput | PurchaseUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutPurchaserNestedInput = {
    create?: XOR<PurchaseCreateWithoutPurchaserInput, PurchaseUncheckedCreateWithoutPurchaserInput> | PurchaseCreateWithoutPurchaserInput[] | PurchaseUncheckedCreateWithoutPurchaserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutPurchaserInput | PurchaseCreateOrConnectWithoutPurchaserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutPurchaserInput | PurchaseUpsertWithWhereUniqueWithoutPurchaserInput[]
    createMany?: PurchaseCreateManyPurchaserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutPurchaserInput | PurchaseUpdateWithWhereUniqueWithoutPurchaserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutPurchaserInput | PurchaseUpdateManyWithWhereWithoutPurchaserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<PurchaseRequestCreateWithoutRequesterInput, PurchaseRequestUncheckedCreateWithoutRequesterInput> | PurchaseRequestCreateWithoutRequesterInput[] | PurchaseRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: PurchaseRequestCreateOrConnectWithoutRequesterInput | PurchaseRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: PurchaseRequestUpsertWithWhereUniqueWithoutRequesterInput | PurchaseRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: PurchaseRequestCreateManyRequesterInputEnvelope
    set?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    disconnect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    delete?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    connect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    update?: PurchaseRequestUpdateWithWhereUniqueWithoutRequesterInput | PurchaseRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: PurchaseRequestUpdateManyWithWhereWithoutRequesterInput | PurchaseRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: PurchaseRequestScalarWhereInput | PurchaseRequestScalarWhereInput[]
  }

  export type FCMTokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<FCMTokensCreateWithoutUserInput, FCMTokensUncheckedCreateWithoutUserInput> | FCMTokensCreateWithoutUserInput[] | FCMTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FCMTokensCreateOrConnectWithoutUserInput | FCMTokensCreateOrConnectWithoutUserInput[]
    upsert?: FCMTokensUpsertWithWhereUniqueWithoutUserInput | FCMTokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FCMTokensCreateManyUserInputEnvelope
    set?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
    disconnect?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
    delete?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
    connect?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
    update?: FCMTokensUpdateWithWhereUniqueWithoutUserInput | FCMTokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FCMTokensUpdateManyWithWhereWithoutUserInput | FCMTokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FCMTokensScalarWhereInput | FCMTokensScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput | ChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverInput | ChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput | ChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type NotificationUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationUserCreateWithoutUserInput, NotificationUserUncheckedCreateWithoutUserInput> | NotificationUserCreateWithoutUserInput[] | NotificationUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationUserCreateOrConnectWithoutUserInput | NotificationUserCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUserUpsertWithWhereUniqueWithoutUserInput | NotificationUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationUserCreateManyUserInputEnvelope
    set?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    disconnect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    delete?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    connect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    update?: NotificationUserUpdateWithWhereUniqueWithoutUserInput | NotificationUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUserUpdateManyWithWhereWithoutUserInput | NotificationUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationUserScalarWhereInput | NotificationUserScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput> | ProductCreateWithoutOwnerInput[] | ProductUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutOwnerInput | ProductCreateOrConnectWithoutOwnerInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutOwnerInput | ProductUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProductCreateManyOwnerInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutOwnerInput | ProductUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutOwnerInput | ProductUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PurchaseCreateWithoutOwnerInput, PurchaseUncheckedCreateWithoutOwnerInput> | PurchaseCreateWithoutOwnerInput[] | PurchaseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutOwnerInput | PurchaseCreateOrConnectWithoutOwnerInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutOwnerInput | PurchaseUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PurchaseCreateManyOwnerInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutOwnerInput | PurchaseUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutOwnerInput | PurchaseUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput = {
    create?: XOR<PurchaseCreateWithoutPurchaserInput, PurchaseUncheckedCreateWithoutPurchaserInput> | PurchaseCreateWithoutPurchaserInput[] | PurchaseUncheckedCreateWithoutPurchaserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutPurchaserInput | PurchaseCreateOrConnectWithoutPurchaserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutPurchaserInput | PurchaseUpsertWithWhereUniqueWithoutPurchaserInput[]
    createMany?: PurchaseCreateManyPurchaserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutPurchaserInput | PurchaseUpdateWithWhereUniqueWithoutPurchaserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutPurchaserInput | PurchaseUpdateManyWithWhereWithoutPurchaserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<PurchaseRequestCreateWithoutRequesterInput, PurchaseRequestUncheckedCreateWithoutRequesterInput> | PurchaseRequestCreateWithoutRequesterInput[] | PurchaseRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: PurchaseRequestCreateOrConnectWithoutRequesterInput | PurchaseRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: PurchaseRequestUpsertWithWhereUniqueWithoutRequesterInput | PurchaseRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: PurchaseRequestCreateManyRequesterInputEnvelope
    set?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    disconnect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    delete?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    connect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    update?: PurchaseRequestUpdateWithWhereUniqueWithoutRequesterInput | PurchaseRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: PurchaseRequestUpdateManyWithWhereWithoutRequesterInput | PurchaseRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: PurchaseRequestScalarWhereInput | PurchaseRequestScalarWhereInput[]
  }

  export type FCMTokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FCMTokensCreateWithoutUserInput, FCMTokensUncheckedCreateWithoutUserInput> | FCMTokensCreateWithoutUserInput[] | FCMTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FCMTokensCreateOrConnectWithoutUserInput | FCMTokensCreateOrConnectWithoutUserInput[]
    upsert?: FCMTokensUpsertWithWhereUniqueWithoutUserInput | FCMTokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FCMTokensCreateManyUserInputEnvelope
    set?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
    disconnect?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
    delete?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
    connect?: FCMTokensWhereUniqueInput | FCMTokensWhereUniqueInput[]
    update?: FCMTokensUpdateWithWhereUniqueWithoutUserInput | FCMTokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FCMTokensUpdateManyWithWhereWithoutUserInput | FCMTokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FCMTokensScalarWhereInput | FCMTokensScalarWhereInput[]
  }

  export type ProductCreateimagesInput = {
    set: string[]
  }

  export type ChatCreateNestedManyWithoutProductInput = {
    create?: XOR<ChatCreateWithoutProductInput, ChatUncheckedCreateWithoutProductInput> | ChatCreateWithoutProductInput[] | ChatUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutProductInput | ChatCreateOrConnectWithoutProductInput[]
    createMany?: ChatCreateManyProductInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutProductInput = {
    create?: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseRequestCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseRequestCreateWithoutProductInput, PurchaseRequestUncheckedCreateWithoutProductInput> | PurchaseRequestCreateWithoutProductInput[] | PurchaseRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseRequestCreateOrConnectWithoutProductInput | PurchaseRequestCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseRequestCreateManyProductInputEnvelope
    connect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ChatCreateWithoutProductInput, ChatUncheckedCreateWithoutProductInput> | ChatCreateWithoutProductInput[] | ChatUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutProductInput | ChatCreateOrConnectWithoutProductInput[]
    createMany?: ChatCreateManyProductInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseRequestUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseRequestCreateWithoutProductInput, PurchaseRequestUncheckedCreateWithoutProductInput> | PurchaseRequestCreateWithoutProductInput[] | PurchaseRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseRequestCreateOrConnectWithoutProductInput | PurchaseRequestCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseRequestCreateManyProductInputEnvelope
    connect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
  }

  export type ProductUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type ChatUpdateManyWithoutProductNestedInput = {
    create?: XOR<ChatCreateWithoutProductInput, ChatUncheckedCreateWithoutProductInput> | ChatCreateWithoutProductInput[] | ChatUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutProductInput | ChatCreateOrConnectWithoutProductInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutProductInput | ChatUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ChatCreateManyProductInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutProductInput | ChatUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutProductInput | ChatUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type PurchaseUpdateOneWithoutProductNestedInput = {
    create?: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput
    upsert?: PurchaseUpsertWithoutProductInput
    disconnect?: PurchaseWhereInput | boolean
    delete?: PurchaseWhereInput | boolean
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutProductInput, PurchaseUpdateWithoutProductInput>, PurchaseUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseRequestUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseRequestCreateWithoutProductInput, PurchaseRequestUncheckedCreateWithoutProductInput> | PurchaseRequestCreateWithoutProductInput[] | PurchaseRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseRequestCreateOrConnectWithoutProductInput | PurchaseRequestCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseRequestUpsertWithWhereUniqueWithoutProductInput | PurchaseRequestUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseRequestCreateManyProductInputEnvelope
    set?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    disconnect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    delete?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    connect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    update?: PurchaseRequestUpdateWithWhereUniqueWithoutProductInput | PurchaseRequestUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseRequestUpdateManyWithWhereWithoutProductInput | PurchaseRequestUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseRequestScalarWhereInput | PurchaseRequestScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ChatCreateWithoutProductInput, ChatUncheckedCreateWithoutProductInput> | ChatCreateWithoutProductInput[] | ChatUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutProductInput | ChatCreateOrConnectWithoutProductInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutProductInput | ChatUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ChatCreateManyProductInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutProductInput | ChatUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutProductInput | ChatUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutProductInput
    upsert?: PurchaseUpsertWithoutProductInput
    disconnect?: PurchaseWhereInput | boolean
    delete?: PurchaseWhereInput | boolean
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutProductInput, PurchaseUpdateWithoutProductInput>, PurchaseUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseRequestUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseRequestCreateWithoutProductInput, PurchaseRequestUncheckedCreateWithoutProductInput> | PurchaseRequestCreateWithoutProductInput[] | PurchaseRequestUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseRequestCreateOrConnectWithoutProductInput | PurchaseRequestCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseRequestUpsertWithWhereUniqueWithoutProductInput | PurchaseRequestUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseRequestCreateManyProductInputEnvelope
    set?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    disconnect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    delete?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    connect?: PurchaseRequestWhereUniqueInput | PurchaseRequestWhereUniqueInput[]
    update?: PurchaseRequestUpdateWithWhereUniqueWithoutProductInput | PurchaseRequestUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseRequestUpdateManyWithWhereWithoutProductInput | PurchaseRequestUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseRequestScalarWhereInput | PurchaseRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSalesInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPurchaseInput = {
    create?: XOR<ProductCreateWithoutPurchaseInput, ProductUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    upsert?: UserUpsertWithoutSalesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesInput, UserUpdateWithoutSalesInput>, UserUncheckedUpdateWithoutSalesInput>
  }

  export type ProductUpdateOneRequiredWithoutPurchaseNestedInput = {
    create?: XOR<ProductCreateWithoutPurchaseInput, ProductUncheckedCreateWithoutPurchaseInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseInput
    upsert?: ProductUpsertWithoutPurchaseInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPurchaseInput, ProductUpdateWithoutPurchaseInput>, ProductUncheckedUpdateWithoutPurchaseInput>
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type ProductCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ProductCreateWithoutRequestsInput, ProductUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRequestsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type ProductUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<ProductCreateWithoutRequestsInput, ProductUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRequestsInput
    upsert?: ProductUpsertWithoutRequestsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRequestsInput, ProductUpdateWithoutRequestsInput>, ProductUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type ChatCreateimagesInput = {
    set: string[]
  }

  export type ProductCreateNestedOneWithoutChatsInput = {
    create?: XOR<ProductCreateWithoutChatsInput, ProductUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChatsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatsRecvInput = {
    create?: XOR<UserCreateWithoutChatsRecvInput, UserUncheckedCreateWithoutChatsRecvInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsRecvInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatsSentInput = {
    create?: XOR<UserCreateWithoutChatsSentInput, UserUncheckedCreateWithoutChatsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsSentInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<ProductCreateWithoutChatsInput, ProductUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChatsInput
    upsert?: ProductUpsertWithoutChatsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutChatsInput, ProductUpdateWithoutChatsInput>, ProductUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateOneRequiredWithoutChatsRecvNestedInput = {
    create?: XOR<UserCreateWithoutChatsRecvInput, UserUncheckedCreateWithoutChatsRecvInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsRecvInput
    upsert?: UserUpsertWithoutChatsRecvInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsRecvInput, UserUpdateWithoutChatsRecvInput>, UserUncheckedUpdateWithoutChatsRecvInput>
  }

  export type UserUpdateOneRequiredWithoutChatsSentNestedInput = {
    create?: XOR<UserCreateWithoutChatsSentInput, UserUncheckedCreateWithoutChatsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsSentInput
    upsert?: UserUpsertWithoutChatsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsSentInput, UserUpdateWithoutChatsSentInput>, UserUncheckedUpdateWithoutChatsSentInput>
  }

  export type NotificationCreateimagesInput = {
    set: string[]
  }

  export type NotificationUserCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationUserCreateWithoutNotificationInput, NotificationUserUncheckedCreateWithoutNotificationInput> | NotificationUserCreateWithoutNotificationInput[] | NotificationUserUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationUserCreateOrConnectWithoutNotificationInput | NotificationUserCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationUserCreateManyNotificationInputEnvelope
    connect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
  }

  export type NotificationUserUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationUserCreateWithoutNotificationInput, NotificationUserUncheckedCreateWithoutNotificationInput> | NotificationUserCreateWithoutNotificationInput[] | NotificationUserUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationUserCreateOrConnectWithoutNotificationInput | NotificationUserCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationUserCreateManyNotificationInputEnvelope
    connect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
  }

  export type NotificationUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NotificationUserUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationUserCreateWithoutNotificationInput, NotificationUserUncheckedCreateWithoutNotificationInput> | NotificationUserCreateWithoutNotificationInput[] | NotificationUserUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationUserCreateOrConnectWithoutNotificationInput | NotificationUserCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationUserUpsertWithWhereUniqueWithoutNotificationInput | NotificationUserUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationUserCreateManyNotificationInputEnvelope
    set?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    disconnect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    delete?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    connect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    update?: NotificationUserUpdateWithWhereUniqueWithoutNotificationInput | NotificationUserUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationUserUpdateManyWithWhereWithoutNotificationInput | NotificationUserUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationUserScalarWhereInput | NotificationUserScalarWhereInput[]
  }

  export type NotificationUserUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationUserCreateWithoutNotificationInput, NotificationUserUncheckedCreateWithoutNotificationInput> | NotificationUserCreateWithoutNotificationInput[] | NotificationUserUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationUserCreateOrConnectWithoutNotificationInput | NotificationUserCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationUserUpsertWithWhereUniqueWithoutNotificationInput | NotificationUserUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationUserCreateManyNotificationInputEnvelope
    set?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    disconnect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    delete?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    connect?: NotificationUserWhereUniqueInput | NotificationUserWhereUniqueInput[]
    update?: NotificationUserUpdateWithWhereUniqueWithoutNotificationInput | NotificationUserUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationUserUpdateManyWithWhereWithoutNotificationInput | NotificationUserUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationUserScalarWhereInput | NotificationUserScalarWhereInput[]
  }

  export type NotificationCreateNestedOneWithoutUsersInput = {
    create?: XOR<NotificationCreateWithoutUsersInput, NotificationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutUsersInput
    connect?: NotificationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<NotificationCreateWithoutUsersInput, NotificationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutUsersInput
    upsert?: NotificationUpsertWithoutUsersInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutUsersInput, NotificationUpdateWithoutUsersInput>, NotificationUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutFcmtokensInput = {
    create?: XOR<UserCreateWithoutFcmtokensInput, UserUncheckedCreateWithoutFcmtokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutFcmtokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFcmtokensNestedInput = {
    create?: XOR<UserCreateWithoutFcmtokensInput, UserUncheckedCreateWithoutFcmtokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutFcmtokensInput
    upsert?: UserUpsertWithoutFcmtokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFcmtokensInput, UserUpdateWithoutFcmtokensInput>, UserUncheckedUpdateWithoutFcmtokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserVisibilityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserVisibility | EnumUserVisibilityFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserVisibility[] | ListEnumUserVisibilityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserVisibility[] | ListEnumUserVisibilityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserVisibilityNullableFilter<$PrismaModel> | $Enums.UserVisibility | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserVisibilityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserVisibility | EnumUserVisibilityFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserVisibility[] | ListEnumUserVisibilityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserVisibility[] | ListEnumUserVisibilityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserVisibilityNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserVisibility | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserVisibilityNullableFilter<$PrismaModel>
    _max?: NestedEnumUserVisibilityNullableFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type ChatCreateWithoutReceiverInput = {
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutChatsInput
    sender: UserCreateNestedOneWithoutChatsSentInput
  }

  export type ChatUncheckedCreateWithoutReceiverInput = {
    id?: number
    productId: number
    senderId: number
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput>
  }

  export type ChatCreateManyReceiverInputEnvelope = {
    data: ChatCreateManyReceiverInput | ChatCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutSenderInput = {
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutChatsInput
    receiver: UserCreateNestedOneWithoutChatsRecvInput
  }

  export type ChatUncheckedCreateWithoutSenderInput = {
    id?: number
    productId: number
    receiverId: number
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutSenderInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatCreateManySenderInputEnvelope = {
    data: ChatCreateManySenderInput | ChatCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUserCreateWithoutUserInput = {
    notification: NotificationCreateNestedOneWithoutUsersInput
  }

  export type NotificationUserUncheckedCreateWithoutUserInput = {
    notificationId: number
  }

  export type NotificationUserCreateOrConnectWithoutUserInput = {
    where: NotificationUserWhereUniqueInput
    create: XOR<NotificationUserCreateWithoutUserInput, NotificationUserUncheckedCreateWithoutUserInput>
  }

  export type NotificationUserCreateManyUserInputEnvelope = {
    data: NotificationUserCreateManyUserInput | NotificationUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutOwnerInput = {
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    chats?: ChatCreateNestedManyWithoutProductInput
    purchase?: PurchaseCreateNestedOneWithoutProductInput
    requests?: PurchaseRequestCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    chats?: ChatUncheckedCreateNestedManyWithoutProductInput
    purchase?: PurchaseUncheckedCreateNestedOneWithoutProductInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput>
  }

  export type ProductCreateManyOwnerInputEnvelope = {
    data: ProductCreateManyOwnerInput | ProductCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutOwnerInput = {
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutPurchaseInput
    purchaser: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutOwnerInput = {
    id?: number
    productId: number
    purchaserId: number
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutOwnerInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutOwnerInput, PurchaseUncheckedCreateWithoutOwnerInput>
  }

  export type PurchaseCreateManyOwnerInputEnvelope = {
    data: PurchaseCreateManyOwnerInput | PurchaseCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutPurchaserInput = {
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutSalesInput
    product: ProductCreateNestedOneWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutPurchaserInput = {
    id?: number
    productId: number
    ownerId: number
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutPurchaserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutPurchaserInput, PurchaseUncheckedCreateWithoutPurchaserInput>
  }

  export type PurchaseCreateManyPurchaserInputEnvelope = {
    data: PurchaseCreateManyPurchaserInput | PurchaseCreateManyPurchaserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseRequestCreateWithoutRequesterInput = {
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutRequestsInput
  }

  export type PurchaseRequestUncheckedCreateWithoutRequesterInput = {
    id?: number
    productId: number
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type PurchaseRequestCreateOrConnectWithoutRequesterInput = {
    where: PurchaseRequestWhereUniqueInput
    create: XOR<PurchaseRequestCreateWithoutRequesterInput, PurchaseRequestUncheckedCreateWithoutRequesterInput>
  }

  export type PurchaseRequestCreateManyRequesterInputEnvelope = {
    data: PurchaseRequestCreateManyRequesterInput | PurchaseRequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type FCMTokensCreateWithoutUserInput = {
    token: string
  }

  export type FCMTokensUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
  }

  export type FCMTokensCreateOrConnectWithoutUserInput = {
    where: FCMTokensWhereUniqueInput
    create: XOR<FCMTokensCreateWithoutUserInput, FCMTokensUncheckedCreateWithoutUserInput>
  }

  export type FCMTokensCreateManyUserInputEnvelope = {
    data: FCMTokensCreateManyUserInput | FCMTokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutReceiverInput, ChatUncheckedUpdateWithoutReceiverInput>
    create: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutReceiverInput, ChatUncheckedUpdateWithoutReceiverInput>
  }

  export type ChatUpdateManyWithWhereWithoutReceiverInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
    productId?: IntFilter<"Chat"> | number
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringFilter<"Chat"> | string
    images?: StringNullableListFilter<"Chat">
    createdAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
  }

  export type ChatUpdateManyWithWhereWithoutSenderInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutSenderInput>
  }

  export type NotificationUserUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationUserWhereUniqueInput
    update: XOR<NotificationUserUpdateWithoutUserInput, NotificationUserUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationUserCreateWithoutUserInput, NotificationUserUncheckedCreateWithoutUserInput>
  }

  export type NotificationUserUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationUserWhereUniqueInput
    data: XOR<NotificationUserUpdateWithoutUserInput, NotificationUserUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUserUpdateManyWithWhereWithoutUserInput = {
    where: NotificationUserScalarWhereInput
    data: XOR<NotificationUserUpdateManyMutationInput, NotificationUserUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationUserScalarWhereInput = {
    AND?: NotificationUserScalarWhereInput | NotificationUserScalarWhereInput[]
    OR?: NotificationUserScalarWhereInput[]
    NOT?: NotificationUserScalarWhereInput | NotificationUserScalarWhereInput[]
    userId?: IntFilter<"NotificationUser"> | number
    notificationId?: IntFilter<"NotificationUser"> | number
  }

  export type ProductUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutOwnerInput, ProductUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProductCreateWithoutOwnerInput, ProductUncheckedCreateWithoutOwnerInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutOwnerInput, ProductUncheckedUpdateWithoutOwnerInput>
  }

  export type ProductUpdateManyWithWhereWithoutOwnerInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    latitude?: FloatFilter<"Product"> | number
    longitude?: FloatFilter<"Product"> | number
    address?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    ownerId?: IntFilter<"Product"> | number
  }

  export type PurchaseUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutOwnerInput, PurchaseUncheckedUpdateWithoutOwnerInput>
    create: XOR<PurchaseCreateWithoutOwnerInput, PurchaseUncheckedCreateWithoutOwnerInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutOwnerInput, PurchaseUncheckedUpdateWithoutOwnerInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutOwnerInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: IntFilter<"Purchase"> | number
    productId?: IntFilter<"Purchase"> | number
    purchaserId?: IntFilter<"Purchase"> | number
    ownerId?: IntFilter<"Purchase"> | number
    paymentAmount?: FloatFilter<"Purchase"> | number
    paymentMethod?: StringFilter<"Purchase"> | string
    paymentStatus?: EnumPaymentStatusFilter<"Purchase"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type PurchaseUpsertWithWhereUniqueWithoutPurchaserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutPurchaserInput, PurchaseUncheckedUpdateWithoutPurchaserInput>
    create: XOR<PurchaseCreateWithoutPurchaserInput, PurchaseUncheckedCreateWithoutPurchaserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutPurchaserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutPurchaserInput, PurchaseUncheckedUpdateWithoutPurchaserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutPurchaserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutPurchaserInput>
  }

  export type PurchaseRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: PurchaseRequestWhereUniqueInput
    update: XOR<PurchaseRequestUpdateWithoutRequesterInput, PurchaseRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<PurchaseRequestCreateWithoutRequesterInput, PurchaseRequestUncheckedCreateWithoutRequesterInput>
  }

  export type PurchaseRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: PurchaseRequestWhereUniqueInput
    data: XOR<PurchaseRequestUpdateWithoutRequesterInput, PurchaseRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type PurchaseRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: PurchaseRequestScalarWhereInput
    data: XOR<PurchaseRequestUpdateManyMutationInput, PurchaseRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type PurchaseRequestScalarWhereInput = {
    AND?: PurchaseRequestScalarWhereInput | PurchaseRequestScalarWhereInput[]
    OR?: PurchaseRequestScalarWhereInput[]
    NOT?: PurchaseRequestScalarWhereInput | PurchaseRequestScalarWhereInput[]
    id?: IntFilter<"PurchaseRequest"> | number
    productId?: IntFilter<"PurchaseRequest"> | number
    requesterId?: IntFilter<"PurchaseRequest"> | number
    amount?: FloatNullableFilter<"PurchaseRequest"> | number | null
    message?: StringNullableFilter<"PurchaseRequest"> | string | null
    status?: EnumRequestStatusFilter<"PurchaseRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"PurchaseRequest"> | Date | string
  }

  export type FCMTokensUpsertWithWhereUniqueWithoutUserInput = {
    where: FCMTokensWhereUniqueInput
    update: XOR<FCMTokensUpdateWithoutUserInput, FCMTokensUncheckedUpdateWithoutUserInput>
    create: XOR<FCMTokensCreateWithoutUserInput, FCMTokensUncheckedCreateWithoutUserInput>
  }

  export type FCMTokensUpdateWithWhereUniqueWithoutUserInput = {
    where: FCMTokensWhereUniqueInput
    data: XOR<FCMTokensUpdateWithoutUserInput, FCMTokensUncheckedUpdateWithoutUserInput>
  }

  export type FCMTokensUpdateManyWithWhereWithoutUserInput = {
    where: FCMTokensScalarWhereInput
    data: XOR<FCMTokensUpdateManyMutationInput, FCMTokensUncheckedUpdateManyWithoutUserInput>
  }

  export type FCMTokensScalarWhereInput = {
    AND?: FCMTokensScalarWhereInput | FCMTokensScalarWhereInput[]
    OR?: FCMTokensScalarWhereInput[]
    NOT?: FCMTokensScalarWhereInput | FCMTokensScalarWhereInput[]
    id?: IntFilter<"FCMTokens"> | number
    token?: StringFilter<"FCMTokens"> | string
    userId?: IntFilter<"FCMTokens"> | number
  }

  export type ChatCreateWithoutProductInput = {
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutChatsRecvInput
    sender: UserCreateNestedOneWithoutChatsSentInput
  }

  export type ChatUncheckedCreateWithoutProductInput = {
    id?: number
    senderId: number
    receiverId: number
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutProductInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutProductInput, ChatUncheckedCreateWithoutProductInput>
  }

  export type ChatCreateManyProductInputEnvelope = {
    data: ChatCreateManyProductInput | ChatCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProductsInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserCreateNestedManyWithoutUserInput
    sales?: PurchaseCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserUncheckedCreateNestedManyWithoutUserInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type PurchaseCreateWithoutProductInput = {
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutSalesInput
    purchaser: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutProductInput = {
    id?: number
    purchaserId: number
    ownerId: number
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutProductInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput>
  }

  export type PurchaseRequestCreateWithoutProductInput = {
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    requester: UserCreateNestedOneWithoutRequestsInput
  }

  export type PurchaseRequestUncheckedCreateWithoutProductInput = {
    id?: number
    requesterId: number
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type PurchaseRequestCreateOrConnectWithoutProductInput = {
    where: PurchaseRequestWhereUniqueInput
    create: XOR<PurchaseRequestCreateWithoutProductInput, PurchaseRequestUncheckedCreateWithoutProductInput>
  }

  export type PurchaseRequestCreateManyProductInputEnvelope = {
    data: PurchaseRequestCreateManyProductInput | PurchaseRequestCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithWhereUniqueWithoutProductInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutProductInput, ChatUncheckedUpdateWithoutProductInput>
    create: XOR<ChatCreateWithoutProductInput, ChatUncheckedCreateWithoutProductInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutProductInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutProductInput, ChatUncheckedUpdateWithoutProductInput>
  }

  export type ChatUpdateManyWithWhereWithoutProductInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutProductInput>
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUpdateManyWithoutUserNestedInput
    sales?: PurchaseUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUncheckedUpdateManyWithoutUserNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PurchaseUpsertWithoutProductInput = {
    update: XOR<PurchaseUpdateWithoutProductInput, PurchaseUncheckedUpdateWithoutProductInput>
    create: XOR<PurchaseCreateWithoutProductInput, PurchaseUncheckedCreateWithoutProductInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutProductInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutProductInput, PurchaseUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseUpdateWithoutProductInput = {
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSalesNestedInput
    purchaser?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaserId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRequestUpsertWithWhereUniqueWithoutProductInput = {
    where: PurchaseRequestWhereUniqueInput
    update: XOR<PurchaseRequestUpdateWithoutProductInput, PurchaseRequestUncheckedUpdateWithoutProductInput>
    create: XOR<PurchaseRequestCreateWithoutProductInput, PurchaseRequestUncheckedCreateWithoutProductInput>
  }

  export type PurchaseRequestUpdateWithWhereUniqueWithoutProductInput = {
    where: PurchaseRequestWhereUniqueInput
    data: XOR<PurchaseRequestUpdateWithoutProductInput, PurchaseRequestUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseRequestUpdateManyWithWhereWithoutProductInput = {
    where: PurchaseRequestScalarWhereInput
    data: XOR<PurchaseRequestUpdateManyMutationInput, PurchaseRequestUncheckedUpdateManyWithoutProductInput>
  }

  export type UserCreateWithoutSalesInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalesInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
  }

  export type ProductCreateWithoutPurchaseInput = {
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    chats?: ChatCreateNestedManyWithoutProductInput
    owner: UserCreateNestedOneWithoutProductsInput
    requests?: PurchaseRequestCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPurchaseInput = {
    id?: number
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    ownerId: number
    chats?: ChatUncheckedCreateNestedManyWithoutProductInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPurchaseInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchaseInput, ProductUncheckedCreateWithoutPurchaseInput>
  }

  export type UserCreateWithoutPurchasesInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    sales?: PurchaseCreateNestedManyWithoutOwnerInput
    requests?: PurchaseRequestCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutOwnerInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type UserUpsertWithoutSalesInput = {
    update: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateWithoutSalesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutPurchaseInput = {
    update: XOR<ProductUpdateWithoutPurchaseInput, ProductUncheckedUpdateWithoutPurchaseInput>
    create: XOR<ProductCreateWithoutPurchaseInput, ProductUncheckedCreateWithoutPurchaseInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPurchaseInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPurchaseInput, ProductUncheckedUpdateWithoutPurchaseInput>
  }

  export type ProductUpdateWithoutPurchaseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    chats?: ChatUpdateManyWithoutProductNestedInput
    owner?: UserUpdateOneRequiredWithoutProductsNestedInput
    requests?: PurchaseRequestUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    ownerId?: IntFieldUpdateOperationsInput | number
    chats?: ChatUncheckedUpdateManyWithoutProductNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUpdateManyWithoutOwnerNestedInput
    requests?: PurchaseRequestUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutRequestsInput = {
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    chats?: ChatCreateNestedManyWithoutProductInput
    owner: UserCreateNestedOneWithoutProductsInput
    purchase?: PurchaseCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRequestsInput = {
    id?: number
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    ownerId: number
    chats?: ChatUncheckedCreateNestedManyWithoutProductInput
    purchase?: PurchaseUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRequestsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRequestsInput, ProductUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutRequestsInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    sales?: PurchaseCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseCreateNestedManyWithoutPurchaserInput
    fcmtokens?: FCMTokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPurchaserInput
    fcmtokens?: FCMTokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type ProductUpsertWithoutRequestsInput = {
    update: XOR<ProductUpdateWithoutRequestsInput, ProductUncheckedUpdateWithoutRequestsInput>
    create: XOR<ProductCreateWithoutRequestsInput, ProductUncheckedCreateWithoutRequestsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRequestsInput, ProductUncheckedUpdateWithoutRequestsInput>
  }

  export type ProductUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    chats?: ChatUpdateManyWithoutProductNestedInput
    owner?: UserUpdateOneRequiredWithoutProductsNestedInput
    purchase?: PurchaseUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    ownerId?: IntFieldUpdateOperationsInput | number
    chats?: ChatUncheckedUpdateManyWithoutProductNestedInput
    purchase?: PurchaseUncheckedUpdateOneWithoutProductNestedInput
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUpdateManyWithoutPurchaserNestedInput
    fcmtokens?: FCMTokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput
    fcmtokens?: FCMTokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutChatsInput = {
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    owner: UserCreateNestedOneWithoutProductsInput
    purchase?: PurchaseCreateNestedOneWithoutProductInput
    requests?: PurchaseRequestCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutChatsInput = {
    id?: number
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
    ownerId: number
    purchase?: PurchaseUncheckedCreateNestedOneWithoutProductInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutChatsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutChatsInput, ProductUncheckedCreateWithoutChatsInput>
  }

  export type UserCreateWithoutChatsRecvInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    sales?: PurchaseCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsRecvInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsRecvInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsRecvInput, UserUncheckedCreateWithoutChatsRecvInput>
  }

  export type UserCreateWithoutChatsSentInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUserCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    sales?: PurchaseCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsSentInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUserUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsSentInput, UserUncheckedCreateWithoutChatsSentInput>
  }

  export type ProductUpsertWithoutChatsInput = {
    update: XOR<ProductUpdateWithoutChatsInput, ProductUncheckedUpdateWithoutChatsInput>
    create: XOR<ProductCreateWithoutChatsInput, ProductUncheckedCreateWithoutChatsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutChatsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutChatsInput, ProductUncheckedUpdateWithoutChatsInput>
  }

  export type ProductUpdateWithoutChatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    owner?: UserUpdateOneRequiredWithoutProductsNestedInput
    purchase?: PurchaseUpdateOneWithoutProductNestedInput
    requests?: PurchaseRequestUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    ownerId?: IntFieldUpdateOperationsInput | number
    purchase?: PurchaseUncheckedUpdateOneWithoutProductNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutChatsRecvInput = {
    update: XOR<UserUpdateWithoutChatsRecvInput, UserUncheckedUpdateWithoutChatsRecvInput>
    create: XOR<UserCreateWithoutChatsRecvInput, UserUncheckedCreateWithoutChatsRecvInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsRecvInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsRecvInput, UserUncheckedUpdateWithoutChatsRecvInput>
  }

  export type UserUpdateWithoutChatsRecvInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsRecvInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutChatsSentInput = {
    update: XOR<UserUpdateWithoutChatsSentInput, UserUncheckedUpdateWithoutChatsSentInput>
    create: XOR<UserCreateWithoutChatsSentInput, UserUncheckedCreateWithoutChatsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsSentInput, UserUncheckedUpdateWithoutChatsSentInput>
  }

  export type UserUpdateWithoutChatsSentInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUserUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUserUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationUserCreateWithoutNotificationInput = {
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUserUncheckedCreateWithoutNotificationInput = {
    userId: number
  }

  export type NotificationUserCreateOrConnectWithoutNotificationInput = {
    where: NotificationUserWhereUniqueInput
    create: XOR<NotificationUserCreateWithoutNotificationInput, NotificationUserUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationUserCreateManyNotificationInputEnvelope = {
    data: NotificationUserCreateManyNotificationInput | NotificationUserCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUserUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationUserWhereUniqueInput
    update: XOR<NotificationUserUpdateWithoutNotificationInput, NotificationUserUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationUserCreateWithoutNotificationInput, NotificationUserUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationUserUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationUserWhereUniqueInput
    data: XOR<NotificationUserUpdateWithoutNotificationInput, NotificationUserUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationUserUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationUserScalarWhereInput
    data: XOR<NotificationUserUpdateManyMutationInput, NotificationUserUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationCreateWithoutUsersInput = {
    title: string
    body: string
    images?: NotificationCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    body: string
    images?: NotificationCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUsersInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUsersInput, NotificationUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    sales?: PurchaseCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput
    fcmtokens?: FCMTokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type NotificationUpsertWithoutUsersInput = {
    update: XOR<NotificationUpdateWithoutUsersInput, NotificationUncheckedUpdateWithoutUsersInput>
    create: XOR<NotificationCreateWithoutUsersInput, NotificationUncheckedCreateWithoutUsersInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutUsersInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutUsersInput, NotificationUncheckedUpdateWithoutUsersInput>
  }

  export type NotificationUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    images?: NotificationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    images?: NotificationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput
    fcmtokens?: FCMTokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFcmtokensInput = {
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserCreateNestedManyWithoutUserInput
    products?: ProductCreateNestedManyWithoutOwnerInput
    sales?: PurchaseCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutFcmtokensInput = {
    id?: number
    email: string
    password: string
    username?: string | null
    profileImage?: string | null
    visibility?: $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedCreateNestedManyWithoutReceiverInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUserUncheckedCreateNestedManyWithoutUserInput
    products?: ProductUncheckedCreateNestedManyWithoutOwnerInput
    sales?: PurchaseUncheckedCreateNestedManyWithoutOwnerInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutPurchaserInput
    requests?: PurchaseRequestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutFcmtokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFcmtokensInput, UserUncheckedCreateWithoutFcmtokensInput>
  }

  export type UserUpsertWithoutFcmtokensInput = {
    update: XOR<UserUpdateWithoutFcmtokensInput, UserUncheckedUpdateWithoutFcmtokensInput>
    create: XOR<UserCreateWithoutFcmtokensInput, UserUncheckedCreateWithoutFcmtokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFcmtokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFcmtokensInput, UserUncheckedUpdateWithoutFcmtokensInput>
  }

  export type UserUpdateWithoutFcmtokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUpdateManyWithoutUserNestedInput
    products?: ProductUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutFcmtokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: NullableEnumUserVisibilityFieldUpdateOperationsInput | $Enums.UserVisibility | null
    chatsRecv?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUserUncheckedUpdateManyWithoutUserNestedInput
    products?: ProductUncheckedUpdateManyWithoutOwnerNestedInput
    sales?: PurchaseUncheckedUpdateManyWithoutOwnerNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutPurchaserNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type ChatCreateManyReceiverInput = {
    id?: number
    productId: number
    senderId: number
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type ChatCreateManySenderInput = {
    id?: number
    productId: number
    receiverId: number
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type NotificationUserCreateManyUserInput = {
    notificationId: number
  }

  export type ProductCreateManyOwnerInput = {
    id?: number
    name: string
    description: string
    images?: ProductCreateimagesInput | string[]
    latitude: number
    longitude: number
    address: string
    price: number
    status: $Enums.ProductStatus
  }

  export type PurchaseCreateManyOwnerInput = {
    id?: number
    productId: number
    purchaserId: number
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PurchaseCreateManyPurchaserInput = {
    id?: number
    productId: number
    ownerId: number
    paymentAmount: number
    paymentMethod: string
    paymentStatus: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PurchaseRequestCreateManyRequesterInput = {
    id?: number
    productId: number
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type FCMTokensCreateManyUserInput = {
    id?: number
    token: string
  }

  export type ChatUpdateWithoutReceiverInput = {
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutChatsNestedInput
    sender?: UserUpdateOneRequiredWithoutChatsSentNestedInput
  }

  export type ChatUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutSenderInput = {
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutChatsNestedInput
    receiver?: UserUpdateOneRequiredWithoutChatsRecvNestedInput
  }

  export type ChatUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUserUpdateWithoutUserInput = {
    notification?: NotificationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type NotificationUserUncheckedUpdateWithoutUserInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUserUncheckedUpdateManyWithoutUserInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    chats?: ChatUpdateManyWithoutProductNestedInput
    purchase?: PurchaseUpdateOneWithoutProductNestedInput
    requests?: PurchaseRequestUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    chats?: ChatUncheckedUpdateManyWithoutProductNestedInput
    purchase?: PurchaseUncheckedUpdateOneWithoutProductNestedInput
    requests?: PurchaseRequestUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
  }

  export type PurchaseUpdateWithoutOwnerInput = {
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutPurchaseNestedInput
    purchaser?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    purchaserId?: IntFieldUpdateOperationsInput | number
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    purchaserId?: IntFieldUpdateOperationsInput | number
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutPurchaserInput = {
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSalesNestedInput
    product?: ProductUpdateOneRequiredWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutPurchaserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutPurchaserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    paymentAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRequestUpdateWithoutRequesterInput = {
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type PurchaseRequestUncheckedUpdateWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FCMTokensUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type FCMTokensUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type FCMTokensUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCreateManyProductInput = {
    id?: number
    senderId: number
    receiverId: number
    message: string
    images?: ChatCreateimagesInput | string[]
    createdAt?: Date | string
  }

  export type PurchaseRequestCreateManyProductInput = {
    id?: number
    requesterId: number
    amount?: number | null
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
  }

  export type ChatUpdateWithoutProductInput = {
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutChatsRecvNestedInput
    sender?: UserUpdateOneRequiredWithoutChatsSentNestedInput
  }

  export type ChatUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    images?: ChatUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRequestUpdateWithoutProductInput = {
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type PurchaseRequestUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseRequestUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: IntFieldUpdateOperationsInput | number
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUserCreateManyNotificationInput = {
    userId: number
  }

  export type NotificationUserUpdateWithoutNotificationInput = {
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUserUncheckedUpdateWithoutNotificationInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUserUncheckedUpdateManyWithoutNotificationInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}