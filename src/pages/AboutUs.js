import React from "react";
import GoogleReviews from "../components/GoogleReviews";
export default function About() {
  const values = [
    "Admire People",
    "WOW Customer Experience",
    "Finding a Better Way",
    "Passionate about Making a Difference",
  ];

  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white relative overflow-hidden">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <p className="text-[#52bed6] font-medium text-lg mb-4">
            Life is better when Caregivers come to you
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            Skyline
            <br />
            <span className="italic font-serif">HealthCare</span>
          </h1>
          <p className="text-gray-700 mt-6 text-base md:text-lg max-w-md">
            Our Talent Is Caring™. Having a caregiver come to your home should
            be reassuring, not overwhelming. We manage everything, every step of
            the way.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#52bed6] hover:bg-pink-700 text-white rounded-full font-semibold transition-all">
            Contact Us →
          </button>
        </div>

        <div className="w-full md:w-1/2 relative z-10">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -left-10 -bottom-10 w-96 h-96 bg-pink-300 rounded-full opacity-30 blur-3xl -z-10"></div>
            <img
              src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67b353fb8d343fbc691f6669_about-hero-image.webp"
              alt="Caregiver laughing"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-cyan-50 py-20 px-6 rounded-[2rem] mx-4 md:mx-16 mt-10 relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#52bed6] blur-3xl opacity-30 rounded-full -z-10" />
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#52bed6] font-medium text-lg mb-2">
            Our Mission & Vision
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            We Do Home
            <br />
            Care <span className="italic font-serif">Differently</span>
          </h2>
          <p className="text-gray-800 text-base md:text-lg">
            Nurse Next Door’s mission is to make lives better every day. It
            starts with a team of compassionate, dedicated and caring staff who
            are passionate about making a difference.
          </p>
        </div>

        <div className="mt-12">
          <p className="text-center text-gray-800 mb-6 font-medium">
            Our core values
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white px-6 py-3 rounded-2xl shadow hover:shadow-md flex items-center gap-2 text-sm font-medium transition-all"
              >
                <span className="text-[#52bed6] text-lg">👋</span> {val}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white gap-10">
        {/* Left image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67c9bf2674f0a8d2a1f7da97_Secondary%20image%20(getting%20care%20should%20be%20easy)%201.jpeg"
            alt="Caregiver pushing wheelchair"
            className="w-full rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Right text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#52bed6] font-medium text-lg mb-2">Our Story</p>
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Getting Care{" "}
            <span className="italic font-serif">Should be Easy</span>
          </h2>
          <p className="text-gray-700 mb-4">
            When Ken’s pregnant wife, Teena, was placed on emergency bed rest,
            Ken discovered the challenges in finding reliable home care that he
            could trust. Inspired by Ken's struggle to find quality care, Ken
            and his co-founder, John DeHart, launched Nurse Next Door Home Care
            Services in 2001.
          </p>
          <p className="text-gray-700">
            Since franchising in 2007, Nurse Next Door has grown to over 400
            locations across Canada, the United States, Australia and England.
          </p>
        </div>
      </section>
      {/* MEET OUR TEAM - Sticky left, scrollable right */}
      <section className="bg-cyan-100 py-20 px-6 md:px-16 flex flex-col md:flex-row gap-10 h-[1000px]">
        {/* Left Sticky Text Content */}
        <div className="md:w-1/2 relative">
          <div className="md:sticky top-32 w-[70%]">
            <h2 className="text-[50px] font-extrabold text-black mb-4">
              Meet our <span className="italic font-serif">Team</span>
            </h2>
            <p className="text-gray-800 mb-4">
              Mom and Dad deserve the best. Each Nurse Next Door team member is
              carefully screened, interviewed, and selected for their experience
              and passion for making a difference.
            </p>
            <p className="text-gray-800">
              Our team is here to support you every step of the way. From the
              moment you call to the end of every visit, we’re here to make care
              accessible and safe.
            </p>
          </div>
        </div>

        {/* Right Scrollable Cards */}
        <div className="md:w-1/2 overflow-y-auto pr-2 space-y-6 h-[calc(100vh-160px]">
          {/* Card 1 */}
          <div className="flex gap-4 bg-white rounded-2xl shadow p-4 items-start">
            <img
              src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67c9c0be384376553a4a3923_Designers.webp"
              alt="Care Designers"
              className="w-[300px] rounded-xl object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">Care Designers</h3>
              <p className="text-sm text-gray-700">
                Our experienced Care Designers evaluate your loved one’s needs
                during the initial Caring Consult™. By getting to know Mom or
                Dad, they can reassess services as health and care requirements
                change over time.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-4 bg-white rounded-2xl shadow p-4 items-start">
            <img
              src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67c9c0c47696a9fa9c61060b_Caregivers.webp"
              alt="Caregivers"
              className="w-[300px] rounded-xl object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">Caregivers</h3>
              <p className="text-sm text-gray-700">
                We select caregivers or nurses based on their personality,
                languages, and hobbies shared with each senior for ongoing
                companionship that makes a difference.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-4 bg-white rounded-2xl shadow p-4 items-start">
            <img
              src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67c9c0c469300246d9153289_24%3A7%20Support.webp"
              alt="24/7 Support"
              className="w-[300px] rounded-xl object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">24/7 Support</h3>
              <p className="text-sm text-gray-700">
                From your first visit onwards, our Care Team is available 24/7
                to provide monitoring services, respond to immediate change
                requests, and ensure peace of mind for families.
              </p>
            </div>
          </div>

          {/* Add more cards if needed */}
        </div>
      </section>
      {/* RIGOROUS HIRING SECTION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#52bed6] font-medium mb-2">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Rigorous Hiring <span className="italic font-serif">and</span>{" "}
            Screening
          </h2>
          <p className="text-gray-800 mb-12 max-w-3xl">
            All our caregivers and nurses are qualified, attentive, and willing
            to go above and beyond. Here’s how we train the team at Nurse Next
            Door:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl border-2 border-[#52bed6] p-4 shadow hover:shadow-md transition">
              <img
                src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67b361e765a4788d6bacfc02_Screened%20and%20Tested.webp"
                alt="Screened and Tested"
                className="rounded-2xl mb-4 w-full h-48 object-cover"
              />
              <div className="flex items-center gap-2 mb-2 text-yellow-600">
                <span className="text-2xl">🩺</span>
                <span className="font-semibold">Screened and Tested</span>
              </div>
              <p className="text-gray-700 text-sm">
                Your loved one is in great hands. We run criminal record checks,
                Tuberculosis tests and reference checks for your peace of mind.
                All our caregivers come with a minimum of 2 years of experience,
                so you receive quality care you can trust.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border-2 border-[#52bed6] p-4 shadow hover:shadow-md transition">
              <img
                src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67b361e765a4788d6bacfc02_Screened%20and%20Tested.webp"
                alt="Licensed and Insured"
                className="rounded-2xl mb-4 w-full h-48 object-cover"
              />
              <div className="flex items-center gap-2 mb-2 text-yellow-600">
                <span className="text-2xl">✔️</span>
                <span className="font-semibold">Licensed and Insured</span>
              </div>
              <p className="text-gray-700 text-sm">
                Our caregivers and nurses come in all shapes and sizes. They
                range from Personal Support Workers to Registered Nurses. For
                your peace of mind, we ensure our caregivers are licensed and
                insured.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border-2 border-[#52bed6] p-4 shadow hover:shadow-md transition">
              <img
                src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67b361e7e362896dfaf71405_e4d88d2241d3a584eb8bdbbbaf629862_Comprehensive%20Training-p-2000.webp" // Replace or upload if needed
                alt="Comprehensive Training"
                className="rounded-2xl mb-4 w-full h-48 object-cover"
              />
              <div className="flex items-center gap-2 mb-2 text-yellow-600">
                <span className="text-2xl">📋</span>
                <span className="font-semibold">Comprehensive Training</span>
              </div>
              <p className="text-gray-700 text-sm">
                We set our caregivers up for success by providing training that
                aligns with our core values and brand promises. They also get
                access to practice material with scenarios for delivering
                quality home care.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GoogleReviews />
    </div>
  );
}
