"use client";

import GitHubCalendar from "react-github-calendar";
import MuiTooltip from "@mui/material/Tooltip";
import React from "react";

export default function MyGitHubCalendar({ username }) {
  return (
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
  );
}
