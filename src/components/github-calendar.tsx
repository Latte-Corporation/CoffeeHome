"use client";

import GitHubCalendar from "react-github-calendar";
import MuiTooltip from "@mui/material/Tooltip";

export default function MyGitHubCalendar({ username }) {
  return (
    <GitHubCalendar
      username={username}
      colorScheme="light"
      theme={{ light: ["#E6CCB2", "#7F5539"] }}
      renderBlock={(block, activity) => (
        <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>
          {block}
        </MuiTooltip>
      )}
    />
  );
}
