import * as React from "react";

interface ScheduledSvgProps extends React.SVGProps<SVGSVGElement> { }

const ScheduledSvg: React.FC<ScheduledSvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={17}
    viewBox="0 0 15.119 17"
    {...props}
  >
    <path
      id="calendar_today_FILL0_wght300_GRAD0_opsz24"
      d="M141.609-847.614a1.552,1.552,0,0,1-1.141-.467,1.552,1.552,0,0,1-.467-1.141v-11.9a1.552,1.552,0,0,1,.467-1.141,1.552,1.552,0,0,1,1.141-.467h1.231v-1.2a.663.663,0,0,1,.2-.488.663.663,0,0,1,.488-.2.663.663,0,0,1,.488.2.663.663,0,0,1,.2.488v1.2h6.738v-1.214a.646.646,0,0,1,.192-.475.646.646,0,0,1,.475-.192.646.646,0,0,1,.475.192.646.646,0,0,1,.192.475v1.214h1.231a1.552,1.552,0,0,1,1.141.467,1.552,1.552,0,0,1,.467,1.141v11.9a1.552,1.552,0,0,1-.467,1.141,1.552,1.552,0,0,1-1.141.467Zm0-1.334h11.9a.262.262,0,0,0,.188-.086.261.261,0,0,0,.086-.188v-8.346H141.335v8.346a.261.261,0,0,0,.085.188A.262.262,0,0,0,141.609-848.948Zm-.274-9.954h12.451v-2.223a.262.262,0,0,0-.086-.188.262.262,0,0,0-.188-.086h-11.9a.262.262,0,0,0-.188.086.262.262,0,0,0-.085.188Zm0,0v0Z"
      transform="translate(-140.001 864.614)"
      fill="#072635"
    />
  </svg>
);
export default ScheduledSvg;
