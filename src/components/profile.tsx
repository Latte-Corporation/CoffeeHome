"use client";
import MyGitHubCalendar from "@components/github-calendar";
import { Button } from "@components/ui/button";
import Image from "next/image";
import { TextAnimate } from "@components/magicui/text-animate";
import { BlurFade } from "@components/magicui/blur-fade";

interface ProfileProps {
  trigram: string;
  fullName: string;
  role: string[];
  gravatarUrl: string;
  githubUsername: string;
}

export function Profile({
  trigram,
  fullName,
  role,
  gravatarUrl,
  githubUsername,
}: ProfileProps) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      id={trigram}
      className="flex flex-row gap-6 items-center h-full w-full justify-center 2xl:justify-between overflow-x-clip"
    >
      <BlurFade key="submit" delay={0.4} inView>
        <Image
          src={`/images/${trigram}.svg`}
          alt={trigram}
          width={300}
          height={200}
          className="flex-none"
        />
      </BlurFade>
      <div className="flex flex-col items-end justify-between gap-5 flex-none">
        <div className="flex flex-col items-end">
          <h3 className="text-3xl text-primary">{fullName}</h3>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-2xl text-secondary text-end"
          >
            {role.join("\n")}
          </TextAnimate>
        </div>
        <Button
          className="bg-[#DDB892] w-28"
          onClick={() => openInNewTab(`https://gravatar.com/${gravatarUrl}`)}
        >
          Gravatar
        </Button>
      </div>
      <div className="grow hidden 2xl:flex flex-row justify-center text-primary">
        <MyGitHubCalendar username={githubUsername} />
      </div>
    </div>
  );
}
