import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";
import {
  PiCellSignalFullDuotone,
  PiCellSignalLowDuotone,
  PiCellSignalMediumDuotone,
  PiCircleHalfDuotone,
  PiDotsThreeBold,
  PiWarningFill,
} from "react-icons/pi";

export const StatusIconMap: Record<string, React.ReactNode> = {
  Todo: <BsCircle />,
  "In progress": <PiCircleHalfDuotone size={20} />,
  Backlog: <BsFillCheckCircleFill />,
};

export const PriorityIconMap: Record<string, React.ReactNode> = {
  "In progress": <BsCircle />,
  "No priority": <PiDotsThreeBold />,
  High: <PiCellSignalFullDuotone />,
  Medium: <PiCellSignalMediumDuotone />,
  Low: <PiCellSignalLowDuotone />,
  Urgent: <PiWarningFill size={20} style={{ color: "#f59e0b" }} />,
};
