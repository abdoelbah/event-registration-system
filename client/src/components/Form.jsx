"use client";

import * as React from "react";
import axios from "axios";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Button,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { Mail, ProfileCircle } from "iconoir-react";
const API_URL = import.meta.env.VITE_API_URL


const formSchema = z.object({
  firstName: z.string().min(1, { message: "الاسم الأول مطلوب" }),
  lastName: z.string().min(1, { message: "اسم العائلة مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
});
const TextField = React.forwardRef(
    ({ label, error, icon: Icon, ...props }, ref) => {
      const id = React.useId();
  
      return (
        <Typography
          as="label"
          htmlFor={id}
          className="mb-6 block space-y-1.5 text-white text-right"
        >
          <span className="text-md font-semibold text-white font-tajawal">{label}</span>
          <Input
            ref={ref}
            {...props}
            id={id}
            isError={Boolean(error)}
            color={error ? "error" : "primary"}
            dir="rtl"
            className="text-white placeholder-gray-400 font-tajawal text-sm" 
          >
            <Input.Icon>
              <Icon className="h-full w-full text-white" />
            </Input.Icon>
          </Input>
          {error && (
            <Typography type="small" color="error">
              {error}
            </Typography>
          )}
        </Typography>
      );
    }
  );
  
export default function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
      console.log("تم الإرسال بنجاح:", response.data);
    } catch (error) {
      console.error("حدث خطأ أثناء الإرسال:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md text-right ">
      <TextField
        label="الاسم الأول"
        error={errors.firstName?.message}
        icon={ProfileCircle}
        placeholder=" إسمك الأول"
        {...register("firstName")}
      />
      <TextField
        label="اسم العائلة"
        error={errors.lastName?.message}
        icon={ProfileCircle}
        placeholder="إسم العائلة"
        {...register("lastName")}
      />
      <TextField
        type="email"
        label="البريد الإلكتروني"
        error={errors.email?.message}
        icon={Mail}bg-gradient-to-br from-purple-700 to-blue-600
        placeholder="example@example.com"
        {...register("email")}
      />

      <Button type="submit" className="w-full bg-gradient-to-br from-purple-700 to-blue-600 font-tajawal text-md">
    إنضمام الى الحدث  
        </Button>
    </form>
  );
}
