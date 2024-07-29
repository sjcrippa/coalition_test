import type { ReactElement } from "react";

import HomeSvg from "../Svgs/home";
import PatientSvg from "../Svgs/patient";
import ScheduledSvg from "../Svgs/scheduled";
import MessageSvg from "../Svgs/message";
import TransactionsSvg from "../Svgs/transactions";

interface MenuItem {
  label: string;
  icon: ReactElement;
  isActive: boolean;
}

const menuItems: MenuItem[] = [
  { label: 'Overview', icon: <HomeSvg />, isActive: false },
  { label: 'Patients', icon: <PatientSvg />, isActive: true },
  { label: 'Schedule', icon: <ScheduledSvg />, isActive: false },
  { label: 'Message', icon: <MessageSvg />, isActive: false },
  { label: 'Transactions', icon: <TransactionsSvg />, isActive: false },
];

export default menuItems;