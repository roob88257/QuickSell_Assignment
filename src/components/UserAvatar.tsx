import React from "react";
import { User } from "../types";
import styles from "./user-avatar.module.css";

interface UserAvatarProps extends React.PropsWithChildren {
  user: User;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
  return (
    <div
      className={styles["user-avatar"]}
      style={{ backgroundColor: user.avatar }}
    >
      {user.name
        .split(" ")
        .map((x) => x[0])
        .join("")}
      <div
        className={styles.available}
        style={{ backgroundColor: user.available ? "#d97706" : "#94a3b8" }}
      ></div>
    </div>
  );
};
