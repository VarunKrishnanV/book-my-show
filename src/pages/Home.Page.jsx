import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

function HomePage() {

    const remommendMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "Action | Thriller"
        },
    ];

    const premierMovies = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137316-jlvpmlrpyw-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-pxtjxgdyua-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00303783-plktjmqsfm-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
    ];

    const onlineStreamEvents = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-seeytmmegs-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314597-lfqpwpkgdp-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131881-cfsngphajb-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313864-mkyavlsbnz-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313864-mkyavlsbnz-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311041-ztybvrxjnw-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00303279-ecnfbgcsfn-portrait.jpg",
            title: "Fast and Furious",
            subtitle: "English"
        },
    ];


    return (

        <>
            <HeroCarousel />
            <div className="container mx-auto">
                <PosterSlider
                    title="Recommended movies"
                    subtitle="List of recommended movies"
                    posters={remommendMovies}
                    isDark={false}
                />
            </div>

            <div className="bg-premier-800 py-7">
                <div className="container mx-auto px-4 flex flex-col gap-1">
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" />
                    </div>
                    <PosterSlider
                        title="Premiers"
                        subtitle="Brand new releases every Friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>

            <div className="container mx-auto">
                <PosterSlider
                    title="Online Streaming Event"
                    subtitle=""
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>


            <div className="container mx-auto my-20 px-4">
                <h1 className="text-2xl font-bold text-gray-800 my-3">
                    The best of Entertainments
                </h1>
                <EntertainmentCardSlider />
            </div>
        </>
    );
}

export default HomePage;
