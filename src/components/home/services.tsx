const items = [
  { title: "Venues", desc: "Banquet halls, gardens & resorts" },
  { title: "Photographers", desc: "Professional photography & videography" },
  { title: "Makeup Artists", desc: "Bridal makeup & styling" },
  { title: "Mehendi", desc: "Traditional henna art" },
  { title: "Decorators", desc: "Event decoration & design" },
  { title: "Catering", desc: "Delicious cuisine & beverages" },
];

export default function ExploreServices() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Explore Our Services</h2>
        <p className="mt-2 text-sm text-slate-600">
          Find the perfect vendors for every aspect of your special day
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-lg font-bold">
              {it.title.slice(0, 1)}
            </div>
            <h3 className="mt-4 font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
