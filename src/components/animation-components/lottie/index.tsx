import React, { Suspense } from "react";

import type { LottieInterface } from "@/types";

const LazyAnimation = React.lazy(() =>
  import("./animation").then((component) => ({
    default: component.AnimationPlayer,
  }))
);

export const Lottie: React.FC<LottieInterface> = (props) => {
  const { loadingComponent, ...animationProps } = props;

  return (
    <Suspense fallback={loadingComponent}>
      <LazyAnimation {...animationProps} />
    </Suspense>
  );
};
