import { FormThree } from "./FormThree";
import { FormTwo } from "./FormTwo";

export const FormGroup = () => {
  return (
    <div className="flex w-full space-x-4">
      <div className="w-8/12">
        <FormTwo />
      </div>

      <div className="w-4/12">
        <FormThree />
      </div>
    </div>
  );
};
