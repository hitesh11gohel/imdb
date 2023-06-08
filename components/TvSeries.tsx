import React, { useContext, useEffect, useState } from "react";
import { ImdbContext } from "./ImdbContext";
import { SkeletonComp } from "./Loader";

const TabsComp = () => {
  const [activeTab, setActiveTab] = useState("Top Rated (100)");
  const handleTab = (e) => setActiveTab(e.target.innerText);
  return (
    <div className="lg:mt-16 mb-8">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select
        </label>
        <select
          id="tabs"
          className="bg-[#101010] border border-gray-600 rounded text-sm block w-full p-2.5 my-4"
        >
          <option>Top Rated (100)</option>
          <option>Most Popular</option>
          <option>Recommended</option>
          <option>IMDb TV</option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="">
          <a
            href="#"
            className={`inline-block p-4 text-gray-500 hover:text-gray-100 ${
              activeTab === "Top Rated (100)"
                ? "border-[#00C2EE] active border-b"
                : ""
            }`}
            aria-current="page"
            onClick={handleTab}
          >
            Top Rated (100)
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className={`inline-block p-4 text-gray-500 hover:text-gray-100 ${
              activeTab === "Most Popular"
                ? "border-[#00C2EE] active border-b"
                : ""
            }`}
            onClick={handleTab}
          >
            Most Popular
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className={`inline-block p-4 text-gray-500 hover:text-gray-100 ${
              activeTab === "Recommended"
                ? "border-[#00C2EE] active border-b"
                : ""
            }`}
            onClick={handleTab}
          >
            Recommended
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className={`inline-block p-4 text-gray-500 hover:text-gray-100 ${
              activeTab === "IMDb TV" ? "border-[#00C2EE] active border-b" : ""
            }`}
            onClick={handleTab}
          >
            IMDb TV
          </a>
        </li>
      </ul>
    </div>
  );
};

const CardComp = ({ item }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 m-3 lg:mt-5 lg:mx-6 max-w-sm border border-gray-800 shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`https://www.imdb.com/title/${item.id}`} target="blank">
        <img
          className="brightness-100 rounded-t-lg h-44 w-full md:w-72 object-cover"
          src={
            // (item["i"] && item["i"][0]) ||
            (item["i"] && item["i"].imageUrl) ||
            "https://cdni.iconscout.com/illustration/premium/thumb/page-not-found-3936853-3277293.png"
          }
          alt={item["l"]}
        />
      </a>
      <div className="p-3">
        <a href="#">
          <h6 className="mb-2 font-bold tracking-tight dark:text-white">
            {item["l"]}
          </h6>
        </a>
        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
          {item["q"]}
        </p>
      </div>
    </div>
  );
};

const TVSeries = () => {
  const ContextData = useContext(ImdbContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(ContextData.data.slice(4));
  }, [ContextData.data]);

  return (
    <>
      <TabsComp />
      <p className="border-b border-slate-800 mx-3">TV Series</p>
      <div className="flex flex-wrap">
        {!ContextData.loading
          ? list.map((ele, i) => <CardComp key={i} item={ele} />)
          : [1, 2, 3, 4].map((_ele, i) => <SkeletonComp key={i} />)}
      </div>
    </>
  );
};

export default TVSeries;
