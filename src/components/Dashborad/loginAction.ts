"use server";


import { login } from "@/lib/apis";
import { cookies } from "next/headers";

interface LoginInput {
    email: string;
    password: string;
}

export async function loginAction({ email, password }: LoginInput) {
    try {
        const response = await login({ email, password });
console.log(response)
        // Set cookies server-side
        const cookieStore = cookies();
        if (response.data.accessToken) {
            (await cookieStore).set("accessToken", response.data.accessToken, {
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "none",
            });
        }
        if (response.refreshToken) {
            (await cookieStore).set("refreshToken", response.data.refreshToken, {
                httpOnly: true,
                secure: true,
                path: "/",
                sameSite: "none",
            });
        }

        return response;
    } catch (err) {
        console.error("Login action failed:", err);
        throw err;
    }
}