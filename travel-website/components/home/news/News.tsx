import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Exciting Travel News for You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <NewsCard
            image="/image/n1.jpg"
            title="You have to visit these restaurants in Bangkok"
            date="25 August 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCard
            image="/image/n2.jpg"
            title="This trail in Australia makes you suffer for the best reward"
            date="11 August 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/image/n3.jpg"
            title="Is it worth to visit these countries?"
            date="29 July 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NewsCard
            image="/image/n1.jpg"
            title="You have to visit these restaurants in Sydney"
            date="25 August 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
