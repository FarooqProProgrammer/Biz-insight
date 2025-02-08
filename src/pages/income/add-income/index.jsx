import { DashboardProvider } from "@/layout"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Calendar, DollarSign, Users, FileText, Tag, Clock, Save, X } from "lucide-react"

// Form validation schema
const schema = yup.object({
    amount: yup.number().positive().required("Amount is required"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("Category is required"),
    date: yup.date().required("Date is required"),
    client: yup.string().required("Client name is required"),
    paymentMethod: yup.string().required("Payment method is required"),
}).required()

export default function AddIncome() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log(data)
            reset()
            // Show success toast here
        } catch (error) {
            // Show error toast here
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <DashboardProvider>
            <div className="p-6 max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Add New Income</h1>
                    <p className="text-gray-500 mt-1">Record a new income transaction</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Amount Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                Amount
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="number"
                                    step="0.01"
                                    {...register("amount")}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 
                                    ${errors.amount ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}
                                    bg-white dark:bg-gray-900`}
                                    placeholder="0.00"
                                />
                            </div>
                            {errors.amount && (
                                <p className="text-sm text-red-500">{errors.amount.message}</p>
                            )}
                        </div>

                        {/* Date Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                Date
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="date"
                                    {...register("date")}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 
                                    ${errors.date ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}
                                    bg-white dark:bg-gray-900`}
                                />
                            </div>
                            {errors.date && (
                                <p className="text-sm text-red-500">{errors.date.message}</p>
                            )}
                        </div>

                        {/* Client Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                Client
                            </label>
                            <div className="relative">
                                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="text"
                                    {...register("client")}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 
                                    ${errors.client ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}
                                    bg-white dark:bg-gray-900`}
                                    placeholder="Client name"
                                />
                            </div>
                            {errors.client && (
                                <p className="text-sm text-red-500">{errors.client.message}</p>
                            )}
                        </div>

                        {/* Category Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                Category
                            </label>
                            <div className="relative">
                                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <select
                                    {...register("category")}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 
                                    ${errors.category ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}
                                    bg-white dark:bg-gray-900`}
                                >
                                    <option value="">Select category</option>
                                    <option value="consulting">Consulting</option>
                                    <option value="services">Services</option>
                                    <option value="products">Products</option>
                                    <option value="subscription">Subscription</option>
                                </select>
                            </div>
                            {errors.category && (
                                <p className="text-sm text-red-500">{errors.category.message}</p>
                            )}
                        </div>

                        {/* Payment Method */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                Payment Method
                            </label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <select
                                    {...register("paymentMethod")}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 
                                    ${errors.paymentMethod ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}
                                    bg-white dark:bg-gray-900`}
                                >
                                    <option value="">Select payment method</option>
                                    <option value="bank_transfer">Bank Transfer</option>
                                    <option value="cash">Cash</option>
                                    <option value="credit_card">Credit Card</option>
                                    <option value="paypal">PayPal</option>
                                </select>
                            </div>
                            {errors.paymentMethod && (
                                <p className="text-sm text-red-500">{errors.paymentMethod.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Description Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            Description
                        </label>
                        <div className="relative">
                            <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                            <textarea
                                {...register("description")}
                                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/50 
                                ${errors.description ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'}
                                bg-white dark:bg-gray-900`}
                                rows="4"
                                placeholder="Enter description"
                            />
                        </div>
                        {errors.description && (
                            <p className="text-sm text-red-500">{errors.description.message}</p>
                        )}
                    </div>

                    {/* Form Actions */}
                    <div className="flex items-center gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-white 
                            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'}`}
                        >
                            <Save className="w-4 h-4" />
                            {isSubmitting ? 'Saving...' : 'Save Income'}
                        </button>
                        <button
                            type="button"
                            onClick={() => reset()}
                            className="flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-200
                            dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
                        >
                            <X className="w-4 h-4" />
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </DashboardProvider>
    )
}