import React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useTimer } from "react-timer-hook"

const Timer = ({ expiryTimestamp, onExpire = () => {} }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    autoStart: true,
    onExpire: () => onExpire(),
  })

  return (
    <div className="timer">
      <TimerComponent value={days} label="days" />
      <Divider />
      <TimerComponent value={hours} label="hours" />
      <Divider />
      <TimerComponent value={minutes} label="minutes" />
      <Divider />
      <TimerComponent value={seconds} label="seconds" />
    </div>
  )
}

const TimerComponent = ({ value, label }) => {
  const enableAnimate = useReducedMotion()

  return (
    <div className="timer__group">
      <div className="timer__value">
        <AnimatePresence>
          <motion.div
            className="timer__value--inner"
            key={value}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1,
            }}
            initial={{
              rotateX: !enableAnimate ? 60 : 0,
              y: !enableAnimate ? -50 : 0,
              opacity: 0,
              position: "absolute",
            }}
            animate={{
              rotateX: 0,
              y: 0,
              opacity: 1,
            }}
            exit={{
              rotateX: !enableAnimate ? -60 : 0,
              y: !enableAnimate ? 50 : 0,
              opacity: 0,
              position: "absolute",
            }}
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="timer__label">{label}</div>
    </div>
  )
}

export default Timer

const Divider = () => <span className="divider"></span>
