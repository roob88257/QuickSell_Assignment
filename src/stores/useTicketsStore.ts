import { create } from "zustand";
import { Ticket } from "../types";

interface TicketsState {
  tickets: Ticket[];
}

export const useTicketsStore = create<TicketsState>()(() => ({
  tickets: [],
}));
