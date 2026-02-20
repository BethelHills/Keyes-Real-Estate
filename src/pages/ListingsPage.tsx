import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyCard } from "@/components/PropertyCard";
import { featuredProperties } from "@/data/properties";

const neighborhoods = [
  "All Neighborhoods",
  "Beverly Hills",
  "Eagle Rock",
  "Sherman Oaks",
  "Pasadena",
  "Silver Lake",
  "Los Feliz",
];

const priceRanges = [
  { label: "Any Price", value: "any" },
  { label: "Under $1M", value: "0-1000000" },
  { label: "$1M - $2M", value: "1000000-2000000" },
  { label: "$2M - $3M", value: "2000000-3000000" },
  { label: "Over $3M", value: "3000000-" },
];

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [neighborhood, setNeighborhood] = useState("All Neighborhoods");
  const [priceRange, setPriceRange] = useState("any");
  const [propertyType, setPropertyType] = useState("all");

  const filteredProperties = featuredProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.neighborhood.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesNeighborhood =
      neighborhood === "All Neighborhoods" || property.neighborhood === neighborhood;

    let matchesPrice = true;
    if (priceRange !== "any") {
      const [min, max] = priceRange.split("-").map(Number);
      matchesPrice = property.price >= min && (max ? property.price <= max : true);
    }

    return matchesSearch && matchesNeighborhood && matchesPrice;
  });

  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground"
          >
            Los Angeles Listings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            Explore homes for sale across Los Angeles. Filter by neighborhood, price, and more.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-[73px] bg-background z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by address or neighborhood..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={neighborhood} onValueChange={setNeighborhood}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Neighborhood" />
              </SelectTrigger>
              <SelectContent>
                {neighborhoods.map((n) => (
                  <SelectItem key={n} value={n}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full md:w-[160px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-full md:w-[140px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProperties.length}</span>{" "}
              {filteredProperties.length === 1 ? "property" : "properties"} found
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No properties found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setNeighborhood("All Neighborhoods");
                  setPriceRange("any");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We have access to listings before they hit the market. Contact us to learn about
            exclusive opportunities.
          </p>
          <Button asChild>
            <Link to="/contact">Talk to an Agent</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
