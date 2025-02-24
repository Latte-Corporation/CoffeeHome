"use client";

import React, { useEffect, useState } from "react";
import MuiTooltip from "@mui/material/Tooltip";
import GitHubCalendar from "react-github-calendar";
import { BlurFade } from "@components/magicui/blur-fade";

export default function MyGitHubCalendar({ username }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for fetching data
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <GitHubCalendar
        loading={true}
        username="linustorval"
        colorScheme="light"
        theme={{ light: ["#E6CCB2", "#7F5539"] }}
      />
    );
  }

  return (
    <BlurFade key="github-calendar" offset={0}>
      <GitHubCalendar
        username={username}
        colorScheme="light"
        theme={{ light: ["#E6CCB2", "#7F5539"] }}
        renderBlock={(block, activity) => {
          const blockElement = React.isValidElement(block) ? block : null;
          const style = activity?.count ? {} : { stroke: "rgba(0, 0, 0, 0)" };

          const styledBlock = blockElement
            ? React.cloneElement(blockElement, {
                style: { ...blockElement.props.style, ...style },
              })
            : block;

          return (
            <MuiTooltip
              title={`${activity.count} activities on ${activity.date}`}
            >
              {styledBlock}
            </MuiTooltip>
          );
        }}
      />
    </BlurFade>
  );
}
