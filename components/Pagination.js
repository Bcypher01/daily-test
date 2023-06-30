const Pagination = () => {
  return (
    <div className="grid py-4 place-items-center">
      <div className="flex space-x-2">
        <svg
          width="19"
          height="19"
          className="mt-2 cursor-pointer"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <path d="M9.5 14L5 9.5L9.5 5" stroke="#262626" strokeWidth="2" />
            <path d="M14 14L9.5 9.5L14 5" stroke="#262626" strokeWidth="2" />
          </g>
        </svg>
        <span className="border border-neutral-400 cursor-pointer rounded-md text-center pt-1 w-[35px] h-[35px]">
          1
        </span>
        <span className="border bg-blue-600 text-white border-neutral-400 cursor-pointer rounded-md text-center pt-1 w-[35px] h-[35px]">
          2
        </span>
        <span className="border border-neutral-400 cursor-pointer rounded-md text-center pt-1 w-[35px] h-[35px]">
          3
        </span>
        <span className="border border-neutral-400 cursor-pointer rounded-md text-center pt-1 w-[35px] h-[35px]">
          4
        </span>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          className="mt-2 cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 14L14 9.5L9.5 5" stroke="#262626" strokeWidth="2" />
          <path d="M5 14L9.5 9.5L5 5" stroke="#262626" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
