import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Groupings, Orderings } from "../constants";

interface GroupOrderState {
  grouping: string;
  ordering: string;
}

export const useGroupOrderStore = create<GroupOrderState>()(
  persist(
    () => ({
      grouping: Groupings[0],
      ordering: Orderings[0],
    }),
    { name: "group-order-store" }
  )
);
