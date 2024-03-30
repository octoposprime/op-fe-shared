import AsyncStorage from '@react-native-async-storage/async-storage'; // React Native için AsyncStorage
import { Platform } from 'react-native';
import { login as authLogin } from './auth'; // auth.ts dosyasından login fonksiyonunu al
import { request, gql } from 'graphql-request'; // GraphQL isteklerini yapmak için kullanılır

const endpoint = 'http://api.test.octoposprime.com:18080/'; // GraphQL sunucunuzun URL'si

export async function login(username: string, password: string): Promise<{ message: string, tokens?: { refreshToken: string, accessToken: string } }> {
  try {
    const { message, tokens } = await authLogin(username, password); // auth.ts'deki login fonksiyonunu çağır
    if (tokens) {
      // React platformunda ise token'ları local storage'a sakla
      if (Platform.OS === 'web') {
        localStorage.setItem('refreshToken', tokens.refreshToken);
        localStorage.setItem('accessToken', tokens.accessToken);
      } else {
        await AsyncStorage.setItem('refreshToken', tokens.refreshToken);
        await AsyncStorage.setItem('accessToken', tokens.accessToken);
      }
    }
    return { message, tokens };
  } catch (error) {
    console.error('An error occurred:', error);
    return { message: 'An error occurred while logging in.' };
  }
}


interface UserData {
  id: string;
  name: string;
  email: string;
}


export async function fetchUserData(username: string): Promise<UserData> {
  const query = gql`
    query GetUser($username: String!) {
      getUser(username: $username) {
        id
        name
        email
      }
    }
  `;

  try {
    const data: { getUser: UserData } = await request(endpoint, query, { username });
    return data.getUser;
  } catch (error) {
    console.error('An error occurred while fetching user data:', error);
    throw new Error('An error occurred while fetching user data.');
  }
}
  