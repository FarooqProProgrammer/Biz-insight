import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { account, generateRandomId } from "@/lib/appwrite";
import { faker } from "@faker-js/faker";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

// ✅ Validation Schema using Yup
const schema = yup.object().shape({
    name: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Register = () => {
    // ✅ React Hook Form Setup


    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {
        const promise = account.create(generateRandomId(10), data?.email, data?.password, data?.name);
        promise.then(function (response) {
            console.log(response);

            toast.success("User Register Success")
            reset()

            router.push("/auth/login")

        }, function (error) {
            console.log(error);
        });
        console.log(data);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-white">
            <div className="max-w-[400px] w-full p-8 bg-white shadow-lg rounded-lg border border-gray-300">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="grid w-full gap-4">
                        {/* Full Name */}
                        <div>
                            <Label htmlFor="name" className="text-gray-700 font-medium">
                                Full Name
                            </Label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                {...register("name")}
                                className="mt-1 px-4 py-2 w-full rounded-md border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="text-gray-700 font-medium">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className="mt-1 px-4 py-2 w-full rounded-md border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <Label htmlFor="password" className="text-gray-700 font-medium">
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Create a password"
                                {...register("password")}
                                className="mt-1 px-4 py-2 w-full rounded-md border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-4 py-2 text-lg font-semibold bg-black text-white rounded-md shadow-md transition-all duration-300 hover:bg-gray-800"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <p className="text-gray-600 text-sm text-center mt-4">
                    Already have an account?{" "}
                    <a href="#!" className="text-black font-semibold underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
