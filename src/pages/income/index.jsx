import { DashboardProvider } from "@/layout"
import {
    ArrowUpRight,
    ArrowDownRight,
    DollarSign,
    TrendingUp,
    CreditCard,
    PieChart,
    Download,
    Plus,
} from "lucide-react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import {useRouter} from "next/router";

// Sample data for the chart
const monthlyData = [
    { month: "Jan", income: 4500 },
    { month: "Feb", income: 5200 },
    { month: "Mar", income: 4800 },
    { month: "Apr", income: 6300 },
    { month: "May", income: 5900 },
    { month: "Jun", income: 7500 },
]

const recentTransactions = [
    {
        id: 1,
        name: "Website Design",
        amount: 2500,
        status: "completed",
        date: "2024-03-01",
        type: "income",
    },
    {
        id: 2,
        name: "Mobile App Development",
        amount: 4500,
        status: "pending",
        date: "2024-03-02",
        type: "income",
    },
    // Add more transactions as needed
]

export default function Income() {


    const router = useRouter()


    return (
        <DashboardProvider>
            <div className="p-6 space-y-6">
                {/* Page Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            Income Overview
                        </h1>
                        <p className="text-gray-500 mt-1">
                            Monitor your revenue and financial metrics
                        </p>
                    </div>
                    {/* Buttons Container */}
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                            <Download className="w-4 h-4" />
                            Export Report
                        </button>
                        <button onClick={()=>router.push("/income/add-income")} className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                            <Plus className="w-4 h-4" />
                            Add Income
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Income */}
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <DollarSign className="w-6 h-6 text-primary" />
                            </div>
                            <span className="flex items-center text-green-500 text-sm">
                <ArrowUpRight className="w-4 h-4" />
                +12.5%
              </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm">Total Income</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                                $84,250.00
                            </h3>
                        </div>
                    </div>

                    {/* Monthly Revenue */}
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="flex items-center text-green-500 text-sm">
                <ArrowUpRight className="w-4 h-4" />
                +8.1%
              </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm">Monthly Revenue</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                                $12,350.00
                            </h3>
                        </div>
                    </div>

                    {/* Active Invoices */}
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <CreditCard className="w-6 h-6 text-purple-600" />
                            </div>
                            <span className="flex items-center text-red-500 text-sm">
                <ArrowDownRight className="w-4 h-4" />
                -2.3%
              </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm">Active Invoices</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                                23
                            </h3>
                        </div>
                    </div>

                    {/* Profit Margin */}
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <PieChart className="w-6 h-6 text-green-600" />
                            </div>
                            <span className="flex items-center text-green-500 text-sm">
                <ArrowUpRight className="w-4 h-4" />
                +5.2%
              </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm">Profit Margin</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                                32.8%
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Chart */}
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Income Trend
                    </h2>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="income"
                                    stroke="#2563eb"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Recent Transactions
                    </h2>
                    <div className="space-y-4">
                        {recentTransactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <DollarSign className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">
                                            {transaction.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{transaction.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        ${transaction.amount.toLocaleString()}
                                    </p>
                                    <span
                                        className={`text-xs ${
                                            transaction.status === "completed"
                                                ? "text-green-500"
                                                : "text-yellow-500"
                                        }`}
                                    >
                    {transaction.status}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardProvider>
    )
}
