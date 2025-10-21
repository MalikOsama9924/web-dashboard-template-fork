"use client";

import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { SignupSchema } from "../../validations";
import type { SignupFormTypes } from "../../types";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignup } from "../../hooks";
import { AUTH_ROUTES, DEFAULT_REDIRECT } from "../../enums";

const SignupForm = () => {
  // form
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    resolver: zodResolver(SignupSchema),
    mode: "onBlur",
  });

  // hooks
  const { signup } = useSignup();

  const handleSignup = async (values: SignupFormTypes) => {
    await signup(values, DEFAULT_REDIRECT.AFTER_SIGNUP);
  };

  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <Grid
        container
        spacing={2}
      >
        <Grid size={{ xs: 12 }}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                disabled={formState.isSubmitting}
                margin="dense"
                type="email"
                label="Email"
                required
                fullWidth
                size="small"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                disabled={formState.isSubmitting}
                margin="dense"
                type="text"
                label="First name"
                required
                fullWidth
                size="small"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                disabled={formState.isSubmitting}
                margin="dense"
                type="text"
                label="Last name"
                required
                fullWidth
                size="small"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                disabled={formState.isSubmitting}
                margin="dense"
                type="password"
                label="Password"
                required
                fullWidth
                size="small"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            loading={formState.isSubmitting}
            color="secondary"
          >
            Create
          </Button>
          <p className="text-sm mt-4 text-gray-400">
            Already have an account?{" "}
            <Link
              href={AUTH_ROUTES.LOGIN}
              className="text-blue-500 underline"
            >
              Login
            </Link>
          </p>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForm;
