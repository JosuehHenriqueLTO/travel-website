import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import MotivesCard from "./MotivesCard";

const Motives = () => {
  return (
    <div className="pt-16 pb-24">
      <SectionHeading heading="Why Choose Us" />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <div>
          <MotivesCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div>
          <MotivesCard image="/images/c2.svg" title="Easy and Quick Booking" />
        </div>
        <div>
          <MotivesCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </div>
  );
};

export default Motives;
