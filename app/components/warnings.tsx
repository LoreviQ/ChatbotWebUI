import { isRouteErrorResponse } from "@remix-run/react";

interface WarningProps {
    text1: string;
    text2: string;
}
export function WarningDualText({ text1, text2 }: WarningProps) {
    return (
        <div
            className="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
        >
            <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Warning!</span> {text1}
                <p>{text2}</p>
            </div>
        </div>
    );
}

export function ErrorDisplay({ error }: { error: any }) {
    return (
        <div className="flex w-full h-screen items-center justify-center">
            <div className="p-10 bg-contrast border-2 text-character border-character rounded-lg">
                <h1>
                    {isRouteErrorResponse(error)
                        ? `${error.status} ${error.statusText}`
                        : error instanceof Error
                        ? error.message
                        : "Unknown Error"}
                </h1>
            </div>
        </div>
    );
}
