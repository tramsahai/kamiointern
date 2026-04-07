import { ShoppingBag, Gift, Sparkles, ChevronRight } from "lucide-react"

const transactions = [
    {
        id: 1,
        icon: ShoppingBag,
        title: "Store Purchase Reward",
        description: "Earned from KamiMart",
        amount: "+150",
        date: "Today, 2:30 PM",
        type: "credit" as const,
    },
    {
        id: 2,
        icon: Gift,
        title: "Referral Bonus",
        description: "Friend joined KamioKash",
        amount: "+250",
        date: "Yesterday, 5:15 PM",
        type: "credit" as const,
    },
    {
        id: 3,
        icon: Sparkles,
        title: "Redeemed Reward",
        description: "Coffee voucher",
        amount: "-100",
        date: "Mar 28, 11:00 AM",
        type: "debit" as const,
    },
]

export function RecentActivity() {
    return (
        <section>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
                <button className="flex items-center gap-1 text-sm text-[#4db8d4] transition-colors hover:text-[#6dc8e4]">
                    View All
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>

            <div className="space-y-3">
                {transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} {...transaction} />
                ))}
            </div>
        </section>
    )
}

function TransactionItem({
    icon: Icon,
    title,
    description,
    amount,
    date,
    type,
}: {
    icon: typeof ShoppingBag
    title: string
    description: string
    amount: string
    date: string
    type: "credit" | "debit"
}) {
    return (
        <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4db8d4]/20">
                <Icon className="h-5 w-5 text-[#4db8d4]" />
            </div>
            <div className="flex-1">
                <p className="font-medium text-white">{title}</p>
                <p className="text-sm text-white/60">{description}</p>
            </div>
            <div className="text-right">
                <p className={`font-semibold ${type === "credit" ? "text-emerald-400" : "text-white/80"}`}>
                    {amount}
                </p>
                <p className="text-xs text-white/50">{date}</p>
            </div>
        </div>
    )
}