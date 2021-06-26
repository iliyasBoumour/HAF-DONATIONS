import React from "react";
import classnames from "classnames";
import "./navbar.css";
import { Link } from "react-scroll";
import { Link as RLink } from "react-router-dom";
import { RiShoppingCartLine, RiUserLine } from "react-icons/ri";
import NotificationBadge, { Effect } from "react-notification-badge";
import { Collapse, Navbar, NavItem, Nav, Container } from "reactstrap";
import { useSelector } from "react-redux";

const Index = ({ location }) => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const { cart } = useSelector((state) => state.cartReducers);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const scroll = {
    className: "nav-link",
    activeClass: "active",
    smooth: true,
    spy: true,
    offset: -110,
    duration: 500,
  };

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container className="justify-content-between">
        <div className="navbar-translate">
          <RLink
            data-placement="bottom"
            className="text-gradient navbar-brand"
            to="/"
          >
            HAF DONATIONS
          </RLink>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler ", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              {location.pathname === "/" ? (
                <Link {...scroll} to="home">
                  Home
                </Link>
              ) : (
                <RLink className="nav-link" to="/">
                  Home
                </RLink>
              )}
            </NavItem>
            <NavItem>
              {location.pathname === "/" ? (
                <Link {...scroll} to="about">
                  About
                </Link>
              ) : (
                <RLink
                  className="nav-link"
                  to={{
                    pathname: "/",
                    id: "about",
                  }}
                >
                  About
                </RLink>
              )}
            </NavItem>
            <NavItem>
              <RLink className="nav-link" to="/projects">
                projects
              </RLink>
            </NavItem>
            <NavItem>
              {location.pathname === "/" ? (
                <Link {...scroll} to="partners">
                  Partners
                </Link>
              ) : (
                <RLink
                  className="nav-link"
                  to={{
                    pathname: "/",
                    id: "partners",
                  }}
                >
                  Partners
                </RLink>
              )}
            </NavItem>
            <NavItem>
              {location.pathname === "/" ? (
                <Link {...scroll} to="contact">
                  Contact
                </Link>
              ) : (
                <RLink
                  className="nav-link"
                  to={{
                    pathname: "/",
                    id: "contact",
                  }}
                >
                  Contact
                </RLink>
              )}
            </NavItem>
            <NavItem>
              <RLink className="nav-link" to="/cart">
                <NotificationBadge count={cart.length} effect={Effect.SCALE} />
                <RiShoppingCartLine fontSize="1.4rem" />
              </RLink>
            </NavItem>
            <NavItem>
              <RLink className="nav-link" to="/login">
                <RiUserLine fontSize="1.4rem" />
              </RLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Index;
