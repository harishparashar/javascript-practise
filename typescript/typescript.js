// 1. what is type script.
// Better version of js with more features . typescript is superset of js . 
// - typescript is javascript  with syntax for types.
// why use - 
// - avoid bugs in developement.
// - increase development speed .
// -additional features (enums, interface)


// 2. Data Type in ts
// primitive types - number , string ,boolean , null undefined,BigInt,Symbol
// object type - Array , tuple , object 
// spacial types  - any , unknown , void ,never 
// advanced types - union Intersection, type alieas ,enum , literal type
// function types - function type 

// 1. What is TypeScript? How is it different from JavaScript?
// Answer:
// TypeScript is a superset of JavaScript that adds static typing, interfaces, and other features. It compiles to plain JavaScript.
// Difference:
// JavaScript is dynamically typed, while TypeScript is statically typed.
// TypeScript helps catch errors at compile time.
// TypeScript supports features like interfaces, enums, generics, and access modifiers.

// 2. What are the benefits of using TypeScript?
// Answer:
// Early detection of errors via static type checking.
// Better code editor support (autocomplete, IntelliSense).
// Improved readability and maintainability.
// Support for modern JS features with backward compatibility via compilation.

// 3. What are types in TypeScript? Give examples.
// Answer:
// Types define the shape of variables, functions, and objects.
// Examples:
// let name: string = 'Harish';
// let age: number = 30;
// let isActive: boolean = true;
// let user: { name: string, age: number } = { name: 'Harish', age: 30 };

// 4. What are interfaces in TypeScript?
// Answer:
// Interfaces define the shape of an object. They are used for type-checking.
// interface User {
//   name: string;
//   age: number;
// }
// const user: User = { name: 'Harish', age: 30 };


// 6. What are Union and Intersection types?
// Answer:
// Union (|): A variable can hold multiple types.
// let value: string | number;
// value = 'hello';
// value = 42;
// Intersection (&): Combines multiple types into one.
// interface A { name: string }
// interface B { age: number }
// const user: A & B = { name: 'Harish', age: 30 };

// 7. What are generics in TypeScript?
// Answer:
// Generics allow you to write reusable and flexible components.
// function identity<T>(value: T): T {
//   return value;
// }
// identity<string>('Hello');
// identity<number>(123);

// 8. What is the difference between any, unknown, never, and void?
// Answer:
// any: Disables type checking.
// unknown: Like any but safer—you must check its type before use.
// void: Used for functions that don’t return anything.
// never: For functions that never return (e.g., throw errors or infinite loops).

// 9. What are enums in TypeScript?
// Answer:
// Enums are used to define a set of named constants.
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// let move: Direction = Direction.Up;

// 10. How is TypeScript compiled?
// Answer:
// Using the TypeScript compiler (tsc). It compiles .ts files into .js.

// 11. What is type assertion in TypeScript?
// Answer:
// Type assertion helps when TypeScript is unsure about a value's type, and you want to manually specify it.
// let value: any = "Hello";
// let length: number = (value as string).length;

// 12. Can TypeScript be used with React?
// Answer:
// Yes, TypeScript can be used with React to provide type safety for components, props, and state.
// interface Props {
//   title: string;
// }
// const Header: React.FC<Props> = ({ title }) => <h1>{title}</h1>;

// 13. What is the difference between interface and type in TypeScript?
// Answer:
// Both can define object shapes.
// interface is more extendable (use extends).
// type can represent primitives, unions, and intersections.
// type User = { name: string };
// interface Person { name: string };

// 14. What are access modifiers in TypeScript?
// Answer:
// They control the visibility of class members:
// public – accessible everywhere (default)
// private – accessible only within the class
// protected – accessible in class and subclasses

// 15. What is a utility type in TypeScript?
// Answer:
// Utility types are built-in helpers for transforming types:
// Examples:
// Partial<T>: Makes all properties optional.
// Readonly<T>: Makes all properties read-only.
// Pick<T, K>: Picks a subset of properties.
// Omit<T, K>: Omits specific properties.
// type User = { name: string; age: number };
// type PartialUser = Partial<User>; // { name?: string; age?: number }

// 📌 What is a Tuple in TypeScript?
// A Tuple in TypeScript is a typed array with a fixed number of elements, where each element can have a different type.
// let user: [string, number];
// user = ["Harish", 28]; // ✅ Correct
// user = [28, "Harish"]; // ❌ Error: Type order doesn't match
