import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GraphQLClient, gql } from "graphql-request";

const endPoint = "https://graphql-pokeapi.graphcdn.app";
const gqlClient = new GraphQLClient(endPoint);

export default function () {
  const router = useRouter();
  const { name } = router.query;
  const pname = name;
  const [data, setData] = useState({});
  const navigationController = () => {
    router.push("/");
  };

  const query = gql`
    query Pokemon($name: String!) {
      pokemon(name: $name) {
        abilities {
          ability {
            name
          }
        }
        stats {
          base_stat
          stat {
            name
            url
            id
          }
          effort
        }
        weight
        types {
          type {
            name
          }
        }
        base_experience
        forms {
          name
        }
        height
        id
        name
        sprites {
          front_default
        }
      }
    }
  `;
  const variables = {
    "name": pname,
  };
  const getPokeData = async () => {
    const { pokemon } = await gqlClient.request(query, variables);
    setData(pokemon);
  };

  useEffect(() => {
    if (pname) {
      const pokemon = getPokeData();
      return () => {};
    }
  }, [pname]);

  return (
    <div className="bg-[url('/Assets/Left.png')] bg-runing-animation  ">
      <div className="container h-full text-center bg-white p-10  mx-auto">
        <div className="  p-10">
          <Link href="/">
            <Image
              src="/Assets/Logo.png"
              className="mx-auto"
              width={150}
              height={80}
              alt="pokomon"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 mb-15   ">
          <div className="flex flex-col gap-5 mx-10	lg:order-first py-10 ">
            <p className="text-2xl font-bold text-blue-800 ">
              {pname?.charAt(0).toUpperCase() + pname?.slice(1)} #0{data?.id}
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              placeat similique alias natus repellat corporis voluptatibus
              consectetur nostrum fuga dignissimos eaque{" "}
            </p>
            <div
              style={{
                clipPath:
                  " polygon(100% 75%, 75% 100%, 0% 100%, 0% 0%, 100% 0%)",
              }}
              className="rounded-md border  bg-gradient-to-r from-red-700 to-orange-700"
            >
              <div
                className="bg-white m-1 rounded-md p-5"
                style={{
                  clipPath:
                    " polygon(100% 75%, 75% 100%, 0% 100%, 0% 0%, 100% 0%)",
                }}
              >
                <div className="flex flex-row justify-around mb-10 ">
                  <div className="">
                    <p className="font-bold">Height</p>
                    <p>{`${Math.trunc((data?.height / 12).toFixed(2))}'${
                      (data?.height / 12).toFixed(2).toString().split(".")[1]
                    }"`}</p>
                  </div>
                  <div>
                    <p className="font-bold">Category</p>

                    <div>
                      {data?.types?.slice(0, 1)?.map((type, i) => (
                        <span className="" key={i}>
                          {type?.type?.name?.charAt(0).toUpperCase() +
                            type?.type?.name?.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row justify-around">
                  <div className="">
                    <p className="font-bold">Weight</p>
                    <p>{data?.weight * 0.0022} lbs</p>
                  </div>
                  <div>
                    <p className="font-bold">Abilities</p>
                    <div className="flex flex-col">
                      {data?.abilities?.flat().map((ability, i) => (
                        <span key={i}>
                          {ability?.ability?.name?.charAt(0).toUpperCase() +
                            ability?.ability?.name?.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second div */}
          <div className="order-first ">
            <Image
              src={data?.sprites?.front_default}
              width={150}
              height={150}
              unoptimized={true}
              alt="character"
              className="mx-auto w-full h-full p-5 hover:transition hover:scale-125 duration-300 ease-in-out"
            />
          </div>
          {/* third div */}
          <div className=" flex flex-col text-left justify-around mx-10">
            <div className="mb-10">
              <p className="font-bold   mb-3 ">Type </p>

              {data?.types?.map((type, i) => (
                <span
                  className="p-1 px-2 rounded-sm text-center mr-2 text-white bg-lime-500 "
                  key={i}
                >
                  {type?.type?.name?.charAt(0).toUpperCase() +
                    type?.type?.name?.slice(1)}
                </span>
              ))}
            </div>
            <div className="mb-10">
              <p className="font-bold mb-2">Weaknesses</p>
              {data?.abilities?.flat().map((ability, i) => (
                <span
                  className="bg-purple-700 text-white p-1 mr-2 rounded-sm"
                  key={i}
                >
                  {ability?.ability?.name?.charAt(0).toUpperCase() +
                    ability?.ability?.name?.slice(1)}
                </span>
              ))}
            </div>

            <div className="flex justify-between flex-col">
              <p className="font-bold">Stats</p>
              <div>
                {data?.stats?.map((stat, i) => (
                  <>
                    <p key={i} className="text-left mb-1">
                      {stat.stat.name?.charAt(0).toUpperCase() +
                        stat.stat.name.slice(1)}
                    </p>

                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-200">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                        style={{ width: `${stat.base_stat}%` }}
                      ></div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* button to home */}
        <div className="text-center  p-30">
          <button
            onClick={navigationController}
            className=" w-1/3 bg-yellow-500 flex flex-row mx-auto justify-center items-center text-white border border-blue-700 px-3 py-2 "
          >
            <AiFillHome className="mr-1" /> <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
