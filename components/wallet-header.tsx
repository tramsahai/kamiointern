import { Bell, Settings } from "lucide-react"

export function WalletHeader() {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-white/70">Good evening</p>
        <h1 className="text-xl font-semibold text-white">Welcome back, Thasmei</h1>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
