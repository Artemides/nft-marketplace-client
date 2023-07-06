import React, { useState } from "react";
import { IconButton } from "../components/IconButton";
import { PiPlugsConnectedBold, PiPlugsBold } from "react-icons/pi";
import { useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
export const ConnectWalletButton = () => {
  const { connectAsync, isLoading } = useConnect();
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    const { account } = await connectAsync({
      connector: new MetaMaskConnector(),
    });
    setAccount(account);
  };

  return (
    <>
      {account ? (
        <div className="flex items-center justify-between gap-2 px-2 rounded-full text-sm">
          <span>{`${account.slice(0, 10)}...${account.slice(-6)}`}</span>
          <PiPlugsConnectedBold size={24} className="text-green-500" />
        </div>
      ) : (
        <IconButton loading={isLoading} onClick={connectWallet}>
          <PiPlugsBold size={24} className="text-red-500" />
        </IconButton>
      )}
    </>
  );
};
