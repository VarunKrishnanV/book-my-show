import React from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from 'react-icons/bi'

const NavSm = () => {
    return <>
        <div className="text-gray-700 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">
                    Fast and Furious
                </h3>
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full" />
            </div>
        </div>
    </>;
};


const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-40">
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo" className="w-full h-full" />
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

function MovieNavbar() {
    return (
        <>
            <nav className="bg-white lg:bg-darkBackground-700 p-4 lg:border-b-0 border-b-2">
                {/* Mobile screen */}
                <div className="md:hidden">
                    <NavSm />
                </div>

                {/* medium / tab screen */}
                <div className="hidden md:flex lg:hidden">
                    <NavSm />
                </div>

                {/* largescreen */}
                <div className="hidden lg:flex w-full">
                    <NavLg />
                </div>
            </nav>
        </>
    );
}

export default MovieNavbar;
