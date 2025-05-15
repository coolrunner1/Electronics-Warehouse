
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
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model client
 * 
 */
export type client = $Result.DefaultSelection<Prisma.$clientPayload>
/**
 * Model clientorder
 * 
 */
export type clientorder = $Result.DefaultSelection<Prisma.$clientorderPayload>
/**
 * Model item
 * 
 */
export type item = $Result.DefaultSelection<Prisma.$itemPayload>
/**
 * Model orderproduct
 * 
 */
export type orderproduct = $Result.DefaultSelection<Prisma.$orderproductPayload>
/**
 * Model orderreturn
 * 
 */
export type orderreturn = $Result.DefaultSelection<Prisma.$orderreturnPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model supplier
 * 
 */
export type supplier = $Result.DefaultSelection<Prisma.$supplierPayload>
/**
 * Model supplieritem
 * 
 */
export type supplieritem = $Result.DefaultSelection<Prisma.$supplieritemPayload>
/**
 * Model userprofile
 * 
 */
export type userprofile = $Result.DefaultSelection<Prisma.$userprofilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const item_status: {
  In_Stock: 'In_Stock',
  Out_Of_Stock: 'Out_Of_Stock'
};

export type item_status = (typeof item_status)[keyof typeof item_status]


export const order_status: {
  Pending: 'Pending',
  Processing: 'Processing',
  Shipped: 'Shipped',
  Delivered: 'Delivered',
  Canceled: 'Canceled'
};

export type order_status = (typeof order_status)[keyof typeof order_status]


export const return_reason: {
  Defective_Product: 'Defective_Product',
  Wrong_Item_Sent: 'Wrong_Item_Sent',
  Item_Not_as_Described: 'Item_Not_as_Described',
  Changed_Mind: 'Changed_Mind',
  Other: 'Other'
};

export type return_reason = (typeof return_reason)[keyof typeof return_reason]


export const return_status: {
  Sent: 'Sent',
  Received: 'Received',
  Processing: 'Processing',
  Refunded: 'Refunded',
  Rejected: 'Rejected'
};

export type return_status = (typeof return_status)[keyof typeof return_status]

}

export type item_status = $Enums.item_status

export const item_status: typeof $Enums.item_status

export type order_status = $Enums.order_status

export const order_status: typeof $Enums.order_status

export type return_reason = $Enums.return_reason

export const return_reason: typeof $Enums.return_reason

export type return_status = $Enums.return_status

export const return_status: typeof $Enums.return_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.clientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientorder`: Exposes CRUD operations for the **clientorder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientorders
    * const clientorders = await prisma.clientorder.findMany()
    * ```
    */
  get clientorder(): Prisma.clientorderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderproduct`: Exposes CRUD operations for the **orderproduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orderproducts
    * const orderproducts = await prisma.orderproduct.findMany()
    * ```
    */
  get orderproduct(): Prisma.orderproductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderreturn`: Exposes CRUD operations for the **orderreturn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orderreturns
    * const orderreturns = await prisma.orderreturn.findMany()
    * ```
    */
  get orderreturn(): Prisma.orderreturnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.supplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplieritem`: Exposes CRUD operations for the **supplieritem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supplieritems
    * const supplieritems = await prisma.supplieritem.findMany()
    * ```
    */
  get supplieritem(): Prisma.supplieritemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userprofile`: Exposes CRUD operations for the **userprofile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userprofiles
    * const userprofiles = await prisma.userprofile.findMany()
    * ```
    */
  get userprofile(): Prisma.userprofileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    category: 'category',
    client: 'client',
    clientorder: 'clientorder',
    item: 'item',
    orderproduct: 'orderproduct',
    orderreturn: 'orderreturn',
    role: 'role',
    supplier: 'supplier',
    supplieritem: 'supplieritem',
    userprofile: 'userprofile'
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
      modelProps: "category" | "client" | "clientorder" | "item" | "orderproduct" | "orderreturn" | "role" | "supplier" | "supplieritem" | "userprofile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      client: {
        payload: Prisma.$clientPayload<ExtArgs>
        fields: Prisma.clientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findFirst: {
            args: Prisma.clientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findMany: {
            args: Prisma.clientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          create: {
            args: Prisma.clientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          createMany: {
            args: Prisma.clientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          delete: {
            args: Prisma.clientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          update: {
            args: Prisma.clientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          deleteMany: {
            args: Prisma.clientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          upsert: {
            args: Prisma.clientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.clientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      clientorder: {
        payload: Prisma.$clientorderPayload<ExtArgs>
        fields: Prisma.clientorderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientorderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientorderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>
          }
          findFirst: {
            args: Prisma.clientorderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientorderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>
          }
          findMany: {
            args: Prisma.clientorderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>[]
          }
          create: {
            args: Prisma.clientorderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>
          }
          createMany: {
            args: Prisma.clientorderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientorderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>[]
          }
          delete: {
            args: Prisma.clientorderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>
          }
          update: {
            args: Prisma.clientorderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>
          }
          deleteMany: {
            args: Prisma.clientorderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientorderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientorderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>[]
          }
          upsert: {
            args: Prisma.clientorderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientorderPayload>
          }
          aggregate: {
            args: Prisma.ClientorderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientorder>
          }
          groupBy: {
            args: Prisma.clientorderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientorderGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientorderCountArgs<ExtArgs>
            result: $Utils.Optional<ClientorderCountAggregateOutputType> | number
          }
        }
      }
      item: {
        payload: Prisma.$itemPayload<ExtArgs>
        fields: Prisma.itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findFirst: {
            args: Prisma.itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findMany: {
            args: Prisma.itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          create: {
            args: Prisma.itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          createMany: {
            args: Prisma.itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          delete: {
            args: Prisma.itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          update: {
            args: Prisma.itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          deleteMany: {
            args: Prisma.itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          upsert: {
            args: Prisma.itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      orderproduct: {
        payload: Prisma.$orderproductPayload<ExtArgs>
        fields: Prisma.orderproductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderproductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderproductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>
          }
          findFirst: {
            args: Prisma.orderproductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderproductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>
          }
          findMany: {
            args: Prisma.orderproductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>[]
          }
          create: {
            args: Prisma.orderproductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>
          }
          createMany: {
            args: Prisma.orderproductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderproductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>[]
          }
          delete: {
            args: Prisma.orderproductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>
          }
          update: {
            args: Prisma.orderproductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>
          }
          deleteMany: {
            args: Prisma.orderproductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderproductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderproductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>[]
          }
          upsert: {
            args: Prisma.orderproductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderproductPayload>
          }
          aggregate: {
            args: Prisma.OrderproductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderproduct>
          }
          groupBy: {
            args: Prisma.orderproductGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderproductGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderproductCountArgs<ExtArgs>
            result: $Utils.Optional<OrderproductCountAggregateOutputType> | number
          }
        }
      }
      orderreturn: {
        payload: Prisma.$orderreturnPayload<ExtArgs>
        fields: Prisma.orderreturnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderreturnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderreturnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>
          }
          findFirst: {
            args: Prisma.orderreturnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderreturnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>
          }
          findMany: {
            args: Prisma.orderreturnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>[]
          }
          create: {
            args: Prisma.orderreturnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>
          }
          createMany: {
            args: Prisma.orderreturnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderreturnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>[]
          }
          delete: {
            args: Prisma.orderreturnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>
          }
          update: {
            args: Prisma.orderreturnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>
          }
          deleteMany: {
            args: Prisma.orderreturnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderreturnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderreturnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>[]
          }
          upsert: {
            args: Prisma.orderreturnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderreturnPayload>
          }
          aggregate: {
            args: Prisma.OrderreturnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderreturn>
          }
          groupBy: {
            args: Prisma.orderreturnGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderreturnGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderreturnCountArgs<ExtArgs>
            result: $Utils.Optional<OrderreturnCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      supplier: {
        payload: Prisma.$supplierPayload<ExtArgs>
        fields: Prisma.supplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findFirst: {
            args: Prisma.supplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          findMany: {
            args: Prisma.supplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          create: {
            args: Prisma.supplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          createMany: {
            args: Prisma.supplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          delete: {
            args: Prisma.supplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          update: {
            args: Prisma.supplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          deleteMany: {
            args: Prisma.supplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[]
          }
          upsert: {
            args: Prisma.supplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.supplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      supplieritem: {
        payload: Prisma.$supplieritemPayload<ExtArgs>
        fields: Prisma.supplieritemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplieritemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplieritemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>
          }
          findFirst: {
            args: Prisma.supplieritemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplieritemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>
          }
          findMany: {
            args: Prisma.supplieritemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>[]
          }
          create: {
            args: Prisma.supplieritemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>
          }
          createMany: {
            args: Prisma.supplieritemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supplieritemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>[]
          }
          delete: {
            args: Prisma.supplieritemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>
          }
          update: {
            args: Prisma.supplieritemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>
          }
          deleteMany: {
            args: Prisma.supplieritemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supplieritemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supplieritemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>[]
          }
          upsert: {
            args: Prisma.supplieritemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplieritemPayload>
          }
          aggregate: {
            args: Prisma.SupplieritemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplieritem>
          }
          groupBy: {
            args: Prisma.supplieritemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplieritemGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplieritemCountArgs<ExtArgs>
            result: $Utils.Optional<SupplieritemCountAggregateOutputType> | number
          }
        }
      }
      userprofile: {
        payload: Prisma.$userprofilePayload<ExtArgs>
        fields: Prisma.userprofileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userprofileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userprofileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          findFirst: {
            args: Prisma.userprofileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userprofileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          findMany: {
            args: Prisma.userprofileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          create: {
            args: Prisma.userprofileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          createMany: {
            args: Prisma.userprofileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userprofileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          delete: {
            args: Prisma.userprofileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          update: {
            args: Prisma.userprofileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          deleteMany: {
            args: Prisma.userprofileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userprofileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userprofileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          upsert: {
            args: Prisma.userprofileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          aggregate: {
            args: Prisma.UserprofileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserprofile>
          }
          groupBy: {
            args: Prisma.userprofileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserprofileGroupByOutputType>[]
          }
          count: {
            args: Prisma.userprofileCountArgs<ExtArgs>
            result: $Utils.Optional<UserprofileCountAggregateOutputType> | number
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
    category?: categoryOmit
    client?: clientOmit
    clientorder?: clientorderOmit
    item?: itemOmit
    orderproduct?: orderproductOmit
    orderreturn?: orderreturnOmit
    role?: roleOmit
    supplier?: supplierOmit
    supplieritem?: supplieritemOmit
    userprofile?: userprofileOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    item: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | CategoryCountOutputTypeCountItemArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    clientorder: number
    userprofile: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientorder?: boolean | ClientCountOutputTypeCountClientorderArgs
    userprofile?: boolean | ClientCountOutputTypeCountUserprofileArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountClientorderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientorderWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountUserprofileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userprofileWhereInput
  }


  /**
   * Count Type ClientorderCountOutputType
   */

  export type ClientorderCountOutputType = {
    orderproduct: number
  }

  export type ClientorderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderproduct?: boolean | ClientorderCountOutputTypeCountOrderproductArgs
  }

  // Custom InputTypes
  /**
   * ClientorderCountOutputType without action
   */
  export type ClientorderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientorderCountOutputType
     */
    select?: ClientorderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientorderCountOutputType without action
   */
  export type ClientorderCountOutputTypeCountOrderproductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderproductWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    orderproduct: number
    supplieritem: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderproduct?: boolean | ItemCountOutputTypeCountOrderproductArgs
    supplieritem?: boolean | ItemCountOutputTypeCountSupplieritemArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountOrderproductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderproductWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountSupplieritemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplieritemWhereInput
  }


  /**
   * Count Type OrderproductCountOutputType
   */

  export type OrderproductCountOutputType = {
    orderreturn: number
  }

  export type OrderproductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderreturn?: boolean | OrderproductCountOutputTypeCountOrderreturnArgs
  }

  // Custom InputTypes
  /**
   * OrderproductCountOutputType without action
   */
  export type OrderproductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderproductCountOutputType
     */
    select?: OrderproductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderproductCountOutputType without action
   */
  export type OrderproductCountOutputTypeCountOrderreturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderreturnWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userprofile: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userprofile?: boolean | RoleCountOutputTypeCountUserprofileArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserprofileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userprofileWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    supplieritem: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplieritem?: boolean | SupplierCountOutputTypeCountSupplieritemArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountSupplieritemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplieritemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
    parent_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: number | null
    parent_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: number | null
    name: string | null
    description: string | null
    parent_id: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: number | null
    name: string | null
    description: string | null
    parent_id: number | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    name: number
    description: number
    parent_id: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
    parent_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
    parent_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_id?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    name?: true
    description?: true
    parent_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: number
    name: string
    description: string
    parent_id: number | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_id?: boolean
    item?: boolean | category$itemArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_id?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_id?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    category_id?: boolean
    name?: boolean
    description?: boolean
    parent_id?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "name" | "description" | "parent_id", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | category$itemArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      item: Prisma.$itemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      name: string
      description: string
      parent_id: number | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.updateManyAndReturn({
     *   select: { category_id: true },
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
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
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
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends category$itemArgs<ExtArgs> = {}>(args?: Subset<T, category$itemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly category_id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly description: FieldRef<"category", 'String'>
    readonly parent_id: FieldRef<"category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.item
   */
  export type category$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    where?: itemWhereInput
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    cursor?: itemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    client_id: number | null
    phone_number: number | null
    postal_code: number | null
  }

  export type ClientSumAggregateOutputType = {
    client_id: number | null
    phone_number: number | null
    postal_code: number | null
  }

  export type ClientMinAggregateOutputType = {
    client_id: number | null
    name: string | null
    phone_number: number | null
    address: string | null
    email: string | null
    city: string | null
    region: string | null
    country: string | null
    postal_code: number | null
  }

  export type ClientMaxAggregateOutputType = {
    client_id: number | null
    name: string | null
    phone_number: number | null
    address: string | null
    email: string | null
    city: string | null
    region: string | null
    country: string | null
    postal_code: number | null
  }

  export type ClientCountAggregateOutputType = {
    client_id: number
    name: number
    phone_number: number
    address: number
    email: number
    city: number
    region: number
    country: number
    postal_code: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    client_id?: true
    phone_number?: true
    postal_code?: true
  }

  export type ClientSumAggregateInputType = {
    client_id?: true
    phone_number?: true
    postal_code?: true
  }

  export type ClientMinAggregateInputType = {
    client_id?: true
    name?: true
    phone_number?: true
    address?: true
    email?: true
    city?: true
    region?: true
    country?: true
    postal_code?: true
  }

  export type ClientMaxAggregateInputType = {
    client_id?: true
    name?: true
    phone_number?: true
    address?: true
    email?: true
    city?: true
    region?: true
    country?: true
    postal_code?: true
  }

  export type ClientCountAggregateInputType = {
    client_id?: true
    name?: true
    phone_number?: true
    address?: true
    email?: true
    city?: true
    region?: true
    country?: true
    postal_code?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client to aggregate.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
    orderBy?: clientOrderByWithAggregationInput | clientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    client_id: number
    name: string
    phone_number: number
    address: string
    email: string
    city: string
    region: string
    country: string
    postal_code: number
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    name?: boolean
    phone_number?: boolean
    address?: boolean
    email?: boolean
    city?: boolean
    region?: boolean
    country?: boolean
    postal_code?: boolean
    clientorder?: boolean | client$clientorderArgs<ExtArgs>
    userprofile?: boolean | client$userprofileArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type clientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    name?: boolean
    phone_number?: boolean
    address?: boolean
    email?: boolean
    city?: boolean
    region?: boolean
    country?: boolean
    postal_code?: boolean
  }, ExtArgs["result"]["client"]>

  export type clientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    client_id?: boolean
    name?: boolean
    phone_number?: boolean
    address?: boolean
    email?: boolean
    city?: boolean
    region?: boolean
    country?: boolean
    postal_code?: boolean
  }, ExtArgs["result"]["client"]>

  export type clientSelectScalar = {
    client_id?: boolean
    name?: boolean
    phone_number?: boolean
    address?: boolean
    email?: boolean
    city?: boolean
    region?: boolean
    country?: boolean
    postal_code?: boolean
  }

  export type clientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"client_id" | "name" | "phone_number" | "address" | "email" | "city" | "region" | "country" | "postal_code", ExtArgs["result"]["client"]>
  export type clientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientorder?: boolean | client$clientorderArgs<ExtArgs>
    userprofile?: boolean | client$userprofileArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client"
    objects: {
      clientorder: Prisma.$clientorderPayload<ExtArgs>[]
      userprofile: Prisma.$userprofilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      client_id: number
      name: string
      phone_number: number
      address: string
      email: string
      city: string
      region: string
      country: string
      postal_code: number
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type clientGetPayload<S extends boolean | null | undefined | clientDefaultArgs> = $Result.GetResult<Prisma.$clientPayload, S>

  type clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client'], meta: { name: 'client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {clientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientFindUniqueArgs>(args: SelectSubset<T, clientFindUniqueArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientFindUniqueOrThrowArgs>(args: SelectSubset<T, clientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientFindFirstArgs>(args?: SelectSubset<T, clientFindFirstArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientFindFirstOrThrowArgs>(args?: SelectSubset<T, clientFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `client_id`
     * const clientWithClient_idOnly = await prisma.client.findMany({ select: { client_id: true } })
     * 
     */
    findMany<T extends clientFindManyArgs>(args?: SelectSubset<T, clientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {clientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends clientCreateArgs>(args: SelectSubset<T, clientCreateArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {clientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientCreateManyArgs>(args?: SelectSubset<T, clientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {clientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `client_id`
     * const clientWithClient_idOnly = await prisma.client.createManyAndReturn({
     *   select: { client_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientCreateManyAndReturnArgs>(args?: SelectSubset<T, clientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {clientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends clientDeleteArgs>(args: SelectSubset<T, clientDeleteArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {clientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientUpdateArgs>(args: SelectSubset<T, clientUpdateArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientDeleteManyArgs>(args?: SelectSubset<T, clientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientUpdateManyArgs>(args: SelectSubset<T, clientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {clientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `client_id`
     * const clientWithClient_idOnly = await prisma.client.updateManyAndReturn({
     *   select: { client_id: true },
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
    updateManyAndReturn<T extends clientUpdateManyAndReturnArgs>(args: SelectSubset<T, clientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {clientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends clientUpsertArgs>(args: SelectSubset<T, clientUpsertArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientCountArgs>(
      args?: Subset<T, clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientGroupByArgs} args - Group by arguments.
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
      T extends clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientGroupByArgs['orderBy'] }
        : { orderBy?: clientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the client model
   */
  readonly fields: clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientorder<T extends client$clientorderArgs<ExtArgs> = {}>(args?: Subset<T, client$clientorderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userprofile<T extends client$userprofileArgs<ExtArgs> = {}>(args?: Subset<T, client$userprofileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the client model
   */
  interface clientFieldRefs {
    readonly client_id: FieldRef<"client", 'Int'>
    readonly name: FieldRef<"client", 'String'>
    readonly phone_number: FieldRef<"client", 'Int'>
    readonly address: FieldRef<"client", 'String'>
    readonly email: FieldRef<"client", 'String'>
    readonly city: FieldRef<"client", 'String'>
    readonly region: FieldRef<"client", 'String'>
    readonly country: FieldRef<"client", 'String'>
    readonly postal_code: FieldRef<"client", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * client findUnique
   */
  export type clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findUniqueOrThrow
   */
  export type clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findFirst
   */
  export type clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findFirstOrThrow
   */
  export type clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findMany
   */
  export type clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client create
   */
  export type clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to create a client.
     */
    data: XOR<clientCreateInput, clientUncheckedCreateInput>
  }

  /**
   * client createMany
   */
  export type clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client createManyAndReturn
   */
  export type clientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client update
   */
  export type clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to update a client.
     */
    data: XOR<clientUpdateInput, clientUncheckedUpdateInput>
    /**
     * Choose, which client to update.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client updateMany
   */
  export type clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * client updateManyAndReturn
   */
  export type clientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * client upsert
   */
  export type clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The filter to search for the client to update in case it exists.
     */
    where: clientWhereUniqueInput
    /**
     * In case the client found by the `where` argument doesn't exist, create a new client with this data.
     */
    create: XOR<clientCreateInput, clientUncheckedCreateInput>
    /**
     * In case the client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientUpdateInput, clientUncheckedUpdateInput>
  }

  /**
   * client delete
   */
  export type clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter which client to delete.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client deleteMany
   */
  export type clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * client.clientorder
   */
  export type client$clientorderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    where?: clientorderWhereInput
    orderBy?: clientorderOrderByWithRelationInput | clientorderOrderByWithRelationInput[]
    cursor?: clientorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientorderScalarFieldEnum | ClientorderScalarFieldEnum[]
  }

  /**
   * client.userprofile
   */
  export type client$userprofileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    where?: userprofileWhereInput
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    cursor?: userprofileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * client without action
   */
  export type clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
  }


  /**
   * Model clientorder
   */

  export type AggregateClientorder = {
    _count: ClientorderCountAggregateOutputType | null
    _avg: ClientorderAvgAggregateOutputType | null
    _sum: ClientorderSumAggregateOutputType | null
    _min: ClientorderMinAggregateOutputType | null
    _max: ClientorderMaxAggregateOutputType | null
  }

  export type ClientorderAvgAggregateOutputType = {
    order_id: number | null
    client_id: number | null
    total_items: number | null
    total_amount: number | null
  }

  export type ClientorderSumAggregateOutputType = {
    order_id: number | null
    client_id: number | null
    total_items: number | null
    total_amount: number | null
  }

  export type ClientorderMinAggregateOutputType = {
    order_id: number | null
    client_id: number | null
    status: $Enums.order_status | null
    timestamp: Date | null
    total_items: number | null
    total_amount: number | null
  }

  export type ClientorderMaxAggregateOutputType = {
    order_id: number | null
    client_id: number | null
    status: $Enums.order_status | null
    timestamp: Date | null
    total_items: number | null
    total_amount: number | null
  }

  export type ClientorderCountAggregateOutputType = {
    order_id: number
    client_id: number
    status: number
    timestamp: number
    total_items: number
    total_amount: number
    _all: number
  }


  export type ClientorderAvgAggregateInputType = {
    order_id?: true
    client_id?: true
    total_items?: true
    total_amount?: true
  }

  export type ClientorderSumAggregateInputType = {
    order_id?: true
    client_id?: true
    total_items?: true
    total_amount?: true
  }

  export type ClientorderMinAggregateInputType = {
    order_id?: true
    client_id?: true
    status?: true
    timestamp?: true
    total_items?: true
    total_amount?: true
  }

  export type ClientorderMaxAggregateInputType = {
    order_id?: true
    client_id?: true
    status?: true
    timestamp?: true
    total_items?: true
    total_amount?: true
  }

  export type ClientorderCountAggregateInputType = {
    order_id?: true
    client_id?: true
    status?: true
    timestamp?: true
    total_items?: true
    total_amount?: true
    _all?: true
  }

  export type ClientorderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientorder to aggregate.
     */
    where?: clientorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientorders to fetch.
     */
    orderBy?: clientorderOrderByWithRelationInput | clientorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientorders
    **/
    _count?: true | ClientorderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientorderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientorderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientorderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientorderMaxAggregateInputType
  }

  export type GetClientorderAggregateType<T extends ClientorderAggregateArgs> = {
        [P in keyof T & keyof AggregateClientorder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientorder[P]>
      : GetScalarType<T[P], AggregateClientorder[P]>
  }




  export type clientorderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientorderWhereInput
    orderBy?: clientorderOrderByWithAggregationInput | clientorderOrderByWithAggregationInput[]
    by: ClientorderScalarFieldEnum[] | ClientorderScalarFieldEnum
    having?: clientorderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientorderCountAggregateInputType | true
    _avg?: ClientorderAvgAggregateInputType
    _sum?: ClientorderSumAggregateInputType
    _min?: ClientorderMinAggregateInputType
    _max?: ClientorderMaxAggregateInputType
  }

  export type ClientorderGroupByOutputType = {
    order_id: number
    client_id: number
    status: $Enums.order_status
    timestamp: Date
    total_items: number
    total_amount: number
    _count: ClientorderCountAggregateOutputType | null
    _avg: ClientorderAvgAggregateOutputType | null
    _sum: ClientorderSumAggregateOutputType | null
    _min: ClientorderMinAggregateOutputType | null
    _max: ClientorderMaxAggregateOutputType | null
  }

  type GetClientorderGroupByPayload<T extends clientorderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientorderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientorderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientorderGroupByOutputType[P]>
            : GetScalarType<T[P], ClientorderGroupByOutputType[P]>
        }
      >
    >


  export type clientorderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    client_id?: boolean
    status?: boolean
    timestamp?: boolean
    total_items?: boolean
    total_amount?: boolean
    client?: boolean | clientDefaultArgs<ExtArgs>
    orderproduct?: boolean | clientorder$orderproductArgs<ExtArgs>
    _count?: boolean | ClientorderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientorder"]>

  export type clientorderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    client_id?: boolean
    status?: boolean
    timestamp?: boolean
    total_items?: boolean
    total_amount?: boolean
    client?: boolean | clientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientorder"]>

  export type clientorderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    client_id?: boolean
    status?: boolean
    timestamp?: boolean
    total_items?: boolean
    total_amount?: boolean
    client?: boolean | clientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientorder"]>

  export type clientorderSelectScalar = {
    order_id?: boolean
    client_id?: boolean
    status?: boolean
    timestamp?: boolean
    total_items?: boolean
    total_amount?: boolean
  }

  export type clientorderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "client_id" | "status" | "timestamp" | "total_items" | "total_amount", ExtArgs["result"]["clientorder"]>
  export type clientorderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientDefaultArgs<ExtArgs>
    orderproduct?: boolean | clientorder$orderproductArgs<ExtArgs>
    _count?: boolean | ClientorderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clientorderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientDefaultArgs<ExtArgs>
  }
  export type clientorderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientDefaultArgs<ExtArgs>
  }

  export type $clientorderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientorder"
    objects: {
      client: Prisma.$clientPayload<ExtArgs>
      orderproduct: Prisma.$orderproductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      client_id: number
      status: $Enums.order_status
      timestamp: Date
      total_items: number
      total_amount: number
    }, ExtArgs["result"]["clientorder"]>
    composites: {}
  }

  type clientorderGetPayload<S extends boolean | null | undefined | clientorderDefaultArgs> = $Result.GetResult<Prisma.$clientorderPayload, S>

  type clientorderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientorderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientorderCountAggregateInputType | true
    }

  export interface clientorderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientorder'], meta: { name: 'clientorder' } }
    /**
     * Find zero or one Clientorder that matches the filter.
     * @param {clientorderFindUniqueArgs} args - Arguments to find a Clientorder
     * @example
     * // Get one Clientorder
     * const clientorder = await prisma.clientorder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientorderFindUniqueArgs>(args: SelectSubset<T, clientorderFindUniqueArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientorder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientorderFindUniqueOrThrowArgs} args - Arguments to find a Clientorder
     * @example
     * // Get one Clientorder
     * const clientorder = await prisma.clientorder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientorderFindUniqueOrThrowArgs>(args: SelectSubset<T, clientorderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientorder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientorderFindFirstArgs} args - Arguments to find a Clientorder
     * @example
     * // Get one Clientorder
     * const clientorder = await prisma.clientorder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientorderFindFirstArgs>(args?: SelectSubset<T, clientorderFindFirstArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientorder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientorderFindFirstOrThrowArgs} args - Arguments to find a Clientorder
     * @example
     * // Get one Clientorder
     * const clientorder = await prisma.clientorder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientorderFindFirstOrThrowArgs>(args?: SelectSubset<T, clientorderFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientorders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientorderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientorders
     * const clientorders = await prisma.clientorder.findMany()
     * 
     * // Get first 10 Clientorders
     * const clientorders = await prisma.clientorder.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const clientorderWithOrder_idOnly = await prisma.clientorder.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends clientorderFindManyArgs>(args?: SelectSubset<T, clientorderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientorder.
     * @param {clientorderCreateArgs} args - Arguments to create a Clientorder.
     * @example
     * // Create one Clientorder
     * const Clientorder = await prisma.clientorder.create({
     *   data: {
     *     // ... data to create a Clientorder
     *   }
     * })
     * 
     */
    create<T extends clientorderCreateArgs>(args: SelectSubset<T, clientorderCreateArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientorders.
     * @param {clientorderCreateManyArgs} args - Arguments to create many Clientorders.
     * @example
     * // Create many Clientorders
     * const clientorder = await prisma.clientorder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientorderCreateManyArgs>(args?: SelectSubset<T, clientorderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientorders and returns the data saved in the database.
     * @param {clientorderCreateManyAndReturnArgs} args - Arguments to create many Clientorders.
     * @example
     * // Create many Clientorders
     * const clientorder = await prisma.clientorder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientorders and only return the `order_id`
     * const clientorderWithOrder_idOnly = await prisma.clientorder.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientorderCreateManyAndReturnArgs>(args?: SelectSubset<T, clientorderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clientorder.
     * @param {clientorderDeleteArgs} args - Arguments to delete one Clientorder.
     * @example
     * // Delete one Clientorder
     * const Clientorder = await prisma.clientorder.delete({
     *   where: {
     *     // ... filter to delete one Clientorder
     *   }
     * })
     * 
     */
    delete<T extends clientorderDeleteArgs>(args: SelectSubset<T, clientorderDeleteArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientorder.
     * @param {clientorderUpdateArgs} args - Arguments to update one Clientorder.
     * @example
     * // Update one Clientorder
     * const clientorder = await prisma.clientorder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientorderUpdateArgs>(args: SelectSubset<T, clientorderUpdateArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientorders.
     * @param {clientorderDeleteManyArgs} args - Arguments to filter Clientorders to delete.
     * @example
     * // Delete a few Clientorders
     * const { count } = await prisma.clientorder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientorderDeleteManyArgs>(args?: SelectSubset<T, clientorderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientorderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientorders
     * const clientorder = await prisma.clientorder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientorderUpdateManyArgs>(args: SelectSubset<T, clientorderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientorders and returns the data updated in the database.
     * @param {clientorderUpdateManyAndReturnArgs} args - Arguments to update many Clientorders.
     * @example
     * // Update many Clientorders
     * const clientorder = await prisma.clientorder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientorders and only return the `order_id`
     * const clientorderWithOrder_idOnly = await prisma.clientorder.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends clientorderUpdateManyAndReturnArgs>(args: SelectSubset<T, clientorderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clientorder.
     * @param {clientorderUpsertArgs} args - Arguments to update or create a Clientorder.
     * @example
     * // Update or create a Clientorder
     * const clientorder = await prisma.clientorder.upsert({
     *   create: {
     *     // ... data to create a Clientorder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientorder we want to update
     *   }
     * })
     */
    upsert<T extends clientorderUpsertArgs>(args: SelectSubset<T, clientorderUpsertArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientorderCountArgs} args - Arguments to filter Clientorders to count.
     * @example
     * // Count the number of Clientorders
     * const count = await prisma.clientorder.count({
     *   where: {
     *     // ... the filter for the Clientorders we want to count
     *   }
     * })
    **/
    count<T extends clientorderCountArgs>(
      args?: Subset<T, clientorderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientorderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientorderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientorderAggregateArgs>(args: Subset<T, ClientorderAggregateArgs>): Prisma.PrismaPromise<GetClientorderAggregateType<T>>

    /**
     * Group by Clientorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientorderGroupByArgs} args - Group by arguments.
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
      T extends clientorderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientorderGroupByArgs['orderBy'] }
        : { orderBy?: clientorderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientorderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientorderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientorder model
   */
  readonly fields: clientorderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientorder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientorderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends clientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientDefaultArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderproduct<T extends clientorder$orderproductArgs<ExtArgs> = {}>(args?: Subset<T, clientorder$orderproductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the clientorder model
   */
  interface clientorderFieldRefs {
    readonly order_id: FieldRef<"clientorder", 'Int'>
    readonly client_id: FieldRef<"clientorder", 'Int'>
    readonly status: FieldRef<"clientorder", 'order_status'>
    readonly timestamp: FieldRef<"clientorder", 'DateTime'>
    readonly total_items: FieldRef<"clientorder", 'Int'>
    readonly total_amount: FieldRef<"clientorder", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * clientorder findUnique
   */
  export type clientorderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * Filter, which clientorder to fetch.
     */
    where: clientorderWhereUniqueInput
  }

  /**
   * clientorder findUniqueOrThrow
   */
  export type clientorderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * Filter, which clientorder to fetch.
     */
    where: clientorderWhereUniqueInput
  }

  /**
   * clientorder findFirst
   */
  export type clientorderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * Filter, which clientorder to fetch.
     */
    where?: clientorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientorders to fetch.
     */
    orderBy?: clientorderOrderByWithRelationInput | clientorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientorders.
     */
    cursor?: clientorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientorders.
     */
    distinct?: ClientorderScalarFieldEnum | ClientorderScalarFieldEnum[]
  }

  /**
   * clientorder findFirstOrThrow
   */
  export type clientorderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * Filter, which clientorder to fetch.
     */
    where?: clientorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientorders to fetch.
     */
    orderBy?: clientorderOrderByWithRelationInput | clientorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientorders.
     */
    cursor?: clientorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientorders.
     */
    distinct?: ClientorderScalarFieldEnum | ClientorderScalarFieldEnum[]
  }

  /**
   * clientorder findMany
   */
  export type clientorderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * Filter, which clientorders to fetch.
     */
    where?: clientorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientorders to fetch.
     */
    orderBy?: clientorderOrderByWithRelationInput | clientorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientorders.
     */
    cursor?: clientorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientorders.
     */
    skip?: number
    distinct?: ClientorderScalarFieldEnum | ClientorderScalarFieldEnum[]
  }

  /**
   * clientorder create
   */
  export type clientorderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * The data needed to create a clientorder.
     */
    data: XOR<clientorderCreateInput, clientorderUncheckedCreateInput>
  }

  /**
   * clientorder createMany
   */
  export type clientorderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientorders.
     */
    data: clientorderCreateManyInput | clientorderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientorder createManyAndReturn
   */
  export type clientorderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * The data used to create many clientorders.
     */
    data: clientorderCreateManyInput | clientorderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * clientorder update
   */
  export type clientorderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * The data needed to update a clientorder.
     */
    data: XOR<clientorderUpdateInput, clientorderUncheckedUpdateInput>
    /**
     * Choose, which clientorder to update.
     */
    where: clientorderWhereUniqueInput
  }

  /**
   * clientorder updateMany
   */
  export type clientorderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientorders.
     */
    data: XOR<clientorderUpdateManyMutationInput, clientorderUncheckedUpdateManyInput>
    /**
     * Filter which clientorders to update
     */
    where?: clientorderWhereInput
    /**
     * Limit how many clientorders to update.
     */
    limit?: number
  }

  /**
   * clientorder updateManyAndReturn
   */
  export type clientorderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * The data used to update clientorders.
     */
    data: XOR<clientorderUpdateManyMutationInput, clientorderUncheckedUpdateManyInput>
    /**
     * Filter which clientorders to update
     */
    where?: clientorderWhereInput
    /**
     * Limit how many clientorders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * clientorder upsert
   */
  export type clientorderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * The filter to search for the clientorder to update in case it exists.
     */
    where: clientorderWhereUniqueInput
    /**
     * In case the clientorder found by the `where` argument doesn't exist, create a new clientorder with this data.
     */
    create: XOR<clientorderCreateInput, clientorderUncheckedCreateInput>
    /**
     * In case the clientorder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientorderUpdateInput, clientorderUncheckedUpdateInput>
  }

  /**
   * clientorder delete
   */
  export type clientorderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
    /**
     * Filter which clientorder to delete.
     */
    where: clientorderWhereUniqueInput
  }

  /**
   * clientorder deleteMany
   */
  export type clientorderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientorders to delete
     */
    where?: clientorderWhereInput
    /**
     * Limit how many clientorders to delete.
     */
    limit?: number
  }

  /**
   * clientorder.orderproduct
   */
  export type clientorder$orderproductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    where?: orderproductWhereInput
    orderBy?: orderproductOrderByWithRelationInput | orderproductOrderByWithRelationInput[]
    cursor?: orderproductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderproductScalarFieldEnum | OrderproductScalarFieldEnum[]
  }

  /**
   * clientorder without action
   */
  export type clientorderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientorder
     */
    select?: clientorderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientorder
     */
    omit?: clientorderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientorderInclude<ExtArgs> | null
  }


  /**
   * Model item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    item_id: number | null
    category_id: number | null
    unit_price: number | null
    units_in_stock: number | null
    faulty_units: number | null
  }

  export type ItemSumAggregateOutputType = {
    item_id: number | null
    category_id: number | null
    unit_price: number | null
    units_in_stock: number | null
    faulty_units: number | null
  }

  export type ItemMinAggregateOutputType = {
    item_id: number | null
    category_id: number | null
    model: string | null
    image_path: string | null
    status: $Enums.item_status | null
    manufacturer: string | null
    unit_price: number | null
    date_of_arrival: Date | null
    units_in_stock: number | null
    faulty_units: number | null
  }

  export type ItemMaxAggregateOutputType = {
    item_id: number | null
    category_id: number | null
    model: string | null
    image_path: string | null
    status: $Enums.item_status | null
    manufacturer: string | null
    unit_price: number | null
    date_of_arrival: Date | null
    units_in_stock: number | null
    faulty_units: number | null
  }

  export type ItemCountAggregateOutputType = {
    item_id: number
    category_id: number
    model: number
    image_path: number
    status: number
    manufacturer: number
    unit_price: number
    date_of_arrival: number
    units_in_stock: number
    faulty_units: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    item_id?: true
    category_id?: true
    unit_price?: true
    units_in_stock?: true
    faulty_units?: true
  }

  export type ItemSumAggregateInputType = {
    item_id?: true
    category_id?: true
    unit_price?: true
    units_in_stock?: true
    faulty_units?: true
  }

  export type ItemMinAggregateInputType = {
    item_id?: true
    category_id?: true
    model?: true
    image_path?: true
    status?: true
    manufacturer?: true
    unit_price?: true
    date_of_arrival?: true
    units_in_stock?: true
    faulty_units?: true
  }

  export type ItemMaxAggregateInputType = {
    item_id?: true
    category_id?: true
    model?: true
    image_path?: true
    status?: true
    manufacturer?: true
    unit_price?: true
    date_of_arrival?: true
    units_in_stock?: true
    faulty_units?: true
  }

  export type ItemCountAggregateInputType = {
    item_id?: true
    category_id?: true
    model?: true
    image_path?: true
    status?: true
    manufacturer?: true
    unit_price?: true
    date_of_arrival?: true
    units_in_stock?: true
    faulty_units?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item to aggregate.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
    orderBy?: itemOrderByWithAggregationInput | itemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    item_id: number
    category_id: number
    model: string
    image_path: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date
    units_in_stock: number
    faulty_units: number
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    category_id?: boolean
    model?: boolean
    image_path?: boolean
    status?: boolean
    manufacturer?: boolean
    unit_price?: boolean
    date_of_arrival?: boolean
    units_in_stock?: boolean
    faulty_units?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    orderproduct?: boolean | item$orderproductArgs<ExtArgs>
    supplieritem?: boolean | item$supplieritemArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    category_id?: boolean
    model?: boolean
    image_path?: boolean
    status?: boolean
    manufacturer?: boolean
    unit_price?: boolean
    date_of_arrival?: boolean
    units_in_stock?: boolean
    faulty_units?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    item_id?: boolean
    category_id?: boolean
    model?: boolean
    image_path?: boolean
    status?: boolean
    manufacturer?: boolean
    unit_price?: boolean
    date_of_arrival?: boolean
    units_in_stock?: boolean
    faulty_units?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type itemSelectScalar = {
    item_id?: boolean
    category_id?: boolean
    model?: boolean
    image_path?: boolean
    status?: boolean
    manufacturer?: boolean
    unit_price?: boolean
    date_of_arrival?: boolean
    units_in_stock?: boolean
    faulty_units?: boolean
  }

  export type itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"item_id" | "category_id" | "model" | "image_path" | "status" | "manufacturer" | "unit_price" | "date_of_arrival" | "units_in_stock" | "faulty_units", ExtArgs["result"]["item"]>
  export type itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    orderproduct?: boolean | item$orderproductArgs<ExtArgs>
    supplieritem?: boolean | item$supplieritemArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }
  export type itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }

  export type $itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      orderproduct: Prisma.$orderproductPayload<ExtArgs>[]
      supplieritem: Prisma.$supplieritemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      item_id: number
      category_id: number
      model: string
      image_path: string | null
      status: $Enums.item_status
      manufacturer: string
      unit_price: number
      date_of_arrival: Date
      units_in_stock: number
      faulty_units: number
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type itemGetPayload<S extends boolean | null | undefined | itemDefaultArgs> = $Result.GetResult<Prisma.$itemPayload, S>

  type itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item'], meta: { name: 'item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {itemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemFindUniqueArgs>(args: SelectSubset<T, itemFindUniqueArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemFindUniqueOrThrowArgs>(args: SelectSubset<T, itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemFindFirstArgs>(args?: SelectSubset<T, itemFindFirstArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemFindFirstOrThrowArgs>(args?: SelectSubset<T, itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const itemWithItem_idOnly = await prisma.item.findMany({ select: { item_id: true } })
     * 
     */
    findMany<T extends itemFindManyArgs>(args?: SelectSubset<T, itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {itemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends itemCreateArgs>(args: SelectSubset<T, itemCreateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemCreateManyArgs>(args?: SelectSubset<T, itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {itemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `item_id`
     * const itemWithItem_idOnly = await prisma.item.createManyAndReturn({
     *   select: { item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itemCreateManyAndReturnArgs>(args?: SelectSubset<T, itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {itemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends itemDeleteArgs>(args: SelectSubset<T, itemDeleteArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {itemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemUpdateArgs>(args: SelectSubset<T, itemUpdateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemDeleteManyArgs>(args?: SelectSubset<T, itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemUpdateManyArgs>(args: SelectSubset<T, itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {itemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `item_id`
     * const itemWithItem_idOnly = await prisma.item.updateManyAndReturn({
     *   select: { item_id: true },
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
    updateManyAndReturn<T extends itemUpdateManyAndReturnArgs>(args: SelectSubset<T, itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {itemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends itemUpsertArgs>(args: SelectSubset<T, itemUpsertArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemCountArgs>(
      args?: Subset<T, itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemGroupByArgs} args - Group by arguments.
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
      T extends itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemGroupByArgs['orderBy'] }
        : { orderBy?: itemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item model
   */
  readonly fields: itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderproduct<T extends item$orderproductArgs<ExtArgs> = {}>(args?: Subset<T, item$orderproductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supplieritem<T extends item$supplieritemArgs<ExtArgs> = {}>(args?: Subset<T, item$supplieritemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the item model
   */
  interface itemFieldRefs {
    readonly item_id: FieldRef<"item", 'Int'>
    readonly category_id: FieldRef<"item", 'Int'>
    readonly model: FieldRef<"item", 'String'>
    readonly image_path: FieldRef<"item", 'String'>
    readonly status: FieldRef<"item", 'item_status'>
    readonly manufacturer: FieldRef<"item", 'String'>
    readonly unit_price: FieldRef<"item", 'Float'>
    readonly date_of_arrival: FieldRef<"item", 'DateTime'>
    readonly units_in_stock: FieldRef<"item", 'Int'>
    readonly faulty_units: FieldRef<"item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * item findUnique
   */
  export type itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findUniqueOrThrow
   */
  export type itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findFirst
   */
  export type itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findFirstOrThrow
   */
  export type itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findMany
   */
  export type itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item create
   */
  export type itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to create a item.
     */
    data: XOR<itemCreateInput, itemUncheckedCreateInput>
  }

  /**
   * item createMany
   */
  export type itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item createManyAndReturn
   */
  export type itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * item update
   */
  export type itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to update a item.
     */
    data: XOR<itemUpdateInput, itemUncheckedUpdateInput>
    /**
     * Choose, which item to update.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item updateMany
   */
  export type itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * item updateManyAndReturn
   */
  export type itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * item upsert
   */
  export type itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The filter to search for the item to update in case it exists.
     */
    where: itemWhereUniqueInput
    /**
     * In case the item found by the `where` argument doesn't exist, create a new item with this data.
     */
    create: XOR<itemCreateInput, itemUncheckedCreateInput>
    /**
     * In case the item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemUpdateInput, itemUncheckedUpdateInput>
  }

  /**
   * item delete
   */
  export type itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter which item to delete.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item deleteMany
   */
  export type itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * item.orderproduct
   */
  export type item$orderproductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    where?: orderproductWhereInput
    orderBy?: orderproductOrderByWithRelationInput | orderproductOrderByWithRelationInput[]
    cursor?: orderproductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderproductScalarFieldEnum | OrderproductScalarFieldEnum[]
  }

  /**
   * item.supplieritem
   */
  export type item$supplieritemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    where?: supplieritemWhereInput
    orderBy?: supplieritemOrderByWithRelationInput | supplieritemOrderByWithRelationInput[]
    cursor?: supplieritemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplieritemScalarFieldEnum | SupplieritemScalarFieldEnum[]
  }

  /**
   * item without action
   */
  export type itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
  }


  /**
   * Model orderproduct
   */

  export type AggregateOrderproduct = {
    _count: OrderproductCountAggregateOutputType | null
    _avg: OrderproductAvgAggregateOutputType | null
    _sum: OrderproductSumAggregateOutputType | null
    _min: OrderproductMinAggregateOutputType | null
    _max: OrderproductMaxAggregateOutputType | null
  }

  export type OrderproductAvgAggregateOutputType = {
    order_product_id: number | null
    order_id: number | null
    item_id: number | null
    quantity: number | null
    returned_units: number | null
  }

  export type OrderproductSumAggregateOutputType = {
    order_product_id: number | null
    order_id: number | null
    item_id: number | null
    quantity: number | null
    returned_units: number | null
  }

  export type OrderproductMinAggregateOutputType = {
    order_product_id: number | null
    order_id: number | null
    item_id: number | null
    quantity: number | null
    returned_units: number | null
  }

  export type OrderproductMaxAggregateOutputType = {
    order_product_id: number | null
    order_id: number | null
    item_id: number | null
    quantity: number | null
    returned_units: number | null
  }

  export type OrderproductCountAggregateOutputType = {
    order_product_id: number
    order_id: number
    item_id: number
    quantity: number
    returned_units: number
    _all: number
  }


  export type OrderproductAvgAggregateInputType = {
    order_product_id?: true
    order_id?: true
    item_id?: true
    quantity?: true
    returned_units?: true
  }

  export type OrderproductSumAggregateInputType = {
    order_product_id?: true
    order_id?: true
    item_id?: true
    quantity?: true
    returned_units?: true
  }

  export type OrderproductMinAggregateInputType = {
    order_product_id?: true
    order_id?: true
    item_id?: true
    quantity?: true
    returned_units?: true
  }

  export type OrderproductMaxAggregateInputType = {
    order_product_id?: true
    order_id?: true
    item_id?: true
    quantity?: true
    returned_units?: true
  }

  export type OrderproductCountAggregateInputType = {
    order_product_id?: true
    order_id?: true
    item_id?: true
    quantity?: true
    returned_units?: true
    _all?: true
  }

  export type OrderproductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderproduct to aggregate.
     */
    where?: orderproductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderproducts to fetch.
     */
    orderBy?: orderproductOrderByWithRelationInput | orderproductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderproductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderproducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderproducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderproducts
    **/
    _count?: true | OrderproductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderproductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderproductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderproductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderproductMaxAggregateInputType
  }

  export type GetOrderproductAggregateType<T extends OrderproductAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderproduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderproduct[P]>
      : GetScalarType<T[P], AggregateOrderproduct[P]>
  }




  export type orderproductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderproductWhereInput
    orderBy?: orderproductOrderByWithAggregationInput | orderproductOrderByWithAggregationInput[]
    by: OrderproductScalarFieldEnum[] | OrderproductScalarFieldEnum
    having?: orderproductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderproductCountAggregateInputType | true
    _avg?: OrderproductAvgAggregateInputType
    _sum?: OrderproductSumAggregateInputType
    _min?: OrderproductMinAggregateInputType
    _max?: OrderproductMaxAggregateInputType
  }

  export type OrderproductGroupByOutputType = {
    order_product_id: number
    order_id: number
    item_id: number
    quantity: number
    returned_units: number
    _count: OrderproductCountAggregateOutputType | null
    _avg: OrderproductAvgAggregateOutputType | null
    _sum: OrderproductSumAggregateOutputType | null
    _min: OrderproductMinAggregateOutputType | null
    _max: OrderproductMaxAggregateOutputType | null
  }

  type GetOrderproductGroupByPayload<T extends orderproductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderproductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderproductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderproductGroupByOutputType[P]>
            : GetScalarType<T[P], OrderproductGroupByOutputType[P]>
        }
      >
    >


  export type orderproductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_product_id?: boolean
    order_id?: boolean
    item_id?: boolean
    quantity?: boolean
    returned_units?: boolean
    clientorder?: boolean | clientorderDefaultArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
    orderreturn?: boolean | orderproduct$orderreturnArgs<ExtArgs>
    _count?: boolean | OrderproductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderproduct"]>

  export type orderproductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_product_id?: boolean
    order_id?: boolean
    item_id?: boolean
    quantity?: boolean
    returned_units?: boolean
    clientorder?: boolean | clientorderDefaultArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderproduct"]>

  export type orderproductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_product_id?: boolean
    order_id?: boolean
    item_id?: boolean
    quantity?: boolean
    returned_units?: boolean
    clientorder?: boolean | clientorderDefaultArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderproduct"]>

  export type orderproductSelectScalar = {
    order_product_id?: boolean
    order_id?: boolean
    item_id?: boolean
    quantity?: boolean
    returned_units?: boolean
  }

  export type orderproductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_product_id" | "order_id" | "item_id" | "quantity" | "returned_units", ExtArgs["result"]["orderproduct"]>
  export type orderproductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientorder?: boolean | clientorderDefaultArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
    orderreturn?: boolean | orderproduct$orderreturnArgs<ExtArgs>
    _count?: boolean | OrderproductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type orderproductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientorder?: boolean | clientorderDefaultArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }
  export type orderproductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientorder?: boolean | clientorderDefaultArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }

  export type $orderproductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderproduct"
    objects: {
      clientorder: Prisma.$clientorderPayload<ExtArgs>
      item: Prisma.$itemPayload<ExtArgs>
      orderreturn: Prisma.$orderreturnPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_product_id: number
      order_id: number
      item_id: number
      quantity: number
      returned_units: number
    }, ExtArgs["result"]["orderproduct"]>
    composites: {}
  }

  type orderproductGetPayload<S extends boolean | null | undefined | orderproductDefaultArgs> = $Result.GetResult<Prisma.$orderproductPayload, S>

  type orderproductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderproductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderproductCountAggregateInputType | true
    }

  export interface orderproductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderproduct'], meta: { name: 'orderproduct' } }
    /**
     * Find zero or one Orderproduct that matches the filter.
     * @param {orderproductFindUniqueArgs} args - Arguments to find a Orderproduct
     * @example
     * // Get one Orderproduct
     * const orderproduct = await prisma.orderproduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderproductFindUniqueArgs>(args: SelectSubset<T, orderproductFindUniqueArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orderproduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderproductFindUniqueOrThrowArgs} args - Arguments to find a Orderproduct
     * @example
     * // Get one Orderproduct
     * const orderproduct = await prisma.orderproduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderproductFindUniqueOrThrowArgs>(args: SelectSubset<T, orderproductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderproduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderproductFindFirstArgs} args - Arguments to find a Orderproduct
     * @example
     * // Get one Orderproduct
     * const orderproduct = await prisma.orderproduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderproductFindFirstArgs>(args?: SelectSubset<T, orderproductFindFirstArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderproduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderproductFindFirstOrThrowArgs} args - Arguments to find a Orderproduct
     * @example
     * // Get one Orderproduct
     * const orderproduct = await prisma.orderproduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderproductFindFirstOrThrowArgs>(args?: SelectSubset<T, orderproductFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orderproducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderproductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orderproducts
     * const orderproducts = await prisma.orderproduct.findMany()
     * 
     * // Get first 10 Orderproducts
     * const orderproducts = await prisma.orderproduct.findMany({ take: 10 })
     * 
     * // Only select the `order_product_id`
     * const orderproductWithOrder_product_idOnly = await prisma.orderproduct.findMany({ select: { order_product_id: true } })
     * 
     */
    findMany<T extends orderproductFindManyArgs>(args?: SelectSubset<T, orderproductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orderproduct.
     * @param {orderproductCreateArgs} args - Arguments to create a Orderproduct.
     * @example
     * // Create one Orderproduct
     * const Orderproduct = await prisma.orderproduct.create({
     *   data: {
     *     // ... data to create a Orderproduct
     *   }
     * })
     * 
     */
    create<T extends orderproductCreateArgs>(args: SelectSubset<T, orderproductCreateArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orderproducts.
     * @param {orderproductCreateManyArgs} args - Arguments to create many Orderproducts.
     * @example
     * // Create many Orderproducts
     * const orderproduct = await prisma.orderproduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderproductCreateManyArgs>(args?: SelectSubset<T, orderproductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orderproducts and returns the data saved in the database.
     * @param {orderproductCreateManyAndReturnArgs} args - Arguments to create many Orderproducts.
     * @example
     * // Create many Orderproducts
     * const orderproduct = await prisma.orderproduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orderproducts and only return the `order_product_id`
     * const orderproductWithOrder_product_idOnly = await prisma.orderproduct.createManyAndReturn({
     *   select: { order_product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderproductCreateManyAndReturnArgs>(args?: SelectSubset<T, orderproductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orderproduct.
     * @param {orderproductDeleteArgs} args - Arguments to delete one Orderproduct.
     * @example
     * // Delete one Orderproduct
     * const Orderproduct = await prisma.orderproduct.delete({
     *   where: {
     *     // ... filter to delete one Orderproduct
     *   }
     * })
     * 
     */
    delete<T extends orderproductDeleteArgs>(args: SelectSubset<T, orderproductDeleteArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orderproduct.
     * @param {orderproductUpdateArgs} args - Arguments to update one Orderproduct.
     * @example
     * // Update one Orderproduct
     * const orderproduct = await prisma.orderproduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderproductUpdateArgs>(args: SelectSubset<T, orderproductUpdateArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orderproducts.
     * @param {orderproductDeleteManyArgs} args - Arguments to filter Orderproducts to delete.
     * @example
     * // Delete a few Orderproducts
     * const { count } = await prisma.orderproduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderproductDeleteManyArgs>(args?: SelectSubset<T, orderproductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderproducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderproductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orderproducts
     * const orderproduct = await prisma.orderproduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderproductUpdateManyArgs>(args: SelectSubset<T, orderproductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderproducts and returns the data updated in the database.
     * @param {orderproductUpdateManyAndReturnArgs} args - Arguments to update many Orderproducts.
     * @example
     * // Update many Orderproducts
     * const orderproduct = await prisma.orderproduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orderproducts and only return the `order_product_id`
     * const orderproductWithOrder_product_idOnly = await prisma.orderproduct.updateManyAndReturn({
     *   select: { order_product_id: true },
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
    updateManyAndReturn<T extends orderproductUpdateManyAndReturnArgs>(args: SelectSubset<T, orderproductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orderproduct.
     * @param {orderproductUpsertArgs} args - Arguments to update or create a Orderproduct.
     * @example
     * // Update or create a Orderproduct
     * const orderproduct = await prisma.orderproduct.upsert({
     *   create: {
     *     // ... data to create a Orderproduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orderproduct we want to update
     *   }
     * })
     */
    upsert<T extends orderproductUpsertArgs>(args: SelectSubset<T, orderproductUpsertArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orderproducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderproductCountArgs} args - Arguments to filter Orderproducts to count.
     * @example
     * // Count the number of Orderproducts
     * const count = await prisma.orderproduct.count({
     *   where: {
     *     // ... the filter for the Orderproducts we want to count
     *   }
     * })
    **/
    count<T extends orderproductCountArgs>(
      args?: Subset<T, orderproductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderproductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orderproduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderproductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderproductAggregateArgs>(args: Subset<T, OrderproductAggregateArgs>): Prisma.PrismaPromise<GetOrderproductAggregateType<T>>

    /**
     * Group by Orderproduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderproductGroupByArgs} args - Group by arguments.
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
      T extends orderproductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderproductGroupByArgs['orderBy'] }
        : { orderBy?: orderproductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orderproductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderproductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderproduct model
   */
  readonly fields: orderproductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderproduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderproductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientorder<T extends clientorderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientorderDefaultArgs<ExtArgs>>): Prisma__clientorderClient<$Result.GetResult<Prisma.$clientorderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends itemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemDefaultArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderreturn<T extends orderproduct$orderreturnArgs<ExtArgs> = {}>(args?: Subset<T, orderproduct$orderreturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the orderproduct model
   */
  interface orderproductFieldRefs {
    readonly order_product_id: FieldRef<"orderproduct", 'Int'>
    readonly order_id: FieldRef<"orderproduct", 'Int'>
    readonly item_id: FieldRef<"orderproduct", 'Int'>
    readonly quantity: FieldRef<"orderproduct", 'Int'>
    readonly returned_units: FieldRef<"orderproduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orderproduct findUnique
   */
  export type orderproductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * Filter, which orderproduct to fetch.
     */
    where: orderproductWhereUniqueInput
  }

  /**
   * orderproduct findUniqueOrThrow
   */
  export type orderproductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * Filter, which orderproduct to fetch.
     */
    where: orderproductWhereUniqueInput
  }

  /**
   * orderproduct findFirst
   */
  export type orderproductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * Filter, which orderproduct to fetch.
     */
    where?: orderproductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderproducts to fetch.
     */
    orderBy?: orderproductOrderByWithRelationInput | orderproductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderproducts.
     */
    cursor?: orderproductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderproducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderproducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderproducts.
     */
    distinct?: OrderproductScalarFieldEnum | OrderproductScalarFieldEnum[]
  }

  /**
   * orderproduct findFirstOrThrow
   */
  export type orderproductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * Filter, which orderproduct to fetch.
     */
    where?: orderproductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderproducts to fetch.
     */
    orderBy?: orderproductOrderByWithRelationInput | orderproductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderproducts.
     */
    cursor?: orderproductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderproducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderproducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderproducts.
     */
    distinct?: OrderproductScalarFieldEnum | OrderproductScalarFieldEnum[]
  }

  /**
   * orderproduct findMany
   */
  export type orderproductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * Filter, which orderproducts to fetch.
     */
    where?: orderproductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderproducts to fetch.
     */
    orderBy?: orderproductOrderByWithRelationInput | orderproductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderproducts.
     */
    cursor?: orderproductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderproducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderproducts.
     */
    skip?: number
    distinct?: OrderproductScalarFieldEnum | OrderproductScalarFieldEnum[]
  }

  /**
   * orderproduct create
   */
  export type orderproductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * The data needed to create a orderproduct.
     */
    data: XOR<orderproductCreateInput, orderproductUncheckedCreateInput>
  }

  /**
   * orderproduct createMany
   */
  export type orderproductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderproducts.
     */
    data: orderproductCreateManyInput | orderproductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderproduct createManyAndReturn
   */
  export type orderproductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * The data used to create many orderproducts.
     */
    data: orderproductCreateManyInput | orderproductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderproduct update
   */
  export type orderproductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * The data needed to update a orderproduct.
     */
    data: XOR<orderproductUpdateInput, orderproductUncheckedUpdateInput>
    /**
     * Choose, which orderproduct to update.
     */
    where: orderproductWhereUniqueInput
  }

  /**
   * orderproduct updateMany
   */
  export type orderproductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderproducts.
     */
    data: XOR<orderproductUpdateManyMutationInput, orderproductUncheckedUpdateManyInput>
    /**
     * Filter which orderproducts to update
     */
    where?: orderproductWhereInput
    /**
     * Limit how many orderproducts to update.
     */
    limit?: number
  }

  /**
   * orderproduct updateManyAndReturn
   */
  export type orderproductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * The data used to update orderproducts.
     */
    data: XOR<orderproductUpdateManyMutationInput, orderproductUncheckedUpdateManyInput>
    /**
     * Filter which orderproducts to update
     */
    where?: orderproductWhereInput
    /**
     * Limit how many orderproducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderproduct upsert
   */
  export type orderproductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * The filter to search for the orderproduct to update in case it exists.
     */
    where: orderproductWhereUniqueInput
    /**
     * In case the orderproduct found by the `where` argument doesn't exist, create a new orderproduct with this data.
     */
    create: XOR<orderproductCreateInput, orderproductUncheckedCreateInput>
    /**
     * In case the orderproduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderproductUpdateInput, orderproductUncheckedUpdateInput>
  }

  /**
   * orderproduct delete
   */
  export type orderproductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
    /**
     * Filter which orderproduct to delete.
     */
    where: orderproductWhereUniqueInput
  }

  /**
   * orderproduct deleteMany
   */
  export type orderproductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderproducts to delete
     */
    where?: orderproductWhereInput
    /**
     * Limit how many orderproducts to delete.
     */
    limit?: number
  }

  /**
   * orderproduct.orderreturn
   */
  export type orderproduct$orderreturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    where?: orderreturnWhereInput
    orderBy?: orderreturnOrderByWithRelationInput | orderreturnOrderByWithRelationInput[]
    cursor?: orderreturnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * orderproduct without action
   */
  export type orderproductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderproduct
     */
    select?: orderproductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderproduct
     */
    omit?: orderproductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderproductInclude<ExtArgs> | null
  }


  /**
   * Model orderreturn
   */

  export type AggregateOrderreturn = {
    _count: OrderreturnCountAggregateOutputType | null
    _avg: OrderreturnAvgAggregateOutputType | null
    _sum: OrderreturnSumAggregateOutputType | null
    _min: OrderreturnMinAggregateOutputType | null
    _max: OrderreturnMaxAggregateOutputType | null
  }

  export type OrderreturnAvgAggregateOutputType = {
    order_return_id: number | null
    order_product_id: number | null
    quantity: number | null
  }

  export type OrderreturnSumAggregateOutputType = {
    order_return_id: number | null
    order_product_id: number | null
    quantity: number | null
  }

  export type OrderreturnMinAggregateOutputType = {
    order_return_id: number | null
    order_product_id: number | null
    quantity: number | null
    reason: $Enums.return_reason | null
    description: string | null
    status: $Enums.return_status | null
    return_date: Date | null
  }

  export type OrderreturnMaxAggregateOutputType = {
    order_return_id: number | null
    order_product_id: number | null
    quantity: number | null
    reason: $Enums.return_reason | null
    description: string | null
    status: $Enums.return_status | null
    return_date: Date | null
  }

  export type OrderreturnCountAggregateOutputType = {
    order_return_id: number
    order_product_id: number
    quantity: number
    reason: number
    description: number
    status: number
    return_date: number
    _all: number
  }


  export type OrderreturnAvgAggregateInputType = {
    order_return_id?: true
    order_product_id?: true
    quantity?: true
  }

  export type OrderreturnSumAggregateInputType = {
    order_return_id?: true
    order_product_id?: true
    quantity?: true
  }

  export type OrderreturnMinAggregateInputType = {
    order_return_id?: true
    order_product_id?: true
    quantity?: true
    reason?: true
    description?: true
    status?: true
    return_date?: true
  }

  export type OrderreturnMaxAggregateInputType = {
    order_return_id?: true
    order_product_id?: true
    quantity?: true
    reason?: true
    description?: true
    status?: true
    return_date?: true
  }

  export type OrderreturnCountAggregateInputType = {
    order_return_id?: true
    order_product_id?: true
    quantity?: true
    reason?: true
    description?: true
    status?: true
    return_date?: true
    _all?: true
  }

  export type OrderreturnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderreturn to aggregate.
     */
    where?: orderreturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderreturns to fetch.
     */
    orderBy?: orderreturnOrderByWithRelationInput | orderreturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderreturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderreturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderreturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderreturns
    **/
    _count?: true | OrderreturnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderreturnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderreturnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderreturnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderreturnMaxAggregateInputType
  }

  export type GetOrderreturnAggregateType<T extends OrderreturnAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderreturn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderreturn[P]>
      : GetScalarType<T[P], AggregateOrderreturn[P]>
  }




  export type orderreturnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderreturnWhereInput
    orderBy?: orderreturnOrderByWithAggregationInput | orderreturnOrderByWithAggregationInput[]
    by: OrderreturnScalarFieldEnum[] | OrderreturnScalarFieldEnum
    having?: orderreturnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderreturnCountAggregateInputType | true
    _avg?: OrderreturnAvgAggregateInputType
    _sum?: OrderreturnSumAggregateInputType
    _min?: OrderreturnMinAggregateInputType
    _max?: OrderreturnMaxAggregateInputType
  }

  export type OrderreturnGroupByOutputType = {
    order_return_id: number
    order_product_id: number
    quantity: number
    reason: $Enums.return_reason
    description: string
    status: $Enums.return_status
    return_date: Date
    _count: OrderreturnCountAggregateOutputType | null
    _avg: OrderreturnAvgAggregateOutputType | null
    _sum: OrderreturnSumAggregateOutputType | null
    _min: OrderreturnMinAggregateOutputType | null
    _max: OrderreturnMaxAggregateOutputType | null
  }

  type GetOrderreturnGroupByPayload<T extends orderreturnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderreturnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderreturnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderreturnGroupByOutputType[P]>
            : GetScalarType<T[P], OrderreturnGroupByOutputType[P]>
        }
      >
    >


  export type orderreturnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_return_id?: boolean
    order_product_id?: boolean
    quantity?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    return_date?: boolean
    orderproduct?: boolean | orderproductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderreturn"]>

  export type orderreturnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_return_id?: boolean
    order_product_id?: boolean
    quantity?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    return_date?: boolean
    orderproduct?: boolean | orderproductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderreturn"]>

  export type orderreturnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_return_id?: boolean
    order_product_id?: boolean
    quantity?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    return_date?: boolean
    orderproduct?: boolean | orderproductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderreturn"]>

  export type orderreturnSelectScalar = {
    order_return_id?: boolean
    order_product_id?: boolean
    quantity?: boolean
    reason?: boolean
    description?: boolean
    status?: boolean
    return_date?: boolean
  }

  export type orderreturnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_return_id" | "order_product_id" | "quantity" | "reason" | "description" | "status" | "return_date", ExtArgs["result"]["orderreturn"]>
  export type orderreturnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderproduct?: boolean | orderproductDefaultArgs<ExtArgs>
  }
  export type orderreturnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderproduct?: boolean | orderproductDefaultArgs<ExtArgs>
  }
  export type orderreturnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderproduct?: boolean | orderproductDefaultArgs<ExtArgs>
  }

  export type $orderreturnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderreturn"
    objects: {
      orderproduct: Prisma.$orderproductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_return_id: number
      order_product_id: number
      quantity: number
      reason: $Enums.return_reason
      description: string
      status: $Enums.return_status
      return_date: Date
    }, ExtArgs["result"]["orderreturn"]>
    composites: {}
  }

  type orderreturnGetPayload<S extends boolean | null | undefined | orderreturnDefaultArgs> = $Result.GetResult<Prisma.$orderreturnPayload, S>

  type orderreturnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderreturnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderreturnCountAggregateInputType | true
    }

  export interface orderreturnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderreturn'], meta: { name: 'orderreturn' } }
    /**
     * Find zero or one Orderreturn that matches the filter.
     * @param {orderreturnFindUniqueArgs} args - Arguments to find a Orderreturn
     * @example
     * // Get one Orderreturn
     * const orderreturn = await prisma.orderreturn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderreturnFindUniqueArgs>(args: SelectSubset<T, orderreturnFindUniqueArgs<ExtArgs>>): Prisma__orderreturnClient<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orderreturn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderreturnFindUniqueOrThrowArgs} args - Arguments to find a Orderreturn
     * @example
     * // Get one Orderreturn
     * const orderreturn = await prisma.orderreturn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderreturnFindUniqueOrThrowArgs>(args: SelectSubset<T, orderreturnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderreturnClient<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderreturn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderreturnFindFirstArgs} args - Arguments to find a Orderreturn
     * @example
     * // Get one Orderreturn
     * const orderreturn = await prisma.orderreturn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderreturnFindFirstArgs>(args?: SelectSubset<T, orderreturnFindFirstArgs<ExtArgs>>): Prisma__orderreturnClient<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orderreturn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderreturnFindFirstOrThrowArgs} args - Arguments to find a Orderreturn
     * @example
     * // Get one Orderreturn
     * const orderreturn = await prisma.orderreturn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderreturnFindFirstOrThrowArgs>(args?: SelectSubset<T, orderreturnFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderreturnClient<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orderreturns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderreturnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orderreturns
     * const orderreturns = await prisma.orderreturn.findMany()
     * 
     * // Get first 10 Orderreturns
     * const orderreturns = await prisma.orderreturn.findMany({ take: 10 })
     * 
     * // Only select the `order_return_id`
     * const orderreturnWithOrder_return_idOnly = await prisma.orderreturn.findMany({ select: { order_return_id: true } })
     * 
     */
    findMany<T extends orderreturnFindManyArgs>(args?: SelectSubset<T, orderreturnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orderreturn.
     * @param {orderreturnCreateArgs} args - Arguments to create a Orderreturn.
     * @example
     * // Create one Orderreturn
     * const Orderreturn = await prisma.orderreturn.create({
     *   data: {
     *     // ... data to create a Orderreturn
     *   }
     * })
     * 
     */
    create<T extends orderreturnCreateArgs>(args: SelectSubset<T, orderreturnCreateArgs<ExtArgs>>): Prisma__orderreturnClient<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orderreturns.
     * @param {orderreturnCreateManyArgs} args - Arguments to create many Orderreturns.
     * @example
     * // Create many Orderreturns
     * const orderreturn = await prisma.orderreturn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderreturnCreateManyArgs>(args?: SelectSubset<T, orderreturnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orderreturns and returns the data saved in the database.
     * @param {orderreturnCreateManyAndReturnArgs} args - Arguments to create many Orderreturns.
     * @example
     * // Create many Orderreturns
     * const orderreturn = await prisma.orderreturn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orderreturns and only return the `order_return_id`
     * const orderreturnWithOrder_return_idOnly = await prisma.orderreturn.createManyAndReturn({
     *   select: { order_return_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderreturnCreateManyAndReturnArgs>(args?: SelectSubset<T, orderreturnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orderreturn.
     * @param {orderreturnDeleteArgs} args - Arguments to delete one Orderreturn.
     * @example
     * // Delete one Orderreturn
     * const Orderreturn = await prisma.orderreturn.delete({
     *   where: {
     *     // ... filter to delete one Orderreturn
     *   }
     * })
     * 
     */
    delete<T extends orderreturnDeleteArgs>(args: SelectSubset<T, orderreturnDeleteArgs<ExtArgs>>): Prisma__orderreturnClient<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orderreturn.
     * @param {orderreturnUpdateArgs} args - Arguments to update one Orderreturn.
     * @example
     * // Update one Orderreturn
     * const orderreturn = await prisma.orderreturn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderreturnUpdateArgs>(args: SelectSubset<T, orderreturnUpdateArgs<ExtArgs>>): Prisma__orderreturnClient<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orderreturns.
     * @param {orderreturnDeleteManyArgs} args - Arguments to filter Orderreturns to delete.
     * @example
     * // Delete a few Orderreturns
     * const { count } = await prisma.orderreturn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderreturnDeleteManyArgs>(args?: SelectSubset<T, orderreturnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderreturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderreturnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orderreturns
     * const orderreturn = await prisma.orderreturn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderreturnUpdateManyArgs>(args: SelectSubset<T, orderreturnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orderreturns and returns the data updated in the database.
     * @param {orderreturnUpdateManyAndReturnArgs} args - Arguments to update many Orderreturns.
     * @example
     * // Update many Orderreturns
     * const orderreturn = await prisma.orderreturn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orderreturns and only return the `order_return_id`
     * const orderreturnWithOrder_return_idOnly = await prisma.orderreturn.updateManyAndReturn({
     *   select: { order_return_id: true },
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
    updateManyAndReturn<T extends orderreturnUpdateManyAndReturnArgs>(args: SelectSubset<T, orderreturnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orderreturn.
     * @param {orderreturnUpsertArgs} args - Arguments to update or create a Orderreturn.
     * @example
     * // Update or create a Orderreturn
     * const orderreturn = await prisma.orderreturn.upsert({
     *   create: {
     *     // ... data to create a Orderreturn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orderreturn we want to update
     *   }
     * })
     */
    upsert<T extends orderreturnUpsertArgs>(args: SelectSubset<T, orderreturnUpsertArgs<ExtArgs>>): Prisma__orderreturnClient<$Result.GetResult<Prisma.$orderreturnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orderreturns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderreturnCountArgs} args - Arguments to filter Orderreturns to count.
     * @example
     * // Count the number of Orderreturns
     * const count = await prisma.orderreturn.count({
     *   where: {
     *     // ... the filter for the Orderreturns we want to count
     *   }
     * })
    **/
    count<T extends orderreturnCountArgs>(
      args?: Subset<T, orderreturnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderreturnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orderreturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderreturnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderreturnAggregateArgs>(args: Subset<T, OrderreturnAggregateArgs>): Prisma.PrismaPromise<GetOrderreturnAggregateType<T>>

    /**
     * Group by Orderreturn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderreturnGroupByArgs} args - Group by arguments.
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
      T extends orderreturnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderreturnGroupByArgs['orderBy'] }
        : { orderBy?: orderreturnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orderreturnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderreturnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderreturn model
   */
  readonly fields: orderreturnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderreturn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderreturnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderproduct<T extends orderproductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderproductDefaultArgs<ExtArgs>>): Prisma__orderproductClient<$Result.GetResult<Prisma.$orderproductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the orderreturn model
   */
  interface orderreturnFieldRefs {
    readonly order_return_id: FieldRef<"orderreturn", 'Int'>
    readonly order_product_id: FieldRef<"orderreturn", 'Int'>
    readonly quantity: FieldRef<"orderreturn", 'Int'>
    readonly reason: FieldRef<"orderreturn", 'return_reason'>
    readonly description: FieldRef<"orderreturn", 'String'>
    readonly status: FieldRef<"orderreturn", 'return_status'>
    readonly return_date: FieldRef<"orderreturn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orderreturn findUnique
   */
  export type orderreturnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * Filter, which orderreturn to fetch.
     */
    where: orderreturnWhereUniqueInput
  }

  /**
   * orderreturn findUniqueOrThrow
   */
  export type orderreturnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * Filter, which orderreturn to fetch.
     */
    where: orderreturnWhereUniqueInput
  }

  /**
   * orderreturn findFirst
   */
  export type orderreturnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * Filter, which orderreturn to fetch.
     */
    where?: orderreturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderreturns to fetch.
     */
    orderBy?: orderreturnOrderByWithRelationInput | orderreturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderreturns.
     */
    cursor?: orderreturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderreturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderreturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderreturns.
     */
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * orderreturn findFirstOrThrow
   */
  export type orderreturnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * Filter, which orderreturn to fetch.
     */
    where?: orderreturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderreturns to fetch.
     */
    orderBy?: orderreturnOrderByWithRelationInput | orderreturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderreturns.
     */
    cursor?: orderreturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderreturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderreturns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderreturns.
     */
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * orderreturn findMany
   */
  export type orderreturnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * Filter, which orderreturns to fetch.
     */
    where?: orderreturnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderreturns to fetch.
     */
    orderBy?: orderreturnOrderByWithRelationInput | orderreturnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderreturns.
     */
    cursor?: orderreturnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderreturns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderreturns.
     */
    skip?: number
    distinct?: OrderreturnScalarFieldEnum | OrderreturnScalarFieldEnum[]
  }

  /**
   * orderreturn create
   */
  export type orderreturnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * The data needed to create a orderreturn.
     */
    data: XOR<orderreturnCreateInput, orderreturnUncheckedCreateInput>
  }

  /**
   * orderreturn createMany
   */
  export type orderreturnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderreturns.
     */
    data: orderreturnCreateManyInput | orderreturnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderreturn createManyAndReturn
   */
  export type orderreturnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * The data used to create many orderreturns.
     */
    data: orderreturnCreateManyInput | orderreturnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderreturn update
   */
  export type orderreturnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * The data needed to update a orderreturn.
     */
    data: XOR<orderreturnUpdateInput, orderreturnUncheckedUpdateInput>
    /**
     * Choose, which orderreturn to update.
     */
    where: orderreturnWhereUniqueInput
  }

  /**
   * orderreturn updateMany
   */
  export type orderreturnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderreturns.
     */
    data: XOR<orderreturnUpdateManyMutationInput, orderreturnUncheckedUpdateManyInput>
    /**
     * Filter which orderreturns to update
     */
    where?: orderreturnWhereInput
    /**
     * Limit how many orderreturns to update.
     */
    limit?: number
  }

  /**
   * orderreturn updateManyAndReturn
   */
  export type orderreturnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * The data used to update orderreturns.
     */
    data: XOR<orderreturnUpdateManyMutationInput, orderreturnUncheckedUpdateManyInput>
    /**
     * Filter which orderreturns to update
     */
    where?: orderreturnWhereInput
    /**
     * Limit how many orderreturns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderreturn upsert
   */
  export type orderreturnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * The filter to search for the orderreturn to update in case it exists.
     */
    where: orderreturnWhereUniqueInput
    /**
     * In case the orderreturn found by the `where` argument doesn't exist, create a new orderreturn with this data.
     */
    create: XOR<orderreturnCreateInput, orderreturnUncheckedCreateInput>
    /**
     * In case the orderreturn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderreturnUpdateInput, orderreturnUncheckedUpdateInput>
  }

  /**
   * orderreturn delete
   */
  export type orderreturnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
    /**
     * Filter which orderreturn to delete.
     */
    where: orderreturnWhereUniqueInput
  }

  /**
   * orderreturn deleteMany
   */
  export type orderreturnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderreturns to delete
     */
    where?: orderreturnWhereInput
    /**
     * Limit how many orderreturns to delete.
     */
    limit?: number
  }

  /**
   * orderreturn without action
   */
  export type orderreturnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderreturn
     */
    select?: orderreturnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderreturn
     */
    omit?: orderreturnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderreturnInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type RoleSumAggregateOutputType = {
    role_id: number | null
  }

  export type RoleMinAggregateOutputType = {
    role_id: number | null
    name: string | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    role_id: number | null
    name: string | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    role_id: number
    name: number
    description: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    role_id?: true
  }

  export type RoleSumAggregateInputType = {
    role_id?: true
  }

  export type RoleMinAggregateInputType = {
    role_id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    role_id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    role_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    role_id: number
    name: string
    description: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    name?: boolean
    description?: boolean
    userprofile?: boolean | role$userprofileArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    role_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "name" | "description", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userprofile?: boolean | role$userprofileArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      userprofile: Prisma.$userprofilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      name: string
      description: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const roleWithRole_idOnly = await prisma.role.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `role_id`
     * const roleWithRole_idOnly = await prisma.role.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {roleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `role_id`
     * const roleWithRole_idOnly = await prisma.role.updateManyAndReturn({
     *   select: { role_id: true },
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
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
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
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userprofile<T extends role$userprofileArgs<ExtArgs> = {}>(args?: Subset<T, role$userprofileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly role_id: FieldRef<"role", 'Int'>
    readonly name: FieldRef<"role", 'String'>
    readonly description: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role updateManyAndReturn
   */
  export type roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.userprofile
   */
  export type role$userprofileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    where?: userprofileWhereInput
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    cursor?: userprofileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    supplier_id: number | null
    postal_code: number | null
    phone_number: number | null
  }

  export type SupplierSumAggregateOutputType = {
    supplier_id: number | null
    postal_code: number | null
    phone_number: number | null
  }

  export type SupplierMinAggregateOutputType = {
    supplier_id: number | null
    name: string | null
    email: string | null
    address: string | null
    city: string | null
    region: string | null
    country: string | null
    postal_code: number | null
    phone_number: number | null
  }

  export type SupplierMaxAggregateOutputType = {
    supplier_id: number | null
    name: string | null
    email: string | null
    address: string | null
    city: string | null
    region: string | null
    country: string | null
    postal_code: number | null
    phone_number: number | null
  }

  export type SupplierCountAggregateOutputType = {
    supplier_id: number
    name: number
    email: number
    address: number
    city: number
    region: number
    country: number
    postal_code: number
    phone_number: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    supplier_id?: true
    postal_code?: true
    phone_number?: true
  }

  export type SupplierSumAggregateInputType = {
    supplier_id?: true
    postal_code?: true
    phone_number?: true
  }

  export type SupplierMinAggregateInputType = {
    supplier_id?: true
    name?: true
    email?: true
    address?: true
    city?: true
    region?: true
    country?: true
    postal_code?: true
    phone_number?: true
  }

  export type SupplierMaxAggregateInputType = {
    supplier_id?: true
    name?: true
    email?: true
    address?: true
    city?: true
    region?: true
    country?: true
    postal_code?: true
    phone_number?: true
  }

  export type SupplierCountAggregateInputType = {
    supplier_id?: true
    name?: true
    email?: true
    address?: true
    city?: true
    region?: true
    country?: true
    postal_code?: true
    phone_number?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplier to aggregate.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type supplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput
    orderBy?: supplierOrderByWithAggregationInput | supplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: supplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    supplier_id: number
    name: string
    email: string
    address: string
    city: string
    region: string
    country: string
    postal_code: number
    phone_number: number
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends supplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type supplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supplier_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    region?: boolean
    country?: boolean
    postal_code?: boolean
    phone_number?: boolean
    supplieritem?: boolean | supplier$supplieritemArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supplier_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    region?: boolean
    country?: boolean
    postal_code?: boolean
    phone_number?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supplier_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    region?: boolean
    country?: boolean
    postal_code?: boolean
    phone_number?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type supplierSelectScalar = {
    supplier_id?: boolean
    name?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    region?: boolean
    country?: boolean
    postal_code?: boolean
    phone_number?: boolean
  }

  export type supplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"supplier_id" | "name" | "email" | "address" | "city" | "region" | "country" | "postal_code" | "phone_number", ExtArgs["result"]["supplier"]>
  export type supplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplieritem?: boolean | supplier$supplieritemArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type supplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type supplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $supplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplier"
    objects: {
      supplieritem: Prisma.$supplieritemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      supplier_id: number
      name: string
      email: string
      address: string
      city: string
      region: string
      country: string
      postal_code: number
      phone_number: number
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type supplierGetPayload<S extends boolean | null | undefined | supplierDefaultArgs> = $Result.GetResult<Prisma.$supplierPayload, S>

  type supplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface supplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplier'], meta: { name: 'supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {supplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supplierFindUniqueArgs>(args: SelectSubset<T, supplierFindUniqueArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supplierFindUniqueOrThrowArgs>(args: SelectSubset<T, supplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supplierFindFirstArgs>(args?: SelectSubset<T, supplierFindFirstArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supplierFindFirstOrThrowArgs>(args?: SelectSubset<T, supplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `supplier_id`
     * const supplierWithSupplier_idOnly = await prisma.supplier.findMany({ select: { supplier_id: true } })
     * 
     */
    findMany<T extends supplierFindManyArgs>(args?: SelectSubset<T, supplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {supplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends supplierCreateArgs>(args: SelectSubset<T, supplierCreateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {supplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supplierCreateManyArgs>(args?: SelectSubset<T, supplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {supplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `supplier_id`
     * const supplierWithSupplier_idOnly = await prisma.supplier.createManyAndReturn({
     *   select: { supplier_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supplierCreateManyAndReturnArgs>(args?: SelectSubset<T, supplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {supplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends supplierDeleteArgs>(args: SelectSubset<T, supplierDeleteArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {supplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supplierUpdateArgs>(args: SelectSubset<T, supplierUpdateArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {supplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supplierDeleteManyArgs>(args?: SelectSubset<T, supplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supplierUpdateManyArgs>(args: SelectSubset<T, supplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {supplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `supplier_id`
     * const supplierWithSupplier_idOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { supplier_id: true },
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
    updateManyAndReturn<T extends supplierUpdateManyAndReturnArgs>(args: SelectSubset<T, supplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {supplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends supplierUpsertArgs>(args: SelectSubset<T, supplierUpsertArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends supplierCountArgs>(
      args?: Subset<T, supplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierGroupByArgs} args - Group by arguments.
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
      T extends supplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplierGroupByArgs['orderBy'] }
        : { orderBy?: supplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, supplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplier model
   */
  readonly fields: supplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplieritem<T extends supplier$supplieritemArgs<ExtArgs> = {}>(args?: Subset<T, supplier$supplieritemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the supplier model
   */
  interface supplierFieldRefs {
    readonly supplier_id: FieldRef<"supplier", 'Int'>
    readonly name: FieldRef<"supplier", 'String'>
    readonly email: FieldRef<"supplier", 'String'>
    readonly address: FieldRef<"supplier", 'String'>
    readonly city: FieldRef<"supplier", 'String'>
    readonly region: FieldRef<"supplier", 'String'>
    readonly country: FieldRef<"supplier", 'String'>
    readonly postal_code: FieldRef<"supplier", 'Int'>
    readonly phone_number: FieldRef<"supplier", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * supplier findUnique
   */
  export type supplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findUniqueOrThrow
   */
  export type supplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier findFirst
   */
  export type supplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findFirstOrThrow
   */
  export type supplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier findMany
   */
  export type supplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: supplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: supplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * supplier create
   */
  export type supplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The data needed to create a supplier.
     */
    data: XOR<supplierCreateInput, supplierUncheckedCreateInput>
  }

  /**
   * supplier createMany
   */
  export type supplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier createManyAndReturn
   */
  export type supplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplier update
   */
  export type supplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The data needed to update a supplier.
     */
    data: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
    /**
     * Choose, which supplier to update.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier updateMany
   */
  export type supplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier updateManyAndReturn
   */
  export type supplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * supplier upsert
   */
  export type supplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * The filter to search for the supplier to update in case it exists.
     */
    where: supplierWhereUniqueInput
    /**
     * In case the supplier found by the `where` argument doesn't exist, create a new supplier with this data.
     */
    create: XOR<supplierCreateInput, supplierUncheckedCreateInput>
    /**
     * In case the supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>
  }

  /**
   * supplier delete
   */
  export type supplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
    /**
     * Filter which supplier to delete.
     */
    where: supplierWhereUniqueInput
  }

  /**
   * supplier deleteMany
   */
  export type supplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: supplierWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * supplier.supplieritem
   */
  export type supplier$supplieritemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    where?: supplieritemWhereInput
    orderBy?: supplieritemOrderByWithRelationInput | supplieritemOrderByWithRelationInput[]
    cursor?: supplieritemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplieritemScalarFieldEnum | SupplieritemScalarFieldEnum[]
  }

  /**
   * supplier without action
   */
  export type supplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplier
     */
    omit?: supplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplierInclude<ExtArgs> | null
  }


  /**
   * Model supplieritem
   */

  export type AggregateSupplieritem = {
    _count: SupplieritemCountAggregateOutputType | null
    _avg: SupplieritemAvgAggregateOutputType | null
    _sum: SupplieritemSumAggregateOutputType | null
    _min: SupplieritemMinAggregateOutputType | null
    _max: SupplieritemMaxAggregateOutputType | null
  }

  export type SupplieritemAvgAggregateOutputType = {
    id: number | null
    supplier_id: number | null
    item_id: number | null
  }

  export type SupplieritemSumAggregateOutputType = {
    id: number | null
    supplier_id: number | null
    item_id: number | null
  }

  export type SupplieritemMinAggregateOutputType = {
    id: number | null
    supplier_id: number | null
    item_id: number | null
  }

  export type SupplieritemMaxAggregateOutputType = {
    id: number | null
    supplier_id: number | null
    item_id: number | null
  }

  export type SupplieritemCountAggregateOutputType = {
    id: number
    supplier_id: number
    item_id: number
    _all: number
  }


  export type SupplieritemAvgAggregateInputType = {
    id?: true
    supplier_id?: true
    item_id?: true
  }

  export type SupplieritemSumAggregateInputType = {
    id?: true
    supplier_id?: true
    item_id?: true
  }

  export type SupplieritemMinAggregateInputType = {
    id?: true
    supplier_id?: true
    item_id?: true
  }

  export type SupplieritemMaxAggregateInputType = {
    id?: true
    supplier_id?: true
    item_id?: true
  }

  export type SupplieritemCountAggregateInputType = {
    id?: true
    supplier_id?: true
    item_id?: true
    _all?: true
  }

  export type SupplieritemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplieritem to aggregate.
     */
    where?: supplieritemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supplieritems to fetch.
     */
    orderBy?: supplieritemOrderByWithRelationInput | supplieritemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplieritemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supplieritems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supplieritems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned supplieritems
    **/
    _count?: true | SupplieritemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplieritemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplieritemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplieritemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplieritemMaxAggregateInputType
  }

  export type GetSupplieritemAggregateType<T extends SupplieritemAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplieritem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplieritem[P]>
      : GetScalarType<T[P], AggregateSupplieritem[P]>
  }




  export type supplieritemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplieritemWhereInput
    orderBy?: supplieritemOrderByWithAggregationInput | supplieritemOrderByWithAggregationInput[]
    by: SupplieritemScalarFieldEnum[] | SupplieritemScalarFieldEnum
    having?: supplieritemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplieritemCountAggregateInputType | true
    _avg?: SupplieritemAvgAggregateInputType
    _sum?: SupplieritemSumAggregateInputType
    _min?: SupplieritemMinAggregateInputType
    _max?: SupplieritemMaxAggregateInputType
  }

  export type SupplieritemGroupByOutputType = {
    id: number
    supplier_id: number
    item_id: number
    _count: SupplieritemCountAggregateOutputType | null
    _avg: SupplieritemAvgAggregateOutputType | null
    _sum: SupplieritemSumAggregateOutputType | null
    _min: SupplieritemMinAggregateOutputType | null
    _max: SupplieritemMaxAggregateOutputType | null
  }

  type GetSupplieritemGroupByPayload<T extends supplieritemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplieritemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplieritemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplieritemGroupByOutputType[P]>
            : GetScalarType<T[P], SupplieritemGroupByOutputType[P]>
        }
      >
    >


  export type supplieritemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplier_id?: boolean
    item_id?: boolean
    item?: boolean | itemDefaultArgs<ExtArgs>
    supplier?: boolean | supplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplieritem"]>

  export type supplieritemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplier_id?: boolean
    item_id?: boolean
    item?: boolean | itemDefaultArgs<ExtArgs>
    supplier?: boolean | supplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplieritem"]>

  export type supplieritemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplier_id?: boolean
    item_id?: boolean
    item?: boolean | itemDefaultArgs<ExtArgs>
    supplier?: boolean | supplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplieritem"]>

  export type supplieritemSelectScalar = {
    id?: boolean
    supplier_id?: boolean
    item_id?: boolean
  }

  export type supplieritemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplier_id" | "item_id", ExtArgs["result"]["supplieritem"]>
  export type supplieritemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | itemDefaultArgs<ExtArgs>
    supplier?: boolean | supplierDefaultArgs<ExtArgs>
  }
  export type supplieritemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | itemDefaultArgs<ExtArgs>
    supplier?: boolean | supplierDefaultArgs<ExtArgs>
  }
  export type supplieritemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | itemDefaultArgs<ExtArgs>
    supplier?: boolean | supplierDefaultArgs<ExtArgs>
  }

  export type $supplieritemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplieritem"
    objects: {
      item: Prisma.$itemPayload<ExtArgs>
      supplier: Prisma.$supplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supplier_id: number
      item_id: number
    }, ExtArgs["result"]["supplieritem"]>
    composites: {}
  }

  type supplieritemGetPayload<S extends boolean | null | undefined | supplieritemDefaultArgs> = $Result.GetResult<Prisma.$supplieritemPayload, S>

  type supplieritemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supplieritemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplieritemCountAggregateInputType | true
    }

  export interface supplieritemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplieritem'], meta: { name: 'supplieritem' } }
    /**
     * Find zero or one Supplieritem that matches the filter.
     * @param {supplieritemFindUniqueArgs} args - Arguments to find a Supplieritem
     * @example
     * // Get one Supplieritem
     * const supplieritem = await prisma.supplieritem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supplieritemFindUniqueArgs>(args: SelectSubset<T, supplieritemFindUniqueArgs<ExtArgs>>): Prisma__supplieritemClient<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplieritem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supplieritemFindUniqueOrThrowArgs} args - Arguments to find a Supplieritem
     * @example
     * // Get one Supplieritem
     * const supplieritem = await prisma.supplieritem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supplieritemFindUniqueOrThrowArgs>(args: SelectSubset<T, supplieritemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supplieritemClient<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplieritem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplieritemFindFirstArgs} args - Arguments to find a Supplieritem
     * @example
     * // Get one Supplieritem
     * const supplieritem = await prisma.supplieritem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supplieritemFindFirstArgs>(args?: SelectSubset<T, supplieritemFindFirstArgs<ExtArgs>>): Prisma__supplieritemClient<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplieritem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplieritemFindFirstOrThrowArgs} args - Arguments to find a Supplieritem
     * @example
     * // Get one Supplieritem
     * const supplieritem = await prisma.supplieritem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supplieritemFindFirstOrThrowArgs>(args?: SelectSubset<T, supplieritemFindFirstOrThrowArgs<ExtArgs>>): Prisma__supplieritemClient<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supplieritems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplieritemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supplieritems
     * const supplieritems = await prisma.supplieritem.findMany()
     * 
     * // Get first 10 Supplieritems
     * const supplieritems = await prisma.supplieritem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplieritemWithIdOnly = await prisma.supplieritem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends supplieritemFindManyArgs>(args?: SelectSubset<T, supplieritemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplieritem.
     * @param {supplieritemCreateArgs} args - Arguments to create a Supplieritem.
     * @example
     * // Create one Supplieritem
     * const Supplieritem = await prisma.supplieritem.create({
     *   data: {
     *     // ... data to create a Supplieritem
     *   }
     * })
     * 
     */
    create<T extends supplieritemCreateArgs>(args: SelectSubset<T, supplieritemCreateArgs<ExtArgs>>): Prisma__supplieritemClient<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supplieritems.
     * @param {supplieritemCreateManyArgs} args - Arguments to create many Supplieritems.
     * @example
     * // Create many Supplieritems
     * const supplieritem = await prisma.supplieritem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supplieritemCreateManyArgs>(args?: SelectSubset<T, supplieritemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supplieritems and returns the data saved in the database.
     * @param {supplieritemCreateManyAndReturnArgs} args - Arguments to create many Supplieritems.
     * @example
     * // Create many Supplieritems
     * const supplieritem = await prisma.supplieritem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supplieritems and only return the `id`
     * const supplieritemWithIdOnly = await prisma.supplieritem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supplieritemCreateManyAndReturnArgs>(args?: SelectSubset<T, supplieritemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplieritem.
     * @param {supplieritemDeleteArgs} args - Arguments to delete one Supplieritem.
     * @example
     * // Delete one Supplieritem
     * const Supplieritem = await prisma.supplieritem.delete({
     *   where: {
     *     // ... filter to delete one Supplieritem
     *   }
     * })
     * 
     */
    delete<T extends supplieritemDeleteArgs>(args: SelectSubset<T, supplieritemDeleteArgs<ExtArgs>>): Prisma__supplieritemClient<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplieritem.
     * @param {supplieritemUpdateArgs} args - Arguments to update one Supplieritem.
     * @example
     * // Update one Supplieritem
     * const supplieritem = await prisma.supplieritem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supplieritemUpdateArgs>(args: SelectSubset<T, supplieritemUpdateArgs<ExtArgs>>): Prisma__supplieritemClient<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supplieritems.
     * @param {supplieritemDeleteManyArgs} args - Arguments to filter Supplieritems to delete.
     * @example
     * // Delete a few Supplieritems
     * const { count } = await prisma.supplieritem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supplieritemDeleteManyArgs>(args?: SelectSubset<T, supplieritemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supplieritems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplieritemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supplieritems
     * const supplieritem = await prisma.supplieritem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supplieritemUpdateManyArgs>(args: SelectSubset<T, supplieritemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supplieritems and returns the data updated in the database.
     * @param {supplieritemUpdateManyAndReturnArgs} args - Arguments to update many Supplieritems.
     * @example
     * // Update many Supplieritems
     * const supplieritem = await prisma.supplieritem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supplieritems and only return the `id`
     * const supplieritemWithIdOnly = await prisma.supplieritem.updateManyAndReturn({
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
    updateManyAndReturn<T extends supplieritemUpdateManyAndReturnArgs>(args: SelectSubset<T, supplieritemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplieritem.
     * @param {supplieritemUpsertArgs} args - Arguments to update or create a Supplieritem.
     * @example
     * // Update or create a Supplieritem
     * const supplieritem = await prisma.supplieritem.upsert({
     *   create: {
     *     // ... data to create a Supplieritem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplieritem we want to update
     *   }
     * })
     */
    upsert<T extends supplieritemUpsertArgs>(args: SelectSubset<T, supplieritemUpsertArgs<ExtArgs>>): Prisma__supplieritemClient<$Result.GetResult<Prisma.$supplieritemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supplieritems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplieritemCountArgs} args - Arguments to filter Supplieritems to count.
     * @example
     * // Count the number of Supplieritems
     * const count = await prisma.supplieritem.count({
     *   where: {
     *     // ... the filter for the Supplieritems we want to count
     *   }
     * })
    **/
    count<T extends supplieritemCountArgs>(
      args?: Subset<T, supplieritemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplieritemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplieritem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplieritemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplieritemAggregateArgs>(args: Subset<T, SupplieritemAggregateArgs>): Prisma.PrismaPromise<GetSupplieritemAggregateType<T>>

    /**
     * Group by Supplieritem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplieritemGroupByArgs} args - Group by arguments.
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
      T extends supplieritemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplieritemGroupByArgs['orderBy'] }
        : { orderBy?: supplieritemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, supplieritemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplieritemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplieritem model
   */
  readonly fields: supplieritemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplieritem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplieritemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends itemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemDefaultArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends supplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, supplierDefaultArgs<ExtArgs>>): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the supplieritem model
   */
  interface supplieritemFieldRefs {
    readonly id: FieldRef<"supplieritem", 'Int'>
    readonly supplier_id: FieldRef<"supplieritem", 'Int'>
    readonly item_id: FieldRef<"supplieritem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * supplieritem findUnique
   */
  export type supplieritemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * Filter, which supplieritem to fetch.
     */
    where: supplieritemWhereUniqueInput
  }

  /**
   * supplieritem findUniqueOrThrow
   */
  export type supplieritemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * Filter, which supplieritem to fetch.
     */
    where: supplieritemWhereUniqueInput
  }

  /**
   * supplieritem findFirst
   */
  export type supplieritemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * Filter, which supplieritem to fetch.
     */
    where?: supplieritemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supplieritems to fetch.
     */
    orderBy?: supplieritemOrderByWithRelationInput | supplieritemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supplieritems.
     */
    cursor?: supplieritemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supplieritems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supplieritems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supplieritems.
     */
    distinct?: SupplieritemScalarFieldEnum | SupplieritemScalarFieldEnum[]
  }

  /**
   * supplieritem findFirstOrThrow
   */
  export type supplieritemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * Filter, which supplieritem to fetch.
     */
    where?: supplieritemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supplieritems to fetch.
     */
    orderBy?: supplieritemOrderByWithRelationInput | supplieritemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supplieritems.
     */
    cursor?: supplieritemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supplieritems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supplieritems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supplieritems.
     */
    distinct?: SupplieritemScalarFieldEnum | SupplieritemScalarFieldEnum[]
  }

  /**
   * supplieritem findMany
   */
  export type supplieritemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * Filter, which supplieritems to fetch.
     */
    where?: supplieritemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supplieritems to fetch.
     */
    orderBy?: supplieritemOrderByWithRelationInput | supplieritemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing supplieritems.
     */
    cursor?: supplieritemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supplieritems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supplieritems.
     */
    skip?: number
    distinct?: SupplieritemScalarFieldEnum | SupplieritemScalarFieldEnum[]
  }

  /**
   * supplieritem create
   */
  export type supplieritemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * The data needed to create a supplieritem.
     */
    data: XOR<supplieritemCreateInput, supplieritemUncheckedCreateInput>
  }

  /**
   * supplieritem createMany
   */
  export type supplieritemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many supplieritems.
     */
    data: supplieritemCreateManyInput | supplieritemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplieritem createManyAndReturn
   */
  export type supplieritemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * The data used to create many supplieritems.
     */
    data: supplieritemCreateManyInput | supplieritemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * supplieritem update
   */
  export type supplieritemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * The data needed to update a supplieritem.
     */
    data: XOR<supplieritemUpdateInput, supplieritemUncheckedUpdateInput>
    /**
     * Choose, which supplieritem to update.
     */
    where: supplieritemWhereUniqueInput
  }

  /**
   * supplieritem updateMany
   */
  export type supplieritemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update supplieritems.
     */
    data: XOR<supplieritemUpdateManyMutationInput, supplieritemUncheckedUpdateManyInput>
    /**
     * Filter which supplieritems to update
     */
    where?: supplieritemWhereInput
    /**
     * Limit how many supplieritems to update.
     */
    limit?: number
  }

  /**
   * supplieritem updateManyAndReturn
   */
  export type supplieritemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * The data used to update supplieritems.
     */
    data: XOR<supplieritemUpdateManyMutationInput, supplieritemUncheckedUpdateManyInput>
    /**
     * Filter which supplieritems to update
     */
    where?: supplieritemWhereInput
    /**
     * Limit how many supplieritems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * supplieritem upsert
   */
  export type supplieritemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * The filter to search for the supplieritem to update in case it exists.
     */
    where: supplieritemWhereUniqueInput
    /**
     * In case the supplieritem found by the `where` argument doesn't exist, create a new supplieritem with this data.
     */
    create: XOR<supplieritemCreateInput, supplieritemUncheckedCreateInput>
    /**
     * In case the supplieritem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplieritemUpdateInput, supplieritemUncheckedUpdateInput>
  }

  /**
   * supplieritem delete
   */
  export type supplieritemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
    /**
     * Filter which supplieritem to delete.
     */
    where: supplieritemWhereUniqueInput
  }

  /**
   * supplieritem deleteMany
   */
  export type supplieritemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplieritems to delete
     */
    where?: supplieritemWhereInput
    /**
     * Limit how many supplieritems to delete.
     */
    limit?: number
  }

  /**
   * supplieritem without action
   */
  export type supplieritemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplieritem
     */
    select?: supplieritemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supplieritem
     */
    omit?: supplieritemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplieritemInclude<ExtArgs> | null
  }


  /**
   * Model userprofile
   */

  export type AggregateUserprofile = {
    _count: UserprofileCountAggregateOutputType | null
    _avg: UserprofileAvgAggregateOutputType | null
    _sum: UserprofileSumAggregateOutputType | null
    _min: UserprofileMinAggregateOutputType | null
    _max: UserprofileMaxAggregateOutputType | null
  }

  export type UserprofileAvgAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    client_id: number | null
    phone_number: number | null
    passport: number | null
  }

  export type UserprofileSumAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    client_id: number | null
    phone_number: number | null
    passport: number | null
  }

  export type UserprofileMinAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    client_id: number | null
    login: string | null
    password: string | null
    image_path: string | null
    full_name: string | null
    email: string | null
    phone_number: number | null
    passport: number | null
  }

  export type UserprofileMaxAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    client_id: number | null
    login: string | null
    password: string | null
    image_path: string | null
    full_name: string | null
    email: string | null
    phone_number: number | null
    passport: number | null
  }

  export type UserprofileCountAggregateOutputType = {
    user_id: number
    role_id: number
    client_id: number
    login: number
    password: number
    image_path: number
    full_name: number
    email: number
    phone_number: number
    passport: number
    _all: number
  }


  export type UserprofileAvgAggregateInputType = {
    user_id?: true
    role_id?: true
    client_id?: true
    phone_number?: true
    passport?: true
  }

  export type UserprofileSumAggregateInputType = {
    user_id?: true
    role_id?: true
    client_id?: true
    phone_number?: true
    passport?: true
  }

  export type UserprofileMinAggregateInputType = {
    user_id?: true
    role_id?: true
    client_id?: true
    login?: true
    password?: true
    image_path?: true
    full_name?: true
    email?: true
    phone_number?: true
    passport?: true
  }

  export type UserprofileMaxAggregateInputType = {
    user_id?: true
    role_id?: true
    client_id?: true
    login?: true
    password?: true
    image_path?: true
    full_name?: true
    email?: true
    phone_number?: true
    passport?: true
  }

  export type UserprofileCountAggregateInputType = {
    user_id?: true
    role_id?: true
    client_id?: true
    login?: true
    password?: true
    image_path?: true
    full_name?: true
    email?: true
    phone_number?: true
    passport?: true
    _all?: true
  }

  export type UserprofileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userprofile to aggregate.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userprofiles
    **/
    _count?: true | UserprofileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserprofileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserprofileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserprofileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserprofileMaxAggregateInputType
  }

  export type GetUserprofileAggregateType<T extends UserprofileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserprofile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserprofile[P]>
      : GetScalarType<T[P], AggregateUserprofile[P]>
  }




  export type userprofileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userprofileWhereInput
    orderBy?: userprofileOrderByWithAggregationInput | userprofileOrderByWithAggregationInput[]
    by: UserprofileScalarFieldEnum[] | UserprofileScalarFieldEnum
    having?: userprofileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserprofileCountAggregateInputType | true
    _avg?: UserprofileAvgAggregateInputType
    _sum?: UserprofileSumAggregateInputType
    _min?: UserprofileMinAggregateInputType
    _max?: UserprofileMaxAggregateInputType
  }

  export type UserprofileGroupByOutputType = {
    user_id: number
    role_id: number
    client_id: number | null
    login: string
    password: string
    image_path: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
    _count: UserprofileCountAggregateOutputType | null
    _avg: UserprofileAvgAggregateOutputType | null
    _sum: UserprofileSumAggregateOutputType | null
    _min: UserprofileMinAggregateOutputType | null
    _max: UserprofileMaxAggregateOutputType | null
  }

  type GetUserprofileGroupByPayload<T extends userprofileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserprofileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserprofileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserprofileGroupByOutputType[P]>
            : GetScalarType<T[P], UserprofileGroupByOutputType[P]>
        }
      >
    >


  export type userprofileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    client_id?: boolean
    login?: boolean
    password?: boolean
    image_path?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    passport?: boolean
    client?: boolean | userprofile$clientArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userprofile"]>

  export type userprofileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    client_id?: boolean
    login?: boolean
    password?: boolean
    image_path?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    passport?: boolean
    client?: boolean | userprofile$clientArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userprofile"]>

  export type userprofileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    client_id?: boolean
    login?: boolean
    password?: boolean
    image_path?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    passport?: boolean
    client?: boolean | userprofile$clientArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userprofile"]>

  export type userprofileSelectScalar = {
    user_id?: boolean
    role_id?: boolean
    client_id?: boolean
    login?: boolean
    password?: boolean
    image_path?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    passport?: boolean
  }

  export type userprofileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "role_id" | "client_id" | "login" | "password" | "image_path" | "full_name" | "email" | "phone_number" | "passport", ExtArgs["result"]["userprofile"]>
  export type userprofileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | userprofile$clientArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type userprofileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | userprofile$clientArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type userprofileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | userprofile$clientArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $userprofilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userprofile"
    objects: {
      client: Prisma.$clientPayload<ExtArgs> | null
      role: Prisma.$rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      role_id: number
      client_id: number | null
      login: string
      password: string
      image_path: string | null
      full_name: string
      email: string
      phone_number: number
      passport: number
    }, ExtArgs["result"]["userprofile"]>
    composites: {}
  }

  type userprofileGetPayload<S extends boolean | null | undefined | userprofileDefaultArgs> = $Result.GetResult<Prisma.$userprofilePayload, S>

  type userprofileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userprofileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserprofileCountAggregateInputType | true
    }

  export interface userprofileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userprofile'], meta: { name: 'userprofile' } }
    /**
     * Find zero or one Userprofile that matches the filter.
     * @param {userprofileFindUniqueArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userprofileFindUniqueArgs>(args: SelectSubset<T, userprofileFindUniqueArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Userprofile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userprofileFindUniqueOrThrowArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userprofileFindUniqueOrThrowArgs>(args: SelectSubset<T, userprofileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userprofile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindFirstArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userprofileFindFirstArgs>(args?: SelectSubset<T, userprofileFindFirstArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userprofile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindFirstOrThrowArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userprofileFindFirstOrThrowArgs>(args?: SelectSubset<T, userprofileFindFirstOrThrowArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Userprofiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userprofiles
     * const userprofiles = await prisma.userprofile.findMany()
     * 
     * // Get first 10 Userprofiles
     * const userprofiles = await prisma.userprofile.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userprofileWithUser_idOnly = await prisma.userprofile.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userprofileFindManyArgs>(args?: SelectSubset<T, userprofileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Userprofile.
     * @param {userprofileCreateArgs} args - Arguments to create a Userprofile.
     * @example
     * // Create one Userprofile
     * const Userprofile = await prisma.userprofile.create({
     *   data: {
     *     // ... data to create a Userprofile
     *   }
     * })
     * 
     */
    create<T extends userprofileCreateArgs>(args: SelectSubset<T, userprofileCreateArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Userprofiles.
     * @param {userprofileCreateManyArgs} args - Arguments to create many Userprofiles.
     * @example
     * // Create many Userprofiles
     * const userprofile = await prisma.userprofile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userprofileCreateManyArgs>(args?: SelectSubset<T, userprofileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Userprofiles and returns the data saved in the database.
     * @param {userprofileCreateManyAndReturnArgs} args - Arguments to create many Userprofiles.
     * @example
     * // Create many Userprofiles
     * const userprofile = await prisma.userprofile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Userprofiles and only return the `user_id`
     * const userprofileWithUser_idOnly = await prisma.userprofile.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userprofileCreateManyAndReturnArgs>(args?: SelectSubset<T, userprofileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Userprofile.
     * @param {userprofileDeleteArgs} args - Arguments to delete one Userprofile.
     * @example
     * // Delete one Userprofile
     * const Userprofile = await prisma.userprofile.delete({
     *   where: {
     *     // ... filter to delete one Userprofile
     *   }
     * })
     * 
     */
    delete<T extends userprofileDeleteArgs>(args: SelectSubset<T, userprofileDeleteArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Userprofile.
     * @param {userprofileUpdateArgs} args - Arguments to update one Userprofile.
     * @example
     * // Update one Userprofile
     * const userprofile = await prisma.userprofile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userprofileUpdateArgs>(args: SelectSubset<T, userprofileUpdateArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Userprofiles.
     * @param {userprofileDeleteManyArgs} args - Arguments to filter Userprofiles to delete.
     * @example
     * // Delete a few Userprofiles
     * const { count } = await prisma.userprofile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userprofileDeleteManyArgs>(args?: SelectSubset<T, userprofileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userprofiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userprofiles
     * const userprofile = await prisma.userprofile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userprofileUpdateManyArgs>(args: SelectSubset<T, userprofileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userprofiles and returns the data updated in the database.
     * @param {userprofileUpdateManyAndReturnArgs} args - Arguments to update many Userprofiles.
     * @example
     * // Update many Userprofiles
     * const userprofile = await prisma.userprofile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Userprofiles and only return the `user_id`
     * const userprofileWithUser_idOnly = await prisma.userprofile.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends userprofileUpdateManyAndReturnArgs>(args: SelectSubset<T, userprofileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Userprofile.
     * @param {userprofileUpsertArgs} args - Arguments to update or create a Userprofile.
     * @example
     * // Update or create a Userprofile
     * const userprofile = await prisma.userprofile.upsert({
     *   create: {
     *     // ... data to create a Userprofile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userprofile we want to update
     *   }
     * })
     */
    upsert<T extends userprofileUpsertArgs>(args: SelectSubset<T, userprofileUpsertArgs<ExtArgs>>): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Userprofiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileCountArgs} args - Arguments to filter Userprofiles to count.
     * @example
     * // Count the number of Userprofiles
     * const count = await prisma.userprofile.count({
     *   where: {
     *     // ... the filter for the Userprofiles we want to count
     *   }
     * })
    **/
    count<T extends userprofileCountArgs>(
      args?: Subset<T, userprofileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserprofileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userprofile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserprofileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserprofileAggregateArgs>(args: Subset<T, UserprofileAggregateArgs>): Prisma.PrismaPromise<GetUserprofileAggregateType<T>>

    /**
     * Group by Userprofile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileGroupByArgs} args - Group by arguments.
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
      T extends userprofileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userprofileGroupByArgs['orderBy'] }
        : { orderBy?: userprofileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userprofileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserprofileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userprofile model
   */
  readonly fields: userprofileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userprofile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userprofileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends userprofile$clientArgs<ExtArgs> = {}>(args?: Subset<T, userprofile$clientArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the userprofile model
   */
  interface userprofileFieldRefs {
    readonly user_id: FieldRef<"userprofile", 'Int'>
    readonly role_id: FieldRef<"userprofile", 'Int'>
    readonly client_id: FieldRef<"userprofile", 'Int'>
    readonly login: FieldRef<"userprofile", 'String'>
    readonly password: FieldRef<"userprofile", 'String'>
    readonly image_path: FieldRef<"userprofile", 'String'>
    readonly full_name: FieldRef<"userprofile", 'String'>
    readonly email: FieldRef<"userprofile", 'String'>
    readonly phone_number: FieldRef<"userprofile", 'Int'>
    readonly passport: FieldRef<"userprofile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * userprofile findUnique
   */
  export type userprofileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile findUniqueOrThrow
   */
  export type userprofileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile findFirst
   */
  export type userprofileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userprofiles.
     */
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile findFirstOrThrow
   */
  export type userprofileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userprofiles.
     */
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile findMany
   */
  export type userprofileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofiles to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile create
   */
  export type userprofileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data needed to create a userprofile.
     */
    data: XOR<userprofileCreateInput, userprofileUncheckedCreateInput>
  }

  /**
   * userprofile createMany
   */
  export type userprofileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userprofiles.
     */
    data: userprofileCreateManyInput | userprofileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userprofile createManyAndReturn
   */
  export type userprofileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * The data used to create many userprofiles.
     */
    data: userprofileCreateManyInput | userprofileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userprofile update
   */
  export type userprofileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data needed to update a userprofile.
     */
    data: XOR<userprofileUpdateInput, userprofileUncheckedUpdateInput>
    /**
     * Choose, which userprofile to update.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile updateMany
   */
  export type userprofileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userprofiles.
     */
    data: XOR<userprofileUpdateManyMutationInput, userprofileUncheckedUpdateManyInput>
    /**
     * Filter which userprofiles to update
     */
    where?: userprofileWhereInput
    /**
     * Limit how many userprofiles to update.
     */
    limit?: number
  }

  /**
   * userprofile updateManyAndReturn
   */
  export type userprofileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * The data used to update userprofiles.
     */
    data: XOR<userprofileUpdateManyMutationInput, userprofileUncheckedUpdateManyInput>
    /**
     * Filter which userprofiles to update
     */
    where?: userprofileWhereInput
    /**
     * Limit how many userprofiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * userprofile upsert
   */
  export type userprofileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The filter to search for the userprofile to update in case it exists.
     */
    where: userprofileWhereUniqueInput
    /**
     * In case the userprofile found by the `where` argument doesn't exist, create a new userprofile with this data.
     */
    create: XOR<userprofileCreateInput, userprofileUncheckedCreateInput>
    /**
     * In case the userprofile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userprofileUpdateInput, userprofileUncheckedUpdateInput>
  }

  /**
   * userprofile delete
   */
  export type userprofileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter which userprofile to delete.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile deleteMany
   */
  export type userprofileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userprofiles to delete
     */
    where?: userprofileWhereInput
    /**
     * Limit how many userprofiles to delete.
     */
    limit?: number
  }

  /**
   * userprofile.client
   */
  export type userprofile$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the client
     */
    omit?: clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    where?: clientWhereInput
  }

  /**
   * userprofile without action
   */
  export type userprofileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userprofile
     */
    omit?: userprofileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    parent_id: 'parent_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    client_id: 'client_id',
    name: 'name',
    phone_number: 'phone_number',
    address: 'address',
    email: 'email',
    city: 'city',
    region: 'region',
    country: 'country',
    postal_code: 'postal_code'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ClientorderScalarFieldEnum: {
    order_id: 'order_id',
    client_id: 'client_id',
    status: 'status',
    timestamp: 'timestamp',
    total_items: 'total_items',
    total_amount: 'total_amount'
  };

  export type ClientorderScalarFieldEnum = (typeof ClientorderScalarFieldEnum)[keyof typeof ClientorderScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    item_id: 'item_id',
    category_id: 'category_id',
    model: 'model',
    image_path: 'image_path',
    status: 'status',
    manufacturer: 'manufacturer',
    unit_price: 'unit_price',
    date_of_arrival: 'date_of_arrival',
    units_in_stock: 'units_in_stock',
    faulty_units: 'faulty_units'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const OrderproductScalarFieldEnum: {
    order_product_id: 'order_product_id',
    order_id: 'order_id',
    item_id: 'item_id',
    quantity: 'quantity',
    returned_units: 'returned_units'
  };

  export type OrderproductScalarFieldEnum = (typeof OrderproductScalarFieldEnum)[keyof typeof OrderproductScalarFieldEnum]


  export const OrderreturnScalarFieldEnum: {
    order_return_id: 'order_return_id',
    order_product_id: 'order_product_id',
    quantity: 'quantity',
    reason: 'reason',
    description: 'description',
    status: 'status',
    return_date: 'return_date'
  };

  export type OrderreturnScalarFieldEnum = (typeof OrderreturnScalarFieldEnum)[keyof typeof OrderreturnScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    role_id: 'role_id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    supplier_id: 'supplier_id',
    name: 'name',
    email: 'email',
    address: 'address',
    city: 'city',
    region: 'region',
    country: 'country',
    postal_code: 'postal_code',
    phone_number: 'phone_number'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const SupplieritemScalarFieldEnum: {
    id: 'id',
    supplier_id: 'supplier_id',
    item_id: 'item_id'
  };

  export type SupplieritemScalarFieldEnum = (typeof SupplieritemScalarFieldEnum)[keyof typeof SupplieritemScalarFieldEnum]


  export const UserprofileScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id',
    client_id: 'client_id',
    login: 'login',
    password: 'password',
    image_path: 'image_path',
    full_name: 'full_name',
    email: 'email',
    phone_number: 'phone_number',
    passport: 'passport'
  };

  export type UserprofileScalarFieldEnum = (typeof UserprofileScalarFieldEnum)[keyof typeof UserprofileScalarFieldEnum]


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
   * Reference to a field of type 'order_status'
   */
  export type Enumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status'>
    


  /**
   * Reference to a field of type 'order_status[]'
   */
  export type ListEnumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'item_status'
   */
  export type Enumitem_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'item_status'>
    


  /**
   * Reference to a field of type 'item_status[]'
   */
  export type ListEnumitem_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'item_status[]'>
    


  /**
   * Reference to a field of type 'return_reason'
   */
  export type Enumreturn_reasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'return_reason'>
    


  /**
   * Reference to a field of type 'return_reason[]'
   */
  export type ListEnumreturn_reasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'return_reason[]'>
    


  /**
   * Reference to a field of type 'return_status'
   */
  export type Enumreturn_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'return_status'>
    


  /**
   * Reference to a field of type 'return_status[]'
   */
  export type ListEnumreturn_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'return_status[]'>
    
  /**
   * Deep Input Types
   */


  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    category_id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    description?: StringFilter<"category"> | string
    parent_id?: IntNullableFilter<"category"> | number | null
    item?: ItemListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    item?: itemOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    description?: StringFilter<"category"> | string
    parent_id?: IntNullableFilter<"category"> | number | null
    item?: ItemListRelationFilter
  }, "category_id">

  export type categoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    description?: StringWithAggregatesFilter<"category"> | string
    parent_id?: IntNullableWithAggregatesFilter<"category"> | number | null
  }

  export type clientWhereInput = {
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    client_id?: IntFilter<"client"> | number
    name?: StringFilter<"client"> | string
    phone_number?: IntFilter<"client"> | number
    address?: StringFilter<"client"> | string
    email?: StringFilter<"client"> | string
    city?: StringFilter<"client"> | string
    region?: StringFilter<"client"> | string
    country?: StringFilter<"client"> | string
    postal_code?: IntFilter<"client"> | number
    clientorder?: ClientorderListRelationFilter
    userprofile?: UserprofileListRelationFilter
  }

  export type clientOrderByWithRelationInput = {
    client_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    email?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    clientorder?: clientorderOrderByRelationAggregateInput
    userprofile?: userprofileOrderByRelationAggregateInput
  }

  export type clientWhereUniqueInput = Prisma.AtLeast<{
    client_id?: number
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    name?: StringFilter<"client"> | string
    phone_number?: IntFilter<"client"> | number
    address?: StringFilter<"client"> | string
    email?: StringFilter<"client"> | string
    city?: StringFilter<"client"> | string
    region?: StringFilter<"client"> | string
    country?: StringFilter<"client"> | string
    postal_code?: IntFilter<"client"> | number
    clientorder?: ClientorderListRelationFilter
    userprofile?: UserprofileListRelationFilter
  }, "client_id">

  export type clientOrderByWithAggregationInput = {
    client_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    email?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    _count?: clientCountOrderByAggregateInput
    _avg?: clientAvgOrderByAggregateInput
    _max?: clientMaxOrderByAggregateInput
    _min?: clientMinOrderByAggregateInput
    _sum?: clientSumOrderByAggregateInput
  }

  export type clientScalarWhereWithAggregatesInput = {
    AND?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    OR?: clientScalarWhereWithAggregatesInput[]
    NOT?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    client_id?: IntWithAggregatesFilter<"client"> | number
    name?: StringWithAggregatesFilter<"client"> | string
    phone_number?: IntWithAggregatesFilter<"client"> | number
    address?: StringWithAggregatesFilter<"client"> | string
    email?: StringWithAggregatesFilter<"client"> | string
    city?: StringWithAggregatesFilter<"client"> | string
    region?: StringWithAggregatesFilter<"client"> | string
    country?: StringWithAggregatesFilter<"client"> | string
    postal_code?: IntWithAggregatesFilter<"client"> | number
  }

  export type clientorderWhereInput = {
    AND?: clientorderWhereInput | clientorderWhereInput[]
    OR?: clientorderWhereInput[]
    NOT?: clientorderWhereInput | clientorderWhereInput[]
    order_id?: IntFilter<"clientorder"> | number
    client_id?: IntFilter<"clientorder"> | number
    status?: Enumorder_statusFilter<"clientorder"> | $Enums.order_status
    timestamp?: DateTimeFilter<"clientorder"> | Date | string
    total_items?: IntFilter<"clientorder"> | number
    total_amount?: FloatFilter<"clientorder"> | number
    client?: XOR<ClientScalarRelationFilter, clientWhereInput>
    orderproduct?: OrderproductListRelationFilter
  }

  export type clientorderOrderByWithRelationInput = {
    order_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    total_items?: SortOrder
    total_amount?: SortOrder
    client?: clientOrderByWithRelationInput
    orderproduct?: orderproductOrderByRelationAggregateInput
  }

  export type clientorderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: clientorderWhereInput | clientorderWhereInput[]
    OR?: clientorderWhereInput[]
    NOT?: clientorderWhereInput | clientorderWhereInput[]
    client_id?: IntFilter<"clientorder"> | number
    status?: Enumorder_statusFilter<"clientorder"> | $Enums.order_status
    timestamp?: DateTimeFilter<"clientorder"> | Date | string
    total_items?: IntFilter<"clientorder"> | number
    total_amount?: FloatFilter<"clientorder"> | number
    client?: XOR<ClientScalarRelationFilter, clientWhereInput>
    orderproduct?: OrderproductListRelationFilter
  }, "order_id">

  export type clientorderOrderByWithAggregationInput = {
    order_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    total_items?: SortOrder
    total_amount?: SortOrder
    _count?: clientorderCountOrderByAggregateInput
    _avg?: clientorderAvgOrderByAggregateInput
    _max?: clientorderMaxOrderByAggregateInput
    _min?: clientorderMinOrderByAggregateInput
    _sum?: clientorderSumOrderByAggregateInput
  }

  export type clientorderScalarWhereWithAggregatesInput = {
    AND?: clientorderScalarWhereWithAggregatesInput | clientorderScalarWhereWithAggregatesInput[]
    OR?: clientorderScalarWhereWithAggregatesInput[]
    NOT?: clientorderScalarWhereWithAggregatesInput | clientorderScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"clientorder"> | number
    client_id?: IntWithAggregatesFilter<"clientorder"> | number
    status?: Enumorder_statusWithAggregatesFilter<"clientorder"> | $Enums.order_status
    timestamp?: DateTimeWithAggregatesFilter<"clientorder"> | Date | string
    total_items?: IntWithAggregatesFilter<"clientorder"> | number
    total_amount?: FloatWithAggregatesFilter<"clientorder"> | number
  }

  export type itemWhereInput = {
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    item_id?: IntFilter<"item"> | number
    category_id?: IntFilter<"item"> | number
    model?: StringFilter<"item"> | string
    image_path?: StringNullableFilter<"item"> | string | null
    status?: Enumitem_statusFilter<"item"> | $Enums.item_status
    manufacturer?: StringFilter<"item"> | string
    unit_price?: FloatFilter<"item"> | number
    date_of_arrival?: DateTimeFilter<"item"> | Date | string
    units_in_stock?: IntFilter<"item"> | number
    faulty_units?: IntFilter<"item"> | number
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    orderproduct?: OrderproductListRelationFilter
    supplieritem?: SupplieritemListRelationFilter
  }

  export type itemOrderByWithRelationInput = {
    item_id?: SortOrder
    category_id?: SortOrder
    model?: SortOrder
    image_path?: SortOrderInput | SortOrder
    status?: SortOrder
    manufacturer?: SortOrder
    unit_price?: SortOrder
    date_of_arrival?: SortOrder
    units_in_stock?: SortOrder
    faulty_units?: SortOrder
    category?: categoryOrderByWithRelationInput
    orderproduct?: orderproductOrderByRelationAggregateInput
    supplieritem?: supplieritemOrderByRelationAggregateInput
  }

  export type itemWhereUniqueInput = Prisma.AtLeast<{
    item_id?: number
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    category_id?: IntFilter<"item"> | number
    model?: StringFilter<"item"> | string
    image_path?: StringNullableFilter<"item"> | string | null
    status?: Enumitem_statusFilter<"item"> | $Enums.item_status
    manufacturer?: StringFilter<"item"> | string
    unit_price?: FloatFilter<"item"> | number
    date_of_arrival?: DateTimeFilter<"item"> | Date | string
    units_in_stock?: IntFilter<"item"> | number
    faulty_units?: IntFilter<"item"> | number
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    orderproduct?: OrderproductListRelationFilter
    supplieritem?: SupplieritemListRelationFilter
  }, "item_id">

  export type itemOrderByWithAggregationInput = {
    item_id?: SortOrder
    category_id?: SortOrder
    model?: SortOrder
    image_path?: SortOrderInput | SortOrder
    status?: SortOrder
    manufacturer?: SortOrder
    unit_price?: SortOrder
    date_of_arrival?: SortOrder
    units_in_stock?: SortOrder
    faulty_units?: SortOrder
    _count?: itemCountOrderByAggregateInput
    _avg?: itemAvgOrderByAggregateInput
    _max?: itemMaxOrderByAggregateInput
    _min?: itemMinOrderByAggregateInput
    _sum?: itemSumOrderByAggregateInput
  }

  export type itemScalarWhereWithAggregatesInput = {
    AND?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    OR?: itemScalarWhereWithAggregatesInput[]
    NOT?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    item_id?: IntWithAggregatesFilter<"item"> | number
    category_id?: IntWithAggregatesFilter<"item"> | number
    model?: StringWithAggregatesFilter<"item"> | string
    image_path?: StringNullableWithAggregatesFilter<"item"> | string | null
    status?: Enumitem_statusWithAggregatesFilter<"item"> | $Enums.item_status
    manufacturer?: StringWithAggregatesFilter<"item"> | string
    unit_price?: FloatWithAggregatesFilter<"item"> | number
    date_of_arrival?: DateTimeWithAggregatesFilter<"item"> | Date | string
    units_in_stock?: IntWithAggregatesFilter<"item"> | number
    faulty_units?: IntWithAggregatesFilter<"item"> | number
  }

  export type orderproductWhereInput = {
    AND?: orderproductWhereInput | orderproductWhereInput[]
    OR?: orderproductWhereInput[]
    NOT?: orderproductWhereInput | orderproductWhereInput[]
    order_product_id?: IntFilter<"orderproduct"> | number
    order_id?: IntFilter<"orderproduct"> | number
    item_id?: IntFilter<"orderproduct"> | number
    quantity?: IntFilter<"orderproduct"> | number
    returned_units?: IntFilter<"orderproduct"> | number
    clientorder?: XOR<ClientorderScalarRelationFilter, clientorderWhereInput>
    item?: XOR<ItemScalarRelationFilter, itemWhereInput>
    orderreturn?: OrderreturnListRelationFilter
  }

  export type orderproductOrderByWithRelationInput = {
    order_product_id?: SortOrder
    order_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    returned_units?: SortOrder
    clientorder?: clientorderOrderByWithRelationInput
    item?: itemOrderByWithRelationInput
    orderreturn?: orderreturnOrderByRelationAggregateInput
  }

  export type orderproductWhereUniqueInput = Prisma.AtLeast<{
    order_product_id?: number
    AND?: orderproductWhereInput | orderproductWhereInput[]
    OR?: orderproductWhereInput[]
    NOT?: orderproductWhereInput | orderproductWhereInput[]
    order_id?: IntFilter<"orderproduct"> | number
    item_id?: IntFilter<"orderproduct"> | number
    quantity?: IntFilter<"orderproduct"> | number
    returned_units?: IntFilter<"orderproduct"> | number
    clientorder?: XOR<ClientorderScalarRelationFilter, clientorderWhereInput>
    item?: XOR<ItemScalarRelationFilter, itemWhereInput>
    orderreturn?: OrderreturnListRelationFilter
  }, "order_product_id">

  export type orderproductOrderByWithAggregationInput = {
    order_product_id?: SortOrder
    order_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    returned_units?: SortOrder
    _count?: orderproductCountOrderByAggregateInput
    _avg?: orderproductAvgOrderByAggregateInput
    _max?: orderproductMaxOrderByAggregateInput
    _min?: orderproductMinOrderByAggregateInput
    _sum?: orderproductSumOrderByAggregateInput
  }

  export type orderproductScalarWhereWithAggregatesInput = {
    AND?: orderproductScalarWhereWithAggregatesInput | orderproductScalarWhereWithAggregatesInput[]
    OR?: orderproductScalarWhereWithAggregatesInput[]
    NOT?: orderproductScalarWhereWithAggregatesInput | orderproductScalarWhereWithAggregatesInput[]
    order_product_id?: IntWithAggregatesFilter<"orderproduct"> | number
    order_id?: IntWithAggregatesFilter<"orderproduct"> | number
    item_id?: IntWithAggregatesFilter<"orderproduct"> | number
    quantity?: IntWithAggregatesFilter<"orderproduct"> | number
    returned_units?: IntWithAggregatesFilter<"orderproduct"> | number
  }

  export type orderreturnWhereInput = {
    AND?: orderreturnWhereInput | orderreturnWhereInput[]
    OR?: orderreturnWhereInput[]
    NOT?: orderreturnWhereInput | orderreturnWhereInput[]
    order_return_id?: IntFilter<"orderreturn"> | number
    order_product_id?: IntFilter<"orderreturn"> | number
    quantity?: IntFilter<"orderreturn"> | number
    reason?: Enumreturn_reasonFilter<"orderreturn"> | $Enums.return_reason
    description?: StringFilter<"orderreturn"> | string
    status?: Enumreturn_statusFilter<"orderreturn"> | $Enums.return_status
    return_date?: DateTimeFilter<"orderreturn"> | Date | string
    orderproduct?: XOR<OrderproductScalarRelationFilter, orderproductWhereInput>
  }

  export type orderreturnOrderByWithRelationInput = {
    order_return_id?: SortOrder
    order_product_id?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    return_date?: SortOrder
    orderproduct?: orderproductOrderByWithRelationInput
  }

  export type orderreturnWhereUniqueInput = Prisma.AtLeast<{
    order_return_id?: number
    AND?: orderreturnWhereInput | orderreturnWhereInput[]
    OR?: orderreturnWhereInput[]
    NOT?: orderreturnWhereInput | orderreturnWhereInput[]
    order_product_id?: IntFilter<"orderreturn"> | number
    quantity?: IntFilter<"orderreturn"> | number
    reason?: Enumreturn_reasonFilter<"orderreturn"> | $Enums.return_reason
    description?: StringFilter<"orderreturn"> | string
    status?: Enumreturn_statusFilter<"orderreturn"> | $Enums.return_status
    return_date?: DateTimeFilter<"orderreturn"> | Date | string
    orderproduct?: XOR<OrderproductScalarRelationFilter, orderproductWhereInput>
  }, "order_return_id">

  export type orderreturnOrderByWithAggregationInput = {
    order_return_id?: SortOrder
    order_product_id?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    return_date?: SortOrder
    _count?: orderreturnCountOrderByAggregateInput
    _avg?: orderreturnAvgOrderByAggregateInput
    _max?: orderreturnMaxOrderByAggregateInput
    _min?: orderreturnMinOrderByAggregateInput
    _sum?: orderreturnSumOrderByAggregateInput
  }

  export type orderreturnScalarWhereWithAggregatesInput = {
    AND?: orderreturnScalarWhereWithAggregatesInput | orderreturnScalarWhereWithAggregatesInput[]
    OR?: orderreturnScalarWhereWithAggregatesInput[]
    NOT?: orderreturnScalarWhereWithAggregatesInput | orderreturnScalarWhereWithAggregatesInput[]
    order_return_id?: IntWithAggregatesFilter<"orderreturn"> | number
    order_product_id?: IntWithAggregatesFilter<"orderreturn"> | number
    quantity?: IntWithAggregatesFilter<"orderreturn"> | number
    reason?: Enumreturn_reasonWithAggregatesFilter<"orderreturn"> | $Enums.return_reason
    description?: StringWithAggregatesFilter<"orderreturn"> | string
    status?: Enumreturn_statusWithAggregatesFilter<"orderreturn"> | $Enums.return_status
    return_date?: DateTimeWithAggregatesFilter<"orderreturn"> | Date | string
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    role_id?: IntFilter<"role"> | number
    name?: StringFilter<"role"> | string
    description?: StringFilter<"role"> | string
    userprofile?: UserprofileListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    role_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userprofile?: userprofileOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    name?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    description?: StringFilter<"role"> | string
    userprofile?: UserprofileListRelationFilter
  }, "role_id" | "name">

  export type roleOrderByWithAggregationInput = {
    role_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"role"> | number
    name?: StringWithAggregatesFilter<"role"> | string
    description?: StringWithAggregatesFilter<"role"> | string
  }

  export type supplierWhereInput = {
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    supplier_id?: IntFilter<"supplier"> | number
    name?: StringFilter<"supplier"> | string
    email?: StringFilter<"supplier"> | string
    address?: StringFilter<"supplier"> | string
    city?: StringFilter<"supplier"> | string
    region?: StringFilter<"supplier"> | string
    country?: StringFilter<"supplier"> | string
    postal_code?: IntFilter<"supplier"> | number
    phone_number?: IntFilter<"supplier"> | number
    supplieritem?: SupplieritemListRelationFilter
  }

  export type supplierOrderByWithRelationInput = {
    supplier_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    phone_number?: SortOrder
    supplieritem?: supplieritemOrderByRelationAggregateInput
  }

  export type supplierWhereUniqueInput = Prisma.AtLeast<{
    supplier_id?: number
    AND?: supplierWhereInput | supplierWhereInput[]
    OR?: supplierWhereInput[]
    NOT?: supplierWhereInput | supplierWhereInput[]
    name?: StringFilter<"supplier"> | string
    email?: StringFilter<"supplier"> | string
    address?: StringFilter<"supplier"> | string
    city?: StringFilter<"supplier"> | string
    region?: StringFilter<"supplier"> | string
    country?: StringFilter<"supplier"> | string
    postal_code?: IntFilter<"supplier"> | number
    phone_number?: IntFilter<"supplier"> | number
    supplieritem?: SupplieritemListRelationFilter
  }, "supplier_id">

  export type supplierOrderByWithAggregationInput = {
    supplier_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    phone_number?: SortOrder
    _count?: supplierCountOrderByAggregateInput
    _avg?: supplierAvgOrderByAggregateInput
    _max?: supplierMaxOrderByAggregateInput
    _min?: supplierMinOrderByAggregateInput
    _sum?: supplierSumOrderByAggregateInput
  }

  export type supplierScalarWhereWithAggregatesInput = {
    AND?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    OR?: supplierScalarWhereWithAggregatesInput[]
    NOT?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[]
    supplier_id?: IntWithAggregatesFilter<"supplier"> | number
    name?: StringWithAggregatesFilter<"supplier"> | string
    email?: StringWithAggregatesFilter<"supplier"> | string
    address?: StringWithAggregatesFilter<"supplier"> | string
    city?: StringWithAggregatesFilter<"supplier"> | string
    region?: StringWithAggregatesFilter<"supplier"> | string
    country?: StringWithAggregatesFilter<"supplier"> | string
    postal_code?: IntWithAggregatesFilter<"supplier"> | number
    phone_number?: IntWithAggregatesFilter<"supplier"> | number
  }

  export type supplieritemWhereInput = {
    AND?: supplieritemWhereInput | supplieritemWhereInput[]
    OR?: supplieritemWhereInput[]
    NOT?: supplieritemWhereInput | supplieritemWhereInput[]
    id?: IntFilter<"supplieritem"> | number
    supplier_id?: IntFilter<"supplieritem"> | number
    item_id?: IntFilter<"supplieritem"> | number
    item?: XOR<ItemScalarRelationFilter, itemWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, supplierWhereInput>
  }

  export type supplieritemOrderByWithRelationInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    item_id?: SortOrder
    item?: itemOrderByWithRelationInput
    supplier?: supplierOrderByWithRelationInput
  }

  export type supplieritemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: supplieritemWhereInput | supplieritemWhereInput[]
    OR?: supplieritemWhereInput[]
    NOT?: supplieritemWhereInput | supplieritemWhereInput[]
    supplier_id?: IntFilter<"supplieritem"> | number
    item_id?: IntFilter<"supplieritem"> | number
    item?: XOR<ItemScalarRelationFilter, itemWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, supplierWhereInput>
  }, "id">

  export type supplieritemOrderByWithAggregationInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    item_id?: SortOrder
    _count?: supplieritemCountOrderByAggregateInput
    _avg?: supplieritemAvgOrderByAggregateInput
    _max?: supplieritemMaxOrderByAggregateInput
    _min?: supplieritemMinOrderByAggregateInput
    _sum?: supplieritemSumOrderByAggregateInput
  }

  export type supplieritemScalarWhereWithAggregatesInput = {
    AND?: supplieritemScalarWhereWithAggregatesInput | supplieritemScalarWhereWithAggregatesInput[]
    OR?: supplieritemScalarWhereWithAggregatesInput[]
    NOT?: supplieritemScalarWhereWithAggregatesInput | supplieritemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"supplieritem"> | number
    supplier_id?: IntWithAggregatesFilter<"supplieritem"> | number
    item_id?: IntWithAggregatesFilter<"supplieritem"> | number
  }

  export type userprofileWhereInput = {
    AND?: userprofileWhereInput | userprofileWhereInput[]
    OR?: userprofileWhereInput[]
    NOT?: userprofileWhereInput | userprofileWhereInput[]
    user_id?: IntFilter<"userprofile"> | number
    role_id?: IntFilter<"userprofile"> | number
    client_id?: IntNullableFilter<"userprofile"> | number | null
    login?: StringFilter<"userprofile"> | string
    password?: StringFilter<"userprofile"> | string
    image_path?: StringNullableFilter<"userprofile"> | string | null
    full_name?: StringFilter<"userprofile"> | string
    email?: StringFilter<"userprofile"> | string
    phone_number?: IntFilter<"userprofile"> | number
    passport?: IntFilter<"userprofile"> | number
    client?: XOR<ClientNullableScalarRelationFilter, clientWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }

  export type userprofileOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    client_id?: SortOrderInput | SortOrder
    login?: SortOrder
    password?: SortOrder
    image_path?: SortOrderInput | SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    passport?: SortOrder
    client?: clientOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
  }

  export type userprofileWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    login?: string
    email?: string
    phone_number?: number
    AND?: userprofileWhereInput | userprofileWhereInput[]
    OR?: userprofileWhereInput[]
    NOT?: userprofileWhereInput | userprofileWhereInput[]
    role_id?: IntFilter<"userprofile"> | number
    client_id?: IntNullableFilter<"userprofile"> | number | null
    password?: StringFilter<"userprofile"> | string
    image_path?: StringNullableFilter<"userprofile"> | string | null
    full_name?: StringFilter<"userprofile"> | string
    passport?: IntFilter<"userprofile"> | number
    client?: XOR<ClientNullableScalarRelationFilter, clientWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }, "user_id" | "login" | "email" | "phone_number">

  export type userprofileOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    client_id?: SortOrderInput | SortOrder
    login?: SortOrder
    password?: SortOrder
    image_path?: SortOrderInput | SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    passport?: SortOrder
    _count?: userprofileCountOrderByAggregateInput
    _avg?: userprofileAvgOrderByAggregateInput
    _max?: userprofileMaxOrderByAggregateInput
    _min?: userprofileMinOrderByAggregateInput
    _sum?: userprofileSumOrderByAggregateInput
  }

  export type userprofileScalarWhereWithAggregatesInput = {
    AND?: userprofileScalarWhereWithAggregatesInput | userprofileScalarWhereWithAggregatesInput[]
    OR?: userprofileScalarWhereWithAggregatesInput[]
    NOT?: userprofileScalarWhereWithAggregatesInput | userprofileScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"userprofile"> | number
    role_id?: IntWithAggregatesFilter<"userprofile"> | number
    client_id?: IntNullableWithAggregatesFilter<"userprofile"> | number | null
    login?: StringWithAggregatesFilter<"userprofile"> | string
    password?: StringWithAggregatesFilter<"userprofile"> | string
    image_path?: StringNullableWithAggregatesFilter<"userprofile"> | string | null
    full_name?: StringWithAggregatesFilter<"userprofile"> | string
    email?: StringWithAggregatesFilter<"userprofile"> | string
    phone_number?: IntWithAggregatesFilter<"userprofile"> | number
    passport?: IntWithAggregatesFilter<"userprofile"> | number
  }

  export type categoryCreateInput = {
    name: string
    description: string
    parent_id?: number | null
    item?: itemCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    category_id?: number
    name: string
    description: string
    parent_id?: number | null
    item?: itemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    item?: itemUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    item?: itemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    category_id?: number
    name: string
    description: string
    parent_id?: number | null
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clientCreateInput = {
    name: string
    phone_number: number
    address: string
    email: string
    city: string
    region: string
    country: string
    postal_code: number
    clientorder?: clientorderCreateNestedManyWithoutClientInput
    userprofile?: userprofileCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateInput = {
    client_id?: number
    name: string
    phone_number: number
    address: string
    email: string
    city: string
    region: string
    country: string
    postal_code: number
    clientorder?: clientorderUncheckedCreateNestedManyWithoutClientInput
    userprofile?: userprofileUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    clientorder?: clientorderUpdateManyWithoutClientNestedInput
    userprofile?: userprofileUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    clientorder?: clientorderUncheckedUpdateManyWithoutClientNestedInput
    userprofile?: userprofileUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientCreateManyInput = {
    client_id?: number
    name: string
    phone_number: number
    address: string
    email: string
    city: string
    region: string
    country: string
    postal_code: number
  }

  export type clientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
  }

  export type clientUncheckedUpdateManyInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
  }

  export type clientorderCreateInput = {
    status: $Enums.order_status
    timestamp: Date | string
    total_items: number
    total_amount: number
    client: clientCreateNestedOneWithoutClientorderInput
    orderproduct?: orderproductCreateNestedManyWithoutClientorderInput
  }

  export type clientorderUncheckedCreateInput = {
    order_id?: number
    client_id: number
    status: $Enums.order_status
    timestamp: Date | string
    total_items: number
    total_amount: number
    orderproduct?: orderproductUncheckedCreateNestedManyWithoutClientorderInput
  }

  export type clientorderUpdateInput = {
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    client?: clientUpdateOneRequiredWithoutClientorderNestedInput
    orderproduct?: orderproductUpdateManyWithoutClientorderNestedInput
  }

  export type clientorderUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    orderproduct?: orderproductUncheckedUpdateManyWithoutClientorderNestedInput
  }

  export type clientorderCreateManyInput = {
    order_id?: number
    client_id: number
    status: $Enums.order_status
    timestamp: Date | string
    total_items: number
    total_amount: number
  }

  export type clientorderUpdateManyMutationInput = {
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type clientorderUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type itemCreateInput = {
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
    category: categoryCreateNestedOneWithoutItemInput
    orderproduct?: orderproductCreateNestedManyWithoutItemInput
    supplieritem?: supplieritemCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateInput = {
    item_id?: number
    category_id: number
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
    orderproduct?: orderproductUncheckedCreateNestedManyWithoutItemInput
    supplieritem?: supplieritemUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
    category?: categoryUpdateOneRequiredWithoutItemNestedInput
    orderproduct?: orderproductUpdateManyWithoutItemNestedInput
    supplieritem?: supplieritemUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
    orderproduct?: orderproductUncheckedUpdateManyWithoutItemNestedInput
    supplieritem?: supplieritemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemCreateManyInput = {
    item_id?: number
    category_id: number
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
  }

  export type itemUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
  }

  export type itemUncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
  }

  export type orderproductCreateInput = {
    quantity: number
    returned_units?: number
    clientorder: clientorderCreateNestedOneWithoutOrderproductInput
    item: itemCreateNestedOneWithoutOrderproductInput
    orderreturn?: orderreturnCreateNestedManyWithoutOrderproductInput
  }

  export type orderproductUncheckedCreateInput = {
    order_product_id?: number
    order_id: number
    item_id: number
    quantity: number
    returned_units?: number
    orderreturn?: orderreturnUncheckedCreateNestedManyWithoutOrderproductInput
  }

  export type orderproductUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
    clientorder?: clientorderUpdateOneRequiredWithoutOrderproductNestedInput
    item?: itemUpdateOneRequiredWithoutOrderproductNestedInput
    orderreturn?: orderreturnUpdateManyWithoutOrderproductNestedInput
  }

  export type orderproductUncheckedUpdateInput = {
    order_product_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
    orderreturn?: orderreturnUncheckedUpdateManyWithoutOrderproductNestedInput
  }

  export type orderproductCreateManyInput = {
    order_product_id?: number
    order_id: number
    item_id: number
    quantity: number
    returned_units?: number
  }

  export type orderproductUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
  }

  export type orderproductUncheckedUpdateManyInput = {
    order_product_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
  }

  export type orderreturnCreateInput = {
    quantity: number
    reason: $Enums.return_reason
    description: string
    status: $Enums.return_status
    return_date: Date | string
    orderproduct: orderproductCreateNestedOneWithoutOrderreturnInput
  }

  export type orderreturnUncheckedCreateInput = {
    order_return_id?: number
    order_product_id: number
    quantity: number
    reason: $Enums.return_reason
    description: string
    status: $Enums.return_status
    return_date: Date | string
  }

  export type orderreturnUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: Enumreturn_reasonFieldUpdateOperationsInput | $Enums.return_reason
    description?: StringFieldUpdateOperationsInput | string
    status?: Enumreturn_statusFieldUpdateOperationsInput | $Enums.return_status
    return_date?: DateTimeFieldUpdateOperationsInput | Date | string
    orderproduct?: orderproductUpdateOneRequiredWithoutOrderreturnNestedInput
  }

  export type orderreturnUncheckedUpdateInput = {
    order_return_id?: IntFieldUpdateOperationsInput | number
    order_product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: Enumreturn_reasonFieldUpdateOperationsInput | $Enums.return_reason
    description?: StringFieldUpdateOperationsInput | string
    status?: Enumreturn_statusFieldUpdateOperationsInput | $Enums.return_status
    return_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderreturnCreateManyInput = {
    order_return_id?: number
    order_product_id: number
    quantity: number
    reason: $Enums.return_reason
    description: string
    status: $Enums.return_status
    return_date: Date | string
  }

  export type orderreturnUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: Enumreturn_reasonFieldUpdateOperationsInput | $Enums.return_reason
    description?: StringFieldUpdateOperationsInput | string
    status?: Enumreturn_statusFieldUpdateOperationsInput | $Enums.return_status
    return_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderreturnUncheckedUpdateManyInput = {
    order_return_id?: IntFieldUpdateOperationsInput | number
    order_product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: Enumreturn_reasonFieldUpdateOperationsInput | $Enums.return_reason
    description?: StringFieldUpdateOperationsInput | string
    status?: Enumreturn_statusFieldUpdateOperationsInput | $Enums.return_status
    return_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleCreateInput = {
    name: string
    description: string
    userprofile?: userprofileCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    role_id?: number
    name: string
    description: string
    userprofile?: userprofileUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userprofile?: userprofileUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userprofile?: userprofileUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    role_id?: number
    name: string
    description: string
  }

  export type roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type supplierCreateInput = {
    name: string
    email: string
    address: string
    city: string
    region: string
    country: string
    postal_code: number
    phone_number: number
    supplieritem?: supplieritemCreateNestedManyWithoutSupplierInput
  }

  export type supplierUncheckedCreateInput = {
    supplier_id?: number
    name: string
    email: string
    address: string
    city: string
    region: string
    country: string
    postal_code: number
    phone_number: number
    supplieritem?: supplieritemUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type supplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
    supplieritem?: supplieritemUpdateManyWithoutSupplierNestedInput
  }

  export type supplierUncheckedUpdateInput = {
    supplier_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
    supplieritem?: supplieritemUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type supplierCreateManyInput = {
    supplier_id?: number
    name: string
    email: string
    address: string
    city: string
    region: string
    country: string
    postal_code: number
    phone_number: number
  }

  export type supplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
  }

  export type supplierUncheckedUpdateManyInput = {
    supplier_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
  }

  export type supplieritemCreateInput = {
    item: itemCreateNestedOneWithoutSupplieritemInput
    supplier: supplierCreateNestedOneWithoutSupplieritemInput
  }

  export type supplieritemUncheckedCreateInput = {
    id?: number
    supplier_id: number
    item_id: number
  }

  export type supplieritemUpdateInput = {
    item?: itemUpdateOneRequiredWithoutSupplieritemNestedInput
    supplier?: supplierUpdateOneRequiredWithoutSupplieritemNestedInput
  }

  export type supplieritemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
  }

  export type supplieritemCreateManyInput = {
    id?: number
    supplier_id: number
    item_id: number
  }

  export type supplieritemUpdateManyMutationInput = {

  }

  export type supplieritemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
  }

  export type userprofileCreateInput = {
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
    client?: clientCreateNestedOneWithoutUserprofileInput
    role: roleCreateNestedOneWithoutUserprofileInput
  }

  export type userprofileUncheckedCreateInput = {
    user_id?: number
    role_id: number
    client_id?: number | null
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
  }

  export type userprofileUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
    client?: clientUpdateOneWithoutUserprofileNestedInput
    role?: roleUpdateOneRequiredWithoutUserprofileNestedInput
  }

  export type userprofileUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
  }

  export type userprofileCreateManyInput = {
    user_id?: number
    role_id: number
    client_id?: number | null
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
  }

  export type userprofileUpdateManyMutationInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
  }

  export type userprofileUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
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

  export type ItemListRelationFilter = {
    every?: itemWhereInput
    some?: itemWhereInput
    none?: itemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type itemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    category_id?: SortOrder
    parent_id?: SortOrder
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

  export type ClientorderListRelationFilter = {
    every?: clientorderWhereInput
    some?: clientorderWhereInput
    none?: clientorderWhereInput
  }

  export type UserprofileListRelationFilter = {
    every?: userprofileWhereInput
    some?: userprofileWhereInput
    none?: userprofileWhereInput
  }

  export type clientorderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userprofileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientCountOrderByAggregateInput = {
    client_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    email?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
  }

  export type clientAvgOrderByAggregateInput = {
    client_id?: SortOrder
    phone_number?: SortOrder
    postal_code?: SortOrder
  }

  export type clientMaxOrderByAggregateInput = {
    client_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    email?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
  }

  export type clientMinOrderByAggregateInput = {
    client_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    email?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
  }

  export type clientSumOrderByAggregateInput = {
    client_id?: SortOrder
    phone_number?: SortOrder
    postal_code?: SortOrder
  }

  export type Enumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
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

  export type ClientScalarRelationFilter = {
    is?: clientWhereInput
    isNot?: clientWhereInput
  }

  export type OrderproductListRelationFilter = {
    every?: orderproductWhereInput
    some?: orderproductWhereInput
    none?: orderproductWhereInput
  }

  export type orderproductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientorderCountOrderByAggregateInput = {
    order_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    total_items?: SortOrder
    total_amount?: SortOrder
  }

  export type clientorderAvgOrderByAggregateInput = {
    order_id?: SortOrder
    client_id?: SortOrder
    total_items?: SortOrder
    total_amount?: SortOrder
  }

  export type clientorderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    total_items?: SortOrder
    total_amount?: SortOrder
  }

  export type clientorderMinOrderByAggregateInput = {
    order_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
    total_items?: SortOrder
    total_amount?: SortOrder
  }

  export type clientorderSumOrderByAggregateInput = {
    order_id?: SortOrder
    client_id?: SortOrder
    total_items?: SortOrder
    total_amount?: SortOrder
  }

  export type Enumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
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

  export type Enumitem_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.item_status | Enumitem_statusFieldRefInput<$PrismaModel>
    in?: $Enums.item_status[] | ListEnumitem_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.item_status[] | ListEnumitem_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumitem_statusFilter<$PrismaModel> | $Enums.item_status
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type SupplieritemListRelationFilter = {
    every?: supplieritemWhereInput
    some?: supplieritemWhereInput
    none?: supplieritemWhereInput
  }

  export type supplieritemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itemCountOrderByAggregateInput = {
    item_id?: SortOrder
    category_id?: SortOrder
    model?: SortOrder
    image_path?: SortOrder
    status?: SortOrder
    manufacturer?: SortOrder
    unit_price?: SortOrder
    date_of_arrival?: SortOrder
    units_in_stock?: SortOrder
    faulty_units?: SortOrder
  }

  export type itemAvgOrderByAggregateInput = {
    item_id?: SortOrder
    category_id?: SortOrder
    unit_price?: SortOrder
    units_in_stock?: SortOrder
    faulty_units?: SortOrder
  }

  export type itemMaxOrderByAggregateInput = {
    item_id?: SortOrder
    category_id?: SortOrder
    model?: SortOrder
    image_path?: SortOrder
    status?: SortOrder
    manufacturer?: SortOrder
    unit_price?: SortOrder
    date_of_arrival?: SortOrder
    units_in_stock?: SortOrder
    faulty_units?: SortOrder
  }

  export type itemMinOrderByAggregateInput = {
    item_id?: SortOrder
    category_id?: SortOrder
    model?: SortOrder
    image_path?: SortOrder
    status?: SortOrder
    manufacturer?: SortOrder
    unit_price?: SortOrder
    date_of_arrival?: SortOrder
    units_in_stock?: SortOrder
    faulty_units?: SortOrder
  }

  export type itemSumOrderByAggregateInput = {
    item_id?: SortOrder
    category_id?: SortOrder
    unit_price?: SortOrder
    units_in_stock?: SortOrder
    faulty_units?: SortOrder
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

  export type Enumitem_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.item_status | Enumitem_statusFieldRefInput<$PrismaModel>
    in?: $Enums.item_status[] | ListEnumitem_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.item_status[] | ListEnumitem_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumitem_statusWithAggregatesFilter<$PrismaModel> | $Enums.item_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumitem_statusFilter<$PrismaModel>
    _max?: NestedEnumitem_statusFilter<$PrismaModel>
  }

  export type ClientorderScalarRelationFilter = {
    is?: clientorderWhereInput
    isNot?: clientorderWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: itemWhereInput
    isNot?: itemWhereInput
  }

  export type OrderreturnListRelationFilter = {
    every?: orderreturnWhereInput
    some?: orderreturnWhereInput
    none?: orderreturnWhereInput
  }

  export type orderreturnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderproductCountOrderByAggregateInput = {
    order_product_id?: SortOrder
    order_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    returned_units?: SortOrder
  }

  export type orderproductAvgOrderByAggregateInput = {
    order_product_id?: SortOrder
    order_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    returned_units?: SortOrder
  }

  export type orderproductMaxOrderByAggregateInput = {
    order_product_id?: SortOrder
    order_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    returned_units?: SortOrder
  }

  export type orderproductMinOrderByAggregateInput = {
    order_product_id?: SortOrder
    order_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    returned_units?: SortOrder
  }

  export type orderproductSumOrderByAggregateInput = {
    order_product_id?: SortOrder
    order_id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    returned_units?: SortOrder
  }

  export type Enumreturn_reasonFilter<$PrismaModel = never> = {
    equals?: $Enums.return_reason | Enumreturn_reasonFieldRefInput<$PrismaModel>
    in?: $Enums.return_reason[] | ListEnumreturn_reasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.return_reason[] | ListEnumreturn_reasonFieldRefInput<$PrismaModel>
    not?: NestedEnumreturn_reasonFilter<$PrismaModel> | $Enums.return_reason
  }

  export type Enumreturn_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.return_status | Enumreturn_statusFieldRefInput<$PrismaModel>
    in?: $Enums.return_status[] | ListEnumreturn_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.return_status[] | ListEnumreturn_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumreturn_statusFilter<$PrismaModel> | $Enums.return_status
  }

  export type OrderproductScalarRelationFilter = {
    is?: orderproductWhereInput
    isNot?: orderproductWhereInput
  }

  export type orderreturnCountOrderByAggregateInput = {
    order_return_id?: SortOrder
    order_product_id?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    return_date?: SortOrder
  }

  export type orderreturnAvgOrderByAggregateInput = {
    order_return_id?: SortOrder
    order_product_id?: SortOrder
    quantity?: SortOrder
  }

  export type orderreturnMaxOrderByAggregateInput = {
    order_return_id?: SortOrder
    order_product_id?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    return_date?: SortOrder
  }

  export type orderreturnMinOrderByAggregateInput = {
    order_return_id?: SortOrder
    order_product_id?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    description?: SortOrder
    status?: SortOrder
    return_date?: SortOrder
  }

  export type orderreturnSumOrderByAggregateInput = {
    order_return_id?: SortOrder
    order_product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Enumreturn_reasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.return_reason | Enumreturn_reasonFieldRefInput<$PrismaModel>
    in?: $Enums.return_reason[] | ListEnumreturn_reasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.return_reason[] | ListEnumreturn_reasonFieldRefInput<$PrismaModel>
    not?: NestedEnumreturn_reasonWithAggregatesFilter<$PrismaModel> | $Enums.return_reason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreturn_reasonFilter<$PrismaModel>
    _max?: NestedEnumreturn_reasonFilter<$PrismaModel>
  }

  export type Enumreturn_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.return_status | Enumreturn_statusFieldRefInput<$PrismaModel>
    in?: $Enums.return_status[] | ListEnumreturn_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.return_status[] | ListEnumreturn_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumreturn_statusWithAggregatesFilter<$PrismaModel> | $Enums.return_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreturn_statusFilter<$PrismaModel>
    _max?: NestedEnumreturn_statusFilter<$PrismaModel>
  }

  export type roleCountOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type supplierCountOrderByAggregateInput = {
    supplier_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    phone_number?: SortOrder
  }

  export type supplierAvgOrderByAggregateInput = {
    supplier_id?: SortOrder
    postal_code?: SortOrder
    phone_number?: SortOrder
  }

  export type supplierMaxOrderByAggregateInput = {
    supplier_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    phone_number?: SortOrder
  }

  export type supplierMinOrderByAggregateInput = {
    supplier_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    region?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    phone_number?: SortOrder
  }

  export type supplierSumOrderByAggregateInput = {
    supplier_id?: SortOrder
    postal_code?: SortOrder
    phone_number?: SortOrder
  }

  export type SupplierScalarRelationFilter = {
    is?: supplierWhereInput
    isNot?: supplierWhereInput
  }

  export type supplieritemCountOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    item_id?: SortOrder
  }

  export type supplieritemAvgOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    item_id?: SortOrder
  }

  export type supplieritemMaxOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    item_id?: SortOrder
  }

  export type supplieritemMinOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    item_id?: SortOrder
  }

  export type supplieritemSumOrderByAggregateInput = {
    id?: SortOrder
    supplier_id?: SortOrder
    item_id?: SortOrder
  }

  export type ClientNullableScalarRelationFilter = {
    is?: clientWhereInput | null
    isNot?: clientWhereInput | null
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type userprofileCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    client_id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    image_path?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    passport?: SortOrder
  }

  export type userprofileAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    client_id?: SortOrder
    phone_number?: SortOrder
    passport?: SortOrder
  }

  export type userprofileMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    client_id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    image_path?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    passport?: SortOrder
  }

  export type userprofileMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    client_id?: SortOrder
    login?: SortOrder
    password?: SortOrder
    image_path?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    passport?: SortOrder
  }

  export type userprofileSumOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    client_id?: SortOrder
    phone_number?: SortOrder
    passport?: SortOrder
  }

  export type itemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<itemCreateWithoutCategoryInput, itemUncheckedCreateWithoutCategoryInput> | itemCreateWithoutCategoryInput[] | itemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutCategoryInput | itemCreateOrConnectWithoutCategoryInput[]
    createMany?: itemCreateManyCategoryInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type itemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<itemCreateWithoutCategoryInput, itemUncheckedCreateWithoutCategoryInput> | itemCreateWithoutCategoryInput[] | itemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutCategoryInput | itemCreateOrConnectWithoutCategoryInput[]
    createMany?: itemCreateManyCategoryInputEnvelope
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type itemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<itemCreateWithoutCategoryInput, itemUncheckedCreateWithoutCategoryInput> | itemCreateWithoutCategoryInput[] | itemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutCategoryInput | itemCreateOrConnectWithoutCategoryInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutCategoryInput | itemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: itemCreateManyCategoryInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutCategoryInput | itemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: itemUpdateManyWithWhereWithoutCategoryInput | itemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type itemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<itemCreateWithoutCategoryInput, itemUncheckedCreateWithoutCategoryInput> | itemCreateWithoutCategoryInput[] | itemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: itemCreateOrConnectWithoutCategoryInput | itemCreateOrConnectWithoutCategoryInput[]
    upsert?: itemUpsertWithWhereUniqueWithoutCategoryInput | itemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: itemCreateManyCategoryInputEnvelope
    set?: itemWhereUniqueInput | itemWhereUniqueInput[]
    disconnect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    delete?: itemWhereUniqueInput | itemWhereUniqueInput[]
    connect?: itemWhereUniqueInput | itemWhereUniqueInput[]
    update?: itemUpdateWithWhereUniqueWithoutCategoryInput | itemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: itemUpdateManyWithWhereWithoutCategoryInput | itemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: itemScalarWhereInput | itemScalarWhereInput[]
  }

  export type clientorderCreateNestedManyWithoutClientInput = {
    create?: XOR<clientorderCreateWithoutClientInput, clientorderUncheckedCreateWithoutClientInput> | clientorderCreateWithoutClientInput[] | clientorderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: clientorderCreateOrConnectWithoutClientInput | clientorderCreateOrConnectWithoutClientInput[]
    createMany?: clientorderCreateManyClientInputEnvelope
    connect?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
  }

  export type userprofileCreateNestedManyWithoutClientInput = {
    create?: XOR<userprofileCreateWithoutClientInput, userprofileUncheckedCreateWithoutClientInput> | userprofileCreateWithoutClientInput[] | userprofileUncheckedCreateWithoutClientInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutClientInput | userprofileCreateOrConnectWithoutClientInput[]
    createMany?: userprofileCreateManyClientInputEnvelope
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
  }

  export type clientorderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<clientorderCreateWithoutClientInput, clientorderUncheckedCreateWithoutClientInput> | clientorderCreateWithoutClientInput[] | clientorderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: clientorderCreateOrConnectWithoutClientInput | clientorderCreateOrConnectWithoutClientInput[]
    createMany?: clientorderCreateManyClientInputEnvelope
    connect?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
  }

  export type userprofileUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<userprofileCreateWithoutClientInput, userprofileUncheckedCreateWithoutClientInput> | userprofileCreateWithoutClientInput[] | userprofileUncheckedCreateWithoutClientInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutClientInput | userprofileCreateOrConnectWithoutClientInput[]
    createMany?: userprofileCreateManyClientInputEnvelope
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
  }

  export type clientorderUpdateManyWithoutClientNestedInput = {
    create?: XOR<clientorderCreateWithoutClientInput, clientorderUncheckedCreateWithoutClientInput> | clientorderCreateWithoutClientInput[] | clientorderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: clientorderCreateOrConnectWithoutClientInput | clientorderCreateOrConnectWithoutClientInput[]
    upsert?: clientorderUpsertWithWhereUniqueWithoutClientInput | clientorderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: clientorderCreateManyClientInputEnvelope
    set?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
    disconnect?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
    delete?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
    connect?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
    update?: clientorderUpdateWithWhereUniqueWithoutClientInput | clientorderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: clientorderUpdateManyWithWhereWithoutClientInput | clientorderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: clientorderScalarWhereInput | clientorderScalarWhereInput[]
  }

  export type userprofileUpdateManyWithoutClientNestedInput = {
    create?: XOR<userprofileCreateWithoutClientInput, userprofileUncheckedCreateWithoutClientInput> | userprofileCreateWithoutClientInput[] | userprofileUncheckedCreateWithoutClientInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutClientInput | userprofileCreateOrConnectWithoutClientInput[]
    upsert?: userprofileUpsertWithWhereUniqueWithoutClientInput | userprofileUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: userprofileCreateManyClientInputEnvelope
    set?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    disconnect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    delete?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    update?: userprofileUpdateWithWhereUniqueWithoutClientInput | userprofileUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: userprofileUpdateManyWithWhereWithoutClientInput | userprofileUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
  }

  export type clientorderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<clientorderCreateWithoutClientInput, clientorderUncheckedCreateWithoutClientInput> | clientorderCreateWithoutClientInput[] | clientorderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: clientorderCreateOrConnectWithoutClientInput | clientorderCreateOrConnectWithoutClientInput[]
    upsert?: clientorderUpsertWithWhereUniqueWithoutClientInput | clientorderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: clientorderCreateManyClientInputEnvelope
    set?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
    disconnect?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
    delete?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
    connect?: clientorderWhereUniqueInput | clientorderWhereUniqueInput[]
    update?: clientorderUpdateWithWhereUniqueWithoutClientInput | clientorderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: clientorderUpdateManyWithWhereWithoutClientInput | clientorderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: clientorderScalarWhereInput | clientorderScalarWhereInput[]
  }

  export type userprofileUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<userprofileCreateWithoutClientInput, userprofileUncheckedCreateWithoutClientInput> | userprofileCreateWithoutClientInput[] | userprofileUncheckedCreateWithoutClientInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutClientInput | userprofileCreateOrConnectWithoutClientInput[]
    upsert?: userprofileUpsertWithWhereUniqueWithoutClientInput | userprofileUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: userprofileCreateManyClientInputEnvelope
    set?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    disconnect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    delete?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    update?: userprofileUpdateWithWhereUniqueWithoutClientInput | userprofileUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: userprofileUpdateManyWithWhereWithoutClientInput | userprofileUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
  }

  export type clientCreateNestedOneWithoutClientorderInput = {
    create?: XOR<clientCreateWithoutClientorderInput, clientUncheckedCreateWithoutClientorderInput>
    connectOrCreate?: clientCreateOrConnectWithoutClientorderInput
    connect?: clientWhereUniqueInput
  }

  export type orderproductCreateNestedManyWithoutClientorderInput = {
    create?: XOR<orderproductCreateWithoutClientorderInput, orderproductUncheckedCreateWithoutClientorderInput> | orderproductCreateWithoutClientorderInput[] | orderproductUncheckedCreateWithoutClientorderInput[]
    connectOrCreate?: orderproductCreateOrConnectWithoutClientorderInput | orderproductCreateOrConnectWithoutClientorderInput[]
    createMany?: orderproductCreateManyClientorderInputEnvelope
    connect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
  }

  export type orderproductUncheckedCreateNestedManyWithoutClientorderInput = {
    create?: XOR<orderproductCreateWithoutClientorderInput, orderproductUncheckedCreateWithoutClientorderInput> | orderproductCreateWithoutClientorderInput[] | orderproductUncheckedCreateWithoutClientorderInput[]
    connectOrCreate?: orderproductCreateOrConnectWithoutClientorderInput | orderproductCreateOrConnectWithoutClientorderInput[]
    createMany?: orderproductCreateManyClientorderInputEnvelope
    connect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
  }

  export type Enumorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.order_status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clientUpdateOneRequiredWithoutClientorderNestedInput = {
    create?: XOR<clientCreateWithoutClientorderInput, clientUncheckedCreateWithoutClientorderInput>
    connectOrCreate?: clientCreateOrConnectWithoutClientorderInput
    upsert?: clientUpsertWithoutClientorderInput
    connect?: clientWhereUniqueInput
    update?: XOR<XOR<clientUpdateToOneWithWhereWithoutClientorderInput, clientUpdateWithoutClientorderInput>, clientUncheckedUpdateWithoutClientorderInput>
  }

  export type orderproductUpdateManyWithoutClientorderNestedInput = {
    create?: XOR<orderproductCreateWithoutClientorderInput, orderproductUncheckedCreateWithoutClientorderInput> | orderproductCreateWithoutClientorderInput[] | orderproductUncheckedCreateWithoutClientorderInput[]
    connectOrCreate?: orderproductCreateOrConnectWithoutClientorderInput | orderproductCreateOrConnectWithoutClientorderInput[]
    upsert?: orderproductUpsertWithWhereUniqueWithoutClientorderInput | orderproductUpsertWithWhereUniqueWithoutClientorderInput[]
    createMany?: orderproductCreateManyClientorderInputEnvelope
    set?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    disconnect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    delete?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    connect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    update?: orderproductUpdateWithWhereUniqueWithoutClientorderInput | orderproductUpdateWithWhereUniqueWithoutClientorderInput[]
    updateMany?: orderproductUpdateManyWithWhereWithoutClientorderInput | orderproductUpdateManyWithWhereWithoutClientorderInput[]
    deleteMany?: orderproductScalarWhereInput | orderproductScalarWhereInput[]
  }

  export type orderproductUncheckedUpdateManyWithoutClientorderNestedInput = {
    create?: XOR<orderproductCreateWithoutClientorderInput, orderproductUncheckedCreateWithoutClientorderInput> | orderproductCreateWithoutClientorderInput[] | orderproductUncheckedCreateWithoutClientorderInput[]
    connectOrCreate?: orderproductCreateOrConnectWithoutClientorderInput | orderproductCreateOrConnectWithoutClientorderInput[]
    upsert?: orderproductUpsertWithWhereUniqueWithoutClientorderInput | orderproductUpsertWithWhereUniqueWithoutClientorderInput[]
    createMany?: orderproductCreateManyClientorderInputEnvelope
    set?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    disconnect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    delete?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    connect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    update?: orderproductUpdateWithWhereUniqueWithoutClientorderInput | orderproductUpdateWithWhereUniqueWithoutClientorderInput[]
    updateMany?: orderproductUpdateManyWithWhereWithoutClientorderInput | orderproductUpdateManyWithWhereWithoutClientorderInput[]
    deleteMany?: orderproductScalarWhereInput | orderproductScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutItemInput = {
    create?: XOR<categoryCreateWithoutItemInput, categoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: categoryCreateOrConnectWithoutItemInput
    connect?: categoryWhereUniqueInput
  }

  export type orderproductCreateNestedManyWithoutItemInput = {
    create?: XOR<orderproductCreateWithoutItemInput, orderproductUncheckedCreateWithoutItemInput> | orderproductCreateWithoutItemInput[] | orderproductUncheckedCreateWithoutItemInput[]
    connectOrCreate?: orderproductCreateOrConnectWithoutItemInput | orderproductCreateOrConnectWithoutItemInput[]
    createMany?: orderproductCreateManyItemInputEnvelope
    connect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
  }

  export type supplieritemCreateNestedManyWithoutItemInput = {
    create?: XOR<supplieritemCreateWithoutItemInput, supplieritemUncheckedCreateWithoutItemInput> | supplieritemCreateWithoutItemInput[] | supplieritemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: supplieritemCreateOrConnectWithoutItemInput | supplieritemCreateOrConnectWithoutItemInput[]
    createMany?: supplieritemCreateManyItemInputEnvelope
    connect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
  }

  export type orderproductUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<orderproductCreateWithoutItemInput, orderproductUncheckedCreateWithoutItemInput> | orderproductCreateWithoutItemInput[] | orderproductUncheckedCreateWithoutItemInput[]
    connectOrCreate?: orderproductCreateOrConnectWithoutItemInput | orderproductCreateOrConnectWithoutItemInput[]
    createMany?: orderproductCreateManyItemInputEnvelope
    connect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
  }

  export type supplieritemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<supplieritemCreateWithoutItemInput, supplieritemUncheckedCreateWithoutItemInput> | supplieritemCreateWithoutItemInput[] | supplieritemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: supplieritemCreateOrConnectWithoutItemInput | supplieritemCreateOrConnectWithoutItemInput[]
    createMany?: supplieritemCreateManyItemInputEnvelope
    connect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumitem_statusFieldUpdateOperationsInput = {
    set?: $Enums.item_status
  }

  export type categoryUpdateOneRequiredWithoutItemNestedInput = {
    create?: XOR<categoryCreateWithoutItemInput, categoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: categoryCreateOrConnectWithoutItemInput
    upsert?: categoryUpsertWithoutItemInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutItemInput, categoryUpdateWithoutItemInput>, categoryUncheckedUpdateWithoutItemInput>
  }

  export type orderproductUpdateManyWithoutItemNestedInput = {
    create?: XOR<orderproductCreateWithoutItemInput, orderproductUncheckedCreateWithoutItemInput> | orderproductCreateWithoutItemInput[] | orderproductUncheckedCreateWithoutItemInput[]
    connectOrCreate?: orderproductCreateOrConnectWithoutItemInput | orderproductCreateOrConnectWithoutItemInput[]
    upsert?: orderproductUpsertWithWhereUniqueWithoutItemInput | orderproductUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: orderproductCreateManyItemInputEnvelope
    set?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    disconnect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    delete?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    connect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    update?: orderproductUpdateWithWhereUniqueWithoutItemInput | orderproductUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: orderproductUpdateManyWithWhereWithoutItemInput | orderproductUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: orderproductScalarWhereInput | orderproductScalarWhereInput[]
  }

  export type supplieritemUpdateManyWithoutItemNestedInput = {
    create?: XOR<supplieritemCreateWithoutItemInput, supplieritemUncheckedCreateWithoutItemInput> | supplieritemCreateWithoutItemInput[] | supplieritemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: supplieritemCreateOrConnectWithoutItemInput | supplieritemCreateOrConnectWithoutItemInput[]
    upsert?: supplieritemUpsertWithWhereUniqueWithoutItemInput | supplieritemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: supplieritemCreateManyItemInputEnvelope
    set?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    disconnect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    delete?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    connect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    update?: supplieritemUpdateWithWhereUniqueWithoutItemInput | supplieritemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: supplieritemUpdateManyWithWhereWithoutItemInput | supplieritemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: supplieritemScalarWhereInput | supplieritemScalarWhereInput[]
  }

  export type orderproductUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<orderproductCreateWithoutItemInput, orderproductUncheckedCreateWithoutItemInput> | orderproductCreateWithoutItemInput[] | orderproductUncheckedCreateWithoutItemInput[]
    connectOrCreate?: orderproductCreateOrConnectWithoutItemInput | orderproductCreateOrConnectWithoutItemInput[]
    upsert?: orderproductUpsertWithWhereUniqueWithoutItemInput | orderproductUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: orderproductCreateManyItemInputEnvelope
    set?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    disconnect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    delete?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    connect?: orderproductWhereUniqueInput | orderproductWhereUniqueInput[]
    update?: orderproductUpdateWithWhereUniqueWithoutItemInput | orderproductUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: orderproductUpdateManyWithWhereWithoutItemInput | orderproductUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: orderproductScalarWhereInput | orderproductScalarWhereInput[]
  }

  export type supplieritemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<supplieritemCreateWithoutItemInput, supplieritemUncheckedCreateWithoutItemInput> | supplieritemCreateWithoutItemInput[] | supplieritemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: supplieritemCreateOrConnectWithoutItemInput | supplieritemCreateOrConnectWithoutItemInput[]
    upsert?: supplieritemUpsertWithWhereUniqueWithoutItemInput | supplieritemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: supplieritemCreateManyItemInputEnvelope
    set?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    disconnect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    delete?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    connect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    update?: supplieritemUpdateWithWhereUniqueWithoutItemInput | supplieritemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: supplieritemUpdateManyWithWhereWithoutItemInput | supplieritemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: supplieritemScalarWhereInput | supplieritemScalarWhereInput[]
  }

  export type clientorderCreateNestedOneWithoutOrderproductInput = {
    create?: XOR<clientorderCreateWithoutOrderproductInput, clientorderUncheckedCreateWithoutOrderproductInput>
    connectOrCreate?: clientorderCreateOrConnectWithoutOrderproductInput
    connect?: clientorderWhereUniqueInput
  }

  export type itemCreateNestedOneWithoutOrderproductInput = {
    create?: XOR<itemCreateWithoutOrderproductInput, itemUncheckedCreateWithoutOrderproductInput>
    connectOrCreate?: itemCreateOrConnectWithoutOrderproductInput
    connect?: itemWhereUniqueInput
  }

  export type orderreturnCreateNestedManyWithoutOrderproductInput = {
    create?: XOR<orderreturnCreateWithoutOrderproductInput, orderreturnUncheckedCreateWithoutOrderproductInput> | orderreturnCreateWithoutOrderproductInput[] | orderreturnUncheckedCreateWithoutOrderproductInput[]
    connectOrCreate?: orderreturnCreateOrConnectWithoutOrderproductInput | orderreturnCreateOrConnectWithoutOrderproductInput[]
    createMany?: orderreturnCreateManyOrderproductInputEnvelope
    connect?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
  }

  export type orderreturnUncheckedCreateNestedManyWithoutOrderproductInput = {
    create?: XOR<orderreturnCreateWithoutOrderproductInput, orderreturnUncheckedCreateWithoutOrderproductInput> | orderreturnCreateWithoutOrderproductInput[] | orderreturnUncheckedCreateWithoutOrderproductInput[]
    connectOrCreate?: orderreturnCreateOrConnectWithoutOrderproductInput | orderreturnCreateOrConnectWithoutOrderproductInput[]
    createMany?: orderreturnCreateManyOrderproductInputEnvelope
    connect?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
  }

  export type clientorderUpdateOneRequiredWithoutOrderproductNestedInput = {
    create?: XOR<clientorderCreateWithoutOrderproductInput, clientorderUncheckedCreateWithoutOrderproductInput>
    connectOrCreate?: clientorderCreateOrConnectWithoutOrderproductInput
    upsert?: clientorderUpsertWithoutOrderproductInput
    connect?: clientorderWhereUniqueInput
    update?: XOR<XOR<clientorderUpdateToOneWithWhereWithoutOrderproductInput, clientorderUpdateWithoutOrderproductInput>, clientorderUncheckedUpdateWithoutOrderproductInput>
  }

  export type itemUpdateOneRequiredWithoutOrderproductNestedInput = {
    create?: XOR<itemCreateWithoutOrderproductInput, itemUncheckedCreateWithoutOrderproductInput>
    connectOrCreate?: itemCreateOrConnectWithoutOrderproductInput
    upsert?: itemUpsertWithoutOrderproductInput
    connect?: itemWhereUniqueInput
    update?: XOR<XOR<itemUpdateToOneWithWhereWithoutOrderproductInput, itemUpdateWithoutOrderproductInput>, itemUncheckedUpdateWithoutOrderproductInput>
  }

  export type orderreturnUpdateManyWithoutOrderproductNestedInput = {
    create?: XOR<orderreturnCreateWithoutOrderproductInput, orderreturnUncheckedCreateWithoutOrderproductInput> | orderreturnCreateWithoutOrderproductInput[] | orderreturnUncheckedCreateWithoutOrderproductInput[]
    connectOrCreate?: orderreturnCreateOrConnectWithoutOrderproductInput | orderreturnCreateOrConnectWithoutOrderproductInput[]
    upsert?: orderreturnUpsertWithWhereUniqueWithoutOrderproductInput | orderreturnUpsertWithWhereUniqueWithoutOrderproductInput[]
    createMany?: orderreturnCreateManyOrderproductInputEnvelope
    set?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
    disconnect?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
    delete?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
    connect?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
    update?: orderreturnUpdateWithWhereUniqueWithoutOrderproductInput | orderreturnUpdateWithWhereUniqueWithoutOrderproductInput[]
    updateMany?: orderreturnUpdateManyWithWhereWithoutOrderproductInput | orderreturnUpdateManyWithWhereWithoutOrderproductInput[]
    deleteMany?: orderreturnScalarWhereInput | orderreturnScalarWhereInput[]
  }

  export type orderreturnUncheckedUpdateManyWithoutOrderproductNestedInput = {
    create?: XOR<orderreturnCreateWithoutOrderproductInput, orderreturnUncheckedCreateWithoutOrderproductInput> | orderreturnCreateWithoutOrderproductInput[] | orderreturnUncheckedCreateWithoutOrderproductInput[]
    connectOrCreate?: orderreturnCreateOrConnectWithoutOrderproductInput | orderreturnCreateOrConnectWithoutOrderproductInput[]
    upsert?: orderreturnUpsertWithWhereUniqueWithoutOrderproductInput | orderreturnUpsertWithWhereUniqueWithoutOrderproductInput[]
    createMany?: orderreturnCreateManyOrderproductInputEnvelope
    set?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
    disconnect?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
    delete?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
    connect?: orderreturnWhereUniqueInput | orderreturnWhereUniqueInput[]
    update?: orderreturnUpdateWithWhereUniqueWithoutOrderproductInput | orderreturnUpdateWithWhereUniqueWithoutOrderproductInput[]
    updateMany?: orderreturnUpdateManyWithWhereWithoutOrderproductInput | orderreturnUpdateManyWithWhereWithoutOrderproductInput[]
    deleteMany?: orderreturnScalarWhereInput | orderreturnScalarWhereInput[]
  }

  export type orderproductCreateNestedOneWithoutOrderreturnInput = {
    create?: XOR<orderproductCreateWithoutOrderreturnInput, orderproductUncheckedCreateWithoutOrderreturnInput>
    connectOrCreate?: orderproductCreateOrConnectWithoutOrderreturnInput
    connect?: orderproductWhereUniqueInput
  }

  export type Enumreturn_reasonFieldUpdateOperationsInput = {
    set?: $Enums.return_reason
  }

  export type Enumreturn_statusFieldUpdateOperationsInput = {
    set?: $Enums.return_status
  }

  export type orderproductUpdateOneRequiredWithoutOrderreturnNestedInput = {
    create?: XOR<orderproductCreateWithoutOrderreturnInput, orderproductUncheckedCreateWithoutOrderreturnInput>
    connectOrCreate?: orderproductCreateOrConnectWithoutOrderreturnInput
    upsert?: orderproductUpsertWithoutOrderreturnInput
    connect?: orderproductWhereUniqueInput
    update?: XOR<XOR<orderproductUpdateToOneWithWhereWithoutOrderreturnInput, orderproductUpdateWithoutOrderreturnInput>, orderproductUncheckedUpdateWithoutOrderreturnInput>
  }

  export type userprofileCreateNestedManyWithoutRoleInput = {
    create?: XOR<userprofileCreateWithoutRoleInput, userprofileUncheckedCreateWithoutRoleInput> | userprofileCreateWithoutRoleInput[] | userprofileUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutRoleInput | userprofileCreateOrConnectWithoutRoleInput[]
    createMany?: userprofileCreateManyRoleInputEnvelope
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
  }

  export type userprofileUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<userprofileCreateWithoutRoleInput, userprofileUncheckedCreateWithoutRoleInput> | userprofileCreateWithoutRoleInput[] | userprofileUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutRoleInput | userprofileCreateOrConnectWithoutRoleInput[]
    createMany?: userprofileCreateManyRoleInputEnvelope
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
  }

  export type userprofileUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userprofileCreateWithoutRoleInput, userprofileUncheckedCreateWithoutRoleInput> | userprofileCreateWithoutRoleInput[] | userprofileUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutRoleInput | userprofileCreateOrConnectWithoutRoleInput[]
    upsert?: userprofileUpsertWithWhereUniqueWithoutRoleInput | userprofileUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userprofileCreateManyRoleInputEnvelope
    set?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    disconnect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    delete?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    update?: userprofileUpdateWithWhereUniqueWithoutRoleInput | userprofileUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userprofileUpdateManyWithWhereWithoutRoleInput | userprofileUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
  }

  export type userprofileUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userprofileCreateWithoutRoleInput, userprofileUncheckedCreateWithoutRoleInput> | userprofileCreateWithoutRoleInput[] | userprofileUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutRoleInput | userprofileCreateOrConnectWithoutRoleInput[]
    upsert?: userprofileUpsertWithWhereUniqueWithoutRoleInput | userprofileUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userprofileCreateManyRoleInputEnvelope
    set?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    disconnect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    delete?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    update?: userprofileUpdateWithWhereUniqueWithoutRoleInput | userprofileUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userprofileUpdateManyWithWhereWithoutRoleInput | userprofileUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
  }

  export type supplieritemCreateNestedManyWithoutSupplierInput = {
    create?: XOR<supplieritemCreateWithoutSupplierInput, supplieritemUncheckedCreateWithoutSupplierInput> | supplieritemCreateWithoutSupplierInput[] | supplieritemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: supplieritemCreateOrConnectWithoutSupplierInput | supplieritemCreateOrConnectWithoutSupplierInput[]
    createMany?: supplieritemCreateManySupplierInputEnvelope
    connect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
  }

  export type supplieritemUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<supplieritemCreateWithoutSupplierInput, supplieritemUncheckedCreateWithoutSupplierInput> | supplieritemCreateWithoutSupplierInput[] | supplieritemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: supplieritemCreateOrConnectWithoutSupplierInput | supplieritemCreateOrConnectWithoutSupplierInput[]
    createMany?: supplieritemCreateManySupplierInputEnvelope
    connect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
  }

  export type supplieritemUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<supplieritemCreateWithoutSupplierInput, supplieritemUncheckedCreateWithoutSupplierInput> | supplieritemCreateWithoutSupplierInput[] | supplieritemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: supplieritemCreateOrConnectWithoutSupplierInput | supplieritemCreateOrConnectWithoutSupplierInput[]
    upsert?: supplieritemUpsertWithWhereUniqueWithoutSupplierInput | supplieritemUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: supplieritemCreateManySupplierInputEnvelope
    set?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    disconnect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    delete?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    connect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    update?: supplieritemUpdateWithWhereUniqueWithoutSupplierInput | supplieritemUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: supplieritemUpdateManyWithWhereWithoutSupplierInput | supplieritemUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: supplieritemScalarWhereInput | supplieritemScalarWhereInput[]
  }

  export type supplieritemUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<supplieritemCreateWithoutSupplierInput, supplieritemUncheckedCreateWithoutSupplierInput> | supplieritemCreateWithoutSupplierInput[] | supplieritemUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: supplieritemCreateOrConnectWithoutSupplierInput | supplieritemCreateOrConnectWithoutSupplierInput[]
    upsert?: supplieritemUpsertWithWhereUniqueWithoutSupplierInput | supplieritemUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: supplieritemCreateManySupplierInputEnvelope
    set?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    disconnect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    delete?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    connect?: supplieritemWhereUniqueInput | supplieritemWhereUniqueInput[]
    update?: supplieritemUpdateWithWhereUniqueWithoutSupplierInput | supplieritemUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: supplieritemUpdateManyWithWhereWithoutSupplierInput | supplieritemUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: supplieritemScalarWhereInput | supplieritemScalarWhereInput[]
  }

  export type itemCreateNestedOneWithoutSupplieritemInput = {
    create?: XOR<itemCreateWithoutSupplieritemInput, itemUncheckedCreateWithoutSupplieritemInput>
    connectOrCreate?: itemCreateOrConnectWithoutSupplieritemInput
    connect?: itemWhereUniqueInput
  }

  export type supplierCreateNestedOneWithoutSupplieritemInput = {
    create?: XOR<supplierCreateWithoutSupplieritemInput, supplierUncheckedCreateWithoutSupplieritemInput>
    connectOrCreate?: supplierCreateOrConnectWithoutSupplieritemInput
    connect?: supplierWhereUniqueInput
  }

  export type itemUpdateOneRequiredWithoutSupplieritemNestedInput = {
    create?: XOR<itemCreateWithoutSupplieritemInput, itemUncheckedCreateWithoutSupplieritemInput>
    connectOrCreate?: itemCreateOrConnectWithoutSupplieritemInput
    upsert?: itemUpsertWithoutSupplieritemInput
    connect?: itemWhereUniqueInput
    update?: XOR<XOR<itemUpdateToOneWithWhereWithoutSupplieritemInput, itemUpdateWithoutSupplieritemInput>, itemUncheckedUpdateWithoutSupplieritemInput>
  }

  export type supplierUpdateOneRequiredWithoutSupplieritemNestedInput = {
    create?: XOR<supplierCreateWithoutSupplieritemInput, supplierUncheckedCreateWithoutSupplieritemInput>
    connectOrCreate?: supplierCreateOrConnectWithoutSupplieritemInput
    upsert?: supplierUpsertWithoutSupplieritemInput
    connect?: supplierWhereUniqueInput
    update?: XOR<XOR<supplierUpdateToOneWithWhereWithoutSupplieritemInput, supplierUpdateWithoutSupplieritemInput>, supplierUncheckedUpdateWithoutSupplieritemInput>
  }

  export type clientCreateNestedOneWithoutUserprofileInput = {
    create?: XOR<clientCreateWithoutUserprofileInput, clientUncheckedCreateWithoutUserprofileInput>
    connectOrCreate?: clientCreateOrConnectWithoutUserprofileInput
    connect?: clientWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutUserprofileInput = {
    create?: XOR<roleCreateWithoutUserprofileInput, roleUncheckedCreateWithoutUserprofileInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserprofileInput
    connect?: roleWhereUniqueInput
  }

  export type clientUpdateOneWithoutUserprofileNestedInput = {
    create?: XOR<clientCreateWithoutUserprofileInput, clientUncheckedCreateWithoutUserprofileInput>
    connectOrCreate?: clientCreateOrConnectWithoutUserprofileInput
    upsert?: clientUpsertWithoutUserprofileInput
    disconnect?: clientWhereInput | boolean
    delete?: clientWhereInput | boolean
    connect?: clientWhereUniqueInput
    update?: XOR<XOR<clientUpdateToOneWithWhereWithoutUserprofileInput, clientUpdateWithoutUserprofileInput>, clientUncheckedUpdateWithoutUserprofileInput>
  }

  export type roleUpdateOneRequiredWithoutUserprofileNestedInput = {
    create?: XOR<roleCreateWithoutUserprofileInput, roleUncheckedCreateWithoutUserprofileInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserprofileInput
    upsert?: roleUpsertWithoutUserprofileInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUserprofileInput, roleUpdateWithoutUserprofileInput>, roleUncheckedUpdateWithoutUserprofileInput>
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

  export type NestedEnumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
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

  export type NestedEnumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
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

  export type NestedEnumitem_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.item_status | Enumitem_statusFieldRefInput<$PrismaModel>
    in?: $Enums.item_status[] | ListEnumitem_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.item_status[] | ListEnumitem_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumitem_statusFilter<$PrismaModel> | $Enums.item_status
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

  export type NestedEnumitem_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.item_status | Enumitem_statusFieldRefInput<$PrismaModel>
    in?: $Enums.item_status[] | ListEnumitem_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.item_status[] | ListEnumitem_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumitem_statusWithAggregatesFilter<$PrismaModel> | $Enums.item_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumitem_statusFilter<$PrismaModel>
    _max?: NestedEnumitem_statusFilter<$PrismaModel>
  }

  export type NestedEnumreturn_reasonFilter<$PrismaModel = never> = {
    equals?: $Enums.return_reason | Enumreturn_reasonFieldRefInput<$PrismaModel>
    in?: $Enums.return_reason[] | ListEnumreturn_reasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.return_reason[] | ListEnumreturn_reasonFieldRefInput<$PrismaModel>
    not?: NestedEnumreturn_reasonFilter<$PrismaModel> | $Enums.return_reason
  }

  export type NestedEnumreturn_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.return_status | Enumreturn_statusFieldRefInput<$PrismaModel>
    in?: $Enums.return_status[] | ListEnumreturn_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.return_status[] | ListEnumreturn_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumreturn_statusFilter<$PrismaModel> | $Enums.return_status
  }

  export type NestedEnumreturn_reasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.return_reason | Enumreturn_reasonFieldRefInput<$PrismaModel>
    in?: $Enums.return_reason[] | ListEnumreturn_reasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.return_reason[] | ListEnumreturn_reasonFieldRefInput<$PrismaModel>
    not?: NestedEnumreturn_reasonWithAggregatesFilter<$PrismaModel> | $Enums.return_reason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreturn_reasonFilter<$PrismaModel>
    _max?: NestedEnumreturn_reasonFilter<$PrismaModel>
  }

  export type NestedEnumreturn_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.return_status | Enumreturn_statusFieldRefInput<$PrismaModel>
    in?: $Enums.return_status[] | ListEnumreturn_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.return_status[] | ListEnumreturn_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumreturn_statusWithAggregatesFilter<$PrismaModel> | $Enums.return_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreturn_statusFilter<$PrismaModel>
    _max?: NestedEnumreturn_statusFilter<$PrismaModel>
  }

  export type itemCreateWithoutCategoryInput = {
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
    orderproduct?: orderproductCreateNestedManyWithoutItemInput
    supplieritem?: supplieritemCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateWithoutCategoryInput = {
    item_id?: number
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
    orderproduct?: orderproductUncheckedCreateNestedManyWithoutItemInput
    supplieritem?: supplieritemUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemCreateOrConnectWithoutCategoryInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutCategoryInput, itemUncheckedCreateWithoutCategoryInput>
  }

  export type itemCreateManyCategoryInputEnvelope = {
    data: itemCreateManyCategoryInput | itemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type itemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: itemWhereUniqueInput
    update: XOR<itemUpdateWithoutCategoryInput, itemUncheckedUpdateWithoutCategoryInput>
    create: XOR<itemCreateWithoutCategoryInput, itemUncheckedCreateWithoutCategoryInput>
  }

  export type itemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: itemWhereUniqueInput
    data: XOR<itemUpdateWithoutCategoryInput, itemUncheckedUpdateWithoutCategoryInput>
  }

  export type itemUpdateManyWithWhereWithoutCategoryInput = {
    where: itemScalarWhereInput
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type itemScalarWhereInput = {
    AND?: itemScalarWhereInput | itemScalarWhereInput[]
    OR?: itemScalarWhereInput[]
    NOT?: itemScalarWhereInput | itemScalarWhereInput[]
    item_id?: IntFilter<"item"> | number
    category_id?: IntFilter<"item"> | number
    model?: StringFilter<"item"> | string
    image_path?: StringNullableFilter<"item"> | string | null
    status?: Enumitem_statusFilter<"item"> | $Enums.item_status
    manufacturer?: StringFilter<"item"> | string
    unit_price?: FloatFilter<"item"> | number
    date_of_arrival?: DateTimeFilter<"item"> | Date | string
    units_in_stock?: IntFilter<"item"> | number
    faulty_units?: IntFilter<"item"> | number
  }

  export type clientorderCreateWithoutClientInput = {
    status: $Enums.order_status
    timestamp: Date | string
    total_items: number
    total_amount: number
    orderproduct?: orderproductCreateNestedManyWithoutClientorderInput
  }

  export type clientorderUncheckedCreateWithoutClientInput = {
    order_id?: number
    status: $Enums.order_status
    timestamp: Date | string
    total_items: number
    total_amount: number
    orderproduct?: orderproductUncheckedCreateNestedManyWithoutClientorderInput
  }

  export type clientorderCreateOrConnectWithoutClientInput = {
    where: clientorderWhereUniqueInput
    create: XOR<clientorderCreateWithoutClientInput, clientorderUncheckedCreateWithoutClientInput>
  }

  export type clientorderCreateManyClientInputEnvelope = {
    data: clientorderCreateManyClientInput | clientorderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type userprofileCreateWithoutClientInput = {
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
    role: roleCreateNestedOneWithoutUserprofileInput
  }

  export type userprofileUncheckedCreateWithoutClientInput = {
    user_id?: number
    role_id: number
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
  }

  export type userprofileCreateOrConnectWithoutClientInput = {
    where: userprofileWhereUniqueInput
    create: XOR<userprofileCreateWithoutClientInput, userprofileUncheckedCreateWithoutClientInput>
  }

  export type userprofileCreateManyClientInputEnvelope = {
    data: userprofileCreateManyClientInput | userprofileCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type clientorderUpsertWithWhereUniqueWithoutClientInput = {
    where: clientorderWhereUniqueInput
    update: XOR<clientorderUpdateWithoutClientInput, clientorderUncheckedUpdateWithoutClientInput>
    create: XOR<clientorderCreateWithoutClientInput, clientorderUncheckedCreateWithoutClientInput>
  }

  export type clientorderUpdateWithWhereUniqueWithoutClientInput = {
    where: clientorderWhereUniqueInput
    data: XOR<clientorderUpdateWithoutClientInput, clientorderUncheckedUpdateWithoutClientInput>
  }

  export type clientorderUpdateManyWithWhereWithoutClientInput = {
    where: clientorderScalarWhereInput
    data: XOR<clientorderUpdateManyMutationInput, clientorderUncheckedUpdateManyWithoutClientInput>
  }

  export type clientorderScalarWhereInput = {
    AND?: clientorderScalarWhereInput | clientorderScalarWhereInput[]
    OR?: clientorderScalarWhereInput[]
    NOT?: clientorderScalarWhereInput | clientorderScalarWhereInput[]
    order_id?: IntFilter<"clientorder"> | number
    client_id?: IntFilter<"clientorder"> | number
    status?: Enumorder_statusFilter<"clientorder"> | $Enums.order_status
    timestamp?: DateTimeFilter<"clientorder"> | Date | string
    total_items?: IntFilter<"clientorder"> | number
    total_amount?: FloatFilter<"clientorder"> | number
  }

  export type userprofileUpsertWithWhereUniqueWithoutClientInput = {
    where: userprofileWhereUniqueInput
    update: XOR<userprofileUpdateWithoutClientInput, userprofileUncheckedUpdateWithoutClientInput>
    create: XOR<userprofileCreateWithoutClientInput, userprofileUncheckedCreateWithoutClientInput>
  }

  export type userprofileUpdateWithWhereUniqueWithoutClientInput = {
    where: userprofileWhereUniqueInput
    data: XOR<userprofileUpdateWithoutClientInput, userprofileUncheckedUpdateWithoutClientInput>
  }

  export type userprofileUpdateManyWithWhereWithoutClientInput = {
    where: userprofileScalarWhereInput
    data: XOR<userprofileUpdateManyMutationInput, userprofileUncheckedUpdateManyWithoutClientInput>
  }

  export type userprofileScalarWhereInput = {
    AND?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
    OR?: userprofileScalarWhereInput[]
    NOT?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
    user_id?: IntFilter<"userprofile"> | number
    role_id?: IntFilter<"userprofile"> | number
    client_id?: IntNullableFilter<"userprofile"> | number | null
    login?: StringFilter<"userprofile"> | string
    password?: StringFilter<"userprofile"> | string
    image_path?: StringNullableFilter<"userprofile"> | string | null
    full_name?: StringFilter<"userprofile"> | string
    email?: StringFilter<"userprofile"> | string
    phone_number?: IntFilter<"userprofile"> | number
    passport?: IntFilter<"userprofile"> | number
  }

  export type clientCreateWithoutClientorderInput = {
    name: string
    phone_number: number
    address: string
    email: string
    city: string
    region: string
    country: string
    postal_code: number
    userprofile?: userprofileCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateWithoutClientorderInput = {
    client_id?: number
    name: string
    phone_number: number
    address: string
    email: string
    city: string
    region: string
    country: string
    postal_code: number
    userprofile?: userprofileUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientCreateOrConnectWithoutClientorderInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutClientorderInput, clientUncheckedCreateWithoutClientorderInput>
  }

  export type orderproductCreateWithoutClientorderInput = {
    quantity: number
    returned_units?: number
    item: itemCreateNestedOneWithoutOrderproductInput
    orderreturn?: orderreturnCreateNestedManyWithoutOrderproductInput
  }

  export type orderproductUncheckedCreateWithoutClientorderInput = {
    order_product_id?: number
    item_id: number
    quantity: number
    returned_units?: number
    orderreturn?: orderreturnUncheckedCreateNestedManyWithoutOrderproductInput
  }

  export type orderproductCreateOrConnectWithoutClientorderInput = {
    where: orderproductWhereUniqueInput
    create: XOR<orderproductCreateWithoutClientorderInput, orderproductUncheckedCreateWithoutClientorderInput>
  }

  export type orderproductCreateManyClientorderInputEnvelope = {
    data: orderproductCreateManyClientorderInput | orderproductCreateManyClientorderInput[]
    skipDuplicates?: boolean
  }

  export type clientUpsertWithoutClientorderInput = {
    update: XOR<clientUpdateWithoutClientorderInput, clientUncheckedUpdateWithoutClientorderInput>
    create: XOR<clientCreateWithoutClientorderInput, clientUncheckedCreateWithoutClientorderInput>
    where?: clientWhereInput
  }

  export type clientUpdateToOneWithWhereWithoutClientorderInput = {
    where?: clientWhereInput
    data: XOR<clientUpdateWithoutClientorderInput, clientUncheckedUpdateWithoutClientorderInput>
  }

  export type clientUpdateWithoutClientorderInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    userprofile?: userprofileUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutClientorderInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    userprofile?: userprofileUncheckedUpdateManyWithoutClientNestedInput
  }

  export type orderproductUpsertWithWhereUniqueWithoutClientorderInput = {
    where: orderproductWhereUniqueInput
    update: XOR<orderproductUpdateWithoutClientorderInput, orderproductUncheckedUpdateWithoutClientorderInput>
    create: XOR<orderproductCreateWithoutClientorderInput, orderproductUncheckedCreateWithoutClientorderInput>
  }

  export type orderproductUpdateWithWhereUniqueWithoutClientorderInput = {
    where: orderproductWhereUniqueInput
    data: XOR<orderproductUpdateWithoutClientorderInput, orderproductUncheckedUpdateWithoutClientorderInput>
  }

  export type orderproductUpdateManyWithWhereWithoutClientorderInput = {
    where: orderproductScalarWhereInput
    data: XOR<orderproductUpdateManyMutationInput, orderproductUncheckedUpdateManyWithoutClientorderInput>
  }

  export type orderproductScalarWhereInput = {
    AND?: orderproductScalarWhereInput | orderproductScalarWhereInput[]
    OR?: orderproductScalarWhereInput[]
    NOT?: orderproductScalarWhereInput | orderproductScalarWhereInput[]
    order_product_id?: IntFilter<"orderproduct"> | number
    order_id?: IntFilter<"orderproduct"> | number
    item_id?: IntFilter<"orderproduct"> | number
    quantity?: IntFilter<"orderproduct"> | number
    returned_units?: IntFilter<"orderproduct"> | number
  }

  export type categoryCreateWithoutItemInput = {
    name: string
    description: string
    parent_id?: number | null
  }

  export type categoryUncheckedCreateWithoutItemInput = {
    category_id?: number
    name: string
    description: string
    parent_id?: number | null
  }

  export type categoryCreateOrConnectWithoutItemInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutItemInput, categoryUncheckedCreateWithoutItemInput>
  }

  export type orderproductCreateWithoutItemInput = {
    quantity: number
    returned_units?: number
    clientorder: clientorderCreateNestedOneWithoutOrderproductInput
    orderreturn?: orderreturnCreateNestedManyWithoutOrderproductInput
  }

  export type orderproductUncheckedCreateWithoutItemInput = {
    order_product_id?: number
    order_id: number
    quantity: number
    returned_units?: number
    orderreturn?: orderreturnUncheckedCreateNestedManyWithoutOrderproductInput
  }

  export type orderproductCreateOrConnectWithoutItemInput = {
    where: orderproductWhereUniqueInput
    create: XOR<orderproductCreateWithoutItemInput, orderproductUncheckedCreateWithoutItemInput>
  }

  export type orderproductCreateManyItemInputEnvelope = {
    data: orderproductCreateManyItemInput | orderproductCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type supplieritemCreateWithoutItemInput = {
    supplier: supplierCreateNestedOneWithoutSupplieritemInput
  }

  export type supplieritemUncheckedCreateWithoutItemInput = {
    id?: number
    supplier_id: number
  }

  export type supplieritemCreateOrConnectWithoutItemInput = {
    where: supplieritemWhereUniqueInput
    create: XOR<supplieritemCreateWithoutItemInput, supplieritemUncheckedCreateWithoutItemInput>
  }

  export type supplieritemCreateManyItemInputEnvelope = {
    data: supplieritemCreateManyItemInput | supplieritemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutItemInput = {
    update: XOR<categoryUpdateWithoutItemInput, categoryUncheckedUpdateWithoutItemInput>
    create: XOR<categoryCreateWithoutItemInput, categoryUncheckedCreateWithoutItemInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutItemInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutItemInput, categoryUncheckedUpdateWithoutItemInput>
  }

  export type categoryUpdateWithoutItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoryUncheckedUpdateWithoutItemInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderproductUpsertWithWhereUniqueWithoutItemInput = {
    where: orderproductWhereUniqueInput
    update: XOR<orderproductUpdateWithoutItemInput, orderproductUncheckedUpdateWithoutItemInput>
    create: XOR<orderproductCreateWithoutItemInput, orderproductUncheckedCreateWithoutItemInput>
  }

  export type orderproductUpdateWithWhereUniqueWithoutItemInput = {
    where: orderproductWhereUniqueInput
    data: XOR<orderproductUpdateWithoutItemInput, orderproductUncheckedUpdateWithoutItemInput>
  }

  export type orderproductUpdateManyWithWhereWithoutItemInput = {
    where: orderproductScalarWhereInput
    data: XOR<orderproductUpdateManyMutationInput, orderproductUncheckedUpdateManyWithoutItemInput>
  }

  export type supplieritemUpsertWithWhereUniqueWithoutItemInput = {
    where: supplieritemWhereUniqueInput
    update: XOR<supplieritemUpdateWithoutItemInput, supplieritemUncheckedUpdateWithoutItemInput>
    create: XOR<supplieritemCreateWithoutItemInput, supplieritemUncheckedCreateWithoutItemInput>
  }

  export type supplieritemUpdateWithWhereUniqueWithoutItemInput = {
    where: supplieritemWhereUniqueInput
    data: XOR<supplieritemUpdateWithoutItemInput, supplieritemUncheckedUpdateWithoutItemInput>
  }

  export type supplieritemUpdateManyWithWhereWithoutItemInput = {
    where: supplieritemScalarWhereInput
    data: XOR<supplieritemUpdateManyMutationInput, supplieritemUncheckedUpdateManyWithoutItemInput>
  }

  export type supplieritemScalarWhereInput = {
    AND?: supplieritemScalarWhereInput | supplieritemScalarWhereInput[]
    OR?: supplieritemScalarWhereInput[]
    NOT?: supplieritemScalarWhereInput | supplieritemScalarWhereInput[]
    id?: IntFilter<"supplieritem"> | number
    supplier_id?: IntFilter<"supplieritem"> | number
    item_id?: IntFilter<"supplieritem"> | number
  }

  export type clientorderCreateWithoutOrderproductInput = {
    status: $Enums.order_status
    timestamp: Date | string
    total_items: number
    total_amount: number
    client: clientCreateNestedOneWithoutClientorderInput
  }

  export type clientorderUncheckedCreateWithoutOrderproductInput = {
    order_id?: number
    client_id: number
    status: $Enums.order_status
    timestamp: Date | string
    total_items: number
    total_amount: number
  }

  export type clientorderCreateOrConnectWithoutOrderproductInput = {
    where: clientorderWhereUniqueInput
    create: XOR<clientorderCreateWithoutOrderproductInput, clientorderUncheckedCreateWithoutOrderproductInput>
  }

  export type itemCreateWithoutOrderproductInput = {
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
    category: categoryCreateNestedOneWithoutItemInput
    supplieritem?: supplieritemCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateWithoutOrderproductInput = {
    item_id?: number
    category_id: number
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
    supplieritem?: supplieritemUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemCreateOrConnectWithoutOrderproductInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutOrderproductInput, itemUncheckedCreateWithoutOrderproductInput>
  }

  export type orderreturnCreateWithoutOrderproductInput = {
    quantity: number
    reason: $Enums.return_reason
    description: string
    status: $Enums.return_status
    return_date: Date | string
  }

  export type orderreturnUncheckedCreateWithoutOrderproductInput = {
    order_return_id?: number
    quantity: number
    reason: $Enums.return_reason
    description: string
    status: $Enums.return_status
    return_date: Date | string
  }

  export type orderreturnCreateOrConnectWithoutOrderproductInput = {
    where: orderreturnWhereUniqueInput
    create: XOR<orderreturnCreateWithoutOrderproductInput, orderreturnUncheckedCreateWithoutOrderproductInput>
  }

  export type orderreturnCreateManyOrderproductInputEnvelope = {
    data: orderreturnCreateManyOrderproductInput | orderreturnCreateManyOrderproductInput[]
    skipDuplicates?: boolean
  }

  export type clientorderUpsertWithoutOrderproductInput = {
    update: XOR<clientorderUpdateWithoutOrderproductInput, clientorderUncheckedUpdateWithoutOrderproductInput>
    create: XOR<clientorderCreateWithoutOrderproductInput, clientorderUncheckedCreateWithoutOrderproductInput>
    where?: clientorderWhereInput
  }

  export type clientorderUpdateToOneWithWhereWithoutOrderproductInput = {
    where?: clientorderWhereInput
    data: XOR<clientorderUpdateWithoutOrderproductInput, clientorderUncheckedUpdateWithoutOrderproductInput>
  }

  export type clientorderUpdateWithoutOrderproductInput = {
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    client?: clientUpdateOneRequiredWithoutClientorderNestedInput
  }

  export type clientorderUncheckedUpdateWithoutOrderproductInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type itemUpsertWithoutOrderproductInput = {
    update: XOR<itemUpdateWithoutOrderproductInput, itemUncheckedUpdateWithoutOrderproductInput>
    create: XOR<itemCreateWithoutOrderproductInput, itemUncheckedCreateWithoutOrderproductInput>
    where?: itemWhereInput
  }

  export type itemUpdateToOneWithWhereWithoutOrderproductInput = {
    where?: itemWhereInput
    data: XOR<itemUpdateWithoutOrderproductInput, itemUncheckedUpdateWithoutOrderproductInput>
  }

  export type itemUpdateWithoutOrderproductInput = {
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
    category?: categoryUpdateOneRequiredWithoutItemNestedInput
    supplieritem?: supplieritemUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateWithoutOrderproductInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
    supplieritem?: supplieritemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type orderreturnUpsertWithWhereUniqueWithoutOrderproductInput = {
    where: orderreturnWhereUniqueInput
    update: XOR<orderreturnUpdateWithoutOrderproductInput, orderreturnUncheckedUpdateWithoutOrderproductInput>
    create: XOR<orderreturnCreateWithoutOrderproductInput, orderreturnUncheckedCreateWithoutOrderproductInput>
  }

  export type orderreturnUpdateWithWhereUniqueWithoutOrderproductInput = {
    where: orderreturnWhereUniqueInput
    data: XOR<orderreturnUpdateWithoutOrderproductInput, orderreturnUncheckedUpdateWithoutOrderproductInput>
  }

  export type orderreturnUpdateManyWithWhereWithoutOrderproductInput = {
    where: orderreturnScalarWhereInput
    data: XOR<orderreturnUpdateManyMutationInput, orderreturnUncheckedUpdateManyWithoutOrderproductInput>
  }

  export type orderreturnScalarWhereInput = {
    AND?: orderreturnScalarWhereInput | orderreturnScalarWhereInput[]
    OR?: orderreturnScalarWhereInput[]
    NOT?: orderreturnScalarWhereInput | orderreturnScalarWhereInput[]
    order_return_id?: IntFilter<"orderreturn"> | number
    order_product_id?: IntFilter<"orderreturn"> | number
    quantity?: IntFilter<"orderreturn"> | number
    reason?: Enumreturn_reasonFilter<"orderreturn"> | $Enums.return_reason
    description?: StringFilter<"orderreturn"> | string
    status?: Enumreturn_statusFilter<"orderreturn"> | $Enums.return_status
    return_date?: DateTimeFilter<"orderreturn"> | Date | string
  }

  export type orderproductCreateWithoutOrderreturnInput = {
    quantity: number
    returned_units?: number
    clientorder: clientorderCreateNestedOneWithoutOrderproductInput
    item: itemCreateNestedOneWithoutOrderproductInput
  }

  export type orderproductUncheckedCreateWithoutOrderreturnInput = {
    order_product_id?: number
    order_id: number
    item_id: number
    quantity: number
    returned_units?: number
  }

  export type orderproductCreateOrConnectWithoutOrderreturnInput = {
    where: orderproductWhereUniqueInput
    create: XOR<orderproductCreateWithoutOrderreturnInput, orderproductUncheckedCreateWithoutOrderreturnInput>
  }

  export type orderproductUpsertWithoutOrderreturnInput = {
    update: XOR<orderproductUpdateWithoutOrderreturnInput, orderproductUncheckedUpdateWithoutOrderreturnInput>
    create: XOR<orderproductCreateWithoutOrderreturnInput, orderproductUncheckedCreateWithoutOrderreturnInput>
    where?: orderproductWhereInput
  }

  export type orderproductUpdateToOneWithWhereWithoutOrderreturnInput = {
    where?: orderproductWhereInput
    data: XOR<orderproductUpdateWithoutOrderreturnInput, orderproductUncheckedUpdateWithoutOrderreturnInput>
  }

  export type orderproductUpdateWithoutOrderreturnInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
    clientorder?: clientorderUpdateOneRequiredWithoutOrderproductNestedInput
    item?: itemUpdateOneRequiredWithoutOrderproductNestedInput
  }

  export type orderproductUncheckedUpdateWithoutOrderreturnInput = {
    order_product_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
  }

  export type userprofileCreateWithoutRoleInput = {
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
    client?: clientCreateNestedOneWithoutUserprofileInput
  }

  export type userprofileUncheckedCreateWithoutRoleInput = {
    user_id?: number
    client_id?: number | null
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
  }

  export type userprofileCreateOrConnectWithoutRoleInput = {
    where: userprofileWhereUniqueInput
    create: XOR<userprofileCreateWithoutRoleInput, userprofileUncheckedCreateWithoutRoleInput>
  }

  export type userprofileCreateManyRoleInputEnvelope = {
    data: userprofileCreateManyRoleInput | userprofileCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type userprofileUpsertWithWhereUniqueWithoutRoleInput = {
    where: userprofileWhereUniqueInput
    update: XOR<userprofileUpdateWithoutRoleInput, userprofileUncheckedUpdateWithoutRoleInput>
    create: XOR<userprofileCreateWithoutRoleInput, userprofileUncheckedCreateWithoutRoleInput>
  }

  export type userprofileUpdateWithWhereUniqueWithoutRoleInput = {
    where: userprofileWhereUniqueInput
    data: XOR<userprofileUpdateWithoutRoleInput, userprofileUncheckedUpdateWithoutRoleInput>
  }

  export type userprofileUpdateManyWithWhereWithoutRoleInput = {
    where: userprofileScalarWhereInput
    data: XOR<userprofileUpdateManyMutationInput, userprofileUncheckedUpdateManyWithoutRoleInput>
  }

  export type supplieritemCreateWithoutSupplierInput = {
    item: itemCreateNestedOneWithoutSupplieritemInput
  }

  export type supplieritemUncheckedCreateWithoutSupplierInput = {
    id?: number
    item_id: number
  }

  export type supplieritemCreateOrConnectWithoutSupplierInput = {
    where: supplieritemWhereUniqueInput
    create: XOR<supplieritemCreateWithoutSupplierInput, supplieritemUncheckedCreateWithoutSupplierInput>
  }

  export type supplieritemCreateManySupplierInputEnvelope = {
    data: supplieritemCreateManySupplierInput | supplieritemCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type supplieritemUpsertWithWhereUniqueWithoutSupplierInput = {
    where: supplieritemWhereUniqueInput
    update: XOR<supplieritemUpdateWithoutSupplierInput, supplieritemUncheckedUpdateWithoutSupplierInput>
    create: XOR<supplieritemCreateWithoutSupplierInput, supplieritemUncheckedCreateWithoutSupplierInput>
  }

  export type supplieritemUpdateWithWhereUniqueWithoutSupplierInput = {
    where: supplieritemWhereUniqueInput
    data: XOR<supplieritemUpdateWithoutSupplierInput, supplieritemUncheckedUpdateWithoutSupplierInput>
  }

  export type supplieritemUpdateManyWithWhereWithoutSupplierInput = {
    where: supplieritemScalarWhereInput
    data: XOR<supplieritemUpdateManyMutationInput, supplieritemUncheckedUpdateManyWithoutSupplierInput>
  }

  export type itemCreateWithoutSupplieritemInput = {
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
    category: categoryCreateNestedOneWithoutItemInput
    orderproduct?: orderproductCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateWithoutSupplieritemInput = {
    item_id?: number
    category_id: number
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
    orderproduct?: orderproductUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemCreateOrConnectWithoutSupplieritemInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutSupplieritemInput, itemUncheckedCreateWithoutSupplieritemInput>
  }

  export type supplierCreateWithoutSupplieritemInput = {
    name: string
    email: string
    address: string
    city: string
    region: string
    country: string
    postal_code: number
    phone_number: number
  }

  export type supplierUncheckedCreateWithoutSupplieritemInput = {
    supplier_id?: number
    name: string
    email: string
    address: string
    city: string
    region: string
    country: string
    postal_code: number
    phone_number: number
  }

  export type supplierCreateOrConnectWithoutSupplieritemInput = {
    where: supplierWhereUniqueInput
    create: XOR<supplierCreateWithoutSupplieritemInput, supplierUncheckedCreateWithoutSupplieritemInput>
  }

  export type itemUpsertWithoutSupplieritemInput = {
    update: XOR<itemUpdateWithoutSupplieritemInput, itemUncheckedUpdateWithoutSupplieritemInput>
    create: XOR<itemCreateWithoutSupplieritemInput, itemUncheckedCreateWithoutSupplieritemInput>
    where?: itemWhereInput
  }

  export type itemUpdateToOneWithWhereWithoutSupplieritemInput = {
    where?: itemWhereInput
    data: XOR<itemUpdateWithoutSupplieritemInput, itemUncheckedUpdateWithoutSupplieritemInput>
  }

  export type itemUpdateWithoutSupplieritemInput = {
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
    category?: categoryUpdateOneRequiredWithoutItemNestedInput
    orderproduct?: orderproductUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateWithoutSupplieritemInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
    orderproduct?: orderproductUncheckedUpdateManyWithoutItemNestedInput
  }

  export type supplierUpsertWithoutSupplieritemInput = {
    update: XOR<supplierUpdateWithoutSupplieritemInput, supplierUncheckedUpdateWithoutSupplieritemInput>
    create: XOR<supplierCreateWithoutSupplieritemInput, supplierUncheckedCreateWithoutSupplieritemInput>
    where?: supplierWhereInput
  }

  export type supplierUpdateToOneWithWhereWithoutSupplieritemInput = {
    where?: supplierWhereInput
    data: XOR<supplierUpdateWithoutSupplieritemInput, supplierUncheckedUpdateWithoutSupplieritemInput>
  }

  export type supplierUpdateWithoutSupplieritemInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
  }

  export type supplierUncheckedUpdateWithoutSupplieritemInput = {
    supplier_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
  }

  export type clientCreateWithoutUserprofileInput = {
    name: string
    phone_number: number
    address: string
    email: string
    city: string
    region: string
    country: string
    postal_code: number
    clientorder?: clientorderCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateWithoutUserprofileInput = {
    client_id?: number
    name: string
    phone_number: number
    address: string
    email: string
    city: string
    region: string
    country: string
    postal_code: number
    clientorder?: clientorderUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientCreateOrConnectWithoutUserprofileInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutUserprofileInput, clientUncheckedCreateWithoutUserprofileInput>
  }

  export type roleCreateWithoutUserprofileInput = {
    name: string
    description: string
  }

  export type roleUncheckedCreateWithoutUserprofileInput = {
    role_id?: number
    name: string
    description: string
  }

  export type roleCreateOrConnectWithoutUserprofileInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUserprofileInput, roleUncheckedCreateWithoutUserprofileInput>
  }

  export type clientUpsertWithoutUserprofileInput = {
    update: XOR<clientUpdateWithoutUserprofileInput, clientUncheckedUpdateWithoutUserprofileInput>
    create: XOR<clientCreateWithoutUserprofileInput, clientUncheckedCreateWithoutUserprofileInput>
    where?: clientWhereInput
  }

  export type clientUpdateToOneWithWhereWithoutUserprofileInput = {
    where?: clientWhereInput
    data: XOR<clientUpdateWithoutUserprofileInput, clientUncheckedUpdateWithoutUserprofileInput>
  }

  export type clientUpdateWithoutUserprofileInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    clientorder?: clientorderUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutUserprofileInput = {
    client_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    clientorder?: clientorderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type roleUpsertWithoutUserprofileInput = {
    update: XOR<roleUpdateWithoutUserprofileInput, roleUncheckedUpdateWithoutUserprofileInput>
    create: XOR<roleCreateWithoutUserprofileInput, roleUncheckedCreateWithoutUserprofileInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUserprofileInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUserprofileInput, roleUncheckedUpdateWithoutUserprofileInput>
  }

  export type roleUpdateWithoutUserprofileInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateWithoutUserprofileInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type itemCreateManyCategoryInput = {
    item_id?: number
    model: string
    image_path?: string | null
    status: $Enums.item_status
    manufacturer: string
    unit_price: number
    date_of_arrival: Date | string
    units_in_stock: number
    faulty_units: number
  }

  export type itemUpdateWithoutCategoryInput = {
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
    orderproduct?: orderproductUpdateManyWithoutItemNestedInput
    supplieritem?: supplieritemUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateWithoutCategoryInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
    orderproduct?: orderproductUncheckedUpdateManyWithoutItemNestedInput
    supplieritem?: supplieritemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateManyWithoutCategoryInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumitem_statusFieldUpdateOperationsInput | $Enums.item_status
    manufacturer?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    date_of_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    units_in_stock?: IntFieldUpdateOperationsInput | number
    faulty_units?: IntFieldUpdateOperationsInput | number
  }

  export type clientorderCreateManyClientInput = {
    order_id?: number
    status: $Enums.order_status
    timestamp: Date | string
    total_items: number
    total_amount: number
  }

  export type userprofileCreateManyClientInput = {
    user_id?: number
    role_id: number
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
  }

  export type clientorderUpdateWithoutClientInput = {
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    orderproduct?: orderproductUpdateManyWithoutClientorderNestedInput
  }

  export type clientorderUncheckedUpdateWithoutClientInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    orderproduct?: orderproductUncheckedUpdateManyWithoutClientorderNestedInput
  }

  export type clientorderUncheckedUpdateManyWithoutClientInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type userprofileUpdateWithoutClientInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
    role?: roleUpdateOneRequiredWithoutUserprofileNestedInput
  }

  export type userprofileUncheckedUpdateWithoutClientInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
  }

  export type userprofileUncheckedUpdateManyWithoutClientInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
  }

  export type orderproductCreateManyClientorderInput = {
    order_product_id?: number
    item_id: number
    quantity: number
    returned_units?: number
  }

  export type orderproductUpdateWithoutClientorderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
    item?: itemUpdateOneRequiredWithoutOrderproductNestedInput
    orderreturn?: orderreturnUpdateManyWithoutOrderproductNestedInput
  }

  export type orderproductUncheckedUpdateWithoutClientorderInput = {
    order_product_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
    orderreturn?: orderreturnUncheckedUpdateManyWithoutOrderproductNestedInput
  }

  export type orderproductUncheckedUpdateManyWithoutClientorderInput = {
    order_product_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
  }

  export type orderproductCreateManyItemInput = {
    order_product_id?: number
    order_id: number
    quantity: number
    returned_units?: number
  }

  export type supplieritemCreateManyItemInput = {
    id?: number
    supplier_id: number
  }

  export type orderproductUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
    clientorder?: clientorderUpdateOneRequiredWithoutOrderproductNestedInput
    orderreturn?: orderreturnUpdateManyWithoutOrderproductNestedInput
  }

  export type orderproductUncheckedUpdateWithoutItemInput = {
    order_product_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
    orderreturn?: orderreturnUncheckedUpdateManyWithoutOrderproductNestedInput
  }

  export type orderproductUncheckedUpdateManyWithoutItemInput = {
    order_product_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    returned_units?: IntFieldUpdateOperationsInput | number
  }

  export type supplieritemUpdateWithoutItemInput = {
    supplier?: supplierUpdateOneRequiredWithoutSupplieritemNestedInput
  }

  export type supplieritemUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: IntFieldUpdateOperationsInput | number
  }

  export type supplieritemUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: IntFieldUpdateOperationsInput | number
  }

  export type orderreturnCreateManyOrderproductInput = {
    order_return_id?: number
    quantity: number
    reason: $Enums.return_reason
    description: string
    status: $Enums.return_status
    return_date: Date | string
  }

  export type orderreturnUpdateWithoutOrderproductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: Enumreturn_reasonFieldUpdateOperationsInput | $Enums.return_reason
    description?: StringFieldUpdateOperationsInput | string
    status?: Enumreturn_statusFieldUpdateOperationsInput | $Enums.return_status
    return_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderreturnUncheckedUpdateWithoutOrderproductInput = {
    order_return_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: Enumreturn_reasonFieldUpdateOperationsInput | $Enums.return_reason
    description?: StringFieldUpdateOperationsInput | string
    status?: Enumreturn_statusFieldUpdateOperationsInput | $Enums.return_status
    return_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderreturnUncheckedUpdateManyWithoutOrderproductInput = {
    order_return_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    reason?: Enumreturn_reasonFieldUpdateOperationsInput | $Enums.return_reason
    description?: StringFieldUpdateOperationsInput | string
    status?: Enumreturn_statusFieldUpdateOperationsInput | $Enums.return_status
    return_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userprofileCreateManyRoleInput = {
    user_id?: number
    client_id?: number | null
    login: string
    password: string
    image_path?: string | null
    full_name: string
    email: string
    phone_number: number
    passport: number
  }

  export type userprofileUpdateWithoutRoleInput = {
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
    client?: clientUpdateOneWithoutUserprofileNestedInput
  }

  export type userprofileUncheckedUpdateWithoutRoleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
  }

  export type userprofileUncheckedUpdateManyWithoutRoleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    client_id?: NullableIntFieldUpdateOperationsInput | number | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: IntFieldUpdateOperationsInput | number
    passport?: IntFieldUpdateOperationsInput | number
  }

  export type supplieritemCreateManySupplierInput = {
    id?: number
    item_id: number
  }

  export type supplieritemUpdateWithoutSupplierInput = {
    item?: itemUpdateOneRequiredWithoutSupplieritemNestedInput
  }

  export type supplieritemUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
  }

  export type supplieritemUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
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