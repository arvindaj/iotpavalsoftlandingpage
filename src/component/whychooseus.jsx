import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/whychooseus.css"; // 👈 custom CSS

export default function WhyChooseUs() {
  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5 text-center bg-white">
      <div className="container">
        <h2 
          className="why-heading"
          data-aos="fade-up"
        >
          Why Choose Us as Your IoT Service Provider
        </h2>
        <p 
          className="why-desc text-muted mx-auto mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Seamlessly integrate various ERP modules at the departmental level.
          Opt custom ERP implementation that is intra-departmental and applied at
          individual levels. Ensure improved forecasting and higher transparency
          for taking beneficial business decisions achieving quality
          organisational benchmarks.
        </p>
      </div>
    </section>
  );
}
