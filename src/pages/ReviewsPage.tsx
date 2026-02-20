import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";

const reviews = [
  {
    quote: "The Keyes team negotiated $124,000 off our purchase price during one of the toughest markets. Their responsiveness and expertise made all the difference.",
    author: "Michael Chen",
    role: "Buyer, Sherman Oaks",
    rating: 5,
  },
  {
    quote: "They truly listened to what we needed and found us the perfect home in Eagle Rock. The whole process was smooth and stress-free.",
    author: "Sarah Martinez",
    role: "Buyer, Eagle Rock",
    rating: 5,
  },
  {
    quote: "Sold our home in just two weeks for above asking price. Their market knowledge and marketing strategy were exceptional.",
    author: "David & Lisa Wong",
    role: "Sellers, Pasadena",
    rating: 5,
  },
  {
    quote: "As first-time buyers, we appreciated how patient they were with our questions. They protected our interests every step of the way.",
    author: "Jessica Thompson",
    role: "Buyer, Silver Lake",
    rating: 5,
  },
  {
    quote: "James and his team went above and beyond during our complicated sale. Their professionalism and attention to detail were outstanding.",
    author: "Robert Garcia",
    role: "Seller, Beverly Hills",
    rating: 5,
  },
  {
    quote: "We've now bought two homes with Keyes Real Estate. Their local knowledge is unmatched, and they always have our best interests at heart.",
    author: "Amanda & Chris Brooks",
    role: "Repeat Buyers, Los Feliz",
    rating: 5,
  },
  {
    quote: "The team helped us navigate a competitive bidding situation and secured our dream home. We couldn't have done it without them.",
    author: "Jennifer Lee",
    role: "Buyer, Pasadena",
    rating: 5,
  },
  {
    quote: "From listing to closing in 30 days. Their pricing strategy was spot-on and brought qualified buyers immediately.",
    author: "Thomas Mitchell",
    role: "Seller, Silver Lake",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-2xl font-serif font-semibold text-foreground">4.9</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground"
            >
              Client Reviews
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Over 206 five-star reviews from buyers and sellers across Los Angeles.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <TestimonialCard
                key={review.author}
                quote={review.quote}
                author={review.author}
                role={review.role}
                rating={review.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
            Had a great experience?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We'd love to hear about your experience working with Keyes Real Estate.
          </p>
          <Button asChild>
            <a
              href="https://www.google.com/search?q=keyes+real+estate+los+angeles"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review
            </a>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Ready to become our next success story?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join the hundreds of clients who've trusted us with their real estate journey.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
