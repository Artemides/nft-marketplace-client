import Link from "next/link";
import React from "react";
import { TbPlugConnected } from "react-icons/tb";
import { IconButton } from "../components/IconButton";
import { ConnectWalletButton } from "./ConnectWalletButton";
export const Navbar = () => {
  return (
    <nav className="sticky flex items-center justify-between px-32 pt-4">
      <Link href={"/"} className="text-2xl font-semibold">
        Markeplace
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href={"/"}>Purchase</Link>
        </li>
        <li>
          <Link href={"/"}>Sell</Link>
        </li>
      </ul>
      <ConnectWalletButton />
    </nav>
  );
};
