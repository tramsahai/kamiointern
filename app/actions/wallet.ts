"use server";

import { sleep } from "@/lib/utils";

export async function getWalletData(userId: string) {
    // Simulate database/network delay
    await sleep(500);

    // This is the wallet data, currently hardcoded but ready for real database later
    const walletData = {
        balance: 1000,
        currency: "KashCoins",
        owner: userId || "Thasmei",
        lastUpdated: new Date().toISOString(),
    };

    return walletData;
}