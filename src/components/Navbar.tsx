import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

type NavbarProps = {
  navOpen: boolean;
};

export const Navbar = ({ navOpen }: NavbarProps) => {
    const activeBox = useRef<HTMLDivElement | null>(null);
    const lastActiveLink = useRef<HTMLAnchorElement | null>(null);

    const initActiveBox = () => {
        activeBox.current!.style.top = lastActiveLink.current!.offsetTop + "px";
        activeBox.current!.style.left =
            lastActiveLink.current!.offsetLeft + "px";
        activeBox.current!.style.width =
            lastActiveLink.current!.offsetWidth + "px";
        activeBox.current!.style.height =
            lastActiveLink.current!.offsetHeight + "px";
    };

    useEffect(initActiveBox, []);
    window.addEventListener("resize", initActiveBox);

    const activeCurrentLink = (event: any) => {
        lastActiveLink.current!.classList.remove("active");
        event.target.classList.add("active");
        lastActiveLink.current = event.target;

        activeBox.current!.style.top = event.target!.offsetTop + "px";
        activeBox.current!.style.left = event.target!.offsetLeft + "px";
        activeBox.current!.style.width = event.target!.offsetWidth + "px";
        activeBox.current!.style.height = event.target!.offsetHeight + "px";
    };

    const navItems = [
        {
            label: "Inicio",
            link: "#home",
            className: "nav-link active",
            ref: lastActiveLink,
        },
        {
            label: "Sobre mí",
            link: "#about",
            className: "nav-link",
        },
        {
            label: "Proyectos",
            link: "#work",
            className: "nav-link",
        },
        {
            label: "Contacto",
            link: "#contact",
            className: "nav-link contact",
        },
    ];

    return (
        <>
            <nav className={`navbar ${navOpen ? "active" : ""}`}>
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
                <div className="active-box" ref={activeBox}>
                </div>
            </nav>
        </>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};
