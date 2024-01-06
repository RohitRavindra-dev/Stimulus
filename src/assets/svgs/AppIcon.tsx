import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AppIconSVGComponent = (props: SvgProps) => (
  <Svg
    width={40}
    height={35}
    fill={"yellow"}
    viewBox="0 0 24 24"
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M12 9a3.982 3.982 0 0 0-2.96 6.666A7 7 0 0 0 5 22a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1 7 7 0 0 0-4.04-6.334A3.982 3.982 0 0 0 12 9Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm4.9 10H7.1a5 5 0 0 1 9.8 0ZM12 7a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm4.6 1.9a1 1 0 0 1-.71-1.7l2.828-2.829a1 1 0 1 1 1.414 1.414L17.3 8.611a1 1 0 0 1-.7.289Zm-8.49-.289a1 1 0 0 1-1.414 0L3.868 5.782a1 1 0 0 1 1.414-1.414L8.11 7.2a1 1 0 0 1 0 1.411ZM23 13a1 1 0 0 1-1 1h-3.5a1 1 0 0 1 0-2H22a1 1 0 0 1 1 1ZM1 13a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1Z" />
  </Svg>
);
export default AppIconSVGComponent;
