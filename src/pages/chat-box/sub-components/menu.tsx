import React, { useState } from "react";
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'

const Menu: React.FunctionComponent = () => {

    /**
     * local state manage
     */
    const [showAndHide, setShowAndHide] = useState<boolean>(false);

    return (<>
        <EllipsisVerticalIcon className="w-7 ml-5 cursor-pointer" id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" onClick={() => setShowAndHide(!showAndHide)} />

        {
            showAndHide && <div id="dropdownDots" className="z-10 ml-64 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LogOut</a>
                    </li>
                </ul>
            </div>
        }

    </>);
};

export default Menu;