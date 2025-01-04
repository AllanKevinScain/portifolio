import type { IPlayerProps } from "@lottiefiles/react-lottie-player";
import { ComponentProps } from "react";

type CutDivProps = Pick<ComponentProps<"div">, "style">;

export interface AnimationPlayerInterface extends IPlayerProps, CutDivProps {}

export interface LottieInterface extends AnimationPlayerInterface {
  loadingComponent: React.ReactNode;
}
