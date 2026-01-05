import { keyframes } from "@emotion/react";

const moveBackground = keyframes`
from {
  transform: translate3d(0px, 0px, 0px);
}
to { 
  transform: translate3d(1000px, 0px, 0px);
}
`;

export { moveBackground };
