import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "40595188045-hsvq1v49pgcribr8fe4cbf5vv2ajn0ap.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GitHubProvider({
      clientId: "Ov23libJJdWq5WeQdDam",
      clientSecret: "89a35e22f443cccc166d31b2c7ead57a69f045f9",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
