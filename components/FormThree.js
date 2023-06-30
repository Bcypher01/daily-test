export const FormThree = () => {
  return (
    <div className="w-full bg-white rounded my-6 py-6 px-6">
      <h1 className="font-semibold text-xl">Form title</h1>

      <form action="post" className="my-3 font-light">
        <div className="my-3">
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

        <div className="my-3">
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

        <button
          type="submit"
          className="w-full bg-blue-600 rounded py-2 text-white text-md my-3"
        >
          Button tilte
        </button>
      </form>
    </div>
  );
};
