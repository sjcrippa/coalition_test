import type { ReactElement } from "react";

import HomeSvg from "../../svgs/home";
import PatientSvg from "../../svgs/patient";
import ScheduledSvg from "../../svgs/scheduled";
import MessageSvg from "../../svgs/message";
import TransactionsSvg from "../../svgs/transactions";

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