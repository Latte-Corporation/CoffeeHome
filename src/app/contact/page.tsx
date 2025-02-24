"use client";
import MokaPot from "@components/3d/moka-pot";
import ContactForm from "@components/contact-form";
import { BoxReveal } from "@components/magicui/box-reveal";
import { TextAnimate } from "@components/magicui/text-animate";
import { BlurFade } from "@components/magicui/blur-fade";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Page() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <div className="container px-8 h-full mx-0 w-full">
      <div className="flex gap-8 items-center justify-center h-full w-full">
        <QueryClientProvider client={queryClient}>
          <ContactForm />
        </QueryClientProvider>
        <div className="text-center lg:text-left hidden mx-auto xl:block w-full max-w-96">
          <BoxReveal boxColor={"hsl(30 52% 72%)"} duration={0.4}>
            <h2 className="text-3xl text-primary mb-4">
              We&apos;re here to help
            </h2>
          </BoxReveal>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-secondary mb-6"
          >
            {`Our team is ready to bring your ideas to life.\nLet's create something amazing together!`}
          </TextAnimate>
          <BlurFade key="submit" delay={0.4} inView>
            <div className="w-96 mx-auto h-96">
              <MokaPot />
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
