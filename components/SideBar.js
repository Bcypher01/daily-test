import { useState } from "react";

export const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="items-center py-4 bg-slate-900 h-full">
      <div className="pb-4 border-b border-black">
        <div className="px-6">
          <button className="w-full flex space-x-2 rounded bg-gray-100 py-2 text-left pl-3">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11.5H13V5.5C13 5.23478 12.8946 4.98043 12.7071 4.79289C12.5196 4.60536 12.2652 4.5 12 4.5C11.7348 4.5 11.4804 4.60536 11.2929 4.79289C11.1054 4.98043 11 5.23478 11 5.5V11.5H5C4.73478 11.5 4.48043 11.6054 4.29289 11.7929C4.10536 11.9804 4 12.2348 4 12.5C4 12.7652 4.10536 13.0196 4.29289 13.2071C4.48043 13.3946 4.73478 13.5 5 13.5H11V19.5C11 19.7652 11.1054 20.0196 11.2929 20.2071C11.4804 20.3946 11.7348 20.5 12 20.5C12.2652 20.5 12.5196 20.3946 12.7071 20.2071C12.8946 20.0196 13 19.7652 13 19.5V13.5H19C19.2652 13.5 19.5196 13.3946 19.7071 13.2071C19.8946 13.0196 20 12.7652 20 12.5C20 12.2348 19.8946 11.9804 19.7071 11.7929C19.5196 11.6054 19.2652 11.5 19 11.5Z"
                fill="#171717"
              />
            </svg>
            <span>New item</span>
          </button>
        </div>
      </div>
      <ul className="block space-y-2 py-6 text-white">
        <div className="border-b pb-3 border-black">
          <li
            className="relative cursor-pointer flex space-x-2 px-6"
            onClick={() => setToggle(!toggle)}
          >
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Dashboard</span>
            <div>
              {toggle ? (
                <svg
                  width="18"
                  height="18"
                  className="absolute right-6 top-1/2 transform -translate-y-2/4"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 6.75L9 11.25L4.5 6.75"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  className="absolute right-6 top-1/2 transform -translate-y-2/4"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 11.25L9 6.75L4.5 11.25"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </div>
          </li>
          <ul className={`${toggle && "hidden"} pl-12 py-3 space-y-2`}>
            <li>Commerce</li>
            <li>Analytics</li>
            <li>Crypto</li>
            <li>Helpdesk</li>
            <li>Monitoring</li>
            <li>Fitness</li>
          </ul>
        </div>
        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Application</span>
            <div>
              <svg
                width="18"
                height="18"
                className="absolute right-6 top-1/2 transform -translate-y-2/4"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.75L9 11.25L4.5 6.75"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Elements</span>
            <div>
              <svg
                width="18"
                height="18"
                className="absolute right-6 top-1/2 transform -translate-y-2/4"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.75L9 11.25L4.5 6.75"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Forms</span>
            <div>
              <svg
                width="18"
                height="18"
                className="absolute right-6 top-1/2 transform -translate-y-2/4"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.75L9 11.25L4.5 6.75"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Plugins</span>
            <div>
              <svg
                width="18"
                height="18"
                className="absolute right-6 top-1/2 transform -translate-y-2/4"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.75L9 11.25L4.5 6.75"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Elements</span>
            <div>
              <svg
                width="18"
                height="18"
                className="absolute right-6 top-1/2 transform -translate-y-2/4"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.75L9 11.25L4.5 6.75"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Datagrids</span>
            <div>
              <svg
                width="18"
                height="18"
                className="absolute right-6 top-1/2 transform -translate-y-2/4"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.75L9 11.25L4.5 6.75"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </li>
        </div>

        <div className="border-b pb-3 border-black">
          <li className="relative cursor-pointer flex space-x-2 px-6">
            <svg
              width="18"
              height="18"
              className="mt-1"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Settings</span>
            <div>
              <svg
                width="18"
                height="18"
                className="absolute right-6 top-1/2 transform -translate-y-2/4"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 6.75L9 11.25L4.5 6.75"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};
