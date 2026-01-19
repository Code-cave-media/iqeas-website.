import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Clock, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import hero2 from "@/assets/hero-offshore-2.jpg";

const stats = [
  { icon: Clock, label: "Years Experience", value: "20+" },
  { icon: Users, label: "Global Partners", value: "9+" },
  { icon: Target, label: "Projects Delivered", value: "7+" },
  { icon: Award, label: "Client Satisfaction", value: "99%" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-900">
        <div className="absolute inset-0 opacity-20">
          <img src={hero2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              About IQEAS
            </h1>
            <p className="text-xl text-steel-200">
              Two decades of offshore engineering mastery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                IQEAS was founded by a team of seasoned offshore and marine professionals to solve complex engineering challenges in the marine and oil & gas sectors. Our foundation is built on hands-on experience, technical depth, and a commitment to precision.
              </p>
              
              <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">Our Foundation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a specialized group of professionals who have synergized extensive, hands-on experience across the Marine and Oil & Gas sectors to service the industry's most demanding strength and deep sector knowledge.
              </p>

              <h2 className="text-2xl font-heading font-bold text-foreground mt-12 mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our operations are underpinned by robust project management skills, industry best practices, proven methodologies, and advanced tools. We foster an environment of collaboration and precision at every stage, delivering tailored, high-value outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-accent">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary-foreground/80 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 md:p-10 rounded-xl shadow-lg border border-border"
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be globally recognized as the definitive authority and strategic partner for high-precision engineering and innovative design across the entire offshore and marine industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 md:p-10 rounded-xl shadow-lg border border-border"
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower offshore and marine operators — including ships, oil rigs, and specialized vessels — by leveraging our two decades of marine field mastery to deliver solutions ensuring absolute perfection and unparalleled efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Explore Our Projects
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto mb-8">
              See how we've delivered precision engineering solutions for clients worldwide.
            </p>
            <Link to="/projects">
              <Button variant="hero" size="lg">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
