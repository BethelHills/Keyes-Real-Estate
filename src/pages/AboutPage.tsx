import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Zap, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/properties";

const values = [
  {
    icon: Target,
    title: "Transparency",
    description: "Clear communication and honest guidance at every step of your transaction.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Fast response times and proactive action to secure the best opportunities.",
  },
  {
    icon: Shield,
    title: "Protection",
    description: "We protect your interests through strong negotiation and careful due diligence.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your goals are our priority. We listen, understand, and deliver results.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground"
            >
              About Keyes Real Estate
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              We're a Los Angeles-based real estate agency built on strong negotiation,
              local expertise, and a genuine commitment to our clients' success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Keyes Real Estate, we believe buying or selling a home should be a
                  confident, informed decision—not a stressful one. That's why we put
                  client interests first in every transaction.
                </p>
                <p>
                  Our approach combines deep local market knowledge with skilled negotiation
                  to ensure our clients get the best possible outcomes. Whether you're a
                  first-time buyer, seasoned investor, or selling your family home, we
                  bring the same dedication to protecting your interests.
                </p>
                <p>
                  With a 4.9-star rating from over 200 clients, our track record speaks
                  to our commitment to excellence in Los Angeles real estate.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Los Angeles real estate"
                className="rounded-lg shadow-elevated w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg shadow-soft text-center"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Meet Our Team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-soft"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's discuss your real estate goals. We're here to help you succeed.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
