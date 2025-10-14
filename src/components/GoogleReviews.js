// components/GoogleReviews.jsx
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
    text: `I can’t recommend this company highly enough. Their live-in care service has been outstanding — professional, compassionate, and truly focused on dignity and comfort. The carers are well-trained, reliable, and always go the extra mile to make sure everything runs smoothly at home. Communication with the office team is quick and supportive, and they always keep us updated. Having such dedicated people around has given us real peace of mind. If you’re looking for care you can trust, this is the team to go with.`,
    author: "Yogeshwaran Subramaniyan",
  },

  // Add more reviews as needed
];

const GoogleReviews = () => {
  return (
    <section className="bg-[#f9f1ea] py-16 px-4 rounded-t-[3rem] m-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading + Badge */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <p className="text-primary-dark font-medium text-xl mb-2">
              Google Reviews
            </p>
            <h2 className="text-4xl font-black text-black leading-snug">
              Loved by Clients,
              <br />
              <em className="italic font-serif text-4xl">
                Trusted by Families
              </em>
            </h2>
          </div>

          <div className="bg-white rounded-full shadow-xl px-6 py-4 mt-6 md:mt-0 flex items-center gap-4">
            <img
              src="https://cdn-ffpdp.nitrocdn.com/LDRWzZhUeQOnljIFGJJJVlSQeVkKgmfR/assets/images/optimized/rev-96959b3/www.luketom.com/wp-content/uploads/2022/10/google-web.gif"
              alt="Google logo"
              className="w-[250px] h-[100px]"
            />
            {/* <div className="text-primary-dark font-bold text-xl">★★★★★</div>
            <a href="#reviews" className="text-primary-dark underline font-medium text-sm">Google Reviews</a> */}
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-3xl shadow-md p-6 h-[400px] mb-10 flex flex-col">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-800 mb-4 text-sm">{review.text}</p>
                {review.author && (
                  <p className="text-gray-700 text-sm font-semibold mt-auto">
                    {review.author}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GoogleReviews;
