import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"></link>
          <Script
          id="structured-data-newsmediaorganization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "NewsMediaOrganization",
                "@id": "https://www.nycreport.org/#organization",
                name: "Nycreporter",
                url: "https://www.nycreport.org/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.nycreport.org/images/nyc-report-logo.webp",
                  width: 1024,
                  height: 1024,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Service",
                  areaServed: "US",
                  availableLanguage: ["English"],
                },
               
                sameAs: ["https://www.nycreport.org/","https://www.instagram.com/nycreport_/"],
              },
              null,
              2
            ),
          }}
        />

          <Script
          id="structured-data-site-navigation"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                name: [
                  "Home",
                  "Business",
                  "Politics",
                  "Technology",
                  "Science",
                  "Sports",
                  "Health",
                  "puerto-rico",
                  "Entertainment"
                ],
                url: [
                  "https://www.nycreport.org/",
                  "https://www.nycreport.org/business/",
                  "https://www.nycreport.org/technology/",
                  "https://www.nycreport.org/politics/",
                  "https://www.nycreport.org/health/",
                  "https://www.nycreport.org/science/",
                  "https://www.nycreport.org/sports",
                  "https://www.nycreport.org/Entertainment",
                  "https://www.nycreport.org/puerto-rico"
                 
                ],
              },
              null,
              2
            ),
          }}
        />
         <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google-site-verification" content="kon_27CjROUsnUED0oXPUpqDv_k4SHJuOy9wMOoW2Nk" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
