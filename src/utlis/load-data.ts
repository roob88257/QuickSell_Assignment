import { PriorityLevels } from "../constants";
import { useTicketsStore } from "../stores/useTicketsStore";
import { Ticket } from "../types";
import { generateRandomColor } from "./generate-random-color";

type TicketFromResponse = Omit<Ticket, "priority" | "user"> & {
  priority: number;
};
type UserFromResponse = Omit<Ticket, "avatar">;

export const loadData = async () => {
  try {
    const res = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );

    if (!res.ok) return;

    const { tickets, users } = await res.json();

    useTicketsStore.setState({
      tickets: tickets.map((ticket: TicketFromResponse) => ({
        ...ticket,
        priority: PriorityLevels[ticket.priority],
        user: {
          ...users.find((user: UserFromResponse) => user.id === ticket.userId),
          avatar: generateRandomColor(),
        },
      })),
    });
  } catch (e) {
    console.warn(e);
  }
};
