import { Coins, ArrowUpRight, ArrowDownLeft, QrCode } from "lucide-react"

export function BalanceCard() {
  return (
    <section className="mb-6">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#4db8d4] to-[#3a9bb8] p-6 shadow-lg">
        <div className="mb-1 flex items-center gap-2">
          <Coins className="h-5 w-5 text-white/90" />
          <span className="text-sm font-medium text-white/90">KamioKash Wallet</span>
        </div>
        
        <div className="mb-1">
          <p className="text-4xl font-bold text-white">1000</p>
          <p className="text-lg font-medium text-white/90">KashCoins</p>
        </div>
        
        <p className="mb-6 text-sm text-white/80">Your KamioKash Rewards Balance</p>
        
        <div className="flex items-center justify-between gap-2">
          <QuickAction icon={ArrowUpRight} label="Send" />
          <QuickAction icon={ArrowDownLeft} label="Receive" />
          <QuickAction icon={QrCode} label="Scan" />
        </div>
      </div>
    </section>
  )
}

function QuickAction({ icon: Icon, label }: { icon: typeof ArrowUpRight; label: string }) {
  return (
    <button className="flex flex-1 flex-col items-center gap-1.5 rounded-xl bg-white/20 py-3 text-white transition-colors hover:bg-white/30">
      <Icon className="h-5 w-5" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}
