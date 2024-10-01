import React, { useState } from "react";
import styles from "./header.module.css";
import { PiCaretDownBold } from "react-icons/pi";
import { LiaSlidersHSolid } from "react-icons/lia";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { Select } from "./Select";
import { useGroupOrderStore } from "../stores/useGroupOrderStore";
import { Groupings, Orderings } from "../constants";

interface HeaderProps extends React.PropsWithChildren {}

export const Header: React.FC<HeaderProps> = () => {
  const { grouping, ordering } = useGroupOrderStore();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.header}>
      <Button
        iconLeft={<LiaSlidersHSolid size={16} />}
        iconRight={<PiCaretDownBold size={14} />}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        Display
      </Button>

      <Dropdown
        open={open}
        onClose={() => setOpen(false)}
        className={styles.dropdown}
      >
        <Row>
          Grouping
          <Select
            options={Groupings}
            onChange={(grouping) => useGroupOrderStore.setState({ grouping })}
          >
            {grouping}
          </Select>
        </Row>
        <Row>
          Ordering
          <Select
            options={Orderings}
            onChange={(ordering) => useGroupOrderStore.setState({ ordering })}
          >
            {ordering}
          </Select>
        </Row>
      </Dropdown>
    </div>
  );
};

function Row({ children }: React.PropsWithChildren) {
  return <div className={styles.row}>{children}</div>;
}
