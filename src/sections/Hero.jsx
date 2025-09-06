import React, { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-between items-center gap-10 max-container px-6 pt-28"
    >
      {/* Left content */}
      <div className="xl:w-2/5 w-full flex flex-col justify-center items-start">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-grey text-lg leading-8 mt-6 mb-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-14 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-grey">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Shoe image + Thumbnails */}
      <div className="w-full xl:flex-1 flex flex-col items-center justify-center bg-primary bg-cover bg-center rounded-xl py-10 sm:min-h-[700px] relative">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain"
        />

        <div className="flex gap-4 sm:gap-6 mt-8 sm:absolute sm:-bottom-[5%] sm:left-[10%] sm:mt-0">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.bigShoe}
              imgURL={shoe}
              changeBigShoeImage={(img) => setBigShoeImg(img)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
