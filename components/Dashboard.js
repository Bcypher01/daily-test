import Pagination from "./Pagination";
import { Statistics } from "./Statistics";
import { Table } from "./Table";

export const Dashboard = () => {
  return (
    <div>
      <Statistics />
      <div className="w-full bg-white rounded my-6 py-4 px-6">
        <h1 className="font-semibold text-xl">Form title</h1>
        <p className="mb-4 font-light text-lg">
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim
        </p>
        <div className="w-full flex p-3 bg-red-50 text-red-900 border border-red-400 rounded px-3 space-x-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
              fill="#7F1D1D"
            />
          </svg>

          <span className="text-red-900">
            Senectus malesuada suspendisse elit amet vitae.
          </span>
        </div>

        <Table />

        <Pagination />
      </div>

      {/* First Form */}
      <div className="w-full bg-white rounded my-6 py-4 px-6">
        <h1 className="font-semibold text-xl">Form title</h1>
        <p className="mb-4 font-light text-lg">
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim
        </p>

        <div className="flex space-x-2">
          <span className="flex bg-amber-200 p-2 rounded-lg border border-neutral-300 space-x-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2169_308)">
                <path d="M0 0H25V25H0V0Z" fill="#012169" />
                <path
                  d="M25 0V3.125L15.7227 12.5L25 21.6309V25H21.7285L12.4023 15.8203L3.32031 25H0V21.6797L9.08203 12.5488L0 3.61328V0H3.02734L12.4023 9.17969L21.4844 0H25Z"
                  fill="white"
                />
                <path
                  d="M8.98438 15.8203L9.52148 17.4805L2.05078 25H0V24.8535L8.98438 15.8203ZM15.0391 15.2344L17.6758 15.625L25 22.8027V25L15.0391 15.2344ZM25 0L15.625 9.57031L15.4297 7.42188L22.7539 0H25ZM0 0.0488281L9.42383 9.27734L6.54297 8.88672L0 2.39258V0.0488281Z"
                  fill="#C8102E"
                />
                <path
                  d="M8.59375 0V25H16.4062V0H8.59375ZM0 8.59375V16.4062H25V8.59375H0Z"
                  fill="white"
                />
                <path
                  d="M0 10.1562V14.8438H25V10.1562H0ZM10.1562 0V25H14.8438V0H10.1562Z"
                  fill="#C8102E"
                />
              </g>
              <defs>
                <clipPath id="clip0_2169_308">
                  <rect width="25" height="25" rx="3" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1>English</h1>
          </span>
          <span className="flex p-2 rounded-lg border border-neutral-300 space-x-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2169_341)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H25V25H0V0Z"
                  fill="#E30A17"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.0312 12.8906C17.0312 16.3379 14.1846 19.1357 10.6787 19.1357C7.17285 19.1357 4.32617 16.3379 4.32617 12.8857C4.32617 9.43359 7.16797 6.64551 10.6738 6.64551C14.1797 6.64551 17.0361 9.43848 17.0361 12.8906H17.0312Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.3486 12.8906C17.3486 15.6494 15.0732 17.8857 12.2656 17.8857C9.45801 17.8857 7.1875 15.6494 7.1875 12.8906C7.1875 10.1318 9.45801 7.89551 12.2656 7.89551C15.0732 7.89551 17.3438 10.1318 17.3438 12.8906H17.3486Z"
                  fill="#E30A17"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2666 9.9707L18.2178 12.2803L16.0596 12.8662L18.1836 13.623L18.1348 15.7373L19.5166 14.0869L21.6113 14.8096L20.4004 13.0371L21.875 11.2744L19.6094 11.8994L18.2666 9.9707Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2169_341">
                  <rect width="25" height="25" rx="3" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1>Turkish</h1>
          </span>
        </div>

        <form action="post" className="my-4 font-light">
          <div className="my-4">
            <label htmlFor="title">Label title</label>
            <div className="my-1">
              <input
                type="text"
                name="title"
                className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                placeholder="Placeholder content"
              />
            </div>
          </div>

          <div className="flex w-full space-x-4">
            <div className="w-4/12">
              <div>
                <label htmlFor="title">Label title</label>
                <div className="my-1">
                  <input
                    type="text"
                    name="title"
                    placeholder="Placeholder content"
                    className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div>
                <label htmlFor="title">Label title</label>
                <div className="my-1">
                  <input
                    type="text"
                    name="title"
                    placeholder="Placeholder content"
                    className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div>
                <label htmlFor="title">Label title</label>
                <div className="my-1">
                  <input
                    type="text"
                    name="title"
                    placeholder="Placeholder content"
                    className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full space-x-4 my-4">
            <div className="w-6/12">
              <div>
                <label htmlFor="title">Label title</label>
                <div className="my-1">
                  <input
                    type="text"
                    name="title"
                    placeholder="Placeholder content"
                    className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="w-6/12">
              <div>
                <label htmlFor="title">Label title</label>
                <div className="my-1">
                  <input
                    type="text"
                    name="title"
                    placeholder="Placeholder content"
                    className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div>
              <label htmlFor="title">Label title</label>
              <div className="my-1">
                <textarea
                  name="title"
                  rows="6"
                  placeholder="Placeholder content"
                  className="border border-neutral-300 w-full py-2 px-2 rounded outline-none"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
