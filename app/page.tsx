import { WalletHeader } from "@/components/wallet-header"
import { BalanceCard } from "@/components/balance-card"
import { RecentActivity } from "@/components/recent-activity"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1a2744] px-4 py-6 pb-8">
      <div className="mx-auto max-w-md">
        <WalletHeader />
        <BalanceCard />
        <RecentActivity />
      </div>
    </main>
  )
}
