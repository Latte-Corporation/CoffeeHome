import Image from "next/image";

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 h-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center h-full">
        <div className="space-y-12 max-w-xl ms-10 xl:ms-0">
          <div className="space-y-4">
            <h1 className="text-primary text-6xl font-light">
              Let&apos;s work together!
            </h1>
          </div>

          <form className="space-y-12">
            <div className="space-y-1">
              <label className="text-primary text-2xl font-light">
                What&apos;s your name?
              </label>
              <input
                type="text"
                placeholder="Type your full name"
                className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-primary text-2xl font-light">
                What&apos;s your email address?
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-primary text-2xl font-light">
                What&apos;s your phone number?
              </label>
              <input
                type="tel"
                placeholder="+33 06 66 66 66 66"
                className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-primary text-2xl font-light">
                What&apos;s your request?
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border-b border-primary py-2 text-primary placeholder-primary/60 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
          </form>
        </div>
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
