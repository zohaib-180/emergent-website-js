"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header/page";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "Web Designing",
    image: "/assets/images/svc-1.jpg",
    description:
      "Emergent is a software development company and software outsourcing provider that specializes in assembling and managing teams of highly skilled developers that augment your in-house IT resources.",
  },
  {
    title: "Web Development",
    image: "/assets/images/svc-2.jpg",
    description:
      "Emergent is a software development company and software outsourcing provider that specializes in assembling and managing teams of highly skilled developers that augment your in-house IT resources.",
  },
  {
    title: "WordPress Development",
    image: "/assets/images/about.webp",
    description:
      "Emergent is a software development company and software outsourcing provider that specializes in assembling and managing teams of highly skilled developers that augment your in-house IT resources.",
  },
  {
    title: "Android App Development",
    image: "/assets/images/svc-3.jpg",
    description:
      "Emergent is a software development company and software outsourcing provider that specializes in assembling and managing teams of highly skilled developers that augment your in-house IT resources.",
  },
  {
    title: "iOS App Development",
    video: "/assets/videos/ios.mp4",
    description:
      "Emergent is a software development company and software outsourcing provider that specializes in assembling and managing teams of highly skilled developers that augment your in-house IT resources.",
  },
  {
    title: "Software Quality Assurance and Testing",
    image: "/assets/images/svc-4.jpg",
    description:
      "Emergent is a software development company and software outsourcing provider that specializes in assembling and managing teams of highly skilled developers that augment your in-house IT resources.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="page__wrap">
      <Header />
      {/* Banner Section */}
      {/* ✅ Fixed Background Image */}
      <div
        className="relative w-full h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/svc-1.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Expertise and Skills
          </h1>
          <p className="mt-2 max-w-2xl text-lg">
            Emergent Software Solutions has a diversified team of professionals
            with expertise in different tools and technologies.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-semibold">
              Our Expertise and Skills in Web & Mobile Development
            </h2>
            <p className="mt-4 text-gray-600">
              Emergent Software Solutions has diversified team of professionals
              who have got expertise in different tools and technologies over
              the past years. An overview is listed below:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <figure>
                  {service.video ? (
                    <video
                      src={service.video}
                      muted
                      autoPlay
                      loop
                      className="w-full h-56 object-cover"
                    />
                  ) : (
                    <Image
                      src={service.image}
                      width={500}
                      height={300}
                      alt={service.title}
                      className="w-full"
                    />
                  )}
                </figure>
                <div className="p-6">
                  <h5 className="text-xl font-bold">{service.title}</h5>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
    </main>
  );
}
