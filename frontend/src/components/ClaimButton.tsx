"use client";
import React from "react";
import {
  useConnectWallet,
  useCurrentAccount,
  useCurrentWallet,
  useSignAndExecuteTransaction,
  ConnectButton,
} from "@iota/dapp-kit";
import { useQuery } from "@tanstack/react-query";

const ClaimButton = () => {
  const account = useCurrentAccount();
  const wallet = useCurrentWallet();
  const { mutateAsync: signAndExecute, isPending: isClaiming } =
    useSignAndExecuteTransaction();

  const { data: balance } = useQuery({
    queryKey: ["walletBalance"],
    queryFn: async () => {
      if (!wallet?.currentWallet) return 0;
      // Get balance from the wallet's API
      // const balance = await wallet.currentWallet.getBalance();
      return Number(balance || 0);
    },
  });

  const handleClaim = async () => {
    if (!account) return;

    try {
    } catch (error) {
      console.error("Error claiming tokens:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!account ? (
        <ConnectButton />
      ) : (
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Connected Address: {account.address.slice(0, 6)}...
            {account.address.slice(-4)}
          </p>
          <p className="text-sm text-gray-600">Balance: {balance} SMR</p>
          <button
            onClick={handleClaim}
            disabled={isClaiming}
            className={`mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${
              isClaiming ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isClaiming ? "Claiming..." : "Claim Tokens"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ClaimButton;
