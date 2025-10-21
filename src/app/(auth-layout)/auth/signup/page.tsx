import styles from "./styles.module.scss";

import SignupForm from "@/modules/auth/components/SignupForm/SignupForm";
import { getMetadata } from "@/utils/helper-functions";
import { Container, Grid } from "@mui/material";

export const metadata = getMetadata({
  title: "Signup",
  description: "Create a new account.",
});

const Signup = () => {
  return (
    <div className={`bg-gray-100 ${styles[`signup-page`]} dark:bg-[#222]`}>
      <Container>
        <Grid container>
          <Grid
            size={{
              xs: 12,
            }}
            className="flex justify-center items-center h-screen"
          >
            <div className="w-full sm:w-[450px] bg-white dark:bg-slate-700 rounded-lg shadow-xl border dark:border-sky-400 border-gray-200 border-solid">
              <div className={`px-6 py-4`}>
                <h3
                  className={`mb-7 text-xl font-medium text-center heading md:text-2xl`}
                >
                  Create an account
                </h3>
                <SignupForm />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Signup;
