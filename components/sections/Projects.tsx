import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Cookie Ordering App UI Design",
    description: "A sleek, dark-themed mobile app interface designed for ordering premium cookies. The design features two screens: a homepage showcasing various cookie options with prices and offers, and a detailed product page emphasizing the selected cookie with an elegant, high-quality image. The interface incorporates minimalist typography, clean layout, and interactive buttons for selecting quantity and adding items to the order, providing a smooth user experience.",
    image: './img0.png',
    technologies: ["Figma", "UI/UX Design", "Mobile App Design"],
    Figma: "https://www.figma.com/design/10szDTmnNDLGaY4IeghhrJ/Untitled?t=SF8ffsEW6xT02r43-0",
  },
  {
    title: "VR E-Commerce Product UI Design",
    description: "A sleek and modern mobile UI design for a VR headset product page. The layout features high-quality product images, engaging typography, and interactive elements, creating an immersive shopping experience for users.",
    image: "./img1.png",
    technologies: ["Figma", "UI/UX Design", "Mobile App Design"],
    Figma: "https://www.figma.com/design/ccAgwJY23vxnb7S6Fdpfgd/Untitled?node-id=0-1&p=f&t=SF8ffsEW6xT02r43-0",
  },
  {
    title: "Burger Food App UI Design",
    description: "A visually appealing mobile UI design for a food ordering app, focusing on delicious burger options. The interface combines high-quality food images, vibrant colors, and user-friendly navigation to enhance the ordering experience.",
    image: "./img2.png",
    technologies: ["Figma", "UI/UX Design", "Mobile App Design"],
    Figma: "https://www.figma.com/design/0GVOdRDAk8C74LvSrcCskS/Untitled?node-id=0-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    width={100}
                    height={80}
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    <Link href={project.Figma}  target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" /> View in Figma
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}