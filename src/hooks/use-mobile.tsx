import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const isMobile = React.useMemo(() => window.innerWidth < MOBILE_BREAKPOINT, [])
  return isMobile
}
