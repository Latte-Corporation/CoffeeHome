"use client";

import { BlurFade } from "@components/magicui/blur-fade";
import { BoxReveal } from "@components/magicui/box-reveal";
import { TextAnimate } from "@components/magicui/text-animate";
import { useToast } from "@hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Form from "next/form";
import { useMemo, useState } from "react";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.fullname || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill out all required fields",
      });
      return;
    }

    const mailPayload = {
      subject: `Contact from ${formData.fullname}`,
      message: `Email: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`,
    };

    setLoading(true);
    mutation.mutate(mailPayload);
  };

  const mutation = useMutation({
    mutationFn: async (mailPayload: { subject: string; message: string }) => {
      const response = await axios.post("/api/send-mail", mailPayload);
      return response.data;
    },
    onSuccess: () => {
      setFormData({ fullname: "", email: "", phone: "", message: "" });
      toast({
        title: "Email sent successfully!",
        description: "We will get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending email",
        description:
          (error as AxiosError<{ error: string }>).response?.data?.error ||
          "Unknown error occurred",
      });
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const headerAnimation = useMemo(
    () => (
      <TextAnimate animation="slideLeft" by="character" key="header">
        Let&apos;s work together!
      </TextAnimate>
    ),
    [],
  );

  return (
    <div className="space-y-12 xl:max-w-xl min-w-[535px] flex flex-col items-center xl:items-start justify-center w-fit">
      <div className="space-y-4">
        <h1 className="text-primary text-6xl ">{headerAnimation}</h1>
      </div>

      <Form className="space-y-12 w-full" action={handleSubmit}>
        <div className="space-y-1">
          <BoxReveal boxColor={"hsl(30 52% 72%)"} duration={0.3}>
            <label className="text-primary text-2xl " htmlFor="fullname">
              What&apos;s your name?
            </label>
          </BoxReveal>

          <input
            id="fullname"
            type="text"
            name="fullname"
            required
            placeholder="Type your full name"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1">
          <BoxReveal boxColor={"hsl(30 52% 72%)"} duration={0.4}>
            <label htmlFor="email" className="text-primary text-2xl ">
              What&apos;s your email address?
            </label>
          </BoxReveal>

          <input
            type="email"
            name="email"
            required
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1">
          <BoxReveal boxColor={"hsl(30 52% 72%)"} duration={0.5}>
            <label htmlFor="phone" className="text-primary text-2xl ">
              What&apos;s your phone number?
            </label>
          </BoxReveal>

          <input
            type="tel"
            name="phone"
            placeholder="+33 06 66 66 66 66"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-1">
          <BoxReveal boxColor={"hsl(30 52% 72%)"} duration={0.6}>
            <label htmlFor="message" className="text-primary text-2xl ">
              What&apos;s your request?
            </label>
          </BoxReveal>

          <textarea
            rows={4}
            name="message"
            required
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>
        <div className="w-full flex justify-end">
          <BlurFade key="submit" delay={0.2} inView>
            <Button
              type="submit"
              className="bg-[#DDB892] hover:bg-[#EDE0D4]/90 text-primary"
              disabled={
                loading ||
                !formData.fullname ||
                !formData.email ||
                !formData.message
              }
            >
              {loading ? "Sending..." : "Send Email"}
            </Button>
          </BlurFade>
        </div>
      </Form>
    </div>
  );
}
