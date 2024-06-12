"use client";
import React from "react";
import useStore from "@/hooks/result";

const SearchResult = () => {
  const fetchedResults = useStore((state) => state.v);

  console.log(fetchedResults)

  return (
    <div className="w-full">
      {fetchedResults?.length > 0 ? (
        <div className="space-y-4">
          {fetchedResults?.map((fetchedResult, index) =>
            product?.title ? (
              <div
                key={index}
                className="border-4 border-neutral-200 bg-white p-5 rounded-lg"
              >
                <div className="flex w-full items-top justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    {fetchedResult?.title}
                  </h3>
                  <a
                    href={fetchedResult?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-gray-100 border px-3 py-1 ml-2 rounded-md h-[35px]"
                  >
                    🔗
                  </a>
                </div>
                <p className="text-md font-medium text-gray-500">
                  {fetchedResult?.price}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {fetchedResult?.description}
                </p>
                <div className="mt-3">
                  <div className="flex flex-row w-full gap-2 flex-wrap">
                    {fetchedResult?.features?.map(
                      (feature, featureIndex) => (
                        <span
                          className="p-2 text-sm bg-blue-700 rounded-lg text-white inline-block"
                          key={featureIndex}
                        >
                          {feature}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found</p>
      )}
    </div>
  );
};

export default SearchResult;
