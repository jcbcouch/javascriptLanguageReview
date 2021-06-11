// var, let, const
// variable name can contain letters, numbers, _, $
// variable names can't start with number

// var
var name = 'john doe';
name = 'steve smith'; // can be reasigned
// Declaration and initialization
var greeting; // undefined
// Assignment
greeting = 'hello'; // hello


// let
let name2 = 'jane doe';
name2 = 'jane smith'; // can be reasigned
// Declaration and initialization
var greeting2; // undefined
// Assignment
greeting2 = 'hello world'; // hello

// const
const name3 = 'jacob'; // can't be reasigned or initialized without assignment

// primitive data types - stored directly in location of variable access
// stored on the stack
// string, number, boolean, null, undefined, symbol
const myString = "this is a string";
const typeOfMyString = typeof myString; // string

const myNumber = 123;
const typeOfMyNymber = typeof myNumber; // number

const myBoolean = true;
const typeOfMyBoolean = typeof myBoolean; // boolean

const myNullVariable = null;
const typeOfMyNull = typeof myNullVariable; // object (this is a bug in the language)

const myUndefinedVariable = undefined;
const typeOfMyUndefined = typeof myUndefinedVariable; // undefined

const mySymbol = Symbol();
const typeOfMySymbol = typeof mySymbol; // symbol

// reference data types - stored on the heap
// a pointer to a location in memory
// arrays, object literals, functions


console.log(typeOfMySymbol);