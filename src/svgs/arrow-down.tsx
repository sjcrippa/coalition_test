import * as React from "react";

interface ArrowDownProps extends React.SVGProps<SVGSVGElement> { }

const ArrowDown: React.FC<ArrowDownProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9.999}
    height={5.479}
    viewBox="0 0 9.999 5.479"
    {...props}
  >
    <path
      id="ArrowDown"
      d="M333.518-544.8l-4.177-4.178a.673.673,0,0,1-.136-.193.532.532,0,0,1-.05-.228.606.606,0,0,1,.165-.424.56.56,0,0,1,.434-.18h8.8a.56.56,0,0,1,.434.181.611.611,0,0,1,.165.423,1.85,1.85,0,0,1-.186.421l-4.177,4.177a.962.962,0,0,1-.3.21.851.851,0,0,1-.338.066.851.851,0,0,1-.339-.066A.963.963,0,0,1,333.518-544.8Z"
      transform="translate(-329.155 549.999)"
      fill="#072635"
    />
  </svg>
);
export default ArrowDown;
