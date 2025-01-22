import { ComponentProps } from "react";

type CutDivProps = Pick<ComponentProps<"div">, "style">;

export interface AnimationPlayerInterface extends CutDivProps {}

export interface LottieInterface extends AnimationPlayerInterface {
  loadingComponent: React.ReactNode;
}
