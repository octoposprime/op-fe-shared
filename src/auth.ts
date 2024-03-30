export async function login(
  username: string,
  password: string,
): Promise<{
  message: string;
  tokens?: {refreshToken: string; accessToken: string};
}> {
  if (username === 'op_admin' && password === 'opopopop') {
    return {
      message: 'The user has successfully logged in.',
      tokens: {
        refreshToken: 'refreshTokenValue',
        accessToken: 'accessTokenValue',
      },
    };
  } else {
    return {
      message: 'The username or password is incorrect.',
    };
  }
}
