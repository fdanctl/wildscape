export function XSvg({
  size = 14,
  color = "#344E41",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
        fill={color}
      />
    </svg>
  );
}
