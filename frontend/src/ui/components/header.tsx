import { FC, PropsWithChildren, ReactNode } from "react";

const Header: FC<PropsWithChildren> = ({ children }) => {
    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-br from-emerald-600 to-green-400">
            <div className="max-w-[85rem] w-full mx-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-3 py-3 px-4 sm:px-6 lg:px-8 text-[#ffff]">
                {children}
            </div>
        </nav>
    );
};

const MobileHeader: FC = () => {
    return (
        <div className="flex justify-between items-center gap-x-3 px-2 md:px-0">
            <div className="grow">
                <span className="font-semibold whitespace-nowrap dark:text-neutral-200">
                    Meet Our Team
                </span>
            </div>

            <button
                type="button"
                className="hs-collapse-toggle sm:hidden py-1.5 px-2 inline-flex items-center font-medium text-xs rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-collapse="#hs-nav-secondary"
                aria-controls="hs-nav-secondary"
                aria-label="Toggle navigation"
            >
                Overview
                <svg
                    className="hs-dropdown-open:rotate-180 shrink-0 size-4 ms-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
        </div>
    );
};

type HeaderItemGroupProps = {
    children: ReactNode;
};

const HeaderItemGroupContainer: FC<HeaderItemGroupProps> = ({ children }) => {
    return (
        <div
            id="hs-nav-secondary"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
            <div className="p-2 sm:py-0 flex flex-col sm:flex-row sm:justify-end gap-y-2 sm:gap-y-0 sm:gap-x-6">
                {children}
            </div>
        </div>
    );
};

type HeaderItemProps = {
    text: string;
    link: string;
};

const HeaderItem: FC<HeaderItemProps> = ({ text, link }) => {
    return (
        <a
            className="font-medium text-blue-600 focus:outline-none focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500"
            href={link}
        >
            {text}
        </a>
    );
};

export { Header, MobileHeader, HeaderItemGroupContainer, HeaderItem };
