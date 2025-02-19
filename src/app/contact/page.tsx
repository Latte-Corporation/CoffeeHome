import Image from "next/image";
import ContactForm from "@components/contact-form";

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 h-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center h-full">
        <ContactForm />
        <div className="text-center lg:text-left hidden mx-auto xl:block">
          <h2 className="text-3xl font-bold mb-4">We&apos;re here to help</h2>
          <p className="text-muted-foreground mb-6">
            Our team is ready to bring your ideas to life. Let&apos;s create
            something amazing together!
          </p>
          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[2/1] overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
            <Image
              src="/images/coffee.png"
              layout="fill"
              objectFit="cover"
              alt="Contact us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
