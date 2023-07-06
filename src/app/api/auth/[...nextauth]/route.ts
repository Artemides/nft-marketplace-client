"use client";

import { MoralisNextAuthProvider } from "@moralisweb3/next";
import NextAuth from "next-auth/next";

export default NextAuth({
  providers: [MoralisNextAuthProvider()],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      if (token.name && session.user) session.user.name = token.name;

      return session;
    },
  },
});
