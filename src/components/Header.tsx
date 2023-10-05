"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="/youtube">Pricing</Nav.Link>
                        {/* <Link href="/tiktok"><Nav.Link>Tiktok</Nav.Link></Link>
                        <Link href="/youtube"><Nav.Link>Youtube</Nav.Link></Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
