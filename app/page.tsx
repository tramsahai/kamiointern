import { getWalletData } from "@/app/actions/wallet";
import { WalletHeader } from "../components/ui/wallet-header";
import { BalanceCard } from "../components/ui/balance-card";
import { RecentActivity } from "../components/ui/recent-activity";

export default async function HomePage() {
    // Fetch wallet data on the server
    const wallet = await getWalletData("Thasmei");

    return (
        <div className="min-h-screen bg-[#1a2744] text-white p-4">
            <WalletHeader ownerName={wallet.owner} />
            <BalanceCard balance={wallet.balance} currency={wallet.currency} />
            <RecentActivity />
        </div>
    );
}