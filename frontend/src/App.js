import WalletConnect from "./components/WalletConnect";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Web3 DApp UAS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WalletConnect />
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
