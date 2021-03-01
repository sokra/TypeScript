Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/src/globals.d.ts]
interface SymbolConstructor {
    (description?: string | number): symbol;
}
declare var Symbol: SymbolConstructor;

//// [/src/src/hkt.ts]
export interface HKT<T> { }

//// [/src/src/main.ts]
import { HKT } from "./hkt";

const sym = Symbol();

declare module "./hkt" {
  interface HKT<T> {
    [sym]: { a: T }
  }
}
const x = 10;
type A = HKT<number>[typeof sym];

//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "rootDir": "src",
    "incremental": true
  }
}



Output::
/lib/tsc --b /src/tsconfig.json --verbose
[[90m12:01:00 AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90m12:01:00 AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/src/hkt.js' does not exist

[[90m12:01:00 AM[0m] Building project '/src/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/src/hkt.js]
"use strict";
exports.__esModule = true;


//// [/src/src/main.js]
"use strict";
exports.__esModule = true;
var sym = Symbol();
var x = 10;


//// [/src/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/globals.d.ts": {
        "version": "-1994196675-interface SymbolConstructor {\n    (description?: string | number): symbol;\n}\ndeclare var Symbol: SymbolConstructor;",
        "signature": "-1994196675-interface SymbolConstructor {\n    (description?: string | number): symbol;\n}\ndeclare var Symbol: SymbolConstructor;",
        "affectsGlobalScope": true
      },
      "./src/hkt.ts": {
        "version": "675797797-export interface HKT<T> { }",
        "signature": "2373810515-export interface HKT<T> {\r\n}\r\n",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "-28387946490-import { HKT } from \"./hkt\";\r\n\r\nconst sym = Symbol();\r\n\r\ndeclare module \"./hkt\" {\r\n  interface HKT<T> {\r\n    [sym]: { a: T }\r\n  }\r\n}\r\nconst x = 10;\r\ntype A = HKT<number>[typeof sym];",
        "signature": "-7779857705-declare const sym: unique symbol;\r\ndeclare module \"./hkt\" {\r\n    interface HKT<T> {\r\n        [sym]: {\r\n            a: T;\r\n        };\r\n    }\r\n}\r\nexport {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "rootDir": "./src",
      "incremental": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "1": 0
    },
    "exportedModulesMap": {
      "1": 0
    },
    "mapLists": [
      [
        0
      ]
    ],
    "mapFiles": [
      "./src/hkt.ts",
      "./src/main.ts"
    ],
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./src/globals.d.ts",
      "./src/hkt.ts",
      "./src/main.ts"
    ]
  },
  "version": "FakeTSVersion"
}



Change:: incremental-declaration-doesnt-change
Input::
//// [/src/src/main.ts]
import { HKT } from "./hkt";

const sym = Symbol();

declare module "./hkt" {
  interface HKT<T> {
    [sym]: { a: T }
  }
}

type A = HKT<number>[typeof sym];



Output::
/lib/tsc --b /src/tsconfig.json --verbose
[[90m12:04:00 AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90m12:04:00 AM[0m] Project 'src/tsconfig.json' is out of date because oldest output 'src/src/hkt.js' is older than newest input 'src/src/main.ts'

[[90m12:04:00 AM[0m] Building project '/src/tsconfig.json'...

[[90m12:04:00 AM[0m] Updating unchanged output timestamps of project '/src/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/src/main.js]
"use strict";
exports.__esModule = true;
var sym = Symbol();


//// [/src/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./src/globals.d.ts": {
        "version": "-1994196675-interface SymbolConstructor {\n    (description?: string | number): symbol;\n}\ndeclare var Symbol: SymbolConstructor;",
        "signature": "-1994196675-interface SymbolConstructor {\n    (description?: string | number): symbol;\n}\ndeclare var Symbol: SymbolConstructor;",
        "affectsGlobalScope": true
      },
      "./src/hkt.ts": {
        "version": "675797797-export interface HKT<T> { }",
        "signature": "2373810515-export interface HKT<T> {\r\n}\r\n",
        "affectsGlobalScope": false
      },
      "./src/main.ts": {
        "version": "-27494779858-import { HKT } from \"./hkt\";\r\n\r\nconst sym = Symbol();\r\n\r\ndeclare module \"./hkt\" {\r\n  interface HKT<T> {\r\n    [sym]: { a: T }\r\n  }\r\n}\r\n\r\ntype A = HKT<number>[typeof sym];",
        "signature": "-7779857705-declare const sym: unique symbol;\r\ndeclare module \"./hkt\" {\r\n    interface HKT<T> {\r\n        [sym]: {\r\n            a: T;\r\n        };\r\n    }\r\n}\r\nexport {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "rootDir": "./src",
      "incremental": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "1": 0
    },
    "exportedModulesMap": {
      "1": 0
    },
    "mapLists": [
      [
        0
      ]
    ],
    "mapFiles": [
      "./src/hkt.ts",
      "./src/main.ts"
    ],
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./src/globals.d.ts",
      "./src/hkt.ts",
      "./src/main.ts"
    ]
  },
  "version": "FakeTSVersion"
}

