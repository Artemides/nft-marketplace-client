import React, { useEffect } from "react";
import { IconButton } from "../components/IconButton";
import { TbPlugConnected } from "react-icons/tb";
import { useMoralis } from "react-moralis";

export const ConnectWalletButton = () => {
  const { enableWeb3, Moralis, isWeb3EnableLoading, deactivateWeb3 } =
    useMoralis();

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
    <IconButton loading={isWeb3EnableLoading} onClick={connectWallet}>
      <TbPlugConnected size={24} className="text-red-500" />
    </IconButton>
  );
};
