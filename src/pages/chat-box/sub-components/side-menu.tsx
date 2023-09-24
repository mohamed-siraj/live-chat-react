import { SideMenuData } from "data/side-menu.data";
import React from "react";

const SideMenu: React.FunctionComponent = () => {

    return (<>
        {
            SideMenuData.map((value, index) => {
                return (
                    <div className="flex flex-row mt-7" key={index}>
                        <img src={value.image.img} alt={value.image.alt} className="w-9 h-9" />
                        <div className="text-md ml-3 mt-1.5 cursor-pointer"><strong>{value.label}</strong></div>
                    </div>
                )
            })
        }
    </>);
};

export default SideMenu;