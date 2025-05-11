import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground">
                With experience in UI/UX design, I've worked on creating intuitive and visually appealing interfaces that enhance user experience. I'm passionate about designing user-friendly, accessible, and engaging digital products that make interactions seamless.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ User-centered UI/UX design</li>
                <li>✓ Wireframing & prototyping</li>
                <li>✓ Interactive and accessible interfaces</li>
                <li>✓ Design systems & style guides</li>
                <li>✓ Usability testing & research</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}