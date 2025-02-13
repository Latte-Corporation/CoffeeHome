import { Card, CardContent } from "@components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-8 flex flex-col gap-14 w-full">
      <header className="flex flex-col gap-1">
        <h1 className="text-[#9C6644] text-5xl">Latte Corporation</h1>
        <h2 className="text-primary text-4xl">DevOps & Automation</h2>
      </header>
      <main className="w-full">
        <section className="flex flex-row gap-72 w-full">
          <div className="flex flex-col gap-14 w-1/3">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl text-primary">Who are we ?</h3>
              <div className="flex flex-col text-secondary text-xl">
                <p>We are 2 DevOps Engineer</p>
                <Link href="/about" className="underline">
                  More about us
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl text-primary">What do we do ?</h3>
              <div className="flex flex-col text-secondary text-xl">
                <p>Automation, CI/CD,</p>
                <p>Web development &</p>
                <p>Cloud deployment</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <div
              id="carousel"
              className="w-full bg-[#EDE0D4] h-72 flex justify-center items-center rounded-md"
            >
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-lg"
              >
                <CarouselContent>
                  <CarouselItem
                    key={1}
                    className="md:basis-1/2 lg:basis-1/3"
                    title="Kubernetes"
                    description="Kubernetes is a container orchestration platform."
                  >
                    <div className="p-1 w-full">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 h-20 w-20">
                          <span className="text-3xl font-semibold">1</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem
                    key={2}
                    className="md:basis-1/2 lg:basis-1/3"
                    title="TypeScript"
                    description="Ansible is cool"
                  >
                    <div className="p-1 w-full">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 h-20 w-20">
                          <span className="text-3xl font-semibold">2</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem
                    key={3}
                    className="md:basis-1/2 lg:basis-1/3"
                    title="Frameworks"
                    description="Terraform is cool"
                  >
                    <div className="p-1 w-full">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 h-20 w-20">
                          <span className="text-3xl font-semibold">3</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem
                    key={4}
                    className="md:basis-1/2 lg:basis-1/3"
                    title="TypeScript"
                    description="Terraform is cool"
                  >
                    <div className="p-1 w-full">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 h-20 w-20">
                          <span className="text-3xl font-semibold">3</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem
                    key={5}
                    className="md:basis-1/2 lg:basis-1/3"
                    title=""
                    description="Terraform is cool"
                  >
                    <div className="p-1 w-full">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 h-20 w-20">
                          <span className="text-3xl font-semibold">3</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
