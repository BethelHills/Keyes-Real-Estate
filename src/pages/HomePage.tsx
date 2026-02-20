import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowRight, Home, DollarSign, Handshake, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/PropertyCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { featuredProperties, testimonials } from "@/data/properties";

const services = [
  {
    icon: Home,
    title: "Buy",
    description: "Find your dream home with expert guidance and strong negotiation on your side.",
  },
  {
    icon: DollarSign,
    title: "Sell",
    description: "Maximize your home's value with strategic pricing and targeted marketing.",
  },
  {
    icon: Handshake,
    title: "Negotiate",
    description: "Protect your interests with skilled negotiation that saves you money.",
  },
  {
    icon: TrendingUp,
    title: "Invest",
    description: "Build wealth through smart real estate investment strategies.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 lg:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight text-balance"
            >
              Smart Real Estate Moves in{" "}
              <span className="text-primary">Los Angeles</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Trusted guidance for buyers and sellers, backed by strong negotiation and fast action.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild>
                <Link to="/listings">Browse Listings</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to an Agent</Link>
              </Button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-semibold text-foreground">4.9</span>
                <span>rating</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span>206 reviews</span>
              <div className="h-4 w-px bg-border" />
              <span>Los Angeles-based</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Featured Listings
              </h2>
              <p className="mt-2 text-muted-foreground">
                Handpicked properties across Los Angeles
              </p>
            </div>
            <Button variant="ghost" asChild className="self-start md:self-auto">
              <Link to="/listings" className="flex items-center gap-2">
                View All Listings
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProperties.slice(0, 3).map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              How We Help
            </h2>
            <p className="mt-4 text-muted-foreground">
              Expert guidance at every step of your real estate journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
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
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Win / Case Study */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-accent/20 text-accent rounded-full mb-4">
                Recent Win
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Just Sold in Sherman Oaks
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Under contract even during the holidays. We strongly negotiated for our buyers and closed{" "}
                <span className="font-semibold text-primary">$124,000 under asking</span>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Beds", value: "4" },
                  { label: "Baths", value: "3" },
                  { label: "Sq Ft", value: "2,993" },
                  { label: "Lot", value: ".55 acre" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-secondary rounded-lg">
                    <p className="text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-6">
                <span>Final Price: $1,775,000</span>
              </div>

              <ul className="space-y-2 mb-8">
                {[
                  "Negotiated $124,000 below asking",
                  "Closed during holiday season",
                  "Protected buyer interests throughout",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild>
                <Link to="/contact">Get Similar Results</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Sherman Oaks property"
                className="rounded-lg shadow-elevated w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-prominent">
                <span className="text-sm font-medium">Saved Buyers</span>
                <p className="text-2xl font-serif font-bold">$124,000</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real stories from buyers and sellers we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-semibold mb-4"
          >
            Buying or selling?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto"
          >
            We are here when it matters most. Let's talk about your real estate goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Talk to an Agent</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+13104869417">(310) 486-9417</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
