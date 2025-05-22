
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model StripePayment
 * 
 */
export type StripePayment = $Result.DefaultSelection<Prisma.$StripePaymentPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>
/**
 * Model AppUsage
 * 
 */
export type AppUsage = $Result.DefaultSelection<Prisma.$AppUsagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stripePayment`: Exposes CRUD operations for the **StripePayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StripePayments
    * const stripePayments = await prisma.stripePayment.findMany()
    * ```
    */
  get stripePayment(): Prisma.StripePaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appUsage`: Exposes CRUD operations for the **AppUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsages
    * const appUsages = await prisma.appUsage.findMany()
    * ```
    */
  get appUsage(): Prisma.AppUsageDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Customer: 'Customer',
    Subscription: 'Subscription',
    StripePayment: 'StripePayment',
    CreditTransaction: 'CreditTransaction',
    AppUsage: 'AppUsage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "customer" | "subscription" | "stripePayment" | "creditTransaction" | "appUsage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      StripePayment: {
        payload: Prisma.$StripePaymentPayload<ExtArgs>
        fields: Prisma.StripePaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StripePaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StripePaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>
          }
          findFirst: {
            args: Prisma.StripePaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StripePaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>
          }
          findMany: {
            args: Prisma.StripePaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>[]
          }
          create: {
            args: Prisma.StripePaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>
          }
          createMany: {
            args: Prisma.StripePaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StripePaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>[]
          }
          delete: {
            args: Prisma.StripePaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>
          }
          update: {
            args: Prisma.StripePaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>
          }
          deleteMany: {
            args: Prisma.StripePaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StripePaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StripePaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>[]
          }
          upsert: {
            args: Prisma.StripePaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripePaymentPayload>
          }
          aggregate: {
            args: Prisma.StripePaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStripePayment>
          }
          groupBy: {
            args: Prisma.StripePaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StripePaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StripePaymentCountArgs<ExtArgs>
            result: $Utils.Optional<StripePaymentCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
      AppUsage: {
        payload: Prisma.$AppUsagePayload<ExtArgs>
        fields: Prisma.AppUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>
          }
          findFirst: {
            args: Prisma.AppUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>
          }
          findMany: {
            args: Prisma.AppUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>[]
          }
          create: {
            args: Prisma.AppUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>
          }
          createMany: {
            args: Prisma.AppUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>[]
          }
          delete: {
            args: Prisma.AppUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>
          }
          update: {
            args: Prisma.AppUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>
          }
          deleteMany: {
            args: Prisma.AppUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>[]
          }
          upsert: {
            args: Prisma.AppUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUsagePayload>
          }
          aggregate: {
            args: Prisma.AppUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUsage>
          }
          groupBy: {
            args: Prisma.AppUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUsageCountArgs<ExtArgs>
            result: $Utils.Optional<AppUsageCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    customer?: CustomerOmit
    subscription?: SubscriptionOmit
    stripePayment?: StripePaymentOmit
    creditTransaction?: CreditTransactionOmit
    appUsage?: AppUsageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    subscriptions: number
    payments: number
    creditTransactions: number
    appUsages: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | CustomerCountOutputTypeCountSubscriptionsArgs
    payments?: boolean | CustomerCountOutputTypeCountPaymentsArgs
    creditTransactions?: boolean | CustomerCountOutputTypeCountCreditTransactionsArgs
    appUsages?: boolean | CustomerCountOutputTypeCountAppUsagesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StripePaymentWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCreditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAppUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUsageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    stripeCustomerId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    stripeCustomerId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    stripeCustomerId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    stripeCustomerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    stripeCustomerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    stripeCustomerId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    stripeCustomerId: string | null
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    stripeCustomerId?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    customer?: boolean | User$customerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    stripeCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    stripeCustomerId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "stripeCustomerId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    customer?: boolean | User$customerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      stripeCustomerId: string | null
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends User$customerArgs<ExtArgs> = {}>(args?: Subset<T, User$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
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
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.customer
   */
  export type User$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
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
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeCustomerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    userId: number
    stripeCustomerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    userId: string
    stripeCustomerId: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscriptions?: boolean | Customer$subscriptionsArgs<ExtArgs>
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    creditTransactions?: boolean | Customer$creditTransactionsArgs<ExtArgs>
    appUsages?: boolean | Customer$appUsagesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeCustomerId" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subscriptions?: boolean | Customer$subscriptionsArgs<ExtArgs>
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    creditTransactions?: boolean | Customer$creditTransactionsArgs<ExtArgs>
    appUsages?: boolean | Customer$appUsagesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      payments: Prisma.$StripePaymentPayload<ExtArgs>[]
      creditTransactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
      appUsages: Prisma.$AppUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeCustomerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscriptions<T extends Customer$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Customer$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditTransactions<T extends Customer$creditTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$creditTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appUsages<T extends Customer$appUsagesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$appUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly userId: FieldRef<"Customer", 'String'>
    readonly stripeCustomerId: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.subscriptions
   */
  export type Customer$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Customer.payments
   */
  export type Customer$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    where?: StripePaymentWhereInput
    orderBy?: StripePaymentOrderByWithRelationInput | StripePaymentOrderByWithRelationInput[]
    cursor?: StripePaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StripePaymentScalarFieldEnum | StripePaymentScalarFieldEnum[]
  }

  /**
   * Customer.creditTransactions
   */
  export type Customer$creditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * Customer.appUsages
   */
  export type Customer$appUsagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    where?: AppUsageWhereInput
    orderBy?: AppUsageOrderByWithRelationInput | AppUsageOrderByWithRelationInput[]
    cursor?: AppUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppUsageScalarFieldEnum | AppUsageScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    productId: string | null
    status: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    canceledAt: Date | null
    endedAt: Date | null
    trialStart: Date | null
    trialEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    productId: string | null
    status: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    canceledAt: Date | null
    endedAt: Date | null
    trialStart: Date | null
    trialEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    customerId: number
    stripeSubscriptionId: number
    stripePriceId: number
    productId: number
    status: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelAtPeriodEnd: number
    canceledAt: number
    endedAt: number
    trialStart: number
    trialEnd: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    customerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    productId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    endedAt?: true
    trialStart?: true
    trialEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    customerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    productId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    endedAt?: true
    trialStart?: true
    trialEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    customerId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    productId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    endedAt?: true
    trialStart?: true
    trialEnd?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    customerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    productId: string | null
    status: string
    currentPeriodStart: Date
    currentPeriodEnd: Date
    cancelAtPeriodEnd: boolean
    canceledAt: Date | null
    endedAt: Date | null
    trialStart: Date | null
    trialEnd: Date | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    productId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    trialStart?: boolean
    trialEnd?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    productId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    trialStart?: boolean
    trialEnd?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    productId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    trialStart?: boolean
    trialEnd?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    customerId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    productId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    endedAt?: boolean
    trialStart?: boolean
    trialEnd?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "stripeSubscriptionId" | "stripePriceId" | "productId" | "status" | "currentPeriodStart" | "currentPeriodEnd" | "cancelAtPeriodEnd" | "canceledAt" | "endedAt" | "trialStart" | "trialEnd" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      stripeSubscriptionId: string
      stripePriceId: string
      productId: string | null
      status: string
      currentPeriodStart: Date
      currentPeriodEnd: Date
      cancelAtPeriodEnd: boolean
      canceledAt: Date | null
      endedAt: Date | null
      trialStart: Date | null
      trialEnd: Date | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly customerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly stripePriceId: FieldRef<"Subscription", 'String'>
    readonly productId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"Subscription", 'Boolean'>
    readonly canceledAt: FieldRef<"Subscription", 'DateTime'>
    readonly endedAt: FieldRef<"Subscription", 'DateTime'>
    readonly trialStart: FieldRef<"Subscription", 'DateTime'>
    readonly trialEnd: FieldRef<"Subscription", 'DateTime'>
    readonly metadata: FieldRef<"Subscription", 'Json'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model StripePayment
   */

  export type AggregateStripePayment = {
    _count: StripePaymentCountAggregateOutputType | null
    _avg: StripePaymentAvgAggregateOutputType | null
    _sum: StripePaymentSumAggregateOutputType | null
    _min: StripePaymentMinAggregateOutputType | null
    _max: StripePaymentMaxAggregateOutputType | null
  }

  export type StripePaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type StripePaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type StripePaymentMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripePaymentIntentId: string | null
    stripeChargeId: string | null
    stripeCheckoutSessionId: string | null
    stripeInvoiceId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    paymentMethodType: string | null
    receiptUrl: string | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StripePaymentMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripePaymentIntentId: string | null
    stripeChargeId: string | null
    stripeCheckoutSessionId: string | null
    stripeInvoiceId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    paymentMethodType: string | null
    receiptUrl: string | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StripePaymentCountAggregateOutputType = {
    id: number
    customerId: number
    stripePaymentIntentId: number
    stripeChargeId: number
    stripeCheckoutSessionId: number
    stripeInvoiceId: number
    amount: number
    currency: number
    status: number
    paymentMethodType: number
    receiptUrl: number
    failureReason: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StripePaymentAvgAggregateInputType = {
    amount?: true
  }

  export type StripePaymentSumAggregateInputType = {
    amount?: true
  }

  export type StripePaymentMinAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentIntentId?: true
    stripeChargeId?: true
    stripeCheckoutSessionId?: true
    stripeInvoiceId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethodType?: true
    receiptUrl?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StripePaymentMaxAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentIntentId?: true
    stripeChargeId?: true
    stripeCheckoutSessionId?: true
    stripeInvoiceId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethodType?: true
    receiptUrl?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StripePaymentCountAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentIntentId?: true
    stripeChargeId?: true
    stripeCheckoutSessionId?: true
    stripeInvoiceId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethodType?: true
    receiptUrl?: true
    failureReason?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StripePaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripePayment to aggregate.
     */
    where?: StripePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripePayments to fetch.
     */
    orderBy?: StripePaymentOrderByWithRelationInput | StripePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StripePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StripePayments
    **/
    _count?: true | StripePaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StripePaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StripePaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StripePaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StripePaymentMaxAggregateInputType
  }

  export type GetStripePaymentAggregateType<T extends StripePaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateStripePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStripePayment[P]>
      : GetScalarType<T[P], AggregateStripePayment[P]>
  }




  export type StripePaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StripePaymentWhereInput
    orderBy?: StripePaymentOrderByWithAggregationInput | StripePaymentOrderByWithAggregationInput[]
    by: StripePaymentScalarFieldEnum[] | StripePaymentScalarFieldEnum
    having?: StripePaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StripePaymentCountAggregateInputType | true
    _avg?: StripePaymentAvgAggregateInputType
    _sum?: StripePaymentSumAggregateInputType
    _min?: StripePaymentMinAggregateInputType
    _max?: StripePaymentMaxAggregateInputType
  }

  export type StripePaymentGroupByOutputType = {
    id: string
    customerId: string | null
    stripePaymentIntentId: string | null
    stripeChargeId: string | null
    stripeCheckoutSessionId: string | null
    stripeInvoiceId: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType: string | null
    receiptUrl: string | null
    failureReason: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: StripePaymentCountAggregateOutputType | null
    _avg: StripePaymentAvgAggregateOutputType | null
    _sum: StripePaymentSumAggregateOutputType | null
    _min: StripePaymentMinAggregateOutputType | null
    _max: StripePaymentMaxAggregateOutputType | null
  }

  type GetStripePaymentGroupByPayload<T extends StripePaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StripePaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StripePaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StripePaymentGroupByOutputType[P]>
            : GetScalarType<T[P], StripePaymentGroupByOutputType[P]>
        }
      >
    >


  export type StripePaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripePaymentIntentId?: boolean
    stripeChargeId?: boolean
    stripeCheckoutSessionId?: boolean
    stripeInvoiceId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethodType?: boolean
    receiptUrl?: boolean
    failureReason?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | StripePayment$customerArgs<ExtArgs>
    creditTransaction?: boolean | StripePayment$creditTransactionArgs<ExtArgs>
  }, ExtArgs["result"]["stripePayment"]>

  export type StripePaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripePaymentIntentId?: boolean
    stripeChargeId?: boolean
    stripeCheckoutSessionId?: boolean
    stripeInvoiceId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethodType?: boolean
    receiptUrl?: boolean
    failureReason?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | StripePayment$customerArgs<ExtArgs>
  }, ExtArgs["result"]["stripePayment"]>

  export type StripePaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripePaymentIntentId?: boolean
    stripeChargeId?: boolean
    stripeCheckoutSessionId?: boolean
    stripeInvoiceId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethodType?: boolean
    receiptUrl?: boolean
    failureReason?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | StripePayment$customerArgs<ExtArgs>
  }, ExtArgs["result"]["stripePayment"]>

  export type StripePaymentSelectScalar = {
    id?: boolean
    customerId?: boolean
    stripePaymentIntentId?: boolean
    stripeChargeId?: boolean
    stripeCheckoutSessionId?: boolean
    stripeInvoiceId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethodType?: boolean
    receiptUrl?: boolean
    failureReason?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StripePaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "stripePaymentIntentId" | "stripeChargeId" | "stripeCheckoutSessionId" | "stripeInvoiceId" | "amount" | "currency" | "status" | "paymentMethodType" | "receiptUrl" | "failureReason" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["stripePayment"]>
  export type StripePaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | StripePayment$customerArgs<ExtArgs>
    creditTransaction?: boolean | StripePayment$creditTransactionArgs<ExtArgs>
  }
  export type StripePaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | StripePayment$customerArgs<ExtArgs>
  }
  export type StripePaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | StripePayment$customerArgs<ExtArgs>
  }

  export type $StripePaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StripePayment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      creditTransaction: Prisma.$CreditTransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string | null
      stripePaymentIntentId: string | null
      stripeChargeId: string | null
      stripeCheckoutSessionId: string | null
      stripeInvoiceId: string | null
      amount: number
      currency: string
      status: string
      paymentMethodType: string | null
      receiptUrl: string | null
      failureReason: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stripePayment"]>
    composites: {}
  }

  type StripePaymentGetPayload<S extends boolean | null | undefined | StripePaymentDefaultArgs> = $Result.GetResult<Prisma.$StripePaymentPayload, S>

  type StripePaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StripePaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StripePaymentCountAggregateInputType | true
    }

  export interface StripePaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StripePayment'], meta: { name: 'StripePayment' } }
    /**
     * Find zero or one StripePayment that matches the filter.
     * @param {StripePaymentFindUniqueArgs} args - Arguments to find a StripePayment
     * @example
     * // Get one StripePayment
     * const stripePayment = await prisma.stripePayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StripePaymentFindUniqueArgs>(args: SelectSubset<T, StripePaymentFindUniqueArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StripePayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StripePaymentFindUniqueOrThrowArgs} args - Arguments to find a StripePayment
     * @example
     * // Get one StripePayment
     * const stripePayment = await prisma.stripePayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StripePaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, StripePaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripePayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripePaymentFindFirstArgs} args - Arguments to find a StripePayment
     * @example
     * // Get one StripePayment
     * const stripePayment = await prisma.stripePayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StripePaymentFindFirstArgs>(args?: SelectSubset<T, StripePaymentFindFirstArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripePayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripePaymentFindFirstOrThrowArgs} args - Arguments to find a StripePayment
     * @example
     * // Get one StripePayment
     * const stripePayment = await prisma.stripePayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StripePaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, StripePaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StripePayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripePaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StripePayments
     * const stripePayments = await prisma.stripePayment.findMany()
     * 
     * // Get first 10 StripePayments
     * const stripePayments = await prisma.stripePayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stripePaymentWithIdOnly = await prisma.stripePayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StripePaymentFindManyArgs>(args?: SelectSubset<T, StripePaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StripePayment.
     * @param {StripePaymentCreateArgs} args - Arguments to create a StripePayment.
     * @example
     * // Create one StripePayment
     * const StripePayment = await prisma.stripePayment.create({
     *   data: {
     *     // ... data to create a StripePayment
     *   }
     * })
     * 
     */
    create<T extends StripePaymentCreateArgs>(args: SelectSubset<T, StripePaymentCreateArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StripePayments.
     * @param {StripePaymentCreateManyArgs} args - Arguments to create many StripePayments.
     * @example
     * // Create many StripePayments
     * const stripePayment = await prisma.stripePayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StripePaymentCreateManyArgs>(args?: SelectSubset<T, StripePaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StripePayments and returns the data saved in the database.
     * @param {StripePaymentCreateManyAndReturnArgs} args - Arguments to create many StripePayments.
     * @example
     * // Create many StripePayments
     * const stripePayment = await prisma.stripePayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StripePayments and only return the `id`
     * const stripePaymentWithIdOnly = await prisma.stripePayment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StripePaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, StripePaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StripePayment.
     * @param {StripePaymentDeleteArgs} args - Arguments to delete one StripePayment.
     * @example
     * // Delete one StripePayment
     * const StripePayment = await prisma.stripePayment.delete({
     *   where: {
     *     // ... filter to delete one StripePayment
     *   }
     * })
     * 
     */
    delete<T extends StripePaymentDeleteArgs>(args: SelectSubset<T, StripePaymentDeleteArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StripePayment.
     * @param {StripePaymentUpdateArgs} args - Arguments to update one StripePayment.
     * @example
     * // Update one StripePayment
     * const stripePayment = await prisma.stripePayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StripePaymentUpdateArgs>(args: SelectSubset<T, StripePaymentUpdateArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StripePayments.
     * @param {StripePaymentDeleteManyArgs} args - Arguments to filter StripePayments to delete.
     * @example
     * // Delete a few StripePayments
     * const { count } = await prisma.stripePayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StripePaymentDeleteManyArgs>(args?: SelectSubset<T, StripePaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripePaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StripePayments
     * const stripePayment = await prisma.stripePayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StripePaymentUpdateManyArgs>(args: SelectSubset<T, StripePaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripePayments and returns the data updated in the database.
     * @param {StripePaymentUpdateManyAndReturnArgs} args - Arguments to update many StripePayments.
     * @example
     * // Update many StripePayments
     * const stripePayment = await prisma.stripePayment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StripePayments and only return the `id`
     * const stripePaymentWithIdOnly = await prisma.stripePayment.updateManyAndReturn({
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
    updateManyAndReturn<T extends StripePaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, StripePaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StripePayment.
     * @param {StripePaymentUpsertArgs} args - Arguments to update or create a StripePayment.
     * @example
     * // Update or create a StripePayment
     * const stripePayment = await prisma.stripePayment.upsert({
     *   create: {
     *     // ... data to create a StripePayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StripePayment we want to update
     *   }
     * })
     */
    upsert<T extends StripePaymentUpsertArgs>(args: SelectSubset<T, StripePaymentUpsertArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StripePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripePaymentCountArgs} args - Arguments to filter StripePayments to count.
     * @example
     * // Count the number of StripePayments
     * const count = await prisma.stripePayment.count({
     *   where: {
     *     // ... the filter for the StripePayments we want to count
     *   }
     * })
    **/
    count<T extends StripePaymentCountArgs>(
      args?: Subset<T, StripePaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StripePaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StripePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripePaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StripePaymentAggregateArgs>(args: Subset<T, StripePaymentAggregateArgs>): Prisma.PrismaPromise<GetStripePaymentAggregateType<T>>

    /**
     * Group by StripePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripePaymentGroupByArgs} args - Group by arguments.
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
      T extends StripePaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StripePaymentGroupByArgs['orderBy'] }
        : { orderBy?: StripePaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StripePaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStripePaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StripePayment model
   */
  readonly fields: StripePaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StripePayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StripePaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends StripePayment$customerArgs<ExtArgs> = {}>(args?: Subset<T, StripePayment$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creditTransaction<T extends StripePayment$creditTransactionArgs<ExtArgs> = {}>(args?: Subset<T, StripePayment$creditTransactionArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StripePayment model
   */
  interface StripePaymentFieldRefs {
    readonly id: FieldRef<"StripePayment", 'String'>
    readonly customerId: FieldRef<"StripePayment", 'String'>
    readonly stripePaymentIntentId: FieldRef<"StripePayment", 'String'>
    readonly stripeChargeId: FieldRef<"StripePayment", 'String'>
    readonly stripeCheckoutSessionId: FieldRef<"StripePayment", 'String'>
    readonly stripeInvoiceId: FieldRef<"StripePayment", 'String'>
    readonly amount: FieldRef<"StripePayment", 'Int'>
    readonly currency: FieldRef<"StripePayment", 'String'>
    readonly status: FieldRef<"StripePayment", 'String'>
    readonly paymentMethodType: FieldRef<"StripePayment", 'String'>
    readonly receiptUrl: FieldRef<"StripePayment", 'String'>
    readonly failureReason: FieldRef<"StripePayment", 'String'>
    readonly metadata: FieldRef<"StripePayment", 'Json'>
    readonly createdAt: FieldRef<"StripePayment", 'DateTime'>
    readonly updatedAt: FieldRef<"StripePayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StripePayment findUnique
   */
  export type StripePaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * Filter, which StripePayment to fetch.
     */
    where: StripePaymentWhereUniqueInput
  }

  /**
   * StripePayment findUniqueOrThrow
   */
  export type StripePaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * Filter, which StripePayment to fetch.
     */
    where: StripePaymentWhereUniqueInput
  }

  /**
   * StripePayment findFirst
   */
  export type StripePaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * Filter, which StripePayment to fetch.
     */
    where?: StripePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripePayments to fetch.
     */
    orderBy?: StripePaymentOrderByWithRelationInput | StripePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripePayments.
     */
    cursor?: StripePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripePayments.
     */
    distinct?: StripePaymentScalarFieldEnum | StripePaymentScalarFieldEnum[]
  }

  /**
   * StripePayment findFirstOrThrow
   */
  export type StripePaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * Filter, which StripePayment to fetch.
     */
    where?: StripePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripePayments to fetch.
     */
    orderBy?: StripePaymentOrderByWithRelationInput | StripePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripePayments.
     */
    cursor?: StripePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripePayments.
     */
    distinct?: StripePaymentScalarFieldEnum | StripePaymentScalarFieldEnum[]
  }

  /**
   * StripePayment findMany
   */
  export type StripePaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * Filter, which StripePayments to fetch.
     */
    where?: StripePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripePayments to fetch.
     */
    orderBy?: StripePaymentOrderByWithRelationInput | StripePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StripePayments.
     */
    cursor?: StripePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripePayments.
     */
    skip?: number
    distinct?: StripePaymentScalarFieldEnum | StripePaymentScalarFieldEnum[]
  }

  /**
   * StripePayment create
   */
  export type StripePaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a StripePayment.
     */
    data: XOR<StripePaymentCreateInput, StripePaymentUncheckedCreateInput>
  }

  /**
   * StripePayment createMany
   */
  export type StripePaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StripePayments.
     */
    data: StripePaymentCreateManyInput | StripePaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripePayment createManyAndReturn
   */
  export type StripePaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * The data used to create many StripePayments.
     */
    data: StripePaymentCreateManyInput | StripePaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StripePayment update
   */
  export type StripePaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a StripePayment.
     */
    data: XOR<StripePaymentUpdateInput, StripePaymentUncheckedUpdateInput>
    /**
     * Choose, which StripePayment to update.
     */
    where: StripePaymentWhereUniqueInput
  }

  /**
   * StripePayment updateMany
   */
  export type StripePaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StripePayments.
     */
    data: XOR<StripePaymentUpdateManyMutationInput, StripePaymentUncheckedUpdateManyInput>
    /**
     * Filter which StripePayments to update
     */
    where?: StripePaymentWhereInput
    /**
     * Limit how many StripePayments to update.
     */
    limit?: number
  }

  /**
   * StripePayment updateManyAndReturn
   */
  export type StripePaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * The data used to update StripePayments.
     */
    data: XOR<StripePaymentUpdateManyMutationInput, StripePaymentUncheckedUpdateManyInput>
    /**
     * Filter which StripePayments to update
     */
    where?: StripePaymentWhereInput
    /**
     * Limit how many StripePayments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StripePayment upsert
   */
  export type StripePaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the StripePayment to update in case it exists.
     */
    where: StripePaymentWhereUniqueInput
    /**
     * In case the StripePayment found by the `where` argument doesn't exist, create a new StripePayment with this data.
     */
    create: XOR<StripePaymentCreateInput, StripePaymentUncheckedCreateInput>
    /**
     * In case the StripePayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StripePaymentUpdateInput, StripePaymentUncheckedUpdateInput>
  }

  /**
   * StripePayment delete
   */
  export type StripePaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    /**
     * Filter which StripePayment to delete.
     */
    where: StripePaymentWhereUniqueInput
  }

  /**
   * StripePayment deleteMany
   */
  export type StripePaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripePayments to delete
     */
    where?: StripePaymentWhereInput
    /**
     * Limit how many StripePayments to delete.
     */
    limit?: number
  }

  /**
   * StripePayment.customer
   */
  export type StripePayment$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * StripePayment.creditTransaction
   */
  export type StripePayment$creditTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
  }

  /**
   * StripePayment without action
   */
  export type StripePaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
  }


  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripePaymentId: string | null
    type: string | null
    amount: number | null
    balanceAfter: number | null
    description: string | null
    appUsageId: string | null
    createdAt: Date | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    stripePaymentId: string | null
    type: string | null
    amount: number | null
    balanceAfter: number | null
    description: string | null
    appUsageId: string | null
    createdAt: Date | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    customerId: number
    stripePaymentId: number
    type: number
    amount: number
    balanceAfter: number
    description: number
    metadata: number
    appUsageId: number
    createdAt: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    description?: true
    appUsageId?: true
    createdAt?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    description?: true
    appUsageId?: true
    createdAt?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    customerId?: true
    stripePaymentId?: true
    type?: true
    amount?: true
    balanceAfter?: true
    description?: true
    metadata?: true
    appUsageId?: true
    createdAt?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    customerId: string
    stripePaymentId: string | null
    type: string
    amount: number
    balanceAfter: number
    description: string | null
    metadata: JsonValue | null
    appUsageId: string | null
    createdAt: Date
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripePaymentId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    metadata?: boolean
    appUsageId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    payment?: boolean | CreditTransaction$paymentArgs<ExtArgs>
    appUsage?: boolean | CreditTransaction$appUsageArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripePaymentId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    metadata?: boolean
    appUsageId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    payment?: boolean | CreditTransaction$paymentArgs<ExtArgs>
    appUsage?: boolean | CreditTransaction$appUsageArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    stripePaymentId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    metadata?: boolean
    appUsageId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    payment?: boolean | CreditTransaction$paymentArgs<ExtArgs>
    appUsage?: boolean | CreditTransaction$appUsageArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectScalar = {
    id?: boolean
    customerId?: boolean
    stripePaymentId?: boolean
    type?: boolean
    amount?: boolean
    balanceAfter?: boolean
    description?: boolean
    metadata?: boolean
    appUsageId?: boolean
    createdAt?: boolean
  }

  export type CreditTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "stripePaymentId" | "type" | "amount" | "balanceAfter" | "description" | "metadata" | "appUsageId" | "createdAt", ExtArgs["result"]["creditTransaction"]>
  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    payment?: boolean | CreditTransaction$paymentArgs<ExtArgs>
    appUsage?: boolean | CreditTransaction$appUsageArgs<ExtArgs>
  }
  export type CreditTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    payment?: boolean | CreditTransaction$paymentArgs<ExtArgs>
    appUsage?: boolean | CreditTransaction$appUsageArgs<ExtArgs>
  }
  export type CreditTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    payment?: boolean | CreditTransaction$paymentArgs<ExtArgs>
    appUsage?: boolean | CreditTransaction$appUsageArgs<ExtArgs>
  }

  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      payment: Prisma.$StripePaymentPayload<ExtArgs> | null
      appUsage: Prisma.$AppUsagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      stripePaymentId: string | null
      type: string
      amount: number
      balanceAfter: number
      description: string | null
      metadata: Prisma.JsonValue | null
      appUsageId: string | null
      createdAt: Date
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }

  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransactionFindUniqueArgs>(args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransactionFindFirstArgs>(args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransactionFindManyArgs>(args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
     */
    create<T extends CreditTransactionCreateArgs>(args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditTransactions.
     * @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransactionCreateManyArgs>(args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditTransactions and returns the data saved in the database.
     * @param {CreditTransactionCreateManyAndReturnArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
     */
    delete<T extends CreditTransactionDeleteArgs>(args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransactionUpdateArgs>(args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransactionDeleteManyArgs>(args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransactionUpdateManyArgs>(args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions and returns the data updated in the database.
     * @param {CreditTransactionUpdateManyAndReturnArgs} args - Arguments to update many CreditTransactions.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreditTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransactionUpsertArgs>(args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
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
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends CreditTransaction$paymentArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransaction$paymentArgs<ExtArgs>>): Prisma__StripePaymentClient<$Result.GetResult<Prisma.$StripePaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appUsage<T extends CreditTransaction$appUsageArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransaction$appUsageArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CreditTransaction model
   */
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly customerId: FieldRef<"CreditTransaction", 'String'>
    readonly stripePaymentId: FieldRef<"CreditTransaction", 'String'>
    readonly type: FieldRef<"CreditTransaction", 'String'>
    readonly amount: FieldRef<"CreditTransaction", 'Int'>
    readonly balanceAfter: FieldRef<"CreditTransaction", 'Int'>
    readonly description: FieldRef<"CreditTransaction", 'String'>
    readonly metadata: FieldRef<"CreditTransaction", 'Json'>
    readonly appUsageId: FieldRef<"CreditTransaction", 'String'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }

  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction createManyAndReturn
   */
  export type CreditTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
  }

  /**
   * CreditTransaction updateManyAndReturn
   */
  export type CreditTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }

  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to delete.
     */
    limit?: number
  }

  /**
   * CreditTransaction.payment
   */
  export type CreditTransaction$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripePayment
     */
    select?: StripePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripePayment
     */
    omit?: StripePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripePaymentInclude<ExtArgs> | null
    where?: StripePaymentWhereInput
  }

  /**
   * CreditTransaction.appUsage
   */
  export type CreditTransaction$appUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    where?: AppUsageWhereInput
  }

  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
  }


  /**
   * Model AppUsage
   */

  export type AggregateAppUsage = {
    _count: AppUsageCountAggregateOutputType | null
    _avg: AppUsageAvgAggregateOutputType | null
    _sum: AppUsageSumAggregateOutputType | null
    _min: AppUsageMinAggregateOutputType | null
    _max: AppUsageMaxAggregateOutputType | null
  }

  export type AppUsageAvgAggregateOutputType = {
    creditsUsed: number | null
  }

  export type AppUsageSumAggregateOutputType = {
    creditsUsed: number | null
  }

  export type AppUsageMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    feature: string | null
    creditsUsed: number | null
    description: string | null
    createdAt: Date | null
  }

  export type AppUsageMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    feature: string | null
    creditsUsed: number | null
    description: string | null
    createdAt: Date | null
  }

  export type AppUsageCountAggregateOutputType = {
    id: number
    customerId: number
    feature: number
    creditsUsed: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AppUsageAvgAggregateInputType = {
    creditsUsed?: true
  }

  export type AppUsageSumAggregateInputType = {
    creditsUsed?: true
  }

  export type AppUsageMinAggregateInputType = {
    id?: true
    customerId?: true
    feature?: true
    creditsUsed?: true
    description?: true
    createdAt?: true
  }

  export type AppUsageMaxAggregateInputType = {
    id?: true
    customerId?: true
    feature?: true
    creditsUsed?: true
    description?: true
    createdAt?: true
  }

  export type AppUsageCountAggregateInputType = {
    id?: true
    customerId?: true
    feature?: true
    creditsUsed?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AppUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsage to aggregate.
     */
    where?: AppUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsages to fetch.
     */
    orderBy?: AppUsageOrderByWithRelationInput | AppUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsages
    **/
    _count?: true | AppUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUsageMaxAggregateInputType
  }

  export type GetAppUsageAggregateType<T extends AppUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUsage[P]>
      : GetScalarType<T[P], AggregateAppUsage[P]>
  }




  export type AppUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUsageWhereInput
    orderBy?: AppUsageOrderByWithAggregationInput | AppUsageOrderByWithAggregationInput[]
    by: AppUsageScalarFieldEnum[] | AppUsageScalarFieldEnum
    having?: AppUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUsageCountAggregateInputType | true
    _avg?: AppUsageAvgAggregateInputType
    _sum?: AppUsageSumAggregateInputType
    _min?: AppUsageMinAggregateInputType
    _max?: AppUsageMaxAggregateInputType
  }

  export type AppUsageGroupByOutputType = {
    id: string
    customerId: string
    feature: string
    creditsUsed: number
    description: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AppUsageCountAggregateOutputType | null
    _avg: AppUsageAvgAggregateOutputType | null
    _sum: AppUsageSumAggregateOutputType | null
    _min: AppUsageMinAggregateOutputType | null
    _max: AppUsageMaxAggregateOutputType | null
  }

  type GetAppUsageGroupByPayload<T extends AppUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUsageGroupByOutputType[P]>
            : GetScalarType<T[P], AppUsageGroupByOutputType[P]>
        }
      >
    >


  export type AppUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    feature?: boolean
    creditsUsed?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    creditTransaction?: boolean | AppUsage$creditTransactionArgs<ExtArgs>
  }, ExtArgs["result"]["appUsage"]>

  export type AppUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    feature?: boolean
    creditsUsed?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUsage"]>

  export type AppUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    feature?: boolean
    creditsUsed?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUsage"]>

  export type AppUsageSelectScalar = {
    id?: boolean
    customerId?: boolean
    feature?: boolean
    creditsUsed?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AppUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "feature" | "creditsUsed" | "description" | "metadata" | "createdAt", ExtArgs["result"]["appUsage"]>
  export type AppUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    creditTransaction?: boolean | AppUsage$creditTransactionArgs<ExtArgs>
  }
  export type AppUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type AppUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $AppUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUsage"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      creditTransaction: Prisma.$CreditTransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      feature: string
      creditsUsed: number
      description: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["appUsage"]>
    composites: {}
  }

  type AppUsageGetPayload<S extends boolean | null | undefined | AppUsageDefaultArgs> = $Result.GetResult<Prisma.$AppUsagePayload, S>

  type AppUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppUsageCountAggregateInputType | true
    }

  export interface AppUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUsage'], meta: { name: 'AppUsage' } }
    /**
     * Find zero or one AppUsage that matches the filter.
     * @param {AppUsageFindUniqueArgs} args - Arguments to find a AppUsage
     * @example
     * // Get one AppUsage
     * const appUsage = await prisma.appUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUsageFindUniqueArgs>(args: SelectSubset<T, AppUsageFindUniqueArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppUsageFindUniqueOrThrowArgs} args - Arguments to find a AppUsage
     * @example
     * // Get one AppUsage
     * const appUsage = await prisma.appUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsageFindFirstArgs} args - Arguments to find a AppUsage
     * @example
     * // Get one AppUsage
     * const appUsage = await prisma.appUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUsageFindFirstArgs>(args?: SelectSubset<T, AppUsageFindFirstArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsageFindFirstOrThrowArgs} args - Arguments to find a AppUsage
     * @example
     * // Get one AppUsage
     * const appUsage = await prisma.appUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsages
     * const appUsages = await prisma.appUsage.findMany()
     * 
     * // Get first 10 AppUsages
     * const appUsages = await prisma.appUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUsageWithIdOnly = await prisma.appUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppUsageFindManyArgs>(args?: SelectSubset<T, AppUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppUsage.
     * @param {AppUsageCreateArgs} args - Arguments to create a AppUsage.
     * @example
     * // Create one AppUsage
     * const AppUsage = await prisma.appUsage.create({
     *   data: {
     *     // ... data to create a AppUsage
     *   }
     * })
     * 
     */
    create<T extends AppUsageCreateArgs>(args: SelectSubset<T, AppUsageCreateArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppUsages.
     * @param {AppUsageCreateManyArgs} args - Arguments to create many AppUsages.
     * @example
     * // Create many AppUsages
     * const appUsage = await prisma.appUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUsageCreateManyArgs>(args?: SelectSubset<T, AppUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppUsages and returns the data saved in the database.
     * @param {AppUsageCreateManyAndReturnArgs} args - Arguments to create many AppUsages.
     * @example
     * // Create many AppUsages
     * const appUsage = await prisma.appUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppUsages and only return the `id`
     * const appUsageWithIdOnly = await prisma.appUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, AppUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppUsage.
     * @param {AppUsageDeleteArgs} args - Arguments to delete one AppUsage.
     * @example
     * // Delete one AppUsage
     * const AppUsage = await prisma.appUsage.delete({
     *   where: {
     *     // ... filter to delete one AppUsage
     *   }
     * })
     * 
     */
    delete<T extends AppUsageDeleteArgs>(args: SelectSubset<T, AppUsageDeleteArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppUsage.
     * @param {AppUsageUpdateArgs} args - Arguments to update one AppUsage.
     * @example
     * // Update one AppUsage
     * const appUsage = await prisma.appUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUsageUpdateArgs>(args: SelectSubset<T, AppUsageUpdateArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppUsages.
     * @param {AppUsageDeleteManyArgs} args - Arguments to filter AppUsages to delete.
     * @example
     * // Delete a few AppUsages
     * const { count } = await prisma.appUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUsageDeleteManyArgs>(args?: SelectSubset<T, AppUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsages
     * const appUsage = await prisma.appUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUsageUpdateManyArgs>(args: SelectSubset<T, AppUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsages and returns the data updated in the database.
     * @param {AppUsageUpdateManyAndReturnArgs} args - Arguments to update many AppUsages.
     * @example
     * // Update many AppUsages
     * const appUsage = await prisma.appUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppUsages and only return the `id`
     * const appUsageWithIdOnly = await prisma.appUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, AppUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppUsage.
     * @param {AppUsageUpsertArgs} args - Arguments to update or create a AppUsage.
     * @example
     * // Update or create a AppUsage
     * const appUsage = await prisma.appUsage.upsert({
     *   create: {
     *     // ... data to create a AppUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUsage we want to update
     *   }
     * })
     */
    upsert<T extends AppUsageUpsertArgs>(args: SelectSubset<T, AppUsageUpsertArgs<ExtArgs>>): Prisma__AppUsageClient<$Result.GetResult<Prisma.$AppUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsageCountArgs} args - Arguments to filter AppUsages to count.
     * @example
     * // Count the number of AppUsages
     * const count = await prisma.appUsage.count({
     *   where: {
     *     // ... the filter for the AppUsages we want to count
     *   }
     * })
    **/
    count<T extends AppUsageCountArgs>(
      args?: Subset<T, AppUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppUsageAggregateArgs>(args: Subset<T, AppUsageAggregateArgs>): Prisma.PrismaPromise<GetAppUsageAggregateType<T>>

    /**
     * Group by AppUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUsageGroupByArgs} args - Group by arguments.
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
      T extends AppUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUsageGroupByArgs['orderBy'] }
        : { orderBy?: AppUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUsage model
   */
  readonly fields: AppUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creditTransaction<T extends AppUsage$creditTransactionArgs<ExtArgs> = {}>(args?: Subset<T, AppUsage$creditTransactionArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppUsage model
   */
  interface AppUsageFieldRefs {
    readonly id: FieldRef<"AppUsage", 'String'>
    readonly customerId: FieldRef<"AppUsage", 'String'>
    readonly feature: FieldRef<"AppUsage", 'String'>
    readonly creditsUsed: FieldRef<"AppUsage", 'Int'>
    readonly description: FieldRef<"AppUsage", 'String'>
    readonly metadata: FieldRef<"AppUsage", 'Json'>
    readonly createdAt: FieldRef<"AppUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppUsage findUnique
   */
  export type AppUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * Filter, which AppUsage to fetch.
     */
    where: AppUsageWhereUniqueInput
  }

  /**
   * AppUsage findUniqueOrThrow
   */
  export type AppUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * Filter, which AppUsage to fetch.
     */
    where: AppUsageWhereUniqueInput
  }

  /**
   * AppUsage findFirst
   */
  export type AppUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * Filter, which AppUsage to fetch.
     */
    where?: AppUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsages to fetch.
     */
    orderBy?: AppUsageOrderByWithRelationInput | AppUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsages.
     */
    cursor?: AppUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsages.
     */
    distinct?: AppUsageScalarFieldEnum | AppUsageScalarFieldEnum[]
  }

  /**
   * AppUsage findFirstOrThrow
   */
  export type AppUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * Filter, which AppUsage to fetch.
     */
    where?: AppUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsages to fetch.
     */
    orderBy?: AppUsageOrderByWithRelationInput | AppUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsages.
     */
    cursor?: AppUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsages.
     */
    distinct?: AppUsageScalarFieldEnum | AppUsageScalarFieldEnum[]
  }

  /**
   * AppUsage findMany
   */
  export type AppUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * Filter, which AppUsages to fetch.
     */
    where?: AppUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsages to fetch.
     */
    orderBy?: AppUsageOrderByWithRelationInput | AppUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsages.
     */
    cursor?: AppUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsages.
     */
    skip?: number
    distinct?: AppUsageScalarFieldEnum | AppUsageScalarFieldEnum[]
  }

  /**
   * AppUsage create
   */
  export type AppUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a AppUsage.
     */
    data: XOR<AppUsageCreateInput, AppUsageUncheckedCreateInput>
  }

  /**
   * AppUsage createMany
   */
  export type AppUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsages.
     */
    data: AppUsageCreateManyInput | AppUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUsage createManyAndReturn
   */
  export type AppUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * The data used to create many AppUsages.
     */
    data: AppUsageCreateManyInput | AppUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppUsage update
   */
  export type AppUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a AppUsage.
     */
    data: XOR<AppUsageUpdateInput, AppUsageUncheckedUpdateInput>
    /**
     * Choose, which AppUsage to update.
     */
    where: AppUsageWhereUniqueInput
  }

  /**
   * AppUsage updateMany
   */
  export type AppUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsages.
     */
    data: XOR<AppUsageUpdateManyMutationInput, AppUsageUncheckedUpdateManyInput>
    /**
     * Filter which AppUsages to update
     */
    where?: AppUsageWhereInput
    /**
     * Limit how many AppUsages to update.
     */
    limit?: number
  }

  /**
   * AppUsage updateManyAndReturn
   */
  export type AppUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * The data used to update AppUsages.
     */
    data: XOR<AppUsageUpdateManyMutationInput, AppUsageUncheckedUpdateManyInput>
    /**
     * Filter which AppUsages to update
     */
    where?: AppUsageWhereInput
    /**
     * Limit how many AppUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppUsage upsert
   */
  export type AppUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the AppUsage to update in case it exists.
     */
    where: AppUsageWhereUniqueInput
    /**
     * In case the AppUsage found by the `where` argument doesn't exist, create a new AppUsage with this data.
     */
    create: XOR<AppUsageCreateInput, AppUsageUncheckedCreateInput>
    /**
     * In case the AppUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUsageUpdateInput, AppUsageUncheckedUpdateInput>
  }

  /**
   * AppUsage delete
   */
  export type AppUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
    /**
     * Filter which AppUsage to delete.
     */
    where: AppUsageWhereUniqueInput
  }

  /**
   * AppUsage deleteMany
   */
  export type AppUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsages to delete
     */
    where?: AppUsageWhereInput
    /**
     * Limit how many AppUsages to delete.
     */
    limit?: number
  }

  /**
   * AppUsage.creditTransaction
   */
  export type AppUsage$creditTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
  }

  /**
   * AppUsage without action
   */
  export type AppUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUsage
     */
    select?: AppUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUsage
     */
    omit?: AppUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUsageInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    stripeCustomerId: 'stripeCustomerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeCustomerId: 'stripeCustomerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    stripePriceId: 'stripePriceId',
    productId: 'productId',
    status: 'status',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    canceledAt: 'canceledAt',
    endedAt: 'endedAt',
    trialStart: 'trialStart',
    trialEnd: 'trialEnd',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const StripePaymentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    stripePaymentIntentId: 'stripePaymentIntentId',
    stripeChargeId: 'stripeChargeId',
    stripeCheckoutSessionId: 'stripeCheckoutSessionId',
    stripeInvoiceId: 'stripeInvoiceId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    paymentMethodType: 'paymentMethodType',
    receiptUrl: 'receiptUrl',
    failureReason: 'failureReason',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StripePaymentScalarFieldEnum = (typeof StripePaymentScalarFieldEnum)[keyof typeof StripePaymentScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    stripePaymentId: 'stripePaymentId',
    type: 'type',
    amount: 'amount',
    balanceAfter: 'balanceAfter',
    description: 'description',
    metadata: 'metadata',
    appUsageId: 'appUsageId',
    createdAt: 'createdAt'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const AppUsageScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    feature: 'feature',
    creditsUsed: 'creditsUsed',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AppUsageScalarFieldEnum = (typeof AppUsageScalarFieldEnum)[keyof typeof AppUsageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    stripeCustomerId?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscriptions?: SubscriptionListRelationFilter
    payments?: StripePaymentListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
    appUsages?: AppUsageListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    payments?: StripePaymentOrderByRelationAggregateInput
    creditTransactions?: CreditTransactionOrderByRelationAggregateInput
    appUsages?: AppUsageOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    stripeCustomerId?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subscriptions?: SubscriptionListRelationFilter
    payments?: StripePaymentListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
    appUsages?: AppUsageListRelationFilter
  }, "id" | "userId" | "stripeCustomerId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    userId?: StringWithAggregatesFilter<"Customer"> | string
    stripeCustomerId?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    customerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    stripePriceId?: StringFilter<"Subscription"> | string
    productId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    metadata?: JsonNullableFilter<"Subscription">
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    productId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    trialStart?: SortOrderInput | SortOrder
    trialEnd?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    customerId?: StringFilter<"Subscription"> | string
    stripePriceId?: StringFilter<"Subscription"> | string
    productId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    metadata?: JsonNullableFilter<"Subscription">
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    productId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    trialStart?: SortOrderInput | SortOrder
    trialEnd?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    customerId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    stripePriceId?: StringWithAggregatesFilter<"Subscription"> | string
    productId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    status?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolWithAggregatesFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    trialStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Subscription">
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type StripePaymentWhereInput = {
    AND?: StripePaymentWhereInput | StripePaymentWhereInput[]
    OR?: StripePaymentWhereInput[]
    NOT?: StripePaymentWhereInput | StripePaymentWhereInput[]
    id?: StringFilter<"StripePayment"> | string
    customerId?: StringNullableFilter<"StripePayment"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"StripePayment"> | string | null
    stripeChargeId?: StringNullableFilter<"StripePayment"> | string | null
    stripeCheckoutSessionId?: StringNullableFilter<"StripePayment"> | string | null
    stripeInvoiceId?: StringNullableFilter<"StripePayment"> | string | null
    amount?: IntFilter<"StripePayment"> | number
    currency?: StringFilter<"StripePayment"> | string
    status?: StringFilter<"StripePayment"> | string
    paymentMethodType?: StringNullableFilter<"StripePayment"> | string | null
    receiptUrl?: StringNullableFilter<"StripePayment"> | string | null
    failureReason?: StringNullableFilter<"StripePayment"> | string | null
    metadata?: JsonNullableFilter<"StripePayment">
    createdAt?: DateTimeFilter<"StripePayment"> | Date | string
    updatedAt?: DateTimeFilter<"StripePayment"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    creditTransaction?: XOR<CreditTransactionNullableScalarRelationFilter, CreditTransactionWhereInput> | null
  }

  export type StripePaymentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    stripeChargeId?: SortOrderInput | SortOrder
    stripeCheckoutSessionId?: SortOrderInput | SortOrder
    stripeInvoiceId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    creditTransaction?: CreditTransactionOrderByWithRelationInput
  }

  export type StripePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StripePaymentWhereInput | StripePaymentWhereInput[]
    OR?: StripePaymentWhereInput[]
    NOT?: StripePaymentWhereInput | StripePaymentWhereInput[]
    customerId?: StringNullableFilter<"StripePayment"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"StripePayment"> | string | null
    stripeChargeId?: StringNullableFilter<"StripePayment"> | string | null
    stripeCheckoutSessionId?: StringNullableFilter<"StripePayment"> | string | null
    stripeInvoiceId?: StringNullableFilter<"StripePayment"> | string | null
    amount?: IntFilter<"StripePayment"> | number
    currency?: StringFilter<"StripePayment"> | string
    status?: StringFilter<"StripePayment"> | string
    paymentMethodType?: StringNullableFilter<"StripePayment"> | string | null
    receiptUrl?: StringNullableFilter<"StripePayment"> | string | null
    failureReason?: StringNullableFilter<"StripePayment"> | string | null
    metadata?: JsonNullableFilter<"StripePayment">
    createdAt?: DateTimeFilter<"StripePayment"> | Date | string
    updatedAt?: DateTimeFilter<"StripePayment"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    creditTransaction?: XOR<CreditTransactionNullableScalarRelationFilter, CreditTransactionWhereInput> | null
  }, "id">

  export type StripePaymentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    stripeChargeId?: SortOrderInput | SortOrder
    stripeCheckoutSessionId?: SortOrderInput | SortOrder
    stripeInvoiceId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StripePaymentCountOrderByAggregateInput
    _avg?: StripePaymentAvgOrderByAggregateInput
    _max?: StripePaymentMaxOrderByAggregateInput
    _min?: StripePaymentMinOrderByAggregateInput
    _sum?: StripePaymentSumOrderByAggregateInput
  }

  export type StripePaymentScalarWhereWithAggregatesInput = {
    AND?: StripePaymentScalarWhereWithAggregatesInput | StripePaymentScalarWhereWithAggregatesInput[]
    OR?: StripePaymentScalarWhereWithAggregatesInput[]
    NOT?: StripePaymentScalarWhereWithAggregatesInput | StripePaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StripePayment"> | string
    customerId?: StringNullableWithAggregatesFilter<"StripePayment"> | string | null
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"StripePayment"> | string | null
    stripeChargeId?: StringNullableWithAggregatesFilter<"StripePayment"> | string | null
    stripeCheckoutSessionId?: StringNullableWithAggregatesFilter<"StripePayment"> | string | null
    stripeInvoiceId?: StringNullableWithAggregatesFilter<"StripePayment"> | string | null
    amount?: IntWithAggregatesFilter<"StripePayment"> | number
    currency?: StringWithAggregatesFilter<"StripePayment"> | string
    status?: StringWithAggregatesFilter<"StripePayment"> | string
    paymentMethodType?: StringNullableWithAggregatesFilter<"StripePayment"> | string | null
    receiptUrl?: StringNullableWithAggregatesFilter<"StripePayment"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"StripePayment"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"StripePayment">
    createdAt?: DateTimeWithAggregatesFilter<"StripePayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StripePayment"> | Date | string
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    customerId?: StringFilter<"CreditTransaction"> | string
    stripePaymentId?: StringNullableFilter<"CreditTransaction"> | string | null
    type?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: JsonNullableFilter<"CreditTransaction">
    appUsageId?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    payment?: XOR<StripePaymentNullableScalarRelationFilter, StripePaymentWhereInput> | null
    appUsage?: XOR<AppUsageNullableScalarRelationFilter, AppUsageWhereInput> | null
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    appUsageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    payment?: StripePaymentOrderByWithRelationInput
    appUsage?: AppUsageOrderByWithRelationInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripePaymentId?: string
    appUsageId?: string
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    customerId?: StringFilter<"CreditTransaction"> | string
    type?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: JsonNullableFilter<"CreditTransaction">
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    payment?: XOR<StripePaymentNullableScalarRelationFilter, StripePaymentWhereInput> | null
    appUsage?: XOR<AppUsageNullableScalarRelationFilter, AppUsageWhereInput> | null
  }, "id" | "stripePaymentId" | "appUsageId">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    appUsageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    customerId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    stripePaymentId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    type?: StringWithAggregatesFilter<"CreditTransaction"> | string
    amount?: IntWithAggregatesFilter<"CreditTransaction"> | number
    balanceAfter?: IntWithAggregatesFilter<"CreditTransaction"> | number
    description?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"CreditTransaction">
    appUsageId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
  }

  export type AppUsageWhereInput = {
    AND?: AppUsageWhereInput | AppUsageWhereInput[]
    OR?: AppUsageWhereInput[]
    NOT?: AppUsageWhereInput | AppUsageWhereInput[]
    id?: StringFilter<"AppUsage"> | string
    customerId?: StringFilter<"AppUsage"> | string
    feature?: StringFilter<"AppUsage"> | string
    creditsUsed?: IntFilter<"AppUsage"> | number
    description?: StringNullableFilter<"AppUsage"> | string | null
    metadata?: JsonNullableFilter<"AppUsage">
    createdAt?: DateTimeFilter<"AppUsage"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    creditTransaction?: XOR<CreditTransactionNullableScalarRelationFilter, CreditTransactionWhereInput> | null
  }

  export type AppUsageOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    feature?: SortOrder
    creditsUsed?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    creditTransaction?: CreditTransactionOrderByWithRelationInput
  }

  export type AppUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppUsageWhereInput | AppUsageWhereInput[]
    OR?: AppUsageWhereInput[]
    NOT?: AppUsageWhereInput | AppUsageWhereInput[]
    customerId?: StringFilter<"AppUsage"> | string
    feature?: StringFilter<"AppUsage"> | string
    creditsUsed?: IntFilter<"AppUsage"> | number
    description?: StringNullableFilter<"AppUsage"> | string | null
    metadata?: JsonNullableFilter<"AppUsage">
    createdAt?: DateTimeFilter<"AppUsage"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    creditTransaction?: XOR<CreditTransactionNullableScalarRelationFilter, CreditTransactionWhereInput> | null
  }, "id">

  export type AppUsageOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    feature?: SortOrder
    creditsUsed?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AppUsageCountOrderByAggregateInput
    _avg?: AppUsageAvgOrderByAggregateInput
    _max?: AppUsageMaxOrderByAggregateInput
    _min?: AppUsageMinOrderByAggregateInput
    _sum?: AppUsageSumOrderByAggregateInput
  }

  export type AppUsageScalarWhereWithAggregatesInput = {
    AND?: AppUsageScalarWhereWithAggregatesInput | AppUsageScalarWhereWithAggregatesInput[]
    OR?: AppUsageScalarWhereWithAggregatesInput[]
    NOT?: AppUsageScalarWhereWithAggregatesInput | AppUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppUsage"> | string
    customerId?: StringWithAggregatesFilter<"AppUsage"> | string
    feature?: StringWithAggregatesFilter<"AppUsage"> | string
    creditsUsed?: IntWithAggregatesFilter<"AppUsage"> | number
    description?: StringNullableWithAggregatesFilter<"AppUsage"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AppUsage">
    createdAt?: DateTimeWithAggregatesFilter<"AppUsage"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    payments?: StripePaymentCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    payments?: StripePaymentUncheckedCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    payments?: StripePaymentUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: StripePaymentUncheckedUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeSubscriptionId: string
    stripePriceId: string
    productId?: string | null
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    customerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    productId?: string | null
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    customerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    productId?: string | null
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripePaymentCreateInput = {
    id?: string
    stripePaymentIntentId?: string | null
    stripeChargeId?: string | null
    stripeCheckoutSessionId?: string | null
    stripeInvoiceId?: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType?: string | null
    receiptUrl?: string | null
    failureReason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutPaymentsInput
    creditTransaction?: CreditTransactionCreateNestedOneWithoutPaymentInput
  }

  export type StripePaymentUncheckedCreateInput = {
    id?: string
    customerId?: string | null
    stripePaymentIntentId?: string | null
    stripeChargeId?: string | null
    stripeCheckoutSessionId?: string | null
    stripeInvoiceId?: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType?: string | null
    receiptUrl?: string | null
    failureReason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creditTransaction?: CreditTransactionUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type StripePaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutPaymentsNestedInput
    creditTransaction?: CreditTransactionUpdateOneWithoutPaymentNestedInput
  }

  export type StripePaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditTransaction?: CreditTransactionUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type StripePaymentCreateManyInput = {
    id?: string
    customerId?: string | null
    stripePaymentIntentId?: string | null
    stripeChargeId?: string | null
    stripeCheckoutSessionId?: string | null
    stripeInvoiceId?: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType?: string | null
    receiptUrl?: string | null
    failureReason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StripePaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripePaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateInput = {
    id?: string
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCreditTransactionsInput
    payment?: StripePaymentCreateNestedOneWithoutCreditTransactionInput
    appUsage?: AppUsageCreateNestedOneWithoutCreditTransactionInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: string
    customerId: string
    stripePaymentId?: string | null
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCreditTransactionsNestedInput
    payment?: StripePaymentUpdateOneWithoutCreditTransactionNestedInput
    appUsage?: AppUsageUpdateOneWithoutCreditTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyInput = {
    id?: string
    customerId: string
    stripePaymentId?: string | null
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUsageCreateInput = {
    id?: string
    feature: string
    creditsUsed: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutAppUsagesInput
    creditTransaction?: CreditTransactionCreateNestedOneWithoutAppUsageInput
  }

  export type AppUsageUncheckedCreateInput = {
    id?: string
    customerId: string
    feature: string
    creditsUsed: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creditTransaction?: CreditTransactionUncheckedCreateNestedOneWithoutAppUsageInput
  }

  export type AppUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAppUsagesNestedInput
    creditTransaction?: CreditTransactionUpdateOneWithoutAppUsageNestedInput
  }

  export type AppUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditTransaction?: CreditTransactionUncheckedUpdateOneWithoutAppUsageNestedInput
  }

  export type AppUsageCreateManyInput = {
    id?: string
    customerId: string
    feature: string
    creditsUsed: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AppUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    stripeCustomerId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type StripePaymentListRelationFilter = {
    every?: StripePaymentWhereInput
    some?: StripePaymentWhereInput
    none?: StripePaymentWhereInput
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type AppUsageListRelationFilter = {
    every?: AppUsageWhereInput
    some?: AppUsageWhereInput
    none?: AppUsageWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StripePaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    productId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    trialStart?: SortOrder
    trialEnd?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    productId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    trialStart?: SortOrder
    trialEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    productId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    endedAt?: SortOrder
    trialStart?: SortOrder
    trialEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type CreditTransactionNullableScalarRelationFilter = {
    is?: CreditTransactionWhereInput | null
    isNot?: CreditTransactionWhereInput | null
  }

  export type StripePaymentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeChargeId?: SortOrder
    stripeCheckoutSessionId?: SortOrder
    stripeInvoiceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrder
    receiptUrl?: SortOrder
    failureReason?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StripePaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StripePaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeChargeId?: SortOrder
    stripeCheckoutSessionId?: SortOrder
    stripeInvoiceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrder
    receiptUrl?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StripePaymentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeChargeId?: SortOrder
    stripeCheckoutSessionId?: SortOrder
    stripeInvoiceId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrder
    receiptUrl?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StripePaymentSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type StripePaymentNullableScalarRelationFilter = {
    is?: StripePaymentWhereInput | null
    isNot?: StripePaymentWhereInput | null
  }

  export type AppUsageNullableScalarRelationFilter = {
    is?: AppUsageWhereInput | null
    isNot?: AppUsageWhereInput | null
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    appUsageId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    appUsageId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    stripePaymentId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    balanceAfter?: SortOrder
    description?: SortOrder
    appUsageId?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type AppUsageCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    feature?: SortOrder
    creditsUsed?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUsageAvgOrderByAggregateInput = {
    creditsUsed?: SortOrder
  }

  export type AppUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    feature?: SortOrder
    creditsUsed?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUsageMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    feature?: SortOrder
    creditsUsed?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUsageSumOrderByAggregateInput = {
    creditsUsed?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type StripePaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<StripePaymentCreateWithoutCustomerInput, StripePaymentUncheckedCreateWithoutCustomerInput> | StripePaymentCreateWithoutCustomerInput[] | StripePaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: StripePaymentCreateOrConnectWithoutCustomerInput | StripePaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: StripePaymentCreateManyCustomerInputEnvelope
    connect?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
  }

  export type CreditTransactionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CreditTransactionCreateWithoutCustomerInput, CreditTransactionUncheckedCreateWithoutCustomerInput> | CreditTransactionCreateWithoutCustomerInput[] | CreditTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCustomerInput | CreditTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: CreditTransactionCreateManyCustomerInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type AppUsageCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppUsageCreateWithoutCustomerInput, AppUsageUncheckedCreateWithoutCustomerInput> | AppUsageCreateWithoutCustomerInput[] | AppUsageUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppUsageCreateOrConnectWithoutCustomerInput | AppUsageCreateOrConnectWithoutCustomerInput[]
    createMany?: AppUsageCreateManyCustomerInputEnvelope
    connect?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type StripePaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<StripePaymentCreateWithoutCustomerInput, StripePaymentUncheckedCreateWithoutCustomerInput> | StripePaymentCreateWithoutCustomerInput[] | StripePaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: StripePaymentCreateOrConnectWithoutCustomerInput | StripePaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: StripePaymentCreateManyCustomerInputEnvelope
    connect?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CreditTransactionCreateWithoutCustomerInput, CreditTransactionUncheckedCreateWithoutCustomerInput> | CreditTransactionCreateWithoutCustomerInput[] | CreditTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCustomerInput | CreditTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: CreditTransactionCreateManyCustomerInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type AppUsageUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppUsageCreateWithoutCustomerInput, AppUsageUncheckedCreateWithoutCustomerInput> | AppUsageCreateWithoutCustomerInput[] | AppUsageUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppUsageCreateOrConnectWithoutCustomerInput | AppUsageCreateOrConnectWithoutCustomerInput[]
    createMany?: AppUsageCreateManyCustomerInputEnvelope
    connect?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerInput
    upsert?: UserUpsertWithoutCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerInput, UserUpdateWithoutCustomerInput>, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type SubscriptionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCustomerInput | SubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCustomerInput | SubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCustomerInput | SubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type StripePaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<StripePaymentCreateWithoutCustomerInput, StripePaymentUncheckedCreateWithoutCustomerInput> | StripePaymentCreateWithoutCustomerInput[] | StripePaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: StripePaymentCreateOrConnectWithoutCustomerInput | StripePaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: StripePaymentUpsertWithWhereUniqueWithoutCustomerInput | StripePaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: StripePaymentCreateManyCustomerInputEnvelope
    set?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
    disconnect?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
    delete?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
    connect?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
    update?: StripePaymentUpdateWithWhereUniqueWithoutCustomerInput | StripePaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: StripePaymentUpdateManyWithWhereWithoutCustomerInput | StripePaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: StripePaymentScalarWhereInput | StripePaymentScalarWhereInput[]
  }

  export type CreditTransactionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCustomerInput, CreditTransactionUncheckedCreateWithoutCustomerInput> | CreditTransactionCreateWithoutCustomerInput[] | CreditTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCustomerInput | CreditTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCustomerInput | CreditTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CreditTransactionCreateManyCustomerInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCustomerInput | CreditTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCustomerInput | CreditTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type AppUsageUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppUsageCreateWithoutCustomerInput, AppUsageUncheckedCreateWithoutCustomerInput> | AppUsageCreateWithoutCustomerInput[] | AppUsageUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppUsageCreateOrConnectWithoutCustomerInput | AppUsageCreateOrConnectWithoutCustomerInput[]
    upsert?: AppUsageUpsertWithWhereUniqueWithoutCustomerInput | AppUsageUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppUsageCreateManyCustomerInputEnvelope
    set?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
    disconnect?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
    delete?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
    connect?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
    update?: AppUsageUpdateWithWhereUniqueWithoutCustomerInput | AppUsageUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppUsageUpdateManyWithWhereWithoutCustomerInput | AppUsageUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppUsageScalarWhereInput | AppUsageScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput> | SubscriptionCreateWithoutCustomerInput[] | SubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput | SubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCustomerInput | SubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SubscriptionCreateManyCustomerInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCustomerInput | SubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCustomerInput | SubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type StripePaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<StripePaymentCreateWithoutCustomerInput, StripePaymentUncheckedCreateWithoutCustomerInput> | StripePaymentCreateWithoutCustomerInput[] | StripePaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: StripePaymentCreateOrConnectWithoutCustomerInput | StripePaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: StripePaymentUpsertWithWhereUniqueWithoutCustomerInput | StripePaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: StripePaymentCreateManyCustomerInputEnvelope
    set?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
    disconnect?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
    delete?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
    connect?: StripePaymentWhereUniqueInput | StripePaymentWhereUniqueInput[]
    update?: StripePaymentUpdateWithWhereUniqueWithoutCustomerInput | StripePaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: StripePaymentUpdateManyWithWhereWithoutCustomerInput | StripePaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: StripePaymentScalarWhereInput | StripePaymentScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCustomerInput, CreditTransactionUncheckedCreateWithoutCustomerInput> | CreditTransactionCreateWithoutCustomerInput[] | CreditTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCustomerInput | CreditTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCustomerInput | CreditTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CreditTransactionCreateManyCustomerInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCustomerInput | CreditTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCustomerInput | CreditTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type AppUsageUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppUsageCreateWithoutCustomerInput, AppUsageUncheckedCreateWithoutCustomerInput> | AppUsageCreateWithoutCustomerInput[] | AppUsageUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppUsageCreateOrConnectWithoutCustomerInput | AppUsageCreateOrConnectWithoutCustomerInput[]
    upsert?: AppUsageUpsertWithWhereUniqueWithoutCustomerInput | AppUsageUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppUsageCreateManyCustomerInputEnvelope
    set?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
    disconnect?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
    delete?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
    connect?: AppUsageWhereUniqueInput | AppUsageWhereUniqueInput[]
    update?: AppUsageUpdateWithWhereUniqueWithoutCustomerInput | AppUsageUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppUsageUpdateManyWithWhereWithoutCustomerInput | AppUsageUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppUsageScalarWhereInput | AppUsageScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
    upsert?: CustomerUpsertWithoutSubscriptionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSubscriptionsInput, CustomerUpdateWithoutSubscriptionsInput>, CustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CustomerCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CreditTransactionCreateNestedOneWithoutPaymentInput = {
    create?: XOR<CreditTransactionCreateWithoutPaymentInput, CreditTransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutPaymentInput
    connect?: CreditTransactionWhereUniqueInput
  }

  export type CreditTransactionUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<CreditTransactionCreateWithoutPaymentInput, CreditTransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutPaymentInput
    connect?: CreditTransactionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    upsert?: CustomerUpsertWithoutPaymentsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPaymentsInput, CustomerUpdateWithoutPaymentsInput>, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type CreditTransactionUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutPaymentInput, CreditTransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutPaymentInput
    upsert?: CreditTransactionUpsertWithoutPaymentInput
    disconnect?: CreditTransactionWhereInput | boolean
    delete?: CreditTransactionWhereInput | boolean
    connect?: CreditTransactionWhereUniqueInput
    update?: XOR<XOR<CreditTransactionUpdateToOneWithWhereWithoutPaymentInput, CreditTransactionUpdateWithoutPaymentInput>, CreditTransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type CreditTransactionUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutPaymentInput, CreditTransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutPaymentInput
    upsert?: CreditTransactionUpsertWithoutPaymentInput
    disconnect?: CreditTransactionWhereInput | boolean
    delete?: CreditTransactionWhereInput | boolean
    connect?: CreditTransactionWhereUniqueInput
    update?: XOR<XOR<CreditTransactionUpdateToOneWithWhereWithoutPaymentInput, CreditTransactionUpdateWithoutPaymentInput>, CreditTransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type CustomerCreateNestedOneWithoutCreditTransactionsInput = {
    create?: XOR<CustomerCreateWithoutCreditTransactionsInput, CustomerUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCreditTransactionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type StripePaymentCreateNestedOneWithoutCreditTransactionInput = {
    create?: XOR<StripePaymentCreateWithoutCreditTransactionInput, StripePaymentUncheckedCreateWithoutCreditTransactionInput>
    connectOrCreate?: StripePaymentCreateOrConnectWithoutCreditTransactionInput
    connect?: StripePaymentWhereUniqueInput
  }

  export type AppUsageCreateNestedOneWithoutCreditTransactionInput = {
    create?: XOR<AppUsageCreateWithoutCreditTransactionInput, AppUsageUncheckedCreateWithoutCreditTransactionInput>
    connectOrCreate?: AppUsageCreateOrConnectWithoutCreditTransactionInput
    connect?: AppUsageWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutCreditTransactionsNestedInput = {
    create?: XOR<CustomerCreateWithoutCreditTransactionsInput, CustomerUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCreditTransactionsInput
    upsert?: CustomerUpsertWithoutCreditTransactionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCreditTransactionsInput, CustomerUpdateWithoutCreditTransactionsInput>, CustomerUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type StripePaymentUpdateOneWithoutCreditTransactionNestedInput = {
    create?: XOR<StripePaymentCreateWithoutCreditTransactionInput, StripePaymentUncheckedCreateWithoutCreditTransactionInput>
    connectOrCreate?: StripePaymentCreateOrConnectWithoutCreditTransactionInput
    upsert?: StripePaymentUpsertWithoutCreditTransactionInput
    disconnect?: StripePaymentWhereInput | boolean
    delete?: StripePaymentWhereInput | boolean
    connect?: StripePaymentWhereUniqueInput
    update?: XOR<XOR<StripePaymentUpdateToOneWithWhereWithoutCreditTransactionInput, StripePaymentUpdateWithoutCreditTransactionInput>, StripePaymentUncheckedUpdateWithoutCreditTransactionInput>
  }

  export type AppUsageUpdateOneWithoutCreditTransactionNestedInput = {
    create?: XOR<AppUsageCreateWithoutCreditTransactionInput, AppUsageUncheckedCreateWithoutCreditTransactionInput>
    connectOrCreate?: AppUsageCreateOrConnectWithoutCreditTransactionInput
    upsert?: AppUsageUpsertWithoutCreditTransactionInput
    disconnect?: AppUsageWhereInput | boolean
    delete?: AppUsageWhereInput | boolean
    connect?: AppUsageWhereUniqueInput
    update?: XOR<XOR<AppUsageUpdateToOneWithWhereWithoutCreditTransactionInput, AppUsageUpdateWithoutCreditTransactionInput>, AppUsageUncheckedUpdateWithoutCreditTransactionInput>
  }

  export type CustomerCreateNestedOneWithoutAppUsagesInput = {
    create?: XOR<CustomerCreateWithoutAppUsagesInput, CustomerUncheckedCreateWithoutAppUsagesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppUsagesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CreditTransactionCreateNestedOneWithoutAppUsageInput = {
    create?: XOR<CreditTransactionCreateWithoutAppUsageInput, CreditTransactionUncheckedCreateWithoutAppUsageInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAppUsageInput
    connect?: CreditTransactionWhereUniqueInput
  }

  export type CreditTransactionUncheckedCreateNestedOneWithoutAppUsageInput = {
    create?: XOR<CreditTransactionCreateWithoutAppUsageInput, CreditTransactionUncheckedCreateWithoutAppUsageInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAppUsageInput
    connect?: CreditTransactionWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutAppUsagesNestedInput = {
    create?: XOR<CustomerCreateWithoutAppUsagesInput, CustomerUncheckedCreateWithoutAppUsagesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppUsagesInput
    upsert?: CustomerUpsertWithoutAppUsagesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAppUsagesInput, CustomerUpdateWithoutAppUsagesInput>, CustomerUncheckedUpdateWithoutAppUsagesInput>
  }

  export type CreditTransactionUpdateOneWithoutAppUsageNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutAppUsageInput, CreditTransactionUncheckedCreateWithoutAppUsageInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAppUsageInput
    upsert?: CreditTransactionUpsertWithoutAppUsageInput
    disconnect?: CreditTransactionWhereInput | boolean
    delete?: CreditTransactionWhereInput | boolean
    connect?: CreditTransactionWhereUniqueInput
    update?: XOR<XOR<CreditTransactionUpdateToOneWithWhereWithoutAppUsageInput, CreditTransactionUpdateWithoutAppUsageInput>, CreditTransactionUncheckedUpdateWithoutAppUsageInput>
  }

  export type CreditTransactionUncheckedUpdateOneWithoutAppUsageNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutAppUsageInput, CreditTransactionUncheckedCreateWithoutAppUsageInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAppUsageInput
    upsert?: CreditTransactionUpsertWithoutAppUsageInput
    disconnect?: CreditTransactionWhereInput | boolean
    delete?: CreditTransactionWhereInput | boolean
    connect?: CreditTransactionWhereUniqueInput
    update?: XOR<XOR<CreditTransactionUpdateToOneWithWhereWithoutAppUsageInput, CreditTransactionUpdateWithoutAppUsageInput>, CreditTransactionUncheckedUpdateWithoutAppUsageInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    customer?: CustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    customer?: CustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    payments?: StripePaymentCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    payments?: StripePaymentUncheckedCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type CustomerUpsertWithoutUserInput = {
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    payments?: StripePaymentUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: StripePaymentUncheckedUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutCustomerInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomerInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    stripeCustomerId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
  }

  export type SubscriptionCreateWithoutCustomerInput = {
    id?: string
    stripeSubscriptionId: string
    stripePriceId: string
    productId?: string | null
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutCustomerInput = {
    id?: string
    stripeSubscriptionId: string
    stripePriceId: string
    productId?: string | null
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type SubscriptionCreateManyCustomerInputEnvelope = {
    data: SubscriptionCreateManyCustomerInput | SubscriptionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type StripePaymentCreateWithoutCustomerInput = {
    id?: string
    stripePaymentIntentId?: string | null
    stripeChargeId?: string | null
    stripeCheckoutSessionId?: string | null
    stripeInvoiceId?: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType?: string | null
    receiptUrl?: string | null
    failureReason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creditTransaction?: CreditTransactionCreateNestedOneWithoutPaymentInput
  }

  export type StripePaymentUncheckedCreateWithoutCustomerInput = {
    id?: string
    stripePaymentIntentId?: string | null
    stripeChargeId?: string | null
    stripeCheckoutSessionId?: string | null
    stripeInvoiceId?: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType?: string | null
    receiptUrl?: string | null
    failureReason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    creditTransaction?: CreditTransactionUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type StripePaymentCreateOrConnectWithoutCustomerInput = {
    where: StripePaymentWhereUniqueInput
    create: XOR<StripePaymentCreateWithoutCustomerInput, StripePaymentUncheckedCreateWithoutCustomerInput>
  }

  export type StripePaymentCreateManyCustomerInputEnvelope = {
    data: StripePaymentCreateManyCustomerInput | StripePaymentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionCreateWithoutCustomerInput = {
    id?: string
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    payment?: StripePaymentCreateNestedOneWithoutCreditTransactionInput
    appUsage?: AppUsageCreateNestedOneWithoutCreditTransactionInput
  }

  export type CreditTransactionUncheckedCreateWithoutCustomerInput = {
    id?: string
    stripePaymentId?: string | null
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutCustomerInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutCustomerInput, CreditTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type CreditTransactionCreateManyCustomerInputEnvelope = {
    data: CreditTransactionCreateManyCustomerInput | CreditTransactionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AppUsageCreateWithoutCustomerInput = {
    id?: string
    feature: string
    creditsUsed: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creditTransaction?: CreditTransactionCreateNestedOneWithoutAppUsageInput
  }

  export type AppUsageUncheckedCreateWithoutCustomerInput = {
    id?: string
    feature: string
    creditsUsed: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creditTransaction?: CreditTransactionUncheckedCreateNestedOneWithoutAppUsageInput
  }

  export type AppUsageCreateOrConnectWithoutCustomerInput = {
    where: AppUsageWhereUniqueInput
    create: XOR<AppUsageCreateWithoutCustomerInput, AppUsageUncheckedCreateWithoutCustomerInput>
  }

  export type AppUsageCreateManyCustomerInputEnvelope = {
    data: AppUsageCreateManyCustomerInput | AppUsageCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomerInput = {
    update: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
    create: XOR<UserCreateWithoutCustomerInput, UserUncheckedCreateWithoutCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerInput, UserUncheckedUpdateWithoutCustomerInput>
  }

  export type UserUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutCustomerInput, SubscriptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<SubscriptionCreateWithoutCustomerInput, SubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutCustomerInput, SubscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutCustomerInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    customerId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    stripePriceId?: StringFilter<"Subscription"> | string
    productId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    metadata?: JsonNullableFilter<"Subscription">
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type StripePaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: StripePaymentWhereUniqueInput
    update: XOR<StripePaymentUpdateWithoutCustomerInput, StripePaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<StripePaymentCreateWithoutCustomerInput, StripePaymentUncheckedCreateWithoutCustomerInput>
  }

  export type StripePaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: StripePaymentWhereUniqueInput
    data: XOR<StripePaymentUpdateWithoutCustomerInput, StripePaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type StripePaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: StripePaymentScalarWhereInput
    data: XOR<StripePaymentUpdateManyMutationInput, StripePaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type StripePaymentScalarWhereInput = {
    AND?: StripePaymentScalarWhereInput | StripePaymentScalarWhereInput[]
    OR?: StripePaymentScalarWhereInput[]
    NOT?: StripePaymentScalarWhereInput | StripePaymentScalarWhereInput[]
    id?: StringFilter<"StripePayment"> | string
    customerId?: StringNullableFilter<"StripePayment"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"StripePayment"> | string | null
    stripeChargeId?: StringNullableFilter<"StripePayment"> | string | null
    stripeCheckoutSessionId?: StringNullableFilter<"StripePayment"> | string | null
    stripeInvoiceId?: StringNullableFilter<"StripePayment"> | string | null
    amount?: IntFilter<"StripePayment"> | number
    currency?: StringFilter<"StripePayment"> | string
    status?: StringFilter<"StripePayment"> | string
    paymentMethodType?: StringNullableFilter<"StripePayment"> | string | null
    receiptUrl?: StringNullableFilter<"StripePayment"> | string | null
    failureReason?: StringNullableFilter<"StripePayment"> | string | null
    metadata?: JsonNullableFilter<"StripePayment">
    createdAt?: DateTimeFilter<"StripePayment"> | Date | string
    updatedAt?: DateTimeFilter<"StripePayment"> | Date | string
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutCustomerInput, CreditTransactionUncheckedUpdateWithoutCustomerInput>
    create: XOR<CreditTransactionCreateWithoutCustomerInput, CreditTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutCustomerInput, CreditTransactionUncheckedUpdateWithoutCustomerInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutCustomerInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    customerId?: StringFilter<"CreditTransaction"> | string
    stripePaymentId?: StringNullableFilter<"CreditTransaction"> | string | null
    type?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    balanceAfter?: IntFilter<"CreditTransaction"> | number
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: JsonNullableFilter<"CreditTransaction">
    appUsageId?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
  }

  export type AppUsageUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AppUsageWhereUniqueInput
    update: XOR<AppUsageUpdateWithoutCustomerInput, AppUsageUncheckedUpdateWithoutCustomerInput>
    create: XOR<AppUsageCreateWithoutCustomerInput, AppUsageUncheckedCreateWithoutCustomerInput>
  }

  export type AppUsageUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AppUsageWhereUniqueInput
    data: XOR<AppUsageUpdateWithoutCustomerInput, AppUsageUncheckedUpdateWithoutCustomerInput>
  }

  export type AppUsageUpdateManyWithWhereWithoutCustomerInput = {
    where: AppUsageScalarWhereInput
    data: XOR<AppUsageUpdateManyMutationInput, AppUsageUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AppUsageScalarWhereInput = {
    AND?: AppUsageScalarWhereInput | AppUsageScalarWhereInput[]
    OR?: AppUsageScalarWhereInput[]
    NOT?: AppUsageScalarWhereInput | AppUsageScalarWhereInput[]
    id?: StringFilter<"AppUsage"> | string
    customerId?: StringFilter<"AppUsage"> | string
    feature?: StringFilter<"AppUsage"> | string
    creditsUsed?: IntFilter<"AppUsage"> | number
    description?: StringNullableFilter<"AppUsage"> | string | null
    metadata?: JsonNullableFilter<"AppUsage">
    createdAt?: DateTimeFilter<"AppUsage"> | Date | string
  }

  export type CustomerCreateWithoutSubscriptionsInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    payments?: StripePaymentCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: StripePaymentUncheckedCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSubscriptionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
  }

  export type CustomerUpsertWithoutSubscriptionsInput = {
    update: XOR<CustomerUpdateWithoutSubscriptionsInput, CustomerUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSubscriptionsInput, CustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CustomerUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    payments?: StripePaymentUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: StripePaymentUncheckedUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutPaymentsInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPaymentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
  }

  export type CreditTransactionCreateWithoutPaymentInput = {
    id?: string
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCreditTransactionsInput
    appUsage?: AppUsageCreateNestedOneWithoutCreditTransactionInput
  }

  export type CreditTransactionUncheckedCreateWithoutPaymentInput = {
    id?: string
    customerId: string
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutPaymentInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutPaymentInput, CreditTransactionUncheckedCreateWithoutPaymentInput>
  }

  export type CustomerUpsertWithoutPaymentsInput = {
    update: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CreditTransactionUpsertWithoutPaymentInput = {
    update: XOR<CreditTransactionUpdateWithoutPaymentInput, CreditTransactionUncheckedUpdateWithoutPaymentInput>
    create: XOR<CreditTransactionCreateWithoutPaymentInput, CreditTransactionUncheckedCreateWithoutPaymentInput>
    where?: CreditTransactionWhereInput
  }

  export type CreditTransactionUpdateToOneWithWhereWithoutPaymentInput = {
    where?: CreditTransactionWhereInput
    data: XOR<CreditTransactionUpdateWithoutPaymentInput, CreditTransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type CreditTransactionUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCreditTransactionsNestedInput
    appUsage?: AppUsageUpdateOneWithoutCreditTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutCreditTransactionsInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    payments?: StripePaymentCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCreditTransactionsInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    payments?: StripePaymentUncheckedCreateNestedManyWithoutCustomerInput
    appUsages?: AppUsageUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCreditTransactionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCreditTransactionsInput, CustomerUncheckedCreateWithoutCreditTransactionsInput>
  }

  export type StripePaymentCreateWithoutCreditTransactionInput = {
    id?: string
    stripePaymentIntentId?: string | null
    stripeChargeId?: string | null
    stripeCheckoutSessionId?: string | null
    stripeInvoiceId?: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType?: string | null
    receiptUrl?: string | null
    failureReason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutPaymentsInput
  }

  export type StripePaymentUncheckedCreateWithoutCreditTransactionInput = {
    id?: string
    customerId?: string | null
    stripePaymentIntentId?: string | null
    stripeChargeId?: string | null
    stripeCheckoutSessionId?: string | null
    stripeInvoiceId?: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType?: string | null
    receiptUrl?: string | null
    failureReason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StripePaymentCreateOrConnectWithoutCreditTransactionInput = {
    where: StripePaymentWhereUniqueInput
    create: XOR<StripePaymentCreateWithoutCreditTransactionInput, StripePaymentUncheckedCreateWithoutCreditTransactionInput>
  }

  export type AppUsageCreateWithoutCreditTransactionInput = {
    id?: string
    feature: string
    creditsUsed: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutAppUsagesInput
  }

  export type AppUsageUncheckedCreateWithoutCreditTransactionInput = {
    id?: string
    customerId: string
    feature: string
    creditsUsed: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AppUsageCreateOrConnectWithoutCreditTransactionInput = {
    where: AppUsageWhereUniqueInput
    create: XOR<AppUsageCreateWithoutCreditTransactionInput, AppUsageUncheckedCreateWithoutCreditTransactionInput>
  }

  export type CustomerUpsertWithoutCreditTransactionsInput = {
    update: XOR<CustomerUpdateWithoutCreditTransactionsInput, CustomerUncheckedUpdateWithoutCreditTransactionsInput>
    create: XOR<CustomerCreateWithoutCreditTransactionsInput, CustomerUncheckedCreateWithoutCreditTransactionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCreditTransactionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCreditTransactionsInput, CustomerUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type CustomerUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    payments?: StripePaymentUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: StripePaymentUncheckedUpdateManyWithoutCustomerNestedInput
    appUsages?: AppUsageUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type StripePaymentUpsertWithoutCreditTransactionInput = {
    update: XOR<StripePaymentUpdateWithoutCreditTransactionInput, StripePaymentUncheckedUpdateWithoutCreditTransactionInput>
    create: XOR<StripePaymentCreateWithoutCreditTransactionInput, StripePaymentUncheckedCreateWithoutCreditTransactionInput>
    where?: StripePaymentWhereInput
  }

  export type StripePaymentUpdateToOneWithWhereWithoutCreditTransactionInput = {
    where?: StripePaymentWhereInput
    data: XOR<StripePaymentUpdateWithoutCreditTransactionInput, StripePaymentUncheckedUpdateWithoutCreditTransactionInput>
  }

  export type StripePaymentUpdateWithoutCreditTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutPaymentsNestedInput
  }

  export type StripePaymentUncheckedUpdateWithoutCreditTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUsageUpsertWithoutCreditTransactionInput = {
    update: XOR<AppUsageUpdateWithoutCreditTransactionInput, AppUsageUncheckedUpdateWithoutCreditTransactionInput>
    create: XOR<AppUsageCreateWithoutCreditTransactionInput, AppUsageUncheckedCreateWithoutCreditTransactionInput>
    where?: AppUsageWhereInput
  }

  export type AppUsageUpdateToOneWithWhereWithoutCreditTransactionInput = {
    where?: AppUsageWhereInput
    data: XOR<AppUsageUpdateWithoutCreditTransactionInput, AppUsageUncheckedUpdateWithoutCreditTransactionInput>
  }

  export type AppUsageUpdateWithoutCreditTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAppUsagesNestedInput
  }

  export type AppUsageUncheckedUpdateWithoutCreditTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutAppUsagesInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomerInput
    subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
    payments?: StripePaymentCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAppUsagesInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
    payments?: StripePaymentUncheckedCreateNestedManyWithoutCustomerInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAppUsagesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAppUsagesInput, CustomerUncheckedCreateWithoutAppUsagesInput>
  }

  export type CreditTransactionCreateWithoutAppUsageInput = {
    id?: string
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCreditTransactionsInput
    payment?: StripePaymentCreateNestedOneWithoutCreditTransactionInput
  }

  export type CreditTransactionUncheckedCreateWithoutAppUsageInput = {
    id?: string
    customerId: string
    stripePaymentId?: string | null
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutAppUsageInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutAppUsageInput, CreditTransactionUncheckedCreateWithoutAppUsageInput>
  }

  export type CustomerUpsertWithoutAppUsagesInput = {
    update: XOR<CustomerUpdateWithoutAppUsagesInput, CustomerUncheckedUpdateWithoutAppUsagesInput>
    create: XOR<CustomerCreateWithoutAppUsagesInput, CustomerUncheckedCreateWithoutAppUsagesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAppUsagesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAppUsagesInput, CustomerUncheckedUpdateWithoutAppUsagesInput>
  }

  export type CustomerUpdateWithoutAppUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomerNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutCustomerNestedInput
    payments?: StripePaymentUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAppUsagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: StripePaymentUncheckedUpdateManyWithoutCustomerNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CreditTransactionUpsertWithoutAppUsageInput = {
    update: XOR<CreditTransactionUpdateWithoutAppUsageInput, CreditTransactionUncheckedUpdateWithoutAppUsageInput>
    create: XOR<CreditTransactionCreateWithoutAppUsageInput, CreditTransactionUncheckedCreateWithoutAppUsageInput>
    where?: CreditTransactionWhereInput
  }

  export type CreditTransactionUpdateToOneWithWhereWithoutAppUsageInput = {
    where?: CreditTransactionWhereInput
    data: XOR<CreditTransactionUpdateWithoutAppUsageInput, CreditTransactionUncheckedUpdateWithoutAppUsageInput>
  }

  export type CreditTransactionUpdateWithoutAppUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCreditTransactionsNestedInput
    payment?: StripePaymentUpdateOneWithoutCreditTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutAppUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyCustomerInput = {
    id?: string
    stripeSubscriptionId: string
    stripePriceId: string
    productId?: string | null
    status: string
    currentPeriodStart: Date | string
    currentPeriodEnd: Date | string
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    endedAt?: Date | string | null
    trialStart?: Date | string | null
    trialEnd?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StripePaymentCreateManyCustomerInput = {
    id?: string
    stripePaymentIntentId?: string | null
    stripeChargeId?: string | null
    stripeCheckoutSessionId?: string | null
    stripeInvoiceId?: string | null
    amount: number
    currency: string
    status: string
    paymentMethodType?: string | null
    receiptUrl?: string | null
    failureReason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditTransactionCreateManyCustomerInput = {
    id?: string
    stripePaymentId?: string | null
    type: string
    amount: number
    balanceAfter: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: string | null
    createdAt?: Date | string
  }

  export type AppUsageCreateManyCustomerInput = {
    id?: string
    feature: string
    creditsUsed: number
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SubscriptionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripePaymentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditTransaction?: CreditTransactionUpdateOneWithoutPaymentNestedInput
  }

  export type StripePaymentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditTransaction?: CreditTransactionUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type StripePaymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeChargeId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCheckoutSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: StripePaymentUpdateOneWithoutCreditTransactionNestedInput
    appUsage?: AppUsageUpdateOneWithoutCreditTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    balanceAfter?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    appUsageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUsageUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditTransaction?: CreditTransactionUpdateOneWithoutAppUsageNestedInput
  }

  export type AppUsageUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditTransaction?: CreditTransactionUncheckedUpdateOneWithoutAppUsageNestedInput
  }

  export type AppUsageUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    creditsUsed?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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