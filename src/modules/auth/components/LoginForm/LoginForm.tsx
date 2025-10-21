"use client";

import {
  EmailOutlined,
  PasswordOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  FormControlLabel,
  InputAdornment,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { LoginSchema } from "@/modules/auth/validations";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormTypes } from "../../types";
import { useEffect, useState } from "react";
import { emitHideGlobalLoader } from "@/event-emitter/emitters";
import { useLogin } from "../../hooks";
import { AUTH_ROUTES, DEFAULT_REDIRECT } from "../../enums";

const LoginForm = () => {
  // state
  const [showPassword, setShowPassword] = useState(false);

  // form
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  // hooks
  const { login } = useLogin();

  useEffect(() => {
    emitHideGlobalLoader();
  }, []);

  const handleLogin = async (values: LoginFormTypes) => {
    await login(values, DEFAULT_REDIRECT.AFTER_LOGIN);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Stack spacing={3}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth
              required
              margin="dense"
              label="Email"
              type="email"
              size="small"
              disabled={formState.isSubmitting}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              margin="dense"
              type={showPassword ? "text" : "password"}
              label="Password"
              required
              fullWidth
              size="small"
              disabled={formState.isSubmitting}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              label="Remember me"
              disabled={formState.isSubmitting}
              control={
                <Switch
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                />
              }
            />
          )}
        />
        <Button
          type="submit"
          fullWidth
          loading={formState.isSubmitting}
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
        <p className="text-sm text-gray-400">
          Do not have an account?{" "}
          <Link
            href={AUTH_ROUTES.SIGNUP}
            className="text-blue-500 underline"
          >
            Create one
          </Link>
        </p>
      </Stack>
    </form>
  );
};

export default LoginForm;
