/* eslint-disable no-constant-condition */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleToggleNav = () => {
    if (window.innerWidth < 1024) {
      setToggleNav((prev) => {
        document.body.style.overflow = prev ? "auto" : "hidden";
        return !prev;
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function navToggel() {

    setToggleNav((prev) => {
      console.log(prev);

      document.body.style.overflow = true ? "auto" : "hidden";
      return !prev;
    });
    scrollToTop();

    setToggleNav(false)
  }

  console.log(!toggleNav);

  return (
    <div>
      {toggleNav && (
        <div
          onClick={() => (setToggleNav(!toggleNav), navToggel())}
          className="fixed lg:hidden inset-0 bg-black opacity-60 backdrop-blur-3xl z-[20]"
        ></div>
      )}
      <div className={`max-w-[1360px] mx-auto  duration-500 ${toggleNav ? "pt-0" : "pt-5"} ${toggleNav ? "sm:px-0" : "sm:px-3 px-0"}`}>
        <div className={`bg-white z-[40] relative shadow-[0px_4px_20px_0px_#0000001A] px-[30px] py-[20px] ${toggleNav ? "sm:rounded-none" : "sm:rounded-[20px] rounded-none"}`}>
          <div className="flex items-center justify-between z-[5000] relative">
            <div>
              <NavLink
                onClick={scrollToTop}

                to="/"
                className="text-[#000000] relative z-[40] font-normal text-[24px]  leading-[26.17px]  whitespace-nowrap cursor-pointer"
              >
                Evolv Infotech
              </NavLink>
            </div>

            <div
              className={`max-lg:fixed max-lg:h-[92.8vh]  max-lg:w-[50%]  max-md:w-[100%] bottom-0  max-lg:flex items-center justify-center max-lg:flex-col  bg-white  lg:bg-transparent duration-700  ${!toggleNav ? "-left-full" : "left-0"
                }`}
            >

              <ol className="flex max-lg:flex-col gap-10 text-center">
                <li>
                  <NavLink
                    onClick={() => navToggel()}
                    className="font-medium font_outfit leading-[20px] text-[16px] text-black hover:text-[#06579C] duration-300 "
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => navToggel()}
                    to="/aboutUs"
                    className="font-medium font_outfit leading-[20px] text-[16px] text-black hover:text-[#06579C] duration-300"
                  >
                    About Us
                  </NavLink>
                </li>
             

                <li
                  className="relative group"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  {/* Row: link + mobile chevron */}
                  <div className="flex items-center gap-2">
                    {/* Main link — click opens Services page */}
                    <NavLink
                      onClick={() => navToggel()}
                      to="/ourService"
                      className="font-medium font_outfit leading-[20px] mt-0.5 text-[16px] !text-black hover:text-[#06579C] duration-300"
                    >
                      Services
                    </NavLink>

                    {/* Mobile-only chevron to expand/collapse submenu without navigating */}
                    <button
                      type="button"
                      aria-label="Toggle services submenu"
                      className="lg:hidden inline-flex items-center justify-center w-6 h-6 rounded hover:bg-black/5"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileServicesOpen((v) => !v);
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>

                  {/* Desktop dropdown (hover) */}
                  {/* Desktop+Mobile dropdown (hover on lg, tap on mobile chevron) */}
                  <div
                    className={`
    
                      block absolute top-full mt-3
                      min-w-[260px] rounded-xl border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      bg-white p-3 transition-all duration-200 z-50
                      left-0 -translate-x-0
                      lg:left-1/2 lg:-translate-x-1/2
                      ${(showServices || mobileServicesOpen)
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"}
  `}
                  >
                    {/* hover/tap bridge so gap me mouse/cursor aane par close na ho */}
                    <div className="absolute -top-3 left-0 right-0 h-3"></div>

                    <ul className="text-left">
                      <li>
                        <NavLink onClick={() => { setMobileServicesOpen(false); navToggel(); }} to="/ourService/infrastructure"
                          className="block px-3 py-2 rounded-md hover:bg-[#06579c] hover:text-white ">
                          Infrastructure
                        </NavLink>
                      </li>
                      <li>
                        <NavLink onClick={() => { setMobileServicesOpen(false); navToggel(); }} to="/ourService/security"
                          className="block px-3 py-2 rounded-md hover:bg-[#06579c] hover:text-white ">
                          Security
                        </NavLink>
                      </li>
                      <li>
                        <NavLink onClick={() => { setMobileServicesOpen(false); navToggel(); }} to="/ourService/software-licensing"
                          className="block px-3 py-2 rounded-md hover:bg-[#06579c] hover:text-white ">
                          Software Licensing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink onClick={() => { setMobileServicesOpen(false); navToggel(); }} to="/ourService/network"
                          className="block px-3 py-2 rounded-md hover:bg-[#06579c] hover:text-white ">
                          Network
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                </li>

                <li>
                  <NavLink
                    onClick={() => navToggel()}
                    to="/ourSolutions"
                    className="font-medium font_outfit leading-[20px] text-[16px] text-black hover:text-[#06579C] duration-300"
                  >
                    solutions
                  </NavLink>
                </li>

              </ol>
              <div className="mt-12 lg:hidden">
                <Link
                  to="/getINTouch"
                  onClick={() => navToggel()}
                  className="font-normal font_outfit text-[18px] leading-[22px] text-[white] bg-[#06579C] px-[10px] py-[11px] rounded-[10px] hover:text-[#06579C] hover:bg-[white] get_start_border duration-500 whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <Link
                to="/getINTouch"
                onClick={() => navToggel()}
                className="font-normal font_outfit text-[18px] leading-[22px] text-[white] bg-[#06579C] px-[10px] py-[11px] rounded-[10px] hover:text-[#06579C] hover:bg-[white] get_start_border duration-500 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            <div
              onClick={handleToggleNav}
              className={`flex justify-end lg:hidden  cursor-pointer `}
            >
              <div
                className=" md:block"
                style={{
                  transform: toggleNav ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              >
                <span
                  style={{
                    transform: toggleNav
                      ? "rotate(5deg) translate(4px, 10px)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                  className="block w-8 h-[3px] bg-black mb-[6px]"
                ></span>

                {/* Second Bar */}
                <span
                  style={{
                    opacity: toggleNav ? 0 : 1,
                    transition: "opacity 0.3s",
                  }}
                  className="block w-8 h-[3px] bg-black mb-[6px]"
                ></span>

                {/* Third Bar */}
                <span
                  style={{
                    transform: toggleNav
                      ? "rotate(-90deg) translate(8px,2px)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                  className="block w-8 h-[3px] bg-black"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
