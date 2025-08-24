import React from "react";

type Props = {
  heading: string;
};

const SectionHeading = ({heading}: Props) => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-x1 sm:text-3x1 text-blue-950 font-bold">{heading}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consectetur velit commodi minus perferendis enim animi eos totam ea et, eligendi officia voluptatibus dignissimos eum minima facere sapiente nobis dolorem.</p>
    </div>
  );
};

export default SectionHeading;
