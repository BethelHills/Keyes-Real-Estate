import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80";

export interface Property {
  id: string;
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  neighborhood: string;
  image: string;
  status?: "For Sale" | "Pending" | "Sold";
}

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [imageError, setImageError] = useState(false);
  const imageSrc = imageError ? PLACEHOLDER_IMAGE : property.image;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        {property.status && (
          <span
            className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full ${
              property.status === "For Sale"
                ? "bg-primary text-primary-foreground"
                : property.status === "Pending"
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {property.status}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1">
            {property.title}
          </h3>
          <span className="font-semibold text-primary whitespace-nowrap">
            {formatPrice(property.price)}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span>{property.neighborhood}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="h-4 w-4" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <Button variant="outline" className="w-full" asChild>
          <Link to={`/listings/${property.id}`}>View Details</Link>
        </Button>
      </div>
    </motion.article>
  );
}
