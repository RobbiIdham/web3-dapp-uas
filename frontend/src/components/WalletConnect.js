import { ethers } from "ethers";
import { useState } from "react";

function WalletConnect() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Silakan install MetaMask!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balanceWei = await provider.getBalance(address);

      setAccount(address);
      setBalance(ethers.formatEther(balanceWei));
    } catch (error) {
      alert("Gagal menghubungkan wallet");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <button
        onClick={connectWallet}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg"
      >
        {account ? `Connected: ${account.substring(0,6)}...` : "Connect MetaMask"}
      </button>

      {balance && <p className="mt-4 text-center">Balance: {balance} ETH</p>}
    </div>
  );
}

export default WalletConnect;
