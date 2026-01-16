import React, { useRef, useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import axiosInstance from "../utilities/axiosInstance";

const WHATSAPP_NUMBER = "8077688382"; // use digits only (country code + number)

const Contact = () => {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);
  const [headerRef, headerVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const showToast = (message) => {
    setToast(message);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(null), 5000);
  };

  const [submitting, setSubmitting] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("/prices.pdf");

  // Submit form to backend which will send email
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const phone = form.get("phone") || "";
    const message = form.get("message") || "";

    if (!name || !email || !phone) {
      showToast("Please provide name, email, and phone.");
      return;
    }

    const payload = {
      name,
      email,
      phone,
      message,
    };

    setSubmitting(true);
    try {
      const response = await axiosInstance.post("/api/contact", payload);
      showToast(response.data.message || "Inquiry submitted successfully.");
      e.target.reset();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to submit inquiry. Please try again.";
      console.error("Contact form error:", err);
      showToast(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const openWhatsApp = (preset) => {
    const text = encodeURIComponent(preset);
    const opened = window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
    if (opened) showToast("WhatsApp opened.");
    else showToast("WhatsApp could not be opened (popup blocked).");
  };
  // PDF price viewer
  const openPrices = (url = "/prices.pdf") => {
    setPdfUrl(url);
    setPdfOpen(true);
    setPdfLoading(true);
  };

  const closePdf = () => {
    setPdfOpen(false);
    setPdfLoading(false);
  };

  const onPdfClickOutside = (e) => {
    if (e.target.dataset?.role === "overlay") closePdf();
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <header
        ref={headerRef}
        className={`mb-8 text-center transition-all duration-700 ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="mb-4">Contact Us</h1>
        <p className="text-base-content/80 mt-2 text-lg">
          Phone:{" "}
          <a
            className="text-primary hover:underline transition-all duration-200"
            href="tel:+91-8077688382"
          >
            +91-8077688382
          </a>{" "}
          | Email:{" "}
          <a
            href="mailto:info@yourcompany.com"
            className="text-primary hover:underline transition-all duration-200"
          >
            info@yourcompany.com
          </a>
        </p>
      </header>

      <section
        ref={formRef}
        className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
          formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div>
          <h2 className="mb-4">Request a Site Visit</h2>
          <p className="text-base-content/85 mb-6">
            Schedule a site visit and we'll assess your needs and provide a
            tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hello, I would like to request a site visit for my facility."
                )
              }
              className="btn btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Request Site Visit
            </button>

            <a
              href="tel:+91-8077688382"
              className="btn btn-outline transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Call Now
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">
              Certifications & Approvals
            </h3>
            <ul className="list-disc list-inside text-base-content/85 space-y-2">
              <li>
                ISO Certification (specify ISO 9001/ISO 45001 as applicable)
              </li>
              <li>Government approvals for installations and services</li>
              <li>Fire department norms compliance and liaison</li>
              <li>Required business licenses and contractor permits</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-4">Enquiry Form</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium">Name *</label>
              <input
                name="name"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                name="email"
                type="email"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone *</label>
              <input
                name="phone"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                className="textarea textarea-bordered w-full"
                placeholder="Tell us a bit about the site or enquiry"
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="btn btn-primary flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={submitting}
                aria-busy={submitting}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Request"
                )}
              </button>

              <button
                type="button"
                onClick={() => openPrices()}
                className="btn btn-outline transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Get prices
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hello, I would like to enquire about your services."
        )}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-30"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .08 4.96.08 11.09c0 2.04.54 4.03 1.57 5.78L0 24l7.4-1.93A11.94 11.94 0 0012 22.18C18.627 22.18 23.92 17.22 23.92 11.09c0-1.97-.5-3.83-1.4-5.61zM12 20.18c-1.7 0-3.36-.44-4.82-1.27L5 18l1.44-1.24A8.92 8.92 0 013.08 11.09C3.08 6.1 7.1 2.18 12 2.18s8.92 3.92 8.92 8.91S16.9 20.18 12 20.18z" />
        </svg>
      </a>

      {/* PDF modal */}
      {pdfOpen && (
        <div
          data-role="overlay"
          onClick={onPdfClickOutside}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-11/12 md:w-3/4 lg:w-2/3 h-4/5 rounded shadow-lg overflow-hidden relative"
          >
            <button
              aria-label="Close prices"
              onClick={closePdf}
              className="absolute right-3 top-3 btn btn-ghost btn-sm"
            >
              ✕
            </button>

            {pdfLoading && (
              <div className="h-full flex items-center justify-center">
                <svg
                  className="animate-spin h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              </div>
            )}

            <iframe
              src={pdfUrl}
              title="Prices"
              onLoad={() => setPdfLoading(false)}
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

      {/* Toast confirmation */}
      {toast && (
        <div className="fixed left-6 bottom-6 bg-base-100 shadow-md border rounded-lg p-4 flex items-center gap-3 z-50 animate-fade-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm">{toast}</div>
          <button
            onClick={() => setToast(null)}
            className="ml-3 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
