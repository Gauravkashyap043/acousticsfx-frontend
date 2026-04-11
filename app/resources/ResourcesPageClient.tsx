"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { LatestPosts } from "@/components/resources";
import FeaturedWithAllPosts from "@/components/resources/FeaturedWithAllPosts";
import WoodAcousticHero from "@/components/products/WoodAcousticHero";
import Testimonials from "@/components/home/Testimonials";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";
import { Loader2 } from "lucide-react";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "blogs";

  return (
    <>
      <WoodAcousticHero
        breadcrumbItems={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
        ]}
      />

      {activeTab === "blogs" && <LatestPosts />}

      {activeTab === "blogs" && <FeaturedWithAllPosts />}

      <Testimonials />

      <ConnectWithExperts />
    </>
  );
}

export default function ResourcesPageClient() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      }
    >
      <ResourcesContent />
    </Suspense>
  );
}
