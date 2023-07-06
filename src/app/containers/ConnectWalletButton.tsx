import React, { useEffect } from "react";
import { IconButton } from "../components/IconButton";
import { PiPlugsConnectedBold, PiPlugsBold } from "react-icons/pi";
import { useMoralis } from "react-moralis";
import { MoralisNextAuthProvider } from "@moralisweb3/next";
export const ConnectWalletButton = () => {
  const {
    enableWeb3,
    isWeb3Enabled,
    account,
    Moralis,
    isWeb3EnableLoading,
    deactivateWeb3,
  } = useMoralis();

  const connectWallet = async () => {
    try {
      await enableWeb3();

      localStorage.setItem("connect", "injected");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log({ account });
      if (account) return;

      deactivateWeb3();
    });
  }, [Moralis, deactivateWeb3]);

  useEffect(() => {
    const reconnect = async () => {
      const connect = localStorage.getItem("connect");
      console.log({ connect });
      if (!connect) return;

      await enableWeb3();
    };
    reconnect();
  }, [enableWeb3]);

  return (
    <>
      {isWeb3Enabled && account ? (
        <div className="flex items-center justify-between gap-2 px-2 rounded-full text-sm">
          <span>{`${account.slice(0, 10)}...${account.slice(-6)}`}</span>
          <PiPlugsConnectedBold size={24} className="text-green-500" />
        </div>
      ) : (
        <IconButton loading={isWeb3EnableLoading} onClick={connectWallet}>
          <PiPlugsBold size={24} className="text-red-500" />
        </IconButton>
      )}
    </>
  );
};
