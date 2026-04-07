interface BalanceCardProps {
    balance: number;
    currency: string;
}

export function BalanceCard({ balance, currency }: BalanceCardProps) {
    return (
        <div className="bg-[#0f172a] rounded-2xl p-6 mb-6 border border-cyan-500/20">
            <p className="text-sm text-gray-400 mb-1">KamioKash</p>
            <p className="text-5xl font-bold mb-2">{balance.toLocaleString()}</p>
            <p className="text-cyan-400 text-sm">{currency}</p>
            <p className="text-xs text-gray-500 mt-2">Your KamioKash Rewards Balance</p>

            <div className="flex gap-4 mt-6">
                <button className="bg-cyan-500 text-[#1a2744] px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition">
                    Send
                </button>
                <button className="bg-cyan-500 text-[#1a2744] px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition">
                    Receive
                </button>
                <button className="bg-cyan-500 text-[#1a2744] px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition">
                    Scan
                </button>
            </div>
        </div>
    );
}