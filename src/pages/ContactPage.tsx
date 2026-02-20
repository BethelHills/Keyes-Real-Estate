import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    area: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      area: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Ready to buy, sell, or just have questions? We're here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(310) 555-1234"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in *</Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    >
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buying">Buying a Home</SelectItem>
                        <SelectItem value="selling">Selling a Home</SelectItem>
                        <SelectItem value="both">Buying & Selling</SelectItem>
                        <SelectItem value="investing">Investing</SelectItem>
                        <SelectItem value="valuation">Property Valuation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="area">Preferred Area</Label>
                    <Select
                      value={formData.area}
                      onValueChange={(value) => setFormData({ ...formData, area: value })}
                    >
                      <SelectTrigger id="area">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beverly-hills">Beverly Hills</SelectItem>
                        <SelectItem value="eagle-rock">Eagle Rock</SelectItem>
                        <SelectItem value="sherman-oaks">Sherman Oaks</SelectItem>
                        <SelectItem value="pasadena">Pasadena</SelectItem>
                        <SelectItem value="silver-lake">Silver Lake</SelectItem>
                        <SelectItem value="los-feliz">Los Feliz</SelectItem>
                        <SelectItem value="other">Other / Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">Under $1M</SelectItem>
                        <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                        <SelectItem value="2m-3m">$2M - $3M</SelectItem>
                        <SelectItem value="3m-5m">$3M - $5M</SelectItem>
                        <SelectItem value="over-5m">Over $5M</SelectItem>
                        <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your real estate goals..."
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:+13104869417"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (310) 486-9417
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:info@keyesrealestate.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@keyesrealestate.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <a
                        href="https://maps.google.com/?q=1412+Colorado+Blvd,+Los+Angeles,+CA+90041"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        1412 Colorado Blvd
                        <br />
                        Los Angeles, CA 90041
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9 AM - 6 PM
                        <br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Call CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Need to talk now?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Call us directly for immediate assistance with your real estate needs.
                </p>
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <a href="tel:+13104869417">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (310) 486-9417
                  </a>
                </Button>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.9697857366197!2d-118.21287132357083!3d34.13849991371829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0c8d0a9c0a5%3A0x6e0a2c2c0a2c0a2c!2s1412%20Colorado%20Blvd%2C%20Los%20Angeles%2C%20CA%2090041!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Keyes Real Estate Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
