import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Iv1.b419e78f3c08057e',
      clientSecret: '2ea127410c215138d1989f8a71cc85b5c5f02b1d',
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
