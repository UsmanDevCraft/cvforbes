"use client";

import { AnimatePresence } from "framer-motion";
import { useAlert } from "@/src/context/AlertContext";
import AlertItem from "./AlertItem";

export default function AlertContainer() {
  const { alerts } = useAlert();

  return (
    <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 w-[92%] max-w-sm">
      <AnimatePresence>
        {alerts.map((alert) => (
          <AlertItem key={alert.id} alert={alert} />
        ))}
      </AnimatePresence>
    </div>
  );
}
