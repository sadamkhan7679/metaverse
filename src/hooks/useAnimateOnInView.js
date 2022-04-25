import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-hook-inview"

export const useAnimateOnInView = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("show")
    }
    if (!inView) {
      controls.start("hidden")
    }
  }, [controls, inView])

  return { ref, controls }
}
