"use client";

import * as React from "react";
import axios from "axios";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Mail, ProfileCircle } from "iconoir-react";

const API_URL = import.meta.env.VITE_API_URL;

const formSchema = z.object({
  firstname: z.string().min(1, { message: "الاسم الأول مطلوب" }),
  lastname: z.string().min(1, { message: "اسم العائلة مطلوب" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
});

const TextField = React.forwardRef(
  ({ label, error, icon: Icon, ...props }, ref) => {
    const id = React.useId();

    return (
      <Typography
        as="label"
        htmlFor={id}
        className="mb-6 block space-y-1.5 text-white text-right font-tajawal"
      >
        <span className="text-md font-semibold">{label}</span>
        <Input
          ref={ref}
          {...props}
          id={id}
          isError={Boolean(error)}
          color={error ? "red" : "blue"}
          dir="rtl"
          className="text-white placeholder-gray-400 text-sm"
          icon={<Icon className="h-5 w-5 text-white" />}
        />
        {error && (
          <Typography variant="small" color="red">
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
    reset
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
  
      if (response.status === 200) {
        const resData = response.data;
        if (resData?.msg && resData.msg.toLowerCase().includes("already")) {
          alert("هذا المستخدم مسجل بالفعل.");
        } else {
          alert("تم التسجيل بنجاح! سيتم إرسال بريد إلكتروني يحتوي على تذكرتك.");
          reset();
        }
      } else {
        alert("حدث خطأ غير متوقع في الخادم.");
      }
    } catch (error) {
      if (error.response) {
        alert(`خطأ من الخادم: ${error.response.data?.msg || "حدث خطأ أثناء الإرسال."}`);
      } else if (error.request) {
        alert("تعذر الوصول إلى الخادم. تحقق من الاتصال.");
      } else {
        alert("حدث خطأ: " + error.message);
      }
      console.error("تفاصيل الخطأ:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md text-right">
      <TextField
        label="الاسم الأول"
        error={errors.firstname?.message}
        icon={ProfileCircle}
        placeholder="إسمك الأول"
        {...register("firstname")}
      />
      <TextField
        label="اسم العائلة"
        error={errors.lastname?.message}
        icon={ProfileCircle}
        placeholder="إسم العائلة"
        {...register("lastname")}
      />
      <TextField
        type="email"
        label="البريد الإلكتروني"
        error={errors.email?.message}
        icon={Mail}
        placeholder="example@example.com"
        {...register("email")}
      />
      <Button
        type="submit"
        className="w-full bg-gradient-to-br from-purple-700 to-blue-600 font-tajawal text-md"
      >
        إنضمام إلى الحدث
      </Button>
    </form>
  );
}
