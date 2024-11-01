import Script from "next/script";

function Url(): string {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  } else {
    return "localhost:3000";
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
      strategy="lazyOnload"
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
                "name": "${author}"
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
      strategy="lazyOnload"
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
                "url": "${based_url}/product/${url}"
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
  productName: string;
  author: string;
  date: string;
  reviewBody: string;
  rating: number;
  image: string;
}

const ProductReviewSchemaOrg = ({ productName, author, date, reviewBody, rating, image }: ProductReviewSchemaOrgProps) => {
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
                "name": "${productName}",
            }
            }
            `,
      }}
    />
  );
}

export { ArticleSchemaOrg, ProductSchemaOrg, ProductReviewSchemaOrg };