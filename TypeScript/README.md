## Project Setup

* Every `task_x` directory includes:

  * `package.json`, `tsconfig.json`, `webpack.config.js`
  * TypeScript + Webpack + Jest + ESLint setup

### Build and Run

```bash
npm install
npm run build       # Compiles with webpack
npm run start-dev   # (If using webpack-dev-server)
```

---

## Tasks Overview

### ✩ `task_0` - Student Interface + DOM Table

* Create `Student` interface with `firstName`, `lastName`, `age`, `location`
* Render a table with student info using DOM manipulation

### `task_1` - Teachers, Directors, and StudentClass

* Interface `Teacher` (dynamic props allowed)
* `Directors` interface extends `Teacher`
* `printTeacher()` function with interface typing
* Class `StudentClass` with methods and constructor interface

### `task_2` - Advanced Types

* Interfaces: `DirectorInterface`, `TeacherInterface`
* Classes: `Director`, `Teacher`
* Factory function: `createEmployee(salary)`
* Type predicate: `isDirector()`
* Function: `executeWork()` (calls correct method)
* String literal type: `'Math' | 'History'`
* Function: `teachClass(todayClass)`

### `task_3` - Ambient Namespaces

* Define `RowID`, `RowElement` in `interface.ts`
* Use third-party JS lib `crud.js`
* Declare typings in `crud.d.ts`
* Use `insertRow`, `updateRow`, `deleteRow` with type safety

### `task_4` - Namespaces + Declaration Merging

* Namespace `Subjects` contains all logic
* Interface `Teacher` is extended per subject (`Cpp`, `Java`, `React`)
* Base class `Subject` with setter
* Each subject class overrides `getRequirements()` & `getAvailableTeacher()`

### `task_5` - Brand/Nominal Typing

* `MajorCredits` and `MinorCredits` interfaces include `__brand`
* `sumMajorCredits()` and `sumMinorCredits()` return the correct typed objects

---

## Dependencies

* **TypeScript**: ^4.9.5
* **Webpack**: ^5.x
* **Jest**: ^29.x (`ts-jest`)
* **ESLint**: `@typescript-eslint`
* **Babel**: Preset for TS

---

## Tips & Best Practices

* Use `/// <reference path="...">` only for namespace-style projects
* Dynamic properties in interfaces: `[key: string]: any`
* Use `!` for definite assignment (`teacher!: Teacher`)
* Type guards: `function isDirector(obj): obj is Director`
* Nominal typing via `__brand` to distinguish similar shapes

---

## Quick Start

```bash
cd task_x
npm install
npm run build
```
