"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/page";
import WrapperAos from "../components/wrapperAos/WrapperAos";

const services = [
  {
    title: "Strong Project Management system",
    img: "/assets/images/about-collage1.jpg",
  },
  {
    title: "Effective and efficient communication",
    img: "/assets/images/about-collage2.jpg",
  },
  { title: "Attention to detail", img: "/assets/images/about-collage3.jpg" },
  {
    title: "Predefined Processes and Procedures",
    img: "/assets/images/about-collage4.jpg",
  },
  { title: "Strong Quality Assurance", img: "/assets/images/svc-1.jpg" },
  { title: "Training to its staff", img: "/assets/images/svc-1.jpg" },
  { title: "Project Documentation", img: "/assets/images/svc-1.jpg" },
];
const About = () => {
   
  return (
    <WrapperAos>
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
            <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
            <p className="mt-2 max-w-2xl text-lg">
              Emergent Software Solutions has a diversified team of
              professionals who have expertise in different tools and
              technologies over the past years.
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="main-content-wrap py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Content */}
              <div>
                <h4 className="text-3xl font-bold mb-4">
                  Our Story <br></br>
                  <small className="text-gray-500">
                    It all started in 2009
                  </small>
                </h4>
                <p className="text-gray-700">
                  Emergent Soft is a group of seasoned IT professionals with
                  decades of experience in delivering quality software solutions
                  to clients worldwide through technical skills, dedication, and
                  effective communication. We provide unmatched business value
                  through process excellence, quality frameworks, and
                  innovation.
                </p>
                <p className="mt-4 text-gray-700">
                  We ensure timely, budget-friendly, and high-quality solutions
                  that enhance efficiency and responsiveness to business needs.
                </p>
                <p className="mt-4 text-gray-700">
                  In today's IT-driven world, success relies on robust
                  solutions. With highly skilled staff and strong global
                  connections, Emergent Soft is committed to delivering
                  top-notch services.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <Image
                  src="/assets/images/svc-1.jpg"
                  alt="Our Story"
                  width={500}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Services Grid Section */}
            <section className="py-12">
              <h2 className="text-center text-2xl font-bold mb-6">
                Emergent Soft strives to provide quality services through:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative group border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-lg font-semibold text-center p-2">
                        {service.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 max-w-4xl mx-auto px-4">
                <p className="text-lg mb-4">
                  The force behind Emergent Soft’s distinctive, innovative, and
                  quality services is its experienced staff, cutting-edge
                  technologies, and alliances with leading IT industry
                  organizations working in diversified dimensions. Our alliances
                  include:
                </p>
                <a className="bg-[#174886] text-white px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer">
                  Talk to Our Experts
                </a>
              </div>
            </section>
          </div>
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
    </WrapperAos>
  );
};

export default About;
