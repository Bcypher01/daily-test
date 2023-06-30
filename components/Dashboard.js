import { Statistics } from "./Statistics";

export const Dashboard = () => {
  return (
    <div>
      <Statistics />
      <div className="w-full bg-white rounded my-6 py-4 px-4">
        <h1 className="font-semibold text-xl">Form title</h1>
        <p className="mb-4 font-light text-lg">
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim
        </p>
        <div className="w-full p-3 bg-red-100 text-red-900 border border-red-400 rounded px-3">
          Senectus malesuada suspendisse elit amet vitae.
        </div>
      </div>
    </div>
  );
};
