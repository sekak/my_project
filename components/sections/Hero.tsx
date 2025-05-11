"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Soukaina Sekak</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground">
            UI UX Designer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-muted-foreground">
            I design exceptional and accessible digital experiences with a focus on creating intuitive and visually engaging interfaces that enhance usability and performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <Button size="lg" className="gap-2">
            View Projects <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
          <a
            href="/SoukainaSekakCV.pdf"
            download
            >
            Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}