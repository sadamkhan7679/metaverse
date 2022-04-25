import React from "react";
import Spinner from "@/src/assets/svg/rolling-spinner.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/src/hooks/useAppContext";

export const ButtonBase = ({
  children,
  className = "",
  icon,
  withLoading = false,
  ...rest
}) => {
  const { isLoading } = useAppContext();

  return (
    <motion.button className={`btn__base ${className}`} {...rest}>
      {icon && (
        <div className="btn__icon" aria-hidden>
          {icon}
        </div>
      )}
      <motion.div className="btn__label">
        <AnimatePresence initial={false}>
          {withLoading && isLoading && (
            <motion.div
              className="btn__spinner"
              variants={{
                hide: { opacity: 0, width: 0 },
                show: {
                  opacity: 1,
                  width: "auto",
                  transition: {
                    duration: 0.2,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
            >
              <Spinner />
            </motion.div>
          )}
        </AnimatePresence>
        {children}
      </motion.div>
    </motion.button>
  );
};
