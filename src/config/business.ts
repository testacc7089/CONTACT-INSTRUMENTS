/**
 * Contact Instruments — editable business facts.
 *
 * Publish only what the client has confirmed.
 * Leave email and WhatsApp empty until a real address or number is supplied.
 * Do not invent hours, social profiles, certifications, or a Google profile URL.
 *
 * The telephone below is the number shown on the Google Business Profile.
 * It is not marked verified. Confirm it before launch, then set phone.verified to true.
 *
 * Keep the matching fields in index.html (title, description, JSON-LD) in step
 * with this file when the public details change.
 */

export type BusinessConfig = {
  name: string
  category: string
  /** Production origin, with protocol and no trailing slash. Empty until the domain is known. */
  siteUrl: string
  address: {
    line1: string
    line2: string
    locality: string
    region: string
    postalCode: string
    country: string
    countryCode: string
  }
  phone: {
    display: string
    e164: string
    verified: boolean
    note: string
  }
  email: {
    address: string | null
    verified: boolean
    note: string
  }
  whatsapp: {
    /**
     * International digits only, no plus sign and no spaces.
     * Example: "918999560442".
     */
    number: string | null
    verified: boolean
    note: string
  }
  hours: { days: string; hours: string }[] | null
  social: { label: string; href: string }[]
  googleProfileUrl: string | null
}

export const business: BusinessConfig = {
  name: "Contact Instruments",
  category: "Weighing equipment and instrumentation",
  siteUrl: "",
  address: {
    line1: "Old Samrat Talkies, Amravati Road",
    line2: "Near Ashok Car Glass and Asha Hospital, Duttawadi",
    locality: "Nagpur",
    region: "Maharashtra",
    postalCode: "440023",
    country: "India",
    countryCode: "IN",
  },
  phone: {
    display: "089995 60442",
    e164: "+918999560442",
    verified: false,
    note: "Telephone as listed on the Google Business Profile. Confirm it with the business before you rely on it.",
  },
  email: {
    address: null,
    verified: false,
    note: "A business email will appear here once it has been verified.",
  },
  whatsapp: {
    number: null,
    verified: false,
    note: "WhatsApp is not listed until a verified WhatsApp number is added.",
  },
  hours: null,
  social: [],
  googleProfileUrl: "https://share.google/mosE7oYdX8aLWkGbq",
}

export function addressLines(): string[] {
  const a = business.address
  return [
    a.line1,
    a.line2,
    `${a.locality}, ${a.region} ${a.postalCode}`,
    a.country,
  ]
}

export function fullAddress(): string {
  const a = business.address
  return [
    business.name,
    a.line1,
    a.line2,
    a.locality,
    a.region,
    a.postalCode,
    a.country,
  ].join(", ")
}

export function telHref(): string | null {
  if (!business.phone.e164) return null
  return `tel:${business.phone.e164}`
}

export function mailHref(): string | null {
  const email = business.email.address
  if (!email || !email.includes("@")) return null
  return `mailto:${email}`
}

export function whatsappHref(): string | null {
  const number = business.whatsapp.number
  if (!number || !/^[0-9]{8,15}$/.test(number)) return null
  return `https://wa.me/${number}`
}

export function mapsHref(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress())}`
}

export function googleHref(): { href: string; label: string } {
  if (business.googleProfileUrl) {
    return {
      href: business.googleProfileUrl,
      label: "Open the Google listing",
    }
  }
  const query = encodeURIComponent(
    "Contact Instruments Duttawadi Nagpur weighing",
  )
  return {
    href: `https://www.google.com/search?q=${query}`,
    label: "Search for Contact Instruments on Google",
  }
}
