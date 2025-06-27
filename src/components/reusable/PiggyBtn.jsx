import React from "react";
import { useLocation } from "react-router-dom";

const PiggyBtn = ({ label, bg, textColor, borderStyle, icon }) => {
  const location = useLocation(); // ✅ Correct hook
  const path = location.pathname;

  // Dynamic class based on route
  let btnClass = "py-3 px-3 w-max rounded-2xl ";
  if (path === "/") {
    btnClass += "bg-white text-black";
  } else if (path === "/stories") {
    btnClass += "bg-[#f2f7f8] text-black";
  } else if (path === "/invest") {
    btnClass += "bg-[#7913e5] border-white text-white";
  } else if (path === "/faqs") {
    btnClass += "bg-[#f2f7f8] text-black";
  } else {
    btnClass += "bg-white text-black";
  }
  return (
    <button
      style={{
        backgroundColor: `${bg}`,
        color: `${textColor}`,
        border: `1px solid ${borderStyle}`,
      }}
      className={btnClass}
    >
      <span className="mr-2">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default PiggyBtn;
