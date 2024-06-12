"use client";
import React from "react";
import { FormEvent, useState } from "react";
import {
  exportData,
  SearchGoogleMaps,
} from "../action/searchGoogleMaps";
import useStore from "@/hooks/result";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const addFetchedResult = useStore((state) => state.addFetchedResult);
  const fetchedResults = useStore((state) => state.fetchedResults);
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const fetchedResults = await SearchGoogleMaps(searchPrompt);
      console.log(fetchedResults);
      addFetchedResult(fetchedResults);
      setSearchPrompt("");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const exportProducts = async () => {
    try {
      await exportData(fetchedResults);
      alert("Exported");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full items-left gap-3">
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="w-full p-3 border-4 border-neutral-200 rounded-lg text-gray-500"
      />
      <div className="flex gap-2 flex-2">
        <button
          onClick={handleSubmit}
          className={`${
            searchPrompt !== "" && !isLoading ? "cursor-pointer" : ""
          } bg-gray-800 w-[150px] disabled:bg-gray-400 rounded-md px-5 py-3 text-white`}
          disabled={searchPrompt === "" || isLoading}
        >
          {isLoading ? "Scraping..." : "Scrape"}
        </button>
        <button
          disabled={!fetchedResults?.length || isLoading}
          onClick={exportProducts}
          className={`bg-gray-800 disabled:bg-gray-400 ${
            fetchedResults?.length && !isLoading ? "cursor-pointer" : ""
          } rounded-md shadow-xs px-5 py-3 text-white`}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
