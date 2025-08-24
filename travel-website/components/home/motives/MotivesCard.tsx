import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

const MotivesCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">{title}</h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In doloribus corrupti et officiis minus expedita architecto. Ad dolorem a in velit, earum consequuntur, accusamus vitae amet maxime nam tempora facere!</p>
    </div>
  );
};

export default MotivesCard;
