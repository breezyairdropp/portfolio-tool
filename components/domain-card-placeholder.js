import LoadingDots from '../components/loading-dots'
import ConfiguredSectionPlaceholder from './configured-section-placeholder'
// import "../app/globals.css"

const DomainCardPlaceholder = ({pendingData}) => {
  console.log(pendingData)
  return (
    <div className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
        <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
          <div className="text-left font-semibold flex items-center">
            {pendingData?.title}
          </div>
          <p className="text-black text-gray-500 font-normal text-sm">
            {pendingData?.vibe}
          </p>
          <p className="text-black text-gray-500 font-normal text-sm">
            {/* {storedData?.result?.length} results */}
            <div className="h-7 w-36 bg-gray-300 rounded-md animate-pulse" />

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
            disabled={true}
            className="cursor-not-allowed bg-gray-100 text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
          >
            <LoadingDots />
          </button>
          <button
            disabled={true}
            className="cursor-not-allowed bg-red-500 text-gray-500 border-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
          >
            <LoadingDots />
          </button>
          </div>
        </div>

        {/* <ConfiguredSection domainInfo={domainInfo} /> */}
      </div>
    // <div className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-10">
    //   <ConfiguredSectionPlaceholder />
    //   <div className="flex justify-between space-x-4 px-2 sm:px-10">
    //     <div className="h-7 w-36 bg-gray-300 rounded-md animate-pulse" />
    //     <div className="flex space-x-3">
    //       <button
    //         disabled={true}
    //         className="cursor-not-allowed bg-gray-100 text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
    //       >
    //         <LoadingDots />
    //       </button>
    //       <button
    //         disabled={true}
    //         className="cursor-not-allowed bg-red-500 text-gray-500 border-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
    //       >
    //         <LoadingDots />
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default DomainCardPlaceholder
