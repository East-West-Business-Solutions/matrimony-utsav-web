import Link from "next/link";

const venues = [
  {
    name: "Royal Palace Banquet",
    city: "Delhi",
    price: "₹2,50,000",
    rating: "4.9",
    reviews: "156 reviews",
  },
  {
    name: "Garden Paradise Resort",
    city: "Jaipur",
    price: "₹3,00,000",
    rating: "4.8",
    reviews: "203 reviews",
  },
  {
    name: "Grand Heritage Hall",
    city: "Mumbai",
    price: "₹2,20,000",
    rating: "4.7",
    reviews: "178 reviews",
  },
];

function Star() {
  return (
    <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center">
      ★
    </span>
  );
}

export default function FeaturedVenues() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Venues</h2>
          <p className="mt-2 text-sm text-slate-600">
            Handpicked premium venues for your special day
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50"
        >
          View All <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {venues.map((v) => (
          <article
            key={v.name}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm"
          >
            {/* Image placeholder */}
            <div className="relative h-44 bg-slate-200">
              <div className="absolute right-3 top-3 rounded-full bg-rose-800 px-3 py-1 text-xs font-semibold text-white">
                {v.price}
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-semibold">{v.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{v.city}</p>

              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 font-semibold text-amber-800">
                  <Star /> {v.rating}
                </span>
                <span className="text-slate-500">({v.reviews})</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
