// test.ts
import { login } from "./dist/auth.js";

// Test for logging in with correct username and password
const result1 = login("op_admin", "opopopop");
console.log(result1); // Output: User logged in successfully.

// Test for logging in with incorrect username or password
const result2 = login("wrong", "password");
console.log(result2); // Output: Incorrect username or password.