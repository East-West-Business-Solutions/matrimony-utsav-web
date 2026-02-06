import ResultsLayout from "@/components/results/results-layout";
import { FiltersSidebar } from "@/components/results/filters-sidebar";
import Breadcrumbs from "@/components/results/breadcrumbs";
import ResultsToolbar from "@/components/results/results-toolbar";
import ProductsResultsClient from "@/components/results/products-results-client";
import { Suspense } from "react";

const PRODUCT_CATEGORIES = [
  "Invitations",
  "Return Gifts",
  "Jewellery",
  "Accessories",
  "Décor Items",
];

const CITIES = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Wedding Products | Mohan Utsav",
  description: "Invitations, jewellery, return gifts and more",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsLayout
        variant="commerce"
        sidebar={
          <FiltersSidebar
            cities={CITIES}
            categories={PRODUCT_CATEGORIES}
          />
        }
        topBar={
          <>
            <Breadcrumbs
              sectionLabel="Products"
              sectionHref="/products"
              variant="light"
            />
            <ResultsToolbar title="Products" dataSource="products" />
          </>
        }
      >
        <ProductsResultsClient />
      </ResultsLayout>
    </Suspense>
  );
}
