"use client";
import Link from "next/link";
import SignupPage from "./signup-page/page";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
const loginSchema = z
  .object({
    email: z.string().email("Email must be a valid email address"),
    password: z.string().min(8, "password should be atleast 8 chars").max(12),
    rememberMe: z.boolean(),
  })
  .required();
const LoginPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg?w=740&t=st=1711608004~exp=1711608604~hmac=f46b762325cb10a2b6497a0e23e7e1fee5c5f92b8b30fcfdc0e812f4d04fc4fc)",
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
          Sign in to Microfox
        </Typography>
        <Typography sx={{ mb: 1 }} variant="h6">
          New user?
          <Link href="/signup-page">
            <Button variant="text" color="primary">
              Create an account
            </Button>
          </Link>
        </Typography>

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
        <FormControlLabel
          control={<Checkbox {...register("rememberMe")} />}
          label="Remember me"
        />
        <Button
          type="submit"
          style={{ backgroundColor: "#378CE7", flex: "1" }}
          sx={{ mt: 2 }}
          color="primary"
          variant="contained"
        >
          LOGIN
        </Button>
        <Box sx={{ color: "red" }}></Box>
      </Box>
    </Box>
  );
};
export default LoginPage;
