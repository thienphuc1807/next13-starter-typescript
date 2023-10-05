"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

function Facebook() {
    const router = useRouter();
    return (
        <>
            <h1>This is Facebook</h1>
            <Button
                variant="primary"
                type="button"
                onClick={() => router.push("/")}
            >
                Back to Home Page
            </Button>
        </>
    );
}

export default Facebook;
