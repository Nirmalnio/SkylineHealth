import React from "react";
import JournalCard from "../components/JournalCard";

const HomeCare = () => {
  const articles = [
    {
      title: "A Guide to Senior Life Insurance",
      category: "Finances",
      imageUrl:
        "https://t4.ftcdn.net/jpg/05/17/70/37/360_F_517703720_3YpogaZzwpsbYq17IkaMGfHeq33R8lDC.jpg",
    },
    {
      title:
        "Nurse Next Door and St. Joseph Health Partner to Provide Home Care to Thousands",
      category: "Communications",
      imageUrl:
        "https://cbx-prod.b-cdn.net/COLOURBOX65143671.jpg?width=800&height=800&quality=70",
    },
    {
      title: "Should I Consider Home Care For My Aging Loved One?",
      category: "Getting Care",
      imageUrl:
        "https://images.pexels.com/photos/6817638/pexels-photo-6817638.jpeg",
    },
  ];

  return (
    <div>
      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="text-left">
            <p className="text-[#52bed6] font-medium text-lg mb-2">Services</p>
            <h1 className="text-5xl md:text-6xl font-serif italic font-medium leading-tight mb-6">
              In-Home Nursing <br /> Care
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-8">
              There truly is no place like home. We deeply appreciate how
              important it is for you to enjoy the comfort of your own home for
              as long as possible. That’s why we offer in-home nursing care for
              you, including medical support when necessary.
            </p>
            <button className="bg-[#52bed6] hover:bg-[#2f6c7a] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition">
              Find a Caregiver near you
              {/* <FaArrowRight /> */}
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/1401532985/photo/step-by-step.jpg?s=612x612&w=0&k=20&c=O2OFhnvkZCV7FLmp-EqUt7R4b5ppqDDaNsD-Gbk-i_E="
              alt="Nursing Care"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#fef7f2] py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src="https://mumcdnstorage.blob.core.windows.net/cnt/2024/01/providers_group_support_hands_team_800x400.jpg"
              alt="Nursing support"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              In-Home Nursing Care That Brings You Balance
            </h2>

            <p className="text-gray-700 mb-4">
              With Nurse Next Door, you get to enjoy the comfort of home and
              freedom of being cared for in a familiar environment.
            </p>

            <p className="text-gray-700 mb-4">
              Our Registered Nurses and Licensed/Registered Practical Nurses are
              carefully selected to match your personality, interests and care
              requirements.
            </p>

            <p className="text-gray-700 mb-4">
              Our private home care nurses provide:
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>24/7 medical support</strong> to keep you in optimal
                health.
              </li>
              <li>
                <u>Post Operative care &amp; Post surgery care</u>
              </li>
              <li>
                <u>Infusion Therapy</u>
              </li>
              <li>Wound Care</li>
              <li>
                <u>Medication Adminstration</u>
              </li>
              <li>
                <u>Foot Care</u>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">The Caring Journal</h1>
          <p className="text-lg text-gray-600 mb-12">
            The Caring Journal is your go-to destination for stories, insights,
            and resources that celebrate the art and heart of caregiving.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {articles.map((item, idx) => (
              <JournalCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCare;
