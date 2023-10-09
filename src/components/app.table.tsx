"use client";
import { Table, Button } from "react-bootstrap";
import AddNewModal from "./add.modal";
import UpdateModal from "./update.modal";
import { useState } from "react";
import Link from "next/link";
interface IProps {
    blogs: IBlog[];
}
function AppTable(props: IProps) {
    const { blogs } = props;
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    return (
        <>
            <div className="mb-3 d-flex justify-content-between">
                <h3>Blogs</h3>
                <Button variant="secondary" onClick={() => setShowModal(true)}>
                    Add new
                </Button>
            </div>
            <AddNewModal showModal={showModal} setShowModal={setShowModal} />
            <UpdateModal
                showEditModal={showEditModal}
                setShowEditModal={setShowEditModal}
                blog={blog}
                setBlog={setBlog}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary"
                                        href={`/blogs/${item.id}`}
                                    >
                                        View
                                    </Link>
                                    <Button
                                        variant="warning"
                                        className="mx-3"
                                        onClick={() => {
                                            setBlog(item);
                                            setShowEditModal(true);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default AppTable;
