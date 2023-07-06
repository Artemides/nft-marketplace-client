import { MoralisNextApi } from "@moralisweb3/next";
export default MoralisNextApi({
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
});
