import { getWalletData } from "@/app/actions/wallet";
import { WalletHeader } from "../components/ui/wallet-header";
import { BalanceCard } from "../components/ui/balance-card";
import { RecentActivity } from "../components/ui/recent-activity";

export default async function HomePage() {
    // getting the wallet balance from the server action
    const wallet = await getWalletData("Thasmei");
    
    // trying to fetch a random duck picture from this free api i found
    // fetch works on the server too
    const duckResponse = await fetch("https://random-d.uk/api/v2/random");
    const duckData = await duckResponse.json();

    return (
        <div className="min-h-screen bg-[#1a2744] text-white p-4">
            {/* showing the welcome header with the users name */}
            <WalletHeader ownerName={wallet.owner} />
            
            {/* balance card shows the points and currency */}
            <BalanceCard balance={wallet.balance} currency={wallet.currency} />
            
            {/* this is the duck section, silly api so i picked ducks */}
            <div className="bg-[#0f172a] rounded-xl p-4 mb-6 border border-cyan-500/20">
                <p className="text-cyan-400 text-sm mb-2">🦆 Random Duck of the Moment</p>
                <img 
                    src={duckData.url} 
                    alt="Random Duck"
                    className="w-32 h-32 object-cover rounded-lg mx-auto mb-2"
                />
                <p className="text-white/60 text-xs text-center">{duckData.message || "Powered by random-d.uk"}</p>
            </div>
            
            <RecentActivity />
        </div>
    );
}