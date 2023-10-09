"use client";
// import styles from "./page.module.css";
// import Link from "next/link";
// import style1 from "@/styles/app.module.css";
// import style2 from "@/styles/cikey.module.css";
import Table from "@/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("http://localhost:8000/blogs");
    //         const blogs = await response.json();
    //         console.log(blogs);
    //     };
    //     fetchData();
    // }, []);

    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        " http://localhost:8000/blogs",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    if (isLoading) {
        return <div>...loading</div>;
    }

    return (
        <main>
            <div>
                {data?.length}
                <p>Hello CiKey welcome to NextJS 13</p>
                {/* <Link href="/facebook" className={style1["red"]}>
                    <span className={style2["red"]}>Facebook</span>
                </Link>
                <Link href="/tiktok">Tiktok</Link>
                <Link href="/youtube">Youtube</Link> */}
                <Table blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
            </div>
        </main>
    );
}
