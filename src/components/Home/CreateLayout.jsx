import React from "react";
import SpeakerBand from "../shared/SpeakerBand";
import EqualizerAudio from "../shared/EqualizerAudio";
import TestimonialCard from "../Testimonials/TestimonialCard";

function CreateLayout(props) {
  return (
    <section className="speaker-layout relative lg:h-[620px]">
      <h6 className="text-center flex items-center justify-center gap-2">
        <span>
          <EqualizerAudio />
        </span>
        <span>A new easy way to create </span>
      </h6>
      <h2
        className="text-center mt-4 mb-8"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <span className="text-[#86868B]">think.speak.</span>
        create
      </h2>
      <div className="box-container flex flex-wrap">
        <div className="icon-container m-auto mt-4">
          <SpeakerBand />
        </div>
      </div>
      <div
        className="card-wrapper w-[285px] hidden lg:inline-block absolute top-[12rem] left-[90px]"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <TestimonialCard
          imgSrc={`/assets/testimonials/testi-1.svg`}
          name="Sofia"
          title="Engineer"
          description="Could you smooth out the surface of this dodecahedron?"
        />
      </div>
      <div
        className="card-wrapper w-[285px] hidden lg:inline-block absolute top-[12rem] right-[80px]"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <TestimonialCard
          imgSrc={`/assets/testimonials/testi-2.svg`}
          name="Sofia"
          title="Engineer"
          description="Could you smooth out the surface of this dodecahedron?"
        />
      </div>
      <div
        className="card-wrapper w-[285px] hidden lg:inline-block absolute top-[23rem] right-[20px]"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <TestimonialCard
          imgSrc={`/assets/testimonials/testi-3.svg`}
          name="Sofia"
          title="Engineer"
          description="Could you smooth out the surface of this dodecahedron?"
        />
      </div>
      <div
        className="card-wrapper w-[285px] hidden lg:inline-block absolute top-[23rem] left-[30px]"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <TestimonialCard
          imgSrc={`/assets/testimonials/testi-4.svg`}
          name="Sofia"
          title="Engineer"
          description="Could you smooth out the surface of this dodecahedron?"
        />
      </div>
      <div
        className="card-wrapper w-[285px] hidden lg:inline-block absolute bottom-0 left-[35%]"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <TestimonialCard
          imgSrc={`/assets/testimonials/testi-5.svg`}
          name="Sofia"
          title="Engineer"
          description="Could you smooth out the surface of this dodecahedron?"
        />
      </div>
    </section>
  );
}

export default CreateLayout;
