import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "@/context/fetchSession";
import { account } from "@/lib/appwrite";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
    // ✅ Initialize React Hook Form

    const { login } = useSession();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // ✅ Form Submit Handler
    const onSubmit = async (data) => {
        console.log("Form Data:", data);

        const res = await login(data?.email, data?.password);
        console.log(res)

    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-white">
            <div className="max-w-[400px] w-full p-8 bg-white shadow-lg rounded-lg border border-gray-300">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Login</h2>

                {/* ✅ Attach handleSubmit to form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="grid w-full gap-4">
                        {/* Email Input */}
                        <div>
                            <Label htmlFor="email" className="text-gray-700 font-medium">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                {...register("email", { required: "Email is required" })}
                                className="mt-1 px-4 py-2 w-full rounded-md border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div>
                            <Label htmlFor="password" className="text-gray-700 font-medium">
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                {...register("password", { required: "Password is required" })}
                                className="mt-1 px-4 py-2 w-full rounded-md border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 py-2 text-lg font-semibold bg-black text-white rounded-md shadow-md transition-all duration-300 hover:bg-gray-800"
                        >
                            Login
                        </button>
                        <Link href={"/auth/forgot-password"} className="underline text-end">Forgot Password</Link>
                    </div>
                </form>

                <p className="text-gray-600 text-sm text-center mt-4">
                    Don't have an account?{" "}
                    <Link href="#!" className="text-black font-semibold underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
