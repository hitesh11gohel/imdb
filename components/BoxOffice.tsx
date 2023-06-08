import React, { useContext, useEffect, useState } from "react";
import { ImdbContext } from "./ImdbContext";
import { SkeletonComp } from "./Loader";

const CardComp = ({ item }) => {
  return (
    <div className="lg:w-72 md:w-full m-3 max-w-sm border border-gray-800 shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`https://www.imdb.com/title/${item.id}`} target="blank">
        <img
          className="brightness-100 rounded-t-lg h-44 w-full object-cover"
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
        <p className="mb-3 font-normal text-gray-600 dark:text-white">
          {item["q"]}
        </p>
      </div>
    </div>
  );
};

const BoxOffice = () => {
  const ContextData = useContext(ImdbContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(ContextData.data);
  }, [ContextData.data]);

  return (
    <div className="lg:mt-0 md:mt-5">
      <h5 className="border-b border-slate-800 mx-3">
        Now Playing (Box Office)
      </h5>
      <div className="block xl:block max-h-[calc(100vh-125px)] overflow-x-auto overflow-y-auto overflow-x-auto md:grid grid-rows-2 grid-flow-col gap-2">
        {!ContextData.loading
          ? list.map((ele, i) => <CardComp key={i} item={ele} />)
          : [1, 2, 3].map((_ele, i) => <SkeletonComp key={i} />)}
      </div>
    </div>
  );
};

export default BoxOffice;
