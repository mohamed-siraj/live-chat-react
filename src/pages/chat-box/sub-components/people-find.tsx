import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const PeopleFind: React.FunctionComponent = () => {

    return (<>
        <MagnifyingGlassIcon className="w-5 h-5 absolute ml-3 text-gray-500 pointer-events-none" />
        <input placeholder="Find people" autoComplete="off" aria-label="Find people" className="px-10 py-3 font-semibold w-full rounded-3xl border-none ring-2 ring-purple-500 focus:ring-purple-800 focus:ring-2 " />
    </>);
};

export default PeopleFind