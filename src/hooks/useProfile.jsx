import { useState, useEffect } from "react";
import {account} from "@/lib/appwrite";

export default function useProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await account.get();
                setProfile(profileData);
            } catch (err) {
                console.error("Error fetching profile:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { profile, loading, error };
}
