import { MoralisNextApi } from "@moralisweb3/next";

const handler = MoralisNextApi({
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  authentication: {
    domain: "nft-markeplace",
    uri: process.env.NEXTAUTH_URL || "",
    timeout: 120,
  },
});
export { handler as GET, handler as POST };
