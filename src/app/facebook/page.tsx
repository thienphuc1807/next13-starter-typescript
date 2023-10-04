"use client";
import { useRouter } from "next/navigation";

function Facebook() {
    const router = useRouter();
    return (
        <>
            <h1>This is Facebook</h1>
            <button type="button" onClick={() => router.push("/")}>
                Back to Home Page
            </button>
        </>
    );
}

export default Facebook;
