import { FC, PropsWithChildren } from "react";
import { LuHouse } from "react-icons/lu";

const NavbarContainer: FC<PropsWithChildren> = ({ children }) => {
    return (
        <header className="sticky top-0 px-2 bg-transparent backdrop-blur-[8px] flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-2 md:py-0 shadow-lg rounded-b-2xl border-gray-200 dark:border-neutral-700">
            <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 px-4 py-2 md:py-2 sm:px-6 lg:px-8">
                {children}
            </nav>
        </header>
    );
};


const NavbarBranding: FC = () => {
    return (
        <div className="flex justify-between items-center gap-x-1 py-2 md:py-2">
            <a
                className="inline-flex items-center font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                href="#"
                aria-label="Brand"
            >
                <img
                    src={"/wordframe-dark.svg"}
                    alt="Logo"
                    className="h-8 mr-2"
                />
            </a>

            <button
                type="button"
                className="bg-gray-200 hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-400 text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-header-base-collapse"
                aria-expanded="false"
                aria-controls="hs-header-base"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-header-base"
            >
                <svg
                    className="hs-collapse-open:hidden size-4"
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
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                    className="hs-collapse-open:block shrink-0 hidden size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </button>
        </div>
    );
};

const NavbarItemContainer: FC = () => {
    return (
        <div
            id="hs-header-base"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
            aria-labelledby="hs-header-base-collapse"
        >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:hidden">
                <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                    <div className="grow">
                        <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                            <a
                                className="py-2 md:px-2 flex items-center hover:bg-gray-100 duration-300 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                href="#"
                                aria-current="page"
                            >
                                <LuHouse
                                    className={
                                        "shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                    }
                                />
                                Landing
                            </a>

                            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                                <button
                                    id="hs-header-base-mega-menu-fullwidth"
                                    type="button"
                                    className="hs-dropdown-toggle w-full py-2 md:px-2 flex items-center text-md hover:bg-gray-100 duration-300 rounded-lg focus:outline-none dark:text-neutral-200 dark:focus:bg-neutral-700"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Mega Menu"
                                >
                                    <svg
                                        className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    Resources
                                    <svg
                                        className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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

                                <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full min-w-60 hidden z-10 top-full start-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-header-base-mega-menu-fullwidth"
                                >
                                    <div className="md:p-4 md:mx-6 md:mt-4 lg:mx-8 bg-[#ffff] md:border-2 md:border-green-500 md:rounded-lg md:shadow-md dark:md:bg-neutral-800">
                                        <div className="py-1 md:p-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div className="flex flex-col">
                                                <a
                                                    className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
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
                                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                                    </svg>
                                                    <div className="grow">
                                                        <p className="font-medium text-md text-gray-800 dark:text-neutral-200">
                                                            Support Docs
                                                        </p>
                                                        <p className="text-md text-gray-500 dark:text-neutral-500">
                                                            Explore advice and
                                                            explanations for all
                                                            of Preline's
                                                            features.
                                                        </p>
                                                    </div>
                                                </a>

                                                <a
                                                    className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
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
                                                        <rect
                                                            width="7"
                                                            height="7"
                                                            x="14"
                                                            y="3"
                                                            rx="1"
                                                        />
                                                        <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                                                    </svg>
                                                    <div className="grow">
                                                        <p className="font-medium text-md text-gray-800 dark:text-neutral-200">
                                                            Integrations
                                                        </p>
                                                        <p className="text-md text-gray-500 dark:text-neutral-500">
                                                            Discover the huge
                                                            range of tools that
                                                            Preline integrates
                                                            with.
                                                        </p>
                                                    </div>
                                                </a>

                                                <a
                                                    className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
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
                                                        <path d="m7 11 2-2-2-2" />
                                                        <path d="M11 13h4" />
                                                        <rect
                                                            width="18"
                                                            height="18"
                                                            x="3"
                                                            y="3"
                                                            rx="2"
                                                            ry="2"
                                                        />
                                                    </svg>
                                                    <div className="grow">
                                                        <p className="font-medium text-md text-gray-800 dark:text-neutral-200">
                                                            API Reference
                                                        </p>
                                                        <p className="text-md text-gray-500 dark:text-neutral-500">
                                                            Build custom
                                                            integrations with
                                                            our first-class API.
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="flex flex-col">
                                                <a
                                                    className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
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
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                        />
                                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                        <path d="M12 17h.01" />
                                                    </svg>
                                                    <div className="grow">
                                                        <p className="font-medium text-md text-gray-800 dark:text-neutral-200">
                                                            Help Center
                                                        </p>
                                                        <p className="text-md text-gray-500 dark:text-neutral-500">
                                                            Learn how to
                                                            install, set up, and
                                                            use Preline.
                                                        </p>
                                                    </div>
                                                </a>

                                                <a
                                                    className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
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
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="4"
                                                        />
                                                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                                                    </svg>
                                                    <div className="grow">
                                                        <p className="font-medium text-md text-gray-800 dark:text-neutral-200">
                                                            Developer Hub
                                                        </p>
                                                        <p className="text-md text-gray-500 dark:text-neutral-500">
                                                            Learn how to
                                                            integrate or build
                                                            on top of Preline.
                                                        </p>
                                                    </div>
                                                </a>

                                                <a
                                                    className="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    href="#"
                                                >
                                                    <svg
                                                        className="shrink-0 size-4 mt-1 text-gray-800 dark:text-neutral-200"
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
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                        <circle
                                                            cx="9"
                                                            cy="7"
                                                            r="4"
                                                        />
                                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                    </svg>
                                                    <div className="grow">
                                                        <p className="font-medium text-md text-gray-800 dark:text-neutral-200">
                                                            Community Forum
                                                        </p>
                                                        <p className="text-md text-gray-500 dark:text-neutral-500">
                                                            Learn, share, and
                                                            connect with other
                                                            Preline users.
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="mt-2 flex flex-col">
                                                <span className="ms-2.5 mb-2 font-semibold text-sm uppercase text-gray-800 dark:text-neutral-200">
                                                    Customer stories
                                                </span>

                                                <a
                                                    className="p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    href="#"
                                                >
                                                    <img
                                                        className="size-32 md:size-24 rounded-lg"
                                                        src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                                                        alt="Avatar"
                                                    />
                                                    <div className="grow">
                                                        <p className="text-md text-gray-800 dark:text-neutral-400">
                                                            Preline Projects has
                                                            proved to be most
                                                            efficient cloud
                                                            based project
                                                            tracking and bug
                                                            tracking tool.
                                                        </p>
                                                        <p className="mt-3 inline-flex items-center gap-x-1 text-md text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-400">
                                                            Learn more
                                                            <svg
                                                                className="shrink-0 size-4"
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
                                                                <path d="m9 18 6-6-6-6" />
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </a>
                                                <a
                                                    className="p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                                    href="#"
                                                >
                                                    <img
                                                        className="size-32 md:size-24 rounded-lg"
                                                        src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                                                        alt="Avatar"
                                                    />
                                                    <div className="grow">
                                                        <p className="text-md text-gray-800 dark:text-neutral-400">
                                                            Preline Projects has
                                                            proved to be most
                                                            efficient cloud
                                                            based project
                                                            tracking and bug
                                                            tracking tool.
                                                        </p>
                                                        <p className="mt-3 inline-flex items-center gap-x-1 text-md text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-400">
                                                            Learn more
                                                            <svg
                                                                className="shrink-0 size-4"
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
                                                                <path d="m9 18 6-6-6-6" />
                                                            </svg>
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block my-2 md:my-0 md:mx-2">
                        <div className="w-full h-px md:w-px md:h-4 lg:mr-2 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
                    </div>

                    <div className="flex flex-wrap items-center mt-2 md:mt-0 gap-x-1.5">
                        <a
                            className="bg-green-500 py-[5px] px-2.5 inline-flex items-center font-medium  rounded-lg border border-gray-300 text-[#ffff] shadow-sm hover:bg-green-400 duration-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            href="#"
                        >
                            Sign in
                        </a>
                        <a
                            className="bg-sky-500 py-[5px] px-2.5 inline-flex items-center font-medium  rounded-lg border border-gray-300 text-[#ffff] shadow-sm hover:bg-sky-400 duration-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            href="#"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { NavbarContainer, NavbarBranding, NavbarItemContainer };
