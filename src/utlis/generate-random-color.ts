const colors = [
  "#f97316",
  "#ef4444",
  "#06b6d4",
  "#8b5cf6",
  "#e11d48",
  "#c026d3",
  "#7c3aed",
  "#d97706",
  "#1e293b",
  "#f97316",
  "#ef4444",
  "#06b6d4",
  "#8b5cf6",
  "#e11d48",
  "#c026d3",
  "#7c3aed",
  "#d97706",
  "#1e293b",
];

export const generateRandomColor = () =>
  colors[Math.floor(Math.random() * colors.length)];
