import MokaPot from "@components/3d/moka-pot";
import ContactForm from "@components/contact-form";

export default function Page() {
  return (
    <div className="container py-12 px-8 h-full mx-0">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center h-full">
        <ContactForm />
        <div className="text-center lg:text-left hidden mx-auto xl:block">
          <h2 className="text-3xl font-bold mb-4">We&apos;re here to help</h2>
          <p className="text-muted-foreground mb-6">
            Our team is ready to bring your ideas to life. Let&apos;s create
            something amazing together!
          </p>
          <div className="w-96 mx-auto h-96">
            <MokaPot />
          </div>
        </div>
      </div>
    </div>
  );
}
