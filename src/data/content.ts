export type Photo = {
  src: string
  alt: string
  width: number
  height: number
  credit: string
  creditHref: string
}

export type Solution = {
  id: string
  index: string
  title: string
  summary: string
  use: string
  cta: string
  image?: Photo
  /** feature: wide photograph. split: text beside a still life. type: no photograph. */
  layout: "feature" | "still" | "type" | "detail"
}

export const photos = {
  weighbridgeTruck: {
    src: "/images/weighbridge-system.jpg",
    alt: "A truck stopped on an industrial weighbridge beside a yard gate.",
    width: 1920,
    height: 1440,
    credit: "Weighwiki, CC0, via Wikimedia Commons",
    creditHref:
      "https://commons.wikimedia.org/wiki/File:Weighbridge_Automation_System.JPG",
  },
  weighbridgeDeck: {
    src: "/images/weighbridge-jemera.jpg",
    alt: "A long steel weighbridge deck set at ground level.",
    width: 1920,
    height: 1080,
    credit: "Elgaard, CC BY-SA 4.0, via Wikimedia Commons",
    creditHref:
      "https://commons.wikimedia.org/wiki/File:Weighbridge_Jemera_de_la_Frontera.jpg",
  },
  platform: {
    src: "/images/platform-scale.jpg",
    alt: "A mechanical platform scale with a diamond-plate top and a graduated weighing beam.",
    width: 1920,
    height: 736,
    credit: "R. Henrik Nilsson, CC BY 4.0, via Wikimedia Commons",
    creditHref:
      "https://commons.wikimedia.org/wiki/File:1960_or_earlier_Stathmos_platform_scale_24_kg_type_396_6_made_in_Eskilstuna_Sweden.jpg",
  },
  vessel: {
    src: "/images/load-cell-tank.jpg",
    alt: "A steel vessel leg bolted to a load cell on a concrete industrial floor.",
    width: 1920,
    height: 1440,
    credit: "GRALISTAIR, CC BY-SA 4.0, via Wikimedia Commons",
    creditHref:
      "https://commons.wikimedia.org/wiki/File:Load_Cell_fitted_under_a_chemical_tank.jpg",
  },
  loadCell: {
    src: "/images/load-cell-detail.jpg",
    alt: "Close view of a load cell element and its wiring on a dark surface.",
    width: 1450,
    height: 1450,
    credit: "Gannu03, CC BY-SA 4.0, via Wikimedia Commons",
    creditHref:
      "https://commons.wikimedia.org/wiki/File:Load_Cell_Sensor_Module_from_a_Digital_Weighing_Scale_02.jpg",
  },
  warehouse: {
    src: "/images/warehouse.jpg",
    alt: "A warehouse interior with pallet racking and stored cartons. An example setting, not a client site.",
    width: 1800,
    height: 1200,
    credit: "Photograph via Unsplash",
    creditHref: "https://unsplash.com/photos/1586528116311-ad8dd3c8310d",
  },
} as const satisfies Record<string, Photo>

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export const explore = [
  {
    href: "/products",
    index: "01",
    label: "Products",
    text: "The published list of weighing equipment, with the prices and figures from that listing.",
  },
  {
    href: "/services",
    index: "02",
    label: "Services",
    text: "How the team helps you match a scale or weighbridge to the load, the place, and the record.",
  },
  {
    href: "/applications",
    index: "03",
    label: "Applications",
    text: "The kinds of work where this equipment is commonly used. Not a list of confirmed clients.",
  },
  {
    href: "/about",
    index: "04",
    label: "About",
    text: "Contact Instruments in Duttawadi, Nagpur, and where to read the current Google reviews.",
  },
  {
    href: "/contact",
    index: "05",
    label: "Contact",
    text: "The address, the listed phone, and the questions worth settling before you order.",
  },
] as const

export const services = [
  {
    index: "01",
    title: "Supply the equipment",
    text: "Weighing machines, weighbridges, and electronic weighing equipment. The products page shows what has been published. Stock and the current price are confirmed on a call.",
  },
  {
    index: "02",
    title: "Specify it for the job",
    text: "Capacity, platform, and indicator follow what you weigh and where it stands. Bring those conditions. The team will say what can be supplied, and what still has to be checked.",
  },
  {
    index: "03",
    title: "Ask about the site",
    text: "Installation, calibration, and later support depend on the equipment and the place. They are not standing promises on this site. Ask for the item you have in mind, and the team will say what they can take on.",
  },
] as const

export const contexts = [
  {
    index: "01",
    title: "Manufacturing",
    text: "Process checks and finished goods, where a weight is written into the work.",
  },
  {
    index: "02",
    title: "Logistics",
    text: "Inward and outward loads that have to be recorded before they move.",
  },
  {
    index: "03",
    title: "Warehousing",
    text: "Goods received, held, and sent out from a store.",
  },
  {
    index: "04",
    title: "Trade",
    text: "Commercial weighing, where the figure sits on a bill or a receipt.",
  },
] as const

/**
 * Categories follow the weighing equipment suggested by the business profile:
 * weighing machines, weighbridges, and electronic weighing equipment.
 * No model numbers or capacities are published. Confirm the live range with the client.
 */
export const solutions: Solution[] = [
  {
    id: "weighbridges",
    index: "01",
    title: "Weighbridges",
    summary:
      "For vehicles and other heavy loads. A weighbridge is chosen around the vehicles you run, the ground you have, and whether the deck sits in a pit or on the surface. Capacity and civil work are questions for the site, not for a general brochure.",
    use: "Yards, plants, and gates where a vehicle weight has to be taken.",
    cta: "Ask about weighbridges",
    image: photos.weighbridgeDeck,
    layout: "feature",
  },
  {
    id: "industrial",
    index: "02",
    title: "Industrial weighing scales",
    summary:
      "Scales for plants and stores, where the platform has to take a serious load and the person using it needs a clear reading. What belongs on the scale, and how it is placed, decides the equipment.",
    use: "Production floors and heavy stores.",
    cta: "Ask about industrial scales",
    image: photos.vessel,
    layout: "still",
  },
  {
    id: "platform",
    index: "03",
    title: "Platform weighing scales",
    summary:
      "Platform scales for benches, packing tables, and shop floors. The platform should match the sack, crate, or container. The photograph shows the form of a platform scale. It is not a model number from our shelf.",
    use: "Packing points and counters where goods are weighed often.",
    cta: "Ask about platform scales",
    image: photos.platform,
    layout: "still",
  },
  {
    id: "indicators",
    index: "04",
    title: "Electronic weighing indicators",
    summary:
      "The unit that turns a load signal into a reading. An indicator is specified with the scale it serves. The display, the mounting, and any link to a written record are confirmed against that equipment.",
    use: "Wherever the operator needs a stable figure they can read from where they stand.",
    cta: "Ask about indicators",
    layout: "type",
  },
  {
    id: "load-cells",
    index: "05",
    title: "Load cells and weighing components",
    summary:
      "The parts that sense the load under a platform, a deck, or a vessel. A replacement has to match the scale it belongs to. If something has failed, the details of the existing equipment matter more than a guess from a catalogue.",
    use: "Repair and specification of a weighing system you already have.",
    cta: "Ask about load cells",
    image: photos.loadCell,
    layout: "detail",
  },
]

export const selectionPoints = [
  {
    index: "01",
    title: "Operational consistency",
    text: "The same kind of load, weighed the same way, gives a figure people can compare from one shift to the next.",
  },
  {
    index: "02",
    title: "Workflow fit",
    text: "If the platform is awkward to load, or the indicator is hard to read from where the operator stands, the equipment gets worked around. That is when mistakes begin.",
  },
  {
    index: "03",
    title: "A figure you can use",
    text: "Dependable measurement starts with equipment matched to the job. It is not a promise that every reading is certified. Where a legal or trade requirement applies, ask what the equipment is suitable for.",
  },
  {
    index: "04",
    title: "Informed selection",
    text: "Capacity, platform size, and the indicator follow the way you actually weigh. Share those conditions. The team will say what can be supplied, and what still has to be checked.",
  },
] as const

export const applications = [
  {
    index: "01",
    title: "Manufacturing",
    text: "Batching, in-process checks, and a recorded weight for finished goods.",
  },
  {
    index: "02",
    title: "Logistics",
    text: "Vehicle and consignment weights at a gate, a yard, or a dispatch point.",
  },
  {
    index: "03",
    title: "Material handling",
    text: "Pallets, drums, and fabricated parts that are weighed while they move.",
  },
  {
    index: "04",
    title: "Warehousing",
    text: "Receipt, storage, and dispatch, where the store record depends on a weight.",
  },
  {
    index: "05",
    title: "Commercial weighing",
    text: "Counters and trade, where the weight is part of the transaction.",
  },
] as const

export const faqs = [
  {
    question: "How do I choose a suitable scale?",
    answer:
      "Describe the goods, the heaviest load you expect, how you will place it, and whether the weighing is for your own process or for a trade record. The team can then talk through equipment that fits. A scale is not chosen from a name alone.",
  },
  {
    question: "How is the weighing capacity decided?",
    answer:
      "Capacity has to sit above the loads you actually weigh, with room for the way those loads are placed. Share your heaviest regular load. The team will talk through a suitable capacity. This site does not publish capacity charts or model ranges.",
  },
  {
    question: "Can I ask for product information before visiting?",
    answer:
      "Yes. Call and say what you need to weigh, and where the equipment will stand. There is no enquiry form on this site. If a verified email is added later, it will be shown on the contact page.",
  },
  {
    question: "Do you install the equipment?",
    answer:
      "It depends on the product and the site. Ask whether installation is included or arranged separately. Until the team confirms it, do not assume that every item is installed by Contact Instruments.",
  },
  {
    question: "Is there support after purchase?",
    answer:
      "Maintenance, calibration, and spare parts vary by equipment. Mention after-sales support when you enquire, and the team will say what they can take on. No warranty period or response time is stated here, because those terms belong to the specific equipment.",
  },
  {
    question: "Where are you, and how far do you work?",
    answer:
      "The business is at Old Samrat Talkies, Amravati Road, near Ashok Car Glass and Asha Hospital, Duttawadi, Nagpur 440023. Work beyond the shop is confirmed when you call. This site does not publish a service radius.",
  },
] as const

export const photoCredits: Photo[] = [
  photos.weighbridgeTruck,
  photos.weighbridgeDeck,
  photos.platform,
  photos.vessel,
  photos.loadCell,
  photos.warehouse,
]
