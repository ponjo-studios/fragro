import {
    Header,
    HeaderItem,
    HeaderItemGroupContainer,
    MobileHeader
} from "./components/header.tsx";

import {
    NavbarBranding,
    NavbarContainer,
    NavbarItemContainer
} from "@components/navbar";

export default function Navbar() {
    return (
        <>
            <Header>
                <MobileHeader />
                <HeaderItemGroupContainer>
                    <HeaderItem text={"Overview"} link={"/"} />
                    <HeaderItem text={"Features"} link={"/"} />
                    <HeaderItem text={"Plans"} link={"/"} />
                    <HeaderItem text={"Pricing"} link={"/"} />
                </HeaderItemGroupContainer>
            </Header>

            <NavbarContainer>
                <NavbarBranding />
                <NavbarItemContainer />
            </NavbarContainer>

            <div className="overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-20">
                    <div className="relative mx-auto max-w-4xl grid space-y-2 sm:space-y-6">
                        <div className="text-center">
                            <p className="text-md font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200"></p>
                            <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-[4rem] dark:text-neutral-200">
                                Your{" "}
                                <span className="text-green-500">
                                    agile tool
                                </span>{" "}
                                for planning and building products
                            </h1>
                        </div>
                        <div className={"text-center justify-center lg:px-8"}>
                            <p
                                className={
                                    "text-2xl text-gray-500 dark:text-neutral-300"
                                }
                            >
                                The modern solution to software development.
                                Product roadmaps, ticketing, and issue tracking
                                - streamlined.
                            </p>
                        </div>

                        {/*<div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start">*/}
                        {/*    <div className="shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">*/}

                        {/*        <div className="flex justify-center -space-x-3">*/}
                        {/*            <img className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />*/}
                        {/*            <img className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />*/}
                        {/*            <img className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Avatar" />*/}
                        {/*            <img className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />*/}

                        {/*            <span className="inline-flex items-center justify-center size-8 rounded-full ring-2 ring-white bg-gray-800 dark:bg-neutral-900 dark:ring-neutral-900">*/}
                        {/*                <span className="text-xs font-medium leading-none text-white uppercase">7k+</span>*/}
                        {/*            </span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="border-t sm:border-t-0 sm:border-s border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0 dark:border-neutral-700"></div>*/}

                        {/*    <div className="pt-5 sm:pt-0 sm:ps-5">*/}
                        {/*        <div className="text-lg font-semibold text-gray-800 dark:text-neutral-200">Trust pilot</div>*/}
                        {/*        <div className="text-sm text-gray-500 dark:text-neutral-500">Rated best over 37k reviews</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="hidden lg:block absolute top-0 end-0 -translate-y-20 -translate-x-[40rem] -rotate-45">
                            <svg
                                className="w-16 h-auto text-green-500"
                                width="121"
                                height="135"
                                viewBox="0 0 121 135"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                    stroke="currentColor"
                                    stroke-width="10"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                    stroke="currentColor"
                                    stroke-width="10"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                    stroke="currentColor"
                                    stroke-width="10"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
