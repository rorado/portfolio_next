"use client";

import { Component, ReactNode, Suspense } from "react";
import { Environment, type EnvironmentProps } from "@react-three/drei";

class EnvironmentErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/**
 * Environment map fetches an HDRI from drei's CDN. Real users can hit this on
 * a flaky connection, behind an ad-blocker, or if the CDN hiccups — none of
 * which should take the rest of the scene down with it.
 */
export function SafeEnvironment(props: EnvironmentProps) {
  return (
    <EnvironmentErrorBoundary>
      <Suspense fallback={null}>
        <Environment {...props} />
      </Suspense>
    </EnvironmentErrorBoundary>
  );
}
