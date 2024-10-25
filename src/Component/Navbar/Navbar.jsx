import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AthContext } from "../../Context/Context";
import logo from "/Images/amazon.png";
import TitleAndIcon from "../TitleAndIcon/TitleAndIcon";
export default function Navbar({ cart }) {
  const { userToken, setuserToken } = useContext(AthContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // حالة القائمة المنسدلة

  function SignOut() {
    setuserToken("");
    localStorage.removeItem("token");
    navigate("/Login");
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-colornav text-colorwhite max-w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex mr-2 flex-shrink-0 text-colororg font-bold items-center">
                FreshCart
                <i className="fa-brands fa-opencart"></i>
              </div>
              <div className="hidden sm:block">
                <ul className="flex space-x-4">
                  {userToken && (
                    <>
                      <li>
                        <NavLink to="/" className="hover:text-colororg">
                          <TitleAndIcon />
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Products" className="hover:text-colororg">
                          <TitleAndIcon />
                          Products
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Categories"
                          className="hover:text-colororg"
                        >
                          <TitleAndIcon />
                          Categories
                        </NavLink>
                        </li>
                             
  
                      <li>
                        <NavLink to="/Brands" className="hover:text-colororg">
                          <TitleAndIcon />
                          Brands
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Cart" className="hover:text-colororg">
                          <TitleAndIcon />
                          Cart
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/allorders"
                          className="hover:text-colororg"
                        >
                          <TitleAndIcon />
                          Orders
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              {!userToken && (
                <>
                  <NavLink
                    to="/Register"
                    className="bg-colorbtn hover:bg-colormsg p-1 mr-1 font-medium rounded-md"
                  >
                    <TitleAndIcon />
                    Register
                  </NavLink>
                  <NavLink
                    to="/Login"
                    className="bg-colormsg hover:bg-colorbtn p-1 mr-1 font-medium rounded-md"
                  >
                    <TitleAndIcon />
                    Login
                  </NavLink>
                </>
              )}
              <Link to="/Cart" className="relative">
                <span className="bg-colorred text-colorwhite rounded-md p-1 absolute">
                  {cart?.numOfCartItems}
                </span>
                <img className="w-8 h-8" src={logo} alt="amazon.png" />
              </Link>
              {userToken && (
                <button
                  onClick={SignOut}
                  className="bg-colorred p-2 font-medium rounded-md"
                >
                  <TitleAndIcon />
                  Signout
                </button>
              )}
            </div>

            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 rounded-md text-gray-400 hover:bg-gray-700"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden px-2 pb-3 pt-2">
            <ul className="space-y-1">
              {userToken && (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className="block hover:bg-gray-200 hover:text-colororg transition"
                    >
                      <TitleAndIcon />
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Products"
                      className="block hover:bg-gray-200 hover:text-colororg transition"
                    >
                      <TitleAndIcon />
                      Products
                    </NavLink>
                  </li>
                  <li
                  
                  >
                    <NavLink className=" hover:text-colororg transition">
                      <TitleAndIcon />
                      Categories
                    </NavLink>
                    </li>
                
                  <li>
                    <NavLink
                      to="/Brands"
                      className="block hover:bg-gray-200 hover:text-colororg transition"
                    >
                      <TitleAndIcon />
                      Brands
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Cart"
                      className="block hover:bg-gray-200 hover:text-colororg transition"
                    >
                      <TitleAndIcon />
                      Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/allorders"
                      className="block hover:bg-gray-200 hover:text-colororg transition"
                    >
                      <TitleAndIcon />
                      Orders
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
