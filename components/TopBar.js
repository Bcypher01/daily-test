export const TopBar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex py-2 px-4">
        <h1 className="cursor-pointer font-semibold md:text-xl">
          Add new post
        </h1>
        <div className="px-6">
          <ul className="flex space-x-4 pt-1 font-light">
            <li className="flex cursor-pointer space-x-1">
              <svg
                width="19"
                height="20"
                className="mt-0.5"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11.5H13V5.5C13 5.23478 12.8946 4.98043 12.7071 4.79289C12.5196 4.60536 12.2652 4.5 12 4.5C11.7348 4.5 11.4804 4.60536 11.2929 4.79289C11.1054 4.98043 11 5.23478 11 5.5V11.5H5C4.73478 11.5 4.48043 11.6054 4.29289 11.7929C4.10536 11.9804 4 12.2348 4 12.5C4 12.7652 4.10536 13.0196 4.29289 13.2071C4.48043 13.3946 4.73478 13.5 5 13.5H11V19.5C11 19.7652 11.1054 20.0196 11.2929 20.2071C11.4804 20.3946 11.7348 20.5 12 20.5C12.2652 20.5 12.5196 20.3946 12.7071 20.2071C12.8946 20.0196 13 19.7652 13 19.5V13.5H19C19.2652 13.5 19.5196 13.3946 19.7071 13.2071C19.8946 13.0196 20 12.7652 20 12.5C20 12.2348 19.8946 11.9804 19.7071 11.7929C19.5196 11.6054 19.2652 11.5 19 11.5Z"
                  fill="#171717"
                />
              </svg>
              <span>Add Content</span>
            </li>
            <li className="flex cursor-pointer space-x-1">
              <svg
                width="18"
                height="19"
                className="mt-0.5"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.99 7.6625L14.5725 7.19L15.24 5.855C15.3077 5.71527 15.3303 5.55798 15.3048 5.40483C15.2793 5.25169 15.2068 5.11024 15.0975 5L13.5 3.4025C13.3892 3.29157 13.2464 3.21816 13.0917 3.1926C12.937 3.16704 12.7781 3.19061 12.6375 3.26L11.3025 3.9275L10.83 2.51C10.7801 2.36225 10.6854 2.23372 10.559 2.14231C10.4327 2.05091 10.281 2.00116 10.125 2H7.875C7.71777 1.9996 7.56439 2.04862 7.43653 2.14013C7.30868 2.23165 7.21282 2.36104 7.1625 2.51L6.69 3.9275L5.355 3.26C5.21527 3.19234 5.05798 3.16971 4.90483 3.19523C4.75169 3.22075 4.61024 3.29318 4.5 3.4025L2.9025 5C2.79157 5.11083 2.71816 5.25363 2.6926 5.40834C2.66704 5.56305 2.69061 5.72189 2.76 5.8625L3.4275 7.1975L2.01 7.67C1.86225 7.7199 1.73372 7.81462 1.64231 7.94098C1.55091 8.06734 1.50116 8.21905 1.5 8.375V10.625C1.4996 10.7822 1.54862 10.9356 1.64013 11.0635C1.73165 11.1913 1.86104 11.2872 2.01 11.3375L3.4275 11.81L2.76 13.145C2.69234 13.2847 2.66971 13.442 2.69523 13.5952C2.72075 13.7483 2.79318 13.8898 2.9025 14L4.5 15.5975C4.61083 15.7084 4.75363 15.7818 4.90834 15.8074C5.06305 15.833 5.22189 15.8094 5.3625 15.74L6.6975 15.0725L7.17 16.49C7.22032 16.639 7.31618 16.7684 7.44403 16.8599C7.57189 16.9514 7.72527 17.0004 7.8825 17H10.1325C10.2897 17.0004 10.4431 16.9514 10.571 16.8599C10.6988 16.7684 10.7947 16.639 10.845 16.49L11.3175 15.0725L12.6525 15.74C12.7913 15.806 12.9471 15.8277 13.0987 15.8022C13.2503 15.7767 13.3904 15.7052 13.5 15.5975L15.0975 14C15.2084 13.8892 15.2818 13.7464 15.3074 13.5917C15.333 13.437 15.3094 13.2781 15.24 13.1375L14.5725 11.8025L15.99 11.33C16.1378 11.2801 16.2663 11.1854 16.3577 11.059C16.4491 10.9327 16.4988 10.781 16.5 10.625V8.375C16.5004 8.21777 16.4514 8.06439 16.3599 7.93653C16.2684 7.80868 16.139 7.71282 15.99 7.6625ZM15 10.085L14.1 10.385C13.893 10.4521 13.7032 10.5635 13.5435 10.7113C13.3839 10.8592 13.2584 11.04 13.1756 11.2412C13.0928 11.4424 13.0548 11.6592 13.0642 11.8766C13.0736 12.094 13.1302 12.3067 13.23 12.5L13.6575 13.355L12.8325 14.18L12 13.73C11.8077 13.6342 11.597 13.5808 11.3822 13.5735C11.1675 13.5662 10.9537 13.6051 10.7552 13.6875C10.5568 13.77 10.3785 13.8942 10.2322 14.0516C10.0859 14.2091 9.9752 14.3961 9.9075 14.6L9.6075 15.5H8.415L8.115 14.6C8.04787 14.393 7.93652 14.2032 7.78868 14.0435C7.64083 13.8839 7.46003 13.7584 7.25882 13.6756C7.0576 13.5928 6.84079 13.5548 6.62342 13.5642C6.40605 13.5736 6.19333 13.6302 6 13.73L5.145 14.1575L4.32 13.3325L4.77 12.5C4.86982 12.3067 4.92639 12.094 4.93579 11.8766C4.94518 11.6592 4.90718 11.4424 4.82441 11.2412C4.74164 11.04 4.61609 10.8592 4.45646 10.7113C4.29684 10.5635 4.10696 10.4521 3.9 10.385L3 10.085V8.915L3.9 8.615C4.10696 8.54787 4.29684 8.43652 4.45646 8.28868C4.61609 8.14083 4.74164 7.96003 4.82441 7.75882C4.90718 7.5576 4.94518 7.34079 4.93579 7.12342C4.92639 6.90605 4.86982 6.69333 4.77 6.5L4.3425 5.6675L5.1675 4.8425L6 5.27C6.19333 5.36982 6.40605 5.42639 6.62342 5.43579C6.84079 5.44518 7.0576 5.40718 7.25882 5.32441C7.46003 5.24164 7.64083 5.11609 7.78868 4.95646C7.93652 4.79684 8.04787 4.60696 8.115 4.4L8.415 3.5H9.585L9.885 4.4C9.95213 4.60696 10.0635 4.79684 10.2113 4.95646C10.3592 5.11609 10.54 5.24164 10.7412 5.32441C10.9424 5.40718 11.1592 5.44518 11.3766 5.43579C11.594 5.42639 11.8067 5.36982 12 5.27L12.855 4.8425L13.68 5.6675L13.23 6.5C13.1342 6.69234 13.0808 6.90301 13.0735 7.11777C13.0662 7.33253 13.1051 7.54635 13.1875 7.74476C13.27 7.94318 13.3942 8.12155 13.5516 8.26781C13.7091 8.41407 13.8961 8.5248 14.1 8.5925L15 8.8925V10.085ZM9 6.5C8.40666 6.5 7.82664 6.67595 7.33329 7.00559C6.83994 7.33524 6.45543 7.80377 6.22836 8.35195C6.0013 8.90013 5.94189 9.50333 6.05765 10.0853C6.1734 10.6672 6.45912 11.2018 6.87868 11.6213C7.29824 12.0409 7.83279 12.3266 8.41473 12.4424C8.99667 12.5581 9.59987 12.4987 10.1481 12.2716C10.6962 12.0446 11.1648 11.6601 11.4944 11.1667C11.8241 10.6734 12 10.0933 12 9.5C12 8.70435 11.6839 7.94129 11.1213 7.37868C10.5587 6.81607 9.79565 6.5 9 6.5ZM9 11C8.70333 11 8.41332 10.912 8.16665 10.7472C7.91997 10.5824 7.72771 10.3481 7.61418 10.074C7.50065 9.79994 7.47095 9.49834 7.52882 9.20737C7.5867 8.9164 7.72956 8.64912 7.93934 8.43934C8.14912 8.22956 8.4164 8.0867 8.70737 8.02882C8.99834 7.97095 9.29994 8.00065 9.57403 8.11418C9.84812 8.22771 10.0824 8.41997 10.2472 8.66665C10.412 8.91332 10.5 9.20333 10.5 9.5C10.5 9.89783 10.342 10.2794 10.0607 10.5607C9.77936 10.842 9.39783 11 9 11Z"
                  fill="black"
                />
              </svg>
              <span>Settings</span>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex bg-white relative rounded-full text-black px-3 ml-auto">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="w-[350px] focus:outline-none py-1 px-4 font-light w-full rounded border border-gray-200"
          />
          <div className="absolute top-0 py-1 pr-6 right-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.9473 18.6997 5.81278 16.9855 4.27664C15.2714 2.7405 13.0338 1.91951 10.7329 1.98247C8.43207 2.04543 6.24275 2.98756 4.61517 4.61514C2.98759 6.24272 2.04546 8.43203 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8481 21.6171 21.7737 21.71 21.68C21.8903 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9922 4.13453 9.63436C4.40463 8.2765 5.07131 7.02922 6.05028 6.05025C7.02925 5.07128 8.27653 4.4046 9.63439 4.1345C10.9923 3.8644 12.3997 4.00303 13.6788 4.53284C14.9579 5.06265 16.0511 5.95986 16.8203 7.111C17.5895 8.26215 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9498 15.9497C14.637 17.2625 12.8565 18 11 18Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
