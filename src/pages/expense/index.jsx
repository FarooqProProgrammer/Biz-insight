import { DashboardProvider } from "@/layout"
import {
    TrendingDown,
    CreditCard,
    ShoppingCart,
    Calendar,
    DollarSign,
    Filter,
    Download,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const expenseData = [
    { category: "Shopping", amount: 1250, color: "#2563eb" },
    { category: "Utilities", amount: 850, color: "#7c3aed" },
    { category: "Travel", amount: 650, color: "#db2777" },
    { category: "Food", amount: 450, color: "#ea580c" },
]

const recentExpenses = [
    {
        id: 1,
        title: "Office Supplies",
        category: "Shopping",
        amount: 299.99,
        date: "2024-03-01",
        paymentMethod: "Credit Card",
        status: "completed"
    },
    {
        id: 2,
        title: "Electricity Bill",
        category: "Utilities",
        amount: 150.50,
        date: "2024-03-02",
        paymentMethod: "Bank Transfer",
        status: "pending"
    },
    // Add more expenses as needed
]

export default function Expense() {
    return (
        <DashboardProvider>
            <div className="p-6 space-y-6">
                {/* Page Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Expense Management</h1>
                        <p className="text-gray-500 mt-1">Track and manage your expenses</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700">
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                            <Download className="w-4 h-4" />
                            Export
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Expenses */}
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <TrendingDown className="w-6 h-6 text-red-600" />
                            </div>
                            <span className="flex items-center text-red-500 text-sm">
                                <ArrowUpRight className="w-4 h-4" />
                                +8.4%
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm">Total Expenses</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$3,200.00</h3>
                        </div>
                    </div>

                    {/* Monthly Budget */}
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                            <span className="flex items-center text-green-500 text-sm">
                                <ArrowDownRight className="w-4 h-4" />
                                -2.3%
                            </span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm">Monthly Budget</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$5,000.00</h3>
                        </div>
                    </div>

                    {/* Pending Payments */}
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <Calendar className="w-6 h-6 text-yellow-600" />
                            </div>
                            <span className="text-sm text-gray-500">This Month</span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm">Pending Payments</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">05</h3>
                        </div>
                    </div>

                    {/* Budget Usage */}
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <CreditCard className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 text-sm">Budget Usage</p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">64%</h3>
                        </div>
                    </div>
                </div>

                {/* Charts and Recent Expenses */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Expense Distribution Chart */}
                    <div className="lg:col-span-2 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Expense Distribution</h2>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={expenseData}
                                        dataKey="amount"
                                        nameKey="category"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        fill="#8884d8"
                                    >
                                        {expenseData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {expenseData.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Expenses List */}
                    <div className="lg:col-span-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Expenses</h2>
                        <div className="space-y-4">
                            {recentExpenses.map((expense) => (
                                <div
                                    key={expense.id}
                                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <ShoppingCart className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">
                                                {expense.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {expense.category} • {expense.paymentMethod}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            ${expense.amount.toFixed(2)}
                                        </p>
                                        <p className="text-sm text-gray-500">{expense.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardProvider>
    )
}