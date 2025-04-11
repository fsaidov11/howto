import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  return React.useMemo(() => window.innerWidth < MOBILE_BREAKPOINT, [])
}
