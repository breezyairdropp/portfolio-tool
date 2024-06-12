import Link from "next/link";
// import Github from './GitHub';
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/utils/store";
import "../style/theme.css";
import "../style/style.css";

export default function Header() {

  let [checkBox, setCheckBox] = useState(false)
  let [checkTheme, setCheckTheme] = useState('light')


  function activateDark() {
    setCheckBox(true)
    document.querySelector("body").classList.add('dark')
    // document.querySelector("body").style.background = "#212121";
    // document.querySelector("body").style.color = "#fff";
    // document.querySelector("a.button")?.style.color = "#fff";
    // document.querySelector("a.button")?.style.borderColor = "#fff";
  }
  
  function activateLight() {
    setCheckBox(false)
    document.querySelector("body").classList.remove('dark')
    // document.querySelector("body").style.background = "white";
    // document.querySelector("body").style.color = "#000";
    // document.querySelector("a.button").style.color = "#000";f
    // document.querySelector("a.button").style.borderColor = "#000";
  }

useEffect(() => {
  let whatTheme = localStorage.getItem("theme") || "";  
  setCheckTheme(whatTheme)
  console.log(whatTheme)
checkTheme == 'dark' ? activateDark() : activateLight()

}, [checkTheme]);


function activateTheme() {
  setCheckBox(!checkBox);
  setCheckTheme(checkTheme == 'light' ? 'dark' : 'light')
  console.log(checkBox)
  localStorage.setItem("theme", !checkBox == true ? 'dark' : 'light')


  // !checkBox == true ? activateDark() : activateLight();
  
}
  return (
    <header style={{borderBottom: '1px solid', borderBlockColor:"gray"}} className="max-w-7xl mx-auto flex justify-between items-center w-full sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <h1
          className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight gradient"
          style={{ fontWeight: 600, lineHeight: 1.2 }}
        >
          KUFBREEZY
        </h1>
      </Link>
      <div className="flex max-w-fit items-center justify-center space-x-2 tg-list-item">
        <input
          className="tgl tgl-ios"
          checked={checkTheme == 'dark' ? true : false}
          type="checkbox"
          style={{ display: "none"}}
        />
        <label className="tgl-btn" onClick={() => activateTheme()}></label>
      </div>
      {/* <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
        href="https://businessflaws.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>businessflaws.com</p>
      </a> */}
    </header>
  );
}
