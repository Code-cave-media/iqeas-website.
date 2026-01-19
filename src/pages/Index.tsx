import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Wrench, 
  FileCheck, 
  ShieldCheck, 
  ClipboardList, 
  Settings, 
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Quote,
  Award,
  Users,
  Shield
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-offshore-1.jpg";
import hero2 from "@/assets/hero-offshore-2.jpg";
import hero3 from "@/assets/hero-offshore-3.jpg";
import teamEngineers from "@/assets/team-engineers.jpg";
import projectAccommodation from "@/assets/project-accommodation.jpg";
import digitalizationWork from "@/assets/digitalization-work.jpg";
import structuralWorks from "@/assets/structural-works.jpg";
import certifications from "@/assets/certifications.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";

const heroSlides = [
  { image: hero1, alt: "Offshore rig at sunrise — IQEAS hero image" },
  { image: hero2, alt: "Accommodation module being installed — IQEAS" },
  { image: hero3, alt: "Marine engineers in control room — IQEAS" },
];

const workGallery = [
  { image: projectAccommodation, alt: "Accommodation module installation", title: "Module Installation" },
  { image: digitalizationWork, alt: "3D CAD digitalization work", title: "Digital Engineering" },
  { image: structuralWorks, alt: "Structural welding and hot works", title: "Structural Works" },
  { image: qualityInspection, alt: "Quality inspection on site", title: "Quality Assurance" },
];

const services = [
  {
    icon: Building2,
    title: "Offshore Accommodation Modules",
    description: "Design and delivery of modular living quarters for offshore platforms and vessels.",
  },
  {
    icon: Wrench,
    title: "Structural Engineering & Hot Works",
    description: "Structural design, reinforcement, and certified hot-work services.",
  },
  {
    icon: FileCheck,
    title: "As-Built Documentation & Digitalization",
    description: "Digitalization, 3D as-built deliverables and documentation for compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Classification Engineering",
    description: "Engineering that meets classification society requirements and standards.",
  },
  {
    icon: ClipboardList,
    title: "Project Management & Consulting",
    description: "End-to-end project planning, scheduling, and QA.",
  },
  {
    icon: Settings,
    title: "Customized Engineering Solutions",
    description: "Tailored solutions for unique offshore problems.",
  },
];

const projects = [
  {
    title: "Qatar Gas Compression Platform",
    client: "Qatar Gas",
    description: "Digitalization Centre & as-built documentation",
    outcome: "Zero failures",
    category: "Oil & Gas",
  },
  {
    title: "Australian Defence Container Accommodation",
    client: "Australian Defence",
    description: "Complete container accommodation solution",
    outcome: "Delivered to defense spec",
    category: "Defence",
  },
  {
    title: "IMI Saudi — 120 PAX Platform",
    client: "PMO Global / IMI",
    description: "120 PAX accommodation platform",
    outcome: "~99% client satisfaction",
    category: "Offshore",
  },
];

const whyIqeas = [
  "Zero-failure execution record",
  "Two decades of field expertise",
  "Global partners",
  "Proven project delivery",
  "High technical precision",
];

const clients = [
  "Saipem", "McDermott", "Drydocks World", "IMI", "Qatar Energy", 
  "PMO Global", "C&T Engineers", "Centurion", "Fulton Hogan"
];

const testimonials = [
  {
    quote: "IQEAS delivered precise documentation and timely delivery for our platform — zero defects.",
    author: "Senior Project Manager",
    company: "Qatar Gas",
  },
  {
    quote: "The accommodation module met all defense specifications and was delivered on time.",
    author: "Project Lead",
    company: "Australian Defence",
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
                Two decades of offshore field mastery
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                Reliable Offshore Engineering Solutions
              </h1>
              <p className="text-lg md:text-xl text-steel-200 mb-8 leading-relaxed">
                Innovative. Quality. Engineering & Service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button variant="hero" size="xl">
                    Learn More
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-accent w-8"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Who We Are - with Team Image */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                IQEAS delivers high-precision engineering, accommodation modules, and marine project solutions backed by two decades of offshore industry expertise. We combine hands-on field experience with modern engineering methodologies to deliver safe, efficient, and compliant solutions.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">0</div>
                  <div className="text-sm text-muted-foreground">Failures</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={teamEngineers} 
                alt="IQEAS professional engineering team on offshore platform" 
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg shadow-lg hidden md:block">
                <Users className="w-6 h-6 mb-1" />
                <div className="text-sm font-semibold">Expert Team</div>
              </div>
            </motion.div>
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
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
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
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower offshore and marine operators — including ships, oil rigs, and specialized vessels — by leveraging our two decades of marine field mastery to deliver solutions ensuring absolute perfection and unparalleled efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering services tailored to offshore reliability and compliance
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/services"
                  className="block h-full bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery - Visual Trust Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Work in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real projects, real solutions — see our engineering expertise at work
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workGallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3]"
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - Certifications & Standards */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-4"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">ISO Certified</h4>
                <p className="text-sm text-muted-foreground">Quality Management</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 p-4"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Class Approved</h4>
                <p className="text-sm text-muted-foreground">DNV, ABS, Lloyd's</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Zero Defects</h4>
                <p className="text-sm text-muted-foreground">Quality Track Record</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Global Partners</h4>
                <p className="text-sm text-muted-foreground">Trusted Worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-navy-900 text-primary-foreground">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto">
              Proven track record of successful project delivery across the globe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/projects"
                  className="block h-full bg-navy-800 p-6 rounded-xl border border-navy-700 hover:border-accent/50 transition-all duration-300 group"
                >
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-steel-400 text-sm mb-1">{project.client}</p>
                  <p className="text-steel-300 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    {project.outcome}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="accent" size="lg">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why IQEAS */}
      <section className="py-16 bg-gradient-accent">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {whyIqeas.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full backdrop-blur-sm"
                >
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  <span className="text-primary-foreground text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              Partnering with leading organizations in offshore and marine sectors
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-4 bg-muted rounded-lg text-muted-foreground font-medium hover:text-foreground hover:bg-accent/10 transition-all cursor-default"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {testimonials[currentTestimonial].author}
                  </span>
                  <span className="mx-2">—</span>
                  <span>{testimonials[currentTestimonial].company}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-full bg-card border border-border hover:border-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full bg-card border border-border hover:border-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your offshore engineering needs and discover how IQEAS can deliver precision solutions for your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
