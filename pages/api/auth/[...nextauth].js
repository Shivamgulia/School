import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

        const result = await fetch('http://localhost:8080/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: credentials.email,
            password: credentials.password,
          }),
        });
        console.log(JSON.stringify(result));
        if (result.ok) return result;
        throw Error('Invalid');
      },
    }),
  ],
  pages: {
    signIn: '/auth',
    error: '/auth',
    signOut: '/auth',
  },
};

export default NextAuth(authOptions);
