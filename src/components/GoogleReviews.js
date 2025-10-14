import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    text: `We have been delighted with the wonderful care one staff member in particular has given to my Mum these past four months.
Mum has gone from surviving to thriving. It's wonderful Mum has been able to return to her
flat and enjoy going out again every day on Paignton seafront, talking and interacting with residents and
the local community. This staff member has been very attentive to Mum's specific needs and what makes her happy and keeps her calm. This staff member has a warm, friendly personality, she is always smiling and has unbelievable patience. We have become very fond of her and she feels part of our family.
A Big Thank You Skyline.`,
    author: "Tim R (Son of Client)",
  },
  {
    text: `My Mum has a live in carer who is absolutely amazing, she looks after Mum for all her needs, she sends me photos of mum of how well she's doing. And keeps me in touch with everything that mum is doing.
She even looks after me when I go and visit mum. She has become a dear friend not just mum's carer.
I haven't seen Mum looking so well in a long time.
She has supported mum through her grieving of losing her husband just a few months ago.
I live away from mum, and I don't have to worry about her because I know she's being so well looked after.
And the director keeps in touch with me, so I feel connected with the company
Thank you Skyline`,
    author: "J C (Daughter of Client)",
  },
  {
    text: `I can't recommend this company highly enough. Their live-in care service has been outstanding — professional, compassionate, and truly focused on dignity and comfort. The carers are well-trained, reliable, and always go the extra mile to make sure everything runs smoothly at home. Communication with the office team is quick and supportive, and they always keep us updated. Having such dedicated people around has given us real peace of mind. If you're looking for care you can trust, this is the team to go with.`,
    author: "",
  },
];

const GoogleReviews = () => {
  return (
    <section className="bg-primary/5 py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 rounded-3xl sm:rounded-t-[3rem] my-4 sm:mx-6 lg:mx-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Badge */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-10 lg:mb-12 gap-6">
          <div className="w-full lg:w-auto">
            <p className="text-primary font-medium text-base sm:text-lg lg:text-xl mb-2">
              Google Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight sm:leading-snug">
              Loved by Clients,
              <br />
              <em className="italic font-serif text-3xl sm:text-4xl lg:text-5xl text-secondary">
                Trusted by Families
              </em>
            </h2>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl px-4 sm:px-6 py-3 sm:py-4 w-full lg:w-auto flex items-center justify-center lg:justify-start">
            <img
              src="https://cdn-ffpdp.nitrocdn.com/LDRWzZhUeQOnljIFGJJJVlSQeVkKgmfR/assets/images/optimized/rev-96959b3/www.luketom.com/wp-content/uploads/2022/10/google-web.gif"
              alt="Google logo"
              className="w-40 h-16 sm:w-52 sm:h-20 lg:w-60 lg:h-24 object-contain"
            />
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-12 sm:pb-14"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white mb-10 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 sm:p-6 h-[380px] sm:h-[400px] lg:h-[420px] flex flex-col">
                  <div className="text-yellow-400 text-xl sm:text-2xl mb-3 sm:mb-4">
                    ★★★★★
                  </div>
                  <div className="flex-1 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                  {review.author && (
                    <div className="pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-gray-700 text-xs sm:text-sm font-semibold">
                        — {review.author}
                      </p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="https://www.google.com/search?sca_esv=d14af1df391cf56f&rlz=1C1UEAD_enIN1017IN1017&sxsrf=AE3TifPJeQnceRRdRRbHSo6keRAHXKwoJQ:1760430555072&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzejUEmaLy_vKWO0yCPEhCiL_6qt0zuAav1Wc_1a6Qxa2kF8AxMxAABshbYwE98SMbs6R42xbwHqprHQStpOLjudvNbNKUBxEwf8wykfHZgNPxGk8Y9SU78AsIQcep7HeGrw5t4%3D&q=Skyline+Health+Care+Solutions+Ltd+Reviews&sa=X&ved=2ahUKEwj-8YvvoqOQAxVUxDgGHW1vLDsQ0bkNegQIJxAE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            Read More Reviews on Google
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
    </section>
  );
};

export default GoogleReviews;
