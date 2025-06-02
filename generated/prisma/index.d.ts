
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Dtc
 * 
 */
export type Dtc = $Result.DefaultSelection<Prisma.$DtcPayload>
/**
 * Model DtcCause
 * 
 */
export type DtcCause = $Result.DefaultSelection<Prisma.$DtcCausePayload>
/**
 * Model DtcSolution
 * 
 */
export type DtcSolution = $Result.DefaultSelection<Prisma.$DtcSolutionPayload>
/**
 * Model Symptom
 * 
 */
export type Symptom = $Result.DefaultSelection<Prisma.$SymptomPayload>
/**
 * Model Diagnostic
 * 
 */
export type Diagnostic = $Result.DefaultSelection<Prisma.$DiagnosticPayload>
/**
 * Model DiagnosticDtc
 * 
 */
export type DiagnosticDtc = $Result.DefaultSelection<Prisma.$DiagnosticDtcPayload>
/**
 * Model DiagnosticDtcSolution
 * 
 */
export type DiagnosticDtcSolution = $Result.DefaultSelection<Prisma.$DiagnosticDtcSolutionPayload>
/**
 * Model DiagnosticSymptom
 * 
 */
export type DiagnosticSymptom = $Result.DefaultSelection<Prisma.$DiagnosticSymptomPayload>
/**
 * Model ScannerFile
 * 
 */
export type ScannerFile = $Result.DefaultSelection<Prisma.$ScannerFilePayload>
/**
 * Model Help
 * 
 */
export type Help = $Result.DefaultSelection<Prisma.$HelpPayload>

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dtc`: Exposes CRUD operations for the **Dtc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dtcs
    * const dtcs = await prisma.dtc.findMany()
    * ```
    */
  get dtc(): Prisma.DtcDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dtcCause`: Exposes CRUD operations for the **DtcCause** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DtcCauses
    * const dtcCauses = await prisma.dtcCause.findMany()
    * ```
    */
  get dtcCause(): Prisma.DtcCauseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dtcSolution`: Exposes CRUD operations for the **DtcSolution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DtcSolutions
    * const dtcSolutions = await prisma.dtcSolution.findMany()
    * ```
    */
  get dtcSolution(): Prisma.DtcSolutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.symptom`: Exposes CRUD operations for the **Symptom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Symptoms
    * const symptoms = await prisma.symptom.findMany()
    * ```
    */
  get symptom(): Prisma.SymptomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnostic`: Exposes CRUD operations for the **Diagnostic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnostics
    * const diagnostics = await prisma.diagnostic.findMany()
    * ```
    */
  get diagnostic(): Prisma.DiagnosticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosticDtc`: Exposes CRUD operations for the **DiagnosticDtc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosticDtcs
    * const diagnosticDtcs = await prisma.diagnosticDtc.findMany()
    * ```
    */
  get diagnosticDtc(): Prisma.DiagnosticDtcDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosticDtcSolution`: Exposes CRUD operations for the **DiagnosticDtcSolution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosticDtcSolutions
    * const diagnosticDtcSolutions = await prisma.diagnosticDtcSolution.findMany()
    * ```
    */
  get diagnosticDtcSolution(): Prisma.DiagnosticDtcSolutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosticSymptom`: Exposes CRUD operations for the **DiagnosticSymptom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosticSymptoms
    * const diagnosticSymptoms = await prisma.diagnosticSymptom.findMany()
    * ```
    */
  get diagnosticSymptom(): Prisma.DiagnosticSymptomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scannerFile`: Exposes CRUD operations for the **ScannerFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScannerFiles
    * const scannerFiles = await prisma.scannerFile.findMany()
    * ```
    */
  get scannerFile(): Prisma.ScannerFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.help`: Exposes CRUD operations for the **Help** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Helps
    * const helps = await prisma.help.findMany()
    * ```
    */
  get help(): Prisma.HelpDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Vehicle: 'Vehicle',
    Dtc: 'Dtc',
    DtcCause: 'DtcCause',
    DtcSolution: 'DtcSolution',
    Symptom: 'Symptom',
    Diagnostic: 'Diagnostic',
    DiagnosticDtc: 'DiagnosticDtc',
    DiagnosticDtcSolution: 'DiagnosticDtcSolution',
    DiagnosticSymptom: 'DiagnosticSymptom',
    ScannerFile: 'ScannerFile',
    Help: 'Help'
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
      modelProps: "user" | "vehicle" | "dtc" | "dtcCause" | "dtcSolution" | "symptom" | "diagnostic" | "diagnosticDtc" | "diagnosticDtcSolution" | "diagnosticSymptom" | "scannerFile" | "help"
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
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Dtc: {
        payload: Prisma.$DtcPayload<ExtArgs>
        fields: Prisma.DtcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DtcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DtcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload>
          }
          findFirst: {
            args: Prisma.DtcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DtcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload>
          }
          findMany: {
            args: Prisma.DtcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload>[]
          }
          create: {
            args: Prisma.DtcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload>
          }
          createMany: {
            args: Prisma.DtcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DtcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload>
          }
          update: {
            args: Prisma.DtcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload>
          }
          deleteMany: {
            args: Prisma.DtcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DtcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DtcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcPayload>
          }
          aggregate: {
            args: Prisma.DtcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDtc>
          }
          groupBy: {
            args: Prisma.DtcGroupByArgs<ExtArgs>
            result: $Utils.Optional<DtcGroupByOutputType>[]
          }
          count: {
            args: Prisma.DtcCountArgs<ExtArgs>
            result: $Utils.Optional<DtcCountAggregateOutputType> | number
          }
        }
      }
      DtcCause: {
        payload: Prisma.$DtcCausePayload<ExtArgs>
        fields: Prisma.DtcCauseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DtcCauseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DtcCauseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload>
          }
          findFirst: {
            args: Prisma.DtcCauseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DtcCauseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload>
          }
          findMany: {
            args: Prisma.DtcCauseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload>[]
          }
          create: {
            args: Prisma.DtcCauseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload>
          }
          createMany: {
            args: Prisma.DtcCauseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DtcCauseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload>
          }
          update: {
            args: Prisma.DtcCauseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload>
          }
          deleteMany: {
            args: Prisma.DtcCauseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DtcCauseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DtcCauseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcCausePayload>
          }
          aggregate: {
            args: Prisma.DtcCauseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDtcCause>
          }
          groupBy: {
            args: Prisma.DtcCauseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DtcCauseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DtcCauseCountArgs<ExtArgs>
            result: $Utils.Optional<DtcCauseCountAggregateOutputType> | number
          }
        }
      }
      DtcSolution: {
        payload: Prisma.$DtcSolutionPayload<ExtArgs>
        fields: Prisma.DtcSolutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DtcSolutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DtcSolutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload>
          }
          findFirst: {
            args: Prisma.DtcSolutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DtcSolutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload>
          }
          findMany: {
            args: Prisma.DtcSolutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload>[]
          }
          create: {
            args: Prisma.DtcSolutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload>
          }
          createMany: {
            args: Prisma.DtcSolutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DtcSolutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload>
          }
          update: {
            args: Prisma.DtcSolutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload>
          }
          deleteMany: {
            args: Prisma.DtcSolutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DtcSolutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DtcSolutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DtcSolutionPayload>
          }
          aggregate: {
            args: Prisma.DtcSolutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDtcSolution>
          }
          groupBy: {
            args: Prisma.DtcSolutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DtcSolutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DtcSolutionCountArgs<ExtArgs>
            result: $Utils.Optional<DtcSolutionCountAggregateOutputType> | number
          }
        }
      }
      Symptom: {
        payload: Prisma.$SymptomPayload<ExtArgs>
        fields: Prisma.SymptomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SymptomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SymptomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          findFirst: {
            args: Prisma.SymptomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SymptomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          findMany: {
            args: Prisma.SymptomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>[]
          }
          create: {
            args: Prisma.SymptomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          createMany: {
            args: Prisma.SymptomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SymptomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          update: {
            args: Prisma.SymptomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          deleteMany: {
            args: Prisma.SymptomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SymptomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SymptomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          aggregate: {
            args: Prisma.SymptomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSymptom>
          }
          groupBy: {
            args: Prisma.SymptomGroupByArgs<ExtArgs>
            result: $Utils.Optional<SymptomGroupByOutputType>[]
          }
          count: {
            args: Prisma.SymptomCountArgs<ExtArgs>
            result: $Utils.Optional<SymptomCountAggregateOutputType> | number
          }
        }
      }
      Diagnostic: {
        payload: Prisma.$DiagnosticPayload<ExtArgs>
        fields: Prisma.DiagnosticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          findMany: {
            args: Prisma.DiagnosticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>[]
          }
          create: {
            args: Prisma.DiagnosticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          createMany: {
            args: Prisma.DiagnosticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          update: {
            args: Prisma.DiagnosticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnostic>
          }
          groupBy: {
            args: Prisma.DiagnosticGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticCountAggregateOutputType> | number
          }
        }
      }
      DiagnosticDtc: {
        payload: Prisma.$DiagnosticDtcPayload<ExtArgs>
        fields: Prisma.DiagnosticDtcFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticDtcFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticDtcFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticDtcFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticDtcFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload>
          }
          findMany: {
            args: Prisma.DiagnosticDtcFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload>[]
          }
          create: {
            args: Prisma.DiagnosticDtcCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload>
          }
          createMany: {
            args: Prisma.DiagnosticDtcCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosticDtcDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload>
          }
          update: {
            args: Prisma.DiagnosticDtcUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticDtcDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticDtcUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosticDtcUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticDtcAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosticDtc>
          }
          groupBy: {
            args: Prisma.DiagnosticDtcGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticDtcGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticDtcCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticDtcCountAggregateOutputType> | number
          }
        }
      }
      DiagnosticDtcSolution: {
        payload: Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>
        fields: Prisma.DiagnosticDtcSolutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticDtcSolutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticDtcSolutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticDtcSolutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticDtcSolutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload>
          }
          findMany: {
            args: Prisma.DiagnosticDtcSolutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload>[]
          }
          create: {
            args: Prisma.DiagnosticDtcSolutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload>
          }
          createMany: {
            args: Prisma.DiagnosticDtcSolutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosticDtcSolutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload>
          }
          update: {
            args: Prisma.DiagnosticDtcSolutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticDtcSolutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticDtcSolutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosticDtcSolutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticDtcSolutionPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticDtcSolutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosticDtcSolution>
          }
          groupBy: {
            args: Prisma.DiagnosticDtcSolutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticDtcSolutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticDtcSolutionCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticDtcSolutionCountAggregateOutputType> | number
          }
        }
      }
      DiagnosticSymptom: {
        payload: Prisma.$DiagnosticSymptomPayload<ExtArgs>
        fields: Prisma.DiagnosticSymptomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticSymptomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticSymptomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticSymptomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticSymptomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload>
          }
          findMany: {
            args: Prisma.DiagnosticSymptomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload>[]
          }
          create: {
            args: Prisma.DiagnosticSymptomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload>
          }
          createMany: {
            args: Prisma.DiagnosticSymptomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosticSymptomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload>
          }
          update: {
            args: Prisma.DiagnosticSymptomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticSymptomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticSymptomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosticSymptomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticSymptomPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticSymptomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosticSymptom>
          }
          groupBy: {
            args: Prisma.DiagnosticSymptomGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticSymptomGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticSymptomCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticSymptomCountAggregateOutputType> | number
          }
        }
      }
      ScannerFile: {
        payload: Prisma.$ScannerFilePayload<ExtArgs>
        fields: Prisma.ScannerFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScannerFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScannerFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload>
          }
          findFirst: {
            args: Prisma.ScannerFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScannerFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload>
          }
          findMany: {
            args: Prisma.ScannerFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload>[]
          }
          create: {
            args: Prisma.ScannerFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload>
          }
          createMany: {
            args: Prisma.ScannerFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScannerFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload>
          }
          update: {
            args: Prisma.ScannerFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload>
          }
          deleteMany: {
            args: Prisma.ScannerFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScannerFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScannerFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScannerFilePayload>
          }
          aggregate: {
            args: Prisma.ScannerFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScannerFile>
          }
          groupBy: {
            args: Prisma.ScannerFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScannerFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScannerFileCountArgs<ExtArgs>
            result: $Utils.Optional<ScannerFileCountAggregateOutputType> | number
          }
        }
      }
      Help: {
        payload: Prisma.$HelpPayload<ExtArgs>
        fields: Prisma.HelpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HelpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HelpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          findFirst: {
            args: Prisma.HelpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HelpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          findMany: {
            args: Prisma.HelpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>[]
          }
          create: {
            args: Prisma.HelpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          createMany: {
            args: Prisma.HelpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HelpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          update: {
            args: Prisma.HelpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          deleteMany: {
            args: Prisma.HelpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HelpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HelpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          aggregate: {
            args: Prisma.HelpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHelp>
          }
          groupBy: {
            args: Prisma.HelpGroupByArgs<ExtArgs>
            result: $Utils.Optional<HelpGroupByOutputType>[]
          }
          count: {
            args: Prisma.HelpCountArgs<ExtArgs>
            result: $Utils.Optional<HelpCountAggregateOutputType> | number
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
    user?: UserOmit
    vehicle?: VehicleOmit
    dtc?: DtcOmit
    dtcCause?: DtcCauseOmit
    dtcSolution?: DtcSolutionOmit
    symptom?: SymptomOmit
    diagnostic?: DiagnosticOmit
    diagnosticDtc?: DiagnosticDtcOmit
    diagnosticDtcSolution?: DiagnosticDtcSolutionOmit
    diagnosticSymptom?: DiagnosticSymptomOmit
    scannerFile?: ScannerFileOmit
    help?: HelpOmit
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
    vehicles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
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
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    diagnostics: number
    scannerFiles: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostics?: boolean | VehicleCountOutputTypeCountDiagnosticsArgs
    scannerFiles?: boolean | VehicleCountOutputTypeCountScannerFilesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountDiagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountScannerFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScannerFileWhereInput
  }


  /**
   * Count Type DtcCountOutputType
   */

  export type DtcCountOutputType = {
    causes: number
    solutions: number
    diagnostics: number
  }

  export type DtcCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    causes?: boolean | DtcCountOutputTypeCountCausesArgs
    solutions?: boolean | DtcCountOutputTypeCountSolutionsArgs
    diagnostics?: boolean | DtcCountOutputTypeCountDiagnosticsArgs
  }

  // Custom InputTypes
  /**
   * DtcCountOutputType without action
   */
  export type DtcCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCountOutputType
     */
    select?: DtcCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DtcCountOutputType without action
   */
  export type DtcCountOutputTypeCountCausesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DtcCauseWhereInput
  }

  /**
   * DtcCountOutputType without action
   */
  export type DtcCountOutputTypeCountSolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DtcSolutionWhereInput
  }

  /**
   * DtcCountOutputType without action
   */
  export type DtcCountOutputTypeCountDiagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticDtcWhereInput
  }


  /**
   * Count Type SymptomCountOutputType
   */

  export type SymptomCountOutputType = {
    diagnostics: number
  }

  export type SymptomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostics?: boolean | SymptomCountOutputTypeCountDiagnosticsArgs
  }

  // Custom InputTypes
  /**
   * SymptomCountOutputType without action
   */
  export type SymptomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomCountOutputType
     */
    select?: SymptomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SymptomCountOutputType without action
   */
  export type SymptomCountOutputTypeCountDiagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticSymptomWhereInput
  }


  /**
   * Count Type DiagnosticCountOutputType
   */

  export type DiagnosticCountOutputType = {
    dtcs: number
    symptoms: number
  }

  export type DiagnosticCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dtcs?: boolean | DiagnosticCountOutputTypeCountDtcsArgs
    symptoms?: boolean | DiagnosticCountOutputTypeCountSymptomsArgs
  }

  // Custom InputTypes
  /**
   * DiagnosticCountOutputType without action
   */
  export type DiagnosticCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticCountOutputType
     */
    select?: DiagnosticCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosticCountOutputType without action
   */
  export type DiagnosticCountOutputTypeCountDtcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticDtcWhereInput
  }

  /**
   * DiagnosticCountOutputType without action
   */
  export type DiagnosticCountOutputTypeCountSymptomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticSymptomWhereInput
  }


  /**
   * Count Type DiagnosticDtcCountOutputType
   */

  export type DiagnosticDtcCountOutputType = {
    diagnosticDtcSolutions: number
  }

  export type DiagnosticDtcCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticDtcSolutions?: boolean | DiagnosticDtcCountOutputTypeCountDiagnosticDtcSolutionsArgs
  }

  // Custom InputTypes
  /**
   * DiagnosticDtcCountOutputType without action
   */
  export type DiagnosticDtcCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcCountOutputType
     */
    select?: DiagnosticDtcCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosticDtcCountOutputType without action
   */
  export type DiagnosticDtcCountOutputTypeCountDiagnosticDtcSolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticDtcSolutionWhereInput
  }


  /**
   * Count Type ScannerFileCountOutputType
   */

  export type ScannerFileCountOutputType = {
    diagnostics: number
  }

  export type ScannerFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostics?: boolean | ScannerFileCountOutputTypeCountDiagnosticsArgs
  }

  // Custom InputTypes
  /**
   * ScannerFileCountOutputType without action
   */
  export type ScannerFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFileCountOutputType
     */
    select?: ScannerFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScannerFileCountOutputType without action
   */
  export type ScannerFileCountOutputTypeCountDiagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticWhereInput
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
    name: string | null
    role: string | null
    email: string | null
    password: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    email: string | null
    password: string | null
    active: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    role: number
    email: number
    password: number
    active: number
    createdAt: number
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
    name?: true
    role?: true
    email?: true
    password?: true
    active?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    password?: true
    active?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    email?: true
    password?: true
    active?: true
    createdAt?: true
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
    name: string
    role: string
    email: string
    password: string
    active: boolean
    createdAt: Date
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
    name?: boolean
    role?: boolean
    email?: boolean
    password?: boolean
    active?: boolean
    createdAt?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    email?: boolean
    password?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "email" | "password" | "active" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      role: string
      email: string
      password: string
      active: boolean
      createdAt: Date
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
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
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
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    id: number | null
    year: number | null
    km: number | null
    userId: number | null
  }

  export type VehicleSumAggregateOutputType = {
    id: number | null
    year: number | null
    km: number | null
    userId: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: number | null
    marca: string | null
    modelo: string | null
    year: number | null
    motor: string | null
    vin: string | null
    patente: string | null
    km: number | null
    fechaAdq: Date | null
    userId: number | null
    lastDiag: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: number | null
    marca: string | null
    modelo: string | null
    year: number | null
    motor: string | null
    vin: string | null
    patente: string | null
    km: number | null
    fechaAdq: Date | null
    userId: number | null
    lastDiag: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    marca: number
    modelo: number
    year: number
    motor: number
    vin: number
    patente: number
    km: number
    fechaAdq: number
    userId: number
    lastDiag: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    id?: true
    year?: true
    km?: true
    userId?: true
  }

  export type VehicleSumAggregateInputType = {
    id?: true
    year?: true
    km?: true
    userId?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    year?: true
    motor?: true
    vin?: true
    patente?: true
    km?: true
    fechaAdq?: true
    userId?: true
    lastDiag?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    year?: true
    motor?: true
    vin?: true
    patente?: true
    km?: true
    fechaAdq?: true
    userId?: true
    lastDiag?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    year?: true
    motor?: true
    vin?: true
    patente?: true
    km?: true
    fechaAdq?: true
    userId?: true
    lastDiag?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: number
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date
    userId: number
    lastDiag: Date | null
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    year?: boolean
    motor?: boolean
    vin?: boolean
    patente?: boolean
    km?: boolean
    fechaAdq?: boolean
    userId?: boolean
    lastDiag?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    diagnostics?: boolean | Vehicle$diagnosticsArgs<ExtArgs>
    scannerFiles?: boolean | Vehicle$scannerFilesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>



  export type VehicleSelectScalar = {
    id?: boolean
    marca?: boolean
    modelo?: boolean
    year?: boolean
    motor?: boolean
    vin?: boolean
    patente?: boolean
    km?: boolean
    fechaAdq?: boolean
    userId?: boolean
    lastDiag?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marca" | "modelo" | "year" | "motor" | "vin" | "patente" | "km" | "fechaAdq" | "userId" | "lastDiag", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    diagnostics?: boolean | Vehicle$diagnosticsArgs<ExtArgs>
    scannerFiles?: boolean | Vehicle$scannerFilesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      diagnostics: Prisma.$DiagnosticPayload<ExtArgs>[]
      scannerFiles: Prisma.$ScannerFilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marca: string
      modelo: string
      year: number
      motor: string
      vin: string
      patente: string
      km: number
      fechaAdq: Date
      userId: number
      lastDiag: Date | null
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnostics<T extends Vehicle$diagnosticsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$diagnosticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scannerFiles<T extends Vehicle$scannerFilesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$scannerFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'Int'>
    readonly marca: FieldRef<"Vehicle", 'String'>
    readonly modelo: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly motor: FieldRef<"Vehicle", 'String'>
    readonly vin: FieldRef<"Vehicle", 'String'>
    readonly patente: FieldRef<"Vehicle", 'String'>
    readonly km: FieldRef<"Vehicle", 'Int'>
    readonly fechaAdq: FieldRef<"Vehicle", 'DateTime'>
    readonly userId: FieldRef<"Vehicle", 'Int'>
    readonly lastDiag: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.diagnostics
   */
  export type Vehicle$diagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    where?: DiagnosticWhereInput
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    cursor?: DiagnosticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Vehicle.scannerFiles
   */
  export type Vehicle$scannerFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    where?: ScannerFileWhereInput
    orderBy?: ScannerFileOrderByWithRelationInput | ScannerFileOrderByWithRelationInput[]
    cursor?: ScannerFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScannerFileScalarFieldEnum | ScannerFileScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Dtc
   */

  export type AggregateDtc = {
    _count: DtcCountAggregateOutputType | null
    _min: DtcMinAggregateOutputType | null
    _max: DtcMaxAggregateOutputType | null
  }

  export type DtcMinAggregateOutputType = {
    code: string | null
    description: string | null
    category: string | null
    severity: string | null
  }

  export type DtcMaxAggregateOutputType = {
    code: string | null
    description: string | null
    category: string | null
    severity: string | null
  }

  export type DtcCountAggregateOutputType = {
    code: number
    description: number
    category: number
    severity: number
    _all: number
  }


  export type DtcMinAggregateInputType = {
    code?: true
    description?: true
    category?: true
    severity?: true
  }

  export type DtcMaxAggregateInputType = {
    code?: true
    description?: true
    category?: true
    severity?: true
  }

  export type DtcCountAggregateInputType = {
    code?: true
    description?: true
    category?: true
    severity?: true
    _all?: true
  }

  export type DtcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dtc to aggregate.
     */
    where?: DtcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dtcs to fetch.
     */
    orderBy?: DtcOrderByWithRelationInput | DtcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DtcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dtcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dtcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dtcs
    **/
    _count?: true | DtcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DtcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DtcMaxAggregateInputType
  }

  export type GetDtcAggregateType<T extends DtcAggregateArgs> = {
        [P in keyof T & keyof AggregateDtc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDtc[P]>
      : GetScalarType<T[P], AggregateDtc[P]>
  }




  export type DtcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DtcWhereInput
    orderBy?: DtcOrderByWithAggregationInput | DtcOrderByWithAggregationInput[]
    by: DtcScalarFieldEnum[] | DtcScalarFieldEnum
    having?: DtcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DtcCountAggregateInputType | true
    _min?: DtcMinAggregateInputType
    _max?: DtcMaxAggregateInputType
  }

  export type DtcGroupByOutputType = {
    code: string
    description: string
    category: string
    severity: string
    _count: DtcCountAggregateOutputType | null
    _min: DtcMinAggregateOutputType | null
    _max: DtcMaxAggregateOutputType | null
  }

  type GetDtcGroupByPayload<T extends DtcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DtcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DtcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DtcGroupByOutputType[P]>
            : GetScalarType<T[P], DtcGroupByOutputType[P]>
        }
      >
    >


  export type DtcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    description?: boolean
    category?: boolean
    severity?: boolean
    causes?: boolean | Dtc$causesArgs<ExtArgs>
    solutions?: boolean | Dtc$solutionsArgs<ExtArgs>
    diagnostics?: boolean | Dtc$diagnosticsArgs<ExtArgs>
    _count?: boolean | DtcCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dtc"]>



  export type DtcSelectScalar = {
    code?: boolean
    description?: boolean
    category?: boolean
    severity?: boolean
  }

  export type DtcOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "description" | "category" | "severity", ExtArgs["result"]["dtc"]>
  export type DtcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    causes?: boolean | Dtc$causesArgs<ExtArgs>
    solutions?: boolean | Dtc$solutionsArgs<ExtArgs>
    diagnostics?: boolean | Dtc$diagnosticsArgs<ExtArgs>
    _count?: boolean | DtcCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DtcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dtc"
    objects: {
      causes: Prisma.$DtcCausePayload<ExtArgs>[]
      solutions: Prisma.$DtcSolutionPayload<ExtArgs>[]
      diagnostics: Prisma.$DiagnosticDtcPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      description: string
      category: string
      severity: string
    }, ExtArgs["result"]["dtc"]>
    composites: {}
  }

  type DtcGetPayload<S extends boolean | null | undefined | DtcDefaultArgs> = $Result.GetResult<Prisma.$DtcPayload, S>

  type DtcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DtcFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DtcCountAggregateInputType | true
    }

  export interface DtcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dtc'], meta: { name: 'Dtc' } }
    /**
     * Find zero or one Dtc that matches the filter.
     * @param {DtcFindUniqueArgs} args - Arguments to find a Dtc
     * @example
     * // Get one Dtc
     * const dtc = await prisma.dtc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DtcFindUniqueArgs>(args: SelectSubset<T, DtcFindUniqueArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dtc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DtcFindUniqueOrThrowArgs} args - Arguments to find a Dtc
     * @example
     * // Get one Dtc
     * const dtc = await prisma.dtc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DtcFindUniqueOrThrowArgs>(args: SelectSubset<T, DtcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dtc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcFindFirstArgs} args - Arguments to find a Dtc
     * @example
     * // Get one Dtc
     * const dtc = await prisma.dtc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DtcFindFirstArgs>(args?: SelectSubset<T, DtcFindFirstArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dtc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcFindFirstOrThrowArgs} args - Arguments to find a Dtc
     * @example
     * // Get one Dtc
     * const dtc = await prisma.dtc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DtcFindFirstOrThrowArgs>(args?: SelectSubset<T, DtcFindFirstOrThrowArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dtcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dtcs
     * const dtcs = await prisma.dtc.findMany()
     * 
     * // Get first 10 Dtcs
     * const dtcs = await prisma.dtc.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const dtcWithCodeOnly = await prisma.dtc.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends DtcFindManyArgs>(args?: SelectSubset<T, DtcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dtc.
     * @param {DtcCreateArgs} args - Arguments to create a Dtc.
     * @example
     * // Create one Dtc
     * const Dtc = await prisma.dtc.create({
     *   data: {
     *     // ... data to create a Dtc
     *   }
     * })
     * 
     */
    create<T extends DtcCreateArgs>(args: SelectSubset<T, DtcCreateArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dtcs.
     * @param {DtcCreateManyArgs} args - Arguments to create many Dtcs.
     * @example
     * // Create many Dtcs
     * const dtc = await prisma.dtc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DtcCreateManyArgs>(args?: SelectSubset<T, DtcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dtc.
     * @param {DtcDeleteArgs} args - Arguments to delete one Dtc.
     * @example
     * // Delete one Dtc
     * const Dtc = await prisma.dtc.delete({
     *   where: {
     *     // ... filter to delete one Dtc
     *   }
     * })
     * 
     */
    delete<T extends DtcDeleteArgs>(args: SelectSubset<T, DtcDeleteArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dtc.
     * @param {DtcUpdateArgs} args - Arguments to update one Dtc.
     * @example
     * // Update one Dtc
     * const dtc = await prisma.dtc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DtcUpdateArgs>(args: SelectSubset<T, DtcUpdateArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dtcs.
     * @param {DtcDeleteManyArgs} args - Arguments to filter Dtcs to delete.
     * @example
     * // Delete a few Dtcs
     * const { count } = await prisma.dtc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DtcDeleteManyArgs>(args?: SelectSubset<T, DtcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dtcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dtcs
     * const dtc = await prisma.dtc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DtcUpdateManyArgs>(args: SelectSubset<T, DtcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dtc.
     * @param {DtcUpsertArgs} args - Arguments to update or create a Dtc.
     * @example
     * // Update or create a Dtc
     * const dtc = await prisma.dtc.upsert({
     *   create: {
     *     // ... data to create a Dtc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dtc we want to update
     *   }
     * })
     */
    upsert<T extends DtcUpsertArgs>(args: SelectSubset<T, DtcUpsertArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dtcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcCountArgs} args - Arguments to filter Dtcs to count.
     * @example
     * // Count the number of Dtcs
     * const count = await prisma.dtc.count({
     *   where: {
     *     // ... the filter for the Dtcs we want to count
     *   }
     * })
    **/
    count<T extends DtcCountArgs>(
      args?: Subset<T, DtcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DtcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dtc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DtcAggregateArgs>(args: Subset<T, DtcAggregateArgs>): Prisma.PrismaPromise<GetDtcAggregateType<T>>

    /**
     * Group by Dtc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcGroupByArgs} args - Group by arguments.
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
      T extends DtcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DtcGroupByArgs['orderBy'] }
        : { orderBy?: DtcGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DtcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDtcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dtc model
   */
  readonly fields: DtcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dtc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DtcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    causes<T extends Dtc$causesArgs<ExtArgs> = {}>(args?: Subset<T, Dtc$causesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solutions<T extends Dtc$solutionsArgs<ExtArgs> = {}>(args?: Subset<T, Dtc$solutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diagnostics<T extends Dtc$diagnosticsArgs<ExtArgs> = {}>(args?: Subset<T, Dtc$diagnosticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dtc model
   */
  interface DtcFieldRefs {
    readonly code: FieldRef<"Dtc", 'String'>
    readonly description: FieldRef<"Dtc", 'String'>
    readonly category: FieldRef<"Dtc", 'String'>
    readonly severity: FieldRef<"Dtc", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dtc findUnique
   */
  export type DtcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * Filter, which Dtc to fetch.
     */
    where: DtcWhereUniqueInput
  }

  /**
   * Dtc findUniqueOrThrow
   */
  export type DtcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * Filter, which Dtc to fetch.
     */
    where: DtcWhereUniqueInput
  }

  /**
   * Dtc findFirst
   */
  export type DtcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * Filter, which Dtc to fetch.
     */
    where?: DtcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dtcs to fetch.
     */
    orderBy?: DtcOrderByWithRelationInput | DtcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dtcs.
     */
    cursor?: DtcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dtcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dtcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dtcs.
     */
    distinct?: DtcScalarFieldEnum | DtcScalarFieldEnum[]
  }

  /**
   * Dtc findFirstOrThrow
   */
  export type DtcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * Filter, which Dtc to fetch.
     */
    where?: DtcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dtcs to fetch.
     */
    orderBy?: DtcOrderByWithRelationInput | DtcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dtcs.
     */
    cursor?: DtcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dtcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dtcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dtcs.
     */
    distinct?: DtcScalarFieldEnum | DtcScalarFieldEnum[]
  }

  /**
   * Dtc findMany
   */
  export type DtcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * Filter, which Dtcs to fetch.
     */
    where?: DtcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dtcs to fetch.
     */
    orderBy?: DtcOrderByWithRelationInput | DtcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dtcs.
     */
    cursor?: DtcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dtcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dtcs.
     */
    skip?: number
    distinct?: DtcScalarFieldEnum | DtcScalarFieldEnum[]
  }

  /**
   * Dtc create
   */
  export type DtcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * The data needed to create a Dtc.
     */
    data: XOR<DtcCreateInput, DtcUncheckedCreateInput>
  }

  /**
   * Dtc createMany
   */
  export type DtcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dtcs.
     */
    data: DtcCreateManyInput | DtcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dtc update
   */
  export type DtcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * The data needed to update a Dtc.
     */
    data: XOR<DtcUpdateInput, DtcUncheckedUpdateInput>
    /**
     * Choose, which Dtc to update.
     */
    where: DtcWhereUniqueInput
  }

  /**
   * Dtc updateMany
   */
  export type DtcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dtcs.
     */
    data: XOR<DtcUpdateManyMutationInput, DtcUncheckedUpdateManyInput>
    /**
     * Filter which Dtcs to update
     */
    where?: DtcWhereInput
    /**
     * Limit how many Dtcs to update.
     */
    limit?: number
  }

  /**
   * Dtc upsert
   */
  export type DtcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * The filter to search for the Dtc to update in case it exists.
     */
    where: DtcWhereUniqueInput
    /**
     * In case the Dtc found by the `where` argument doesn't exist, create a new Dtc with this data.
     */
    create: XOR<DtcCreateInput, DtcUncheckedCreateInput>
    /**
     * In case the Dtc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DtcUpdateInput, DtcUncheckedUpdateInput>
  }

  /**
   * Dtc delete
   */
  export type DtcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
    /**
     * Filter which Dtc to delete.
     */
    where: DtcWhereUniqueInput
  }

  /**
   * Dtc deleteMany
   */
  export type DtcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dtcs to delete
     */
    where?: DtcWhereInput
    /**
     * Limit how many Dtcs to delete.
     */
    limit?: number
  }

  /**
   * Dtc.causes
   */
  export type Dtc$causesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    where?: DtcCauseWhereInput
    orderBy?: DtcCauseOrderByWithRelationInput | DtcCauseOrderByWithRelationInput[]
    cursor?: DtcCauseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DtcCauseScalarFieldEnum | DtcCauseScalarFieldEnum[]
  }

  /**
   * Dtc.solutions
   */
  export type Dtc$solutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    where?: DtcSolutionWhereInput
    orderBy?: DtcSolutionOrderByWithRelationInput | DtcSolutionOrderByWithRelationInput[]
    cursor?: DtcSolutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DtcSolutionScalarFieldEnum | DtcSolutionScalarFieldEnum[]
  }

  /**
   * Dtc.diagnostics
   */
  export type Dtc$diagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    where?: DiagnosticDtcWhereInput
    orderBy?: DiagnosticDtcOrderByWithRelationInput | DiagnosticDtcOrderByWithRelationInput[]
    cursor?: DiagnosticDtcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticDtcScalarFieldEnum | DiagnosticDtcScalarFieldEnum[]
  }

  /**
   * Dtc without action
   */
  export type DtcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dtc
     */
    select?: DtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dtc
     */
    omit?: DtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcInclude<ExtArgs> | null
  }


  /**
   * Model DtcCause
   */

  export type AggregateDtcCause = {
    _count: DtcCauseCountAggregateOutputType | null
    _avg: DtcCauseAvgAggregateOutputType | null
    _sum: DtcCauseSumAggregateOutputType | null
    _min: DtcCauseMinAggregateOutputType | null
    _max: DtcCauseMaxAggregateOutputType | null
  }

  export type DtcCauseAvgAggregateOutputType = {
    id: number | null
  }

  export type DtcCauseSumAggregateOutputType = {
    id: number | null
  }

  export type DtcCauseMinAggregateOutputType = {
    id: number | null
    text: string | null
    dtcCode: string | null
  }

  export type DtcCauseMaxAggregateOutputType = {
    id: number | null
    text: string | null
    dtcCode: string | null
  }

  export type DtcCauseCountAggregateOutputType = {
    id: number
    text: number
    dtcCode: number
    _all: number
  }


  export type DtcCauseAvgAggregateInputType = {
    id?: true
  }

  export type DtcCauseSumAggregateInputType = {
    id?: true
  }

  export type DtcCauseMinAggregateInputType = {
    id?: true
    text?: true
    dtcCode?: true
  }

  export type DtcCauseMaxAggregateInputType = {
    id?: true
    text?: true
    dtcCode?: true
  }

  export type DtcCauseCountAggregateInputType = {
    id?: true
    text?: true
    dtcCode?: true
    _all?: true
  }

  export type DtcCauseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DtcCause to aggregate.
     */
    where?: DtcCauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DtcCauses to fetch.
     */
    orderBy?: DtcCauseOrderByWithRelationInput | DtcCauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DtcCauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DtcCauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DtcCauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DtcCauses
    **/
    _count?: true | DtcCauseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DtcCauseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DtcCauseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DtcCauseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DtcCauseMaxAggregateInputType
  }

  export type GetDtcCauseAggregateType<T extends DtcCauseAggregateArgs> = {
        [P in keyof T & keyof AggregateDtcCause]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDtcCause[P]>
      : GetScalarType<T[P], AggregateDtcCause[P]>
  }




  export type DtcCauseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DtcCauseWhereInput
    orderBy?: DtcCauseOrderByWithAggregationInput | DtcCauseOrderByWithAggregationInput[]
    by: DtcCauseScalarFieldEnum[] | DtcCauseScalarFieldEnum
    having?: DtcCauseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DtcCauseCountAggregateInputType | true
    _avg?: DtcCauseAvgAggregateInputType
    _sum?: DtcCauseSumAggregateInputType
    _min?: DtcCauseMinAggregateInputType
    _max?: DtcCauseMaxAggregateInputType
  }

  export type DtcCauseGroupByOutputType = {
    id: number
    text: string
    dtcCode: string
    _count: DtcCauseCountAggregateOutputType | null
    _avg: DtcCauseAvgAggregateOutputType | null
    _sum: DtcCauseSumAggregateOutputType | null
    _min: DtcCauseMinAggregateOutputType | null
    _max: DtcCauseMaxAggregateOutputType | null
  }

  type GetDtcCauseGroupByPayload<T extends DtcCauseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DtcCauseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DtcCauseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DtcCauseGroupByOutputType[P]>
            : GetScalarType<T[P], DtcCauseGroupByOutputType[P]>
        }
      >
    >


  export type DtcCauseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    dtcCode?: boolean
    dtc?: boolean | DtcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dtcCause"]>



  export type DtcCauseSelectScalar = {
    id?: boolean
    text?: boolean
    dtcCode?: boolean
  }

  export type DtcCauseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "dtcCode", ExtArgs["result"]["dtcCause"]>
  export type DtcCauseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dtc?: boolean | DtcDefaultArgs<ExtArgs>
  }

  export type $DtcCausePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DtcCause"
    objects: {
      dtc: Prisma.$DtcPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      dtcCode: string
    }, ExtArgs["result"]["dtcCause"]>
    composites: {}
  }

  type DtcCauseGetPayload<S extends boolean | null | undefined | DtcCauseDefaultArgs> = $Result.GetResult<Prisma.$DtcCausePayload, S>

  type DtcCauseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DtcCauseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DtcCauseCountAggregateInputType | true
    }

  export interface DtcCauseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DtcCause'], meta: { name: 'DtcCause' } }
    /**
     * Find zero or one DtcCause that matches the filter.
     * @param {DtcCauseFindUniqueArgs} args - Arguments to find a DtcCause
     * @example
     * // Get one DtcCause
     * const dtcCause = await prisma.dtcCause.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DtcCauseFindUniqueArgs>(args: SelectSubset<T, DtcCauseFindUniqueArgs<ExtArgs>>): Prisma__DtcCauseClient<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DtcCause that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DtcCauseFindUniqueOrThrowArgs} args - Arguments to find a DtcCause
     * @example
     * // Get one DtcCause
     * const dtcCause = await prisma.dtcCause.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DtcCauseFindUniqueOrThrowArgs>(args: SelectSubset<T, DtcCauseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DtcCauseClient<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DtcCause that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcCauseFindFirstArgs} args - Arguments to find a DtcCause
     * @example
     * // Get one DtcCause
     * const dtcCause = await prisma.dtcCause.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DtcCauseFindFirstArgs>(args?: SelectSubset<T, DtcCauseFindFirstArgs<ExtArgs>>): Prisma__DtcCauseClient<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DtcCause that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcCauseFindFirstOrThrowArgs} args - Arguments to find a DtcCause
     * @example
     * // Get one DtcCause
     * const dtcCause = await prisma.dtcCause.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DtcCauseFindFirstOrThrowArgs>(args?: SelectSubset<T, DtcCauseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DtcCauseClient<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DtcCauses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcCauseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DtcCauses
     * const dtcCauses = await prisma.dtcCause.findMany()
     * 
     * // Get first 10 DtcCauses
     * const dtcCauses = await prisma.dtcCause.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dtcCauseWithIdOnly = await prisma.dtcCause.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DtcCauseFindManyArgs>(args?: SelectSubset<T, DtcCauseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DtcCause.
     * @param {DtcCauseCreateArgs} args - Arguments to create a DtcCause.
     * @example
     * // Create one DtcCause
     * const DtcCause = await prisma.dtcCause.create({
     *   data: {
     *     // ... data to create a DtcCause
     *   }
     * })
     * 
     */
    create<T extends DtcCauseCreateArgs>(args: SelectSubset<T, DtcCauseCreateArgs<ExtArgs>>): Prisma__DtcCauseClient<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DtcCauses.
     * @param {DtcCauseCreateManyArgs} args - Arguments to create many DtcCauses.
     * @example
     * // Create many DtcCauses
     * const dtcCause = await prisma.dtcCause.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DtcCauseCreateManyArgs>(args?: SelectSubset<T, DtcCauseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DtcCause.
     * @param {DtcCauseDeleteArgs} args - Arguments to delete one DtcCause.
     * @example
     * // Delete one DtcCause
     * const DtcCause = await prisma.dtcCause.delete({
     *   where: {
     *     // ... filter to delete one DtcCause
     *   }
     * })
     * 
     */
    delete<T extends DtcCauseDeleteArgs>(args: SelectSubset<T, DtcCauseDeleteArgs<ExtArgs>>): Prisma__DtcCauseClient<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DtcCause.
     * @param {DtcCauseUpdateArgs} args - Arguments to update one DtcCause.
     * @example
     * // Update one DtcCause
     * const dtcCause = await prisma.dtcCause.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DtcCauseUpdateArgs>(args: SelectSubset<T, DtcCauseUpdateArgs<ExtArgs>>): Prisma__DtcCauseClient<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DtcCauses.
     * @param {DtcCauseDeleteManyArgs} args - Arguments to filter DtcCauses to delete.
     * @example
     * // Delete a few DtcCauses
     * const { count } = await prisma.dtcCause.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DtcCauseDeleteManyArgs>(args?: SelectSubset<T, DtcCauseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DtcCauses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcCauseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DtcCauses
     * const dtcCause = await prisma.dtcCause.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DtcCauseUpdateManyArgs>(args: SelectSubset<T, DtcCauseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DtcCause.
     * @param {DtcCauseUpsertArgs} args - Arguments to update or create a DtcCause.
     * @example
     * // Update or create a DtcCause
     * const dtcCause = await prisma.dtcCause.upsert({
     *   create: {
     *     // ... data to create a DtcCause
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DtcCause we want to update
     *   }
     * })
     */
    upsert<T extends DtcCauseUpsertArgs>(args: SelectSubset<T, DtcCauseUpsertArgs<ExtArgs>>): Prisma__DtcCauseClient<$Result.GetResult<Prisma.$DtcCausePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DtcCauses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcCauseCountArgs} args - Arguments to filter DtcCauses to count.
     * @example
     * // Count the number of DtcCauses
     * const count = await prisma.dtcCause.count({
     *   where: {
     *     // ... the filter for the DtcCauses we want to count
     *   }
     * })
    **/
    count<T extends DtcCauseCountArgs>(
      args?: Subset<T, DtcCauseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DtcCauseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DtcCause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcCauseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DtcCauseAggregateArgs>(args: Subset<T, DtcCauseAggregateArgs>): Prisma.PrismaPromise<GetDtcCauseAggregateType<T>>

    /**
     * Group by DtcCause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcCauseGroupByArgs} args - Group by arguments.
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
      T extends DtcCauseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DtcCauseGroupByArgs['orderBy'] }
        : { orderBy?: DtcCauseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DtcCauseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDtcCauseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DtcCause model
   */
  readonly fields: DtcCauseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DtcCause.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DtcCauseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dtc<T extends DtcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DtcDefaultArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DtcCause model
   */
  interface DtcCauseFieldRefs {
    readonly id: FieldRef<"DtcCause", 'Int'>
    readonly text: FieldRef<"DtcCause", 'String'>
    readonly dtcCode: FieldRef<"DtcCause", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DtcCause findUnique
   */
  export type DtcCauseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * Filter, which DtcCause to fetch.
     */
    where: DtcCauseWhereUniqueInput
  }

  /**
   * DtcCause findUniqueOrThrow
   */
  export type DtcCauseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * Filter, which DtcCause to fetch.
     */
    where: DtcCauseWhereUniqueInput
  }

  /**
   * DtcCause findFirst
   */
  export type DtcCauseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * Filter, which DtcCause to fetch.
     */
    where?: DtcCauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DtcCauses to fetch.
     */
    orderBy?: DtcCauseOrderByWithRelationInput | DtcCauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DtcCauses.
     */
    cursor?: DtcCauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DtcCauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DtcCauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DtcCauses.
     */
    distinct?: DtcCauseScalarFieldEnum | DtcCauseScalarFieldEnum[]
  }

  /**
   * DtcCause findFirstOrThrow
   */
  export type DtcCauseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * Filter, which DtcCause to fetch.
     */
    where?: DtcCauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DtcCauses to fetch.
     */
    orderBy?: DtcCauseOrderByWithRelationInput | DtcCauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DtcCauses.
     */
    cursor?: DtcCauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DtcCauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DtcCauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DtcCauses.
     */
    distinct?: DtcCauseScalarFieldEnum | DtcCauseScalarFieldEnum[]
  }

  /**
   * DtcCause findMany
   */
  export type DtcCauseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * Filter, which DtcCauses to fetch.
     */
    where?: DtcCauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DtcCauses to fetch.
     */
    orderBy?: DtcCauseOrderByWithRelationInput | DtcCauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DtcCauses.
     */
    cursor?: DtcCauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DtcCauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DtcCauses.
     */
    skip?: number
    distinct?: DtcCauseScalarFieldEnum | DtcCauseScalarFieldEnum[]
  }

  /**
   * DtcCause create
   */
  export type DtcCauseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * The data needed to create a DtcCause.
     */
    data: XOR<DtcCauseCreateInput, DtcCauseUncheckedCreateInput>
  }

  /**
   * DtcCause createMany
   */
  export type DtcCauseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DtcCauses.
     */
    data: DtcCauseCreateManyInput | DtcCauseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DtcCause update
   */
  export type DtcCauseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * The data needed to update a DtcCause.
     */
    data: XOR<DtcCauseUpdateInput, DtcCauseUncheckedUpdateInput>
    /**
     * Choose, which DtcCause to update.
     */
    where: DtcCauseWhereUniqueInput
  }

  /**
   * DtcCause updateMany
   */
  export type DtcCauseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DtcCauses.
     */
    data: XOR<DtcCauseUpdateManyMutationInput, DtcCauseUncheckedUpdateManyInput>
    /**
     * Filter which DtcCauses to update
     */
    where?: DtcCauseWhereInput
    /**
     * Limit how many DtcCauses to update.
     */
    limit?: number
  }

  /**
   * DtcCause upsert
   */
  export type DtcCauseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * The filter to search for the DtcCause to update in case it exists.
     */
    where: DtcCauseWhereUniqueInput
    /**
     * In case the DtcCause found by the `where` argument doesn't exist, create a new DtcCause with this data.
     */
    create: XOR<DtcCauseCreateInput, DtcCauseUncheckedCreateInput>
    /**
     * In case the DtcCause was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DtcCauseUpdateInput, DtcCauseUncheckedUpdateInput>
  }

  /**
   * DtcCause delete
   */
  export type DtcCauseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
    /**
     * Filter which DtcCause to delete.
     */
    where: DtcCauseWhereUniqueInput
  }

  /**
   * DtcCause deleteMany
   */
  export type DtcCauseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DtcCauses to delete
     */
    where?: DtcCauseWhereInput
    /**
     * Limit how many DtcCauses to delete.
     */
    limit?: number
  }

  /**
   * DtcCause without action
   */
  export type DtcCauseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcCause
     */
    select?: DtcCauseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcCause
     */
    omit?: DtcCauseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcCauseInclude<ExtArgs> | null
  }


  /**
   * Model DtcSolution
   */

  export type AggregateDtcSolution = {
    _count: DtcSolutionCountAggregateOutputType | null
    _avg: DtcSolutionAvgAggregateOutputType | null
    _sum: DtcSolutionSumAggregateOutputType | null
    _min: DtcSolutionMinAggregateOutputType | null
    _max: DtcSolutionMaxAggregateOutputType | null
  }

  export type DtcSolutionAvgAggregateOutputType = {
    id: number | null
  }

  export type DtcSolutionSumAggregateOutputType = {
    id: number | null
  }

  export type DtcSolutionMinAggregateOutputType = {
    id: number | null
    text: string | null
    dtcCode: string | null
  }

  export type DtcSolutionMaxAggregateOutputType = {
    id: number | null
    text: string | null
    dtcCode: string | null
  }

  export type DtcSolutionCountAggregateOutputType = {
    id: number
    text: number
    dtcCode: number
    _all: number
  }


  export type DtcSolutionAvgAggregateInputType = {
    id?: true
  }

  export type DtcSolutionSumAggregateInputType = {
    id?: true
  }

  export type DtcSolutionMinAggregateInputType = {
    id?: true
    text?: true
    dtcCode?: true
  }

  export type DtcSolutionMaxAggregateInputType = {
    id?: true
    text?: true
    dtcCode?: true
  }

  export type DtcSolutionCountAggregateInputType = {
    id?: true
    text?: true
    dtcCode?: true
    _all?: true
  }

  export type DtcSolutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DtcSolution to aggregate.
     */
    where?: DtcSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DtcSolutions to fetch.
     */
    orderBy?: DtcSolutionOrderByWithRelationInput | DtcSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DtcSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DtcSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DtcSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DtcSolutions
    **/
    _count?: true | DtcSolutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DtcSolutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DtcSolutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DtcSolutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DtcSolutionMaxAggregateInputType
  }

  export type GetDtcSolutionAggregateType<T extends DtcSolutionAggregateArgs> = {
        [P in keyof T & keyof AggregateDtcSolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDtcSolution[P]>
      : GetScalarType<T[P], AggregateDtcSolution[P]>
  }




  export type DtcSolutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DtcSolutionWhereInput
    orderBy?: DtcSolutionOrderByWithAggregationInput | DtcSolutionOrderByWithAggregationInput[]
    by: DtcSolutionScalarFieldEnum[] | DtcSolutionScalarFieldEnum
    having?: DtcSolutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DtcSolutionCountAggregateInputType | true
    _avg?: DtcSolutionAvgAggregateInputType
    _sum?: DtcSolutionSumAggregateInputType
    _min?: DtcSolutionMinAggregateInputType
    _max?: DtcSolutionMaxAggregateInputType
  }

  export type DtcSolutionGroupByOutputType = {
    id: number
    text: string
    dtcCode: string
    _count: DtcSolutionCountAggregateOutputType | null
    _avg: DtcSolutionAvgAggregateOutputType | null
    _sum: DtcSolutionSumAggregateOutputType | null
    _min: DtcSolutionMinAggregateOutputType | null
    _max: DtcSolutionMaxAggregateOutputType | null
  }

  type GetDtcSolutionGroupByPayload<T extends DtcSolutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DtcSolutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DtcSolutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DtcSolutionGroupByOutputType[P]>
            : GetScalarType<T[P], DtcSolutionGroupByOutputType[P]>
        }
      >
    >


  export type DtcSolutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    dtcCode?: boolean
    dtc?: boolean | DtcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dtcSolution"]>



  export type DtcSolutionSelectScalar = {
    id?: boolean
    text?: boolean
    dtcCode?: boolean
  }

  export type DtcSolutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "dtcCode", ExtArgs["result"]["dtcSolution"]>
  export type DtcSolutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dtc?: boolean | DtcDefaultArgs<ExtArgs>
  }

  export type $DtcSolutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DtcSolution"
    objects: {
      dtc: Prisma.$DtcPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      dtcCode: string
    }, ExtArgs["result"]["dtcSolution"]>
    composites: {}
  }

  type DtcSolutionGetPayload<S extends boolean | null | undefined | DtcSolutionDefaultArgs> = $Result.GetResult<Prisma.$DtcSolutionPayload, S>

  type DtcSolutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DtcSolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DtcSolutionCountAggregateInputType | true
    }

  export interface DtcSolutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DtcSolution'], meta: { name: 'DtcSolution' } }
    /**
     * Find zero or one DtcSolution that matches the filter.
     * @param {DtcSolutionFindUniqueArgs} args - Arguments to find a DtcSolution
     * @example
     * // Get one DtcSolution
     * const dtcSolution = await prisma.dtcSolution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DtcSolutionFindUniqueArgs>(args: SelectSubset<T, DtcSolutionFindUniqueArgs<ExtArgs>>): Prisma__DtcSolutionClient<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DtcSolution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DtcSolutionFindUniqueOrThrowArgs} args - Arguments to find a DtcSolution
     * @example
     * // Get one DtcSolution
     * const dtcSolution = await prisma.dtcSolution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DtcSolutionFindUniqueOrThrowArgs>(args: SelectSubset<T, DtcSolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DtcSolutionClient<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DtcSolution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcSolutionFindFirstArgs} args - Arguments to find a DtcSolution
     * @example
     * // Get one DtcSolution
     * const dtcSolution = await prisma.dtcSolution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DtcSolutionFindFirstArgs>(args?: SelectSubset<T, DtcSolutionFindFirstArgs<ExtArgs>>): Prisma__DtcSolutionClient<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DtcSolution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcSolutionFindFirstOrThrowArgs} args - Arguments to find a DtcSolution
     * @example
     * // Get one DtcSolution
     * const dtcSolution = await prisma.dtcSolution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DtcSolutionFindFirstOrThrowArgs>(args?: SelectSubset<T, DtcSolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DtcSolutionClient<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DtcSolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcSolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DtcSolutions
     * const dtcSolutions = await prisma.dtcSolution.findMany()
     * 
     * // Get first 10 DtcSolutions
     * const dtcSolutions = await prisma.dtcSolution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dtcSolutionWithIdOnly = await prisma.dtcSolution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DtcSolutionFindManyArgs>(args?: SelectSubset<T, DtcSolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DtcSolution.
     * @param {DtcSolutionCreateArgs} args - Arguments to create a DtcSolution.
     * @example
     * // Create one DtcSolution
     * const DtcSolution = await prisma.dtcSolution.create({
     *   data: {
     *     // ... data to create a DtcSolution
     *   }
     * })
     * 
     */
    create<T extends DtcSolutionCreateArgs>(args: SelectSubset<T, DtcSolutionCreateArgs<ExtArgs>>): Prisma__DtcSolutionClient<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DtcSolutions.
     * @param {DtcSolutionCreateManyArgs} args - Arguments to create many DtcSolutions.
     * @example
     * // Create many DtcSolutions
     * const dtcSolution = await prisma.dtcSolution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DtcSolutionCreateManyArgs>(args?: SelectSubset<T, DtcSolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DtcSolution.
     * @param {DtcSolutionDeleteArgs} args - Arguments to delete one DtcSolution.
     * @example
     * // Delete one DtcSolution
     * const DtcSolution = await prisma.dtcSolution.delete({
     *   where: {
     *     // ... filter to delete one DtcSolution
     *   }
     * })
     * 
     */
    delete<T extends DtcSolutionDeleteArgs>(args: SelectSubset<T, DtcSolutionDeleteArgs<ExtArgs>>): Prisma__DtcSolutionClient<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DtcSolution.
     * @param {DtcSolutionUpdateArgs} args - Arguments to update one DtcSolution.
     * @example
     * // Update one DtcSolution
     * const dtcSolution = await prisma.dtcSolution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DtcSolutionUpdateArgs>(args: SelectSubset<T, DtcSolutionUpdateArgs<ExtArgs>>): Prisma__DtcSolutionClient<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DtcSolutions.
     * @param {DtcSolutionDeleteManyArgs} args - Arguments to filter DtcSolutions to delete.
     * @example
     * // Delete a few DtcSolutions
     * const { count } = await prisma.dtcSolution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DtcSolutionDeleteManyArgs>(args?: SelectSubset<T, DtcSolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DtcSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcSolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DtcSolutions
     * const dtcSolution = await prisma.dtcSolution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DtcSolutionUpdateManyArgs>(args: SelectSubset<T, DtcSolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DtcSolution.
     * @param {DtcSolutionUpsertArgs} args - Arguments to update or create a DtcSolution.
     * @example
     * // Update or create a DtcSolution
     * const dtcSolution = await prisma.dtcSolution.upsert({
     *   create: {
     *     // ... data to create a DtcSolution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DtcSolution we want to update
     *   }
     * })
     */
    upsert<T extends DtcSolutionUpsertArgs>(args: SelectSubset<T, DtcSolutionUpsertArgs<ExtArgs>>): Prisma__DtcSolutionClient<$Result.GetResult<Prisma.$DtcSolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DtcSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcSolutionCountArgs} args - Arguments to filter DtcSolutions to count.
     * @example
     * // Count the number of DtcSolutions
     * const count = await prisma.dtcSolution.count({
     *   where: {
     *     // ... the filter for the DtcSolutions we want to count
     *   }
     * })
    **/
    count<T extends DtcSolutionCountArgs>(
      args?: Subset<T, DtcSolutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DtcSolutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DtcSolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcSolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DtcSolutionAggregateArgs>(args: Subset<T, DtcSolutionAggregateArgs>): Prisma.PrismaPromise<GetDtcSolutionAggregateType<T>>

    /**
     * Group by DtcSolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DtcSolutionGroupByArgs} args - Group by arguments.
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
      T extends DtcSolutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DtcSolutionGroupByArgs['orderBy'] }
        : { orderBy?: DtcSolutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DtcSolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDtcSolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DtcSolution model
   */
  readonly fields: DtcSolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DtcSolution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DtcSolutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dtc<T extends DtcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DtcDefaultArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DtcSolution model
   */
  interface DtcSolutionFieldRefs {
    readonly id: FieldRef<"DtcSolution", 'Int'>
    readonly text: FieldRef<"DtcSolution", 'String'>
    readonly dtcCode: FieldRef<"DtcSolution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DtcSolution findUnique
   */
  export type DtcSolutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DtcSolution to fetch.
     */
    where: DtcSolutionWhereUniqueInput
  }

  /**
   * DtcSolution findUniqueOrThrow
   */
  export type DtcSolutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DtcSolution to fetch.
     */
    where: DtcSolutionWhereUniqueInput
  }

  /**
   * DtcSolution findFirst
   */
  export type DtcSolutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DtcSolution to fetch.
     */
    where?: DtcSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DtcSolutions to fetch.
     */
    orderBy?: DtcSolutionOrderByWithRelationInput | DtcSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DtcSolutions.
     */
    cursor?: DtcSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DtcSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DtcSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DtcSolutions.
     */
    distinct?: DtcSolutionScalarFieldEnum | DtcSolutionScalarFieldEnum[]
  }

  /**
   * DtcSolution findFirstOrThrow
   */
  export type DtcSolutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DtcSolution to fetch.
     */
    where?: DtcSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DtcSolutions to fetch.
     */
    orderBy?: DtcSolutionOrderByWithRelationInput | DtcSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DtcSolutions.
     */
    cursor?: DtcSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DtcSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DtcSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DtcSolutions.
     */
    distinct?: DtcSolutionScalarFieldEnum | DtcSolutionScalarFieldEnum[]
  }

  /**
   * DtcSolution findMany
   */
  export type DtcSolutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DtcSolutions to fetch.
     */
    where?: DtcSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DtcSolutions to fetch.
     */
    orderBy?: DtcSolutionOrderByWithRelationInput | DtcSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DtcSolutions.
     */
    cursor?: DtcSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DtcSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DtcSolutions.
     */
    skip?: number
    distinct?: DtcSolutionScalarFieldEnum | DtcSolutionScalarFieldEnum[]
  }

  /**
   * DtcSolution create
   */
  export type DtcSolutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * The data needed to create a DtcSolution.
     */
    data: XOR<DtcSolutionCreateInput, DtcSolutionUncheckedCreateInput>
  }

  /**
   * DtcSolution createMany
   */
  export type DtcSolutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DtcSolutions.
     */
    data: DtcSolutionCreateManyInput | DtcSolutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DtcSolution update
   */
  export type DtcSolutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * The data needed to update a DtcSolution.
     */
    data: XOR<DtcSolutionUpdateInput, DtcSolutionUncheckedUpdateInput>
    /**
     * Choose, which DtcSolution to update.
     */
    where: DtcSolutionWhereUniqueInput
  }

  /**
   * DtcSolution updateMany
   */
  export type DtcSolutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DtcSolutions.
     */
    data: XOR<DtcSolutionUpdateManyMutationInput, DtcSolutionUncheckedUpdateManyInput>
    /**
     * Filter which DtcSolutions to update
     */
    where?: DtcSolutionWhereInput
    /**
     * Limit how many DtcSolutions to update.
     */
    limit?: number
  }

  /**
   * DtcSolution upsert
   */
  export type DtcSolutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * The filter to search for the DtcSolution to update in case it exists.
     */
    where: DtcSolutionWhereUniqueInput
    /**
     * In case the DtcSolution found by the `where` argument doesn't exist, create a new DtcSolution with this data.
     */
    create: XOR<DtcSolutionCreateInput, DtcSolutionUncheckedCreateInput>
    /**
     * In case the DtcSolution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DtcSolutionUpdateInput, DtcSolutionUncheckedUpdateInput>
  }

  /**
   * DtcSolution delete
   */
  export type DtcSolutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
    /**
     * Filter which DtcSolution to delete.
     */
    where: DtcSolutionWhereUniqueInput
  }

  /**
   * DtcSolution deleteMany
   */
  export type DtcSolutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DtcSolutions to delete
     */
    where?: DtcSolutionWhereInput
    /**
     * Limit how many DtcSolutions to delete.
     */
    limit?: number
  }

  /**
   * DtcSolution without action
   */
  export type DtcSolutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DtcSolution
     */
    select?: DtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DtcSolution
     */
    omit?: DtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DtcSolutionInclude<ExtArgs> | null
  }


  /**
   * Model Symptom
   */

  export type AggregateSymptom = {
    _count: SymptomCountAggregateOutputType | null
    _avg: SymptomAvgAggregateOutputType | null
    _sum: SymptomSumAggregateOutputType | null
    _min: SymptomMinAggregateOutputType | null
    _max: SymptomMaxAggregateOutputType | null
  }

  export type SymptomAvgAggregateOutputType = {
    id: number | null
  }

  export type SymptomSumAggregateOutputType = {
    id: number | null
  }

  export type SymptomMinAggregateOutputType = {
    id: number | null
    category: string | null
    name: string | null
    description: string | null
  }

  export type SymptomMaxAggregateOutputType = {
    id: number | null
    category: string | null
    name: string | null
    description: string | null
  }

  export type SymptomCountAggregateOutputType = {
    id: number
    category: number
    name: number
    description: number
    _all: number
  }


  export type SymptomAvgAggregateInputType = {
    id?: true
  }

  export type SymptomSumAggregateInputType = {
    id?: true
  }

  export type SymptomMinAggregateInputType = {
    id?: true
    category?: true
    name?: true
    description?: true
  }

  export type SymptomMaxAggregateInputType = {
    id?: true
    category?: true
    name?: true
    description?: true
  }

  export type SymptomCountAggregateInputType = {
    id?: true
    category?: true
    name?: true
    description?: true
    _all?: true
  }

  export type SymptomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Symptom to aggregate.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Symptoms
    **/
    _count?: true | SymptomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SymptomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SymptomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SymptomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SymptomMaxAggregateInputType
  }

  export type GetSymptomAggregateType<T extends SymptomAggregateArgs> = {
        [P in keyof T & keyof AggregateSymptom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSymptom[P]>
      : GetScalarType<T[P], AggregateSymptom[P]>
  }




  export type SymptomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomWhereInput
    orderBy?: SymptomOrderByWithAggregationInput | SymptomOrderByWithAggregationInput[]
    by: SymptomScalarFieldEnum[] | SymptomScalarFieldEnum
    having?: SymptomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SymptomCountAggregateInputType | true
    _avg?: SymptomAvgAggregateInputType
    _sum?: SymptomSumAggregateInputType
    _min?: SymptomMinAggregateInputType
    _max?: SymptomMaxAggregateInputType
  }

  export type SymptomGroupByOutputType = {
    id: number
    category: string
    name: string
    description: string
    _count: SymptomCountAggregateOutputType | null
    _avg: SymptomAvgAggregateOutputType | null
    _sum: SymptomSumAggregateOutputType | null
    _min: SymptomMinAggregateOutputType | null
    _max: SymptomMaxAggregateOutputType | null
  }

  type GetSymptomGroupByPayload<T extends SymptomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SymptomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SymptomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SymptomGroupByOutputType[P]>
            : GetScalarType<T[P], SymptomGroupByOutputType[P]>
        }
      >
    >


  export type SymptomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    description?: boolean
    diagnostics?: boolean | Symptom$diagnosticsArgs<ExtArgs>
    _count?: boolean | SymptomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptom"]>



  export type SymptomSelectScalar = {
    id?: boolean
    category?: boolean
    name?: boolean
    description?: boolean
  }

  export type SymptomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "name" | "description", ExtArgs["result"]["symptom"]>
  export type SymptomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostics?: boolean | Symptom$diagnosticsArgs<ExtArgs>
    _count?: boolean | SymptomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SymptomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Symptom"
    objects: {
      diagnostics: Prisma.$DiagnosticSymptomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      name: string
      description: string
    }, ExtArgs["result"]["symptom"]>
    composites: {}
  }

  type SymptomGetPayload<S extends boolean | null | undefined | SymptomDefaultArgs> = $Result.GetResult<Prisma.$SymptomPayload, S>

  type SymptomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SymptomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SymptomCountAggregateInputType | true
    }

  export interface SymptomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Symptom'], meta: { name: 'Symptom' } }
    /**
     * Find zero or one Symptom that matches the filter.
     * @param {SymptomFindUniqueArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SymptomFindUniqueArgs>(args: SelectSubset<T, SymptomFindUniqueArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Symptom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SymptomFindUniqueOrThrowArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SymptomFindUniqueOrThrowArgs>(args: SelectSubset<T, SymptomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Symptom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindFirstArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SymptomFindFirstArgs>(args?: SelectSubset<T, SymptomFindFirstArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Symptom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindFirstOrThrowArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SymptomFindFirstOrThrowArgs>(args?: SelectSubset<T, SymptomFindFirstOrThrowArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Symptoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Symptoms
     * const symptoms = await prisma.symptom.findMany()
     * 
     * // Get first 10 Symptoms
     * const symptoms = await prisma.symptom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const symptomWithIdOnly = await prisma.symptom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SymptomFindManyArgs>(args?: SelectSubset<T, SymptomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Symptom.
     * @param {SymptomCreateArgs} args - Arguments to create a Symptom.
     * @example
     * // Create one Symptom
     * const Symptom = await prisma.symptom.create({
     *   data: {
     *     // ... data to create a Symptom
     *   }
     * })
     * 
     */
    create<T extends SymptomCreateArgs>(args: SelectSubset<T, SymptomCreateArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Symptoms.
     * @param {SymptomCreateManyArgs} args - Arguments to create many Symptoms.
     * @example
     * // Create many Symptoms
     * const symptom = await prisma.symptom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SymptomCreateManyArgs>(args?: SelectSubset<T, SymptomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Symptom.
     * @param {SymptomDeleteArgs} args - Arguments to delete one Symptom.
     * @example
     * // Delete one Symptom
     * const Symptom = await prisma.symptom.delete({
     *   where: {
     *     // ... filter to delete one Symptom
     *   }
     * })
     * 
     */
    delete<T extends SymptomDeleteArgs>(args: SelectSubset<T, SymptomDeleteArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Symptom.
     * @param {SymptomUpdateArgs} args - Arguments to update one Symptom.
     * @example
     * // Update one Symptom
     * const symptom = await prisma.symptom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SymptomUpdateArgs>(args: SelectSubset<T, SymptomUpdateArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Symptoms.
     * @param {SymptomDeleteManyArgs} args - Arguments to filter Symptoms to delete.
     * @example
     * // Delete a few Symptoms
     * const { count } = await prisma.symptom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SymptomDeleteManyArgs>(args?: SelectSubset<T, SymptomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Symptoms
     * const symptom = await prisma.symptom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SymptomUpdateManyArgs>(args: SelectSubset<T, SymptomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Symptom.
     * @param {SymptomUpsertArgs} args - Arguments to update or create a Symptom.
     * @example
     * // Update or create a Symptom
     * const symptom = await prisma.symptom.upsert({
     *   create: {
     *     // ... data to create a Symptom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Symptom we want to update
     *   }
     * })
     */
    upsert<T extends SymptomUpsertArgs>(args: SelectSubset<T, SymptomUpsertArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomCountArgs} args - Arguments to filter Symptoms to count.
     * @example
     * // Count the number of Symptoms
     * const count = await prisma.symptom.count({
     *   where: {
     *     // ... the filter for the Symptoms we want to count
     *   }
     * })
    **/
    count<T extends SymptomCountArgs>(
      args?: Subset<T, SymptomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SymptomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Symptom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SymptomAggregateArgs>(args: Subset<T, SymptomAggregateArgs>): Prisma.PrismaPromise<GetSymptomAggregateType<T>>

    /**
     * Group by Symptom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomGroupByArgs} args - Group by arguments.
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
      T extends SymptomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SymptomGroupByArgs['orderBy'] }
        : { orderBy?: SymptomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SymptomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSymptomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Symptom model
   */
  readonly fields: SymptomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Symptom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SymptomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnostics<T extends Symptom$diagnosticsArgs<ExtArgs> = {}>(args?: Subset<T, Symptom$diagnosticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Symptom model
   */
  interface SymptomFieldRefs {
    readonly id: FieldRef<"Symptom", 'Int'>
    readonly category: FieldRef<"Symptom", 'String'>
    readonly name: FieldRef<"Symptom", 'String'>
    readonly description: FieldRef<"Symptom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Symptom findUnique
   */
  export type SymptomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom findUniqueOrThrow
   */
  export type SymptomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom findFirst
   */
  export type SymptomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom findFirstOrThrow
   */
  export type SymptomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom findMany
   */
  export type SymptomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptoms to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom create
   */
  export type SymptomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The data needed to create a Symptom.
     */
    data: XOR<SymptomCreateInput, SymptomUncheckedCreateInput>
  }

  /**
   * Symptom createMany
   */
  export type SymptomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Symptoms.
     */
    data: SymptomCreateManyInput | SymptomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Symptom update
   */
  export type SymptomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The data needed to update a Symptom.
     */
    data: XOR<SymptomUpdateInput, SymptomUncheckedUpdateInput>
    /**
     * Choose, which Symptom to update.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom updateMany
   */
  export type SymptomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Symptoms.
     */
    data: XOR<SymptomUpdateManyMutationInput, SymptomUncheckedUpdateManyInput>
    /**
     * Filter which Symptoms to update
     */
    where?: SymptomWhereInput
    /**
     * Limit how many Symptoms to update.
     */
    limit?: number
  }

  /**
   * Symptom upsert
   */
  export type SymptomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The filter to search for the Symptom to update in case it exists.
     */
    where: SymptomWhereUniqueInput
    /**
     * In case the Symptom found by the `where` argument doesn't exist, create a new Symptom with this data.
     */
    create: XOR<SymptomCreateInput, SymptomUncheckedCreateInput>
    /**
     * In case the Symptom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SymptomUpdateInput, SymptomUncheckedUpdateInput>
  }

  /**
   * Symptom delete
   */
  export type SymptomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter which Symptom to delete.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom deleteMany
   */
  export type SymptomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Symptoms to delete
     */
    where?: SymptomWhereInput
    /**
     * Limit how many Symptoms to delete.
     */
    limit?: number
  }

  /**
   * Symptom.diagnostics
   */
  export type Symptom$diagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    where?: DiagnosticSymptomWhereInput
    orderBy?: DiagnosticSymptomOrderByWithRelationInput | DiagnosticSymptomOrderByWithRelationInput[]
    cursor?: DiagnosticSymptomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticSymptomScalarFieldEnum | DiagnosticSymptomScalarFieldEnum[]
  }

  /**
   * Symptom without action
   */
  export type SymptomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
  }


  /**
   * Model Diagnostic
   */

  export type AggregateDiagnostic = {
    _count: DiagnosticCountAggregateOutputType | null
    _avg: DiagnosticAvgAggregateOutputType | null
    _sum: DiagnosticSumAggregateOutputType | null
    _min: DiagnosticMinAggregateOutputType | null
    _max: DiagnosticMaxAggregateOutputType | null
  }

  export type DiagnosticAvgAggregateOutputType = {
    id: number | null
    vehicleId: number | null
    scannerFileId: number | null
    cost: number | null
    duration: number | null
  }

  export type DiagnosticSumAggregateOutputType = {
    id: number | null
    vehicleId: number | null
    scannerFileId: number | null
    cost: number | null
    duration: number | null
  }

  export type DiagnosticMinAggregateOutputType = {
    id: number | null
    vehicleId: number | null
    fecha: Date | null
    desc: string | null
    tecnico: string | null
    estado: string | null
    detalles: string | null
    scannerFileId: number | null
    cost: number | null
    duration: number | null
  }

  export type DiagnosticMaxAggregateOutputType = {
    id: number | null
    vehicleId: number | null
    fecha: Date | null
    desc: string | null
    tecnico: string | null
    estado: string | null
    detalles: string | null
    scannerFileId: number | null
    cost: number | null
    duration: number | null
  }

  export type DiagnosticCountAggregateOutputType = {
    id: number
    vehicleId: number
    fecha: number
    desc: number
    tecnico: number
    estado: number
    detalles: number
    scannerFileId: number
    cost: number
    duration: number
    _all: number
  }


  export type DiagnosticAvgAggregateInputType = {
    id?: true
    vehicleId?: true
    scannerFileId?: true
    cost?: true
    duration?: true
  }

  export type DiagnosticSumAggregateInputType = {
    id?: true
    vehicleId?: true
    scannerFileId?: true
    cost?: true
    duration?: true
  }

  export type DiagnosticMinAggregateInputType = {
    id?: true
    vehicleId?: true
    fecha?: true
    desc?: true
    tecnico?: true
    estado?: true
    detalles?: true
    scannerFileId?: true
    cost?: true
    duration?: true
  }

  export type DiagnosticMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    fecha?: true
    desc?: true
    tecnico?: true
    estado?: true
    detalles?: true
    scannerFileId?: true
    cost?: true
    duration?: true
  }

  export type DiagnosticCountAggregateInputType = {
    id?: true
    vehicleId?: true
    fecha?: true
    desc?: true
    tecnico?: true
    estado?: true
    detalles?: true
    scannerFileId?: true
    cost?: true
    duration?: true
    _all?: true
  }

  export type DiagnosticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostic to aggregate.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnostics
    **/
    _count?: true | DiagnosticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticMaxAggregateInputType
  }

  export type GetDiagnosticAggregateType<T extends DiagnosticAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnostic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnostic[P]>
      : GetScalarType<T[P], AggregateDiagnostic[P]>
  }




  export type DiagnosticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticWhereInput
    orderBy?: DiagnosticOrderByWithAggregationInput | DiagnosticOrderByWithAggregationInput[]
    by: DiagnosticScalarFieldEnum[] | DiagnosticScalarFieldEnum
    having?: DiagnosticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticCountAggregateInputType | true
    _avg?: DiagnosticAvgAggregateInputType
    _sum?: DiagnosticSumAggregateInputType
    _min?: DiagnosticMinAggregateInputType
    _max?: DiagnosticMaxAggregateInputType
  }

  export type DiagnosticGroupByOutputType = {
    id: number
    vehicleId: number
    fecha: Date
    desc: string
    tecnico: string
    estado: string
    detalles: string
    scannerFileId: number | null
    cost: number
    duration: number
    _count: DiagnosticCountAggregateOutputType | null
    _avg: DiagnosticAvgAggregateOutputType | null
    _sum: DiagnosticSumAggregateOutputType | null
    _min: DiagnosticMinAggregateOutputType | null
    _max: DiagnosticMaxAggregateOutputType | null
  }

  type GetDiagnosticGroupByPayload<T extends DiagnosticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    fecha?: boolean
    desc?: boolean
    tecnico?: boolean
    estado?: boolean
    detalles?: boolean
    scannerFileId?: boolean
    cost?: boolean
    duration?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    scannerFile?: boolean | Diagnostic$scannerFileArgs<ExtArgs>
    dtcs?: boolean | Diagnostic$dtcsArgs<ExtArgs>
    symptoms?: boolean | Diagnostic$symptomsArgs<ExtArgs>
    _count?: boolean | DiagnosticCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>



  export type DiagnosticSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    fecha?: boolean
    desc?: boolean
    tecnico?: boolean
    estado?: boolean
    detalles?: boolean
    scannerFileId?: boolean
    cost?: boolean
    duration?: boolean
  }

  export type DiagnosticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "fecha" | "desc" | "tecnico" | "estado" | "detalles" | "scannerFileId" | "cost" | "duration", ExtArgs["result"]["diagnostic"]>
  export type DiagnosticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    scannerFile?: boolean | Diagnostic$scannerFileArgs<ExtArgs>
    dtcs?: boolean | Diagnostic$dtcsArgs<ExtArgs>
    symptoms?: boolean | Diagnostic$symptomsArgs<ExtArgs>
    _count?: boolean | DiagnosticCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiagnosticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnostic"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      scannerFile: Prisma.$ScannerFilePayload<ExtArgs> | null
      dtcs: Prisma.$DiagnosticDtcPayload<ExtArgs>[]
      symptoms: Prisma.$DiagnosticSymptomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vehicleId: number
      fecha: Date
      desc: string
      tecnico: string
      estado: string
      detalles: string
      scannerFileId: number | null
      cost: number
      duration: number
    }, ExtArgs["result"]["diagnostic"]>
    composites: {}
  }

  type DiagnosticGetPayload<S extends boolean | null | undefined | DiagnosticDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticPayload, S>

  type DiagnosticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticCountAggregateInputType | true
    }

  export interface DiagnosticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnostic'], meta: { name: 'Diagnostic' } }
    /**
     * Find zero or one Diagnostic that matches the filter.
     * @param {DiagnosticFindUniqueArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticFindUniqueArgs>(args: SelectSubset<T, DiagnosticFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnostic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticFindUniqueOrThrowArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindFirstArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticFindFirstArgs>(args?: SelectSubset<T, DiagnosticFindFirstArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindFirstOrThrowArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnostics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnostics
     * const diagnostics = await prisma.diagnostic.findMany()
     * 
     * // Get first 10 Diagnostics
     * const diagnostics = await prisma.diagnostic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticWithIdOnly = await prisma.diagnostic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosticFindManyArgs>(args?: SelectSubset<T, DiagnosticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnostic.
     * @param {DiagnosticCreateArgs} args - Arguments to create a Diagnostic.
     * @example
     * // Create one Diagnostic
     * const Diagnostic = await prisma.diagnostic.create({
     *   data: {
     *     // ... data to create a Diagnostic
     *   }
     * })
     * 
     */
    create<T extends DiagnosticCreateArgs>(args: SelectSubset<T, DiagnosticCreateArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnostics.
     * @param {DiagnosticCreateManyArgs} args - Arguments to create many Diagnostics.
     * @example
     * // Create many Diagnostics
     * const diagnostic = await prisma.diagnostic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticCreateManyArgs>(args?: SelectSubset<T, DiagnosticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Diagnostic.
     * @param {DiagnosticDeleteArgs} args - Arguments to delete one Diagnostic.
     * @example
     * // Delete one Diagnostic
     * const Diagnostic = await prisma.diagnostic.delete({
     *   where: {
     *     // ... filter to delete one Diagnostic
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticDeleteArgs>(args: SelectSubset<T, DiagnosticDeleteArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnostic.
     * @param {DiagnosticUpdateArgs} args - Arguments to update one Diagnostic.
     * @example
     * // Update one Diagnostic
     * const diagnostic = await prisma.diagnostic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticUpdateArgs>(args: SelectSubset<T, DiagnosticUpdateArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnostics.
     * @param {DiagnosticDeleteManyArgs} args - Arguments to filter Diagnostics to delete.
     * @example
     * // Delete a few Diagnostics
     * const { count } = await prisma.diagnostic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticDeleteManyArgs>(args?: SelectSubset<T, DiagnosticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnostics
     * const diagnostic = await prisma.diagnostic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticUpdateManyArgs>(args: SelectSubset<T, DiagnosticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagnostic.
     * @param {DiagnosticUpsertArgs} args - Arguments to update or create a Diagnostic.
     * @example
     * // Update or create a Diagnostic
     * const diagnostic = await prisma.diagnostic.upsert({
     *   create: {
     *     // ... data to create a Diagnostic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnostic we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticUpsertArgs>(args: SelectSubset<T, DiagnosticUpsertArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticCountArgs} args - Arguments to filter Diagnostics to count.
     * @example
     * // Count the number of Diagnostics
     * const count = await prisma.diagnostic.count({
     *   where: {
     *     // ... the filter for the Diagnostics we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticCountArgs>(
      args?: Subset<T, DiagnosticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnostic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticAggregateArgs>(args: Subset<T, DiagnosticAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticAggregateType<T>>

    /**
     * Group by Diagnostic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnostic model
   */
  readonly fields: DiagnosticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnostic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scannerFile<T extends Diagnostic$scannerFileArgs<ExtArgs> = {}>(args?: Subset<T, Diagnostic$scannerFileArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dtcs<T extends Diagnostic$dtcsArgs<ExtArgs> = {}>(args?: Subset<T, Diagnostic$dtcsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    symptoms<T extends Diagnostic$symptomsArgs<ExtArgs> = {}>(args?: Subset<T, Diagnostic$symptomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Diagnostic model
   */
  interface DiagnosticFieldRefs {
    readonly id: FieldRef<"Diagnostic", 'Int'>
    readonly vehicleId: FieldRef<"Diagnostic", 'Int'>
    readonly fecha: FieldRef<"Diagnostic", 'DateTime'>
    readonly desc: FieldRef<"Diagnostic", 'String'>
    readonly tecnico: FieldRef<"Diagnostic", 'String'>
    readonly estado: FieldRef<"Diagnostic", 'String'>
    readonly detalles: FieldRef<"Diagnostic", 'String'>
    readonly scannerFileId: FieldRef<"Diagnostic", 'Int'>
    readonly cost: FieldRef<"Diagnostic", 'Int'>
    readonly duration: FieldRef<"Diagnostic", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Diagnostic findUnique
   */
  export type DiagnosticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic findUniqueOrThrow
   */
  export type DiagnosticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic findFirst
   */
  export type DiagnosticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnostics.
     */
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic findFirstOrThrow
   */
  export type DiagnosticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnostics.
     */
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic findMany
   */
  export type DiagnosticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostics to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic create
   */
  export type DiagnosticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnostic.
     */
    data: XOR<DiagnosticCreateInput, DiagnosticUncheckedCreateInput>
  }

  /**
   * Diagnostic createMany
   */
  export type DiagnosticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnostics.
     */
    data: DiagnosticCreateManyInput | DiagnosticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnostic update
   */
  export type DiagnosticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnostic.
     */
    data: XOR<DiagnosticUpdateInput, DiagnosticUncheckedUpdateInput>
    /**
     * Choose, which Diagnostic to update.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic updateMany
   */
  export type DiagnosticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnostics.
     */
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyInput>
    /**
     * Filter which Diagnostics to update
     */
    where?: DiagnosticWhereInput
    /**
     * Limit how many Diagnostics to update.
     */
    limit?: number
  }

  /**
   * Diagnostic upsert
   */
  export type DiagnosticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnostic to update in case it exists.
     */
    where: DiagnosticWhereUniqueInput
    /**
     * In case the Diagnostic found by the `where` argument doesn't exist, create a new Diagnostic with this data.
     */
    create: XOR<DiagnosticCreateInput, DiagnosticUncheckedCreateInput>
    /**
     * In case the Diagnostic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticUpdateInput, DiagnosticUncheckedUpdateInput>
  }

  /**
   * Diagnostic delete
   */
  export type DiagnosticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter which Diagnostic to delete.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic deleteMany
   */
  export type DiagnosticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostics to delete
     */
    where?: DiagnosticWhereInput
    /**
     * Limit how many Diagnostics to delete.
     */
    limit?: number
  }

  /**
   * Diagnostic.scannerFile
   */
  export type Diagnostic$scannerFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    where?: ScannerFileWhereInput
  }

  /**
   * Diagnostic.dtcs
   */
  export type Diagnostic$dtcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    where?: DiagnosticDtcWhereInput
    orderBy?: DiagnosticDtcOrderByWithRelationInput | DiagnosticDtcOrderByWithRelationInput[]
    cursor?: DiagnosticDtcWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticDtcScalarFieldEnum | DiagnosticDtcScalarFieldEnum[]
  }

  /**
   * Diagnostic.symptoms
   */
  export type Diagnostic$symptomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    where?: DiagnosticSymptomWhereInput
    orderBy?: DiagnosticSymptomOrderByWithRelationInput | DiagnosticSymptomOrderByWithRelationInput[]
    cursor?: DiagnosticSymptomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticSymptomScalarFieldEnum | DiagnosticSymptomScalarFieldEnum[]
  }

  /**
   * Diagnostic without action
   */
  export type DiagnosticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
  }


  /**
   * Model DiagnosticDtc
   */

  export type AggregateDiagnosticDtc = {
    _count: DiagnosticDtcCountAggregateOutputType | null
    _avg: DiagnosticDtcAvgAggregateOutputType | null
    _sum: DiagnosticDtcSumAggregateOutputType | null
    _min: DiagnosticDtcMinAggregateOutputType | null
    _max: DiagnosticDtcMaxAggregateOutputType | null
  }

  export type DiagnosticDtcAvgAggregateOutputType = {
    diagnosticId: number | null
  }

  export type DiagnosticDtcSumAggregateOutputType = {
    diagnosticId: number | null
  }

  export type DiagnosticDtcMinAggregateOutputType = {
    diagnosticId: number | null
    dtcCode: string | null
  }

  export type DiagnosticDtcMaxAggregateOutputType = {
    diagnosticId: number | null
    dtcCode: string | null
  }

  export type DiagnosticDtcCountAggregateOutputType = {
    diagnosticId: number
    dtcCode: number
    _all: number
  }


  export type DiagnosticDtcAvgAggregateInputType = {
    diagnosticId?: true
  }

  export type DiagnosticDtcSumAggregateInputType = {
    diagnosticId?: true
  }

  export type DiagnosticDtcMinAggregateInputType = {
    diagnosticId?: true
    dtcCode?: true
  }

  export type DiagnosticDtcMaxAggregateInputType = {
    diagnosticId?: true
    dtcCode?: true
  }

  export type DiagnosticDtcCountAggregateInputType = {
    diagnosticId?: true
    dtcCode?: true
    _all?: true
  }

  export type DiagnosticDtcAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticDtc to aggregate.
     */
    where?: DiagnosticDtcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticDtcs to fetch.
     */
    orderBy?: DiagnosticDtcOrderByWithRelationInput | DiagnosticDtcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticDtcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticDtcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticDtcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosticDtcs
    **/
    _count?: true | DiagnosticDtcCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosticDtcAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosticDtcSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticDtcMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticDtcMaxAggregateInputType
  }

  export type GetDiagnosticDtcAggregateType<T extends DiagnosticDtcAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosticDtc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosticDtc[P]>
      : GetScalarType<T[P], AggregateDiagnosticDtc[P]>
  }




  export type DiagnosticDtcGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticDtcWhereInput
    orderBy?: DiagnosticDtcOrderByWithAggregationInput | DiagnosticDtcOrderByWithAggregationInput[]
    by: DiagnosticDtcScalarFieldEnum[] | DiagnosticDtcScalarFieldEnum
    having?: DiagnosticDtcScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticDtcCountAggregateInputType | true
    _avg?: DiagnosticDtcAvgAggregateInputType
    _sum?: DiagnosticDtcSumAggregateInputType
    _min?: DiagnosticDtcMinAggregateInputType
    _max?: DiagnosticDtcMaxAggregateInputType
  }

  export type DiagnosticDtcGroupByOutputType = {
    diagnosticId: number
    dtcCode: string
    _count: DiagnosticDtcCountAggregateOutputType | null
    _avg: DiagnosticDtcAvgAggregateOutputType | null
    _sum: DiagnosticDtcSumAggregateOutputType | null
    _min: DiagnosticDtcMinAggregateOutputType | null
    _max: DiagnosticDtcMaxAggregateOutputType | null
  }

  type GetDiagnosticDtcGroupByPayload<T extends DiagnosticDtcGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticDtcGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticDtcGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticDtcGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticDtcGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticDtcSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosticId?: boolean
    dtcCode?: boolean
    diagnostic?: boolean | DiagnosticDefaultArgs<ExtArgs>
    dtc?: boolean | DtcDefaultArgs<ExtArgs>
    diagnosticDtcSolutions?: boolean | DiagnosticDtc$diagnosticDtcSolutionsArgs<ExtArgs>
    _count?: boolean | DiagnosticDtcCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticDtc"]>



  export type DiagnosticDtcSelectScalar = {
    diagnosticId?: boolean
    dtcCode?: boolean
  }

  export type DiagnosticDtcOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"diagnosticId" | "dtcCode", ExtArgs["result"]["diagnosticDtc"]>
  export type DiagnosticDtcInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostic?: boolean | DiagnosticDefaultArgs<ExtArgs>
    dtc?: boolean | DtcDefaultArgs<ExtArgs>
    diagnosticDtcSolutions?: boolean | DiagnosticDtc$diagnosticDtcSolutionsArgs<ExtArgs>
    _count?: boolean | DiagnosticDtcCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiagnosticDtcPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosticDtc"
    objects: {
      diagnostic: Prisma.$DiagnosticPayload<ExtArgs>
      dtc: Prisma.$DtcPayload<ExtArgs>
      diagnosticDtcSolutions: Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      diagnosticId: number
      dtcCode: string
    }, ExtArgs["result"]["diagnosticDtc"]>
    composites: {}
  }

  type DiagnosticDtcGetPayload<S extends boolean | null | undefined | DiagnosticDtcDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticDtcPayload, S>

  type DiagnosticDtcCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticDtcFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticDtcCountAggregateInputType | true
    }

  export interface DiagnosticDtcDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosticDtc'], meta: { name: 'DiagnosticDtc' } }
    /**
     * Find zero or one DiagnosticDtc that matches the filter.
     * @param {DiagnosticDtcFindUniqueArgs} args - Arguments to find a DiagnosticDtc
     * @example
     * // Get one DiagnosticDtc
     * const diagnosticDtc = await prisma.diagnosticDtc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticDtcFindUniqueArgs>(args: SelectSubset<T, DiagnosticDtcFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiagnosticDtc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticDtcFindUniqueOrThrowArgs} args - Arguments to find a DiagnosticDtc
     * @example
     * // Get one DiagnosticDtc
     * const diagnosticDtc = await prisma.diagnosticDtc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticDtcFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticDtcFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticDtc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcFindFirstArgs} args - Arguments to find a DiagnosticDtc
     * @example
     * // Get one DiagnosticDtc
     * const diagnosticDtc = await prisma.diagnosticDtc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticDtcFindFirstArgs>(args?: SelectSubset<T, DiagnosticDtcFindFirstArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticDtc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcFindFirstOrThrowArgs} args - Arguments to find a DiagnosticDtc
     * @example
     * // Get one DiagnosticDtc
     * const diagnosticDtc = await prisma.diagnosticDtc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticDtcFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticDtcFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosticDtcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosticDtcs
     * const diagnosticDtcs = await prisma.diagnosticDtc.findMany()
     * 
     * // Get first 10 DiagnosticDtcs
     * const diagnosticDtcs = await prisma.diagnosticDtc.findMany({ take: 10 })
     * 
     * // Only select the `diagnosticId`
     * const diagnosticDtcWithDiagnosticIdOnly = await prisma.diagnosticDtc.findMany({ select: { diagnosticId: true } })
     * 
     */
    findMany<T extends DiagnosticDtcFindManyArgs>(args?: SelectSubset<T, DiagnosticDtcFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiagnosticDtc.
     * @param {DiagnosticDtcCreateArgs} args - Arguments to create a DiagnosticDtc.
     * @example
     * // Create one DiagnosticDtc
     * const DiagnosticDtc = await prisma.diagnosticDtc.create({
     *   data: {
     *     // ... data to create a DiagnosticDtc
     *   }
     * })
     * 
     */
    create<T extends DiagnosticDtcCreateArgs>(args: SelectSubset<T, DiagnosticDtcCreateArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiagnosticDtcs.
     * @param {DiagnosticDtcCreateManyArgs} args - Arguments to create many DiagnosticDtcs.
     * @example
     * // Create many DiagnosticDtcs
     * const diagnosticDtc = await prisma.diagnosticDtc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticDtcCreateManyArgs>(args?: SelectSubset<T, DiagnosticDtcCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiagnosticDtc.
     * @param {DiagnosticDtcDeleteArgs} args - Arguments to delete one DiagnosticDtc.
     * @example
     * // Delete one DiagnosticDtc
     * const DiagnosticDtc = await prisma.diagnosticDtc.delete({
     *   where: {
     *     // ... filter to delete one DiagnosticDtc
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticDtcDeleteArgs>(args: SelectSubset<T, DiagnosticDtcDeleteArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiagnosticDtc.
     * @param {DiagnosticDtcUpdateArgs} args - Arguments to update one DiagnosticDtc.
     * @example
     * // Update one DiagnosticDtc
     * const diagnosticDtc = await prisma.diagnosticDtc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticDtcUpdateArgs>(args: SelectSubset<T, DiagnosticDtcUpdateArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiagnosticDtcs.
     * @param {DiagnosticDtcDeleteManyArgs} args - Arguments to filter DiagnosticDtcs to delete.
     * @example
     * // Delete a few DiagnosticDtcs
     * const { count } = await prisma.diagnosticDtc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticDtcDeleteManyArgs>(args?: SelectSubset<T, DiagnosticDtcDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosticDtcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosticDtcs
     * const diagnosticDtc = await prisma.diagnosticDtc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticDtcUpdateManyArgs>(args: SelectSubset<T, DiagnosticDtcUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiagnosticDtc.
     * @param {DiagnosticDtcUpsertArgs} args - Arguments to update or create a DiagnosticDtc.
     * @example
     * // Update or create a DiagnosticDtc
     * const diagnosticDtc = await prisma.diagnosticDtc.upsert({
     *   create: {
     *     // ... data to create a DiagnosticDtc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosticDtc we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticDtcUpsertArgs>(args: SelectSubset<T, DiagnosticDtcUpsertArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiagnosticDtcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcCountArgs} args - Arguments to filter DiagnosticDtcs to count.
     * @example
     * // Count the number of DiagnosticDtcs
     * const count = await prisma.diagnosticDtc.count({
     *   where: {
     *     // ... the filter for the DiagnosticDtcs we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticDtcCountArgs>(
      args?: Subset<T, DiagnosticDtcCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticDtcCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosticDtc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticDtcAggregateArgs>(args: Subset<T, DiagnosticDtcAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticDtcAggregateType<T>>

    /**
     * Group by DiagnosticDtc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticDtcGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticDtcGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticDtcGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticDtcGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticDtcGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosticDtc model
   */
  readonly fields: DiagnosticDtcFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosticDtc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticDtcClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnostic<T extends DiagnosticDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticDefaultArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dtc<T extends DtcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DtcDefaultArgs<ExtArgs>>): Prisma__DtcClient<$Result.GetResult<Prisma.$DtcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnosticDtcSolutions<T extends DiagnosticDtc$diagnosticDtcSolutionsArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticDtc$diagnosticDtcSolutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiagnosticDtc model
   */
  interface DiagnosticDtcFieldRefs {
    readonly diagnosticId: FieldRef<"DiagnosticDtc", 'Int'>
    readonly dtcCode: FieldRef<"DiagnosticDtc", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosticDtc findUnique
   */
  export type DiagnosticDtcFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtc to fetch.
     */
    where: DiagnosticDtcWhereUniqueInput
  }

  /**
   * DiagnosticDtc findUniqueOrThrow
   */
  export type DiagnosticDtcFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtc to fetch.
     */
    where: DiagnosticDtcWhereUniqueInput
  }

  /**
   * DiagnosticDtc findFirst
   */
  export type DiagnosticDtcFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtc to fetch.
     */
    where?: DiagnosticDtcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticDtcs to fetch.
     */
    orderBy?: DiagnosticDtcOrderByWithRelationInput | DiagnosticDtcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticDtcs.
     */
    cursor?: DiagnosticDtcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticDtcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticDtcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticDtcs.
     */
    distinct?: DiagnosticDtcScalarFieldEnum | DiagnosticDtcScalarFieldEnum[]
  }

  /**
   * DiagnosticDtc findFirstOrThrow
   */
  export type DiagnosticDtcFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtc to fetch.
     */
    where?: DiagnosticDtcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticDtcs to fetch.
     */
    orderBy?: DiagnosticDtcOrderByWithRelationInput | DiagnosticDtcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticDtcs.
     */
    cursor?: DiagnosticDtcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticDtcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticDtcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticDtcs.
     */
    distinct?: DiagnosticDtcScalarFieldEnum | DiagnosticDtcScalarFieldEnum[]
  }

  /**
   * DiagnosticDtc findMany
   */
  export type DiagnosticDtcFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtcs to fetch.
     */
    where?: DiagnosticDtcWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticDtcs to fetch.
     */
    orderBy?: DiagnosticDtcOrderByWithRelationInput | DiagnosticDtcOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosticDtcs.
     */
    cursor?: DiagnosticDtcWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticDtcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticDtcs.
     */
    skip?: number
    distinct?: DiagnosticDtcScalarFieldEnum | DiagnosticDtcScalarFieldEnum[]
  }

  /**
   * DiagnosticDtc create
   */
  export type DiagnosticDtcCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * The data needed to create a DiagnosticDtc.
     */
    data: XOR<DiagnosticDtcCreateInput, DiagnosticDtcUncheckedCreateInput>
  }

  /**
   * DiagnosticDtc createMany
   */
  export type DiagnosticDtcCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosticDtcs.
     */
    data: DiagnosticDtcCreateManyInput | DiagnosticDtcCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosticDtc update
   */
  export type DiagnosticDtcUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * The data needed to update a DiagnosticDtc.
     */
    data: XOR<DiagnosticDtcUpdateInput, DiagnosticDtcUncheckedUpdateInput>
    /**
     * Choose, which DiagnosticDtc to update.
     */
    where: DiagnosticDtcWhereUniqueInput
  }

  /**
   * DiagnosticDtc updateMany
   */
  export type DiagnosticDtcUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosticDtcs.
     */
    data: XOR<DiagnosticDtcUpdateManyMutationInput, DiagnosticDtcUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosticDtcs to update
     */
    where?: DiagnosticDtcWhereInput
    /**
     * Limit how many DiagnosticDtcs to update.
     */
    limit?: number
  }

  /**
   * DiagnosticDtc upsert
   */
  export type DiagnosticDtcUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * The filter to search for the DiagnosticDtc to update in case it exists.
     */
    where: DiagnosticDtcWhereUniqueInput
    /**
     * In case the DiagnosticDtc found by the `where` argument doesn't exist, create a new DiagnosticDtc with this data.
     */
    create: XOR<DiagnosticDtcCreateInput, DiagnosticDtcUncheckedCreateInput>
    /**
     * In case the DiagnosticDtc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticDtcUpdateInput, DiagnosticDtcUncheckedUpdateInput>
  }

  /**
   * DiagnosticDtc delete
   */
  export type DiagnosticDtcDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
    /**
     * Filter which DiagnosticDtc to delete.
     */
    where: DiagnosticDtcWhereUniqueInput
  }

  /**
   * DiagnosticDtc deleteMany
   */
  export type DiagnosticDtcDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticDtcs to delete
     */
    where?: DiagnosticDtcWhereInput
    /**
     * Limit how many DiagnosticDtcs to delete.
     */
    limit?: number
  }

  /**
   * DiagnosticDtc.diagnosticDtcSolutions
   */
  export type DiagnosticDtc$diagnosticDtcSolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    where?: DiagnosticDtcSolutionWhereInput
    orderBy?: DiagnosticDtcSolutionOrderByWithRelationInput | DiagnosticDtcSolutionOrderByWithRelationInput[]
    cursor?: DiagnosticDtcSolutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticDtcSolutionScalarFieldEnum | DiagnosticDtcSolutionScalarFieldEnum[]
  }

  /**
   * DiagnosticDtc without action
   */
  export type DiagnosticDtcDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtc
     */
    select?: DiagnosticDtcSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtc
     */
    omit?: DiagnosticDtcOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcInclude<ExtArgs> | null
  }


  /**
   * Model DiagnosticDtcSolution
   */

  export type AggregateDiagnosticDtcSolution = {
    _count: DiagnosticDtcSolutionCountAggregateOutputType | null
    _avg: DiagnosticDtcSolutionAvgAggregateOutputType | null
    _sum: DiagnosticDtcSolutionSumAggregateOutputType | null
    _min: DiagnosticDtcSolutionMinAggregateOutputType | null
    _max: DiagnosticDtcSolutionMaxAggregateOutputType | null
  }

  export type DiagnosticDtcSolutionAvgAggregateOutputType = {
    id: number | null
    diagnosticId: number | null
  }

  export type DiagnosticDtcSolutionSumAggregateOutputType = {
    id: number | null
    diagnosticId: number | null
  }

  export type DiagnosticDtcSolutionMinAggregateOutputType = {
    id: number | null
    text: string | null
    diagnosticId: number | null
    dtcCode: string | null
  }

  export type DiagnosticDtcSolutionMaxAggregateOutputType = {
    id: number | null
    text: string | null
    diagnosticId: number | null
    dtcCode: string | null
  }

  export type DiagnosticDtcSolutionCountAggregateOutputType = {
    id: number
    text: number
    diagnosticId: number
    dtcCode: number
    _all: number
  }


  export type DiagnosticDtcSolutionAvgAggregateInputType = {
    id?: true
    diagnosticId?: true
  }

  export type DiagnosticDtcSolutionSumAggregateInputType = {
    id?: true
    diagnosticId?: true
  }

  export type DiagnosticDtcSolutionMinAggregateInputType = {
    id?: true
    text?: true
    diagnosticId?: true
    dtcCode?: true
  }

  export type DiagnosticDtcSolutionMaxAggregateInputType = {
    id?: true
    text?: true
    diagnosticId?: true
    dtcCode?: true
  }

  export type DiagnosticDtcSolutionCountAggregateInputType = {
    id?: true
    text?: true
    diagnosticId?: true
    dtcCode?: true
    _all?: true
  }

  export type DiagnosticDtcSolutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticDtcSolution to aggregate.
     */
    where?: DiagnosticDtcSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticDtcSolutions to fetch.
     */
    orderBy?: DiagnosticDtcSolutionOrderByWithRelationInput | DiagnosticDtcSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticDtcSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticDtcSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticDtcSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosticDtcSolutions
    **/
    _count?: true | DiagnosticDtcSolutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosticDtcSolutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosticDtcSolutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticDtcSolutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticDtcSolutionMaxAggregateInputType
  }

  export type GetDiagnosticDtcSolutionAggregateType<T extends DiagnosticDtcSolutionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosticDtcSolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosticDtcSolution[P]>
      : GetScalarType<T[P], AggregateDiagnosticDtcSolution[P]>
  }




  export type DiagnosticDtcSolutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticDtcSolutionWhereInput
    orderBy?: DiagnosticDtcSolutionOrderByWithAggregationInput | DiagnosticDtcSolutionOrderByWithAggregationInput[]
    by: DiagnosticDtcSolutionScalarFieldEnum[] | DiagnosticDtcSolutionScalarFieldEnum
    having?: DiagnosticDtcSolutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticDtcSolutionCountAggregateInputType | true
    _avg?: DiagnosticDtcSolutionAvgAggregateInputType
    _sum?: DiagnosticDtcSolutionSumAggregateInputType
    _min?: DiagnosticDtcSolutionMinAggregateInputType
    _max?: DiagnosticDtcSolutionMaxAggregateInputType
  }

  export type DiagnosticDtcSolutionGroupByOutputType = {
    id: number
    text: string
    diagnosticId: number
    dtcCode: string
    _count: DiagnosticDtcSolutionCountAggregateOutputType | null
    _avg: DiagnosticDtcSolutionAvgAggregateOutputType | null
    _sum: DiagnosticDtcSolutionSumAggregateOutputType | null
    _min: DiagnosticDtcSolutionMinAggregateOutputType | null
    _max: DiagnosticDtcSolutionMaxAggregateOutputType | null
  }

  type GetDiagnosticDtcSolutionGroupByPayload<T extends DiagnosticDtcSolutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticDtcSolutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticDtcSolutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticDtcSolutionGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticDtcSolutionGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticDtcSolutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    diagnosticId?: boolean
    dtcCode?: boolean
    diagnosticDtc?: boolean | DiagnosticDtcDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticDtcSolution"]>



  export type DiagnosticDtcSolutionSelectScalar = {
    id?: boolean
    text?: boolean
    diagnosticId?: boolean
    dtcCode?: boolean
  }

  export type DiagnosticDtcSolutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "diagnosticId" | "dtcCode", ExtArgs["result"]["diagnosticDtcSolution"]>
  export type DiagnosticDtcSolutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticDtc?: boolean | DiagnosticDtcDefaultArgs<ExtArgs>
  }

  export type $DiagnosticDtcSolutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosticDtcSolution"
    objects: {
      diagnosticDtc: Prisma.$DiagnosticDtcPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      diagnosticId: number
      dtcCode: string
    }, ExtArgs["result"]["diagnosticDtcSolution"]>
    composites: {}
  }

  type DiagnosticDtcSolutionGetPayload<S extends boolean | null | undefined | DiagnosticDtcSolutionDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload, S>

  type DiagnosticDtcSolutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticDtcSolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticDtcSolutionCountAggregateInputType | true
    }

  export interface DiagnosticDtcSolutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosticDtcSolution'], meta: { name: 'DiagnosticDtcSolution' } }
    /**
     * Find zero or one DiagnosticDtcSolution that matches the filter.
     * @param {DiagnosticDtcSolutionFindUniqueArgs} args - Arguments to find a DiagnosticDtcSolution
     * @example
     * // Get one DiagnosticDtcSolution
     * const diagnosticDtcSolution = await prisma.diagnosticDtcSolution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticDtcSolutionFindUniqueArgs>(args: SelectSubset<T, DiagnosticDtcSolutionFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticDtcSolutionClient<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiagnosticDtcSolution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticDtcSolutionFindUniqueOrThrowArgs} args - Arguments to find a DiagnosticDtcSolution
     * @example
     * // Get one DiagnosticDtcSolution
     * const diagnosticDtcSolution = await prisma.diagnosticDtcSolution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticDtcSolutionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticDtcSolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticDtcSolutionClient<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticDtcSolution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcSolutionFindFirstArgs} args - Arguments to find a DiagnosticDtcSolution
     * @example
     * // Get one DiagnosticDtcSolution
     * const diagnosticDtcSolution = await prisma.diagnosticDtcSolution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticDtcSolutionFindFirstArgs>(args?: SelectSubset<T, DiagnosticDtcSolutionFindFirstArgs<ExtArgs>>): Prisma__DiagnosticDtcSolutionClient<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticDtcSolution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcSolutionFindFirstOrThrowArgs} args - Arguments to find a DiagnosticDtcSolution
     * @example
     * // Get one DiagnosticDtcSolution
     * const diagnosticDtcSolution = await prisma.diagnosticDtcSolution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticDtcSolutionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticDtcSolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticDtcSolutionClient<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosticDtcSolutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcSolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosticDtcSolutions
     * const diagnosticDtcSolutions = await prisma.diagnosticDtcSolution.findMany()
     * 
     * // Get first 10 DiagnosticDtcSolutions
     * const diagnosticDtcSolutions = await prisma.diagnosticDtcSolution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticDtcSolutionWithIdOnly = await prisma.diagnosticDtcSolution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosticDtcSolutionFindManyArgs>(args?: SelectSubset<T, DiagnosticDtcSolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiagnosticDtcSolution.
     * @param {DiagnosticDtcSolutionCreateArgs} args - Arguments to create a DiagnosticDtcSolution.
     * @example
     * // Create one DiagnosticDtcSolution
     * const DiagnosticDtcSolution = await prisma.diagnosticDtcSolution.create({
     *   data: {
     *     // ... data to create a DiagnosticDtcSolution
     *   }
     * })
     * 
     */
    create<T extends DiagnosticDtcSolutionCreateArgs>(args: SelectSubset<T, DiagnosticDtcSolutionCreateArgs<ExtArgs>>): Prisma__DiagnosticDtcSolutionClient<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiagnosticDtcSolutions.
     * @param {DiagnosticDtcSolutionCreateManyArgs} args - Arguments to create many DiagnosticDtcSolutions.
     * @example
     * // Create many DiagnosticDtcSolutions
     * const diagnosticDtcSolution = await prisma.diagnosticDtcSolution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticDtcSolutionCreateManyArgs>(args?: SelectSubset<T, DiagnosticDtcSolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiagnosticDtcSolution.
     * @param {DiagnosticDtcSolutionDeleteArgs} args - Arguments to delete one DiagnosticDtcSolution.
     * @example
     * // Delete one DiagnosticDtcSolution
     * const DiagnosticDtcSolution = await prisma.diagnosticDtcSolution.delete({
     *   where: {
     *     // ... filter to delete one DiagnosticDtcSolution
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticDtcSolutionDeleteArgs>(args: SelectSubset<T, DiagnosticDtcSolutionDeleteArgs<ExtArgs>>): Prisma__DiagnosticDtcSolutionClient<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiagnosticDtcSolution.
     * @param {DiagnosticDtcSolutionUpdateArgs} args - Arguments to update one DiagnosticDtcSolution.
     * @example
     * // Update one DiagnosticDtcSolution
     * const diagnosticDtcSolution = await prisma.diagnosticDtcSolution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticDtcSolutionUpdateArgs>(args: SelectSubset<T, DiagnosticDtcSolutionUpdateArgs<ExtArgs>>): Prisma__DiagnosticDtcSolutionClient<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiagnosticDtcSolutions.
     * @param {DiagnosticDtcSolutionDeleteManyArgs} args - Arguments to filter DiagnosticDtcSolutions to delete.
     * @example
     * // Delete a few DiagnosticDtcSolutions
     * const { count } = await prisma.diagnosticDtcSolution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticDtcSolutionDeleteManyArgs>(args?: SelectSubset<T, DiagnosticDtcSolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosticDtcSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcSolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosticDtcSolutions
     * const diagnosticDtcSolution = await prisma.diagnosticDtcSolution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticDtcSolutionUpdateManyArgs>(args: SelectSubset<T, DiagnosticDtcSolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiagnosticDtcSolution.
     * @param {DiagnosticDtcSolutionUpsertArgs} args - Arguments to update or create a DiagnosticDtcSolution.
     * @example
     * // Update or create a DiagnosticDtcSolution
     * const diagnosticDtcSolution = await prisma.diagnosticDtcSolution.upsert({
     *   create: {
     *     // ... data to create a DiagnosticDtcSolution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosticDtcSolution we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticDtcSolutionUpsertArgs>(args: SelectSubset<T, DiagnosticDtcSolutionUpsertArgs<ExtArgs>>): Prisma__DiagnosticDtcSolutionClient<$Result.GetResult<Prisma.$DiagnosticDtcSolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiagnosticDtcSolutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcSolutionCountArgs} args - Arguments to filter DiagnosticDtcSolutions to count.
     * @example
     * // Count the number of DiagnosticDtcSolutions
     * const count = await prisma.diagnosticDtcSolution.count({
     *   where: {
     *     // ... the filter for the DiagnosticDtcSolutions we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticDtcSolutionCountArgs>(
      args?: Subset<T, DiagnosticDtcSolutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticDtcSolutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosticDtcSolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcSolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticDtcSolutionAggregateArgs>(args: Subset<T, DiagnosticDtcSolutionAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticDtcSolutionAggregateType<T>>

    /**
     * Group by DiagnosticDtcSolution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticDtcSolutionGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticDtcSolutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticDtcSolutionGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticDtcSolutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticDtcSolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticDtcSolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosticDtcSolution model
   */
  readonly fields: DiagnosticDtcSolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosticDtcSolution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticDtcSolutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosticDtc<T extends DiagnosticDtcDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticDtcDefaultArgs<ExtArgs>>): Prisma__DiagnosticDtcClient<$Result.GetResult<Prisma.$DiagnosticDtcPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiagnosticDtcSolution model
   */
  interface DiagnosticDtcSolutionFieldRefs {
    readonly id: FieldRef<"DiagnosticDtcSolution", 'Int'>
    readonly text: FieldRef<"DiagnosticDtcSolution", 'String'>
    readonly diagnosticId: FieldRef<"DiagnosticDtcSolution", 'Int'>
    readonly dtcCode: FieldRef<"DiagnosticDtcSolution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosticDtcSolution findUnique
   */
  export type DiagnosticDtcSolutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtcSolution to fetch.
     */
    where: DiagnosticDtcSolutionWhereUniqueInput
  }

  /**
   * DiagnosticDtcSolution findUniqueOrThrow
   */
  export type DiagnosticDtcSolutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtcSolution to fetch.
     */
    where: DiagnosticDtcSolutionWhereUniqueInput
  }

  /**
   * DiagnosticDtcSolution findFirst
   */
  export type DiagnosticDtcSolutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtcSolution to fetch.
     */
    where?: DiagnosticDtcSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticDtcSolutions to fetch.
     */
    orderBy?: DiagnosticDtcSolutionOrderByWithRelationInput | DiagnosticDtcSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticDtcSolutions.
     */
    cursor?: DiagnosticDtcSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticDtcSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticDtcSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticDtcSolutions.
     */
    distinct?: DiagnosticDtcSolutionScalarFieldEnum | DiagnosticDtcSolutionScalarFieldEnum[]
  }

  /**
   * DiagnosticDtcSolution findFirstOrThrow
   */
  export type DiagnosticDtcSolutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtcSolution to fetch.
     */
    where?: DiagnosticDtcSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticDtcSolutions to fetch.
     */
    orderBy?: DiagnosticDtcSolutionOrderByWithRelationInput | DiagnosticDtcSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticDtcSolutions.
     */
    cursor?: DiagnosticDtcSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticDtcSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticDtcSolutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticDtcSolutions.
     */
    distinct?: DiagnosticDtcSolutionScalarFieldEnum | DiagnosticDtcSolutionScalarFieldEnum[]
  }

  /**
   * DiagnosticDtcSolution findMany
   */
  export type DiagnosticDtcSolutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticDtcSolutions to fetch.
     */
    where?: DiagnosticDtcSolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticDtcSolutions to fetch.
     */
    orderBy?: DiagnosticDtcSolutionOrderByWithRelationInput | DiagnosticDtcSolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosticDtcSolutions.
     */
    cursor?: DiagnosticDtcSolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticDtcSolutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticDtcSolutions.
     */
    skip?: number
    distinct?: DiagnosticDtcSolutionScalarFieldEnum | DiagnosticDtcSolutionScalarFieldEnum[]
  }

  /**
   * DiagnosticDtcSolution create
   */
  export type DiagnosticDtcSolutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * The data needed to create a DiagnosticDtcSolution.
     */
    data: XOR<DiagnosticDtcSolutionCreateInput, DiagnosticDtcSolutionUncheckedCreateInput>
  }

  /**
   * DiagnosticDtcSolution createMany
   */
  export type DiagnosticDtcSolutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosticDtcSolutions.
     */
    data: DiagnosticDtcSolutionCreateManyInput | DiagnosticDtcSolutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosticDtcSolution update
   */
  export type DiagnosticDtcSolutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * The data needed to update a DiagnosticDtcSolution.
     */
    data: XOR<DiagnosticDtcSolutionUpdateInput, DiagnosticDtcSolutionUncheckedUpdateInput>
    /**
     * Choose, which DiagnosticDtcSolution to update.
     */
    where: DiagnosticDtcSolutionWhereUniqueInput
  }

  /**
   * DiagnosticDtcSolution updateMany
   */
  export type DiagnosticDtcSolutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosticDtcSolutions.
     */
    data: XOR<DiagnosticDtcSolutionUpdateManyMutationInput, DiagnosticDtcSolutionUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosticDtcSolutions to update
     */
    where?: DiagnosticDtcSolutionWhereInput
    /**
     * Limit how many DiagnosticDtcSolutions to update.
     */
    limit?: number
  }

  /**
   * DiagnosticDtcSolution upsert
   */
  export type DiagnosticDtcSolutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * The filter to search for the DiagnosticDtcSolution to update in case it exists.
     */
    where: DiagnosticDtcSolutionWhereUniqueInput
    /**
     * In case the DiagnosticDtcSolution found by the `where` argument doesn't exist, create a new DiagnosticDtcSolution with this data.
     */
    create: XOR<DiagnosticDtcSolutionCreateInput, DiagnosticDtcSolutionUncheckedCreateInput>
    /**
     * In case the DiagnosticDtcSolution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticDtcSolutionUpdateInput, DiagnosticDtcSolutionUncheckedUpdateInput>
  }

  /**
   * DiagnosticDtcSolution delete
   */
  export type DiagnosticDtcSolutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
    /**
     * Filter which DiagnosticDtcSolution to delete.
     */
    where: DiagnosticDtcSolutionWhereUniqueInput
  }

  /**
   * DiagnosticDtcSolution deleteMany
   */
  export type DiagnosticDtcSolutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticDtcSolutions to delete
     */
    where?: DiagnosticDtcSolutionWhereInput
    /**
     * Limit how many DiagnosticDtcSolutions to delete.
     */
    limit?: number
  }

  /**
   * DiagnosticDtcSolution without action
   */
  export type DiagnosticDtcSolutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticDtcSolution
     */
    select?: DiagnosticDtcSolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticDtcSolution
     */
    omit?: DiagnosticDtcSolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticDtcSolutionInclude<ExtArgs> | null
  }


  /**
   * Model DiagnosticSymptom
   */

  export type AggregateDiagnosticSymptom = {
    _count: DiagnosticSymptomCountAggregateOutputType | null
    _avg: DiagnosticSymptomAvgAggregateOutputType | null
    _sum: DiagnosticSymptomSumAggregateOutputType | null
    _min: DiagnosticSymptomMinAggregateOutputType | null
    _max: DiagnosticSymptomMaxAggregateOutputType | null
  }

  export type DiagnosticSymptomAvgAggregateOutputType = {
    diagnosticId: number | null
    symptomId: number | null
  }

  export type DiagnosticSymptomSumAggregateOutputType = {
    diagnosticId: number | null
    symptomId: number | null
  }

  export type DiagnosticSymptomMinAggregateOutputType = {
    diagnosticId: number | null
    symptomId: number | null
  }

  export type DiagnosticSymptomMaxAggregateOutputType = {
    diagnosticId: number | null
    symptomId: number | null
  }

  export type DiagnosticSymptomCountAggregateOutputType = {
    diagnosticId: number
    symptomId: number
    _all: number
  }


  export type DiagnosticSymptomAvgAggregateInputType = {
    diagnosticId?: true
    symptomId?: true
  }

  export type DiagnosticSymptomSumAggregateInputType = {
    diagnosticId?: true
    symptomId?: true
  }

  export type DiagnosticSymptomMinAggregateInputType = {
    diagnosticId?: true
    symptomId?: true
  }

  export type DiagnosticSymptomMaxAggregateInputType = {
    diagnosticId?: true
    symptomId?: true
  }

  export type DiagnosticSymptomCountAggregateInputType = {
    diagnosticId?: true
    symptomId?: true
    _all?: true
  }

  export type DiagnosticSymptomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticSymptom to aggregate.
     */
    where?: DiagnosticSymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticSymptoms to fetch.
     */
    orderBy?: DiagnosticSymptomOrderByWithRelationInput | DiagnosticSymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticSymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticSymptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticSymptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosticSymptoms
    **/
    _count?: true | DiagnosticSymptomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosticSymptomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosticSymptomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticSymptomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticSymptomMaxAggregateInputType
  }

  export type GetDiagnosticSymptomAggregateType<T extends DiagnosticSymptomAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosticSymptom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosticSymptom[P]>
      : GetScalarType<T[P], AggregateDiagnosticSymptom[P]>
  }




  export type DiagnosticSymptomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticSymptomWhereInput
    orderBy?: DiagnosticSymptomOrderByWithAggregationInput | DiagnosticSymptomOrderByWithAggregationInput[]
    by: DiagnosticSymptomScalarFieldEnum[] | DiagnosticSymptomScalarFieldEnum
    having?: DiagnosticSymptomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticSymptomCountAggregateInputType | true
    _avg?: DiagnosticSymptomAvgAggregateInputType
    _sum?: DiagnosticSymptomSumAggregateInputType
    _min?: DiagnosticSymptomMinAggregateInputType
    _max?: DiagnosticSymptomMaxAggregateInputType
  }

  export type DiagnosticSymptomGroupByOutputType = {
    diagnosticId: number
    symptomId: number
    _count: DiagnosticSymptomCountAggregateOutputType | null
    _avg: DiagnosticSymptomAvgAggregateOutputType | null
    _sum: DiagnosticSymptomSumAggregateOutputType | null
    _min: DiagnosticSymptomMinAggregateOutputType | null
    _max: DiagnosticSymptomMaxAggregateOutputType | null
  }

  type GetDiagnosticSymptomGroupByPayload<T extends DiagnosticSymptomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticSymptomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticSymptomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticSymptomGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticSymptomGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticSymptomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    diagnosticId?: boolean
    symptomId?: boolean
    diagnostic?: boolean | DiagnosticDefaultArgs<ExtArgs>
    symptom?: boolean | SymptomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticSymptom"]>



  export type DiagnosticSymptomSelectScalar = {
    diagnosticId?: boolean
    symptomId?: boolean
  }

  export type DiagnosticSymptomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"diagnosticId" | "symptomId", ExtArgs["result"]["diagnosticSymptom"]>
  export type DiagnosticSymptomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostic?: boolean | DiagnosticDefaultArgs<ExtArgs>
    symptom?: boolean | SymptomDefaultArgs<ExtArgs>
  }

  export type $DiagnosticSymptomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosticSymptom"
    objects: {
      diagnostic: Prisma.$DiagnosticPayload<ExtArgs>
      symptom: Prisma.$SymptomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      diagnosticId: number
      symptomId: number
    }, ExtArgs["result"]["diagnosticSymptom"]>
    composites: {}
  }

  type DiagnosticSymptomGetPayload<S extends boolean | null | undefined | DiagnosticSymptomDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticSymptomPayload, S>

  type DiagnosticSymptomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticSymptomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticSymptomCountAggregateInputType | true
    }

  export interface DiagnosticSymptomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosticSymptom'], meta: { name: 'DiagnosticSymptom' } }
    /**
     * Find zero or one DiagnosticSymptom that matches the filter.
     * @param {DiagnosticSymptomFindUniqueArgs} args - Arguments to find a DiagnosticSymptom
     * @example
     * // Get one DiagnosticSymptom
     * const diagnosticSymptom = await prisma.diagnosticSymptom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticSymptomFindUniqueArgs>(args: SelectSubset<T, DiagnosticSymptomFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticSymptomClient<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiagnosticSymptom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticSymptomFindUniqueOrThrowArgs} args - Arguments to find a DiagnosticSymptom
     * @example
     * // Get one DiagnosticSymptom
     * const diagnosticSymptom = await prisma.diagnosticSymptom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticSymptomFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticSymptomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticSymptomClient<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticSymptom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticSymptomFindFirstArgs} args - Arguments to find a DiagnosticSymptom
     * @example
     * // Get one DiagnosticSymptom
     * const diagnosticSymptom = await prisma.diagnosticSymptom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticSymptomFindFirstArgs>(args?: SelectSubset<T, DiagnosticSymptomFindFirstArgs<ExtArgs>>): Prisma__DiagnosticSymptomClient<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticSymptom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticSymptomFindFirstOrThrowArgs} args - Arguments to find a DiagnosticSymptom
     * @example
     * // Get one DiagnosticSymptom
     * const diagnosticSymptom = await prisma.diagnosticSymptom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticSymptomFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticSymptomFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticSymptomClient<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosticSymptoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticSymptomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosticSymptoms
     * const diagnosticSymptoms = await prisma.diagnosticSymptom.findMany()
     * 
     * // Get first 10 DiagnosticSymptoms
     * const diagnosticSymptoms = await prisma.diagnosticSymptom.findMany({ take: 10 })
     * 
     * // Only select the `diagnosticId`
     * const diagnosticSymptomWithDiagnosticIdOnly = await prisma.diagnosticSymptom.findMany({ select: { diagnosticId: true } })
     * 
     */
    findMany<T extends DiagnosticSymptomFindManyArgs>(args?: SelectSubset<T, DiagnosticSymptomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiagnosticSymptom.
     * @param {DiagnosticSymptomCreateArgs} args - Arguments to create a DiagnosticSymptom.
     * @example
     * // Create one DiagnosticSymptom
     * const DiagnosticSymptom = await prisma.diagnosticSymptom.create({
     *   data: {
     *     // ... data to create a DiagnosticSymptom
     *   }
     * })
     * 
     */
    create<T extends DiagnosticSymptomCreateArgs>(args: SelectSubset<T, DiagnosticSymptomCreateArgs<ExtArgs>>): Prisma__DiagnosticSymptomClient<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiagnosticSymptoms.
     * @param {DiagnosticSymptomCreateManyArgs} args - Arguments to create many DiagnosticSymptoms.
     * @example
     * // Create many DiagnosticSymptoms
     * const diagnosticSymptom = await prisma.diagnosticSymptom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticSymptomCreateManyArgs>(args?: SelectSubset<T, DiagnosticSymptomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiagnosticSymptom.
     * @param {DiagnosticSymptomDeleteArgs} args - Arguments to delete one DiagnosticSymptom.
     * @example
     * // Delete one DiagnosticSymptom
     * const DiagnosticSymptom = await prisma.diagnosticSymptom.delete({
     *   where: {
     *     // ... filter to delete one DiagnosticSymptom
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticSymptomDeleteArgs>(args: SelectSubset<T, DiagnosticSymptomDeleteArgs<ExtArgs>>): Prisma__DiagnosticSymptomClient<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiagnosticSymptom.
     * @param {DiagnosticSymptomUpdateArgs} args - Arguments to update one DiagnosticSymptom.
     * @example
     * // Update one DiagnosticSymptom
     * const diagnosticSymptom = await prisma.diagnosticSymptom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticSymptomUpdateArgs>(args: SelectSubset<T, DiagnosticSymptomUpdateArgs<ExtArgs>>): Prisma__DiagnosticSymptomClient<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiagnosticSymptoms.
     * @param {DiagnosticSymptomDeleteManyArgs} args - Arguments to filter DiagnosticSymptoms to delete.
     * @example
     * // Delete a few DiagnosticSymptoms
     * const { count } = await prisma.diagnosticSymptom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticSymptomDeleteManyArgs>(args?: SelectSubset<T, DiagnosticSymptomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosticSymptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticSymptomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosticSymptoms
     * const diagnosticSymptom = await prisma.diagnosticSymptom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticSymptomUpdateManyArgs>(args: SelectSubset<T, DiagnosticSymptomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiagnosticSymptom.
     * @param {DiagnosticSymptomUpsertArgs} args - Arguments to update or create a DiagnosticSymptom.
     * @example
     * // Update or create a DiagnosticSymptom
     * const diagnosticSymptom = await prisma.diagnosticSymptom.upsert({
     *   create: {
     *     // ... data to create a DiagnosticSymptom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosticSymptom we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticSymptomUpsertArgs>(args: SelectSubset<T, DiagnosticSymptomUpsertArgs<ExtArgs>>): Prisma__DiagnosticSymptomClient<$Result.GetResult<Prisma.$DiagnosticSymptomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiagnosticSymptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticSymptomCountArgs} args - Arguments to filter DiagnosticSymptoms to count.
     * @example
     * // Count the number of DiagnosticSymptoms
     * const count = await prisma.diagnosticSymptom.count({
     *   where: {
     *     // ... the filter for the DiagnosticSymptoms we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticSymptomCountArgs>(
      args?: Subset<T, DiagnosticSymptomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticSymptomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosticSymptom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticSymptomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticSymptomAggregateArgs>(args: Subset<T, DiagnosticSymptomAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticSymptomAggregateType<T>>

    /**
     * Group by DiagnosticSymptom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticSymptomGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticSymptomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticSymptomGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticSymptomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticSymptomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticSymptomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosticSymptom model
   */
  readonly fields: DiagnosticSymptomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosticSymptom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticSymptomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnostic<T extends DiagnosticDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticDefaultArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    symptom<T extends SymptomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SymptomDefaultArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiagnosticSymptom model
   */
  interface DiagnosticSymptomFieldRefs {
    readonly diagnosticId: FieldRef<"DiagnosticSymptom", 'Int'>
    readonly symptomId: FieldRef<"DiagnosticSymptom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosticSymptom findUnique
   */
  export type DiagnosticSymptomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticSymptom to fetch.
     */
    where: DiagnosticSymptomWhereUniqueInput
  }

  /**
   * DiagnosticSymptom findUniqueOrThrow
   */
  export type DiagnosticSymptomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticSymptom to fetch.
     */
    where: DiagnosticSymptomWhereUniqueInput
  }

  /**
   * DiagnosticSymptom findFirst
   */
  export type DiagnosticSymptomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticSymptom to fetch.
     */
    where?: DiagnosticSymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticSymptoms to fetch.
     */
    orderBy?: DiagnosticSymptomOrderByWithRelationInput | DiagnosticSymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticSymptoms.
     */
    cursor?: DiagnosticSymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticSymptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticSymptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticSymptoms.
     */
    distinct?: DiagnosticSymptomScalarFieldEnum | DiagnosticSymptomScalarFieldEnum[]
  }

  /**
   * DiagnosticSymptom findFirstOrThrow
   */
  export type DiagnosticSymptomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticSymptom to fetch.
     */
    where?: DiagnosticSymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticSymptoms to fetch.
     */
    orderBy?: DiagnosticSymptomOrderByWithRelationInput | DiagnosticSymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticSymptoms.
     */
    cursor?: DiagnosticSymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticSymptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticSymptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticSymptoms.
     */
    distinct?: DiagnosticSymptomScalarFieldEnum | DiagnosticSymptomScalarFieldEnum[]
  }

  /**
   * DiagnosticSymptom findMany
   */
  export type DiagnosticSymptomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticSymptoms to fetch.
     */
    where?: DiagnosticSymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticSymptoms to fetch.
     */
    orderBy?: DiagnosticSymptomOrderByWithRelationInput | DiagnosticSymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosticSymptoms.
     */
    cursor?: DiagnosticSymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticSymptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticSymptoms.
     */
    skip?: number
    distinct?: DiagnosticSymptomScalarFieldEnum | DiagnosticSymptomScalarFieldEnum[]
  }

  /**
   * DiagnosticSymptom create
   */
  export type DiagnosticSymptomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * The data needed to create a DiagnosticSymptom.
     */
    data: XOR<DiagnosticSymptomCreateInput, DiagnosticSymptomUncheckedCreateInput>
  }

  /**
   * DiagnosticSymptom createMany
   */
  export type DiagnosticSymptomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosticSymptoms.
     */
    data: DiagnosticSymptomCreateManyInput | DiagnosticSymptomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosticSymptom update
   */
  export type DiagnosticSymptomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * The data needed to update a DiagnosticSymptom.
     */
    data: XOR<DiagnosticSymptomUpdateInput, DiagnosticSymptomUncheckedUpdateInput>
    /**
     * Choose, which DiagnosticSymptom to update.
     */
    where: DiagnosticSymptomWhereUniqueInput
  }

  /**
   * DiagnosticSymptom updateMany
   */
  export type DiagnosticSymptomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosticSymptoms.
     */
    data: XOR<DiagnosticSymptomUpdateManyMutationInput, DiagnosticSymptomUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosticSymptoms to update
     */
    where?: DiagnosticSymptomWhereInput
    /**
     * Limit how many DiagnosticSymptoms to update.
     */
    limit?: number
  }

  /**
   * DiagnosticSymptom upsert
   */
  export type DiagnosticSymptomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * The filter to search for the DiagnosticSymptom to update in case it exists.
     */
    where: DiagnosticSymptomWhereUniqueInput
    /**
     * In case the DiagnosticSymptom found by the `where` argument doesn't exist, create a new DiagnosticSymptom with this data.
     */
    create: XOR<DiagnosticSymptomCreateInput, DiagnosticSymptomUncheckedCreateInput>
    /**
     * In case the DiagnosticSymptom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticSymptomUpdateInput, DiagnosticSymptomUncheckedUpdateInput>
  }

  /**
   * DiagnosticSymptom delete
   */
  export type DiagnosticSymptomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
    /**
     * Filter which DiagnosticSymptom to delete.
     */
    where: DiagnosticSymptomWhereUniqueInput
  }

  /**
   * DiagnosticSymptom deleteMany
   */
  export type DiagnosticSymptomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticSymptoms to delete
     */
    where?: DiagnosticSymptomWhereInput
    /**
     * Limit how many DiagnosticSymptoms to delete.
     */
    limit?: number
  }

  /**
   * DiagnosticSymptom without action
   */
  export type DiagnosticSymptomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticSymptom
     */
    select?: DiagnosticSymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticSymptom
     */
    omit?: DiagnosticSymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticSymptomInclude<ExtArgs> | null
  }


  /**
   * Model ScannerFile
   */

  export type AggregateScannerFile = {
    _count: ScannerFileCountAggregateOutputType | null
    _avg: ScannerFileAvgAggregateOutputType | null
    _sum: ScannerFileSumAggregateOutputType | null
    _min: ScannerFileMinAggregateOutputType | null
    _max: ScannerFileMaxAggregateOutputType | null
  }

  export type ScannerFileAvgAggregateOutputType = {
    id: number | null
  }

  export type ScannerFileSumAggregateOutputType = {
    id: number | null
  }

  export type ScannerFileMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    uploadDate: Date | null
    vehicleVin: string | null
    scannerType: string | null
    status: string | null
  }

  export type ScannerFileMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    uploadDate: Date | null
    vehicleVin: string | null
    scannerType: string | null
    status: string | null
  }

  export type ScannerFileCountAggregateOutputType = {
    id: number
    fileName: number
    uploadDate: number
    vehicleVin: number
    scannerType: number
    status: number
    rawData: number
    _all: number
  }


  export type ScannerFileAvgAggregateInputType = {
    id?: true
  }

  export type ScannerFileSumAggregateInputType = {
    id?: true
  }

  export type ScannerFileMinAggregateInputType = {
    id?: true
    fileName?: true
    uploadDate?: true
    vehicleVin?: true
    scannerType?: true
    status?: true
  }

  export type ScannerFileMaxAggregateInputType = {
    id?: true
    fileName?: true
    uploadDate?: true
    vehicleVin?: true
    scannerType?: true
    status?: true
  }

  export type ScannerFileCountAggregateInputType = {
    id?: true
    fileName?: true
    uploadDate?: true
    vehicleVin?: true
    scannerType?: true
    status?: true
    rawData?: true
    _all?: true
  }

  export type ScannerFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScannerFile to aggregate.
     */
    where?: ScannerFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScannerFiles to fetch.
     */
    orderBy?: ScannerFileOrderByWithRelationInput | ScannerFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScannerFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScannerFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScannerFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScannerFiles
    **/
    _count?: true | ScannerFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScannerFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScannerFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScannerFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScannerFileMaxAggregateInputType
  }

  export type GetScannerFileAggregateType<T extends ScannerFileAggregateArgs> = {
        [P in keyof T & keyof AggregateScannerFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScannerFile[P]>
      : GetScalarType<T[P], AggregateScannerFile[P]>
  }




  export type ScannerFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScannerFileWhereInput
    orderBy?: ScannerFileOrderByWithAggregationInput | ScannerFileOrderByWithAggregationInput[]
    by: ScannerFileScalarFieldEnum[] | ScannerFileScalarFieldEnum
    having?: ScannerFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScannerFileCountAggregateInputType | true
    _avg?: ScannerFileAvgAggregateInputType
    _sum?: ScannerFileSumAggregateInputType
    _min?: ScannerFileMinAggregateInputType
    _max?: ScannerFileMaxAggregateInputType
  }

  export type ScannerFileGroupByOutputType = {
    id: number
    fileName: string
    uploadDate: Date
    vehicleVin: string
    scannerType: string
    status: string
    rawData: JsonValue
    _count: ScannerFileCountAggregateOutputType | null
    _avg: ScannerFileAvgAggregateOutputType | null
    _sum: ScannerFileSumAggregateOutputType | null
    _min: ScannerFileMinAggregateOutputType | null
    _max: ScannerFileMaxAggregateOutputType | null
  }

  type GetScannerFileGroupByPayload<T extends ScannerFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScannerFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScannerFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScannerFileGroupByOutputType[P]>
            : GetScalarType<T[P], ScannerFileGroupByOutputType[P]>
        }
      >
    >


  export type ScannerFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    uploadDate?: boolean
    vehicleVin?: boolean
    scannerType?: boolean
    status?: boolean
    rawData?: boolean
    vehicle?: boolean | ScannerFile$vehicleArgs<ExtArgs>
    diagnostics?: boolean | ScannerFile$diagnosticsArgs<ExtArgs>
    _count?: boolean | ScannerFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scannerFile"]>



  export type ScannerFileSelectScalar = {
    id?: boolean
    fileName?: boolean
    uploadDate?: boolean
    vehicleVin?: boolean
    scannerType?: boolean
    status?: boolean
    rawData?: boolean
  }

  export type ScannerFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "uploadDate" | "vehicleVin" | "scannerType" | "status" | "rawData", ExtArgs["result"]["scannerFile"]>
  export type ScannerFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | ScannerFile$vehicleArgs<ExtArgs>
    diagnostics?: boolean | ScannerFile$diagnosticsArgs<ExtArgs>
    _count?: boolean | ScannerFileCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ScannerFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScannerFile"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      diagnostics: Prisma.$DiagnosticPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      uploadDate: Date
      vehicleVin: string
      scannerType: string
      status: string
      rawData: Prisma.JsonValue
    }, ExtArgs["result"]["scannerFile"]>
    composites: {}
  }

  type ScannerFileGetPayload<S extends boolean | null | undefined | ScannerFileDefaultArgs> = $Result.GetResult<Prisma.$ScannerFilePayload, S>

  type ScannerFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScannerFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScannerFileCountAggregateInputType | true
    }

  export interface ScannerFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScannerFile'], meta: { name: 'ScannerFile' } }
    /**
     * Find zero or one ScannerFile that matches the filter.
     * @param {ScannerFileFindUniqueArgs} args - Arguments to find a ScannerFile
     * @example
     * // Get one ScannerFile
     * const scannerFile = await prisma.scannerFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScannerFileFindUniqueArgs>(args: SelectSubset<T, ScannerFileFindUniqueArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScannerFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScannerFileFindUniqueOrThrowArgs} args - Arguments to find a ScannerFile
     * @example
     * // Get one ScannerFile
     * const scannerFile = await prisma.scannerFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScannerFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ScannerFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScannerFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFileFindFirstArgs} args - Arguments to find a ScannerFile
     * @example
     * // Get one ScannerFile
     * const scannerFile = await prisma.scannerFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScannerFileFindFirstArgs>(args?: SelectSubset<T, ScannerFileFindFirstArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScannerFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFileFindFirstOrThrowArgs} args - Arguments to find a ScannerFile
     * @example
     * // Get one ScannerFile
     * const scannerFile = await prisma.scannerFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScannerFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ScannerFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScannerFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScannerFiles
     * const scannerFiles = await prisma.scannerFile.findMany()
     * 
     * // Get first 10 ScannerFiles
     * const scannerFiles = await prisma.scannerFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scannerFileWithIdOnly = await prisma.scannerFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScannerFileFindManyArgs>(args?: SelectSubset<T, ScannerFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScannerFile.
     * @param {ScannerFileCreateArgs} args - Arguments to create a ScannerFile.
     * @example
     * // Create one ScannerFile
     * const ScannerFile = await prisma.scannerFile.create({
     *   data: {
     *     // ... data to create a ScannerFile
     *   }
     * })
     * 
     */
    create<T extends ScannerFileCreateArgs>(args: SelectSubset<T, ScannerFileCreateArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScannerFiles.
     * @param {ScannerFileCreateManyArgs} args - Arguments to create many ScannerFiles.
     * @example
     * // Create many ScannerFiles
     * const scannerFile = await prisma.scannerFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScannerFileCreateManyArgs>(args?: SelectSubset<T, ScannerFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScannerFile.
     * @param {ScannerFileDeleteArgs} args - Arguments to delete one ScannerFile.
     * @example
     * // Delete one ScannerFile
     * const ScannerFile = await prisma.scannerFile.delete({
     *   where: {
     *     // ... filter to delete one ScannerFile
     *   }
     * })
     * 
     */
    delete<T extends ScannerFileDeleteArgs>(args: SelectSubset<T, ScannerFileDeleteArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScannerFile.
     * @param {ScannerFileUpdateArgs} args - Arguments to update one ScannerFile.
     * @example
     * // Update one ScannerFile
     * const scannerFile = await prisma.scannerFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScannerFileUpdateArgs>(args: SelectSubset<T, ScannerFileUpdateArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScannerFiles.
     * @param {ScannerFileDeleteManyArgs} args - Arguments to filter ScannerFiles to delete.
     * @example
     * // Delete a few ScannerFiles
     * const { count } = await prisma.scannerFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScannerFileDeleteManyArgs>(args?: SelectSubset<T, ScannerFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScannerFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScannerFiles
     * const scannerFile = await prisma.scannerFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScannerFileUpdateManyArgs>(args: SelectSubset<T, ScannerFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScannerFile.
     * @param {ScannerFileUpsertArgs} args - Arguments to update or create a ScannerFile.
     * @example
     * // Update or create a ScannerFile
     * const scannerFile = await prisma.scannerFile.upsert({
     *   create: {
     *     // ... data to create a ScannerFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScannerFile we want to update
     *   }
     * })
     */
    upsert<T extends ScannerFileUpsertArgs>(args: SelectSubset<T, ScannerFileUpsertArgs<ExtArgs>>): Prisma__ScannerFileClient<$Result.GetResult<Prisma.$ScannerFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScannerFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFileCountArgs} args - Arguments to filter ScannerFiles to count.
     * @example
     * // Count the number of ScannerFiles
     * const count = await prisma.scannerFile.count({
     *   where: {
     *     // ... the filter for the ScannerFiles we want to count
     *   }
     * })
    **/
    count<T extends ScannerFileCountArgs>(
      args?: Subset<T, ScannerFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScannerFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScannerFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScannerFileAggregateArgs>(args: Subset<T, ScannerFileAggregateArgs>): Prisma.PrismaPromise<GetScannerFileAggregateType<T>>

    /**
     * Group by ScannerFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScannerFileGroupByArgs} args - Group by arguments.
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
      T extends ScannerFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScannerFileGroupByArgs['orderBy'] }
        : { orderBy?: ScannerFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScannerFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScannerFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScannerFile model
   */
  readonly fields: ScannerFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScannerFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScannerFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends ScannerFile$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, ScannerFile$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    diagnostics<T extends ScannerFile$diagnosticsArgs<ExtArgs> = {}>(args?: Subset<T, ScannerFile$diagnosticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ScannerFile model
   */
  interface ScannerFileFieldRefs {
    readonly id: FieldRef<"ScannerFile", 'Int'>
    readonly fileName: FieldRef<"ScannerFile", 'String'>
    readonly uploadDate: FieldRef<"ScannerFile", 'DateTime'>
    readonly vehicleVin: FieldRef<"ScannerFile", 'String'>
    readonly scannerType: FieldRef<"ScannerFile", 'String'>
    readonly status: FieldRef<"ScannerFile", 'String'>
    readonly rawData: FieldRef<"ScannerFile", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ScannerFile findUnique
   */
  export type ScannerFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * Filter, which ScannerFile to fetch.
     */
    where: ScannerFileWhereUniqueInput
  }

  /**
   * ScannerFile findUniqueOrThrow
   */
  export type ScannerFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * Filter, which ScannerFile to fetch.
     */
    where: ScannerFileWhereUniqueInput
  }

  /**
   * ScannerFile findFirst
   */
  export type ScannerFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * Filter, which ScannerFile to fetch.
     */
    where?: ScannerFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScannerFiles to fetch.
     */
    orderBy?: ScannerFileOrderByWithRelationInput | ScannerFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScannerFiles.
     */
    cursor?: ScannerFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScannerFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScannerFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScannerFiles.
     */
    distinct?: ScannerFileScalarFieldEnum | ScannerFileScalarFieldEnum[]
  }

  /**
   * ScannerFile findFirstOrThrow
   */
  export type ScannerFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * Filter, which ScannerFile to fetch.
     */
    where?: ScannerFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScannerFiles to fetch.
     */
    orderBy?: ScannerFileOrderByWithRelationInput | ScannerFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScannerFiles.
     */
    cursor?: ScannerFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScannerFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScannerFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScannerFiles.
     */
    distinct?: ScannerFileScalarFieldEnum | ScannerFileScalarFieldEnum[]
  }

  /**
   * ScannerFile findMany
   */
  export type ScannerFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * Filter, which ScannerFiles to fetch.
     */
    where?: ScannerFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScannerFiles to fetch.
     */
    orderBy?: ScannerFileOrderByWithRelationInput | ScannerFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScannerFiles.
     */
    cursor?: ScannerFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScannerFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScannerFiles.
     */
    skip?: number
    distinct?: ScannerFileScalarFieldEnum | ScannerFileScalarFieldEnum[]
  }

  /**
   * ScannerFile create
   */
  export type ScannerFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ScannerFile.
     */
    data: XOR<ScannerFileCreateInput, ScannerFileUncheckedCreateInput>
  }

  /**
   * ScannerFile createMany
   */
  export type ScannerFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScannerFiles.
     */
    data: ScannerFileCreateManyInput | ScannerFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScannerFile update
   */
  export type ScannerFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ScannerFile.
     */
    data: XOR<ScannerFileUpdateInput, ScannerFileUncheckedUpdateInput>
    /**
     * Choose, which ScannerFile to update.
     */
    where: ScannerFileWhereUniqueInput
  }

  /**
   * ScannerFile updateMany
   */
  export type ScannerFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScannerFiles.
     */
    data: XOR<ScannerFileUpdateManyMutationInput, ScannerFileUncheckedUpdateManyInput>
    /**
     * Filter which ScannerFiles to update
     */
    where?: ScannerFileWhereInput
    /**
     * Limit how many ScannerFiles to update.
     */
    limit?: number
  }

  /**
   * ScannerFile upsert
   */
  export type ScannerFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ScannerFile to update in case it exists.
     */
    where: ScannerFileWhereUniqueInput
    /**
     * In case the ScannerFile found by the `where` argument doesn't exist, create a new ScannerFile with this data.
     */
    create: XOR<ScannerFileCreateInput, ScannerFileUncheckedCreateInput>
    /**
     * In case the ScannerFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScannerFileUpdateInput, ScannerFileUncheckedUpdateInput>
  }

  /**
   * ScannerFile delete
   */
  export type ScannerFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
    /**
     * Filter which ScannerFile to delete.
     */
    where: ScannerFileWhereUniqueInput
  }

  /**
   * ScannerFile deleteMany
   */
  export type ScannerFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScannerFiles to delete
     */
    where?: ScannerFileWhereInput
    /**
     * Limit how many ScannerFiles to delete.
     */
    limit?: number
  }

  /**
   * ScannerFile.vehicle
   */
  export type ScannerFile$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * ScannerFile.diagnostics
   */
  export type ScannerFile$diagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    where?: DiagnosticWhereInput
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    cursor?: DiagnosticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * ScannerFile without action
   */
  export type ScannerFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScannerFile
     */
    select?: ScannerFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScannerFile
     */
    omit?: ScannerFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScannerFileInclude<ExtArgs> | null
  }


  /**
   * Model Help
   */

  export type AggregateHelp = {
    _count: HelpCountAggregateOutputType | null
    _avg: HelpAvgAggregateOutputType | null
    _sum: HelpSumAggregateOutputType | null
    _min: HelpMinAggregateOutputType | null
    _max: HelpMaxAggregateOutputType | null
  }

  export type HelpAvgAggregateOutputType = {
    id: number | null
  }

  export type HelpSumAggregateOutputType = {
    id: number | null
  }

  export type HelpMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    category: string | null
  }

  export type HelpMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    category: string | null
  }

  export type HelpCountAggregateOutputType = {
    id: number
    title: number
    content: number
    category: number
    _all: number
  }


  export type HelpAvgAggregateInputType = {
    id?: true
  }

  export type HelpSumAggregateInputType = {
    id?: true
  }

  export type HelpMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
  }

  export type HelpMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
  }

  export type HelpCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    _all?: true
  }

  export type HelpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Help to aggregate.
     */
    where?: HelpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helps to fetch.
     */
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HelpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Helps
    **/
    _count?: true | HelpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HelpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HelpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HelpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HelpMaxAggregateInputType
  }

  export type GetHelpAggregateType<T extends HelpAggregateArgs> = {
        [P in keyof T & keyof AggregateHelp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHelp[P]>
      : GetScalarType<T[P], AggregateHelp[P]>
  }




  export type HelpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelpWhereInput
    orderBy?: HelpOrderByWithAggregationInput | HelpOrderByWithAggregationInput[]
    by: HelpScalarFieldEnum[] | HelpScalarFieldEnum
    having?: HelpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HelpCountAggregateInputType | true
    _avg?: HelpAvgAggregateInputType
    _sum?: HelpSumAggregateInputType
    _min?: HelpMinAggregateInputType
    _max?: HelpMaxAggregateInputType
  }

  export type HelpGroupByOutputType = {
    id: number
    title: string
    content: string
    category: string
    _count: HelpCountAggregateOutputType | null
    _avg: HelpAvgAggregateOutputType | null
    _sum: HelpSumAggregateOutputType | null
    _min: HelpMinAggregateOutputType | null
    _max: HelpMaxAggregateOutputType | null
  }

  type GetHelpGroupByPayload<T extends HelpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HelpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HelpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HelpGroupByOutputType[P]>
            : GetScalarType<T[P], HelpGroupByOutputType[P]>
        }
      >
    >


  export type HelpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
  }, ExtArgs["result"]["help"]>



  export type HelpSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
  }

  export type HelpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "category", ExtArgs["result"]["help"]>

  export type $HelpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Help"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      category: string
    }, ExtArgs["result"]["help"]>
    composites: {}
  }

  type HelpGetPayload<S extends boolean | null | undefined | HelpDefaultArgs> = $Result.GetResult<Prisma.$HelpPayload, S>

  type HelpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HelpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HelpCountAggregateInputType | true
    }

  export interface HelpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Help'], meta: { name: 'Help' } }
    /**
     * Find zero or one Help that matches the filter.
     * @param {HelpFindUniqueArgs} args - Arguments to find a Help
     * @example
     * // Get one Help
     * const help = await prisma.help.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HelpFindUniqueArgs>(args: SelectSubset<T, HelpFindUniqueArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Help that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HelpFindUniqueOrThrowArgs} args - Arguments to find a Help
     * @example
     * // Get one Help
     * const help = await prisma.help.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HelpFindUniqueOrThrowArgs>(args: SelectSubset<T, HelpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Help that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpFindFirstArgs} args - Arguments to find a Help
     * @example
     * // Get one Help
     * const help = await prisma.help.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HelpFindFirstArgs>(args?: SelectSubset<T, HelpFindFirstArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Help that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpFindFirstOrThrowArgs} args - Arguments to find a Help
     * @example
     * // Get one Help
     * const help = await prisma.help.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HelpFindFirstOrThrowArgs>(args?: SelectSubset<T, HelpFindFirstOrThrowArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Helps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Helps
     * const helps = await prisma.help.findMany()
     * 
     * // Get first 10 Helps
     * const helps = await prisma.help.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const helpWithIdOnly = await prisma.help.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HelpFindManyArgs>(args?: SelectSubset<T, HelpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Help.
     * @param {HelpCreateArgs} args - Arguments to create a Help.
     * @example
     * // Create one Help
     * const Help = await prisma.help.create({
     *   data: {
     *     // ... data to create a Help
     *   }
     * })
     * 
     */
    create<T extends HelpCreateArgs>(args: SelectSubset<T, HelpCreateArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Helps.
     * @param {HelpCreateManyArgs} args - Arguments to create many Helps.
     * @example
     * // Create many Helps
     * const help = await prisma.help.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HelpCreateManyArgs>(args?: SelectSubset<T, HelpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Help.
     * @param {HelpDeleteArgs} args - Arguments to delete one Help.
     * @example
     * // Delete one Help
     * const Help = await prisma.help.delete({
     *   where: {
     *     // ... filter to delete one Help
     *   }
     * })
     * 
     */
    delete<T extends HelpDeleteArgs>(args: SelectSubset<T, HelpDeleteArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Help.
     * @param {HelpUpdateArgs} args - Arguments to update one Help.
     * @example
     * // Update one Help
     * const help = await prisma.help.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HelpUpdateArgs>(args: SelectSubset<T, HelpUpdateArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Helps.
     * @param {HelpDeleteManyArgs} args - Arguments to filter Helps to delete.
     * @example
     * // Delete a few Helps
     * const { count } = await prisma.help.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HelpDeleteManyArgs>(args?: SelectSubset<T, HelpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Helps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Helps
     * const help = await prisma.help.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HelpUpdateManyArgs>(args: SelectSubset<T, HelpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Help.
     * @param {HelpUpsertArgs} args - Arguments to update or create a Help.
     * @example
     * // Update or create a Help
     * const help = await prisma.help.upsert({
     *   create: {
     *     // ... data to create a Help
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Help we want to update
     *   }
     * })
     */
    upsert<T extends HelpUpsertArgs>(args: SelectSubset<T, HelpUpsertArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Helps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpCountArgs} args - Arguments to filter Helps to count.
     * @example
     * // Count the number of Helps
     * const count = await prisma.help.count({
     *   where: {
     *     // ... the filter for the Helps we want to count
     *   }
     * })
    **/
    count<T extends HelpCountArgs>(
      args?: Subset<T, HelpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HelpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Help.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HelpAggregateArgs>(args: Subset<T, HelpAggregateArgs>): Prisma.PrismaPromise<GetHelpAggregateType<T>>

    /**
     * Group by Help.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpGroupByArgs} args - Group by arguments.
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
      T extends HelpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HelpGroupByArgs['orderBy'] }
        : { orderBy?: HelpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HelpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHelpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Help model
   */
  readonly fields: HelpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Help.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HelpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Help model
   */
  interface HelpFieldRefs {
    readonly id: FieldRef<"Help", 'Int'>
    readonly title: FieldRef<"Help", 'String'>
    readonly content: FieldRef<"Help", 'String'>
    readonly category: FieldRef<"Help", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Help findUnique
   */
  export type HelpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Filter, which Help to fetch.
     */
    where: HelpWhereUniqueInput
  }

  /**
   * Help findUniqueOrThrow
   */
  export type HelpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Filter, which Help to fetch.
     */
    where: HelpWhereUniqueInput
  }

  /**
   * Help findFirst
   */
  export type HelpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Filter, which Help to fetch.
     */
    where?: HelpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helps to fetch.
     */
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Helps.
     */
    cursor?: HelpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Helps.
     */
    distinct?: HelpScalarFieldEnum | HelpScalarFieldEnum[]
  }

  /**
   * Help findFirstOrThrow
   */
  export type HelpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Filter, which Help to fetch.
     */
    where?: HelpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helps to fetch.
     */
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Helps.
     */
    cursor?: HelpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Helps.
     */
    distinct?: HelpScalarFieldEnum | HelpScalarFieldEnum[]
  }

  /**
   * Help findMany
   */
  export type HelpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Filter, which Helps to fetch.
     */
    where?: HelpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helps to fetch.
     */
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Helps.
     */
    cursor?: HelpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helps.
     */
    skip?: number
    distinct?: HelpScalarFieldEnum | HelpScalarFieldEnum[]
  }

  /**
   * Help create
   */
  export type HelpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * The data needed to create a Help.
     */
    data: XOR<HelpCreateInput, HelpUncheckedCreateInput>
  }

  /**
   * Help createMany
   */
  export type HelpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Helps.
     */
    data: HelpCreateManyInput | HelpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Help update
   */
  export type HelpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * The data needed to update a Help.
     */
    data: XOR<HelpUpdateInput, HelpUncheckedUpdateInput>
    /**
     * Choose, which Help to update.
     */
    where: HelpWhereUniqueInput
  }

  /**
   * Help updateMany
   */
  export type HelpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Helps.
     */
    data: XOR<HelpUpdateManyMutationInput, HelpUncheckedUpdateManyInput>
    /**
     * Filter which Helps to update
     */
    where?: HelpWhereInput
    /**
     * Limit how many Helps to update.
     */
    limit?: number
  }

  /**
   * Help upsert
   */
  export type HelpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * The filter to search for the Help to update in case it exists.
     */
    where: HelpWhereUniqueInput
    /**
     * In case the Help found by the `where` argument doesn't exist, create a new Help with this data.
     */
    create: XOR<HelpCreateInput, HelpUncheckedCreateInput>
    /**
     * In case the Help was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HelpUpdateInput, HelpUncheckedUpdateInput>
  }

  /**
   * Help delete
   */
  export type HelpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Filter which Help to delete.
     */
    where: HelpWhereUniqueInput
  }

  /**
   * Help deleteMany
   */
  export type HelpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Helps to delete
     */
    where?: HelpWhereInput
    /**
     * Limit how many Helps to delete.
     */
    limit?: number
  }

  /**
   * Help without action
   */
  export type HelpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
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
    name: 'name',
    role: 'role',
    email: 'email',
    password: 'password',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    marca: 'marca',
    modelo: 'modelo',
    year: 'year',
    motor: 'motor',
    vin: 'vin',
    patente: 'patente',
    km: 'km',
    fechaAdq: 'fechaAdq',
    userId: 'userId',
    lastDiag: 'lastDiag'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const DtcScalarFieldEnum: {
    code: 'code',
    description: 'description',
    category: 'category',
    severity: 'severity'
  };

  export type DtcScalarFieldEnum = (typeof DtcScalarFieldEnum)[keyof typeof DtcScalarFieldEnum]


  export const DtcCauseScalarFieldEnum: {
    id: 'id',
    text: 'text',
    dtcCode: 'dtcCode'
  };

  export type DtcCauseScalarFieldEnum = (typeof DtcCauseScalarFieldEnum)[keyof typeof DtcCauseScalarFieldEnum]


  export const DtcSolutionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    dtcCode: 'dtcCode'
  };

  export type DtcSolutionScalarFieldEnum = (typeof DtcSolutionScalarFieldEnum)[keyof typeof DtcSolutionScalarFieldEnum]


  export const SymptomScalarFieldEnum: {
    id: 'id',
    category: 'category',
    name: 'name',
    description: 'description'
  };

  export type SymptomScalarFieldEnum = (typeof SymptomScalarFieldEnum)[keyof typeof SymptomScalarFieldEnum]


  export const DiagnosticScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    fecha: 'fecha',
    desc: 'desc',
    tecnico: 'tecnico',
    estado: 'estado',
    detalles: 'detalles',
    scannerFileId: 'scannerFileId',
    cost: 'cost',
    duration: 'duration'
  };

  export type DiagnosticScalarFieldEnum = (typeof DiagnosticScalarFieldEnum)[keyof typeof DiagnosticScalarFieldEnum]


  export const DiagnosticDtcScalarFieldEnum: {
    diagnosticId: 'diagnosticId',
    dtcCode: 'dtcCode'
  };

  export type DiagnosticDtcScalarFieldEnum = (typeof DiagnosticDtcScalarFieldEnum)[keyof typeof DiagnosticDtcScalarFieldEnum]


  export const DiagnosticDtcSolutionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    diagnosticId: 'diagnosticId',
    dtcCode: 'dtcCode'
  };

  export type DiagnosticDtcSolutionScalarFieldEnum = (typeof DiagnosticDtcSolutionScalarFieldEnum)[keyof typeof DiagnosticDtcSolutionScalarFieldEnum]


  export const DiagnosticSymptomScalarFieldEnum: {
    diagnosticId: 'diagnosticId',
    symptomId: 'symptomId'
  };

  export type DiagnosticSymptomScalarFieldEnum = (typeof DiagnosticSymptomScalarFieldEnum)[keyof typeof DiagnosticSymptomScalarFieldEnum]


  export const ScannerFileScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    uploadDate: 'uploadDate',
    vehicleVin: 'vehicleVin',
    scannerType: 'scannerType',
    status: 'status',
    rawData: 'rawData'
  };

  export type ScannerFileScalarFieldEnum = (typeof ScannerFileScalarFieldEnum)[keyof typeof ScannerFileScalarFieldEnum]


  export const HelpScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    category: 'category'
  };

  export type HelpScalarFieldEnum = (typeof HelpScalarFieldEnum)[keyof typeof HelpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    role: 'role',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const VehicleOrderByRelevanceFieldEnum: {
    marca: 'marca',
    modelo: 'modelo',
    motor: 'motor',
    vin: 'vin',
    patente: 'patente'
  };

  export type VehicleOrderByRelevanceFieldEnum = (typeof VehicleOrderByRelevanceFieldEnum)[keyof typeof VehicleOrderByRelevanceFieldEnum]


  export const DtcOrderByRelevanceFieldEnum: {
    code: 'code',
    description: 'description',
    category: 'category',
    severity: 'severity'
  };

  export type DtcOrderByRelevanceFieldEnum = (typeof DtcOrderByRelevanceFieldEnum)[keyof typeof DtcOrderByRelevanceFieldEnum]


  export const DtcCauseOrderByRelevanceFieldEnum: {
    text: 'text',
    dtcCode: 'dtcCode'
  };

  export type DtcCauseOrderByRelevanceFieldEnum = (typeof DtcCauseOrderByRelevanceFieldEnum)[keyof typeof DtcCauseOrderByRelevanceFieldEnum]


  export const DtcSolutionOrderByRelevanceFieldEnum: {
    text: 'text',
    dtcCode: 'dtcCode'
  };

  export type DtcSolutionOrderByRelevanceFieldEnum = (typeof DtcSolutionOrderByRelevanceFieldEnum)[keyof typeof DtcSolutionOrderByRelevanceFieldEnum]


  export const SymptomOrderByRelevanceFieldEnum: {
    category: 'category',
    name: 'name',
    description: 'description'
  };

  export type SymptomOrderByRelevanceFieldEnum = (typeof SymptomOrderByRelevanceFieldEnum)[keyof typeof SymptomOrderByRelevanceFieldEnum]


  export const DiagnosticOrderByRelevanceFieldEnum: {
    desc: 'desc',
    tecnico: 'tecnico',
    estado: 'estado',
    detalles: 'detalles'
  };

  export type DiagnosticOrderByRelevanceFieldEnum = (typeof DiagnosticOrderByRelevanceFieldEnum)[keyof typeof DiagnosticOrderByRelevanceFieldEnum]


  export const DiagnosticDtcOrderByRelevanceFieldEnum: {
    dtcCode: 'dtcCode'
  };

  export type DiagnosticDtcOrderByRelevanceFieldEnum = (typeof DiagnosticDtcOrderByRelevanceFieldEnum)[keyof typeof DiagnosticDtcOrderByRelevanceFieldEnum]


  export const DiagnosticDtcSolutionOrderByRelevanceFieldEnum: {
    text: 'text',
    dtcCode: 'dtcCode'
  };

  export type DiagnosticDtcSolutionOrderByRelevanceFieldEnum = (typeof DiagnosticDtcSolutionOrderByRelevanceFieldEnum)[keyof typeof DiagnosticDtcSolutionOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ScannerFileOrderByRelevanceFieldEnum: {
    fileName: 'fileName',
    vehicleVin: 'vehicleVin',
    scannerType: 'scannerType',
    status: 'status'
  };

  export type ScannerFileOrderByRelevanceFieldEnum = (typeof ScannerFileOrderByRelevanceFieldEnum)[keyof typeof ScannerFileOrderByRelevanceFieldEnum]


  export const HelpOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    category: 'category'
  };

  export type HelpOrderByRelevanceFieldEnum = (typeof HelpOrderByRelevanceFieldEnum)[keyof typeof HelpOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    marca?: StringFilter<"Vehicle"> | string
    modelo?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    motor?: StringFilter<"Vehicle"> | string
    vin?: StringFilter<"Vehicle"> | string
    patente?: StringFilter<"Vehicle"> | string
    km?: IntFilter<"Vehicle"> | number
    fechaAdq?: DateTimeFilter<"Vehicle"> | Date | string
    userId?: IntFilter<"Vehicle"> | number
    lastDiag?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    diagnostics?: DiagnosticListRelationFilter
    scannerFiles?: ScannerFileListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    year?: SortOrder
    motor?: SortOrder
    vin?: SortOrder
    patente?: SortOrder
    km?: SortOrder
    fechaAdq?: SortOrder
    userId?: SortOrder
    lastDiag?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    diagnostics?: DiagnosticOrderByRelationAggregateInput
    scannerFiles?: ScannerFileOrderByRelationAggregateInput
    _relevance?: VehicleOrderByRelevanceInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vin?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    marca?: StringFilter<"Vehicle"> | string
    modelo?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    motor?: StringFilter<"Vehicle"> | string
    patente?: StringFilter<"Vehicle"> | string
    km?: IntFilter<"Vehicle"> | number
    fechaAdq?: DateTimeFilter<"Vehicle"> | Date | string
    userId?: IntFilter<"Vehicle"> | number
    lastDiag?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    diagnostics?: DiagnosticListRelationFilter
    scannerFiles?: ScannerFileListRelationFilter
  }, "id" | "vin">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    year?: SortOrder
    motor?: SortOrder
    vin?: SortOrder
    patente?: SortOrder
    km?: SortOrder
    fechaAdq?: SortOrder
    userId?: SortOrder
    lastDiag?: SortOrderInput | SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicle"> | number
    marca?: StringWithAggregatesFilter<"Vehicle"> | string
    modelo?: StringWithAggregatesFilter<"Vehicle"> | string
    year?: IntWithAggregatesFilter<"Vehicle"> | number
    motor?: StringWithAggregatesFilter<"Vehicle"> | string
    vin?: StringWithAggregatesFilter<"Vehicle"> | string
    patente?: StringWithAggregatesFilter<"Vehicle"> | string
    km?: IntWithAggregatesFilter<"Vehicle"> | number
    fechaAdq?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    userId?: IntWithAggregatesFilter<"Vehicle"> | number
    lastDiag?: DateTimeNullableWithAggregatesFilter<"Vehicle"> | Date | string | null
  }

  export type DtcWhereInput = {
    AND?: DtcWhereInput | DtcWhereInput[]
    OR?: DtcWhereInput[]
    NOT?: DtcWhereInput | DtcWhereInput[]
    code?: StringFilter<"Dtc"> | string
    description?: StringFilter<"Dtc"> | string
    category?: StringFilter<"Dtc"> | string
    severity?: StringFilter<"Dtc"> | string
    causes?: DtcCauseListRelationFilter
    solutions?: DtcSolutionListRelationFilter
    diagnostics?: DiagnosticDtcListRelationFilter
  }

  export type DtcOrderByWithRelationInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    causes?: DtcCauseOrderByRelationAggregateInput
    solutions?: DtcSolutionOrderByRelationAggregateInput
    diagnostics?: DiagnosticDtcOrderByRelationAggregateInput
    _relevance?: DtcOrderByRelevanceInput
  }

  export type DtcWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: DtcWhereInput | DtcWhereInput[]
    OR?: DtcWhereInput[]
    NOT?: DtcWhereInput | DtcWhereInput[]
    description?: StringFilter<"Dtc"> | string
    category?: StringFilter<"Dtc"> | string
    severity?: StringFilter<"Dtc"> | string
    causes?: DtcCauseListRelationFilter
    solutions?: DtcSolutionListRelationFilter
    diagnostics?: DiagnosticDtcListRelationFilter
  }, "code">

  export type DtcOrderByWithAggregationInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    _count?: DtcCountOrderByAggregateInput
    _max?: DtcMaxOrderByAggregateInput
    _min?: DtcMinOrderByAggregateInput
  }

  export type DtcScalarWhereWithAggregatesInput = {
    AND?: DtcScalarWhereWithAggregatesInput | DtcScalarWhereWithAggregatesInput[]
    OR?: DtcScalarWhereWithAggregatesInput[]
    NOT?: DtcScalarWhereWithAggregatesInput | DtcScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Dtc"> | string
    description?: StringWithAggregatesFilter<"Dtc"> | string
    category?: StringWithAggregatesFilter<"Dtc"> | string
    severity?: StringWithAggregatesFilter<"Dtc"> | string
  }

  export type DtcCauseWhereInput = {
    AND?: DtcCauseWhereInput | DtcCauseWhereInput[]
    OR?: DtcCauseWhereInput[]
    NOT?: DtcCauseWhereInput | DtcCauseWhereInput[]
    id?: IntFilter<"DtcCause"> | number
    text?: StringFilter<"DtcCause"> | string
    dtcCode?: StringFilter<"DtcCause"> | string
    dtc?: XOR<DtcScalarRelationFilter, DtcWhereInput>
  }

  export type DtcCauseOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
    dtc?: DtcOrderByWithRelationInput
    _relevance?: DtcCauseOrderByRelevanceInput
  }

  export type DtcCauseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DtcCauseWhereInput | DtcCauseWhereInput[]
    OR?: DtcCauseWhereInput[]
    NOT?: DtcCauseWhereInput | DtcCauseWhereInput[]
    text?: StringFilter<"DtcCause"> | string
    dtcCode?: StringFilter<"DtcCause"> | string
    dtc?: XOR<DtcScalarRelationFilter, DtcWhereInput>
  }, "id">

  export type DtcCauseOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
    _count?: DtcCauseCountOrderByAggregateInput
    _avg?: DtcCauseAvgOrderByAggregateInput
    _max?: DtcCauseMaxOrderByAggregateInput
    _min?: DtcCauseMinOrderByAggregateInput
    _sum?: DtcCauseSumOrderByAggregateInput
  }

  export type DtcCauseScalarWhereWithAggregatesInput = {
    AND?: DtcCauseScalarWhereWithAggregatesInput | DtcCauseScalarWhereWithAggregatesInput[]
    OR?: DtcCauseScalarWhereWithAggregatesInput[]
    NOT?: DtcCauseScalarWhereWithAggregatesInput | DtcCauseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DtcCause"> | number
    text?: StringWithAggregatesFilter<"DtcCause"> | string
    dtcCode?: StringWithAggregatesFilter<"DtcCause"> | string
  }

  export type DtcSolutionWhereInput = {
    AND?: DtcSolutionWhereInput | DtcSolutionWhereInput[]
    OR?: DtcSolutionWhereInput[]
    NOT?: DtcSolutionWhereInput | DtcSolutionWhereInput[]
    id?: IntFilter<"DtcSolution"> | number
    text?: StringFilter<"DtcSolution"> | string
    dtcCode?: StringFilter<"DtcSolution"> | string
    dtc?: XOR<DtcScalarRelationFilter, DtcWhereInput>
  }

  export type DtcSolutionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
    dtc?: DtcOrderByWithRelationInput
    _relevance?: DtcSolutionOrderByRelevanceInput
  }

  export type DtcSolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DtcSolutionWhereInput | DtcSolutionWhereInput[]
    OR?: DtcSolutionWhereInput[]
    NOT?: DtcSolutionWhereInput | DtcSolutionWhereInput[]
    text?: StringFilter<"DtcSolution"> | string
    dtcCode?: StringFilter<"DtcSolution"> | string
    dtc?: XOR<DtcScalarRelationFilter, DtcWhereInput>
  }, "id">

  export type DtcSolutionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
    _count?: DtcSolutionCountOrderByAggregateInput
    _avg?: DtcSolutionAvgOrderByAggregateInput
    _max?: DtcSolutionMaxOrderByAggregateInput
    _min?: DtcSolutionMinOrderByAggregateInput
    _sum?: DtcSolutionSumOrderByAggregateInput
  }

  export type DtcSolutionScalarWhereWithAggregatesInput = {
    AND?: DtcSolutionScalarWhereWithAggregatesInput | DtcSolutionScalarWhereWithAggregatesInput[]
    OR?: DtcSolutionScalarWhereWithAggregatesInput[]
    NOT?: DtcSolutionScalarWhereWithAggregatesInput | DtcSolutionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DtcSolution"> | number
    text?: StringWithAggregatesFilter<"DtcSolution"> | string
    dtcCode?: StringWithAggregatesFilter<"DtcSolution"> | string
  }

  export type SymptomWhereInput = {
    AND?: SymptomWhereInput | SymptomWhereInput[]
    OR?: SymptomWhereInput[]
    NOT?: SymptomWhereInput | SymptomWhereInput[]
    id?: IntFilter<"Symptom"> | number
    category?: StringFilter<"Symptom"> | string
    name?: StringFilter<"Symptom"> | string
    description?: StringFilter<"Symptom"> | string
    diagnostics?: DiagnosticSymptomListRelationFilter
  }

  export type SymptomOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrder
    diagnostics?: DiagnosticSymptomOrderByRelationAggregateInput
    _relevance?: SymptomOrderByRelevanceInput
  }

  export type SymptomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SymptomWhereInput | SymptomWhereInput[]
    OR?: SymptomWhereInput[]
    NOT?: SymptomWhereInput | SymptomWhereInput[]
    category?: StringFilter<"Symptom"> | string
    name?: StringFilter<"Symptom"> | string
    description?: StringFilter<"Symptom"> | string
    diagnostics?: DiagnosticSymptomListRelationFilter
  }, "id">

  export type SymptomOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: SymptomCountOrderByAggregateInput
    _avg?: SymptomAvgOrderByAggregateInput
    _max?: SymptomMaxOrderByAggregateInput
    _min?: SymptomMinOrderByAggregateInput
    _sum?: SymptomSumOrderByAggregateInput
  }

  export type SymptomScalarWhereWithAggregatesInput = {
    AND?: SymptomScalarWhereWithAggregatesInput | SymptomScalarWhereWithAggregatesInput[]
    OR?: SymptomScalarWhereWithAggregatesInput[]
    NOT?: SymptomScalarWhereWithAggregatesInput | SymptomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Symptom"> | number
    category?: StringWithAggregatesFilter<"Symptom"> | string
    name?: StringWithAggregatesFilter<"Symptom"> | string
    description?: StringWithAggregatesFilter<"Symptom"> | string
  }

  export type DiagnosticWhereInput = {
    AND?: DiagnosticWhereInput | DiagnosticWhereInput[]
    OR?: DiagnosticWhereInput[]
    NOT?: DiagnosticWhereInput | DiagnosticWhereInput[]
    id?: IntFilter<"Diagnostic"> | number
    vehicleId?: IntFilter<"Diagnostic"> | number
    fecha?: DateTimeFilter<"Diagnostic"> | Date | string
    desc?: StringFilter<"Diagnostic"> | string
    tecnico?: StringFilter<"Diagnostic"> | string
    estado?: StringFilter<"Diagnostic"> | string
    detalles?: StringFilter<"Diagnostic"> | string
    scannerFileId?: IntNullableFilter<"Diagnostic"> | number | null
    cost?: IntFilter<"Diagnostic"> | number
    duration?: FloatFilter<"Diagnostic"> | number
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    scannerFile?: XOR<ScannerFileNullableScalarRelationFilter, ScannerFileWhereInput> | null
    dtcs?: DiagnosticDtcListRelationFilter
    symptoms?: DiagnosticSymptomListRelationFilter
  }

  export type DiagnosticOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fecha?: SortOrder
    desc?: SortOrder
    tecnico?: SortOrder
    estado?: SortOrder
    detalles?: SortOrder
    scannerFileId?: SortOrderInput | SortOrder
    cost?: SortOrder
    duration?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    scannerFile?: ScannerFileOrderByWithRelationInput
    dtcs?: DiagnosticDtcOrderByRelationAggregateInput
    symptoms?: DiagnosticSymptomOrderByRelationAggregateInput
    _relevance?: DiagnosticOrderByRelevanceInput
  }

  export type DiagnosticWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiagnosticWhereInput | DiagnosticWhereInput[]
    OR?: DiagnosticWhereInput[]
    NOT?: DiagnosticWhereInput | DiagnosticWhereInput[]
    vehicleId?: IntFilter<"Diagnostic"> | number
    fecha?: DateTimeFilter<"Diagnostic"> | Date | string
    desc?: StringFilter<"Diagnostic"> | string
    tecnico?: StringFilter<"Diagnostic"> | string
    estado?: StringFilter<"Diagnostic"> | string
    detalles?: StringFilter<"Diagnostic"> | string
    scannerFileId?: IntNullableFilter<"Diagnostic"> | number | null
    cost?: IntFilter<"Diagnostic"> | number
    duration?: FloatFilter<"Diagnostic"> | number
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    scannerFile?: XOR<ScannerFileNullableScalarRelationFilter, ScannerFileWhereInput> | null
    dtcs?: DiagnosticDtcListRelationFilter
    symptoms?: DiagnosticSymptomListRelationFilter
  }, "id">

  export type DiagnosticOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fecha?: SortOrder
    desc?: SortOrder
    tecnico?: SortOrder
    estado?: SortOrder
    detalles?: SortOrder
    scannerFileId?: SortOrderInput | SortOrder
    cost?: SortOrder
    duration?: SortOrder
    _count?: DiagnosticCountOrderByAggregateInput
    _avg?: DiagnosticAvgOrderByAggregateInput
    _max?: DiagnosticMaxOrderByAggregateInput
    _min?: DiagnosticMinOrderByAggregateInput
    _sum?: DiagnosticSumOrderByAggregateInput
  }

  export type DiagnosticScalarWhereWithAggregatesInput = {
    AND?: DiagnosticScalarWhereWithAggregatesInput | DiagnosticScalarWhereWithAggregatesInput[]
    OR?: DiagnosticScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticScalarWhereWithAggregatesInput | DiagnosticScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Diagnostic"> | number
    vehicleId?: IntWithAggregatesFilter<"Diagnostic"> | number
    fecha?: DateTimeWithAggregatesFilter<"Diagnostic"> | Date | string
    desc?: StringWithAggregatesFilter<"Diagnostic"> | string
    tecnico?: StringWithAggregatesFilter<"Diagnostic"> | string
    estado?: StringWithAggregatesFilter<"Diagnostic"> | string
    detalles?: StringWithAggregatesFilter<"Diagnostic"> | string
    scannerFileId?: IntNullableWithAggregatesFilter<"Diagnostic"> | number | null
    cost?: IntWithAggregatesFilter<"Diagnostic"> | number
    duration?: FloatWithAggregatesFilter<"Diagnostic"> | number
  }

  export type DiagnosticDtcWhereInput = {
    AND?: DiagnosticDtcWhereInput | DiagnosticDtcWhereInput[]
    OR?: DiagnosticDtcWhereInput[]
    NOT?: DiagnosticDtcWhereInput | DiagnosticDtcWhereInput[]
    diagnosticId?: IntFilter<"DiagnosticDtc"> | number
    dtcCode?: StringFilter<"DiagnosticDtc"> | string
    diagnostic?: XOR<DiagnosticScalarRelationFilter, DiagnosticWhereInput>
    dtc?: XOR<DtcScalarRelationFilter, DtcWhereInput>
    diagnosticDtcSolutions?: DiagnosticDtcSolutionListRelationFilter
  }

  export type DiagnosticDtcOrderByWithRelationInput = {
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
    diagnostic?: DiagnosticOrderByWithRelationInput
    dtc?: DtcOrderByWithRelationInput
    diagnosticDtcSolutions?: DiagnosticDtcSolutionOrderByRelationAggregateInput
    _relevance?: DiagnosticDtcOrderByRelevanceInput
  }

  export type DiagnosticDtcWhereUniqueInput = Prisma.AtLeast<{
    diagnosticId_dtcCode?: DiagnosticDtcDiagnosticIdDtcCodeCompoundUniqueInput
    AND?: DiagnosticDtcWhereInput | DiagnosticDtcWhereInput[]
    OR?: DiagnosticDtcWhereInput[]
    NOT?: DiagnosticDtcWhereInput | DiagnosticDtcWhereInput[]
    diagnosticId?: IntFilter<"DiagnosticDtc"> | number
    dtcCode?: StringFilter<"DiagnosticDtc"> | string
    diagnostic?: XOR<DiagnosticScalarRelationFilter, DiagnosticWhereInput>
    dtc?: XOR<DtcScalarRelationFilter, DtcWhereInput>
    diagnosticDtcSolutions?: DiagnosticDtcSolutionListRelationFilter
  }, "diagnosticId_dtcCode">

  export type DiagnosticDtcOrderByWithAggregationInput = {
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
    _count?: DiagnosticDtcCountOrderByAggregateInput
    _avg?: DiagnosticDtcAvgOrderByAggregateInput
    _max?: DiagnosticDtcMaxOrderByAggregateInput
    _min?: DiagnosticDtcMinOrderByAggregateInput
    _sum?: DiagnosticDtcSumOrderByAggregateInput
  }

  export type DiagnosticDtcScalarWhereWithAggregatesInput = {
    AND?: DiagnosticDtcScalarWhereWithAggregatesInput | DiagnosticDtcScalarWhereWithAggregatesInput[]
    OR?: DiagnosticDtcScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticDtcScalarWhereWithAggregatesInput | DiagnosticDtcScalarWhereWithAggregatesInput[]
    diagnosticId?: IntWithAggregatesFilter<"DiagnosticDtc"> | number
    dtcCode?: StringWithAggregatesFilter<"DiagnosticDtc"> | string
  }

  export type DiagnosticDtcSolutionWhereInput = {
    AND?: DiagnosticDtcSolutionWhereInput | DiagnosticDtcSolutionWhereInput[]
    OR?: DiagnosticDtcSolutionWhereInput[]
    NOT?: DiagnosticDtcSolutionWhereInput | DiagnosticDtcSolutionWhereInput[]
    id?: IntFilter<"DiagnosticDtcSolution"> | number
    text?: StringFilter<"DiagnosticDtcSolution"> | string
    diagnosticId?: IntFilter<"DiagnosticDtcSolution"> | number
    dtcCode?: StringFilter<"DiagnosticDtcSolution"> | string
    diagnosticDtc?: XOR<DiagnosticDtcScalarRelationFilter, DiagnosticDtcWhereInput>
  }

  export type DiagnosticDtcSolutionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
    diagnosticDtc?: DiagnosticDtcOrderByWithRelationInput
    _relevance?: DiagnosticDtcSolutionOrderByRelevanceInput
  }

  export type DiagnosticDtcSolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiagnosticDtcSolutionWhereInput | DiagnosticDtcSolutionWhereInput[]
    OR?: DiagnosticDtcSolutionWhereInput[]
    NOT?: DiagnosticDtcSolutionWhereInput | DiagnosticDtcSolutionWhereInput[]
    text?: StringFilter<"DiagnosticDtcSolution"> | string
    diagnosticId?: IntFilter<"DiagnosticDtcSolution"> | number
    dtcCode?: StringFilter<"DiagnosticDtcSolution"> | string
    diagnosticDtc?: XOR<DiagnosticDtcScalarRelationFilter, DiagnosticDtcWhereInput>
  }, "id">

  export type DiagnosticDtcSolutionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
    _count?: DiagnosticDtcSolutionCountOrderByAggregateInput
    _avg?: DiagnosticDtcSolutionAvgOrderByAggregateInput
    _max?: DiagnosticDtcSolutionMaxOrderByAggregateInput
    _min?: DiagnosticDtcSolutionMinOrderByAggregateInput
    _sum?: DiagnosticDtcSolutionSumOrderByAggregateInput
  }

  export type DiagnosticDtcSolutionScalarWhereWithAggregatesInput = {
    AND?: DiagnosticDtcSolutionScalarWhereWithAggregatesInput | DiagnosticDtcSolutionScalarWhereWithAggregatesInput[]
    OR?: DiagnosticDtcSolutionScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticDtcSolutionScalarWhereWithAggregatesInput | DiagnosticDtcSolutionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiagnosticDtcSolution"> | number
    text?: StringWithAggregatesFilter<"DiagnosticDtcSolution"> | string
    diagnosticId?: IntWithAggregatesFilter<"DiagnosticDtcSolution"> | number
    dtcCode?: StringWithAggregatesFilter<"DiagnosticDtcSolution"> | string
  }

  export type DiagnosticSymptomWhereInput = {
    AND?: DiagnosticSymptomWhereInput | DiagnosticSymptomWhereInput[]
    OR?: DiagnosticSymptomWhereInput[]
    NOT?: DiagnosticSymptomWhereInput | DiagnosticSymptomWhereInput[]
    diagnosticId?: IntFilter<"DiagnosticSymptom"> | number
    symptomId?: IntFilter<"DiagnosticSymptom"> | number
    diagnostic?: XOR<DiagnosticScalarRelationFilter, DiagnosticWhereInput>
    symptom?: XOR<SymptomScalarRelationFilter, SymptomWhereInput>
  }

  export type DiagnosticSymptomOrderByWithRelationInput = {
    diagnosticId?: SortOrder
    symptomId?: SortOrder
    diagnostic?: DiagnosticOrderByWithRelationInput
    symptom?: SymptomOrderByWithRelationInput
  }

  export type DiagnosticSymptomWhereUniqueInput = Prisma.AtLeast<{
    diagnosticId_symptomId?: DiagnosticSymptomDiagnosticIdSymptomIdCompoundUniqueInput
    AND?: DiagnosticSymptomWhereInput | DiagnosticSymptomWhereInput[]
    OR?: DiagnosticSymptomWhereInput[]
    NOT?: DiagnosticSymptomWhereInput | DiagnosticSymptomWhereInput[]
    diagnosticId?: IntFilter<"DiagnosticSymptom"> | number
    symptomId?: IntFilter<"DiagnosticSymptom"> | number
    diagnostic?: XOR<DiagnosticScalarRelationFilter, DiagnosticWhereInput>
    symptom?: XOR<SymptomScalarRelationFilter, SymptomWhereInput>
  }, "diagnosticId_symptomId">

  export type DiagnosticSymptomOrderByWithAggregationInput = {
    diagnosticId?: SortOrder
    symptomId?: SortOrder
    _count?: DiagnosticSymptomCountOrderByAggregateInput
    _avg?: DiagnosticSymptomAvgOrderByAggregateInput
    _max?: DiagnosticSymptomMaxOrderByAggregateInput
    _min?: DiagnosticSymptomMinOrderByAggregateInput
    _sum?: DiagnosticSymptomSumOrderByAggregateInput
  }

  export type DiagnosticSymptomScalarWhereWithAggregatesInput = {
    AND?: DiagnosticSymptomScalarWhereWithAggregatesInput | DiagnosticSymptomScalarWhereWithAggregatesInput[]
    OR?: DiagnosticSymptomScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticSymptomScalarWhereWithAggregatesInput | DiagnosticSymptomScalarWhereWithAggregatesInput[]
    diagnosticId?: IntWithAggregatesFilter<"DiagnosticSymptom"> | number
    symptomId?: IntWithAggregatesFilter<"DiagnosticSymptom"> | number
  }

  export type ScannerFileWhereInput = {
    AND?: ScannerFileWhereInput | ScannerFileWhereInput[]
    OR?: ScannerFileWhereInput[]
    NOT?: ScannerFileWhereInput | ScannerFileWhereInput[]
    id?: IntFilter<"ScannerFile"> | number
    fileName?: StringFilter<"ScannerFile"> | string
    uploadDate?: DateTimeFilter<"ScannerFile"> | Date | string
    vehicleVin?: StringFilter<"ScannerFile"> | string
    scannerType?: StringFilter<"ScannerFile"> | string
    status?: StringFilter<"ScannerFile"> | string
    rawData?: JsonFilter<"ScannerFile">
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    diagnostics?: DiagnosticListRelationFilter
  }

  export type ScannerFileOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    vehicleVin?: SortOrder
    scannerType?: SortOrder
    status?: SortOrder
    rawData?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    diagnostics?: DiagnosticOrderByRelationAggregateInput
    _relevance?: ScannerFileOrderByRelevanceInput
  }

  export type ScannerFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScannerFileWhereInput | ScannerFileWhereInput[]
    OR?: ScannerFileWhereInput[]
    NOT?: ScannerFileWhereInput | ScannerFileWhereInput[]
    fileName?: StringFilter<"ScannerFile"> | string
    uploadDate?: DateTimeFilter<"ScannerFile"> | Date | string
    vehicleVin?: StringFilter<"ScannerFile"> | string
    scannerType?: StringFilter<"ScannerFile"> | string
    status?: StringFilter<"ScannerFile"> | string
    rawData?: JsonFilter<"ScannerFile">
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    diagnostics?: DiagnosticListRelationFilter
  }, "id">

  export type ScannerFileOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    vehicleVin?: SortOrder
    scannerType?: SortOrder
    status?: SortOrder
    rawData?: SortOrder
    _count?: ScannerFileCountOrderByAggregateInput
    _avg?: ScannerFileAvgOrderByAggregateInput
    _max?: ScannerFileMaxOrderByAggregateInput
    _min?: ScannerFileMinOrderByAggregateInput
    _sum?: ScannerFileSumOrderByAggregateInput
  }

  export type ScannerFileScalarWhereWithAggregatesInput = {
    AND?: ScannerFileScalarWhereWithAggregatesInput | ScannerFileScalarWhereWithAggregatesInput[]
    OR?: ScannerFileScalarWhereWithAggregatesInput[]
    NOT?: ScannerFileScalarWhereWithAggregatesInput | ScannerFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScannerFile"> | number
    fileName?: StringWithAggregatesFilter<"ScannerFile"> | string
    uploadDate?: DateTimeWithAggregatesFilter<"ScannerFile"> | Date | string
    vehicleVin?: StringWithAggregatesFilter<"ScannerFile"> | string
    scannerType?: StringWithAggregatesFilter<"ScannerFile"> | string
    status?: StringWithAggregatesFilter<"ScannerFile"> | string
    rawData?: JsonWithAggregatesFilter<"ScannerFile">
  }

  export type HelpWhereInput = {
    AND?: HelpWhereInput | HelpWhereInput[]
    OR?: HelpWhereInput[]
    NOT?: HelpWhereInput | HelpWhereInput[]
    id?: IntFilter<"Help"> | number
    title?: StringFilter<"Help"> | string
    content?: StringFilter<"Help"> | string
    category?: StringFilter<"Help"> | string
  }

  export type HelpOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    _relevance?: HelpOrderByRelevanceInput
  }

  export type HelpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HelpWhereInput | HelpWhereInput[]
    OR?: HelpWhereInput[]
    NOT?: HelpWhereInput | HelpWhereInput[]
    title?: StringFilter<"Help"> | string
    content?: StringFilter<"Help"> | string
    category?: StringFilter<"Help"> | string
  }, "id">

  export type HelpOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    _count?: HelpCountOrderByAggregateInput
    _avg?: HelpAvgOrderByAggregateInput
    _max?: HelpMaxOrderByAggregateInput
    _min?: HelpMinOrderByAggregateInput
    _sum?: HelpSumOrderByAggregateInput
  }

  export type HelpScalarWhereWithAggregatesInput = {
    AND?: HelpScalarWhereWithAggregatesInput | HelpScalarWhereWithAggregatesInput[]
    OR?: HelpScalarWhereWithAggregatesInput[]
    NOT?: HelpScalarWhereWithAggregatesInput | HelpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Help"> | number
    title?: StringWithAggregatesFilter<"Help"> | string
    content?: StringWithAggregatesFilter<"Help"> | string
    category?: StringWithAggregatesFilter<"Help"> | string
  }

  export type UserCreateInput = {
    name: string
    role: string
    email: string
    password: string
    active?: boolean
    createdAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    role: string
    email: string
    password: string
    active?: boolean
    createdAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    role: string
    email: string
    password: string
    active?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    lastDiag?: Date | string | null
    user: UserCreateNestedOneWithoutVehiclesInput
    diagnostics?: DiagnosticCreateNestedManyWithoutVehicleInput
    scannerFiles?: ScannerFileCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: number
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    userId: number
    lastDiag?: Date | string | null
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutVehicleInput
    scannerFiles?: ScannerFileUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutVehicleNestedInput
    scannerFiles?: ScannerFileUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutVehicleNestedInput
    scannerFiles?: ScannerFileUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: number
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    userId: number
    lastDiag?: Date | string | null
  }

  export type VehicleUpdateManyMutationInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DtcCreateInput = {
    code: string
    description: string
    category: string
    severity: string
    causes?: DtcCauseCreateNestedManyWithoutDtcInput
    solutions?: DtcSolutionCreateNestedManyWithoutDtcInput
    diagnostics?: DiagnosticDtcCreateNestedManyWithoutDtcInput
  }

  export type DtcUncheckedCreateInput = {
    code: string
    description: string
    category: string
    severity: string
    causes?: DtcCauseUncheckedCreateNestedManyWithoutDtcInput
    solutions?: DtcSolutionUncheckedCreateNestedManyWithoutDtcInput
    diagnostics?: DiagnosticDtcUncheckedCreateNestedManyWithoutDtcInput
  }

  export type DtcUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    causes?: DtcCauseUpdateManyWithoutDtcNestedInput
    solutions?: DtcSolutionUpdateManyWithoutDtcNestedInput
    diagnostics?: DiagnosticDtcUpdateManyWithoutDtcNestedInput
  }

  export type DtcUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    causes?: DtcCauseUncheckedUpdateManyWithoutDtcNestedInput
    solutions?: DtcSolutionUncheckedUpdateManyWithoutDtcNestedInput
    diagnostics?: DiagnosticDtcUncheckedUpdateManyWithoutDtcNestedInput
  }

  export type DtcCreateManyInput = {
    code: string
    description: string
    category: string
    severity: string
  }

  export type DtcUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
  }

  export type DtcUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
  }

  export type DtcCauseCreateInput = {
    text: string
    dtc: DtcCreateNestedOneWithoutCausesInput
  }

  export type DtcCauseUncheckedCreateInput = {
    id?: number
    text: string
    dtcCode: string
  }

  export type DtcCauseUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    dtc?: DtcUpdateOneRequiredWithoutCausesNestedInput
  }

  export type DtcCauseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type DtcCauseCreateManyInput = {
    id?: number
    text: string
    dtcCode: string
  }

  export type DtcCauseUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DtcCauseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type DtcSolutionCreateInput = {
    text: string
    dtc: DtcCreateNestedOneWithoutSolutionsInput
  }

  export type DtcSolutionUncheckedCreateInput = {
    id?: number
    text: string
    dtcCode: string
  }

  export type DtcSolutionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    dtc?: DtcUpdateOneRequiredWithoutSolutionsNestedInput
  }

  export type DtcSolutionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type DtcSolutionCreateManyInput = {
    id?: number
    text: string
    dtcCode: string
  }

  export type DtcSolutionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DtcSolutionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type SymptomCreateInput = {
    category: string
    name: string
    description: string
    diagnostics?: DiagnosticSymptomCreateNestedManyWithoutSymptomInput
  }

  export type SymptomUncheckedCreateInput = {
    id?: number
    category: string
    name: string
    description: string
    diagnostics?: DiagnosticSymptomUncheckedCreateNestedManyWithoutSymptomInput
  }

  export type SymptomUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    diagnostics?: DiagnosticSymptomUpdateManyWithoutSymptomNestedInput
  }

  export type SymptomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    diagnostics?: DiagnosticSymptomUncheckedUpdateManyWithoutSymptomNestedInput
  }

  export type SymptomCreateManyInput = {
    id?: number
    category: string
    name: string
    description: string
  }

  export type SymptomUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SymptomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticCreateInput = {
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    cost: number
    duration: number
    vehicle: VehicleCreateNestedOneWithoutDiagnosticsInput
    scannerFile?: ScannerFileCreateNestedOneWithoutDiagnosticsInput
    dtcs?: DiagnosticDtcCreateNestedManyWithoutDiagnosticInput
    symptoms?: DiagnosticSymptomCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateInput = {
    id?: number
    vehicleId: number
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    scannerFileId?: number | null
    cost: number
    duration: number
    dtcs?: DiagnosticDtcUncheckedCreateNestedManyWithoutDiagnosticInput
    symptoms?: DiagnosticSymptomUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutDiagnosticsNestedInput
    scannerFile?: ScannerFileUpdateOneWithoutDiagnosticsNestedInput
    dtcs?: DiagnosticDtcUpdateManyWithoutDiagnosticNestedInput
    symptoms?: DiagnosticSymptomUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    scannerFileId?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    dtcs?: DiagnosticDtcUncheckedUpdateManyWithoutDiagnosticNestedInput
    symptoms?: DiagnosticSymptomUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticCreateManyInput = {
    id?: number
    vehicleId: number
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    scannerFileId?: number | null
    cost: number
    duration: number
  }

  export type DiagnosticUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
  }

  export type DiagnosticUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    scannerFileId?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
  }

  export type DiagnosticDtcCreateInput = {
    diagnostic: DiagnosticCreateNestedOneWithoutDtcsInput
    dtc: DtcCreateNestedOneWithoutDiagnosticsInput
    diagnosticDtcSolutions?: DiagnosticDtcSolutionCreateNestedManyWithoutDiagnosticDtcInput
  }

  export type DiagnosticDtcUncheckedCreateInput = {
    diagnosticId: number
    dtcCode: string
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUncheckedCreateNestedManyWithoutDiagnosticDtcInput
  }

  export type DiagnosticDtcUpdateInput = {
    diagnostic?: DiagnosticUpdateOneRequiredWithoutDtcsNestedInput
    dtc?: DtcUpdateOneRequiredWithoutDiagnosticsNestedInput
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUpdateManyWithoutDiagnosticDtcNestedInput
  }

  export type DiagnosticDtcUncheckedUpdateInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    dtcCode?: StringFieldUpdateOperationsInput | string
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUncheckedUpdateManyWithoutDiagnosticDtcNestedInput
  }

  export type DiagnosticDtcCreateManyInput = {
    diagnosticId: number
    dtcCode: string
  }

  export type DiagnosticDtcUpdateManyMutationInput = {

  }

  export type DiagnosticDtcUncheckedUpdateManyInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticDtcSolutionCreateInput = {
    text: string
    diagnosticDtc: DiagnosticDtcCreateNestedOneWithoutDiagnosticDtcSolutionsInput
  }

  export type DiagnosticDtcSolutionUncheckedCreateInput = {
    id?: number
    text: string
    diagnosticId: number
    dtcCode: string
  }

  export type DiagnosticDtcSolutionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    diagnosticDtc?: DiagnosticDtcUpdateOneRequiredWithoutDiagnosticDtcSolutionsNestedInput
  }

  export type DiagnosticDtcSolutionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    diagnosticId?: IntFieldUpdateOperationsInput | number
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticDtcSolutionCreateManyInput = {
    id?: number
    text: string
    diagnosticId: number
    dtcCode: string
  }

  export type DiagnosticDtcSolutionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticDtcSolutionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    diagnosticId?: IntFieldUpdateOperationsInput | number
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticSymptomCreateInput = {
    diagnostic: DiagnosticCreateNestedOneWithoutSymptomsInput
    symptom: SymptomCreateNestedOneWithoutDiagnosticsInput
  }

  export type DiagnosticSymptomUncheckedCreateInput = {
    diagnosticId: number
    symptomId: number
  }

  export type DiagnosticSymptomUpdateInput = {
    diagnostic?: DiagnosticUpdateOneRequiredWithoutSymptomsNestedInput
    symptom?: SymptomUpdateOneRequiredWithoutDiagnosticsNestedInput
  }

  export type DiagnosticSymptomUncheckedUpdateInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    symptomId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticSymptomCreateManyInput = {
    diagnosticId: number
    symptomId: number
  }

  export type DiagnosticSymptomUpdateManyMutationInput = {

  }

  export type DiagnosticSymptomUncheckedUpdateManyInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    symptomId?: IntFieldUpdateOperationsInput | number
  }

  export type ScannerFileCreateInput = {
    fileName: string
    uploadDate: Date | string
    scannerType: string
    status: string
    rawData: JsonNullValueInput | InputJsonValue
    vehicle?: VehicleCreateNestedOneWithoutScannerFilesInput
    diagnostics?: DiagnosticCreateNestedManyWithoutScannerFileInput
  }

  export type ScannerFileUncheckedCreateInput = {
    id?: number
    fileName: string
    uploadDate: Date | string
    vehicleVin: string
    scannerType: string
    status: string
    rawData: JsonNullValueInput | InputJsonValue
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutScannerFileInput
  }

  export type ScannerFileUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    vehicle?: VehicleUpdateOneWithoutScannerFilesNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutScannerFileNestedInput
  }

  export type ScannerFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleVin?: StringFieldUpdateOperationsInput | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutScannerFileNestedInput
  }

  export type ScannerFileCreateManyInput = {
    id?: number
    fileName: string
    uploadDate: Date | string
    vehicleVin: string
    scannerType: string
    status: string
    rawData: JsonNullValueInput | InputJsonValue
  }

  export type ScannerFileUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
  }

  export type ScannerFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleVin?: StringFieldUpdateOperationsInput | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
  }

  export type HelpCreateInput = {
    title: string
    content: string
    category: string
  }

  export type HelpUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    category: string
  }

  export type HelpUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type HelpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type HelpCreateManyInput = {
    id?: number
    title: string
    content: string
    category: string
  }

  export type HelpUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type HelpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    email?: SortOrder
    password?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DiagnosticListRelationFilter = {
    every?: DiagnosticWhereInput
    some?: DiagnosticWhereInput
    none?: DiagnosticWhereInput
  }

  export type ScannerFileListRelationFilter = {
    every?: ScannerFileWhereInput
    some?: ScannerFileWhereInput
    none?: ScannerFileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiagnosticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScannerFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleOrderByRelevanceInput = {
    fields: VehicleOrderByRelevanceFieldEnum | VehicleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    year?: SortOrder
    motor?: SortOrder
    vin?: SortOrder
    patente?: SortOrder
    km?: SortOrder
    fechaAdq?: SortOrder
    userId?: SortOrder
    lastDiag?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    km?: SortOrder
    userId?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    year?: SortOrder
    motor?: SortOrder
    vin?: SortOrder
    patente?: SortOrder
    km?: SortOrder
    fechaAdq?: SortOrder
    userId?: SortOrder
    lastDiag?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    year?: SortOrder
    motor?: SortOrder
    vin?: SortOrder
    patente?: SortOrder
    km?: SortOrder
    fechaAdq?: SortOrder
    userId?: SortOrder
    lastDiag?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    km?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DtcCauseListRelationFilter = {
    every?: DtcCauseWhereInput
    some?: DtcCauseWhereInput
    none?: DtcCauseWhereInput
  }

  export type DtcSolutionListRelationFilter = {
    every?: DtcSolutionWhereInput
    some?: DtcSolutionWhereInput
    none?: DtcSolutionWhereInput
  }

  export type DiagnosticDtcListRelationFilter = {
    every?: DiagnosticDtcWhereInput
    some?: DiagnosticDtcWhereInput
    none?: DiagnosticDtcWhereInput
  }

  export type DtcCauseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DtcSolutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosticDtcOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DtcOrderByRelevanceInput = {
    fields: DtcOrderByRelevanceFieldEnum | DtcOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DtcCountOrderByAggregateInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrder
    severity?: SortOrder
  }

  export type DtcMaxOrderByAggregateInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrder
    severity?: SortOrder
  }

  export type DtcMinOrderByAggregateInput = {
    code?: SortOrder
    description?: SortOrder
    category?: SortOrder
    severity?: SortOrder
  }

  export type DtcScalarRelationFilter = {
    is?: DtcWhereInput
    isNot?: DtcWhereInput
  }

  export type DtcCauseOrderByRelevanceInput = {
    fields: DtcCauseOrderByRelevanceFieldEnum | DtcCauseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DtcCauseCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
  }

  export type DtcCauseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DtcCauseMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
  }

  export type DtcCauseMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
  }

  export type DtcCauseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DtcSolutionOrderByRelevanceInput = {
    fields: DtcSolutionOrderByRelevanceFieldEnum | DtcSolutionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DtcSolutionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
  }

  export type DtcSolutionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DtcSolutionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
  }

  export type DtcSolutionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    dtcCode?: SortOrder
  }

  export type DtcSolutionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiagnosticSymptomListRelationFilter = {
    every?: DiagnosticSymptomWhereInput
    some?: DiagnosticSymptomWhereInput
    none?: DiagnosticSymptomWhereInput
  }

  export type DiagnosticSymptomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SymptomOrderByRelevanceInput = {
    fields: SymptomOrderByRelevanceFieldEnum | SymptomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SymptomCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SymptomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SymptomMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SymptomMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SymptomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type ScannerFileNullableScalarRelationFilter = {
    is?: ScannerFileWhereInput | null
    isNot?: ScannerFileWhereInput | null
  }

  export type DiagnosticOrderByRelevanceInput = {
    fields: DiagnosticOrderByRelevanceFieldEnum | DiagnosticOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiagnosticCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fecha?: SortOrder
    desc?: SortOrder
    tecnico?: SortOrder
    estado?: SortOrder
    detalles?: SortOrder
    scannerFileId?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
  }

  export type DiagnosticAvgOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    scannerFileId?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
  }

  export type DiagnosticMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fecha?: SortOrder
    desc?: SortOrder
    tecnico?: SortOrder
    estado?: SortOrder
    detalles?: SortOrder
    scannerFileId?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
  }

  export type DiagnosticMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fecha?: SortOrder
    desc?: SortOrder
    tecnico?: SortOrder
    estado?: SortOrder
    detalles?: SortOrder
    scannerFileId?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
  }

  export type DiagnosticSumOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    scannerFileId?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DiagnosticScalarRelationFilter = {
    is?: DiagnosticWhereInput
    isNot?: DiagnosticWhereInput
  }

  export type DiagnosticDtcSolutionListRelationFilter = {
    every?: DiagnosticDtcSolutionWhereInput
    some?: DiagnosticDtcSolutionWhereInput
    none?: DiagnosticDtcSolutionWhereInput
  }

  export type DiagnosticDtcSolutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosticDtcOrderByRelevanceInput = {
    fields: DiagnosticDtcOrderByRelevanceFieldEnum | DiagnosticDtcOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiagnosticDtcDiagnosticIdDtcCodeCompoundUniqueInput = {
    diagnosticId: number
    dtcCode: string
  }

  export type DiagnosticDtcCountOrderByAggregateInput = {
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
  }

  export type DiagnosticDtcAvgOrderByAggregateInput = {
    diagnosticId?: SortOrder
  }

  export type DiagnosticDtcMaxOrderByAggregateInput = {
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
  }

  export type DiagnosticDtcMinOrderByAggregateInput = {
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
  }

  export type DiagnosticDtcSumOrderByAggregateInput = {
    diagnosticId?: SortOrder
  }

  export type DiagnosticDtcScalarRelationFilter = {
    is?: DiagnosticDtcWhereInput
    isNot?: DiagnosticDtcWhereInput
  }

  export type DiagnosticDtcSolutionOrderByRelevanceInput = {
    fields: DiagnosticDtcSolutionOrderByRelevanceFieldEnum | DiagnosticDtcSolutionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiagnosticDtcSolutionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
  }

  export type DiagnosticDtcSolutionAvgOrderByAggregateInput = {
    id?: SortOrder
    diagnosticId?: SortOrder
  }

  export type DiagnosticDtcSolutionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
  }

  export type DiagnosticDtcSolutionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    diagnosticId?: SortOrder
    dtcCode?: SortOrder
  }

  export type DiagnosticDtcSolutionSumOrderByAggregateInput = {
    id?: SortOrder
    diagnosticId?: SortOrder
  }

  export type SymptomScalarRelationFilter = {
    is?: SymptomWhereInput
    isNot?: SymptomWhereInput
  }

  export type DiagnosticSymptomDiagnosticIdSymptomIdCompoundUniqueInput = {
    diagnosticId: number
    symptomId: number
  }

  export type DiagnosticSymptomCountOrderByAggregateInput = {
    diagnosticId?: SortOrder
    symptomId?: SortOrder
  }

  export type DiagnosticSymptomAvgOrderByAggregateInput = {
    diagnosticId?: SortOrder
    symptomId?: SortOrder
  }

  export type DiagnosticSymptomMaxOrderByAggregateInput = {
    diagnosticId?: SortOrder
    symptomId?: SortOrder
  }

  export type DiagnosticSymptomMinOrderByAggregateInput = {
    diagnosticId?: SortOrder
    symptomId?: SortOrder
  }

  export type DiagnosticSymptomSumOrderByAggregateInput = {
    diagnosticId?: SortOrder
    symptomId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type ScannerFileOrderByRelevanceInput = {
    fields: ScannerFileOrderByRelevanceFieldEnum | ScannerFileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScannerFileCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    vehicleVin?: SortOrder
    scannerType?: SortOrder
    status?: SortOrder
    rawData?: SortOrder
  }

  export type ScannerFileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScannerFileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    vehicleVin?: SortOrder
    scannerType?: SortOrder
    status?: SortOrder
  }

  export type ScannerFileMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadDate?: SortOrder
    vehicleVin?: SortOrder
    scannerType?: SortOrder
    status?: SortOrder
  }

  export type ScannerFileSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type HelpOrderByRelevanceInput = {
    fields: HelpOrderByRelevanceFieldEnum | HelpOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HelpCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
  }

  export type HelpAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HelpMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
  }

  export type HelpMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
  }

  export type HelpSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type DiagnosticCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DiagnosticCreateWithoutVehicleInput, DiagnosticUncheckedCreateWithoutVehicleInput> | DiagnosticCreateWithoutVehicleInput[] | DiagnosticUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutVehicleInput | DiagnosticCreateOrConnectWithoutVehicleInput[]
    createMany?: DiagnosticCreateManyVehicleInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type ScannerFileCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ScannerFileCreateWithoutVehicleInput, ScannerFileUncheckedCreateWithoutVehicleInput> | ScannerFileCreateWithoutVehicleInput[] | ScannerFileUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ScannerFileCreateOrConnectWithoutVehicleInput | ScannerFileCreateOrConnectWithoutVehicleInput[]
    createMany?: ScannerFileCreateManyVehicleInputEnvelope
    connect?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
  }

  export type DiagnosticUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DiagnosticCreateWithoutVehicleInput, DiagnosticUncheckedCreateWithoutVehicleInput> | DiagnosticCreateWithoutVehicleInput[] | DiagnosticUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutVehicleInput | DiagnosticCreateOrConnectWithoutVehicleInput[]
    createMany?: DiagnosticCreateManyVehicleInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type ScannerFileUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ScannerFileCreateWithoutVehicleInput, ScannerFileUncheckedCreateWithoutVehicleInput> | ScannerFileCreateWithoutVehicleInput[] | ScannerFileUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ScannerFileCreateOrConnectWithoutVehicleInput | ScannerFileCreateOrConnectWithoutVehicleInput[]
    createMany?: ScannerFileCreateManyVehicleInputEnvelope
    connect?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type DiagnosticUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DiagnosticCreateWithoutVehicleInput, DiagnosticUncheckedCreateWithoutVehicleInput> | DiagnosticCreateWithoutVehicleInput[] | DiagnosticUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutVehicleInput | DiagnosticCreateOrConnectWithoutVehicleInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutVehicleInput | DiagnosticUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DiagnosticCreateManyVehicleInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutVehicleInput | DiagnosticUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutVehicleInput | DiagnosticUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type ScannerFileUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ScannerFileCreateWithoutVehicleInput, ScannerFileUncheckedCreateWithoutVehicleInput> | ScannerFileCreateWithoutVehicleInput[] | ScannerFileUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ScannerFileCreateOrConnectWithoutVehicleInput | ScannerFileCreateOrConnectWithoutVehicleInput[]
    upsert?: ScannerFileUpsertWithWhereUniqueWithoutVehicleInput | ScannerFileUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ScannerFileCreateManyVehicleInputEnvelope
    set?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
    disconnect?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
    delete?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
    connect?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
    update?: ScannerFileUpdateWithWhereUniqueWithoutVehicleInput | ScannerFileUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ScannerFileUpdateManyWithWhereWithoutVehicleInput | ScannerFileUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ScannerFileScalarWhereInput | ScannerFileScalarWhereInput[]
  }

  export type DiagnosticUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DiagnosticCreateWithoutVehicleInput, DiagnosticUncheckedCreateWithoutVehicleInput> | DiagnosticCreateWithoutVehicleInput[] | DiagnosticUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutVehicleInput | DiagnosticCreateOrConnectWithoutVehicleInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutVehicleInput | DiagnosticUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DiagnosticCreateManyVehicleInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutVehicleInput | DiagnosticUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutVehicleInput | DiagnosticUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type ScannerFileUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ScannerFileCreateWithoutVehicleInput, ScannerFileUncheckedCreateWithoutVehicleInput> | ScannerFileCreateWithoutVehicleInput[] | ScannerFileUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ScannerFileCreateOrConnectWithoutVehicleInput | ScannerFileCreateOrConnectWithoutVehicleInput[]
    upsert?: ScannerFileUpsertWithWhereUniqueWithoutVehicleInput | ScannerFileUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ScannerFileCreateManyVehicleInputEnvelope
    set?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
    disconnect?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
    delete?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
    connect?: ScannerFileWhereUniqueInput | ScannerFileWhereUniqueInput[]
    update?: ScannerFileUpdateWithWhereUniqueWithoutVehicleInput | ScannerFileUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ScannerFileUpdateManyWithWhereWithoutVehicleInput | ScannerFileUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ScannerFileScalarWhereInput | ScannerFileScalarWhereInput[]
  }

  export type DtcCauseCreateNestedManyWithoutDtcInput = {
    create?: XOR<DtcCauseCreateWithoutDtcInput, DtcCauseUncheckedCreateWithoutDtcInput> | DtcCauseCreateWithoutDtcInput[] | DtcCauseUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DtcCauseCreateOrConnectWithoutDtcInput | DtcCauseCreateOrConnectWithoutDtcInput[]
    createMany?: DtcCauseCreateManyDtcInputEnvelope
    connect?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
  }

  export type DtcSolutionCreateNestedManyWithoutDtcInput = {
    create?: XOR<DtcSolutionCreateWithoutDtcInput, DtcSolutionUncheckedCreateWithoutDtcInput> | DtcSolutionCreateWithoutDtcInput[] | DtcSolutionUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DtcSolutionCreateOrConnectWithoutDtcInput | DtcSolutionCreateOrConnectWithoutDtcInput[]
    createMany?: DtcSolutionCreateManyDtcInputEnvelope
    connect?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
  }

  export type DiagnosticDtcCreateNestedManyWithoutDtcInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDtcInput, DiagnosticDtcUncheckedCreateWithoutDtcInput> | DiagnosticDtcCreateWithoutDtcInput[] | DiagnosticDtcUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDtcInput | DiagnosticDtcCreateOrConnectWithoutDtcInput[]
    createMany?: DiagnosticDtcCreateManyDtcInputEnvelope
    connect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
  }

  export type DtcCauseUncheckedCreateNestedManyWithoutDtcInput = {
    create?: XOR<DtcCauseCreateWithoutDtcInput, DtcCauseUncheckedCreateWithoutDtcInput> | DtcCauseCreateWithoutDtcInput[] | DtcCauseUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DtcCauseCreateOrConnectWithoutDtcInput | DtcCauseCreateOrConnectWithoutDtcInput[]
    createMany?: DtcCauseCreateManyDtcInputEnvelope
    connect?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
  }

  export type DtcSolutionUncheckedCreateNestedManyWithoutDtcInput = {
    create?: XOR<DtcSolutionCreateWithoutDtcInput, DtcSolutionUncheckedCreateWithoutDtcInput> | DtcSolutionCreateWithoutDtcInput[] | DtcSolutionUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DtcSolutionCreateOrConnectWithoutDtcInput | DtcSolutionCreateOrConnectWithoutDtcInput[]
    createMany?: DtcSolutionCreateManyDtcInputEnvelope
    connect?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
  }

  export type DiagnosticDtcUncheckedCreateNestedManyWithoutDtcInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDtcInput, DiagnosticDtcUncheckedCreateWithoutDtcInput> | DiagnosticDtcCreateWithoutDtcInput[] | DiagnosticDtcUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDtcInput | DiagnosticDtcCreateOrConnectWithoutDtcInput[]
    createMany?: DiagnosticDtcCreateManyDtcInputEnvelope
    connect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
  }

  export type DtcCauseUpdateManyWithoutDtcNestedInput = {
    create?: XOR<DtcCauseCreateWithoutDtcInput, DtcCauseUncheckedCreateWithoutDtcInput> | DtcCauseCreateWithoutDtcInput[] | DtcCauseUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DtcCauseCreateOrConnectWithoutDtcInput | DtcCauseCreateOrConnectWithoutDtcInput[]
    upsert?: DtcCauseUpsertWithWhereUniqueWithoutDtcInput | DtcCauseUpsertWithWhereUniqueWithoutDtcInput[]
    createMany?: DtcCauseCreateManyDtcInputEnvelope
    set?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
    disconnect?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
    delete?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
    connect?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
    update?: DtcCauseUpdateWithWhereUniqueWithoutDtcInput | DtcCauseUpdateWithWhereUniqueWithoutDtcInput[]
    updateMany?: DtcCauseUpdateManyWithWhereWithoutDtcInput | DtcCauseUpdateManyWithWhereWithoutDtcInput[]
    deleteMany?: DtcCauseScalarWhereInput | DtcCauseScalarWhereInput[]
  }

  export type DtcSolutionUpdateManyWithoutDtcNestedInput = {
    create?: XOR<DtcSolutionCreateWithoutDtcInput, DtcSolutionUncheckedCreateWithoutDtcInput> | DtcSolutionCreateWithoutDtcInput[] | DtcSolutionUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DtcSolutionCreateOrConnectWithoutDtcInput | DtcSolutionCreateOrConnectWithoutDtcInput[]
    upsert?: DtcSolutionUpsertWithWhereUniqueWithoutDtcInput | DtcSolutionUpsertWithWhereUniqueWithoutDtcInput[]
    createMany?: DtcSolutionCreateManyDtcInputEnvelope
    set?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
    disconnect?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
    delete?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
    connect?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
    update?: DtcSolutionUpdateWithWhereUniqueWithoutDtcInput | DtcSolutionUpdateWithWhereUniqueWithoutDtcInput[]
    updateMany?: DtcSolutionUpdateManyWithWhereWithoutDtcInput | DtcSolutionUpdateManyWithWhereWithoutDtcInput[]
    deleteMany?: DtcSolutionScalarWhereInput | DtcSolutionScalarWhereInput[]
  }

  export type DiagnosticDtcUpdateManyWithoutDtcNestedInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDtcInput, DiagnosticDtcUncheckedCreateWithoutDtcInput> | DiagnosticDtcCreateWithoutDtcInput[] | DiagnosticDtcUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDtcInput | DiagnosticDtcCreateOrConnectWithoutDtcInput[]
    upsert?: DiagnosticDtcUpsertWithWhereUniqueWithoutDtcInput | DiagnosticDtcUpsertWithWhereUniqueWithoutDtcInput[]
    createMany?: DiagnosticDtcCreateManyDtcInputEnvelope
    set?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    disconnect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    delete?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    connect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    update?: DiagnosticDtcUpdateWithWhereUniqueWithoutDtcInput | DiagnosticDtcUpdateWithWhereUniqueWithoutDtcInput[]
    updateMany?: DiagnosticDtcUpdateManyWithWhereWithoutDtcInput | DiagnosticDtcUpdateManyWithWhereWithoutDtcInput[]
    deleteMany?: DiagnosticDtcScalarWhereInput | DiagnosticDtcScalarWhereInput[]
  }

  export type DtcCauseUncheckedUpdateManyWithoutDtcNestedInput = {
    create?: XOR<DtcCauseCreateWithoutDtcInput, DtcCauseUncheckedCreateWithoutDtcInput> | DtcCauseCreateWithoutDtcInput[] | DtcCauseUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DtcCauseCreateOrConnectWithoutDtcInput | DtcCauseCreateOrConnectWithoutDtcInput[]
    upsert?: DtcCauseUpsertWithWhereUniqueWithoutDtcInput | DtcCauseUpsertWithWhereUniqueWithoutDtcInput[]
    createMany?: DtcCauseCreateManyDtcInputEnvelope
    set?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
    disconnect?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
    delete?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
    connect?: DtcCauseWhereUniqueInput | DtcCauseWhereUniqueInput[]
    update?: DtcCauseUpdateWithWhereUniqueWithoutDtcInput | DtcCauseUpdateWithWhereUniqueWithoutDtcInput[]
    updateMany?: DtcCauseUpdateManyWithWhereWithoutDtcInput | DtcCauseUpdateManyWithWhereWithoutDtcInput[]
    deleteMany?: DtcCauseScalarWhereInput | DtcCauseScalarWhereInput[]
  }

  export type DtcSolutionUncheckedUpdateManyWithoutDtcNestedInput = {
    create?: XOR<DtcSolutionCreateWithoutDtcInput, DtcSolutionUncheckedCreateWithoutDtcInput> | DtcSolutionCreateWithoutDtcInput[] | DtcSolutionUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DtcSolutionCreateOrConnectWithoutDtcInput | DtcSolutionCreateOrConnectWithoutDtcInput[]
    upsert?: DtcSolutionUpsertWithWhereUniqueWithoutDtcInput | DtcSolutionUpsertWithWhereUniqueWithoutDtcInput[]
    createMany?: DtcSolutionCreateManyDtcInputEnvelope
    set?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
    disconnect?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
    delete?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
    connect?: DtcSolutionWhereUniqueInput | DtcSolutionWhereUniqueInput[]
    update?: DtcSolutionUpdateWithWhereUniqueWithoutDtcInput | DtcSolutionUpdateWithWhereUniqueWithoutDtcInput[]
    updateMany?: DtcSolutionUpdateManyWithWhereWithoutDtcInput | DtcSolutionUpdateManyWithWhereWithoutDtcInput[]
    deleteMany?: DtcSolutionScalarWhereInput | DtcSolutionScalarWhereInput[]
  }

  export type DiagnosticDtcUncheckedUpdateManyWithoutDtcNestedInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDtcInput, DiagnosticDtcUncheckedCreateWithoutDtcInput> | DiagnosticDtcCreateWithoutDtcInput[] | DiagnosticDtcUncheckedCreateWithoutDtcInput[]
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDtcInput | DiagnosticDtcCreateOrConnectWithoutDtcInput[]
    upsert?: DiagnosticDtcUpsertWithWhereUniqueWithoutDtcInput | DiagnosticDtcUpsertWithWhereUniqueWithoutDtcInput[]
    createMany?: DiagnosticDtcCreateManyDtcInputEnvelope
    set?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    disconnect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    delete?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    connect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    update?: DiagnosticDtcUpdateWithWhereUniqueWithoutDtcInput | DiagnosticDtcUpdateWithWhereUniqueWithoutDtcInput[]
    updateMany?: DiagnosticDtcUpdateManyWithWhereWithoutDtcInput | DiagnosticDtcUpdateManyWithWhereWithoutDtcInput[]
    deleteMany?: DiagnosticDtcScalarWhereInput | DiagnosticDtcScalarWhereInput[]
  }

  export type DtcCreateNestedOneWithoutCausesInput = {
    create?: XOR<DtcCreateWithoutCausesInput, DtcUncheckedCreateWithoutCausesInput>
    connectOrCreate?: DtcCreateOrConnectWithoutCausesInput
    connect?: DtcWhereUniqueInput
  }

  export type DtcUpdateOneRequiredWithoutCausesNestedInput = {
    create?: XOR<DtcCreateWithoutCausesInput, DtcUncheckedCreateWithoutCausesInput>
    connectOrCreate?: DtcCreateOrConnectWithoutCausesInput
    upsert?: DtcUpsertWithoutCausesInput
    connect?: DtcWhereUniqueInput
    update?: XOR<XOR<DtcUpdateToOneWithWhereWithoutCausesInput, DtcUpdateWithoutCausesInput>, DtcUncheckedUpdateWithoutCausesInput>
  }

  export type DtcCreateNestedOneWithoutSolutionsInput = {
    create?: XOR<DtcCreateWithoutSolutionsInput, DtcUncheckedCreateWithoutSolutionsInput>
    connectOrCreate?: DtcCreateOrConnectWithoutSolutionsInput
    connect?: DtcWhereUniqueInput
  }

  export type DtcUpdateOneRequiredWithoutSolutionsNestedInput = {
    create?: XOR<DtcCreateWithoutSolutionsInput, DtcUncheckedCreateWithoutSolutionsInput>
    connectOrCreate?: DtcCreateOrConnectWithoutSolutionsInput
    upsert?: DtcUpsertWithoutSolutionsInput
    connect?: DtcWhereUniqueInput
    update?: XOR<XOR<DtcUpdateToOneWithWhereWithoutSolutionsInput, DtcUpdateWithoutSolutionsInput>, DtcUncheckedUpdateWithoutSolutionsInput>
  }

  export type DiagnosticSymptomCreateNestedManyWithoutSymptomInput = {
    create?: XOR<DiagnosticSymptomCreateWithoutSymptomInput, DiagnosticSymptomUncheckedCreateWithoutSymptomInput> | DiagnosticSymptomCreateWithoutSymptomInput[] | DiagnosticSymptomUncheckedCreateWithoutSymptomInput[]
    connectOrCreate?: DiagnosticSymptomCreateOrConnectWithoutSymptomInput | DiagnosticSymptomCreateOrConnectWithoutSymptomInput[]
    createMany?: DiagnosticSymptomCreateManySymptomInputEnvelope
    connect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
  }

  export type DiagnosticSymptomUncheckedCreateNestedManyWithoutSymptomInput = {
    create?: XOR<DiagnosticSymptomCreateWithoutSymptomInput, DiagnosticSymptomUncheckedCreateWithoutSymptomInput> | DiagnosticSymptomCreateWithoutSymptomInput[] | DiagnosticSymptomUncheckedCreateWithoutSymptomInput[]
    connectOrCreate?: DiagnosticSymptomCreateOrConnectWithoutSymptomInput | DiagnosticSymptomCreateOrConnectWithoutSymptomInput[]
    createMany?: DiagnosticSymptomCreateManySymptomInputEnvelope
    connect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
  }

  export type DiagnosticSymptomUpdateManyWithoutSymptomNestedInput = {
    create?: XOR<DiagnosticSymptomCreateWithoutSymptomInput, DiagnosticSymptomUncheckedCreateWithoutSymptomInput> | DiagnosticSymptomCreateWithoutSymptomInput[] | DiagnosticSymptomUncheckedCreateWithoutSymptomInput[]
    connectOrCreate?: DiagnosticSymptomCreateOrConnectWithoutSymptomInput | DiagnosticSymptomCreateOrConnectWithoutSymptomInput[]
    upsert?: DiagnosticSymptomUpsertWithWhereUniqueWithoutSymptomInput | DiagnosticSymptomUpsertWithWhereUniqueWithoutSymptomInput[]
    createMany?: DiagnosticSymptomCreateManySymptomInputEnvelope
    set?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    disconnect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    delete?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    connect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    update?: DiagnosticSymptomUpdateWithWhereUniqueWithoutSymptomInput | DiagnosticSymptomUpdateWithWhereUniqueWithoutSymptomInput[]
    updateMany?: DiagnosticSymptomUpdateManyWithWhereWithoutSymptomInput | DiagnosticSymptomUpdateManyWithWhereWithoutSymptomInput[]
    deleteMany?: DiagnosticSymptomScalarWhereInput | DiagnosticSymptomScalarWhereInput[]
  }

  export type DiagnosticSymptomUncheckedUpdateManyWithoutSymptomNestedInput = {
    create?: XOR<DiagnosticSymptomCreateWithoutSymptomInput, DiagnosticSymptomUncheckedCreateWithoutSymptomInput> | DiagnosticSymptomCreateWithoutSymptomInput[] | DiagnosticSymptomUncheckedCreateWithoutSymptomInput[]
    connectOrCreate?: DiagnosticSymptomCreateOrConnectWithoutSymptomInput | DiagnosticSymptomCreateOrConnectWithoutSymptomInput[]
    upsert?: DiagnosticSymptomUpsertWithWhereUniqueWithoutSymptomInput | DiagnosticSymptomUpsertWithWhereUniqueWithoutSymptomInput[]
    createMany?: DiagnosticSymptomCreateManySymptomInputEnvelope
    set?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    disconnect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    delete?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    connect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    update?: DiagnosticSymptomUpdateWithWhereUniqueWithoutSymptomInput | DiagnosticSymptomUpdateWithWhereUniqueWithoutSymptomInput[]
    updateMany?: DiagnosticSymptomUpdateManyWithWhereWithoutSymptomInput | DiagnosticSymptomUpdateManyWithWhereWithoutSymptomInput[]
    deleteMany?: DiagnosticSymptomScalarWhereInput | DiagnosticSymptomScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutDiagnosticsInput = {
    create?: XOR<VehicleCreateWithoutDiagnosticsInput, VehicleUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDiagnosticsInput
    connect?: VehicleWhereUniqueInput
  }

  export type ScannerFileCreateNestedOneWithoutDiagnosticsInput = {
    create?: XOR<ScannerFileCreateWithoutDiagnosticsInput, ScannerFileUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: ScannerFileCreateOrConnectWithoutDiagnosticsInput
    connect?: ScannerFileWhereUniqueInput
  }

  export type DiagnosticDtcCreateNestedManyWithoutDiagnosticInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDiagnosticInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticInput> | DiagnosticDtcCreateWithoutDiagnosticInput[] | DiagnosticDtcUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDiagnosticInput | DiagnosticDtcCreateOrConnectWithoutDiagnosticInput[]
    createMany?: DiagnosticDtcCreateManyDiagnosticInputEnvelope
    connect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
  }

  export type DiagnosticSymptomCreateNestedManyWithoutDiagnosticInput = {
    create?: XOR<DiagnosticSymptomCreateWithoutDiagnosticInput, DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput> | DiagnosticSymptomCreateWithoutDiagnosticInput[] | DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput | DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput[]
    createMany?: DiagnosticSymptomCreateManyDiagnosticInputEnvelope
    connect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
  }

  export type DiagnosticDtcUncheckedCreateNestedManyWithoutDiagnosticInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDiagnosticInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticInput> | DiagnosticDtcCreateWithoutDiagnosticInput[] | DiagnosticDtcUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDiagnosticInput | DiagnosticDtcCreateOrConnectWithoutDiagnosticInput[]
    createMany?: DiagnosticDtcCreateManyDiagnosticInputEnvelope
    connect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
  }

  export type DiagnosticSymptomUncheckedCreateNestedManyWithoutDiagnosticInput = {
    create?: XOR<DiagnosticSymptomCreateWithoutDiagnosticInput, DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput> | DiagnosticSymptomCreateWithoutDiagnosticInput[] | DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput | DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput[]
    createMany?: DiagnosticSymptomCreateManyDiagnosticInputEnvelope
    connect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUpdateOneRequiredWithoutDiagnosticsNestedInput = {
    create?: XOR<VehicleCreateWithoutDiagnosticsInput, VehicleUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDiagnosticsInput
    upsert?: VehicleUpsertWithoutDiagnosticsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDiagnosticsInput, VehicleUpdateWithoutDiagnosticsInput>, VehicleUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type ScannerFileUpdateOneWithoutDiagnosticsNestedInput = {
    create?: XOR<ScannerFileCreateWithoutDiagnosticsInput, ScannerFileUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: ScannerFileCreateOrConnectWithoutDiagnosticsInput
    upsert?: ScannerFileUpsertWithoutDiagnosticsInput
    disconnect?: ScannerFileWhereInput | boolean
    delete?: ScannerFileWhereInput | boolean
    connect?: ScannerFileWhereUniqueInput
    update?: XOR<XOR<ScannerFileUpdateToOneWithWhereWithoutDiagnosticsInput, ScannerFileUpdateWithoutDiagnosticsInput>, ScannerFileUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type DiagnosticDtcUpdateManyWithoutDiagnosticNestedInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDiagnosticInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticInput> | DiagnosticDtcCreateWithoutDiagnosticInput[] | DiagnosticDtcUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDiagnosticInput | DiagnosticDtcCreateOrConnectWithoutDiagnosticInput[]
    upsert?: DiagnosticDtcUpsertWithWhereUniqueWithoutDiagnosticInput | DiagnosticDtcUpsertWithWhereUniqueWithoutDiagnosticInput[]
    createMany?: DiagnosticDtcCreateManyDiagnosticInputEnvelope
    set?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    disconnect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    delete?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    connect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    update?: DiagnosticDtcUpdateWithWhereUniqueWithoutDiagnosticInput | DiagnosticDtcUpdateWithWhereUniqueWithoutDiagnosticInput[]
    updateMany?: DiagnosticDtcUpdateManyWithWhereWithoutDiagnosticInput | DiagnosticDtcUpdateManyWithWhereWithoutDiagnosticInput[]
    deleteMany?: DiagnosticDtcScalarWhereInput | DiagnosticDtcScalarWhereInput[]
  }

  export type DiagnosticSymptomUpdateManyWithoutDiagnosticNestedInput = {
    create?: XOR<DiagnosticSymptomCreateWithoutDiagnosticInput, DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput> | DiagnosticSymptomCreateWithoutDiagnosticInput[] | DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput | DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput[]
    upsert?: DiagnosticSymptomUpsertWithWhereUniqueWithoutDiagnosticInput | DiagnosticSymptomUpsertWithWhereUniqueWithoutDiagnosticInput[]
    createMany?: DiagnosticSymptomCreateManyDiagnosticInputEnvelope
    set?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    disconnect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    delete?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    connect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    update?: DiagnosticSymptomUpdateWithWhereUniqueWithoutDiagnosticInput | DiagnosticSymptomUpdateWithWhereUniqueWithoutDiagnosticInput[]
    updateMany?: DiagnosticSymptomUpdateManyWithWhereWithoutDiagnosticInput | DiagnosticSymptomUpdateManyWithWhereWithoutDiagnosticInput[]
    deleteMany?: DiagnosticSymptomScalarWhereInput | DiagnosticSymptomScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiagnosticDtcUncheckedUpdateManyWithoutDiagnosticNestedInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDiagnosticInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticInput> | DiagnosticDtcCreateWithoutDiagnosticInput[] | DiagnosticDtcUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDiagnosticInput | DiagnosticDtcCreateOrConnectWithoutDiagnosticInput[]
    upsert?: DiagnosticDtcUpsertWithWhereUniqueWithoutDiagnosticInput | DiagnosticDtcUpsertWithWhereUniqueWithoutDiagnosticInput[]
    createMany?: DiagnosticDtcCreateManyDiagnosticInputEnvelope
    set?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    disconnect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    delete?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    connect?: DiagnosticDtcWhereUniqueInput | DiagnosticDtcWhereUniqueInput[]
    update?: DiagnosticDtcUpdateWithWhereUniqueWithoutDiagnosticInput | DiagnosticDtcUpdateWithWhereUniqueWithoutDiagnosticInput[]
    updateMany?: DiagnosticDtcUpdateManyWithWhereWithoutDiagnosticInput | DiagnosticDtcUpdateManyWithWhereWithoutDiagnosticInput[]
    deleteMany?: DiagnosticDtcScalarWhereInput | DiagnosticDtcScalarWhereInput[]
  }

  export type DiagnosticSymptomUncheckedUpdateManyWithoutDiagnosticNestedInput = {
    create?: XOR<DiagnosticSymptomCreateWithoutDiagnosticInput, DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput> | DiagnosticSymptomCreateWithoutDiagnosticInput[] | DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput[]
    connectOrCreate?: DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput | DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput[]
    upsert?: DiagnosticSymptomUpsertWithWhereUniqueWithoutDiagnosticInput | DiagnosticSymptomUpsertWithWhereUniqueWithoutDiagnosticInput[]
    createMany?: DiagnosticSymptomCreateManyDiagnosticInputEnvelope
    set?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    disconnect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    delete?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    connect?: DiagnosticSymptomWhereUniqueInput | DiagnosticSymptomWhereUniqueInput[]
    update?: DiagnosticSymptomUpdateWithWhereUniqueWithoutDiagnosticInput | DiagnosticSymptomUpdateWithWhereUniqueWithoutDiagnosticInput[]
    updateMany?: DiagnosticSymptomUpdateManyWithWhereWithoutDiagnosticInput | DiagnosticSymptomUpdateManyWithWhereWithoutDiagnosticInput[]
    deleteMany?: DiagnosticSymptomScalarWhereInput | DiagnosticSymptomScalarWhereInput[]
  }

  export type DiagnosticCreateNestedOneWithoutDtcsInput = {
    create?: XOR<DiagnosticCreateWithoutDtcsInput, DiagnosticUncheckedCreateWithoutDtcsInput>
    connectOrCreate?: DiagnosticCreateOrConnectWithoutDtcsInput
    connect?: DiagnosticWhereUniqueInput
  }

  export type DtcCreateNestedOneWithoutDiagnosticsInput = {
    create?: XOR<DtcCreateWithoutDiagnosticsInput, DtcUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: DtcCreateOrConnectWithoutDiagnosticsInput
    connect?: DtcWhereUniqueInput
  }

  export type DiagnosticDtcSolutionCreateNestedManyWithoutDiagnosticDtcInput = {
    create?: XOR<DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput, DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput> | DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput[] | DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput[]
    connectOrCreate?: DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput | DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput[]
    createMany?: DiagnosticDtcSolutionCreateManyDiagnosticDtcInputEnvelope
    connect?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
  }

  export type DiagnosticDtcSolutionUncheckedCreateNestedManyWithoutDiagnosticDtcInput = {
    create?: XOR<DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput, DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput> | DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput[] | DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput[]
    connectOrCreate?: DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput | DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput[]
    createMany?: DiagnosticDtcSolutionCreateManyDiagnosticDtcInputEnvelope
    connect?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
  }

  export type DiagnosticUpdateOneRequiredWithoutDtcsNestedInput = {
    create?: XOR<DiagnosticCreateWithoutDtcsInput, DiagnosticUncheckedCreateWithoutDtcsInput>
    connectOrCreate?: DiagnosticCreateOrConnectWithoutDtcsInput
    upsert?: DiagnosticUpsertWithoutDtcsInput
    connect?: DiagnosticWhereUniqueInput
    update?: XOR<XOR<DiagnosticUpdateToOneWithWhereWithoutDtcsInput, DiagnosticUpdateWithoutDtcsInput>, DiagnosticUncheckedUpdateWithoutDtcsInput>
  }

  export type DtcUpdateOneRequiredWithoutDiagnosticsNestedInput = {
    create?: XOR<DtcCreateWithoutDiagnosticsInput, DtcUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: DtcCreateOrConnectWithoutDiagnosticsInput
    upsert?: DtcUpsertWithoutDiagnosticsInput
    connect?: DtcWhereUniqueInput
    update?: XOR<XOR<DtcUpdateToOneWithWhereWithoutDiagnosticsInput, DtcUpdateWithoutDiagnosticsInput>, DtcUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type DiagnosticDtcSolutionUpdateManyWithoutDiagnosticDtcNestedInput = {
    create?: XOR<DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput, DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput> | DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput[] | DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput[]
    connectOrCreate?: DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput | DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput[]
    upsert?: DiagnosticDtcSolutionUpsertWithWhereUniqueWithoutDiagnosticDtcInput | DiagnosticDtcSolutionUpsertWithWhereUniqueWithoutDiagnosticDtcInput[]
    createMany?: DiagnosticDtcSolutionCreateManyDiagnosticDtcInputEnvelope
    set?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
    disconnect?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
    delete?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
    connect?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
    update?: DiagnosticDtcSolutionUpdateWithWhereUniqueWithoutDiagnosticDtcInput | DiagnosticDtcSolutionUpdateWithWhereUniqueWithoutDiagnosticDtcInput[]
    updateMany?: DiagnosticDtcSolutionUpdateManyWithWhereWithoutDiagnosticDtcInput | DiagnosticDtcSolutionUpdateManyWithWhereWithoutDiagnosticDtcInput[]
    deleteMany?: DiagnosticDtcSolutionScalarWhereInput | DiagnosticDtcSolutionScalarWhereInput[]
  }

  export type DiagnosticDtcSolutionUncheckedUpdateManyWithoutDiagnosticDtcNestedInput = {
    create?: XOR<DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput, DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput> | DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput[] | DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput[]
    connectOrCreate?: DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput | DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput[]
    upsert?: DiagnosticDtcSolutionUpsertWithWhereUniqueWithoutDiagnosticDtcInput | DiagnosticDtcSolutionUpsertWithWhereUniqueWithoutDiagnosticDtcInput[]
    createMany?: DiagnosticDtcSolutionCreateManyDiagnosticDtcInputEnvelope
    set?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
    disconnect?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
    delete?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
    connect?: DiagnosticDtcSolutionWhereUniqueInput | DiagnosticDtcSolutionWhereUniqueInput[]
    update?: DiagnosticDtcSolutionUpdateWithWhereUniqueWithoutDiagnosticDtcInput | DiagnosticDtcSolutionUpdateWithWhereUniqueWithoutDiagnosticDtcInput[]
    updateMany?: DiagnosticDtcSolutionUpdateManyWithWhereWithoutDiagnosticDtcInput | DiagnosticDtcSolutionUpdateManyWithWhereWithoutDiagnosticDtcInput[]
    deleteMany?: DiagnosticDtcSolutionScalarWhereInput | DiagnosticDtcSolutionScalarWhereInput[]
  }

  export type DiagnosticDtcCreateNestedOneWithoutDiagnosticDtcSolutionsInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDiagnosticDtcSolutionsInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticDtcSolutionsInput>
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDiagnosticDtcSolutionsInput
    connect?: DiagnosticDtcWhereUniqueInput
  }

  export type DiagnosticDtcUpdateOneRequiredWithoutDiagnosticDtcSolutionsNestedInput = {
    create?: XOR<DiagnosticDtcCreateWithoutDiagnosticDtcSolutionsInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticDtcSolutionsInput>
    connectOrCreate?: DiagnosticDtcCreateOrConnectWithoutDiagnosticDtcSolutionsInput
    upsert?: DiagnosticDtcUpsertWithoutDiagnosticDtcSolutionsInput
    connect?: DiagnosticDtcWhereUniqueInput
    update?: XOR<XOR<DiagnosticDtcUpdateToOneWithWhereWithoutDiagnosticDtcSolutionsInput, DiagnosticDtcUpdateWithoutDiagnosticDtcSolutionsInput>, DiagnosticDtcUncheckedUpdateWithoutDiagnosticDtcSolutionsInput>
  }

  export type DiagnosticCreateNestedOneWithoutSymptomsInput = {
    create?: XOR<DiagnosticCreateWithoutSymptomsInput, DiagnosticUncheckedCreateWithoutSymptomsInput>
    connectOrCreate?: DiagnosticCreateOrConnectWithoutSymptomsInput
    connect?: DiagnosticWhereUniqueInput
  }

  export type SymptomCreateNestedOneWithoutDiagnosticsInput = {
    create?: XOR<SymptomCreateWithoutDiagnosticsInput, SymptomUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: SymptomCreateOrConnectWithoutDiagnosticsInput
    connect?: SymptomWhereUniqueInput
  }

  export type DiagnosticUpdateOneRequiredWithoutSymptomsNestedInput = {
    create?: XOR<DiagnosticCreateWithoutSymptomsInput, DiagnosticUncheckedCreateWithoutSymptomsInput>
    connectOrCreate?: DiagnosticCreateOrConnectWithoutSymptomsInput
    upsert?: DiagnosticUpsertWithoutSymptomsInput
    connect?: DiagnosticWhereUniqueInput
    update?: XOR<XOR<DiagnosticUpdateToOneWithWhereWithoutSymptomsInput, DiagnosticUpdateWithoutSymptomsInput>, DiagnosticUncheckedUpdateWithoutSymptomsInput>
  }

  export type SymptomUpdateOneRequiredWithoutDiagnosticsNestedInput = {
    create?: XOR<SymptomCreateWithoutDiagnosticsInput, SymptomUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: SymptomCreateOrConnectWithoutDiagnosticsInput
    upsert?: SymptomUpsertWithoutDiagnosticsInput
    connect?: SymptomWhereUniqueInput
    update?: XOR<XOR<SymptomUpdateToOneWithWhereWithoutDiagnosticsInput, SymptomUpdateWithoutDiagnosticsInput>, SymptomUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type VehicleCreateNestedOneWithoutScannerFilesInput = {
    create?: XOR<VehicleCreateWithoutScannerFilesInput, VehicleUncheckedCreateWithoutScannerFilesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutScannerFilesInput
    connect?: VehicleWhereUniqueInput
  }

  export type DiagnosticCreateNestedManyWithoutScannerFileInput = {
    create?: XOR<DiagnosticCreateWithoutScannerFileInput, DiagnosticUncheckedCreateWithoutScannerFileInput> | DiagnosticCreateWithoutScannerFileInput[] | DiagnosticUncheckedCreateWithoutScannerFileInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutScannerFileInput | DiagnosticCreateOrConnectWithoutScannerFileInput[]
    createMany?: DiagnosticCreateManyScannerFileInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type DiagnosticUncheckedCreateNestedManyWithoutScannerFileInput = {
    create?: XOR<DiagnosticCreateWithoutScannerFileInput, DiagnosticUncheckedCreateWithoutScannerFileInput> | DiagnosticCreateWithoutScannerFileInput[] | DiagnosticUncheckedCreateWithoutScannerFileInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutScannerFileInput | DiagnosticCreateOrConnectWithoutScannerFileInput[]
    createMany?: DiagnosticCreateManyScannerFileInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type VehicleUpdateOneWithoutScannerFilesNestedInput = {
    create?: XOR<VehicleCreateWithoutScannerFilesInput, VehicleUncheckedCreateWithoutScannerFilesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutScannerFilesInput
    upsert?: VehicleUpsertWithoutScannerFilesInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutScannerFilesInput, VehicleUpdateWithoutScannerFilesInput>, VehicleUncheckedUpdateWithoutScannerFilesInput>
  }

  export type DiagnosticUpdateManyWithoutScannerFileNestedInput = {
    create?: XOR<DiagnosticCreateWithoutScannerFileInput, DiagnosticUncheckedCreateWithoutScannerFileInput> | DiagnosticCreateWithoutScannerFileInput[] | DiagnosticUncheckedCreateWithoutScannerFileInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutScannerFileInput | DiagnosticCreateOrConnectWithoutScannerFileInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutScannerFileInput | DiagnosticUpsertWithWhereUniqueWithoutScannerFileInput[]
    createMany?: DiagnosticCreateManyScannerFileInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutScannerFileInput | DiagnosticUpdateWithWhereUniqueWithoutScannerFileInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutScannerFileInput | DiagnosticUpdateManyWithWhereWithoutScannerFileInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type DiagnosticUncheckedUpdateManyWithoutScannerFileNestedInput = {
    create?: XOR<DiagnosticCreateWithoutScannerFileInput, DiagnosticUncheckedCreateWithoutScannerFileInput> | DiagnosticCreateWithoutScannerFileInput[] | DiagnosticUncheckedCreateWithoutScannerFileInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutScannerFileInput | DiagnosticCreateOrConnectWithoutScannerFileInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutScannerFileInput | DiagnosticUpsertWithWhereUniqueWithoutScannerFileInput[]
    createMany?: DiagnosticCreateManyScannerFileInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutScannerFileInput | DiagnosticUpdateWithWhereUniqueWithoutScannerFileInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutScannerFileInput | DiagnosticUpdateManyWithWhereWithoutScannerFileInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VehicleCreateWithoutUserInput = {
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    lastDiag?: Date | string | null
    diagnostics?: DiagnosticCreateNestedManyWithoutVehicleInput
    scannerFiles?: ScannerFileCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutUserInput = {
    id?: number
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    lastDiag?: Date | string | null
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutVehicleInput
    scannerFiles?: ScannerFileUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutUserInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleCreateManyUserInputEnvelope = {
    data: VehicleCreateManyUserInput | VehicleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUpdateManyWithWhereWithoutUserInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutUserInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    marca?: StringFilter<"Vehicle"> | string
    modelo?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    motor?: StringFilter<"Vehicle"> | string
    vin?: StringFilter<"Vehicle"> | string
    patente?: StringFilter<"Vehicle"> | string
    km?: IntFilter<"Vehicle"> | number
    fechaAdq?: DateTimeFilter<"Vehicle"> | Date | string
    userId?: IntFilter<"Vehicle"> | number
    lastDiag?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
  }

  export type UserCreateWithoutVehiclesInput = {
    name: string
    role: string
    email: string
    password: string
    active?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: number
    name: string
    role: string
    email: string
    password: string
    active?: boolean
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type DiagnosticCreateWithoutVehicleInput = {
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    cost: number
    duration: number
    scannerFile?: ScannerFileCreateNestedOneWithoutDiagnosticsInput
    dtcs?: DiagnosticDtcCreateNestedManyWithoutDiagnosticInput
    symptoms?: DiagnosticSymptomCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutVehicleInput = {
    id?: number
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    scannerFileId?: number | null
    cost: number
    duration: number
    dtcs?: DiagnosticDtcUncheckedCreateNestedManyWithoutDiagnosticInput
    symptoms?: DiagnosticSymptomUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticCreateOrConnectWithoutVehicleInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutVehicleInput, DiagnosticUncheckedCreateWithoutVehicleInput>
  }

  export type DiagnosticCreateManyVehicleInputEnvelope = {
    data: DiagnosticCreateManyVehicleInput | DiagnosticCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ScannerFileCreateWithoutVehicleInput = {
    fileName: string
    uploadDate: Date | string
    scannerType: string
    status: string
    rawData: JsonNullValueInput | InputJsonValue
    diagnostics?: DiagnosticCreateNestedManyWithoutScannerFileInput
  }

  export type ScannerFileUncheckedCreateWithoutVehicleInput = {
    id?: number
    fileName: string
    uploadDate: Date | string
    scannerType: string
    status: string
    rawData: JsonNullValueInput | InputJsonValue
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutScannerFileInput
  }

  export type ScannerFileCreateOrConnectWithoutVehicleInput = {
    where: ScannerFileWhereUniqueInput
    create: XOR<ScannerFileCreateWithoutVehicleInput, ScannerFileUncheckedCreateWithoutVehicleInput>
  }

  export type ScannerFileCreateManyVehicleInputEnvelope = {
    data: ScannerFileCreateManyVehicleInput | ScannerFileCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUpsertWithWhereUniqueWithoutVehicleInput = {
    where: DiagnosticWhereUniqueInput
    update: XOR<DiagnosticUpdateWithoutVehicleInput, DiagnosticUncheckedUpdateWithoutVehicleInput>
    create: XOR<DiagnosticCreateWithoutVehicleInput, DiagnosticUncheckedCreateWithoutVehicleInput>
  }

  export type DiagnosticUpdateWithWhereUniqueWithoutVehicleInput = {
    where: DiagnosticWhereUniqueInput
    data: XOR<DiagnosticUpdateWithoutVehicleInput, DiagnosticUncheckedUpdateWithoutVehicleInput>
  }

  export type DiagnosticUpdateManyWithWhereWithoutVehicleInput = {
    where: DiagnosticScalarWhereInput
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyWithoutVehicleInput>
  }

  export type DiagnosticScalarWhereInput = {
    AND?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
    OR?: DiagnosticScalarWhereInput[]
    NOT?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
    id?: IntFilter<"Diagnostic"> | number
    vehicleId?: IntFilter<"Diagnostic"> | number
    fecha?: DateTimeFilter<"Diagnostic"> | Date | string
    desc?: StringFilter<"Diagnostic"> | string
    tecnico?: StringFilter<"Diagnostic"> | string
    estado?: StringFilter<"Diagnostic"> | string
    detalles?: StringFilter<"Diagnostic"> | string
    scannerFileId?: IntNullableFilter<"Diagnostic"> | number | null
    cost?: IntFilter<"Diagnostic"> | number
    duration?: FloatFilter<"Diagnostic"> | number
  }

  export type ScannerFileUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ScannerFileWhereUniqueInput
    update: XOR<ScannerFileUpdateWithoutVehicleInput, ScannerFileUncheckedUpdateWithoutVehicleInput>
    create: XOR<ScannerFileCreateWithoutVehicleInput, ScannerFileUncheckedCreateWithoutVehicleInput>
  }

  export type ScannerFileUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ScannerFileWhereUniqueInput
    data: XOR<ScannerFileUpdateWithoutVehicleInput, ScannerFileUncheckedUpdateWithoutVehicleInput>
  }

  export type ScannerFileUpdateManyWithWhereWithoutVehicleInput = {
    where: ScannerFileScalarWhereInput
    data: XOR<ScannerFileUpdateManyMutationInput, ScannerFileUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ScannerFileScalarWhereInput = {
    AND?: ScannerFileScalarWhereInput | ScannerFileScalarWhereInput[]
    OR?: ScannerFileScalarWhereInput[]
    NOT?: ScannerFileScalarWhereInput | ScannerFileScalarWhereInput[]
    id?: IntFilter<"ScannerFile"> | number
    fileName?: StringFilter<"ScannerFile"> | string
    uploadDate?: DateTimeFilter<"ScannerFile"> | Date | string
    vehicleVin?: StringFilter<"ScannerFile"> | string
    scannerType?: StringFilter<"ScannerFile"> | string
    status?: StringFilter<"ScannerFile"> | string
    rawData?: JsonFilter<"ScannerFile">
  }

  export type DtcCauseCreateWithoutDtcInput = {
    text: string
  }

  export type DtcCauseUncheckedCreateWithoutDtcInput = {
    id?: number
    text: string
  }

  export type DtcCauseCreateOrConnectWithoutDtcInput = {
    where: DtcCauseWhereUniqueInput
    create: XOR<DtcCauseCreateWithoutDtcInput, DtcCauseUncheckedCreateWithoutDtcInput>
  }

  export type DtcCauseCreateManyDtcInputEnvelope = {
    data: DtcCauseCreateManyDtcInput | DtcCauseCreateManyDtcInput[]
    skipDuplicates?: boolean
  }

  export type DtcSolutionCreateWithoutDtcInput = {
    text: string
  }

  export type DtcSolutionUncheckedCreateWithoutDtcInput = {
    id?: number
    text: string
  }

  export type DtcSolutionCreateOrConnectWithoutDtcInput = {
    where: DtcSolutionWhereUniqueInput
    create: XOR<DtcSolutionCreateWithoutDtcInput, DtcSolutionUncheckedCreateWithoutDtcInput>
  }

  export type DtcSolutionCreateManyDtcInputEnvelope = {
    data: DtcSolutionCreateManyDtcInput | DtcSolutionCreateManyDtcInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticDtcCreateWithoutDtcInput = {
    diagnostic: DiagnosticCreateNestedOneWithoutDtcsInput
    diagnosticDtcSolutions?: DiagnosticDtcSolutionCreateNestedManyWithoutDiagnosticDtcInput
  }

  export type DiagnosticDtcUncheckedCreateWithoutDtcInput = {
    diagnosticId: number
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUncheckedCreateNestedManyWithoutDiagnosticDtcInput
  }

  export type DiagnosticDtcCreateOrConnectWithoutDtcInput = {
    where: DiagnosticDtcWhereUniqueInput
    create: XOR<DiagnosticDtcCreateWithoutDtcInput, DiagnosticDtcUncheckedCreateWithoutDtcInput>
  }

  export type DiagnosticDtcCreateManyDtcInputEnvelope = {
    data: DiagnosticDtcCreateManyDtcInput | DiagnosticDtcCreateManyDtcInput[]
    skipDuplicates?: boolean
  }

  export type DtcCauseUpsertWithWhereUniqueWithoutDtcInput = {
    where: DtcCauseWhereUniqueInput
    update: XOR<DtcCauseUpdateWithoutDtcInput, DtcCauseUncheckedUpdateWithoutDtcInput>
    create: XOR<DtcCauseCreateWithoutDtcInput, DtcCauseUncheckedCreateWithoutDtcInput>
  }

  export type DtcCauseUpdateWithWhereUniqueWithoutDtcInput = {
    where: DtcCauseWhereUniqueInput
    data: XOR<DtcCauseUpdateWithoutDtcInput, DtcCauseUncheckedUpdateWithoutDtcInput>
  }

  export type DtcCauseUpdateManyWithWhereWithoutDtcInput = {
    where: DtcCauseScalarWhereInput
    data: XOR<DtcCauseUpdateManyMutationInput, DtcCauseUncheckedUpdateManyWithoutDtcInput>
  }

  export type DtcCauseScalarWhereInput = {
    AND?: DtcCauseScalarWhereInput | DtcCauseScalarWhereInput[]
    OR?: DtcCauseScalarWhereInput[]
    NOT?: DtcCauseScalarWhereInput | DtcCauseScalarWhereInput[]
    id?: IntFilter<"DtcCause"> | number
    text?: StringFilter<"DtcCause"> | string
    dtcCode?: StringFilter<"DtcCause"> | string
  }

  export type DtcSolutionUpsertWithWhereUniqueWithoutDtcInput = {
    where: DtcSolutionWhereUniqueInput
    update: XOR<DtcSolutionUpdateWithoutDtcInput, DtcSolutionUncheckedUpdateWithoutDtcInput>
    create: XOR<DtcSolutionCreateWithoutDtcInput, DtcSolutionUncheckedCreateWithoutDtcInput>
  }

  export type DtcSolutionUpdateWithWhereUniqueWithoutDtcInput = {
    where: DtcSolutionWhereUniqueInput
    data: XOR<DtcSolutionUpdateWithoutDtcInput, DtcSolutionUncheckedUpdateWithoutDtcInput>
  }

  export type DtcSolutionUpdateManyWithWhereWithoutDtcInput = {
    where: DtcSolutionScalarWhereInput
    data: XOR<DtcSolutionUpdateManyMutationInput, DtcSolutionUncheckedUpdateManyWithoutDtcInput>
  }

  export type DtcSolutionScalarWhereInput = {
    AND?: DtcSolutionScalarWhereInput | DtcSolutionScalarWhereInput[]
    OR?: DtcSolutionScalarWhereInput[]
    NOT?: DtcSolutionScalarWhereInput | DtcSolutionScalarWhereInput[]
    id?: IntFilter<"DtcSolution"> | number
    text?: StringFilter<"DtcSolution"> | string
    dtcCode?: StringFilter<"DtcSolution"> | string
  }

  export type DiagnosticDtcUpsertWithWhereUniqueWithoutDtcInput = {
    where: DiagnosticDtcWhereUniqueInput
    update: XOR<DiagnosticDtcUpdateWithoutDtcInput, DiagnosticDtcUncheckedUpdateWithoutDtcInput>
    create: XOR<DiagnosticDtcCreateWithoutDtcInput, DiagnosticDtcUncheckedCreateWithoutDtcInput>
  }

  export type DiagnosticDtcUpdateWithWhereUniqueWithoutDtcInput = {
    where: DiagnosticDtcWhereUniqueInput
    data: XOR<DiagnosticDtcUpdateWithoutDtcInput, DiagnosticDtcUncheckedUpdateWithoutDtcInput>
  }

  export type DiagnosticDtcUpdateManyWithWhereWithoutDtcInput = {
    where: DiagnosticDtcScalarWhereInput
    data: XOR<DiagnosticDtcUpdateManyMutationInput, DiagnosticDtcUncheckedUpdateManyWithoutDtcInput>
  }

  export type DiagnosticDtcScalarWhereInput = {
    AND?: DiagnosticDtcScalarWhereInput | DiagnosticDtcScalarWhereInput[]
    OR?: DiagnosticDtcScalarWhereInput[]
    NOT?: DiagnosticDtcScalarWhereInput | DiagnosticDtcScalarWhereInput[]
    diagnosticId?: IntFilter<"DiagnosticDtc"> | number
    dtcCode?: StringFilter<"DiagnosticDtc"> | string
  }

  export type DtcCreateWithoutCausesInput = {
    code: string
    description: string
    category: string
    severity: string
    solutions?: DtcSolutionCreateNestedManyWithoutDtcInput
    diagnostics?: DiagnosticDtcCreateNestedManyWithoutDtcInput
  }

  export type DtcUncheckedCreateWithoutCausesInput = {
    code: string
    description: string
    category: string
    severity: string
    solutions?: DtcSolutionUncheckedCreateNestedManyWithoutDtcInput
    diagnostics?: DiagnosticDtcUncheckedCreateNestedManyWithoutDtcInput
  }

  export type DtcCreateOrConnectWithoutCausesInput = {
    where: DtcWhereUniqueInput
    create: XOR<DtcCreateWithoutCausesInput, DtcUncheckedCreateWithoutCausesInput>
  }

  export type DtcUpsertWithoutCausesInput = {
    update: XOR<DtcUpdateWithoutCausesInput, DtcUncheckedUpdateWithoutCausesInput>
    create: XOR<DtcCreateWithoutCausesInput, DtcUncheckedCreateWithoutCausesInput>
    where?: DtcWhereInput
  }

  export type DtcUpdateToOneWithWhereWithoutCausesInput = {
    where?: DtcWhereInput
    data: XOR<DtcUpdateWithoutCausesInput, DtcUncheckedUpdateWithoutCausesInput>
  }

  export type DtcUpdateWithoutCausesInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    solutions?: DtcSolutionUpdateManyWithoutDtcNestedInput
    diagnostics?: DiagnosticDtcUpdateManyWithoutDtcNestedInput
  }

  export type DtcUncheckedUpdateWithoutCausesInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    solutions?: DtcSolutionUncheckedUpdateManyWithoutDtcNestedInput
    diagnostics?: DiagnosticDtcUncheckedUpdateManyWithoutDtcNestedInput
  }

  export type DtcCreateWithoutSolutionsInput = {
    code: string
    description: string
    category: string
    severity: string
    causes?: DtcCauseCreateNestedManyWithoutDtcInput
    diagnostics?: DiagnosticDtcCreateNestedManyWithoutDtcInput
  }

  export type DtcUncheckedCreateWithoutSolutionsInput = {
    code: string
    description: string
    category: string
    severity: string
    causes?: DtcCauseUncheckedCreateNestedManyWithoutDtcInput
    diagnostics?: DiagnosticDtcUncheckedCreateNestedManyWithoutDtcInput
  }

  export type DtcCreateOrConnectWithoutSolutionsInput = {
    where: DtcWhereUniqueInput
    create: XOR<DtcCreateWithoutSolutionsInput, DtcUncheckedCreateWithoutSolutionsInput>
  }

  export type DtcUpsertWithoutSolutionsInput = {
    update: XOR<DtcUpdateWithoutSolutionsInput, DtcUncheckedUpdateWithoutSolutionsInput>
    create: XOR<DtcCreateWithoutSolutionsInput, DtcUncheckedCreateWithoutSolutionsInput>
    where?: DtcWhereInput
  }

  export type DtcUpdateToOneWithWhereWithoutSolutionsInput = {
    where?: DtcWhereInput
    data: XOR<DtcUpdateWithoutSolutionsInput, DtcUncheckedUpdateWithoutSolutionsInput>
  }

  export type DtcUpdateWithoutSolutionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    causes?: DtcCauseUpdateManyWithoutDtcNestedInput
    diagnostics?: DiagnosticDtcUpdateManyWithoutDtcNestedInput
  }

  export type DtcUncheckedUpdateWithoutSolutionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    causes?: DtcCauseUncheckedUpdateManyWithoutDtcNestedInput
    diagnostics?: DiagnosticDtcUncheckedUpdateManyWithoutDtcNestedInput
  }

  export type DiagnosticSymptomCreateWithoutSymptomInput = {
    diagnostic: DiagnosticCreateNestedOneWithoutSymptomsInput
  }

  export type DiagnosticSymptomUncheckedCreateWithoutSymptomInput = {
    diagnosticId: number
  }

  export type DiagnosticSymptomCreateOrConnectWithoutSymptomInput = {
    where: DiagnosticSymptomWhereUniqueInput
    create: XOR<DiagnosticSymptomCreateWithoutSymptomInput, DiagnosticSymptomUncheckedCreateWithoutSymptomInput>
  }

  export type DiagnosticSymptomCreateManySymptomInputEnvelope = {
    data: DiagnosticSymptomCreateManySymptomInput | DiagnosticSymptomCreateManySymptomInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticSymptomUpsertWithWhereUniqueWithoutSymptomInput = {
    where: DiagnosticSymptomWhereUniqueInput
    update: XOR<DiagnosticSymptomUpdateWithoutSymptomInput, DiagnosticSymptomUncheckedUpdateWithoutSymptomInput>
    create: XOR<DiagnosticSymptomCreateWithoutSymptomInput, DiagnosticSymptomUncheckedCreateWithoutSymptomInput>
  }

  export type DiagnosticSymptomUpdateWithWhereUniqueWithoutSymptomInput = {
    where: DiagnosticSymptomWhereUniqueInput
    data: XOR<DiagnosticSymptomUpdateWithoutSymptomInput, DiagnosticSymptomUncheckedUpdateWithoutSymptomInput>
  }

  export type DiagnosticSymptomUpdateManyWithWhereWithoutSymptomInput = {
    where: DiagnosticSymptomScalarWhereInput
    data: XOR<DiagnosticSymptomUpdateManyMutationInput, DiagnosticSymptomUncheckedUpdateManyWithoutSymptomInput>
  }

  export type DiagnosticSymptomScalarWhereInput = {
    AND?: DiagnosticSymptomScalarWhereInput | DiagnosticSymptomScalarWhereInput[]
    OR?: DiagnosticSymptomScalarWhereInput[]
    NOT?: DiagnosticSymptomScalarWhereInput | DiagnosticSymptomScalarWhereInput[]
    diagnosticId?: IntFilter<"DiagnosticSymptom"> | number
    symptomId?: IntFilter<"DiagnosticSymptom"> | number
  }

  export type VehicleCreateWithoutDiagnosticsInput = {
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    lastDiag?: Date | string | null
    user: UserCreateNestedOneWithoutVehiclesInput
    scannerFiles?: ScannerFileCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDiagnosticsInput = {
    id?: number
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    userId: number
    lastDiag?: Date | string | null
    scannerFiles?: ScannerFileUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutDiagnosticsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDiagnosticsInput, VehicleUncheckedCreateWithoutDiagnosticsInput>
  }

  export type ScannerFileCreateWithoutDiagnosticsInput = {
    fileName: string
    uploadDate: Date | string
    scannerType: string
    status: string
    rawData: JsonNullValueInput | InputJsonValue
    vehicle?: VehicleCreateNestedOneWithoutScannerFilesInput
  }

  export type ScannerFileUncheckedCreateWithoutDiagnosticsInput = {
    id?: number
    fileName: string
    uploadDate: Date | string
    vehicleVin: string
    scannerType: string
    status: string
    rawData: JsonNullValueInput | InputJsonValue
  }

  export type ScannerFileCreateOrConnectWithoutDiagnosticsInput = {
    where: ScannerFileWhereUniqueInput
    create: XOR<ScannerFileCreateWithoutDiagnosticsInput, ScannerFileUncheckedCreateWithoutDiagnosticsInput>
  }

  export type DiagnosticDtcCreateWithoutDiagnosticInput = {
    dtc: DtcCreateNestedOneWithoutDiagnosticsInput
    diagnosticDtcSolutions?: DiagnosticDtcSolutionCreateNestedManyWithoutDiagnosticDtcInput
  }

  export type DiagnosticDtcUncheckedCreateWithoutDiagnosticInput = {
    dtcCode: string
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUncheckedCreateNestedManyWithoutDiagnosticDtcInput
  }

  export type DiagnosticDtcCreateOrConnectWithoutDiagnosticInput = {
    where: DiagnosticDtcWhereUniqueInput
    create: XOR<DiagnosticDtcCreateWithoutDiagnosticInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticInput>
  }

  export type DiagnosticDtcCreateManyDiagnosticInputEnvelope = {
    data: DiagnosticDtcCreateManyDiagnosticInput | DiagnosticDtcCreateManyDiagnosticInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticSymptomCreateWithoutDiagnosticInput = {
    symptom: SymptomCreateNestedOneWithoutDiagnosticsInput
  }

  export type DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput = {
    symptomId: number
  }

  export type DiagnosticSymptomCreateOrConnectWithoutDiagnosticInput = {
    where: DiagnosticSymptomWhereUniqueInput
    create: XOR<DiagnosticSymptomCreateWithoutDiagnosticInput, DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput>
  }

  export type DiagnosticSymptomCreateManyDiagnosticInputEnvelope = {
    data: DiagnosticSymptomCreateManyDiagnosticInput | DiagnosticSymptomCreateManyDiagnosticInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutDiagnosticsInput = {
    update: XOR<VehicleUpdateWithoutDiagnosticsInput, VehicleUncheckedUpdateWithoutDiagnosticsInput>
    create: XOR<VehicleCreateWithoutDiagnosticsInput, VehicleUncheckedCreateWithoutDiagnosticsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDiagnosticsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDiagnosticsInput, VehicleUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type VehicleUpdateWithoutDiagnosticsInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    scannerFiles?: ScannerFileUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDiagnosticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scannerFiles?: ScannerFileUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type ScannerFileUpsertWithoutDiagnosticsInput = {
    update: XOR<ScannerFileUpdateWithoutDiagnosticsInput, ScannerFileUncheckedUpdateWithoutDiagnosticsInput>
    create: XOR<ScannerFileCreateWithoutDiagnosticsInput, ScannerFileUncheckedCreateWithoutDiagnosticsInput>
    where?: ScannerFileWhereInput
  }

  export type ScannerFileUpdateToOneWithWhereWithoutDiagnosticsInput = {
    where?: ScannerFileWhereInput
    data: XOR<ScannerFileUpdateWithoutDiagnosticsInput, ScannerFileUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type ScannerFileUpdateWithoutDiagnosticsInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    vehicle?: VehicleUpdateOneWithoutScannerFilesNestedInput
  }

  export type ScannerFileUncheckedUpdateWithoutDiagnosticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleVin?: StringFieldUpdateOperationsInput | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
  }

  export type DiagnosticDtcUpsertWithWhereUniqueWithoutDiagnosticInput = {
    where: DiagnosticDtcWhereUniqueInput
    update: XOR<DiagnosticDtcUpdateWithoutDiagnosticInput, DiagnosticDtcUncheckedUpdateWithoutDiagnosticInput>
    create: XOR<DiagnosticDtcCreateWithoutDiagnosticInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticInput>
  }

  export type DiagnosticDtcUpdateWithWhereUniqueWithoutDiagnosticInput = {
    where: DiagnosticDtcWhereUniqueInput
    data: XOR<DiagnosticDtcUpdateWithoutDiagnosticInput, DiagnosticDtcUncheckedUpdateWithoutDiagnosticInput>
  }

  export type DiagnosticDtcUpdateManyWithWhereWithoutDiagnosticInput = {
    where: DiagnosticDtcScalarWhereInput
    data: XOR<DiagnosticDtcUpdateManyMutationInput, DiagnosticDtcUncheckedUpdateManyWithoutDiagnosticInput>
  }

  export type DiagnosticSymptomUpsertWithWhereUniqueWithoutDiagnosticInput = {
    where: DiagnosticSymptomWhereUniqueInput
    update: XOR<DiagnosticSymptomUpdateWithoutDiagnosticInput, DiagnosticSymptomUncheckedUpdateWithoutDiagnosticInput>
    create: XOR<DiagnosticSymptomCreateWithoutDiagnosticInput, DiagnosticSymptomUncheckedCreateWithoutDiagnosticInput>
  }

  export type DiagnosticSymptomUpdateWithWhereUniqueWithoutDiagnosticInput = {
    where: DiagnosticSymptomWhereUniqueInput
    data: XOR<DiagnosticSymptomUpdateWithoutDiagnosticInput, DiagnosticSymptomUncheckedUpdateWithoutDiagnosticInput>
  }

  export type DiagnosticSymptomUpdateManyWithWhereWithoutDiagnosticInput = {
    where: DiagnosticSymptomScalarWhereInput
    data: XOR<DiagnosticSymptomUpdateManyMutationInput, DiagnosticSymptomUncheckedUpdateManyWithoutDiagnosticInput>
  }

  export type DiagnosticCreateWithoutDtcsInput = {
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    cost: number
    duration: number
    vehicle: VehicleCreateNestedOneWithoutDiagnosticsInput
    scannerFile?: ScannerFileCreateNestedOneWithoutDiagnosticsInput
    symptoms?: DiagnosticSymptomCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutDtcsInput = {
    id?: number
    vehicleId: number
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    scannerFileId?: number | null
    cost: number
    duration: number
    symptoms?: DiagnosticSymptomUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticCreateOrConnectWithoutDtcsInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutDtcsInput, DiagnosticUncheckedCreateWithoutDtcsInput>
  }

  export type DtcCreateWithoutDiagnosticsInput = {
    code: string
    description: string
    category: string
    severity: string
    causes?: DtcCauseCreateNestedManyWithoutDtcInput
    solutions?: DtcSolutionCreateNestedManyWithoutDtcInput
  }

  export type DtcUncheckedCreateWithoutDiagnosticsInput = {
    code: string
    description: string
    category: string
    severity: string
    causes?: DtcCauseUncheckedCreateNestedManyWithoutDtcInput
    solutions?: DtcSolutionUncheckedCreateNestedManyWithoutDtcInput
  }

  export type DtcCreateOrConnectWithoutDiagnosticsInput = {
    where: DtcWhereUniqueInput
    create: XOR<DtcCreateWithoutDiagnosticsInput, DtcUncheckedCreateWithoutDiagnosticsInput>
  }

  export type DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput = {
    text: string
  }

  export type DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput = {
    id?: number
    text: string
  }

  export type DiagnosticDtcSolutionCreateOrConnectWithoutDiagnosticDtcInput = {
    where: DiagnosticDtcSolutionWhereUniqueInput
    create: XOR<DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput, DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput>
  }

  export type DiagnosticDtcSolutionCreateManyDiagnosticDtcInputEnvelope = {
    data: DiagnosticDtcSolutionCreateManyDiagnosticDtcInput | DiagnosticDtcSolutionCreateManyDiagnosticDtcInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticUpsertWithoutDtcsInput = {
    update: XOR<DiagnosticUpdateWithoutDtcsInput, DiagnosticUncheckedUpdateWithoutDtcsInput>
    create: XOR<DiagnosticCreateWithoutDtcsInput, DiagnosticUncheckedCreateWithoutDtcsInput>
    where?: DiagnosticWhereInput
  }

  export type DiagnosticUpdateToOneWithWhereWithoutDtcsInput = {
    where?: DiagnosticWhereInput
    data: XOR<DiagnosticUpdateWithoutDtcsInput, DiagnosticUncheckedUpdateWithoutDtcsInput>
  }

  export type DiagnosticUpdateWithoutDtcsInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutDiagnosticsNestedInput
    scannerFile?: ScannerFileUpdateOneWithoutDiagnosticsNestedInput
    symptoms?: DiagnosticSymptomUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutDtcsInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    scannerFileId?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    symptoms?: DiagnosticSymptomUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DtcUpsertWithoutDiagnosticsInput = {
    update: XOR<DtcUpdateWithoutDiagnosticsInput, DtcUncheckedUpdateWithoutDiagnosticsInput>
    create: XOR<DtcCreateWithoutDiagnosticsInput, DtcUncheckedCreateWithoutDiagnosticsInput>
    where?: DtcWhereInput
  }

  export type DtcUpdateToOneWithWhereWithoutDiagnosticsInput = {
    where?: DtcWhereInput
    data: XOR<DtcUpdateWithoutDiagnosticsInput, DtcUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type DtcUpdateWithoutDiagnosticsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    causes?: DtcCauseUpdateManyWithoutDtcNestedInput
    solutions?: DtcSolutionUpdateManyWithoutDtcNestedInput
  }

  export type DtcUncheckedUpdateWithoutDiagnosticsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    causes?: DtcCauseUncheckedUpdateManyWithoutDtcNestedInput
    solutions?: DtcSolutionUncheckedUpdateManyWithoutDtcNestedInput
  }

  export type DiagnosticDtcSolutionUpsertWithWhereUniqueWithoutDiagnosticDtcInput = {
    where: DiagnosticDtcSolutionWhereUniqueInput
    update: XOR<DiagnosticDtcSolutionUpdateWithoutDiagnosticDtcInput, DiagnosticDtcSolutionUncheckedUpdateWithoutDiagnosticDtcInput>
    create: XOR<DiagnosticDtcSolutionCreateWithoutDiagnosticDtcInput, DiagnosticDtcSolutionUncheckedCreateWithoutDiagnosticDtcInput>
  }

  export type DiagnosticDtcSolutionUpdateWithWhereUniqueWithoutDiagnosticDtcInput = {
    where: DiagnosticDtcSolutionWhereUniqueInput
    data: XOR<DiagnosticDtcSolutionUpdateWithoutDiagnosticDtcInput, DiagnosticDtcSolutionUncheckedUpdateWithoutDiagnosticDtcInput>
  }

  export type DiagnosticDtcSolutionUpdateManyWithWhereWithoutDiagnosticDtcInput = {
    where: DiagnosticDtcSolutionScalarWhereInput
    data: XOR<DiagnosticDtcSolutionUpdateManyMutationInput, DiagnosticDtcSolutionUncheckedUpdateManyWithoutDiagnosticDtcInput>
  }

  export type DiagnosticDtcSolutionScalarWhereInput = {
    AND?: DiagnosticDtcSolutionScalarWhereInput | DiagnosticDtcSolutionScalarWhereInput[]
    OR?: DiagnosticDtcSolutionScalarWhereInput[]
    NOT?: DiagnosticDtcSolutionScalarWhereInput | DiagnosticDtcSolutionScalarWhereInput[]
    id?: IntFilter<"DiagnosticDtcSolution"> | number
    text?: StringFilter<"DiagnosticDtcSolution"> | string
    diagnosticId?: IntFilter<"DiagnosticDtcSolution"> | number
    dtcCode?: StringFilter<"DiagnosticDtcSolution"> | string
  }

  export type DiagnosticDtcCreateWithoutDiagnosticDtcSolutionsInput = {
    diagnostic: DiagnosticCreateNestedOneWithoutDtcsInput
    dtc: DtcCreateNestedOneWithoutDiagnosticsInput
  }

  export type DiagnosticDtcUncheckedCreateWithoutDiagnosticDtcSolutionsInput = {
    diagnosticId: number
    dtcCode: string
  }

  export type DiagnosticDtcCreateOrConnectWithoutDiagnosticDtcSolutionsInput = {
    where: DiagnosticDtcWhereUniqueInput
    create: XOR<DiagnosticDtcCreateWithoutDiagnosticDtcSolutionsInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticDtcSolutionsInput>
  }

  export type DiagnosticDtcUpsertWithoutDiagnosticDtcSolutionsInput = {
    update: XOR<DiagnosticDtcUpdateWithoutDiagnosticDtcSolutionsInput, DiagnosticDtcUncheckedUpdateWithoutDiagnosticDtcSolutionsInput>
    create: XOR<DiagnosticDtcCreateWithoutDiagnosticDtcSolutionsInput, DiagnosticDtcUncheckedCreateWithoutDiagnosticDtcSolutionsInput>
    where?: DiagnosticDtcWhereInput
  }

  export type DiagnosticDtcUpdateToOneWithWhereWithoutDiagnosticDtcSolutionsInput = {
    where?: DiagnosticDtcWhereInput
    data: XOR<DiagnosticDtcUpdateWithoutDiagnosticDtcSolutionsInput, DiagnosticDtcUncheckedUpdateWithoutDiagnosticDtcSolutionsInput>
  }

  export type DiagnosticDtcUpdateWithoutDiagnosticDtcSolutionsInput = {
    diagnostic?: DiagnosticUpdateOneRequiredWithoutDtcsNestedInput
    dtc?: DtcUpdateOneRequiredWithoutDiagnosticsNestedInput
  }

  export type DiagnosticDtcUncheckedUpdateWithoutDiagnosticDtcSolutionsInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticCreateWithoutSymptomsInput = {
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    cost: number
    duration: number
    vehicle: VehicleCreateNestedOneWithoutDiagnosticsInput
    scannerFile?: ScannerFileCreateNestedOneWithoutDiagnosticsInput
    dtcs?: DiagnosticDtcCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutSymptomsInput = {
    id?: number
    vehicleId: number
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    scannerFileId?: number | null
    cost: number
    duration: number
    dtcs?: DiagnosticDtcUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticCreateOrConnectWithoutSymptomsInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutSymptomsInput, DiagnosticUncheckedCreateWithoutSymptomsInput>
  }

  export type SymptomCreateWithoutDiagnosticsInput = {
    category: string
    name: string
    description: string
  }

  export type SymptomUncheckedCreateWithoutDiagnosticsInput = {
    id?: number
    category: string
    name: string
    description: string
  }

  export type SymptomCreateOrConnectWithoutDiagnosticsInput = {
    where: SymptomWhereUniqueInput
    create: XOR<SymptomCreateWithoutDiagnosticsInput, SymptomUncheckedCreateWithoutDiagnosticsInput>
  }

  export type DiagnosticUpsertWithoutSymptomsInput = {
    update: XOR<DiagnosticUpdateWithoutSymptomsInput, DiagnosticUncheckedUpdateWithoutSymptomsInput>
    create: XOR<DiagnosticCreateWithoutSymptomsInput, DiagnosticUncheckedCreateWithoutSymptomsInput>
    where?: DiagnosticWhereInput
  }

  export type DiagnosticUpdateToOneWithWhereWithoutSymptomsInput = {
    where?: DiagnosticWhereInput
    data: XOR<DiagnosticUpdateWithoutSymptomsInput, DiagnosticUncheckedUpdateWithoutSymptomsInput>
  }

  export type DiagnosticUpdateWithoutSymptomsInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutDiagnosticsNestedInput
    scannerFile?: ScannerFileUpdateOneWithoutDiagnosticsNestedInput
    dtcs?: DiagnosticDtcUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutSymptomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    scannerFileId?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    dtcs?: DiagnosticDtcUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type SymptomUpsertWithoutDiagnosticsInput = {
    update: XOR<SymptomUpdateWithoutDiagnosticsInput, SymptomUncheckedUpdateWithoutDiagnosticsInput>
    create: XOR<SymptomCreateWithoutDiagnosticsInput, SymptomUncheckedCreateWithoutDiagnosticsInput>
    where?: SymptomWhereInput
  }

  export type SymptomUpdateToOneWithWhereWithoutDiagnosticsInput = {
    where?: SymptomWhereInput
    data: XOR<SymptomUpdateWithoutDiagnosticsInput, SymptomUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type SymptomUpdateWithoutDiagnosticsInput = {
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SymptomUncheckedUpdateWithoutDiagnosticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateWithoutScannerFilesInput = {
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    lastDiag?: Date | string | null
    user: UserCreateNestedOneWithoutVehiclesInput
    diagnostics?: DiagnosticCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutScannerFilesInput = {
    id?: number
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    userId: number
    lastDiag?: Date | string | null
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutScannerFilesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutScannerFilesInput, VehicleUncheckedCreateWithoutScannerFilesInput>
  }

  export type DiagnosticCreateWithoutScannerFileInput = {
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    cost: number
    duration: number
    vehicle: VehicleCreateNestedOneWithoutDiagnosticsInput
    dtcs?: DiagnosticDtcCreateNestedManyWithoutDiagnosticInput
    symptoms?: DiagnosticSymptomCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticUncheckedCreateWithoutScannerFileInput = {
    id?: number
    vehicleId: number
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    cost: number
    duration: number
    dtcs?: DiagnosticDtcUncheckedCreateNestedManyWithoutDiagnosticInput
    symptoms?: DiagnosticSymptomUncheckedCreateNestedManyWithoutDiagnosticInput
  }

  export type DiagnosticCreateOrConnectWithoutScannerFileInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutScannerFileInput, DiagnosticUncheckedCreateWithoutScannerFileInput>
  }

  export type DiagnosticCreateManyScannerFileInputEnvelope = {
    data: DiagnosticCreateManyScannerFileInput | DiagnosticCreateManyScannerFileInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutScannerFilesInput = {
    update: XOR<VehicleUpdateWithoutScannerFilesInput, VehicleUncheckedUpdateWithoutScannerFilesInput>
    create: XOR<VehicleCreateWithoutScannerFilesInput, VehicleUncheckedCreateWithoutScannerFilesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutScannerFilesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutScannerFilesInput, VehicleUncheckedUpdateWithoutScannerFilesInput>
  }

  export type VehicleUpdateWithoutScannerFilesInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutScannerFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DiagnosticUpsertWithWhereUniqueWithoutScannerFileInput = {
    where: DiagnosticWhereUniqueInput
    update: XOR<DiagnosticUpdateWithoutScannerFileInput, DiagnosticUncheckedUpdateWithoutScannerFileInput>
    create: XOR<DiagnosticCreateWithoutScannerFileInput, DiagnosticUncheckedCreateWithoutScannerFileInput>
  }

  export type DiagnosticUpdateWithWhereUniqueWithoutScannerFileInput = {
    where: DiagnosticWhereUniqueInput
    data: XOR<DiagnosticUpdateWithoutScannerFileInput, DiagnosticUncheckedUpdateWithoutScannerFileInput>
  }

  export type DiagnosticUpdateManyWithWhereWithoutScannerFileInput = {
    where: DiagnosticScalarWhereInput
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyWithoutScannerFileInput>
  }

  export type VehicleCreateManyUserInput = {
    id?: number
    marca: string
    modelo: string
    year: number
    motor: string
    vin: string
    patente: string
    km: number
    fechaAdq: Date | string
    lastDiag?: Date | string | null
  }

  export type VehicleUpdateWithoutUserInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diagnostics?: DiagnosticUpdateManyWithoutVehicleNestedInput
    scannerFiles?: ScannerFileUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutVehicleNestedInput
    scannerFiles?: ScannerFileUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    motor?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    patente?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    fechaAdq?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDiag?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DiagnosticCreateManyVehicleInput = {
    id?: number
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    scannerFileId?: number | null
    cost: number
    duration: number
  }

  export type ScannerFileCreateManyVehicleInput = {
    id?: number
    fileName: string
    uploadDate: Date | string
    scannerType: string
    status: string
    rawData: JsonNullValueInput | InputJsonValue
  }

  export type DiagnosticUpdateWithoutVehicleInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    scannerFile?: ScannerFileUpdateOneWithoutDiagnosticsNestedInput
    dtcs?: DiagnosticDtcUpdateManyWithoutDiagnosticNestedInput
    symptoms?: DiagnosticSymptomUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    scannerFileId?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    dtcs?: DiagnosticDtcUncheckedUpdateManyWithoutDiagnosticNestedInput
    symptoms?: DiagnosticSymptomUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    scannerFileId?: NullableIntFieldUpdateOperationsInput | number | null
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
  }

  export type ScannerFileUpdateWithoutVehicleInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    diagnostics?: DiagnosticUpdateManyWithoutScannerFileNestedInput
  }

  export type ScannerFileUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutScannerFileNestedInput
  }

  export type ScannerFileUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scannerType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rawData?: JsonNullValueInput | InputJsonValue
  }

  export type DtcCauseCreateManyDtcInput = {
    id?: number
    text: string
  }

  export type DtcSolutionCreateManyDtcInput = {
    id?: number
    text: string
  }

  export type DiagnosticDtcCreateManyDtcInput = {
    diagnosticId: number
  }

  export type DtcCauseUpdateWithoutDtcInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DtcCauseUncheckedUpdateWithoutDtcInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DtcCauseUncheckedUpdateManyWithoutDtcInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DtcSolutionUpdateWithoutDtcInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DtcSolutionUncheckedUpdateWithoutDtcInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DtcSolutionUncheckedUpdateManyWithoutDtcInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticDtcUpdateWithoutDtcInput = {
    diagnostic?: DiagnosticUpdateOneRequiredWithoutDtcsNestedInput
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUpdateManyWithoutDiagnosticDtcNestedInput
  }

  export type DiagnosticDtcUncheckedUpdateWithoutDtcInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUncheckedUpdateManyWithoutDiagnosticDtcNestedInput
  }

  export type DiagnosticDtcUncheckedUpdateManyWithoutDtcInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticSymptomCreateManySymptomInput = {
    diagnosticId: number
  }

  export type DiagnosticSymptomUpdateWithoutSymptomInput = {
    diagnostic?: DiagnosticUpdateOneRequiredWithoutSymptomsNestedInput
  }

  export type DiagnosticSymptomUncheckedUpdateWithoutSymptomInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticSymptomUncheckedUpdateManyWithoutSymptomInput = {
    diagnosticId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticDtcCreateManyDiagnosticInput = {
    dtcCode: string
  }

  export type DiagnosticSymptomCreateManyDiagnosticInput = {
    symptomId: number
  }

  export type DiagnosticDtcUpdateWithoutDiagnosticInput = {
    dtc?: DtcUpdateOneRequiredWithoutDiagnosticsNestedInput
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUpdateManyWithoutDiagnosticDtcNestedInput
  }

  export type DiagnosticDtcUncheckedUpdateWithoutDiagnosticInput = {
    dtcCode?: StringFieldUpdateOperationsInput | string
    diagnosticDtcSolutions?: DiagnosticDtcSolutionUncheckedUpdateManyWithoutDiagnosticDtcNestedInput
  }

  export type DiagnosticDtcUncheckedUpdateManyWithoutDiagnosticInput = {
    dtcCode?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticSymptomUpdateWithoutDiagnosticInput = {
    symptom?: SymptomUpdateOneRequiredWithoutDiagnosticsNestedInput
  }

  export type DiagnosticSymptomUncheckedUpdateWithoutDiagnosticInput = {
    symptomId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticSymptomUncheckedUpdateManyWithoutDiagnosticInput = {
    symptomId?: IntFieldUpdateOperationsInput | number
  }

  export type DiagnosticDtcSolutionCreateManyDiagnosticDtcInput = {
    id?: number
    text: string
  }

  export type DiagnosticDtcSolutionUpdateWithoutDiagnosticDtcInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticDtcSolutionUncheckedUpdateWithoutDiagnosticDtcInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticDtcSolutionUncheckedUpdateManyWithoutDiagnosticDtcInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticCreateManyScannerFileInput = {
    id?: number
    vehicleId: number
    fecha: Date | string
    desc: string
    tecnico: string
    estado: string
    detalles: string
    cost: number
    duration: number
  }

  export type DiagnosticUpdateWithoutScannerFileInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutDiagnosticsNestedInput
    dtcs?: DiagnosticDtcUpdateManyWithoutDiagnosticNestedInput
    symptoms?: DiagnosticSymptomUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateWithoutScannerFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    dtcs?: DiagnosticDtcUncheckedUpdateManyWithoutDiagnosticNestedInput
    symptoms?: DiagnosticSymptomUncheckedUpdateManyWithoutDiagnosticNestedInput
  }

  export type DiagnosticUncheckedUpdateManyWithoutScannerFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    desc?: StringFieldUpdateOperationsInput | string
    tecnico?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
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