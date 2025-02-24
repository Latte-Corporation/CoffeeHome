"use client";
import { BlurFade } from "@components/magicui/blur-fade";
import { TextAnimate } from "@components/magicui/text-animate";
import { Button } from "@components/ui/button";
import Image from "next/image";
import dynamic from "next/dynamic";

const MyGitHubCalendar = dynamic(() => import("@components/github-calendar"), {
  ssr: false,
});

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
    <>
      {/* Desktop */}
      <div
        id={trigram}
        className="hidden sm:flex flex-row gap-6 items-center h-fit w-full justify-center 2xl:justify-between overflow-x-clip"
      >
        <div id="infos" className="flex flex-row max-w-[380px]">
          <BlurFade key="submit" inView>
            <Image
              src={`/images/${trigram}.svg`}
              alt={trigram}
              width={300}
              height={225}
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
              onClick={() =>
                openInNewTab(`https://gravatar.com/${gravatarUrl}`)
              }
            >
              Gravatar
            </Button>
          </div>
        </div>
        <div className="grow hidden 2xl:flex flex-row justify-center text-primary">
          <MyGitHubCalendar username={githubUsername} />
        </div>
      </div>
      {/* Mobile */}
      <div id={trigram} className="flex flex-col sm:hidden gap-5 items-center">
        <div className="flex items-center w-full h-full justify-between">
          <Image
            src={`/images/${trigram}-mobile.svg`}
            alt={trigram}
            width={180}
            height={180}
          />
          <div className="flex flex-col items-end h-full gap-4">
            <div className="flex flex-col items-end">
              <h3 className="text-xl text-[#e6ccb2]">{fullName}</h3>
              <TextAnimate
                animation="fadeIn"
                by="line"
                as="p"
                className="text-md text-secondary text-center w-full flex flex-col items-end"
              >
                {role.join("\n")}
              </TextAnimate>
            </div>
            <Button
              className="bg-[#DDB892]"
              onClick={() =>
                openInNewTab(`https://gravatar.com/${gravatarUrl}`)
              }
              size="sm"
            >
              Gravatar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
