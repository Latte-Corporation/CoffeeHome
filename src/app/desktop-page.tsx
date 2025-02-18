"use client";
import MyGitHubCalendar from "@components/github-calendar";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface Item {
  title: string;
  description: string;
  image: string;
}

const data: Item[] = [
  {
    title: "Kubernetes",
    description: "Kubernetes is a container orchestration platform.",
    image: "kubernetes.svg",
  },
  {
    title: "ArgoCD",
    description: "ArgoCD is a GitOps continuous delivery tool.",
    image: "argocd.svg",
  },
  {
    title: "Ansible",
    description: "Ansible is a configuration management tool.",
    image: "ansible.svg",
  },
  {
    title: "Terraform",
    description: "Terraform is an infrastructure as code tool.",
    image: "terraform.svg",
  },
  {
    title: "AWS",
    description: "AWS is a cloud computing platform.",
    image: "aws.svg",
  },
  {
    title: "GCP",
    description: "GCP is a cloud computing platform.",
    image: "gcp.svg",
  },
  {
    title: "Grafana",
    description: "Grafana is an observability platform.",
    image: "grafana.svg",
  },
  {
    title: "Rust",
    description: "Rust is a systems programming language.",
    image: "rust.svg",
  },
  {
    title: "TypeScript",
    description: "TypeScript is a typed superset of JavaScript.",
    image: "typescript.svg",
  },
  {
    title: "Next.js",
    description: "Next.js is a React framework.",
    image: "nextjs.svg",
  },
  {
    title: "NestJS",
    description: "NestJS is a Node.js framework.",
    image: "nestjs.svg",
  },
];

export default function DesktopPage() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="p-8 flex flex-col gap-14 overflow-x-hidden w-full">
      <header className="flex flex-col gap-1">
        <h1 className="text-[#9C6644] text-5xl">Latté</h1>
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
                  {data.map((item, index) => (
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
                              <Image
                                src={`/images/${item.image}`}
                                alt={item.title}
                                width={70}
                                height={70}
                              />
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <hr className="border-primary" />
        <section className="flex flex-col gap-10">
          <div
            id="lla"
            className="flex flex-row gap-6 items-center h-full w-full justify-center 2xl:justify-between overflow-x-clip"
          >
            <Image
              src="/images/lla.svg"
              alt="lla"
              width={300}
              height={200}
              className="flex-none"
            />
            <div className="flex flex-col items-end justify-between gap-5 flex-none">
              <div className="flex flex-col items-end">
                <h3 className="text-3xl text-primary">Louis Labeyrie</h3>
                <p className="text-2xl text-secondary">Cloud Architect</p>
                <p className="text-2xl text-secondary">Solution Engineer</p>
              </div>
              <Button
                className="bg-[#DDB892] w-28"
                onClick={() =>
                  openInNewTab("https://gravatar.com/labeyrielouis")
                }
              >
                Gravatar
              </Button>
            </div>
            <div className="grow hidden 2xl:flex flex-row justify-center text-primary">
              <MyGitHubCalendar username="Razano26" />
            </div>
          </div>
          <div
            id="dte"
            className="flex flex-row gap-6 items-center h-full w-full justify-center 2xl:justify-between overflow-x-clip"
          >
            <Image
              src="/images/dte.svg"
              alt="dte"
              width={300}
              height={200}
              className="flex-none"
            />
            <div className="flex flex-col items-end justify-between gap-5 flex-none">
              <div className="flex flex-col items-end">
                <h3 className="text-3xl text-primary">Dorian Tetu</h3>
                <p className="text-2xl text-secondary">Lead Developer</p>
                <p className="text-2xl text-secondary">Solution Engineer</p>
              </div>
              <Button
                className="bg-[#DDB892] w-28"
                onClick={() =>
                  openInNewTab("https://gravatar.com/doriantetu34")
                }
              >
                Gravatar
              </Button>
            </div>
            <div className="grow hidden 2xl:flex flex-row justify-center text-primary">
              <MyGitHubCalendar username="Nayrode" />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-row justify-center">
        <p className="text-primary">
          © LATTECORPORATION.CO, All Right Reserved.
        </p>
      </footer>
    </div>
  );
}
