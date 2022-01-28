
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar bg="light" variant="light" expand="md" style={{ marginBottom: '30px' }}>
            <Navbar.Brand style={{ marginLeft: '30px', color: 'gray' }} href="#home">Project</Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto" style={{ marginRight: '30px' }}>
                    <Link className="nav-link" to="/">Xxx Xxxx</Link>
                    <Link className="nav-link" to="/">Xxx Xxxxx</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation