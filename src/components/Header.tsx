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
                    <Link className="navbar-brand" href="/">
                        Web Test
                    </Link>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="/youtube">Pricing</Nav.Link> */}
                        <Link href={"/facebook"} className="nav-link">
                            Facebook
                        </Link>
                        <Link href={"/tiktok"} className="nav-link">
                            Tiktok
                        </Link>
                        <Link href={"/youtube"} className="nav-link">
                            Youtube
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
