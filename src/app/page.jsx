"use client";
// import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Header from "./components/Header/page";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Carousel from "./components/Carousel";


const page = () => {




  return (
    <>
   

      {/* <Head>
        <title>EmergentSoft | Home</title>
      </Head> */}
      <Header />
      <main className="page-wrap">
      
        {/* Hero Section */}
        <div className="relative w-full  flex items-center justify-between px-20">
          {/* Left Circle */}
          <motion.div
            className="w-72 h-72 bg-blue-400 rounded-full absolute left-10 top-0"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [-30, 30, -30], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Right Circle */}
          <motion.div
            className="w-72 h-72 bg-blue-400 rounded-full absolute right-10  bottom-0"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [30, -30, 30], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          
          <div className="max-w-4xl m-auto ">
            <section className="relative bg-gray-100 pt-16 text-center  ">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold" 
                data-aos="fade-up"
                >
                  Welcome to{" "}
                  <span className="block text-[#174886]">EmergentSoft</span>
                </h1>
                <p className="mt-4 text-lg text-gray-500" 
                data-aos="fade-down"
                >
                  Founded in 2009, EmergentSoft offers tailored digital
                  communications solutions and unique graphic design.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="#"
                    className="bg-[#174886] text-white px-6 py-2 rounded-lg"
                    data-aos="fade-left"
                  >
                    Get Started
                  </a>
                  <a
                    href="../Contact"
                    className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg"
                    data-aos="fade-right"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
            {/* Swiper Section */}
            <section className="relative pb-10 mt-10">
              <Carousel
                images={[
                  "/assets/images/slider-1.png",
                  "/assets/images/slider-2.png",
                  "/assets/images/slider-3.png",
                  "/assets/images/slider-4.png",
                  "/assets/images/slider-5.png",
                ]}
              />
              {/* <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop
            centeredSlides={true} 
            className="relative"
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <SwiperSlide key={index}>
                <div className="relative flex justify-between items-center">
           
                  <Image
                    src={`/assets/images/slider-${(index - 1 + 5) % 4}.png`}
                    alt={`Slide ${index - 1}`}
                    width={400}
                    height={400}
                    className={`absolute left-0 transition-transform duration-500 ease-in-out opacity-70 transform skew-x-6 w-40 h-full`}
                  />

                  <Image
                    src={`/assets/images/slider-${index}.png`}
                    alt={`Slide ${index}`}
                    width={400}
                    height={400}
                    className={`z-20 mx-auto transition-transform duration-500 ease-in-out opacity-100 transform w-1/2`}
                  />

                 
                  <Image
                    src={`/assets/images/slider-${(index + 1) % 4}.png`}
                    alt={`Slide ${index + 1}`}
                    width={400}
                    height={400}
                    className={`absolute right-0 transition-transform duration-500 ease-in-out opacity-70 transform -skew-x-6 w-40 h-full`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
            </section>
          </div>
        </div>
        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold">
                About <span className="text-blue-600">Software Solutions</span>
              </h2>
              <p className="mt-4 text-gray-700">
                EmergentSoft is a group of seasoned IT professionals delivering
                quality software solutions globally.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="../About"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                  Learn More
                </a>
                <a
                  href="../Contact"
                  className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div data-aos="fade-right">
              <Image
                src="/assets/images/about.webp"
                alt="About"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-16 bg-[#e5e5e5]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">
              Our Web Design and Development Services
            </h2>
            <p className="mt-4 text-gray-700">
              We provide innovative solutions with expertise in multiple tools
              and technologies.
            </p>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {[
                "Offshore Software Development",
                "Technical Resource Outsourcing",
                "Handheld Devices Application Development",
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <Image
                    src={`/assets/images/svc-${index + 1}.jpg`}
                    alt={service}
                    width="400"
                    height="250"
                    className="mx-auto rounded-lg"
                  />

                  <h3 className="mt-4 text-xl font-semibold">{service}</h3>
                  <p className="mt-2 text-gray-600">
                    Engaging and efficient web design and development solutions.
                    Transcending convention through innovative web solutions.
                  </p>
                  <a
                    href="../Services"
                    className="block mt-4 text-blue-600 font-bold"
                  >
                    View More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <div className="hm-services-sec portfolio section-space mt-10">
          <div className="container mx-auto px-4">
            <div className="services-inner">
              <div className="section-info-sm text-center">
                <h2
                  className="section-title text-2xl md:text-3xl font-semibold text-gray-800 mb-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <span>Our Portfolio</span>
                </h2>
              </div>
              <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Portfolio Item 1 */}
                <div
                  className="col-md-3"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="svc-col">
                    <div className="card">
                      <figure>
                        <img
                          src="assets/images/project-1.png"
                          alt="Project 1"
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                      </figure>
                      <div className="card-body p-4">
                        <h5 className="card-title text-xl font-bold text-gray-800">
                          Knight
                        </h5>
                        <p className="card-text text-gray-600">
                          Emergent Software Solutions has diversified team of
                          professionals who have got expertise.
                        </p>
                      </div>
                      <a
                        href="../Portfolio"
                        className="theme-btn primary-btn inline-block bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Portfolio Item 2 */}
                <div
                  className="col-md-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="svc-col">
                    <div className="card">
                      <figure>
                        <img
                          src="assets/images/project-2.png"
                          alt="Project 2"
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                      </figure>
                      <div className="card-body p-4">
                        <h5 className="card-title text-xl font-bold text-gray-800">
                          Wood Family Dealerships
                        </h5>
                        <p className="card-text text-gray-600">
                          Emergent Software Solutions has diversified team of
                          professionals who have got expertise.
                        </p>
                      </div>
                      <a
                        href="../Portfolio"
                        className="theme-btn primary-btn inline-block bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Portfolio Item 3 */}
                <div
                  className="col-md-3"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="svc-col">
                    <div className="card">
                      <figure>
                        <img
                          src="assets/images/project-3.png"
                          alt="Project 3"
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                      </figure>
                      <div className="card-body p-4">
                        <h5 className="card-title text-xl font-bold text-gray-800">
                          USB Direct from Connect Promotions
                        </h5>
                        <p className="card-text text-gray-600">
                          Emergent Software Solutions has diversified team of
                          professionals who have got expertise.
                        </p>
                      </div>
                      <a
                        href="../Portfolio"
                        className="theme-btn primary-btn inline-block bg-blue-600 text-white py-2 px-4 rounded-lg mt-2 mb-4"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Portfolio Item 4 */}
                <div
                  className="col-md-3"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="svc-col">
                    <div className="card">
                      <figure>
                        <img
                          src="assets/images/project-5.png"
                          alt="Project 4"
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                      </figure>
                      <div className="card-body p-4">
                        <h5 className="card-title text-xl font-bold text-gray-800">
                          Kinepro
                        </h5>
                        <p className="card-text text-gray-600">
                          Emergent Software Solutions has diversified team of
                          professionals who have got expertise.
                        </p>
                      </div>
                      <a
                        href="../Portfolio"
                        className="theme-btn primary-btn inline-block bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="testimonial-wrap section-space py-12 bg-[#e5e5e5] mt-10">
          <div className="container mx-auto">
            <div className="testimonial-inner text-center">
              <div className="section-info-sm mb-6 items-center">
                <h2 className="section-title text-center mb-4">
                  <small className="text-black text-2xl">Testimonial</small>
                  <span className="block text-xl font-semibold text-[#174886]">
                    What Our Happy Clients Say
                  </span>
                </h2>
                <p className="w-[50%] text-lg text-gray-600 mb-8 m-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  quam fusce ac risus, proin amet. Porttitor id nulla in sit
                  nec, proin eu eget non. Sit ac nec quis nullam sed interdum.
                  Elementum sem ultrices erat vestibulum sed pulvinar placerat
                  nec eu.
                </p>
              </div>

              <div className="relative">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  modules={[Navigation]} // Make sure Navigation module is imported
                  className="testimonialSwiper"
                >
                  <SwiperSlide>
                    <div className="client-name text-center text-gray-500">
                      <strong>
                        John Doe <br></br>
                        <small className="text-sm">Lead Designer</small>
                      </strong>
                    </div>
                    <p className="w-[50%] m-auto text-lg text-gray-600 mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus.
                    </p>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="client-name text-center">
                      <strong>
                        Jane Doe{" "}
                        <small className="text-sm">Project Manager</small>
                      </strong>
                    </div>
                    <p className="px-6 text-lg text-gray-600 mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus.
                    </p>
                  </SwiperSlide>

                  {/* Repeat the SwiperSlide as needed */}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
                <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
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
                        href="../About"
                        className="text-sm text-white hover:text-white"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="../Services"
                        className="text-sm text-white hover:text-white"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="../Portfolio"
                        className="text-sm text-white hover:text-white"
                      >
                        Our Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        href="../Expertise"
                        className="text-sm text-white hover:text-white"
                      >
                        Expertise and Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href="../Methidology"
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
    </>
  );
};

export default page;
