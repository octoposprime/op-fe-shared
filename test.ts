function login(username: string, password: string) {
  if (username === "op_admin" && password === "opopopop") {
    return {
      message: "The user has successfully logged in.",
      tokens: {
        refreshToken: "refreshTokenValue",
        accessToken: "accessTokenValue"
      }
    };
  } else {
    return {
      message: "The username or password is incorrect."
    };
  }
}

function testLoginFunction() {

  console.log("Test senaryosu başlatılıyor...");

  const test1 = login("op_admin", "opopopop");
  console.log("Test 1:", test1.message === "The user has successfully logged in.");
  console.log("Test 1:", test1.tokens && test1.tokens.refreshToken && test1.tokens.accessToken);

  
  const test2 = login("invalid_username", "invalid_password");
  console.log("Test 2:", test2.message === "The username or password is incorrect.");
  console.log("Test 2:", !test2.tokens);

  
  console.log("Test senaryosu tamamlandı.");
}


testLoginFunction();

