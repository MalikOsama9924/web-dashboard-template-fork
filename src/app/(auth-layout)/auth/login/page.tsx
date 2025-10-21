import styles from "./styles.module.scss";
import LoginForm from "@/modules/auth/components/LoginForm/LoginForm";
import { Container, Grid } from "@mui/material";
import { getMetadata } from "@/utils/helper-functions";

export const metadata = getMetadata({
  title: "Login",
  description: "Login to your account.",
});

const Login = () => {
  return (
    <div className={`${styles[`login-page`]} bg-gray-100 dark:bg-[#222]`}>
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
                  Login
                </h3>
                <LoginForm />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
