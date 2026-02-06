import ResultsLayout from "@/components/results/results-layout";
import { FiltersSidebar } from "@/components/results/filters-sidebar";
import Breadcrumbs from "@/components/results/breadcrumbs";
import ResultsToolbar from "@/components/results/results-toolbar";
import ServicesResultsClient from "@/components/results/services-results-client";
import { Suspense } from "react";

const SERVICE_CATEGORIES = [
  "Photography",
  "Makeup",
  "Decoration",
  "Catering",
  "Mehendi",
  "DJ & Music",
];

const CITIES = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Wedding Services | Mohan Utsav",
  description: "Find photographers, makeup artists, caterers and more",
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsLayout
        variant="commerce"
        sidebar={
          <FiltersSidebar
            cities={CITIES}
            categories={SERVICE_CATEGORIES}
          />
        }
        topBar={
          <>
            <Breadcrumbs
              sectionLabel="Services"
              sectionHref="/services"
              variant="light"
            />
            <ResultsToolbar title="Services" dataSource="services" />
          </>
        }
      >
        <ServicesResultsClient />
      </ResultsLayout>
    </Suspense>
  );
}
