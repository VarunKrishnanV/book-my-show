import React from "react";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";
import Poster from "../components/Poster/Poster.Component";

function Plays() {
    return (
        <>
            <div className="container mx-auto px-4 my-10 ">
                <div className="w-full lg:flex lg:flex-row-reverse gap-5">
                    
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">
                            Play in NCR Delhi
                        </h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-vggqgeject-portrait.jpg" title="Prision Games" subtitle="Akshara Theatre : Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-vggqgeject-portrait.jpg" title="Prision Games" subtitle="Akshara Theatre : Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-vggqgeject-portrait.jpg" title="Prision Games" subtitle="Akshara Theatre : Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-vggqgeject-portrait.jpg" title="Prision Games" subtitle="Akshara Theatre : Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-vggqgeject-portrait.jpg" title="Prision Games" subtitle="Akshara Theatre : Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-vggqgeject-portrait.jpg" title="Prision Games" subtitle="Akshara Theatre : Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-vggqgeject-portrait.jpg" title="Prision Games" subtitle="Akshara Theatre : Delhi"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-vggqgeject-portrait.jpg" title="Prision Games" subtitle="Akshara Theatre : Delhi"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/4 p-4">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div className="bg-white mb-2 px-3">
                            <PlayFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                        </div>
                        <div className="bg-white mb-2 px-3">
                            <PlayFilters title="Language" tags={["English", "Tamil", "Malayalam"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plays;
