"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";
import { useAlert } from "@/src/context/AlertContext";
import { AlertProps } from "@/src/types/shared";

const styles = {
  success: {
    bg: "bg-[#CCD5AE]",
    border: "border-[#9AB56D]",
    icon: <CheckCircle2 size={22} />,
  },

  error: {
    bg: "bg-red-100",
    border: "border-red-500",
    icon: <XCircle size={22} />,
  },

  warning: {
    bg: "bg-[#FAEDCD]",
    border: "border-[#D4A373]",
    icon: <AlertTriangle size={22} />,
  },

  info: {
    bg: "bg-[#E9EDC9]",
    border: "border-[#CCD5AE]",
    icon: <Info size={22} />,
  },
};

export default function AlertItem({ alert }: AlertProps) {
  const { removeAlert } = useAlert();

  const style = styles[alert.type];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: 100,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
      ${style.bg}
      ${style.border}
      backdrop-blur-xl
      border
      rounded-2xl
      shadow-xl
      p-4
      flex
      gap-4
      items-start
      `}
    >
      <div className="text-[#6C584C] mt-1">{style.icon}</div>

      <div className="flex-1">
        <h4 className="font-semibold text-[#6C584C]">{alert.title}</h4>

        {alert.message && (
          <p className="text-sm text-[#6C584C]/80 mt-1">{alert.message}</p>
        )}
      </div>

      <button onClick={() => removeAlert(alert.id)} className="cursor-pointer">
        <X size={18} className="text-[#6C584C]" />
      </button>
    </motion.div>
  );
}
