import IIcon from "../interfaces/icon.interface";

const IconLogo = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <g fill="none">
        <path
          fill="#9b9b9b"
          d="M16.055 1.5c-8.008 0-14.5 6.492-14.5 14.5s6.492 14.5 14.5 14.5c8.009 0 14.5-6.492 14.5-14.5s-6.491-14.5-14.5-14.5"
        />
        <path
          fill="#fff"
          d="M2.556 16c0-7.456 6.044-13.5 13.5-13.5c7.455 0 13.5 6.044 13.5 13.5s-6.045 13.5-13.5 13.5c-7.456 0-13.5-6.044-13.5-13.5"
        />
      </g>
    </svg>
  );
};

export default IconLogo;
