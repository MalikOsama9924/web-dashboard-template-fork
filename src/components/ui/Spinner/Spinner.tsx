import { colorVariables } from "@/theme/theme-config";
import PulseLoader from "react-spinners/PulseLoader";
import type { SpinnerProps } from "./types";

const color = colorVariables.secondary;

const Spinner: React.FC<SpinnerProps> = ({
  size = 15,
  showText = false,
  customText = "Loading...",
}) => {
  return (
    <div className="flex flex-row gap-[20px] justify-center items-center my-4">
      <PulseLoader
        color={color}
        size={size}
        aria-label="loading spinner"
      />
      {showText && (
        <p
          className={`text-[${color}] dark:text-primary-dark text-[${size}px]`}
        >
          {customText}
        </p>
      )}
    </div>
  );
};

export default Spinner;
