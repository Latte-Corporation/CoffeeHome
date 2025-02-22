export default function Waves() {
  return (
    <svg
      width="100%"
      height="5%"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      overflow="auto"
      shapeRendering="auto"
      className="bg-primary"
    >
      <defs>
        <path
          id="wavepath"
          d="M 0 2000 0 500 Q 74.5 223 149 500 t 149 0 149 0 149 0 149 0 149 0 149 0 149 0 149 0  v1000 z"
        />
        <path id="motionpath" d="M -300 0 0 0" />
      </defs>
      <g>
        <use xlinkHref="#wavepath" y="-25" fill="#DDB892">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath xlinkHref="#motionpath" />
          </animateMotion>
        </use>
      </g>
    </svg>
  );
}
