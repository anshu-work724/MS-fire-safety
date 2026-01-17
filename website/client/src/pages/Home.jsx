import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import heroVideo from "../assets/video/hero.mp4.mp4";

const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [heroRef, heroVisible] = useScrollAnimation();
  const [introRef, introVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [whyRef, whyVisible] = useScrollAnimation();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* HERO WITH VIDEO BACKGROUND */}
      <section ref={heroRef} className="hero-video-section">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50 transition-colors duration-300" />

        {/* Hero Content */}
        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4 transition-opacity duration-700 ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="mb-6 text-white drop-shadow-lg">
            Complete Fire Safety Solutions for Industries & Commercial Buildings
          </h1>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90 drop-shadow-md">
            We are <strong>SafeFire Solutions</strong> — trusted fire safety
            experts with over <strong>15 years</strong> of experience protecting
            commercial and industrial sites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+1234567890"
              className="btn btn-primary flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              aria-label="Call now"
            >
              {/* Phone icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h2l2 5-1.5 1.5A11 11 0 0016.5 21l1.5-1.5L21 21v-2a16 16 0 00-18-14z"
                />
              </svg>
              Call Now
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="btn btn-outline text-white border-white hover:bg-white hover:text-base-content flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              aria-label="Get a quote"
            >
              {/* Mail icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8z"
                />
              </svg>
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Short intro */}
      <section
        ref={introRef}
        className={`mt-16 text-center transition-all duration-700 delay-100 ${
          introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="max-w-3xl mx-auto text-base-content/80 text-lg">
          From risk assessments and code-compliant installations to regular
          maintenance and staff training, we provide end-to-end fire safety
          services tailored for the unique needs of industry and commerce.
        </p>
      </section>

      {/* Key services */}
      <section
        ref={servicesRef}
        className={`mt-20 transition-all duration-700 delay-200 ${
          servicesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="mb-8 text-center">Key Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-base-300 dark:border-base-300">
            <div className="flex items-center gap-4 mb-4">
              {/* Fire extinguisher icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 2v6M6 8a6 6 0 1012 0M8 14h8"
                />
              </svg>
              <h3 className="text-lg font-medium">
                Fire Extinguisher Supply & Servicing
              </h3>
            </div>
            <p className="text-sm text-base-content/70">
              Supply, install and maintain extinguishers to meet regulations and
              ensure readiness.
            </p>
          </div>

          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-base-300 dark:border-base-300">
            <div className="flex items-center gap-4 mb-4">
              {/* Alarm icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-orange-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 2v4M7 3v2m10-2v2M5 20h14l1-5H4l1 5z"
                />
              </svg>
              <h3 className="text-lg font-medium">Alarm & Detection Systems</h3>
            </div>
            <p className="text-sm text-base-content/70">
              Design and deploy smoke, heat and gas detectors integrated with
              monitoring and alerting.
            </p>
          </div>

          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-base-300 dark:border-base-300">
            <div className="flex items-center gap-4 mb-4">
              {/* Sprinkler icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 2v6M8 8l4 4 4-4M4 18h16M6 14v4M18 14v4"
                />
              </svg>
              <h3 className="text-lg font-medium">Suppression Systems</h3>
            </div>
            <p className="text-sm text-base-content/70">
              Automatic sprinkler and FM-200/clean agent systems for
              mission-critical environments.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us & mission */}
      <section
        ref={whyRef}
        className={`mt-20 grid md:grid-cols-2 gap-8 items-start transition-all duration-700 delay-300 ${
          whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div>
          <h2 className="mb-6">Why choose us?</h2>
          <ul className="space-y-4 text-base-content/85">
            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong>Certified technicians</strong> with industry experience
                and regulatory knowledge.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong>Fast response</strong> for installation, inspection and
                emergency support.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong>Compliance-first approach</strong> to meet local and
                international fire codes.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6">Mission & Vision</h2>
          <p className="text-base-content/85 mb-4">
            Our mission is to protect people, assets and operations through
            reliable fire safety engineering, clear processes, and ongoing
            training.
          </p>
          <p className="text-base-content/85 mb-6">
            <strong>Vision:</strong> To be the leading partner for resilient
            fire safety in commercial and industrial environments, known for
            technical excellence and trust.
          </p>

          <div className="mt-6 bg-base-200 dark:bg-base-200 p-6 rounded-lg transition-all duration-300 hover:shadow-md border border-base-300 dark:border-base-300">
            <h3 className="font-semibold text-lg mb-2">Safety commitment</h3>
            <p className="text-base-content/85">
              We maintain strict quality controls, documented procedures, and
              continuous staff training to ensure every job meets the highest
              safety standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
