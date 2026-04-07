export const businessConfig = {
  phone: "(503) 278-6068",
  phoneRaw: "+15032786068",
  email: "lpearch711@gmail.com",
  address: {
    street: "",
    city: "Aurora",
    state: "IL",
    zip: "60554",
    full: "Aurora, IL 60554",
  },
  hours: {
    display: "Mon-Sun: 7 AM - 8 PM",
    structured: [
      { days: "Mo-Su", opens: "07:00", closes: "20:00" },
    ],
  },

  // ===== SERVICE AREAS =====
  serviceAreas: [
    "Aurora",
    "Naperville",
    "Sugar Grove",
    "Batavia",
    "Geneva",
    "St. Charles",
    "North Aurora",
    "Oswego",
    "Montgomery",
    "Yorkville",
  ],

  serviceAreaCities: [
    { name: "Aurora", href: "" },
    { name: "Naperville", href: "" },
    { name: "Sugar Grove", href: "" },
    { name: "Batavia", href: "" },
    { name: "Geneva", href: "" },
    { name: "St. Charles", href: "" },
    { name: "North Aurora", href: "" },
    { name: "Oswego", href: "" },
    { name: "Montgomery", href: "" },
    { name: "Yorkville", href: "" },
    { name: "Plainfield", href: "" },
    { name: "Plano", href: "" },
  ],

  serviceAreasHeading: "Serving Aurora and the Fox Valley Region",
  serviceAreasSubtitle:
    "and surrounding communities including Naperville, Batavia, Geneva, St. Charles, and the greater Fox Valley area.",

  // ===== MAP EMBED =====
  googleBusinessMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95000!2d-88.35!3d41.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efbc4e1e64631%3A0x15b4d1bafe498ed!2sAurora%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",

  // ===== FORM EMBED =====
  formEmbedUrl: "",
  formEmbedHeight: "600px",

  coordinates: { lat: 41.7606, lng: -88.3201 },
  yearEstablished: 1992,
  yearsExperience: "34+",
  projectsCompleted: "1,000+",
  ownerName: "Martinez",
} as const;

// Helper: returns the map embed URL
export function getMapEmbedUrl(): string {
  if (businessConfig.googleBusinessMapEmbed) {
    return businessConfig.googleBusinessMapEmbed;
  }
  const { city, state } = businessConfig.address;
  return `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(`${city}, ${state}`)}`;
}
