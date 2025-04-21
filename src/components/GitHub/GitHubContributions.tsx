import GitHubCalendar from "react-github-calendar";
import GitHubIcon from "@mui/icons-material/GitHub";
import toast from "react-hot-toast";
import { subMonths } from "date-fns";

export const GitHubContributions = () => {
  const lastSixMonths = subMonths(new Date(), 8);

  return (
    <div className="w-full px-5 py-3 flex flex-col items-start justify-center">
      <div className="text-lg font-bold flex gap-5 my-2">
        <span>
          <GitHubIcon />
        </span>
        <p>Github Contributions</p>
      </div>
      <GitHubCalendar
        transformData={(contributions) =>
          contributions.filter((day) => new Date(day.date) >= lastSixMonths)
        }
        eventHandlers={{
          onClick: () => (activity) => {
            toast(
              <div className="text-xs font-semibold italic">
                {activity.count} Git{" "}
                {activity.count > 1 ? "activities" : "activity"} on{" "}
                {activity.date}
              </div>,
              {
                icon: "👏",
              }
            );
          },
        }}
        colorScheme="light"
        labels={{
          totalCount: "{{count}} contributions in the last 8 months",
        }}
        username="JezChristian"
      />
    </div>
  );
};
