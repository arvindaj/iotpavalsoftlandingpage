import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/whychooseus.css"; // 👈 new CSS file

export default function WhyChooseUs() {
  return (
    <section className="py-5 text-center bg-white">
      <div className="container">
        <h2 className="why-heading">
          Why Choose Us as Your IoT Service Provider
        </h2>
        <p className="why-desc text-muted mx-auto mt-4">
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
