import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { debounce } from "lodash";
import { useQuery } from "react-query";
import { ImdbContext } from "../pages/ImdbContext";
import { SearchMovie } from "../services";
import { HeaderPropType } from "../types";

function Header({ handleResponse }: HeaderPropType) {
  const [search, setSearch] = useState("");
  const ContextData = useContext(ImdbContext);
  const QueryReq = useQuery("posts", () => fetchPosts(search, false), {
    cacheTime: 10 * (60 * 1000),
  });

  const fetchPosts = async (value, isUpdate) => {
    const isDataAvaliable = JSON.parse(localStorage.getItem("movieList"));
    if (isDataAvaliable && !isUpdate) {
      ContextData.setLoading(true);
      setTimeout(() => {
        ContextData.setLoading(false);
        handleResponse(isDataAvaliable);
        return isDataAvaliable;
      }, 500);
    } else {
      ContextData.setLoading(true);
      const response = await SearchMovie(value);
      localStorage.setItem("movieList", JSON.stringify(response));
      handleResponse(response);
      ContextData.setLoading(false);
      return response;
    }
  };

  const debounceFn = useMemo(
    () =>
      debounce((inputValue) => {
        setSearch(inputValue);
        fetchPosts(inputValue, true);
      }, 1000),
    []
  );

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    debounceFn(inputValue);
  };

  return (
    <nav className="bg-[#101010] text-gray-100 dark:bg-[#101010] shadow-2xl">
      <div className="flex justify-between items-center p-4">
        <a href="/" className="mx-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            IMDb
          </span>
        </a>
        <div className="flex md:order-1 md:mx-4 lg:grow">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar-mobile"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              value={search}
              onChange={handleChange}
            />
          </div>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar-web"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#101010] dark:bg-[#101010] md:dark:bg-[#101010] dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                <div className="relative">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://toppng.com/uploads/preview/black-and-white-stockportable-network-account-icon-11553436383dwuayhjyvo.png"
                    alt=""
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
