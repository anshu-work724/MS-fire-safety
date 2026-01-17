import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import logoImg from "../assets/Logo/logo.png.png";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  // Observe sections to highlight the active nav item
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      Boolean,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible in the viewport
        let maxVisible = 0;
        let activeSection = "home";

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleRatio = entry.intersectionRatio;
            if (visibleRatio > maxVisible) {
              maxVisible = visibleRatio;
              activeSection = entry.target.id;
            }
          }
        });

        // Also check all sections to find the one currently in view
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const isInView =
            rect.top <= window.innerHeight * 0.3 &&
            rect.bottom >= window.innerHeight * 0.3;
          if (isInView) {
            activeSection = section.id;
          }
        });

        setActive(activeSection);
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));

    // Also handle scroll events for better accuracy
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-1 right-1 top-1 z-40 transition-all duration-300">
      <div className="navbar-glass rounded-lg shadow-md border-b border-base-300/40 dark:border-base-200/40 backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 dark:from-base-300/10 dark:to-base-300/5">
        <div className="navbar container mx-auto px-4 py-2">
          <div className="navbar-start">
            <div className="lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="btn btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>

              {open && (
                <ul className="menu menu-sm dropdown-content navbar-glass rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-300/40 dark:border-base-200/40 backdrop-blur-md">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={`transition-all duration-200 px-3 py-2 rounded-md ${
                          active === item.id
                            ? "text-primary font-semibold bg-primary/10"
                            : "hover:text-primary hover:bg-base-200 dark:hover:bg-base-300"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              onClick={() => scrollTo("home")}
              className="btn btn-ghost p-0 h-auto w-auto hover:bg-transparent transition-opacity duration-200 hover:opacity-80"
              aria-label="Home"
            >
              <img
                src={logoImg}
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </button>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`transition-all duration-200 ${
                      active === item.id
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-sm btn-circle"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
