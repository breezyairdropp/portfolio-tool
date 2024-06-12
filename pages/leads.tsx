"use client";
import type { NextPage } from "next";
import Head from "next/head";
import {
  useRef,
  useState,
  useEffect,
  Key,
  useContext,
  useLayoutEffect,
} from "react";
import DropDown, { VibeType } from "@/components/DropDown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingDots from "@/components/LoadingDots";
import Toggle from "@/components/Toggle";
import DomainCardPlaceholder from "@/components/domain-card-placeholder";
import { Nav } from "@/components/Nav";
import "../app/globals.css";
import "../style/style2.css";
import { Button } from "@headlessui/react";
import "../style/style.css";
import "../style/tableStyle.css";


const Leads: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Google");
  const [isPro, setIsPro] = useState(false);
  const [checkTheme, setCheckTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const [storedFetch, setStoredFetch] = useState("");
  const [pendingFetch, setPendingFetch] = useState("");

  const [textArea, setTextArea] = useState("");

  useLayoutEffect(() => {
    let whatTheme = localStorage.getItem("theme") || "";
    setCheckTheme(whatTheme);
    // Get the value from local storage if it exists
    let value = localStorage.getItem("storedFetch") || "";
    setStoredFetch(value);

    let getPendingFetch = localStorage.getItem("dataPending") || "";

    setPendingFetch(getPendingFetch);
  }, [storedFetch, pendingFetch]);

  function activateDark() {
    document.querySelector("body").classList.add("dark");
  }

  function activateLight() {
    document.querySelector("body").classList.remove("dark");
  }

  function darkMode() {
    console.log(checkTheme);

    document.querySelector("body").style.background = "#212121";
    // document.querySelector("body").style.color = "white";
  }

  console.log(checkTheme);

  // checkTheme == 'dark' ? darkMode() : null

  // console.log(Math.random().toString().slice(2))

  function Modal() {
    // setShowModal(true)
    console.log(modalData?.result);
    let resultContent = "";

    let resultListTemp = "";
    let resultTitle = "";

    // modalData?.result.map

    modalData?.result.forEach((company) => {
      resultTitle = company?.category;
      resultListTemp += `<tr>
          <td>${company?.storeName}</td>
          <td>${company?.address}</td>
          <td>${company?.phone}</td>
          <td>${company?.bizWebsite}</td>
          <td>${company?.ratingText}</td>
          </tr>`;
    });

    const resultTableTemp = `<h2>${resultTitle} (${modalData?.result?.length} )</h2>
  <div class="text-center">
  <button class="btn btn-default"><span class="glyphicon glyphicon-arrow-down"></span> DOWNLOAD DATA</button>
  </div>
  <br>
  <div style={{background: black}} class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="table-responsive" data-pattern="priority-columns">
          <table summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality" class="table table-bordered">
            <!-- <caption class="text-center">An example of a responsive table based on RWD-Table-Patterns' <a href="http://gergeo.se/RWD-Table-Patterns/" target="_blank"> solution</a>:</caption> -->
            <thead>
              <tr>
                <th>Company Name</th>
                <th data-priority="1">Address</th>
                <th data-priority="2">Phone</th>
                <th data-priority="3">Website</th>
                <th data-priority="4">Rating</th>
              </tr>
            </thead>
            <tbody>
              ${resultListTemp}
            </tbody>
          </table>
        </div>
        <button class="btn btn-default"><span class="glyphicon glyphicon-arrow-down"></span> DOWNLOAD DATA</button>
      </div>
    </div>
  </div>`;

    return (
      <div
      style={{zIndex: 100}}
        className="absolute inset-0 bg-black z-10 items-center justify-center"
        dangerouslySetInnerHTML={{ __html: resultTableTemp }}
      ></div>
    );
  }

  const ResultCard = ({ storedData, key }) => {
    const [removing, setRemoving] = useState(false);
    return (
      <div className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
        {/* <span className="text-xl font-semibold text-center items-center">Eatery in Uyo</span> */}

        <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
          {/* <div className="w-6 h-6 rounded-full bg-gray-300 animate-pulse" /> */}
          <div className="text-left font-semibold flex items-center">
            {storedData?.title}
          </div>
          <p className="text-black text-gray-500 font-normal text-sm">
            {storedData?.vibe}
          </p>
          <p className="text-black text-gray-500 font-normal text-sm">
            {storedData?.result?.length} results
          </p>
        </div>
        <div className="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
          <a
            href={`http://kufre.me`}
            target="_blank"
            rel="noreferrer"
            className=" text-left font-semibold flex items-center"
          >
            <span className="inline-block ml-2"></span>
          </a>
          <div className="flex space-x-3">
            <button
              onClick={(e) => {
                e.preventDefault();

                console.log(this);
                console.log(storedData);
                setModalData(storedData);
                setShowModal(true);
              }}
              //   onClick={() => Modal(storedData?.result)}
              // disabled={isValidating}
              className={`bg-white hover:text-black hover:border-black text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
            >
              Open
              {/* <LoadingDots /> */}
              {/* {isValidating ? <LoadingDots /> : 'Refresh'} */}
            </button>

            <button
              // onClick={async () => {
              //   setRemoving(true)
              //   try {
              //     await fetch(`/api/remove-domain?domain=${domain}`)
              //     await revalidateDomains()
              //   } catch (error) {
              //     alert(`Error removing domain`)
              //   } finally {
              //     setRemoving(false)
              //   }
              // }}
              // disabled={removing}
              className={`${
                removing ? "cursor-not-allowed bg-gray-100" : ""
              }bg-red-500 text-white border-red-500 hover:text-red-500 hover:bg-white py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
            >
              Remove
              {/* {removing ? <LoadingDots /> : 'Remove'} */}
            </button>
          </div>
        </div>

        {/* <ConfiguredSection domainInfo={domainInfo} /> */}
      </div>
    );
  };

  async function getQueryResult(e: { preventDefault: () => void }) {
    e.preventDefault();

    let newPendingFetch;
    let puttingData = {
      title: searchString,
      vibe: vibe,
    };

    let pendingArray = JSON.parse(localStorage.getItem("dataPending"));

    document.getElementById("pendingFetch").innerHTML = 
    
    `<div class="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
    <div class="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
      <div class="text-left font-semibold flex items-center">${puttingData?.title}</div>
      <p class="text-black text-gray-500 font-normal text-sm">${puttingData?.vibe}</p>
      <div class="h-7 w-36 bg-gray-300 rounded-md animate-pulse"></div>
    </div>
    <div class="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
      <a
        target="_blank"
        rel="noreferrer"
        class=" text-left font-semibold flex items-center"
      >
        <span class="inline-block ml-2"></span>
      </a>
      <div class="flex space-x-3">
        <button
          disabled=""
          class="cursor-not-allowed bg-gray-100 text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
        >
          <span class="loading-dots_loading__LGQca">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <button
          disabled=""
          class="cursor-not-allowed bg-red-500 text-gray-500 border-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
        >
          <span class="loading-dots_loading__LGQca">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </div>
  </div>
  ` + document.getElementById("pendingFetch").innerHTML;

    localStorage.setItem(
      "dataPending",
      JSON.stringify([
        {
          title: searchString,
          vibe: vibe,
        },
      ])
    );

    if (pendingFetch == null || pendingFetch == "") {

      localStorage.setItem(
        "dataPending",
        JSON.stringify([
          {
            title: searchString,
            vibe: vibe,
          },
        ])
      );

      
    } else if (pendingFetch != null || pendingFetch != "") {
      // newCartItemArray = userCarts;
      newPendingFetch = {
        title: searchString,
        vibe: vibe,
      };

      pendingArray?.unshift(newPendingFetch);
      localStorage.setItem("dataPending", JSON.stringify(pendingArray));
    }

    console.log(searchString);
    let newStoredFetch;
    let storedArray = JSON.parse(localStorage.getItem("storedFetch"));

    let letsDo = await fetch(`/api/add-domain?query=${searchString}`);

    let checkFetch = await letsDo.json();

    let fetchedResult = await checkFetch;

    if (storedFetch == null || storedFetch == "") {
      console.log("kufre");
      localStorage.setItem(
        "storedFetch",
        JSON.stringify([
          {
            title: searchString,
            vibe: vibe,
            result: fetchedResult,
          },
        ])
      );
    } else if (storedFetch != null || storedFetch != "") {
      console.log("breezy");

      // newCartItemArray = userCarts;
      newStoredFetch = {
        title: searchString,
        vibe: vibe,
        result: fetchedResult,
      };

      storedArray?.unshift(newStoredFetch);
      localStorage.setItem("storedFetch", JSON.stringify(storedArray));
    }
  }

  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-4 min-h-screen mt-1 pb-2">
      <meta name="theme-color" content="#825fff" />
      <Head>
        <title>Powers at your fingertips</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <p className="border rounded-2xl py-1 px-4 text-sm mb-5 hover:scale-105  rotating-text-wrapper">
          <span>
            <b>Excellence</b> yields <b>Opportunities</b>
          </span>
          <span>
            Think <b>Bias for Action</b>
          </span>
          <span>
            <b>89,982</b> Leads generated so far
          </span>
        </p>
        <br />
        <br />
        <h1 className="sm:text-7xl text-3xl max-w-[708px] sm:max-w-[1100px] font-bold">
          Ambition is the first step towards
          <span className="sm:text-7xl ml-5 text-3xl font-bold gradient">
            SUCCESS
          </span>
        </h1>
        <br />
        <div className="mt-7 " style={{ scale: 1.15 }}>
          <Toggle colorTheme={checkTheme} isPro={isPro} setIsPro={setIsPro} />
        </div>

        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <p className="text-sm text-left font-medium">
              Your limitation is a function of your imagination{" "}
              <span className="text-sm text-gray-400">
                (trust me, I'm lying)
              </span>
              .
            </p>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              function removeAnimation() {
                setTextArea("");
              }
              setTextArea("animated zoomOutDown");

              setTimeout(removeAnimation, 2000);
            }}
          >
            omo
          </Button>
          <textarea
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            rows={4}
            id="textField"
            // data-animation="animated zoomOutDown"
            className={`${textArea} w-full max-w-1xl sm:max-w-2xl rounded-md items-center border-gray-300 shadow-sm focus:border-black focus:ring-black my-5`}
            placeholder={"e.g. Oil company in USA"}
          />
          <div className="flex mb-5 items-center space-x-3">
            <p className="text-left font-medium">Select your vibe.</p>
          </div>
          <div className="block">
            <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
          </div>

          {!loading && (
            <button
              onClick={getQueryResult}
              style={{
                color: checkTheme == "dark" ? "white" : "black",
                borderRadius: "0.375rem",
              }}
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full hover:scale-105 transition duration-300 ease-in-out rotating-button-wrapper "
            >
              <span>
                <b>Apply</b> <b> Pressure</b>
              </span>
              <span>
                <b>Powers</b>
                <b> on your Fingertips</b>
              </span>
              <span>
                <b>Lets</b>
                <b> fucking go</b>
              </span>
            </button>
            // <button
            //   className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            //   onClick={getQueryResult}
            // >
            //   Apply pressure &rarr;
            // </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <br />
        <br />
        <div className="w-full max-w-1xl sm:max-w-2xl">
          <div className="w-full max-w-1xl sm:max-w-2xl">
            <div id="pendingFetch">
              {pendingFetch
                ? JSON.parse(pendingFetch).map(
                    (pendingData: any, index: Key | null | undefined) => {
                      console.log(index);
                      return (
                        <DomainCardPlaceholder
                          key={index}
                          pendingData={pendingData}
                        />
                      );
                    }
                  )
                : ""}
            </div>
            <div id="storedFetch">
              {storedFetch
                ? JSON.parse(storedFetch).map(
                    (storedData: any, index: Key | null | undefined) => {
                      console.log(index);
                      return <ResultCard key={index} storedData={storedData} />;
                    }
                  )
                : ""}
            </div>
          </div>
          {showModal && <Modal />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leads;
