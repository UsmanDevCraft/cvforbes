"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, FileSearch } from "lucide-react";
import CometCard from "@/src/components/CometCard";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cornsilk px-6">
      {/* Background blobs */}

      <CometCard>
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute left-16 top-16 h-72 w-72 rounded-full bg-tea-green/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-papaya-whip blur-3xl"
        />

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-xl rounded-3xl border border-white/40 bg-white/40 p-10 text-center shadow-2xl backdrop-blur-xl"
        >
          {/* Floating icon */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-tea-green shadow-lg"
          >
            <FileSearch className="h-10 w-10 text-slate-700" />
          </motion.div>

          {/* Badge */}

          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-tea-green px-4 py-2 text-sm font-semibold text-slate-800">
            <Compass className="h-4 w-4" />
            Lost in the workspace?
          </div>

          {/* 404 */}

          <motion.h1
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="text-7xl font-black tracking-tight text-light-bronze"
          >
            404
          </motion.h1>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-slate-600">
            Looks like this page has wandered off. Let&apos;s get you back to
            building an interview-winning resume.
          </p>

          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-light-bronze px-8 py-4 font-bold text-white shadow-xl shadow-light-bronze/25 transition-all duration-300 hover:-translate-y-1 hover:bg-light-bronze-hover"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Decorative document */}

          <motion.div
            animate={{
              rotate: [-4, 4, -4],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="absolute -right-6 -top-6 hidden rounded-2xl border border-white/50 bg-white/60 p-4 shadow-lg backdrop-blur lg:block"
          >
            <div className="space-y-2">
              <div className="h-2 w-20 rounded bg-beige" />
              <div className="h-2 w-16 rounded bg-beige" />
              <div className="h-2 w-24 rounded bg-beige" />
              <div className="mt-3 h-2 w-14 rounded bg-tea-green" />
            </div>
          </motion.div>
        </motion.div>
      </CometCard>
    </main>
  );
}
