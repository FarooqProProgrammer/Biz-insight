import { SidebarProvider } from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/Appsidebar";
import Header from "@/components/Header";


export const DashboardProvider = ({ children }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className={"w-full"}>
                <Header />
                {children}
            </main>
        </SidebarProvider>
    )
}