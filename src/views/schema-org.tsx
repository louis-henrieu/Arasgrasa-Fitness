import Script from "next/script";

function Url(): string {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  } else {
    return "https://arasgrasa.fr";
  }
}

interface ArticleSchemaOrgProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  link: string;
  content: string;
}

const ArticleSchemaOrg = ({ title, description, image, date, author, link, content }: ArticleSchemaOrgProps) => {
  const based_url = Url();
  console.log("ArticleSchemaOrg based_url: ", based_url);

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
            {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${title}",
            "image": "${image}",
            "datePublished": "${date}",
            "author": {
                "@type": "Person",
                "name": "${author}",
                "url": "${based_url}/blog/${link}"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Arasgrasa Fitness",
                "logo": {
                "@type": "ImageObject",
                "url": "${based_url}/images/flavicon.webp"
                }
            },
            "description": "${description}",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${based_url}/blog"
            },
            "url": "${based_url}/blog/${link}",
            "articleBody": "${content}"
            }
            `,
      }}
    />
  );
}

interface ProductSchemaOrgProps {
  name: string;
  description: string;
  sku: string;
  brand: string;
  price: string;
  currency: string;
  availability: string;
  url: string;
  image: string;
}

const ProductSchemaOrg = ({ name, description, sku, brand, price, currency, availability, url, image }: ProductSchemaOrgProps) => {
  const based_url = Url();

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
            {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "${name}",
            "description": "${description}",
            "sku": "${sku}",
            "brand": {
                "@type": "Brand",
                "name": "${brand}"
            },
            "offers": {
                "@type": "Offer",
                "price": "${price}",
                "priceCurrency": "${currency}",
                "availability": "${availability}",
                "url": "${based_url}/product/${url}",
                "priceValidUntil": "2025-11-01"
            },
            "image": [
                "${based_url}${image}"
            ],
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${based_url}/product"
            }
            }
            `,
      }}
    />
  );
}

interface ProductReviewSchemaOrgProps {
  author: string;
  date: string;
  reviewBody: string;
  rating: number;
  image: string;
  product: {
    title: string;
    price: number;
    image: string;
    description: {
      short: string;
      long: string;
    };
  }
}

const ProductReviewSchemaOrg = ({ author, date, reviewBody, rating, image, product }: ProductReviewSchemaOrgProps) => {
  const based_url = Url();

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
            {
            "@context": "https://schema.org",
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "${author}"
            },
            "reviewBody": "${reviewBody}",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "${rating}"
            },
            "datePublished": "${date}",
            "publisher": {
                "@type": "Organization",
                "name": "Arasgrasa Fitness",
                "logo": {
                "@type": "ImageObject",
                "url": "${based_url}/images/flavicon.webp"
                }
            },
            "image": "${based_url}${image}",
            "itemReviewed": {
                "@type": "Product",
                "name": "${product.title}",
                "description": "${product.description.long}",
                "image": "${based_url}/${product.image}",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingDestination": "ES",
                  "estimatedShippingDelay": "PT3-5D"
                },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "price": "${product.price}",
                    "availability": "InStock",
                    "priceValidUntil": "2025-11-01"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "${rating}",
                    "reviewCount": "1"
                }
            }
            }
            `,
      }}
    />
  );
}

export { ArticleSchemaOrg, ProductSchemaOrg, ProductReviewSchemaOrg };