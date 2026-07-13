import dynamic from "next/dynamic";
import LoadingScreen from "@/src/components/LoadingScreen";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CVForbes",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://cvforbes.vercel.app",
  description:
    "AI-powered platform that tailors resumes, generates personalized cover letters, and optimizes CVs for Applicant Tracking Systems (ATS).",
  image: "https://cvforbes.vercel.app/og-image.png",
  browserRequirements: "Requires JavaScript",
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const LandingPage = dynamic(() => import("@/src/view/LandingPage"), {
  loading: () => <LoadingScreen />,
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <LandingPage />
    </>
  );
}
