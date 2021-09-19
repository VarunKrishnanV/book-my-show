import React from "react";
import logo from "../../images/logo.png";
import { BiChevronDown, BiMenu, BiSearch } from 'react-icons/bi'

const NavSm = () => {
    return <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">Its All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
                    Delhi NCR <BiChevronDown />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full" />
            </div>
        </div>
    </>;
};

const NavMd = () => {
    return <>
        <div className="w-full flex items-center gap-2 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input type="search" placeholder="Search for movies, events, plays, sports and activities" name="" id="" className="w-full outline-none border-none bg-transparent" />
        </div></>;
};

const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-40">
                        <img src={logo} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center gap-2 bg-white px-3 py-1 rounded-md">
                        <BiSearch />
                        <input type="search" placeholder="Search for movies, events, plays, sports and activities" name="" id="" className="w-full outline-none border-none bg-transparent" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                        Delhi NCR <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

function Navbar() {
    return (
        <>
            <div className="navbar bg-darkBackground-700 px-4 py-3">
                {/* Mobile screen */}
                <div className="md:hidden">
                    <NavSm />
                </div>

                {/* medium / tab screen */}
                <div className="hidden md:flex lg:hidden">
                    <NavMd />
                </div>

                {/* largescreen */}
                <div className="hidden lg:flex w-full">
                    <NavLg />
                </div>
            </div>
        </>
    );
}

export default Navbar;
