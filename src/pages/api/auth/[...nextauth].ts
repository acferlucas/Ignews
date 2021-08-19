import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { query as q } from 'faunadb';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: 'b54f3c497eb42901d906',
      clientSecret: '8feb221020c059e6cd8885b24071f1c26d56ba22',
    }),
  ],
  callbacks: {
    async signIn(user) {
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index('user_email'), q.Casefold(user.email))),
            ),
            q.Create(q.Collection('users'), { data: { email: user.email } }),
            q.Get(q.Match(q.Index('user_email'), q.Casefold(user.email))),
          ),
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
