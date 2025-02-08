import {useEffect, useState} from "react"
import {
    User,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Calendar,
    Camera,
    Edit3,
    Lock,
    Bell,
    Shield,
    CreditCard,
    Save
} from "lucide-react"
import {DashboardProvider} from "@/layout";
import useProfile from "@/hooks/useProfile";

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false)
    const [image, setImage] = useState("/placeholder-avatar.jpg") // Replace with actual image path

    const {profile} = useProfile();


    useEffect(() => {
        console.log(profile)
    }, [profile]);

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <DashboardProvider>
        <div className="max-w-7xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Profile Settings</h1>
                <p className="text-gray-500 mt-1">Manage your account settings and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                                    <img
                                        src={image}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <label className="absolute bottom-0 right-0 p-2 bg-primary rounded-full cursor-pointer shadow-lg hover:bg-primary/90 transition">
                                    <Camera className="w-4 h-4 text-white" />
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>

                            <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">John Doe</h2>
                            <p className="text-gray-500">Senior Developer</p>

                            <div className="mt-6 w-full space-y-4">
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <Mail className="w-4 h-4" />
                                    <span>john.doe@example.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <Phone className="w-4 h-4" />
                                    <span>+1 234 567 890</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-4 h-4" />
                                    <span>New York, USA</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>Joined January 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className="flex items-center gap-2 text-primary hover:text-primary/90"
                            >
                                <Edit3 className="w-4 h-4" />
                                {isEditing ? 'Cancel' : 'Edit'}
                            </button>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="John"
                                        disabled={!isEditing}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800
                                        focus:ring-2 focus:ring-primary/50 disabled:bg-gray-50 dark:disabled:bg-gray-800"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Doe"
                                        disabled={!isEditing}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800
                                        focus:ring-2 focus:ring-primary/50 disabled:bg-gray-50 dark:disabled:bg-gray-800"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="john.doe@example.com"
                                        disabled={!isEditing}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800
                                        focus:ring-2 focus:ring-primary/50 disabled:bg-gray-50 dark:disabled:bg-gray-800"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        defaultValue="+1 234 567 890"
                                        disabled={!isEditing}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800
                                        focus:ring-2 focus:ring-primary/50 disabled:bg-gray-50 dark:disabled:bg-gray-800"
                                    />
                                </div>
                            </div>

                            {isEditing && (
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                                    >
                                        <Save className="w-4 h-4" />
                                        Save Changes
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Quick Settings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <button className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium text-gray-900 dark:text-white">Security Settings</h4>
                                <p className="text-sm text-gray-500">Password and authentication</p>
                            </div>
                        </button>

                        <button className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                                <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium text-gray-900 dark:text-white">Notifications</h4>
                                <p className="text-sm text-gray-500">Manage your notifications</p>
                            </div>
                        </button>

                        <button className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                            <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                                <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium text-gray-900 dark:text-white">Privacy</h4>
                                <p className="text-sm text-gray-500">Manage your privacy settings</p>
                            </div>
                        </button>

                        <button className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                                <CreditCard className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium text-gray-900 dark:text-white">Billing</h4>
                                <p className="text-sm text-gray-500">Manage billing and payments</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        </DashboardProvider>

)
}