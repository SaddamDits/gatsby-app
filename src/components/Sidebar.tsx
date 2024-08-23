import { Link } from "gatsby"
import React from "react"

const Sidebar = () => {
  return (
    <div className="bg-white w-300 lg:w-64 md:flex md:flex-col hidden border-r-2 border-gray-300 p-4 h-screen">
      <div className="pt-5 flex flex-col overflow-y-auto h-full">
        <div className="space-y-4">
          {/* Dashboard Link */}
          <a
            href="#"
            className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Dashboard</span>
          </a>

          {/* About Link */}
          <a
            href="#"
            className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
          >
            <svg
              className="mr-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17"
                stroke="#4F4F4F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <svg
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="#4F4F4F"
                strokeWidth="2"
              ></svg>
            </svg>
            <span>About</span>
          </a>

          {/* Hero Link */}
          <a
            href="#"
            className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
          >
            <svg
              className="mr-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10L8 16"
                stroke="#4F4F4F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12V16"
                stroke="#4F4F4F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 8V16"
                stroke="#4F4F4F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <svg
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                stroke="#4F4F4F"
                strokeWidth="2"
              ></svg>
            </svg>
            <span>Hero</span>
          </a>
        </div>

        {/* Data Section */}
        <div className="mt-4">
          <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">
            Data
          </p>
          <div className="space-y-1 mt-4">
            {/* Folders Link */}
            <a
              href="#"
              className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
            >
              <svg
                className="mr-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="12"
                  cy="7"
                  rx="7"
                  ry="3"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                />
              </svg>
              <span>Folders</span>
            </a>

            {/* Alerts Link */}
            <a
              href="#"
              className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
            >
              <svg
                className="mr-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.90112 11.8461C7.55156 9.56955 9.63235 8 12 8V8C14.3676 8 16.4484 9.56954 17.0989 11.8461L17.6571 13.7998C17.8843 14.5951 18.2336 15.3504 18.6924 16.0386L18.8012 16.2018C18.9408 16.4111 19.0105 16.5158 19.045 16.5932C19.3105 17.1894 18.943 17.8759 18.2997 17.9857C18.2162 18 18.0904 18 17.8388 18H6.16116C5.90958 18 5.78379 18 5.70027 17.9857C5.05697 17.8759 4.68952 17.1894 4.955 16.5932C4.98947 16.5158 5.05924 16.4111 5.19879 16.2018L5.30758 16.0386C5.76642 15.3504 6.11569 14.5951 6.34293 13.7998L6.90112 11.8461Z"
                  fill="#4F4F4F"
                />
                <path
                  d="M11 9L12 3"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M13 9L12 3"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12.5 21H11.5"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>Alerts</span>
            </a>

            {/* Statistics Link */}
            <a
              href="#"
              className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Statistics</span>
              <span className="px-2 py-0.5 font-semibold text-xs ml-auto bg-indigo-50 text-indigo-600 rounded-full uppercase border border-indigo-300 inline-flex">
                New
              </span>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-4">
          <p className="px-4 font-semibold text-xs tracking-widest text-gray-400 uppercase">
            Contact
          </p>
          <div className="space-y-1 mt-4">
            {/* Forms Link */}
            <a
              href="#"
              className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8v4a1 1 0 001 1h2v4h-2a1 1 0 00-1 1v2H5v-2a1 1 0 00-1-1H2v-4h2a1 1 0 001-1V8a1 1 0 001-1h2v2h6V7h2a1 1 0 001 1z"
                />
              </svg>
              <span>Forms</span>
            </a>

            {/* Maps Link */}
            <a
              href="#"
              className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m9-9H3m18 9V6a9 9 0 00-9-9 9 9 0 00-9 9v15"
                />
              </svg>
              <span>Maps</span>
            </a>
            <Link to="/">
              <div className="flex items-center rounded-lg text-gray-900 px-4 py-2.5 font-medium text-sm transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                <span>Logout</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
