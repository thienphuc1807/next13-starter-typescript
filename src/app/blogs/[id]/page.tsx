function BlogDetail({ params }: { params: { id: number } }) {
    return <h1>This is blog detail number: {params.id}</h1>;
}

export default BlogDetail;
