import * as React from "react";

interface MessageSvgProps extends React.SVGProps<SVGSVGElement> { }

const MessageSvg: React.FC<MessageSvgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={17}
    viewBox="0 0 18.695 17"
    {...props}
  >
    <path
      id="chat_bubble_FILL0_wght300_GRAD0_opsz24"
      d="M103.483-845.24l-1.97,1.97a.815.815,0,0,1-.966.19.829.829,0,0,1-.546-.828V-858.22a1.717,1.717,0,0,1,.517-1.262A1.717,1.717,0,0,1,101.78-860h15.137a1.717,1.717,0,0,1,1.262.517,1.717,1.717,0,0,1,.517,1.262v11.2a1.717,1.717,0,0,1-.517,1.262,1.717,1.717,0,0,1-1.262.517Zm-.628-1.476h14.062a.29.29,0,0,0,.208-.095.29.29,0,0,0,.095-.208v-11.2a.289.289,0,0,0-.095-.208.29.29,0,0,0-.208-.095H101.78a.289.289,0,0,0-.208.095.289.289,0,0,0-.095.208v12.867Zm-1.378,0v0Z"
      transform="translate(-100.001 859.999)"
      fill="#072635"
    />
  </svg>
);
export default MessageSvg;
