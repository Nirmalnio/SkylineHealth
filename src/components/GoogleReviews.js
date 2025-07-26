// components/GoogleReviews.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    text: `Wow! Extremely impressed and satisfied with the care that is given to our grandma by Nurse Next Door Home Care...`,
    author: null,
  },
  {
    text: `An Amazing company that cares about their customers, and families. Very compassionate and understanding...`,
    author: "Colin S.",
  },
  {
    text: `We have been receiving service for my mom from Nurse Next Door and couldn’t be any happier...`,
    author: "Kamelia A.",
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
            <p className="text-primary-dark font-medium text-xl mb-2">Google Reviews</p>
            <h2 className="text-4xl font-black text-black leading-snug">
              Loved by Clients,<br />
              <em className="italic font-serif text-4xl">Trusted by Families</em>
            </h2>
          </div>

          <div className="bg-white rounded-full shadow-xl px-6 py-4 mt-6 md:mt-0 flex items-center gap-4">
            <img src="https://cdn-ffpdp.nitrocdn.com/LDRWzZhUeQOnljIFGJJJVlSQeVkKgmfR/assets/images/optimized/rev-96959b3/www.luketom.com/wp-content/uploads/2022/10/google-web.gif" alt="Google logo" className="w-[250px] h-[100px]" />
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
              <div className="bg-white rounded-3xl shadow-md p-6 h-48 mb-10 flex flex-col">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-800 mb-4 text-sm">{review.text}</p>
                {review.author && (
                  <p className="text-gray-700 text-sm font-semibold mt-auto">{review.author}</p>
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
