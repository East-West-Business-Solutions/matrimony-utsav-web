import Link from "next/link";

const platformLinks = [
  { label: "Mobile Apps", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Vendor Registration", href: "/register" },
  { label: "Franchise Opportunities", href: "#" },
  { label: "Featured Venues", href: "#" },
  { label: "Featured Products", href: "#" },
  { label: "Wedding Tips & Articles", href: "#" },
  { label: "Customer Service", href: "#" },
  { label: "Sitemap", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Feedback", href: "#" },
  { label: "Report a Problem", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Grievances", href: "#" },
  { label: "Safety Guide", href: "#" },
];

const partnerLinks = [
  { label: "Parinay.com – Matrimony", href: "https://www.parinay.com" },
  { label: "Mohan Utsav – Venues", href: "#" },
  { label: "Mohan Utsav – Services", href: "#" },
  { label: "Mohan Utsav – Products", href: "#" },
  { label: "Photography Partners", href: "#" },
  { label: "Makeup & Styling Partners", href: "#" },
  { label: "Decor & Event Partners", href: "#" },
  { label: "Catering Partners", href: "#" },
  { label: "Travel & Stay Partners", href: "#" },
];

function SocialIcon({
  kind,
}: {
  kind: "facebook" | "youtube" | "twitter" | "instagram";
}) {
  const common = "h-6 w-6";
  switch (kind) {
    case "facebook":
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.7v3H10v8h3.5z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.4 31.4 0 0 0 2 12c0 1.6.1 3.2.4 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.6L5.6 22H2.5l7.3-8.4L2 2h6.7l4.6 6.1L18.9 2Zm-1.1 18h1.8L7.8 3.9H5.9L17.8 20Z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.8a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 6.8Z"
          />
        </svg>
      );
  }
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-rose-900 bg-gradient-to-b from-rose-950 to-rose-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <div className="text-2xl font-bold tracking-tight text-rose-400">Mohan Utsav</div>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {platformLinks.map((l) => (
                <li key={l.label}>
                  <Link className="hover:text-rose-200" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <div className="text-lg font-semibold text-white">Company</div>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link className="hover:text-rose-200" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div className="text-lg font-semibold text-white">Our Partners</div>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {partnerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    className="hover:text-rose-200"
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <div className="text-lg font-semibold text-white">Contact Us</div>

            <div className="mt-6 space-y-6 text-sm text-slate-200">
              <div>
                <div className="font-semibold text-slate-100">
                  Toll Free – 1800 41 99099
                </div>
                <div className="mt-1 text-slate-300/80">
                  9:30 AM to 6:30 PM (Mon–Sun)
                </div>
                <div className="mt-4 font-semibold text-slate-100">
                  Email – support@matrimonyutsav.com
                </div>
              </div>

              <div>
                <div className="text-lg font-semibold text-white">
                  Connect with us
                </div>
                <div className="mt-4 flex items-center gap-6 text-slate-200">
                  <Link aria-label="Facebook" href="#" className="hover:text-rose-200">
                    <SocialIcon kind="facebook" />
                  </Link>
                  <Link aria-label="YouTube" href="#" className="hover:text-rose-200">
                    <SocialIcon kind="youtube" />
                  </Link>
                  <Link aria-label="Twitter/X" href="#" className="hover:text-rose-200">
                    <SocialIcon kind="twitter" />
                  </Link>
                  <Link aria-label="Instagram" href="#" className="hover:text-rose-200">
                    <SocialIcon kind="instagram" />
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-lg font-semibold text-white">
                  Download the App
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15"
                  >
                    Get it on Google Play
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15"
                  >
                    Download on the App Store
                  </Link>
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-300/80">
                  Mohan Utsav is part of the Parinay ecosystem. Please report inappropriate content via the “Report a Problem” link.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-300/80">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Mohan Utsav. All rights reserved.</div>
            <div>All trademarks are the property of their respective owners.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
