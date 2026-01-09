import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Main content - single page sections */}
      <main className="min-h-[70vh] container mx-auto px-4 pt-28 pb-12">
        <section id="home" className="scroll-mt-28 mb-16 md:mb-24">
          <Home />
        </section>

        <section id="services" className="scroll-mt-28 mb-16 md:mb-24">
          <Services />
        </section>

        <section id="about" className="scroll-mt-28 mb-16 md:mb-24">
          <About />
        </section>

        <section id="contact" className="scroll-mt-28 mb-16 md:mb-24">
          <Contact />
        </section>
      </main>

      {/* Simple footer */}
      <footer className="bg-base-200 dark:bg-base-200 py-8 text-center transition-colors duration-300 border-t border-base-300 dark:border-base-300">
        <p className="text-sm text-base-content/70">
          © {new Date().getFullYear()} My Website
        </p>
      </footer>
    </>
  );
}
