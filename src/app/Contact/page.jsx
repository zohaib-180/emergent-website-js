"use client";
import { useState } from "react";
import Header from "../components/Header/page";
import { Icon } from "@iconify/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    jobTitle: "",
    country: "",
    website: "",
    services: "",
    phone: "",
    email: "",
    timeFrame: "",
    budget: "",
    howHeard: "",
    company: "",
    message: "",
  });

  const [captcha, setCaptcha] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captcha) {
      setStatusMessage("Please complete the CAPTCHA");
      return;
    }

    const response = await fetch("/api/verify-captcha", {
      method: "POST",
      body: JSON.stringify({ captcha }),
    });

    const data = await response.json();

    if (data.success) {
      // Form data processing here
      const emailBody = `
        You have received a new message from the contact form.

        Name: ${formData.userName}
        Job Title: ${formData.jobTitle}
        Country: ${formData.country}
        Website: ${formData.website}
        Services: ${formData.services}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Time Frame: ${formData.timeFrame}
        Budget: ${formData.budget}
        How did you hear about us: ${formData.howHeard}
        Company/Organization: ${formData.company}
        Message: ${formData.message}
      `;

      const mailData = {
        to: "azharpaki@gmail.com",
        subject: "New Form Submission",
        emailBody,
      };

      // Call your mail service (e.g., SendGrid, Mailgun, or custom API) to send email
      // Example using fetch or other methods
      const mailResponse = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(mailData),
      });

      const mailResult = await mailResponse.json();

      if (mailResult.success) {
        setStatusMessage("Email sent successfully.");
      } else {
        setStatusMessage("Failed to send email.");
      }
    } else {
      setStatusMessage("CAPTCHA verification failed. Please try again.");
    }
  };

  const [recaptchaValid, setRecaptchaValid] = useState(false); // Add recaptcha state

  const recaptcha = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (value) => {
    if (value) {
      setRecaptchaValid(true); // Validate reCAPTCHA if user completes the CAPTCHA
    } else {
      setRecaptchaValid(false); // Reset the CAPTCHA validation if value is empty
    }
  };

  const recaptchasubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValid) {
      alert("Please verify you're not a robot.");
      return;
    }
    // Handle form submission logic here, such as sending email or using an API
    console.log(formData);
  };

  const handleRecaptcha = (token) => {
    // This function is called when the user successfully completes the reCAPTCHA challenge
    // console.log("Captcha token:", token);
    setCaptcha(token);
  };
  let checkCaptcha;
  const setCaptchaRef = (ref) => {
    if (ref) {
      checkCaptcha = ref;
      return (checkCaptcha = ref);
    }
  };

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
          <h1 className="text-3xl md:text-5xl font-bold">Portfolio</h1>
          <p className="mt-2 max-w-2xl text-lg">
            Emergent Software Solutions has a diversified team of professionals
            who have expertise in different tools and technologies over the past
            years.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12 mt-10 mb-10">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="user-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Name
                </label>
                <input
                  type="text"
                  id="user-name"
                  name="userName"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="job-title"
                  name="jobTitle"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="country-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country-name"
                  name="country"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="website-url"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website URL
                </label>
                <input
                  type="text"
                  id="website-url"
                  name="website"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="services"
                  className="block text-sm font-medium text-gray-700"
                >
                  Services
                </label>
                <select
                  id="services"
                  name="services"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.services}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="user-phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="user-phone"
                  name="phone"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="user-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="time-frame"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time Frame
                </label>
                <select
                  id="time-frame"
                  name="timeFrame"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.timeFrame}
                  onChange={handleChange}
                >
                  <option value="1">One Week</option>
                  <option value="2">One Month</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="1">Below 200$</option>
                  <option value="2">Below 500$</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="how-heard"
                  className="block text-sm font-medium text-gray-700"
                >
                  How did you hear about us?
                </label>
                <select
                  id="how-heard"
                  name="howHeard"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.howHeard}
                  onChange={handleChange}
                >
                  <option value="Search Engine">Search Engine</option>
                  <option value="Colleague">Through a colleague</option>
                  <option value="Friend">Through a friend</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company / Organization Name
                </label>
                <input
                  type="text"
                  id="company-name"
                  name="company"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div
              className="g-recaptcha mt-4"
              data-sitekey="your-site-key-here"
              onChange={(value) => setCaptcha(value)}
            ></div>

            {statusMessage && (
              <p className="mt-4 text-red-600">{statusMessage}</p>
            )}

            {/* Add reCAPTCHA */}
            <div className="mb-3">
              <ReCAPTCHA
                ref={(r) => setCaptchaRef(r)}
                sitekey="6Lf2-H4bAAAAAHJ_CkUvSoElvh4HxI2fzOjrPTtC"
                onChange={handleRecaptcha}
                size="normal"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded"
            >
              Send Request
            </button>
          </form>
        </div>
        {/* Google Map */}
        <div className="col-md-5">
          <div className="contact-content right-col">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13293.540895395034!2d73.0543973!3d33.595308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949ce4512c8f%3A0x73fac43346abf1d7!2sEmergent%20Software%20Solutions!5e0!3m2!1sen!2s!4v1720762988163!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ul className="contact-info-list">
              <li className="flex items-center mb-4 mt-4">
                <div className="bg-[#e5e7eb] p-2 rounded-full mr-4">
                  <Icon icon="mdi:phone" className="text-gray-800" />
                </div>
                <a href="tel:0092515518612" className="text-gray-800">
                  <span>+92-51-5518612</span>
                </a>
              </li>
              <li className="flex items-center mb-4">
                <div className="bg-[#e5e7eb] p-2 rounded-full mr-4">
                  <Icon icon="mdi:email" />
                </div>
                <a href="mailto:info@emergent.local">
                  <span>info@emergent.local</span>
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-[#e5e7eb] p-2 rounded-full mr-4">
                  <Icon icon="mdi:map-marker" />
                </div>
                <a href="#" className="text-gray-800">
                  <span>
                    Building 62, Nice Plaza, Canning Road, Saddar, Rawalpindi,
                    Punjab 46000
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
