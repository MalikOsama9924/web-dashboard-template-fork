import { ArrowBack, Error } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

const NotAuthorized = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center w-full h-full gap-3 bg-white dark:bg-slate-800">
      <div className="flex items-center gap-2">
        <Error
          className="text-red-500"
          fontSize="large"
        />
        <h4 className="p-0 m-0 font-medium text-red-500 md:text-xl">
          You are not authorized to access this resource!
        </h4>
      </div>
      <Link href="/">
        <Button
          startIcon={<ArrowBack />}
          color="info"
          size="small"
          variant="outlined"
          disableElevation
        >
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotAuthorized;
