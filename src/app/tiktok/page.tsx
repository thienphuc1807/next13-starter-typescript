"use client";
import { useRouter } from "next/navigation";
function Tiktok() {
    const router = useRouter();
    const handleRouter = () => {
        router.push("/");
    };

    return (
        <>
            <h1>This is TikTok</h1>
            <button onClick={() => handleRouter()}>Back to Home Page</button>
        </>
    );
}

export default Tiktok;
