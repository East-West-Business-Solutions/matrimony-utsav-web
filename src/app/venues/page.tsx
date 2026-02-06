import ResultsLayout from "@/components/results/results-layout";
import { FiltersSidebar } from "@/components/results/filters-sidebar";
import Breadcrumbs from "@/components/results/breadcrumbs";
import ResultsToolbar from "@/components/results/results-toolbar";
import VenuesResultsClient from "@/components/results/venues-results-client";
import { Suspense } from "react";

const VENUE_CATEGORIES = [
  "Banquet Halls",
  "Wedding Resorts",
  "Convention Centers",
  "Outdoor Lawns",
  "Hotels",
];

const CITIES = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];

export const dynamic = "force-dynamic";

export default function VenuesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsLayout
        variant="commerce"
        sidebar={
          <FiltersSidebar
            cities={CITIES}
            categories={VENUE_CATEGORIES}
          />
        }
        topBar={
          <>
            <Breadcrumbs
              sectionLabel="Venues"
              sectionHref="/venues"
              variant="light"
            />
            <ResultsToolbar title="Venues" dataSource="venues" />
          </>
        }
      >
        <VenuesResultsClient />
      </ResultsLayout>
    </Suspense>
  );
}