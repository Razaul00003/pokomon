import Image from "next/image";
import Link from "next/link";
import React from "react";

const PocoCard = ({ data, power }) => {
  const { image, name, id } = data;

  return (
    <Link href={`details/${name}`}>
      <div
        className="bg-white p-2 lg:hover:text-white lg:hover:bg-blue-800 rounded-md lg:hover:transition duration-500 ease-in-out"
        style={{
          clipPath: " polygon(100% 75%, 75% 100%, 0% 100%, 0% 0%, 100% 0%)",
        }}
      >
        <div className="bg-[#eee] rounded p-0  ">
          <p className="text-gray-600 ">#0{id}</p>
          <Image
            src={image}
            width={150}
            height={120}
            alt="image"
            className="mx-auto overflow-x-visible lg:hover:transition lg:hover:scale-125 duration-700 ease-in-out"
          />
        </div>
        <div className="p-2">
          <h1 className=" mb-2 font-bold text-xl  ">
            {" "}
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h1>
          <div className="flex gap-3">
            {power.name !== "unknown" ? (
              <p
                className={`text-xs p-1 px-3 ${
                  power.name == "water"
                    ? " bg-blue-500"
                    : power.name === "fire" || power.name === "fighting"
                    ? " bg-orange-500"
                    : power.name === "steel" || power.name === "ghost"
                    ? " bg-gray-700"
                    : power.name === "grash" || power.name === "ground"
                    ? "bg-lime-600"
                    : power.name === "poison" || power.name == "flying"
                    ? "bg-fuchsia-800"
                    : " bg-violet-600"
                } text-white rounded-md`}
              >
                {power.name.charAt(0).toUpperCase() + power.name.slice(1)}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PocoCard;
