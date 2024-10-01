import { Ticket, TicketsGroup } from "../types";
import { getGroupInfo } from "./get-group-info";

const GroupingsMap: Record<string, keyof Ticket> = {
  Status: "status",
  User: "userId",
  Priority: "priority",
};

const OrderingsMap: Record<string, keyof Ticket> = {
  Title: "title",
  Priority: "priority",
};

export const groupAndOrder = (
  tickets: Ticket[],
  grouping: string,
  ordering: string
) => {
  const map = new Map<string, Ticket[]>();

  for (const ticket of tickets) {
    const group = ticket[GroupingsMap[grouping]] as string;

    if (!map.has(group)) map.set(group, [ticket]);
    else map.get(group)!.push(ticket);
  }

  const ticketGroups: TicketsGroup[] = [];
  for (const [group, tickets] of map.entries()) {
    tickets.sort((a, b) =>
      a[OrderingsMap[ordering]]! > b[OrderingsMap[ordering]]! ? 1 : -1
    );

    ticketGroups.push({ tickets, ...getGroupInfo(tickets, grouping, group) });
  }

  return ticketGroups;
};
