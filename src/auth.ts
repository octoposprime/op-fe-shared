// src/auth.ts
export function login(username: string, password: string): string {
  if (username === "op_admin" && password === "opopopop") {
    return "The user has successfully logged in.";
  } else {
    return "The username or password is incorrect.";
  }
}
