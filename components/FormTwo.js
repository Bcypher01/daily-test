export const FormTwo = () => {
  return (
    <div className="w-full bg-white rounded my-6 py-6 px-6">
      <h1 className="font-semibold text-xl">Form title</h1>
      <p className="mb-4 font-light text-lg">
        Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue
        enim
      </p>

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

        <div className="flex w-full space-x-4 my-3">
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
  );
};
