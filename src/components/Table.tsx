"use client";
import { Table, Button } from "react-bootstrap";
import ModalStaticBackdrop from "./Modal";
import { useState } from "react";
interface IProps {
    blogs: IBlog[];
}
function AppTable(props: IProps) {
    const { blogs } = props;
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <>
            <div className="mb-3 d-flex justify-content-between">
                <h3>Blogs</h3>
                <Button variant="secondary" onClick={() => setShowModal(true)}>
                    Add new
                </Button>
            </div>
            <ModalStaticBackdrop
                showModal={showModal}
                setShowModal={setShowModal}
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
                    {blogs?.map((blog) => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant="warning" className="mx-3">
                                        Edit
                                    </Button>
                                    <Button variant="danger">View</Button>
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
