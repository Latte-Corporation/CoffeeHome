import Waves from "@components/ui/waves";
import Link from "next/link";
import Image from "next/image";
import { Profile } from "@components/profile";
import ContactForm from "@components/contact-form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MokaPot from "@components/3d/moka-pot";
import { BoxReveal } from "@components/magicui/box-reveal";
import { TextAnimate } from "@components/magicui/text-animate";
import { BlurFade } from "@components/magicui/blur-fade";

export default function MobilePage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <div className="sm:hidden h-full w-full">
      <header className="flex items-center justify-between w-full p-8">
        <Image
          src="/images/coffee.png"
          alt="Latté logo"
          width={40}
          height={40}
        />
        <Image src="/images/github.svg" alt="Menu" width={40} height={40} />
      </header>
      <div className="flex flex-col justify-start w-full px-8 gap-5 py-4">
        <TextAnimate
          as="h1"
          className="text-6xl text-[#9C6644]"
          animation="slideLeft"
          by="word"
          startOnView={false}
        >
          Latté
        </TextAnimate>
        <TextAnimate
          as="h2"
          className="text-5xl text-primary"
          animation="slideLeft"
          by="word"
          startOnView={false}
        >
          DevOps & Automation
        </TextAnimate>
      </div>
      <Waves colorTop="" colorBottom="#7f5539" height="20%" />
      <div className="bg-primary flex flex-col gap-5 w-full h-fit">
        <div className="flex flex-col gap-4 px-8 flex-wrap items-start">
          <BoxReveal boxColor={"hsl(30 51% 80%)"}>
            <h3 className="text-3xl text-[#e6ccb2]">Who are we ?</h3>
          </BoxReveal>
          <div className="flex flex-col text-secondary text-xl items-end w-full">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              className="text-xl text-secondary"
              startOnView={false}
            >
              We are 2 DevOps Engineer
            </TextAnimate>
            <Link href="/about" className="underline text-secondary self-end">
              More about us
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8 flex-wrap items-start">
          <BoxReveal boxColor={"hsl(30 51% 80%)"}>
            <h3 className="text-3xl text-[#e6ccb2]">What do we do ?</h3>
          </BoxReveal>
          <div className="flex flex-col text-secondary text-xl items-end w-full">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              className="text-xl text-secondary text-end"
              startOnView={false}
            >
              {`Automation, CI/CD,\nWeb development &\nCloud deployment`}
            </TextAnimate>
          </div>
        </div>
        <hr className="border-[#e6ccb2] w-10/12 self-center" />
        <div className="flex flex-col gap-4 px-8">
          <Profile
            fullName="Louis Labeyrie"
            trigram="lla"
            role={["Cloud Architect", "Solution Engineer"]}
            gravatarUrl="labeyrielouis"
            githubUsername="razano26"
          />
          <Profile
            fullName="Dorian Tetu"
            trigram="dte"
            role={["Lead Developer", "Solution Engineer"]}
            gravatarUrl="doriantetu34"
            githubUsername="Nayrode"
          />
        </div>
      </div>
      <Waves colorTop="#7f5539" colorBottom="#e6ccb2" height="20%" />
      <QueryClientProvider client={queryClient}>
        <div className="px-8" id="contact">
          <ContactForm />
        </div>
      </QueryClientProvider>
      <div className="text-center lg:text-left mx-auto xl:block w-full max-w-96 pt-10 px-8">
        <BoxReveal boxColor={"hsl(30 52% 72%)"} duration={0.4}>
          <h2 className="text-3xl text-primary mb-4">
            We&apos;re here to help
          </h2>
        </BoxReveal>
        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          className="text-secondary mb-6 text-justify"
          startOnView={false}
        >
          {`Our team is ready to bring your ideas to life.\nLet's create something amazing together!`}
        </TextAnimate>
        <BlurFade key="submit" delay={0.4} inView>
          <div className="w-64 m-auto h-64">
            <MokaPot />
          </div>
        </BlurFade>
      </div>
      <footer className="flex justify-center">
        <p className="text-primary text-sm pb-8">
          © LATTECORPORATION.CO, All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
