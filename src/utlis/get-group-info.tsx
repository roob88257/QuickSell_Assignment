import { PriorityIconMap, StatusIconMap } from "../components/GroupIcons";
import { UserAvatar } from "../components/UserAvatar";
import { Ticket } from "../types";

export const getGroupInfo = (
  tickets: Ticket[],
  grouping: string,
  group: string
) => {
  if (grouping === "User")
    return {
      group: tickets[0].user.name,
      icon: <UserAvatar user={tickets[0].user} />,
    };

  if (grouping === "Status")
    return {
      group,
      icon: StatusIconMap[group],
    };

  return { group, icon: PriorityIconMap[group] };
};
