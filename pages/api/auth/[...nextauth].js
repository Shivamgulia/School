import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// const url = 'http://localhost:8080';
const url = process.env.NEXT_PUBLIC_API_URL;

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

        const result = await fetch(`${url}/api/v1/auth/authenticate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
        const data = await result.json();

        if (result.ok) return data;
        throw Error('Invalid');
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: '/auth',
    error: '/auth',
    signOut: '/auth',
  },
};

export default NextAuth(authOptions);
