import { Controls, Player } from "@lottiefiles/react-lottie-player";

import type { AnimationPlayerInterface } from "@/types";

export const AnimationPlayer: React.FC<AnimationPlayerInterface> = (props) => {
  const { style, src, ...lottieRestProps } = props;

  return (
    <Player
      src={src}
      autoplay={true}
      style={{ height: "100%", width: "100%", ...style }}
      {...lottieRestProps}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};
