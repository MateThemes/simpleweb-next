// src/app/schema.ts
interface ServiceSchemaProps {
  name: string;
  description: string;
  image: string;
}

interface AboutSchemaProps {
  name: string;
  description: string;
  image: string;
  foundingDate: string;
  founders: string[];
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

interface PortfolioProject {
  name: string;
  description: string;
  image: string;
  url: string;
}

interface PortfolioSchemaProps {
  name: string;
  description: string;
  image: string;
  projects: PortfolioProject[];
}

interface ProcessStep {
  name: string;
  description: string;
  image: string;
}

interface ProcessSchemaProps {
  name: string;
  description: string;
  image: string;
  steps: ProcessStep[];
}

interface Feature {
  name: string;
  included: boolean;
}

interface PricingPackage {
  name: string;
  description: string;
  price: string;
  features: Feature[];
}

interface PricingSchemaProps {
  name: string;
  description: string;
  image: string;
  packages: PricingPackage[];
}

interface ContactAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

interface ContactSchemaProps {
  name: string;
  email: string;
  phone: string;
  address: ContactAddress;
  openingHours: string[];
  image: string;
}

export function serviceSchema({ name, description, image }: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "SimpleWebDesign",
      "image": image
    }
  };
}

export function aboutSchema({ name, description, image, foundingDate, founders, address }: AboutSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "image": image,
    "foundingDate": foundingDate,
    "founder": founders.map(founder => ({
      "@type": "Person",
      "name": founder
    })),
    "address": {
      "@type": "PostalAddress",
      ...address
    }
  };
}

export function portfolioSchema({ name, description, image, projects }: PortfolioSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "description": description,
    "image": image,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.name,
        "description": project.description,
        "image": project.image,
        "url": project.url
      }
    }))
  };
}

export function processSchema({ name, description, image, steps }: ProcessSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "image": image,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.description,
      "image": step.image
    }))
  };
}

export function pricingSchema({ name, description, image, packages }: PricingSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "offers": packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.name,
      "description": pkg.description,
      "price": pkg.price === "Individuell" ? undefined : pkg.price,
      "priceCurrency": pkg.price === "Individuell" ? undefined : "EUR",
      "itemOffered": {
        "@type": "Service",
        "name": pkg.name,
        "description": pkg.description,
        "offers": {
          "@type": "Offer",
          "price": pkg.price === "Individuell" ? undefined : pkg.price,
          "priceCurrency": pkg.price === "Individuell" ? undefined : "EUR"
        }
      }
    }))
  };
}

export function contactSchema({ name, email, phone, address, openingHours, image }: ContactSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "image": image,
    "email": email,
    "telephone": phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(' ')[0],
      "opens": hours.split(' ')[1]?.split('-')[0],
      "closes": hours.split(' ')[1]?.split('-')[1]
    }))
  };
}