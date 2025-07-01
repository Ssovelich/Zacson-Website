import Hero from "@/components/Home/Hero";
import TrainingCategories from "@/components/Home/TrainingCategories";
import VideoBanner from "@/components/Home/VideoBanner";
import WhatIOffer from "@/components/Home/WhatIOffer";

export const metadata = {
  title: "Zacson | Gym Trainer & Fitness Coach",
  description:
    "Explore fitness programs with Zacson – personal and group training for all levels. Get fit, stay strong.",
  keywords: [
    "Zacson",
    "Gym",
    "Fitness",
    "Trainer",
    "Bodybuilding",
    "Muscle Gain",
    "Weight Loss",
  ],
  openGraph: {
    title: "Zacson | Gym Trainer",
    description: "Explore top fitness programs with Zacson.",
    url: "https://zacson-fitness-club.vercel.app/",
    siteName: "Zacson Fitness Club",
    images: [
      {
        url: "https://zacson-fitness-club.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zacson Gym",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zacson | Gym Trainer",
    description: "Explore top training programs with Zacson.",
    images: ["https://zacson-fitness-club.vercel.app/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrainingCategories />
      <WhatIOffer />
      <VideoBanner />
    </div>
  );
}
export default HomePage;
