import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PlaySVGComponent = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.736 4 21.276 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
      fill="#1C274C"
    />
  </Svg>
);
export default PlaySVGComponent;
