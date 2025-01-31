import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesig from "@/app/_data/LogoDesig";
import Image from "next/image";

function LogoDesign({ onHandleChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-2 md:grid-cols-3 gap-5 mt-10">
        {LogoDesig.map((design, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleChange(design);
            }}
            className={`flex flex-col justify-center text-center gap-2 p-1 hover:border-2 border-primary rounded-xl cursor-pointer ${
              selectedOption == design.title &&
              "border-2 rounded-xl border-primary"
            }`}
          >
            <Image
              className="w-full rounded-xl h-[150px] object-cover"
              src={design?.image}
              alt={design.title}
              width={200}
              height={200}
            />
            <h2 className="font-bold">{design?.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesign;
