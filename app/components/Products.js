import React from "react";
import TshirtsData from "../Data/Tshirts.json";
import TshirtsData2 from "../Data/Tshirts2.json";
import TshirtsData3 from "../Data/Tshirts3.json";
import { map } from "lodash";
import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div className=" h-28 flex justify-center items-center gap-7">
        <button
          type="button"
          className="text-black bg-white border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-1.5 mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 active:bg-black active:text-white"
        >
          New Drops
        </button>
        <button
          type="button"
          className="text-white bg-black border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-1.5 mr-2 mb-2 text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 active:bg-black active:text-white"
        >
          Trending
        </button>
        <button
          type="button"
          className="text-black bg-white border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-1.5 mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 active:bg-black active:text-white"
        >
          Winter Flex
        </button>
      </div>

      <div className="flex justify-center gap-4">
        {map(TshirtsData, (item, index) => (
          <div className=" w-60" key={index}>
            <div className="align-middle flex justify-center">
              <Image src={item.img1} width={255} height={250} alt={item.img1} />
            </div>
            <div>
              <h3 className="align-middle flex justify-center text-sm">
                {item.name}
              </h3>
              <p className="align-middle flex justify-center text-sm">
                Rs:{item.price}
              </p>
              <div className="align-middle flex justify-center">
                {map(item.size, (p) => (
                  <button
                    type="button"
                    className="text-black bg-white border border-black focus:outline-none text-sm px-5 py-1.5 mr-2 mb-2"
                  >
                    {p}
                  </button>
                ))}
              </div>{" "}
            </div>
          </div>
        ))}
      </div>

      <div className=" h-28 flex justify-center items-center gap-7">
        <button
          type="button"
          className="text-black bg-white border border-gray focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-1.5 mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 active:bg-black active:text-white"
        >
          View All
        </button>
      </div>



<div className=" h-40">
<div className="text-4xl flex justify-center">✨DIWALI PRICE SLASH✨</div>
<div className="text-2xl flex justify-center">LIMITED PERIOD OFFER</div>
</div>


      <div className="flex justify-center gap-4">
        {map(TshirtsData2, (item, index) => (
          <div className=" w-60" key={index}>
            <div className="align-middle flex justify-center">
              <Image src={item.img1} width={255} height={250} alt={item.img1} />
            </div>
            <div>
              <h3 className="align-middle flex justify-center text-sm">
                {item.name}
              </h3>
              <p className="align-middle flex justify-center text-sm">
                Rs:{item.price}
              </p>
              <div className="align-middle flex justify-center">
                {map(item.size, (p) => (
                  <button
                    type="button"
                    className="text-black bg-white border border-black focus:outline-none text-sm px-5 py-1.5 mr-2 mb-2"
                  >
                    {p}
                  </button>
                ))}
              </div>{" "}
            </div>
          </div>
        ))}
      </div>

      <div className=" h-28 flex justify-center items-center gap-7">
        <button
          type="button"
          className="text-black bg-white border border-gray focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-1.5 mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 active:bg-black active:text-white"
        >
          View All
        </button>
      </div>


      <div className=" h-40">
<div className="text-4xl flex justify-center">BUY NOW</div>
<div className="text-2xl flex justify-center">LIMITED PERIOD OFFER</div>
</div>



      <div className="flex justify-center gap-4">
        {map(TshirtsData3, (item, index) => (
          <div className=" w-60" key={index}>
            <div className="align-middle flex justify-center">
              <Image src={item.img1} width={255} height={250} alt={item.img1} />
            </div>
            <div>
              <h3 className="align-middle flex justify-center text-sm">
                {item.name}
              </h3>
              <p className="align-middle flex justify-center text-sm">
                Rs:{item.price}
              </p>
              <div className="align-middle flex justify-center">
                {map(item.size, (p) => (
                  <button
                    type="button"
                    className="text-black bg-white border border-black focus:outline-none text-sm px-5 py-1.5 mr-2 mb-2"
                  >
                    {p}
                  </button>
                ))}
              </div>{" "}
            </div>
          </div>
        ))}
      </div>

      <div className=" h-28 flex justify-center items-center gap-7">
        <button
          type="button"
          className="text-black bg-white border border-gray focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-1.5 mr-2 mb-2 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 active:bg-black active:text-white"
        >
          View All
        </button>
      </div>


    </div>
  );
};

export default Products;
