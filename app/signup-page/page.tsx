"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
//import styles from './page.module.css';
import { Box, Button, TextField, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Controller, useForm } from "react-hook-form";
//import Link from "next/link";

const signupSchema = z
  .object({
    firstName: z.string().min(3, "firstName is required").max(15),
    lastName: z.string().min(3, "lastName is required").max(15),
    email: z.string().email("Email must be a valid email address"),
    password: z.string().min(8, "password should be atleast 8 chars").max(12),
    gender: z.enum(["female", "male", "other"]),
    country: z.string().min(1, "Country is required"),
  })
  .required();

type Props = {};

const SignupPage = (props: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(errors);
  // const toggleDialog = () => {
  //   setOpen(!open);
  // };

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/gradient-technology-background_23-2148884153.jpg?w=740&t=st=1711609660~exp=1711610260~hmac=5727782b57f40ce51e1817414241da74cc0f7671251e040d7b789a9be32266b4)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="right"
        height="150%"
        width="40%"
        p={2}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          width: "40%",
          maxWidth: "400px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          // border: "2px solid grey",
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography sx={{ mb: 2 }} variant="h4">
          Welcome to MicroFox
        </Typography>
        <Typography sx={{ mb: 1 }} variant="h6">
          Already have an account?
          <Link href="/">
            <Button variant="text" color="primary">
              Log in
            </Button>
          </Link>
        </Typography>
        <TextField
          sx={{ mb: 1 }}
          {...register("firstName")}
          color="primary"
          type="string"
          name="firstName"
          fullWidth
          placeholder="John"
          label="First name"
          helperText={errors?.firstName?.message as any}
          error={Boolean(errors?.firstName?.message)}
        />
        <TextField
          sx={{ mb: 1 }}
          {...register("lastName")}
          color="primary"
          type="string"
          name="lastName"
          fullWidth
          placeholder="Williams"
          label="Last name"
          helperText={errors?.lastName?.message as any}
          error={Boolean(errors?.lastName?.message)}
        />
        <TextField
          sx={{ mb: 1 }}
          {...register("email")}
          color="primary"
          type="email"
          name="email"
          fullWidth
          placeholder="abc@gmail.com"
          label="Email"
          helperText={errors?.email?.message as any}
          error={Boolean(errors?.email?.message)}
        />
        <TextField
          color="primary"
          {...register("password")}
          type="password"
          name="password"
          fullWidth
          placeholder="......"
          label="Password"
          helperText={errors?.password?.message as any}
          error={Boolean(errors?.password?.message)}
        />

        <Button
          type="submit"
          style={{ backgroundColor: "#378CE7", flex: "1" }}
          sx={{ mt: 2 }}
          color="primary"
          variant="contained"
        >
          Create account
        </Button>
        <Box sx={{ color: "red" }}></Box>
      </Box>
    </Box>
  );
};
export default SignupPage;
