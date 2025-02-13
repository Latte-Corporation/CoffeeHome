import { Card, CardContent } from "@components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

interface Item {
  title: string;
  description: string;
  image: string;
}

const data : Item[] = [
  {
    title: "Kubernetes",
    description: "Kubernetes is a container orchestration platform.",
    image: "kubernetes.svg",
  },
  {
    title: "Ansible",
    description: "Ansible is cool",
    image: "ansible.svg",
  },
  {
    title: "Terraform",
    description: "Terraform is cool",
    image: "terraform.svg",
  },
  {
    title: "TypeScript",
    description: "TypeScript is cool",
    image: "typescript.svg",
  },
  {
    title: "Rust",
    description: "Rust is cool",
    image: "rust.svg",
  }
];

export default function DesktopPage() {
  return (
    <div className="p-8 flex flex-col gap-14 overflow-hidden w-full">
      <header className="flex flex-col gap-1">
        <h1 className="text-[#9C6644] text-5xl">Latte Corporation</h1>
        <h2 className="text-primary text-4xl">DevOps & Automation</h2>
      </header>
      <main className="w-full flex flex-col gap-10">
        <section className="flex flex-col w-full gap-10 xl:flex-row xl:gap-0">
          <div className="flex w-full gap-14 xl:w-1/3 xl:flex-col flex-row-reverse justify-end">
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
          <div className="flex-col w-full justify-center items-center xl:w-2/3">
            <div
              id="carousel"
              className="w-full bg-[#EDE0D4] h-72 flex justify-center items-center rounded-md px-16"
            >
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {
                    data.map((item, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                        title={item.title}
                        description={item.description}
                      >
                        <div className="p-1 w-full">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-3 h-20 w-20">
                              <span className="text-3xl font-semibold">
                                <Image src={`/images/${item.image}`} alt={item.title} width={70} height={70}/>
                              </span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))
                  }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-primary"/>
        <section className="flex flex-col gap-10">
          <div id="lla" className="flex flex-row gap-4">
            <Image 
              src="/images/lla.svg"
              alt="lla"
              width={300}
              height={300}
              className="fill-primary"
            />
          </div>
          <div id="dte" className="flex flex-row gap-4">
          </div>
        </section>
      </main>
    </div>
  );
}
