"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import Header from "../components/Header/page";
import { Icon } from "@iconify/react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("tab1");
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@fancyapps/ui").then((fancybox) => {
        fancybox.Fancybox.bind('[data-fancybox="group"]');
      });
    }
  }, []);

  return (
    <div>
      {/* <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Emergent Software Solutions Portfolio"
        />
      </Head> */}
      <Header />

      <main className="page__wrap">
        {/* Banner Section */}
        {/* ✅ Fixed Background Image */}
        <div
          className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/svc-1.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold">Portfolio</h1>
            <p className="mt-2 max-w-2xl text-lg">
              Emergent Software Solutions has a diversified team of
              professionals who have expertise in different tools and
              technologies over the past years.
            </p>
          </div>
        </div>

        {/* Portfolio Tabs */}
        <div className="portfolio-tabs-wrapper mt-8">
          <section className="gallery-wrap section-space">
            <div className="container mx-auto px-4">
              {/* Navigation Tabs */}
              <ul className="nav nav-tabs flex justify-center">
                <li className="nav-item">
                  <button className="nav-link active text-xl text-white px-4 py-2 bg-[#174886] rounded">
                    Show All
                  </button>
                </li>
              </ul>

              {/* Gallery Section */}
              <div className="flex gap-4 mt-10 mb-10">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/assets/images/project-1.png"
                    alt="Project 1"
                    width={500}
                    height={300}
                    className="h-auto object-cover transition-transform duration-300 hover:scale-105 animate-slideUp [animation-delay:0.1s]"
                  />
                  <Image
                    src="/assets/images/project-2.png"
                    alt="Project 2"
                    width={500}
                    height={300}
                    className="h-auto object-cover transition-transform duration-300 hover:scale-105 animate-slideUp [animation-delay:0.3s]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Image
                    src="/assets/images/project-3.png"
                    alt="Project 3"
                    width={500}
                    height={300}
                    className="h-auto object-cover transition-transform duration-300 hover:scale-105 animate-slideUp [animation-delay:0.5s]"
                  />
                  <Image
                    src="/assets/images/project-4.png"
                    alt="Project 4"
                    width={500}
                    height={300}
                    className="h-auto object-cover transition-transform duration-300 hover:scale-105 animate-slideUp [animation-delay:0.7s]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Image
                    src="/assets/images/project-5.png"
                    alt="Project 5"
                    width={500}
                    height={300}
                    className="h-auto object-cover transition-transform duration-300 hover:scale-105 animate-slideUp [animation-delay:0.9s]"
                  />
                  <Image
                    src="/assets/images/project-2.png"
                    alt="Project 2"
                    width={500}
                    height={300}
                    className="h-auto object-cover transition-transform duration-300 hover:scale-105 animate-slideUp [animation-delay:1.1s]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Footer */}
      <footer className="footer__wrap section-space-top bg-[#174886] text-white py-10">
        <div className="container mx-auto">
          <div className="footer-inner">
            <div className="row flex ">
              {/* First Column: The Company */}
              <div className="col-md-1 w-full md:w-1/4 mb-8 md:mb-0">
                <div
                  className="foot-col"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <strong className="text-lg font-bold">The Company</strong>
                  <p className="mt-2 text-sm">
                    Emergent soft is a group of seasoned IT industry
                    professionals having decades of experience in delivering
                    quality software solutions to clients around the globe
                    through their technical skills, dedication, and effective
                    communication.
                  </p>
                  <ul className="contact-info-list mt-4 space-y-3">
                    <li className="flex items-center">
                      <Icon icon="mdi:phone" className="mr-2 text-xl" />
                      <a
                        href="tel:0092515518612"
                        className="text-sm text-white hover:text-white"
                      >
                        +92-51-5518612
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Icon icon="mdi:email" className="mr-2 text-xl" />
                      <a
                        href="mailto:info@emergentsoft.com"
                        className="text-sm text-white hover:text-white"
                      >
                        info@emergentsoft.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Icon icon="mdi:map-marker" className="mr-2 text-xl" />
                      <a
                        href="#"
                        className="text-sm text-white hover:text-white"
                      >
                        Building 62, Nice Plaza, Canning Road, Saddar,
                        Rawalpindi, Punjab 46000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Second Column: Useful Links */}
              <div className="col-md-3 w-full md:w-1/4 mb-8 md:mb-0 md:ml-8">
                <div
                  className="foot-col"
                  data-aos-delay="200"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <strong className="text-lg font-bold">Useful Links</strong>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a
                        href="https://emergentsoft.com/about.php"
                        className="text-sm text-white hover:text-white"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://emergentsoft.com/services.php"
                        className="text-sm text-white hover:text-white"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://emergentsoft.com/portfolio.php"
                        className="text-sm text-white hover:text-white"
                      >
                        Our Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://emergentsoft.com/expertise.php"
                        className="text-sm text-white hover:text-white"
                      >
                        Expertise and Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://emergentsoft.com/methodology.php"
                        className="text-sm text-white hover:text-white"
                      >
                        Our Methodology
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third Column: Our Services */}
              <div className="col-md-3 w-full md:w-1/4 mb-8 md:mb-0">
                <div
                  className="foot-col"
                  data-aos-delay="400"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <strong className="text-lg font-bold">Our Services</strong>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-white hover:text-white"
                      >
                        Offshore Software Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-white hover:text-white"
                      >
                        Technical Resource Outsourcing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-white hover:text-white"
                      >
                        Consultancy Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-white hover:text-white"
                      >
                        Multimedia Designs & Animations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-white hover:text-white"
                      >
                        Software Quality Assurance And Testing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm text-white hover:text-white"
                      >
                        Development
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fourth Column: Contact Information */}
              <div className="col-md-3 w-full md:w-1/4">
                <div
                  className="foot-col"
                  data-aos-delay="600"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <strong className="text-lg font-bold">
                    Contact Information
                  </strong>
                  <div className="google-map mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13293.540895395034!2d73.0543973!3d33.595308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949ce4512c8f%3A0x73fac43346abf1d7!2sEmergent%20Software%20Solutions!5e0!3m2!1sen!2s!4v1720762988163!5m2!1sen!2s"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
