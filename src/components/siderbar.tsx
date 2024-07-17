function Siderbar() {
    return (
        <nav className="fixed bottom-0 left-0 top-0 z-50 hidden border-r bg-background px-4 py-5 transition-all duration-300 md:block w-[272px]">
            <div className="relative flex items-center py-2">
                <a className="flex flex-1 pl-3" href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        fill="none"
                        className="h-6 w-6"
                    >
                        <path
                            fill="#F8F9FA"
                            fillRule="evenodd"
                            d="M4.95 0c-.893 0-1.617.724-1.617 1.618v33.431c0 .893.724 1.618 1.618 1.618h33.431c.894 0 1.618-.725 1.618-1.618V1.618C40 .724 39.276 0 38.382 0H4.951Zm25.358 32.696c1 .425 2.132.637 3.395.637 1.295 0 2.419-.246 3.37-.74.95-.492 1.672-1.155 2.164-1.988.509-.833.763-1.76.763-2.78 0-1.07-.254-1.946-.763-2.626a5.187 5.187 0 0 0-1.82-1.555c-.689-.357-1.59-.731-2.706-1.122-1.115-.374-1.934-.722-2.46-1.045-.524-.323-.786-.774-.786-1.352 0-.527.155-.926.467-1.198.311-.29.722-.434 1.23-.434.59 0 1.074.17 1.451.51.377.323.582.774.615 1.352h4.55c-.081-1.683-.705-2.992-1.869-3.927-1.164-.952-2.697-1.428-4.6-1.428-1.869 0-3.386.476-4.55 1.428-1.164.935-1.747 2.235-1.747 3.901 0 1.122.255 2.031.763 2.729.508.696 1.115 1.223 1.82 1.58.705.357 1.615.714 2.73 1.071.771.238 1.362.45 1.771.638.427.187.78.425 1.058.714.295.289.443.654.443 1.096 0 .527-.18.944-.541 1.25-.36.289-.853.433-1.476.433-.607 0-1.099-.17-1.476-.51-.377-.357-.598-.867-.664-1.53h-4.477c.033 1.173.345 2.176.935 3.009.607.833 1.41 1.462 2.41 1.887Zm-5.266-5.253V15.255h-4.207v12.188c0 .646-.139 1.14-.418 1.48-.279.34-.672.51-1.18.51-.558 0-.984-.188-1.28-.562-.295-.39-.442-.96-.442-1.708h-4.182c0 1.972.55 3.493 1.648 4.564 1.099 1.07 2.558 1.606 4.379 1.606 1.738 0 3.115-.51 4.132-1.53 1.033-1.02 1.55-2.473 1.55-4.36Z"
                            clipRule="evenodd"
                        />
                        <path
                            fill="url(#a)"
                            d="M31.706 40H5.395C2.416 40 0 37.555 0 34.54V6.637a.81.81 0 0 1 .794-.804.81.81 0 0 1 .795.804V34.54c0 2.144 1.72 3.852 3.806 3.852h26.31a.81.81 0 0 1 .795.804c-.033.436-.364.804-.794.804Z"
                        />
                        <defs>
                            <linearGradient
                                id="a"
                                x1="-.011"
                                x2="32.475"
                                y1="22.929"
                                y2="22.929"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#40CBF6" />
                                <stop offset={1} stopColor="#82C041" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33 24"
                        fill="none"
                        className="visible h-[24px] w-[33px] duration-300 animate-in fade-in slide-in-from-left-3"
                    >
                        <path
                            fill="#E0E2E3"
                            d="M5.285 17.75v2.132H3.98c-.93 0-1.657-.22-2.177-.661-.52-.451-.781-1.182-.781-2.192v-3.264H0v-2.088h1.021v-2H3.59v2H5.27v2.088H3.59v3.294c0 .245.06.421.18.53.12.107.32.161.6.161zM5.605 15.765c0-.843.16-1.584.48-2.22.33-.638.776-1.128 1.336-1.472a3.524 3.524 0 0 1 1.877-.514c.591 0 1.107.118 1.547.353.45.235.796.544 1.036.926v-1.161h2.568v8.205H11.88v-1.161c-.25.382-.6.69-1.051.926-.44.235-.956.353-1.547.353-.68 0-1.301-.172-1.862-.515-.56-.353-1.006-.848-1.336-1.485-.32-.647-.48-1.392-.48-2.235m6.276.014c0-.627-.18-1.122-.54-1.485a1.725 1.725 0 0 0-1.292-.544c-.51 0-.946.181-1.306.544-.35.353-.526.843-.526 1.47 0 .628.175 1.128.526 1.5.36.364.796.545 1.306.545s.941-.181 1.292-.544c.36-.363.54-.858.54-1.486M15.195 15.78c0-.853.175-1.599.526-2.236a3.727 3.727 0 0 1 1.486-1.47c.64-.344 1.372-.515 2.192-.515 1.052 0 1.927.27 2.628.809.71.539 1.176 1.299 1.397 2.28H20.69c-.23-.628-.676-.942-1.337-.942-.47 0-.845.181-1.126.544-.28.353-.42.863-.42 1.53 0 .666.14 1.18.42 1.543.28.354.656.53 1.126.53.661 0 1.107-.314 1.337-.941h2.733c-.22.96-.686 1.716-1.397 2.265-.71.549-1.587.823-2.628.823-.82 0-1.551-.172-2.192-.515a3.726 3.726 0 0 1-1.486-1.47c-.35-.637-.526-1.383-.526-2.236M29.317 19.882l-2.553-3.44v3.44h-2.568V9h2.568v6.015l2.538-3.338h3.168l-3.484 4.117 3.514 4.088z"
                        />
                    </svg>
                </a>
                <div className="transition-all visible animate-in slide-in-from-right-2 delay-0 duration-0">
                    <button
                        type="button"
                        className="flex h-9 w-11 items-center justify-center rounded-md transition-colors hover:bg-accent"
                        data-state="closed"
                    >
                        <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 rotate-180 text-muted-foreground"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.015 7.509H3m4.112-2.892 2.903 2.894-2.903 2.89m5.221.616V4"
                            />
                        </svg>
                    </button>
                </div>
                <div className="absolute right-[-34px] delay-300 invisible animate-out fade-out slide-out-to-right-2">
                    <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-card transition-colors hover:bg-accent"
                        data-state="closed"
                    >
                        <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.015 7.509H3m4.112-2.892 2.903 2.894-2.903 2.89m5.221.616V4"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="mt-16 flex flex-col">
                <ul className="space-y-2">
                    <li className="relative h-9 p-[1px] after:absolute after:inset-0 after:rounded-md after:bg-gradient-linear-brand-40 after:content-[''] after:opacity-100">
                        <a
                            className="relative z-10 flex h-full w-full items-center gap-2 rounded-md bg-background px-3 transition-colors hover:bg-accent"
                            href="/"
                        >
                            <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute h-4 w-4 transition-all duration-300 text-foreground"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M9.95 11.55H6.435a.5.5 0 0 1 0-1H9.95a.5.5 0 0 1 0 1m3.521-5.969L9.755 2.555a2.48 2.48 0 0 0-3.127 0L2.913 5.58A2.455 2.455 0 0 0 2 7.496v4.787a2.717 2.717 0 0 0 2.715 2.713h6.954a2.717 2.717 0 0 0 2.714-2.713V7.496c0-.747-.332-1.445-.912-1.915"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="font-sans text-sm leading-[145%] absolute left-9 flex-1 font-semibold transition-all duration-300 visible opacity-100 delay-300">
                                Home
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="mt-16">
                    <div className="mb-4 pl-3 transition-all duration-300">
                        <span className="font-sans text-xs font-medium uppercase tracking-[2%] leading-[145%] text-muted-foreground">
                            Links
                        </span>
                    </div>
                    <ul className="space-y-2">
                        <li className="relative h-9 p-[1px]">
                            <a
                                href="https://thejstack.notion.site/Biblioteca-95b2beb59ec9417c9337bba3bb04710c"
                                className="relative flex h-full w-full items-center gap-2 rounded-md bg-background px-3 transition-colors hover:bg-accent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute h-4 w-4 text-muted-foreground transition-all duration-300"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.577 13.992c2.237 0 3.555-1.32 3.555-3.556l.018-3.103c0-2.282-.828-3.424-3.07-3.424H9.31a1.434 1.434 0 0 1-1.14-.57l-.571-.76a1.427 1.427 0 0 0-1.14-.57h-1.25c-2.238 0-3.06 1.318-3.06 3.552v4.875c0 2.237 1.321 3.556 3.564 3.556zM10.628 10.48h-2.63"
                                    />
                                </svg>
                                <span className="font-sans text-sm leading-[145%] absolute left-9 flex-1 font-semibold transition-all duration-300 visible opacity-100 delay-300">
                                    Biblioteca de Recursos
                                </span>
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-3 h-4 w-4 text-muted-foreground transition-all duration-300 visible opacity-100 delay-300"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.667 11.333 6.666-6.666m0 0H6m5.333 0V10"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li className="relative h-9 p-[1px]">
                            <a
                                href="https://discord.com/invite/xzUZVFqkB6"
                                className="relative flex h-full w-full items-center gap-2 rounded-md bg-background px-3 transition-colors hover:bg-accent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute h-4 w-4 text-muted-foreground transition-all duration-300"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.302 11.277c-.143.22-.501.77-.676.965-.086.096-.246.2-.358.187-1.021-.127-1.979-.427-2.77-1.123-.326-.287-.53-.613-.494-1.091.127-1.656.5-3.245 1.118-4.787.279-.695.776-1.176 1.461-1.412a5.929 5.929 0 0 1 1.262-.368c.757-.13.781-.172.957.485a9.171 9.171 0 0 1 2.392 0c.176-.657.204-.614.961-.485.428.073.867.204 1.262.368.686.236 1.183.717 1.462 1.412a16.048 16.048 0 0 1 1.117 4.787c.037.478-.168.803-.494 1.09-.79.697-1.749.997-2.769 1.124-.113.013-.273-.091-.359-.187-.174-.195-.533-.744-.676-.965"
                                    />
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.765 10.573c2.157 1.285 4.314 1.285 6.472 0"
                                    />
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.94 8c0 .54-.373.978-.834.978-.46 0-.834-.437-.834-.977s.374-.978.834-.978c.46 0 .833.438.833.978M10.727 8c0 .54-.373.978-.834.978-.46 0-.833-.437-.833-.977s.373-.978.833-.978c.46 0 .834.438.834.978"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="font-sans text-sm leading-[145%] absolute left-9 flex-1 font-semibold transition-all duration-300 visible opacity-100 delay-300">
                                    Comunidade
                                </span>
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-3 h-4 w-4 text-muted-foreground transition-all duration-300 visible opacity-100 delay-300"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.667 11.333 6.666-6.666m0 0H6m5.333 0V10"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li className="relative h-9 p-[1px]">
                            <a
                                href="https://github.com/orgs/jstack-content/repositories"
                                className="relative flex h-full w-full items-center gap-2 rounded-md bg-background px-3 transition-colors hover:bg-accent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute h-4 w-4 text-muted-foreground transition-all duration-300"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.788 13.728c.104-1.047-.49-2.145-.76-2.424 1.263-.141 2.59-.62 2.59-2.816a2.19 2.19 0 0 0-.603-1.508 2.041 2.041 0 0 0-.036-1.516s-.475-.141-1.573.595a5.37 5.37 0 0 0-2.816 0c-1.098-.736-1.572-.595-1.572-.595a2.038 2.038 0 0 0-.036 1.516 2.19 2.19 0 0 0-.604 1.52c0 2.18 1.328 2.653 2.59 2.81-.27.279-.865 1.369-.76 2.416A6.002 6.002 0 0 1 2 8c0-3.316 2.684-6 6-6 3.31 0 6 2.684 6 6 0 2.684-1.775 4.964-4.212 5.728"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="font-sans text-sm leading-[145%] absolute left-9 flex-1 font-semibold transition-all duration-300 visible opacity-100 delay-300">
                                    Repositórios
                                </span>
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-3 h-4 w-4 text-muted-foreground transition-all duration-300 visible opacity-100 delay-300"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.667 11.333 6.666-6.666m0 0H6m5.333 0V10"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Siderbar;
