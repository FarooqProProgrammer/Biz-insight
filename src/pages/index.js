import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { DashboardProvider } from "@/layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, MoreHorizontal, CheckCircle, XCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample invoice data
const invoices = [
  {
    id: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    id: "INV002",
    status: "Pending",
    method: "PayPal",
    amount: "$150.00",
  },
  {
    id: "INV003",
    status: "Overdue",
    method: "Bank Transfer",
    amount: "$320.00",
  },
  {
    id: "INV004",
    status: "Paid",
    method: "Credit Card",
    amount: "$450.00",
  },
];

// Helper function to render status icons
const getStatusIcon = (status) => {
  switch (status) {
    case "Paid":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "Pending":
      return <Clock className="h-4 w-4 text-amber-500" />;
    case "Overdue":
      return <XCircle className="h-4 w-4 text-red-500" />;
    default:
      return null;
  }
};

export default function Home() {
  return (
      <DashboardProvider>
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 lg:px-8 py-2 bg-gray-50 dark:bg-gray-900">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Dashboard</span>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-primary">Overview</span>
          </div>
        </div>

        {/* Table Container */}
        <div className="px-4 sm:px-6 lg:px-10 py-4">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">
                  <div className="flex items-center justify-between">
                    <span>Invoice</span>
                    <ArrowUpDown className="h-4 w-4 text-gray-400" />
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">
                  <div className="flex items-center justify-end">
                    <span>Amount</span>
                    <ArrowUpDown className="h-4 w-4 text-gray-400" />
                  </div>
                </TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                  <TableRow
                      key={invoice.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(invoice.status)}
                        <span>{invoice.status}</span>
                      </div>
                    </TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-right">{invoice.amount}</TableCell>
                    <TableCell className="text-center">
                      <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                        <MoreHorizontal className="h-5 w-5 text-gray-500" />
                      </button>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DashboardProvider>
  );
}
