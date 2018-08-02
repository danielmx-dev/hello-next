import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';


const linkStyle = {
  marginRight: 15,
}

const Header = () => (
  <div>
    <Navbar color="light" light expand="md">
      <Container>
        <Link href="/" passHref>
          <NavbarBrand>Home</NavbarBrand>
        </Link>
        <NavbarToggler onClick={() => {}} />
        <Collapse isOpen={false} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/about" passHref>
                <NavLink>About</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
)

export default Header