"use client";
import Link from "next/link";
import useSWR, { Fetcher } from "swr";

function BlogDetail({ params }: { params: { id: number } }) {
    // const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const fetcher: Fetcher<IBlog, string> = (url: string) =>
        fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    if (isLoading) {
        return <div className="my-4">Loading ...</div>;
    }

    return (
        <div className="my-4">
            <h3>Blog number: {params.id}</h3>
            <h4>Title: {data?.title}</h4>
            <h5>Author : {data?.author}</h5>
            <p>{data?.content}</p>
            <Link href="/blogs" className="btn btn-primary">
                Go back
            </Link>
        </div>
    );
}

export default BlogDetail;
