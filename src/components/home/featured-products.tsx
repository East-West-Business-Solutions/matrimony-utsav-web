import Link from "next/link";

const products = [
  {
    name: "Elegant Jewellery Collection",
    by: "Royal Gems",
    price: "₹2,50,000",
    rating: "4.9",
    reviews: "89 reviews",
  },
  {
    name: "Designer Wedding Invitations",
    by: "Artisan Cards",
    price: "₹250/card",
    rating: "4.8",
    reviews: "203 reviews",
  },
  {
    name: "Bridal Couture Collection",
    by: "Bridal Bliss",
    price: "₹75,000",
    rating: "4.8",
    reviews: "234 reviews",
  },
];

function Star() {
  return (
    <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center">
      ★
    </span>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <p className="mt-2 text-sm text-slate-600">
            Curated wedding essentials for your perfect day
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-50"
        >
          View All <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.name}
            className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm"
          >
            {/* Image placeholder */}
            <div className="relative h-44 bg-rose-50">
              <div className="absolute right-3 top-3 rounded-full bg-rose-700 px-3 py-1 text-xs font-semibold text-white">
                {p.price}
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">by {p.by}</p>

              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-1 rounded-md bg-rose-50 px-2 py-1 font-semibold text-rose-700">
                  <Star /> {p.rating}
                </span>
                <span className="text-slate-500">({p.reviews})</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
