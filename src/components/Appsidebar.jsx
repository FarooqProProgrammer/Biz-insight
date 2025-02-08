import { Calendar, Home, Inbox, Search, Settings, Users, Bell, BookOpen, Star } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/router"
import { cn } from "@/lib/utils"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Enhanced menu items with categories and badges
const menuItems = {
    main: [
        {
            title: "Home",
            url: "/",
            icon: Home,
            badge: null,
        },
        {
            title: "Inbox",
            url: "/inbox",
            icon: Inbox,
            badge: "12",
        },
        {
            title: "Calendar",
            url: "/calendar",
            icon: Calendar,
            badge: "3",
        },
    ],
    features: [
        {
            title: "Search",
            url: "/search",
            icon: Search,
        },
        {
            title: "Notifications",
            url: "/notifications",
            icon: Bell,
            badge: "New",
        },
        {
            title: "Bookmarks",
            url: "/bookmarks",
            icon: BookOpen,
        },
    ],
    settings: [
        {
            title: "Team",
            url: "/team",
            icon: Users,
        },
        {
            title: "Favorites",
            url: "/favorites",
            icon: Star,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: Settings,
        },
    ],
}

export const AppSidebar = () => {
    const router = useRouter()
    const [isCollapsed, setIsCollapsed] = useState(false)

    const MenuItem = ({ item }) => {
        const isActive = router.pathname === item.url

        return (
            <SidebarMenuItem>
                <SidebarMenuButton
                    asChild
                    className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                        "hover:bg-gray-100 dark:hover:bg-gray-800",
                        isActive && "bg-gray-100 dark:bg-gray-800"
                    )}
                >
                    <Link href={item.url} className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                            <item.icon
                                className={cn("h-5 w-5", isActive ? "text-primary" : "text-gray-500")}
                            />
                            {!isCollapsed && (
                                <span
                                    className={cn(
                                        "text-sm",
                                        isActive ? "font-medium text-primary" : "text-gray-700 dark:text-gray-300"
                                    )}
                                >
                  {item.title}
                </span>
                            )}
                        </div>
                        {!isCollapsed && item.badge && (
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {item.badge}
              </span>
                        )}
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        )
    }

    return (
        <Sidebar
            className={cn(
                "border-r border-gray-200 dark:border-gray-800 transition-all duration-300",
                isCollapsed ? "w-16" : "w-64"
            )}
        >
            <SidebarContent>
                {/* Sidebar Header with Website Name */}
                <div className="p-4 flex items-center justify-between">
          <span
              className={cn(
                  "text-xl font-bold text-gray-800 dark:text-white",
                  isCollapsed && "sr-only"
              )}
          >
            My Website
          </span>
                </div>

                <SidebarGroup>
                    <SidebarGroupLabel
                        className={cn("px-3 text-xs font-medium text-gray-500", isCollapsed && "sr-only")}
                    >
                        Main
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.main.map((item) => (
                                <MenuItem key={item.title} item={item} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel
                        className={cn("px-3 text-xs font-medium text-gray-500", isCollapsed && "sr-only")}
                    >
                        Features
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.features.map((item) => (
                                <MenuItem key={item.title} item={item} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel
                        className={cn("px-3 text-xs font-medium text-gray-500", isCollapsed && "sr-only")}
                    >
                        Settings
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.settings.map((item) => (
                                <MenuItem key={item.title} item={item} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
