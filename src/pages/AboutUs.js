import React from "react";
import GoogleReviews from "../components/GoogleReviews";

export default function About() {
  const values = [
    {
      icon: "💛",
      title: "Compassion",
      desc: "We care deeply and treat every client with warmth and respect",
    },
    {
      icon: "👂",
      title: "Listening",
      desc: "We take the time to understand each person's needs, wishes, and routines",
    },
    {
      icon: "🧠",
      title: "Expertise",
      desc: "Our carers are trained, experienced, and always learning",
    },
    {
      icon: "🤝",
      title: "Trust",
      desc: "We build strong bonds with families through transparency and consistency",
    },
    {
      icon: "🏠",
      title: "Independence",
      desc: "We support clients in living their lives on their terms, at home",
    },
  ];

  const whyChooseUs = [
    "Small, family-run company focused on personal attention",
    "Consistent carers who often become like extended family",
    "Fully regulated by the Care Quality Commission (CQC)",
    "Serving only Devon, ensuring local focus and responsiveness",
    "Genuinely bespoke care, built around the individual",
  ];

  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-br from-blue-light to-cyan-light relative overflow-hidden">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <p className="text-brand-blue font-medium text-lg mb-4">
            Bespoke 'Live In' Care in South Devon
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-dark leading-tight mb-6">
            Skyline
            <br />
            <span className="text-brand-blue italic font-serif">Healthcare</span>
            <br />
            <span className="text-2xl md:text-3xl font-normal text-text-secondary">
              Solutions Ltd
            </span>
          </h1>
          <p className="text-text-secondary mt-6 text-base md:text-lg max-w-md leading-relaxed">
            A small, family-run, CQC-registered live-in care provider. We help
            individuals remain in the comfort of their own home — surrounded by
            familiar routines, personal belongings, and the people they love.
          </p>
          <button className="mt-8 px-8 py-4 bg-brand-blue hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get in Touch Today →
          </button>
        </div>

        <div className="w-full md:w-1/2 relative z-10">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -left-10 -bottom-10 w-96 h-96 bg-blue-medium rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -right-5 -top-5 w-64 h-64 bg-cyan-medium rounded-full opacity-25 blur-2xl -z-10"></div>
            <img
              src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67b353fb8d343fbc691f6669_about-hero-image.webp"
              alt="Elderly person at home with carer"
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-medium text-lg mb-2">
              Our Mission & Vision
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-8">
              We Believe Care Should
              <br />
              Feel Like{" "}
              <span className="text-brand-blue italic font-serif">Family</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-light to-cyan-light p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Our Mission
              </h3>
              <p className="text-gray-800 leading-relaxed">
                To empower people to live independently in their own homes by
                delivering exceptional, personalised care that promotes dignity,
                choice, and quality of life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-light to-cyan-light p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center">
                <span className="text-3xl mr-3">👁️</span>
                Our Vision
              </h3>
              <p className="text-gray-800 leading-relaxed">
                To be Devon's most trusted live-in care provider, known for our
                heartfelt approach, family values, and commitment to truly
                person-centred care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-gradient-to-br from-cyan-light to-blue-light py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-blue font-medium text-lg mb-2">
              What Drives Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4">
              Our{" "}
              <span className="text-brand-blue italic font-serif">Values</span>
            </h2>
            <p className="text-gray-800 text-lg max-w-3xl mx-auto">
              Our live-in carers offer more than just practical help — they
              bring companionship, trust, and peace of mind, forming lasting
              relationships with those they support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYLINE */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-brand-blue rounded-2xl opacity-10"></div>
                <img
                  src="https://cdn.prod.website-files.com/67ab6f4970b90367b528f15a/67c9bf2674f0a8d2a1f7da97_Secondary%20image%20(getting%20care%20should%20be%20easy)%201.jpeg"
                  alt="Family care moment"
                  className="relative w-full rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-brand-blue font-medium text-lg mb-2">
                Personal & Professional
              </p>
              <h2 className="text-4xl font-extrabold text-text-dark mb-6">
                Why Families Choose{" "}
                <span className="text-brand-blue italic font-serif">
                  Skyline
                </span>
              </h2>
              <p className="text-gray-800 mb-8 leading-relaxed">
                We're proud to keep our service small enough to stay personal —
                where every client matters and every relationship counts.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-gradient-to-br from-blue-light to-cyan-light py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-blue font-medium text-lg mb-2">
              Our Service
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4">
              Bespoke{" "}
              <span className="text-brand-blue italic font-serif">24/7</span>{" "}
              Care
            </h2>
            <p className="text-gray-800 text-lg max-w-3xl mx-auto">
              We specialise in bespoke 24/7 care, helping individuals remain in
              the comfort of their own home with consistent, compassionate
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4 text-center">🏠</div>
              <h3 className="text-xl font-bold text-text-dark mb-4 text-center">
                Stay at Home
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Remain in familiar surroundings with personal belongings,
                routines, and cherished memories close by.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4 text-center">👥</div>
              <h3 className="text-xl font-bold text-text-dark mb-4 text-center">
                Consistent Carers
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Build meaningful relationships with dedicated carers who become
                like extended family members.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4 text-center">🌟</div>
              <h3 className="text-xl font-bold text-text-dark mb-4 text-center">
                CQC Registered
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Fully regulated and compliant, giving you complete peace of mind
                about quality and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-brand-blue py-20 px-6 md:px-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Talk About <span className="italic font-serif">Care?</span>
          </h2>
          <p className="text-blue-lighter mb-8">
            We'd love to hear from you. Get in touch today to arrange a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-brand-blue rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              📞 Call Us Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-brand-blue transition-all">
              💌 Request Consultation
            </button>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            Serving families across South Devon with compassionate, professional
            care
          </p>
        </div>
      </section>

      <GoogleReviews />
    </div>
  );
}