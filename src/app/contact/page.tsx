import MokaPot from "@components/3d/moka-pot";
import ContactForm from "@components/contact-form";
import { BoxReveal } from "@components/magicui/box-reveal";
import { TextAnimate } from "@components/magicui/text-animate";
import { BlurFade } from "@components/magicui/blur-fade";

export default function Page() {
  return (
    <div className="container py-12 px-8 h-full mx-0">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center h-full">
        <ContactForm />
        <div className="text-center lg:text-left hidden mx-auto xl:block">
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
