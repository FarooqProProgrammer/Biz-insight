import { Bell, Search, User, Settings } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
    const [notifications] = useState(3) // Example notification count

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Search */}
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <input
                            type="search"
                            placeholder="Search anything..."
                            className={cn(
                                "w-full bg-gray-50 dark:bg-gray-900",
                                "pl-9 pr-4 py-2 text-sm rounded-lg",
                                "border border-gray-200 dark:border-gray-800",
                                "focus:outline-none focus:ring-2 focus:ring-primary/50",
                                "placeholder:text-gray-500 dark:placeholder:text-gray-400"
                            )}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Notification Bell */}
                    <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        {notifications > 0 && (
                            <span className={cn(
                                "absolute top-0 right-0 w-4 h-4",
                                "flex items-center justify-center",
                                "text-xs text-white font-medium",
                                "bg-primary rounded-full",
                                "transform translate-x-1 -translate-y-1"
                            )}>
                                {notifications}
                            </span>
                        )}
                    </button>

                    {/* Settings */}
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Settings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </button>

                    {/* Profile */}
                    <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-800">
                        <div className="flex flex-col items-end">
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                John Doe
                            </span>
                            <span className="text-xs text-gray-500">
                                Administrator
                            </span>
                        </div>
                        <button className={cn(
                            "flex h-9 w-9 items-center justify-center",
                            "rounded-full bg-gray-100 dark:bg-gray-800",
                            "hover:ring-2 hover:ring-primary/50"
                        )}>
                            <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Active Page Indicator */}
            <div className="px-4 sm:px-6 lg:px-8 py-2 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Dashboard</span>
                    <span className="text-gray-400">/</span>
                    <span className="font-medium text-primary">Overview</span>
                </div>
            </div>
        </header>
    )
}