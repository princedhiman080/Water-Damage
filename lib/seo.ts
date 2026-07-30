export const siteConfig = {
  name: "Chicago Water Damage Restoration",
  description: "24/7 Emergency water damage restoration, flood cleanup, and structural drying services in Chicago, IL. 60-minute response time. Licensed & insured partners.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chicagowaterdamage.vercel.app",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "(312) 555-0199",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL || "+13125550199",
  email: "demo@demo.com",
  address: {
    streetAddress: "100 N LaSalle St",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60602",
    addressCountry: "US"
  },
  geo: {
    latitude: 41.8837,
    longitude: -87.6324
  },
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "$$"
};
