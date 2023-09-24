import { SideMenuData } from "data/side-menu.data";
import React, { useState } from "react";

const SideMenu: React.FunctionComponent = () => {

    /**
     * local state management
     */

    const [activate, setActivate] = useState('MESSAGE');

    return (<>
        {
            SideMenuData.map((value, index) => {
                return (
                    <div className="flex flex-row mt-7" key={index}>
                        <img src={activate === value.uniqueCode ? value.activeImage.img : value.image.img} alt={activate === value.uniqueCode ? value.activeImage.alt : value.image.alt} className="w-9 h-9" />
                        <div className={`text-md ml-3 mt-1.5 cursor-pointer ${activate === value.uniqueCode && 'text-purple-800'}`} onClick={() => setActivate(value.uniqueCode)}><strong>{value.label}</strong></div>
                    </div>
                )
            })
        }
    </>);
};

export default SideMenu;