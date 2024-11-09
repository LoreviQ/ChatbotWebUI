import { Link } from "@remix-run/react";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGhost, faSearch } from "@fortawesome/free-solid-svg-icons";

import type { Cookie } from "../utils/cookies";

// Renders the sidebar of the page
interface SidebarProps {
    userPrefs: Cookie;
    loggedIn: boolean;
}
export function Sidebar({ userPrefs, loggedIn }: SidebarProps) {
    return (
        <div className="flex h-screen w-full justify-end py-4 border-r border-text-muted-dark">
            <div className="w-80 flex flex-col space-y-4">
                <Link to={"/"} className="text-5xl font-ophelia font-outline">
                    Echoes AI
                </Link>
                <SidebarLink to={"/"} text="Home" icon={faHouse} />
                <SidebarLink to={"/characters"} text="Characters" icon={faGhost} />
            </div>
        </div>
    );
}

interface SidebarLinkProps {
    to: string;
    text: string;
    icon: IconDefinition;
}
function SidebarLink({ to, text, icon }: SidebarLinkProps) {
    return (
        <Link to={to} className="text-2xl ">
            <div className="inline-flex items-center pe-4 py-2 hover:bg-hover-dark rounded-full">
                <div className="flex w-14 justify-center">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <p>{text}</p>
            </div>
        </Link>
    );
}

export function SearchBar({ userPrefs, loggedIn }: SidebarProps) {
    return (
        <div className="flex h-screen w-full justify-start py-4  border-text-muted-dark">
            <div className="w-80 flex flex-col ps-8 space-y-4">
                <div className="flex rounded-full border bg-hover-dark px-4 w-full items-center space-x-2">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="text"
                        className="py-2 w-full bg-transparent border-transparent focus:border-transparent focus:ring-0"
                        placeholder="Search"
                    />
                </div>
            </div>
        </div>
    );
}