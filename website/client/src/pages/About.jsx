import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
// Fire Alarm Images
import fireAlarmDetection from "../assets/images/Fire Alarm installation - Fire detection.jpg";
import fireAlarmSmoke from "../assets/images/Fire alarm installation - Smoke detection system.jpg";
import fireAlarmBuzzer from "../assets/images/Fire alarm installation- alarm buzzer.jpg";
// Hydrant System Images
import hydrantSystem1 from "../assets/images/Fire Hydrant System 1.jpg";
import hydrantWaterOutlet from "../assets/images/Hydrant system - water outlet.jpg";
import hydrantSystem from "../assets/images/Hydrant system.jpg";
// Fire Extinguisher Images
import extinguisherAuto from "../assets/images/fire extinguisher - auto setup.jpg";
import extinguisherGas from "../assets/images/fire extinguisher setup - gas extinguishers.jpg";
import extinguisher from "../assets/images/fire extinguisher.jpg";

const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [overviewRef, overviewVisible] = useScrollAnimation();
  const [certRef, certVisible] = useScrollAnimation();
  const [galleryRef, galleryVisible] = useScrollAnimation();
  const [whyRef, whyVisible] = useScrollAnimation();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <header
        ref={headerRef}
        className={`mb-12 text-center transition-all duration-700 ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="mb-4">About Us</h1>
        <p className="text-base-content/80 max-w-2xl mx-auto text-lg">
          Your trusted partner in fire safety solutions with years of expertise
          and commitment to excellence
        </p>
      </header>

      {/* Company Overview */}
      <section
        ref={overviewRef}
        className={`mb-20 transition-all duration-700 delay-100 ${
          overviewVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="mb-8 text-center">
          Company Overview
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-base-300 dark:border-base-300">
            <div className="flex items-center gap-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold">Years of Experience</h3>
            </div>
            <p className="text-base-content/85">
              Over <strong>15+ years</strong> of dedicated service in the fire
              safety industry, protecting commercial and industrial facilities
              across the region.
            </p>
          </div>

          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-base-300 dark:border-base-300">
            <div className="flex items-center gap-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <h3 className="text-xl font-semibold">Nature of Work</h3>
            </div>
            <p className="text-base-content/85">
              Specialized in <strong>Industrial</strong>,{" "}
              <strong>Commercial</strong>, and <strong>Residential</strong> fire
              safety installations, maintenance, and compliance services.
            </p>
          </div>

          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-base-300 dark:border-base-300">
            <div className="flex items-center gap-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-xl font-semibold">
                Local Authority Approvals
              </h3>
            </div>
            <p className="text-base-content/85">
              Fully licensed and approved by local authorities for fire safety
              installations, inspections, and compliance certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section
        ref={certRef}
        className={`mb-20 transition-all duration-700 delay-200 ${
          certVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="mb-8 text-center">
          Certifications & Compliance
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Government Approvals */}
          <div className="card p-6 shadow-md border border-base-300 dark:border-base-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Government Approvals</h3>
            </div>
            <p className="text-base-content/80 text-sm text-center">
              Licensed contractor with all required government approvals for
              fire safety installations and services.
            </p>
          </div>

          {/* ISO / BIS / NFPA Compliance */}
          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-md border border-base-300 dark:border-base-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">
                ISO / BIS / NFPA Compliance
              </h3>
            </div>
            <p className="text-base-content/80 text-sm text-center">
              Compliant with ISO standards, BIS certifications, and NFPA codes
              ensuring international quality standards.
            </p>
          </div>

          {/* Fire Department Registrations */}
          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-md border border-base-300 dark:border-base-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">
                Fire Department Registrations
              </h3>
            </div>
            <p className="text-base-content/80 text-sm text-center">
              Registered with local fire departments and authorized to conduct
              inspections and issue compliance certificates.
            </p>
          </div>
        </div>
      </section>

      {/* Work Gallery / Project Examples */}
      <section
        ref={galleryRef}
        className={`mb-20 transition-all duration-700 delay-300 ${
          galleryVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Work Gallery / Project Examples
        </h2>

        {/* Fire Alarm Installations */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            Fire Alarm Installations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                img: fireAlarmDetection,
                title: "Fire Detection System Installation",
              },
              {
                img: fireAlarmSmoke,
                title: "Smoke Detection System Installation",
              },
              { img: fireAlarmBuzzer, title: "Fire Alarm Buzzer Installation" },
            ].map((item, index) => (
              <div
                key={index}
                className="card bg-base-200 dark:bg-base-300 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-base-content/70">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hydrant Systems */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            Hydrant Systems
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                img: hydrantSystem1,
                title: "Fire Hydrant System Installation",
              },
              { img: hydrantWaterOutlet, title: "Hydrant Water Outlet Setup" },
              { img: hydrantSystem, title: "Complete Hydrant System" },
            ].map((item, index) => (
              <div
                key={index}
                className="card bg-base-200 dark:bg-base-300 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-base-content/70">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extinguisher Setups */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 2v6M6 8a6 6 0 1012 0M8 14h8"
              />
            </svg>
            Extinguisher Setups
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                img: extinguisherAuto,
                title: "Automatic Fire Extinguisher Setup",
              },
              {
                img: extinguisherGas,
                title: "Gas Fire Extinguisher Installation",
              },
              { img: extinguisher, title: "Fire Extinguisher Installation" },
            ].map((item, index) => (
              <div
                key={index}
                className="card bg-base-200 dark:bg-base-300 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-base-content/70">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        ref={whyRef}
        className={`mb-8 transition-all duration-700 delay-400 ${
          whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="mb-8 text-center">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M5.5 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Trained Technicians
                </h3>
                <p className="text-base-content/85 text-sm">
                  Our team consists of certified and experienced technicians who
                  undergo regular training to stay updated with the latest fire
                  safety standards and technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-base-300 dark:border-base-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Compliance-Focused
                </h3>
                <p className="text-base-content/85 text-sm">
                  We ensure all installations and services meet local fire
                  codes, government regulations, and international standards.
                  Compliance is at the core of everything we do.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 dark:bg-base-200 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-base-300 dark:border-base-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Timely Inspection & Support
                </h3>
                <p className="text-base-content/85 text-sm">
                  We provide prompt inspection services and ongoing support to
                  ensure your fire safety systems are always in optimal working
                  condition. Quick response times guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
