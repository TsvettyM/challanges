import IIcon from "../interfaces/icon.interface";

const IconNav = ({ className }: IIcon) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="#D3BDD8"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="48"
        d="M88 152h336M88 256h336M88 360h336"
      />
    </svg>
  );
};

export default IconNav;
