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
                With over 5 years of experience in web development, I've worked on
                various projects ranging from small business websites to large-scale
                enterprise applications. My passion lies in creating clean,
                efficient, and user-friendly solutions that solve real-world
                problems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">What I Do</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Full-stack web development</li>
                <li>✓ Responsive and mobile-first design</li>
                <li>✓ API development and integration</li>
                <li>✓ Performance optimization</li>
                <li>✓ Technical consultation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}