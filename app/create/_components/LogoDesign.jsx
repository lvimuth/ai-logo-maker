import React from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesig from "@/app/_data/LogoDesig";
import Image from "next/image";

function LogoDesign() {
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-2 md:grid-cols-3 gap-5 mt-10">
        {LogoDesig.map((design, index) => (
          <div key={index}>
            <Image
              className="w-full rounded-xl h-[150px] object-cover"
              src={design?.image}
              alt={design.title}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesign;
