import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";

const authConfig: NextAuthConfig = {
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
