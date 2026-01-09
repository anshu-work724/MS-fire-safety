import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SERVICES = [
  {
    id: "ff-install",
    title: "Fire Fighting Systems Installation",
    short:
      "Design and install water-based and special-agent systems to reliably control and suppress fires.",
    where:
      "Warehouses, manufacturing plants, high-rise buildings, server rooms",
    standards:
      "NFPA 13, Local/National Building Code (NBC), ISO 6182 (where applicable)",
  },
  {
    id: "extinguishers",
    title: "Fire Extinguishers Supply, Refilling & Maintenance",
    short:
      "Supply correct extinguisher types, perform registration, refilling and scheduled maintenance to ensure readiness.",
    where: "Commercial premises, workshops, vehicles, plant floors",
    standards: "NFPA 10, Local regulations, Manufacturer specifications",
  },
  {
    id: "alarms",
    title: "Fire Alarm & Detection Systems",
    short:
      "Install and commission smoke, heat and multi-criteria detectors integrated with monitoring and alerting solutions.",
    where: "Offices, retail, industrial facilities, critical infrastructure",
    standards:
      "NFPA 72, Local/National Building Code (NBC), EN/ISO detection standards",
  },
  {
    id: "hydrant",
    title: "Fire Hydrant Systems",
    short:
      "Deliver reliable hydrant networks with pumps, valves and controls for manual and automatic response.",
    where:
      "Large campuses, refineries, industrial estates, high-rise developments",
    standards: "NFPA 24, Local hydrant codes, Pump standards (ISO/EN)",
  },
  {
    id: "audit-amc",
    title: "Fire Safety Audit & AMC",
    short:
      "Comprehensive audits, remedial action plans and Annual Maintenance Contracts to keep systems compliant and functional.",
    where:
      "Any commercial and industrial site requiring periodic compliance checks",
    standards: "Local codes, NFPA guidelines, ISO best practices",
  },
  {
    id: "industrial",
    title: "Industrial Fire Safety Solutions",
    short:
      "Custom-engineered safety systems including suppression, detection and process-specific fire protection.",
    where:
      "Chemical plants, power stations, heavy manufacturing, storage facilities",
    standards:
      "NFPA, API, Local industrial safety regulations, ISO standards for specific agents (e.g., ISO 14520)",
  },
];

const Services = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();

  return (
    <div className="container mx-auto px-4 py-12">
      <header
        ref={headerRef}
        className={`mb-12 text-center transition-all duration-700 ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="mb-4">Our Services</h1>
        <p className="text-base-content/80 mt-2 text-lg max-w-2xl mx-auto">
          Complete, code-compliant fire safety solutions tailored for commercial
          and industrial customers.
        </p>
      </header>

      <section
        ref={servicesRef}
        className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-200 ${
          servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {SERVICES.map((s) => (
          <article
            key={s.id}
            className="card bg-base-200 dark:bg-base-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-base-300 dark:border-base-300"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="rounded-full bg-primary/10 text-primary p-3">
                {/* simple SVG icon based on service id */}
                {s.id === "extinguishers" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 3l3 3-1 1-3-3v-1zM8 7v10a3 3 0 003 3h2a3 3 0 003-3V7"
                    />
                  </svg>
                )}

                {s.id === "ff-install" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 2v6m4 4H8l-2 6h12l-2-6z"
                    />
                  </svg>
                )}

                {s.id === "alarms" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 2v4m-4 0a4 4 0 108 0"
                    />
                  </svg>
                )}

                {s.id === "hydrant" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 3h12M6 21h12M12 3v18"
                    />
                  </svg>
                )}

                {s.id === "audit-amc" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4M7 20h10M7 4h10"
                    />
                  </svg>
                )}

                {s.id === "industrial" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 7h18M6 7v10M18 7v10"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-base-content/70 mt-1">{s.short}</p>
              </div>
            </div>

            <dl className="grid gap-2 text-sm text-base-content/80">
              <div>
                <dt className="font-medium">Where used</dt>
                <dd>{s.where}</dd>
              </div>
              <div>
                <dt className="font-medium">Compliance</dt>
                <dd>{s.standards}</dd>
              </div>
            </dl>

            <div className="mt-4 pt-4 border-t border-base-200 dark:border-base-300 flex items-center justify-between">
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="btn btn-sm btn-outline transition-all duration-300 hover:scale-105"
              >
                Request Quote
              </button>
              <a href="tel:+1234567890" className="text-sm text-primary hover:underline transition-all duration-200">
                Call us
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Services;
