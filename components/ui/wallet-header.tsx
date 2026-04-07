interface WalletHeaderProps {
    ownerName: string;
}

export function WalletHeader({ ownerName }: WalletHeaderProps) {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold">Welcome back, {ownerName}</h1>
            <p className="text-gray-400">Good evening</p>
        </div>
    );
}