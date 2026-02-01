import ResultsLayout from "@/components/results/results-layout";
import { FiltersSidebar } from "@/components/results/filters-sidebar";
import { MOCK_VENUES } from "@/data/mock/venues";
import VenuesResultsCountClient from "../../components/results/venues-results-count-client";
import VenuesResultsClient from "../../components/results/venues-results-client";

const VENUE_CATEGORIES = [
  "Banquet Halls",
  "Wedding Resorts",
  "Convention Centers",
  "Outdoor Lawns",
  "Hotels",
];

const CITIES = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];

export default function VenuesPage() {
  return (
    <ResultsLayout
      sidebar={
        <FiltersSidebar
          cities={CITIES}
          categories={VENUE_CATEGORIES}
        />
      }
      topBar={
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Venues</h1>
          <VenuesResultsCountClient />
        </div>
      }
    >
      <VenuesResultsClient />
    </ResultsLayout>
  );
}