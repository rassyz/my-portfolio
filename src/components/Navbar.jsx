/**
 * @copyright 2025 rassyz
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    const activeLink = lastActiveLink.current;
    const box = activeBox.current;

    // Prevent error if the elements are not ready yet
    if (!activeLink || !box) return;

    box.style.top = activeLink.offsetTop + "px";
    box.style.left = activeLink.offsetLeft + "px";
    box.style.width = activeLink.offsetWidth + "px";
    box.style.height = activeLink.offsetHeight + "px";
  };

  useEffect(() => {
    // Wait until the DOM elements are ready
    requestAnimationFrame(() => {
      initActiveBox();
    });

    const handleResize = () => {
      initActiveBox();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeCurrentLink = (event) => {
    const clickedLink = event.currentTarget;
    const box = activeBox.current;

    if (!clickedLink || !box) return;

    // Remove active class from previous link
    lastActiveLink.current?.classList.remove("active");

    // Add active class to clicked link
    clickedLink.classList.add("active");

    // Store current active link
    lastActiveLink.current = clickedLink;

    // Move active box
    box.style.top = clickedLink.offsetTop + "px";
    box.style.left = clickedLink.offsetLeft + "px";
    box.style.width = clickedLink.offsetWidth + "px";
    box.style.height = clickedLink.offsetHeight + "px";
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Project",
      link: "#work",
      className: "nav-link",
    },
    // {
    //   label: "Review",
    //   link: "#review",
    //   className: "nav-link",
    // },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
