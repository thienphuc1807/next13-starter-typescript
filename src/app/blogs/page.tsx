"use client";
import Table from "@/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

function Blogs() {
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
        return <div className="mt-3">...loading</div>;
    }
    return (
        <div className="mt-3">
            <Table blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
        </div>
    );
}

export default Blogs;
