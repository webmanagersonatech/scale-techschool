import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import Link from "next/link";

import { courses, Course } from "../data/courses";

interface CoursePageProps {
  course: Course;
}



export default function TechnologyProgramsCarousel() {
  return (
    <section className="relative py-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gray-100" />
        <div className="w-1/2 bg-gray-200" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-heading text-center mb-3">
          Technology <span className="text-emerald-600">Programs</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our technology programs include new age specializations in various fields
        </p>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {courses.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
      h-full bg-white rounded-2xl overflow-hidden
      border border-gray-200
      transition-shadow duration-300
      hover:shadow-lg
    "
              >
                {/* Image */}
                <div className="relative h-44">
                  {item.recommended && (
                    <span className="
          absolute top-3 left-3 z-10
          text-[11px] font-semibold tracking-wide
          px-3 py-1 rounded-full
          bg-royal text-white
        ">
                      RECOMMENDED
                    </span>
                  )}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-5">
                    {item.title}
                  </h3>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center mb-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.months}</p>
                      <p className="text-xs text-gray-500">Months</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.hours}</p>
                      <p className="text-xs text-gray-500">Hours</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.projects}</p>
                      <p className="text-xs text-gray-500">Projects</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 mb-4" />

                  {/* Features */}
                  <div className="text-xs text-gray-600 space-y-1 mb-6">
                    <div className="flex justify-between">
                      <span>Mentorship</span>
                      <span className="text-emerald-600 font-medium">Yes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Career Support</span>
                      <span className="text-emerald-600 font-medium">Yes</span>
                    </div>
                  </div>

                  {/* CTA */}
                 <Link
                    href={`/courses/${item.slug}`}
                    className="mt-auto w-full py-2.5 rounded-lg text-sm font-semibold border border-royal text-royal transition-all duration-300 hover:bg-royal hover:text-white text-center"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  )
}
