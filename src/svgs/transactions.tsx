import * as React from "react";

interface TransactionsSvgProps extends React.SVGProps<SVGSVGElement> { }

const TransactionsSvg: React.FC<TransactionsSvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={17}
    viewBox="0 0 21.533 17"
    {...props}
  >
    <path
      id="credit_card_FILL0_wght300_GRAD0_opsz24"
      d="M121.534-777.95v12.9a1.978,1.978,0,0,1-.6,1.454,1.978,1.978,0,0,1-1.454.6H102.05a1.978,1.978,0,0,1-1.454-.6,1.978,1.978,0,0,1-.6-1.454v-12.9a1.978,1.978,0,0,1,.6-1.454A1.978,1.978,0,0,1,102.05-780h17.436a1.978,1.978,0,0,1,1.454.595A1.978,1.978,0,0,1,121.534-777.95ZM101.7-775.575h18.133v-2.376a.333.333,0,0,0-.109-.24.333.333,0,0,0-.24-.109H102.05a.333.333,0,0,0-.24.109.333.333,0,0,0-.109.24Zm0,3.618v6.909a.333.333,0,0,0,.109.24.333.333,0,0,0,.24.109h17.436a.333.333,0,0,0,.24-.109.333.333,0,0,0,.109-.24v-6.909Zm0,7.258v0Z"
      transform="translate(-100.001 779.999)"
      fill="#072635"
    />
  </svg>
);
export default TransactionsSvg;
