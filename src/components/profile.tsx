"use client";
import { BlurFade } from "@components/magicui/blur-fade";
import { TextAnimate } from "@components/magicui/text-animate";
import { Button } from "@components/ui/button";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import crypto from "crypto";
import { useQuery } from "@tanstack/react-query";
import { UserProfile } from "types/gravatar";

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
  role,
  gravatarUrl,
  githubUsername,
}: ProfileProps) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const username = "labeyrielouis@gmail.com";
  const profileIdentifier = crypto
    .createHash("sha256")
    .update(username)
    .digest("hex");

  const { data }: { data: UserProfile } = useQuery({
    queryKey: [profileIdentifier],
    queryFn: async () => {
      const response = await fetch(
        `https://api.gravatar.com/v3/profiles/${profileIdentifier}`,
      );
      return response.json();
    },
  });

  return (
    <div
      id={trigram}
      className="flex flex-row gap-6 items-center h-fit w-full justify-center 2xl:justify-between overflow-x-clip"
    >
      <Suspense>
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
              <h3 className="text-3xl text-primary">{data?.display_name}</h3>
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
      </Suspense>
      <div className="grow hidden 2xl:flex flex-row justify-center text-primary">
        <MyGitHubCalendar username={githubUsername} />
      </div>
    </div>
  );
}
