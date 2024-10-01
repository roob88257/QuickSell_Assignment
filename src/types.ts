export interface User {
  id: string;
  name: string;
  avatar: string;
  available: boolean;
}

export interface Ticket {
  id: string;
  title: string;
  userId: string;
  icon: React.ReactNode;
  status: string;
  tag: string[];
  priority: string;
  user: User;
}

export interface TicketsGroup {
  group: string;
  icon: React.ReactNode;
  tickets: Ticket[];
}
