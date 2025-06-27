import React from "react";
import PiggyBtn from "../components/reusable/PiggyBtn";
import { LuChevronDown } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // ✅ Correct hook
  const path = location.pathname;

  // Dynamic class based on route
  let NavClass = "h-24 ";
  if (path === "/") {
    NavClass += "bg-white text-black";
  } else if (path === "/stories") {
    NavClass += "bg-[#f2f7f8] text-black";
  } else if (path === "/invest") {
    NavClass += "bg-[#7913e5] text-white";
  } else if (path === "/faqs") {
    NavClass += "bg-[#f2f7f8] text-black";
  } else {
    NavClass += "bg-white text-black";
  }
  return (
    <main className={NavClass}>
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-15 h-full">
        <section className="flex items-center justify-center gap-10">
          <Link to="/">
            <div>
              <img src="./piggylogo.svg" alt="piggyLogo" />
            </div>
          </Link>
          <div className="flex items-center gap-[30px]">
            <Link to="/">
              <nav className="flex items-center">
                <span>Save</span>
                <span>
                  <LuChevronDown size={20} />
                </span>
              </nav>
            </Link>
            <Link to="/invest">
              <nav>Invest</nav>
            </Link>

            <Link to="/stories">
              <nav>Stories</nav>
            </Link>
            <Link to="/faqs">
              <nav>FAQs</nav>
            </Link>
            <Link to="/resources">
              <nav className="flex items-center">
                <span>Resources</span>
                <span>
                  <LuChevronDown size={20} />
                </span>
              </nav>
            </Link>
          </div>
        </section>
        <section className="flex items-center gap-2">
          <PiggyBtn label="Sign in" borderStyle="#122231" />
          <PiggyBtn
            label="Create free account"
            bg="#122231"
            textColor="#ffffff"
          />
        </section>
      </div>
    </main>
  );
};

export default NavBar;
