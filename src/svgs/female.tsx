import * as React from "react";

interface FemaleSvgProps extends React.SVGProps<SVGSVGElement> { }

const FemaleSvg: React.FC<FemaleSvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    style={{
      fill: "rgba(0, 0, 0, 1)",
      transform: "",
      msFilter: "",
    }}
    {...props}
  >
    <path d="M12 2C8.691 2 6 4.691 6 8c0 2.967 2.167 5.432 5 5.91V17H8v2h3v2.988h2V19h3v-2h-3v-3.09c2.833-.479 5-2.943 5-5.91 0-3.309-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
  </svg>
);
export default FemaleSvg;
