import { Product, Review, FAQItem } from '../types';

export const CATEGORIES: { id: string; label: string; count?: number }[] = [
  { id: 'all', label: 'All Essentials' },
  { id: 'seeds-soil', label: 'Living Soil & Heirloom Seeds' },
  { id: 'tools', label: 'Heritage Ergonomic Tools' },
  { id: 'watering', label: 'Water Conservation' },
  { id: 'care-compost', label: 'Circular Composting & Care' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'terra-olla-pot',
    name: 'Ancient Terracotta Olla Pot',
    tagline: 'Deep-root subterranean watering that cuts water use by 70%',
    category: 'watering',
    price: 38.00,
    originalPrice: 45.00,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1599818817215-6c703b41d248?auto=format&fit=crop&w=800&q=80',
    badges: ['Zero Evaporation', 'Handmade Clay', 'Water-Saving Champion'],
    ecoBenefit: 'Reduces irrigation water demand by up to 70% compared to surface spraying.',
    impactMetric: {
      label: 'Water Saved/Season',
      value: '~480 Liters',
    },
    materials: ['100% Unglazed Natural Terracotta Clay', 'Natural Cork Lid'],
    endOfLife: 'Fully natural crushed clay returns safely to earth as mineral soil amendment.',
    description: 'Bury this porous clay vessel beside your tomatoes, greens, or shrubs. The microscopic micropores release moisture directly to roots only as the surrounding soil dries out, eliminating evaporation loss and surface weeds.',
    features: [
      'Holds 3.2 Liters for 5-7 days of continuous micro-irrigation',
      'Naturally regulates moisture based on soil tension',
      'Handcrafted by artisan potters using local river clays',
      'Keeps foliage dry to prevent fungal leaf mildew and blight'
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'seed-starter-kit',
    name: 'Peat-Free Coconut Coir & CowPot Set',
    tagline: '100% natural, biodegradable seedling trays with mycorrhizae',
    category: 'seeds-soil',
    price: 24.00,
    rating: 4.8,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80',
    badges: ['100% Peat-Free', 'Zero Plastic', 'Plant Pot & All'],
    ecoBenefit: 'Protects fragile peatland bogs from destructive industrial harvesting.',
    impactMetric: {
      label: 'Plastic Trays Saved',
      value: '24 single-use cells',
    },
    materials: ['Upcycled Coconut Husk Coir', 'Composted Dairy Solids', 'Mycorrhizal Fungi Inoculant'],
    endOfLife: '100% biodegradable in-ground within 4 weeks of transplanting.',
    description: 'Eliminate transplant shock and throwaway plastic seedling trays. Roots grow straight through these nutrient-rich fiber pots. Simply plant the entire container into your garden bed.',
    features: [
      'Contains 36 root-penetrable starter pots + organic seed-starting mix disk',
      'Enriched with living endomycorrhizae for root acceleration',
      'Zero synthetic fertilizers or chemical binders',
      'Promotes dense, un-bound root rootballs'
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'heirloom-trowel-cultivator',
    name: 'FSC Ash & Recycled Steel Hand Trowel',
    tagline: 'Forged for a lifetime of regenerative bed preparation',
    category: 'tools',
    price: 34.00,
    rating: 5.0,
    reviewsCount: 86,
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=800&q=80',
    badges: ['FSC Certified Wood', 'Recycled Swedish Steel', 'Lifetime Warranty'],
    ecoBenefit: 'Built to last 50+ years, ending the cycle of cheap disposable garden tools.',
    impactMetric: {
      label: 'Carbon Footprint',
      value: '100% Offset Production',
    },
    materials: ['Recycled High-Carbon Tool Steel', 'FSC-Certified Ash Hardwood', 'Natural Beeswax & Linseed Polish'],
    endOfLife: 'Fully recyclable metal head; compostable wood handle.',
    description: 'Ergonomically balanced trowel forged from high-tensile recycled carbon steel with depth gauge stampings. Designed to slice cleanly through tough soil without disturbing fragile micro-ecosystems.',
    features: [
      'Laser-engraved depth measurement markers (1 to 4 inches)',
      'Solid brass ferrule securely locks head to handle forever',
      'Sustainably harvested FSC European Ash handle with linseed oil finish',
      'Repairable design with modular handle replacement option'
    ],
    inStock: true,
    featured: true,
  },
  {
    id: 'bokashi-indoor-composter',
    name: 'Living Bokashi Kitchen Fermentation Bin',
    tagline: 'Transform all food scraps including citrus & dairy with anaerobic microbes',
    category: 'care-compost',
    price: 68.00,
    originalPrice: 79.00,
    rating: 4.9,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    badges: ['Odorless Design', 'Post-Consumer Ocean Plastic', 'Fast Ferment (14 Days)'],
    ecoBenefit: 'Diverts kitchen scraps from landfills where they would otherwise generate methane.',
    impactMetric: {
      label: 'Methane Prevented',
      value: '180 kg CO2e/year',
    },
    materials: ['100% Recycled Ocean-Bound Polypropylene', 'Silicone Airtight Gasket', 'Organic Wheat Bran Inoculant'],
    endOfLife: 'Fully recyclable casing; biological contents enrich garden soil.',
    description: 'A compact, odor-free indoor fermentation system powered by beneficial Effective Microorganisms (EM-1). Ferments cooked food, dairy, meat scraps, and coffee grounds into nutrient-dense prebiotic soil fuel in two weeks.',
    features: [
      'Hermetic silicone seal stops all pests, fruit flies, and odors',
      'Integrated tea spigot for harvesting potent liquid probiotic plant fertilizer',
      'Includes 1kg starter bag of organic EM-1 inoculated bokashi bran',
      'Fits neatly under standard kitchen sinks'
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'pollinator-heirloom-vault',
    name: 'Native Pollinator Heirloom Seed Vault',
    tagline: '30 open-pollinated species to restore local bee and butterfly habitats',
    category: 'seeds-soil',
    price: 29.00,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    badges: ['100% Non-GMO', 'Open Pollinated', 'Recycled Seed Packets'],
    ecoBenefit: 'Provides continuous nectar corridors for endangered solitary bees and monarch butterflies.',
    impactMetric: {
      label: 'Pollinator Support',
      value: '600 sq ft Meadow',
    },
    materials: ['Unbleached Kraft Paper Seed Packets', 'Vegetable-Based Printing Inks', 'Zero Synthetic Coatings'],
    endOfLife: 'Packets and seeds are 100% home compostable.',
    description: 'Curated by regenerative botanists, this collection features 30 hardy perennial and annual wildflowers, companion herbs, and beneficial insect attractors. Never treated with neonicotinoids or synthetic fungicides.',
    features: [
      'Contains Echinacea, Borage, Milkweed, Phacelia, Anise Hyssop, and 25 more',
      'Tested with a guaranteed 92%+ germination rate',
      'Includes illustrated sowing calendar & companion planting map',
      'Packaged in an airtight, reusable heritage tin'
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'neem-organic-spray',
    name: 'Cold-Pressed Botanical Neem & Cedar Shield',
    tagline: 'Gentle, pollinator-safe pest defense formulated from organic oils',
    category: 'care-compost',
    price: 19.50,
    rating: 4.7,
    reviewsCount: 74,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    badges: ['Safe for Beneficials', 'Glass Bottle', 'No Synthetic Pesticides'],
    ecoBenefit: 'Stops aphids and spider mites without poisoning songbirds, honeybees, or soil bacteria.',
    impactMetric: {
      label: 'Toxic Runoff',
      value: '0% Chemical Runoff',
    },
    materials: ['Wild-Harvested Indian Neem Seed Oil', 'Texas Cedarwood Essential Oil', 'Amber Glass Vessel'],
    endOfLife: 'Infinite recyclable amber glass bottle; aluminum refill refills available.',
    description: 'A 100% pure plant-powered foliar spray that disrupts harmful insect feeding while leaving earthworms, ladybugs, and pollinating insects unbothered. Naturally biodegrades under sunlight in 48 hours.',
    features: [
      'Concentrated formula makes up to 4 liters of active spray',
      'Naturally rich in Azadirachtin without harsh emulsifiers',
      'Heavy-duty brass reusable trigger sprayer',
      'Fresh botanical cedar & citrus scent'
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'copper-weeding-hoe',
    name: 'Solid Bronze Hand Weeding Hoe',
    tagline: 'Naturally slug-deterrent metal that enriches soil with trace minerals',
    category: 'tools',
    price: 49.00,
    rating: 5.0,
    reviewsCount: 62,
    image: 'https://images.unsplash.com/photo-1589051039485-d4150dd4e685?auto=format&fit=crop&w=800&q=80',
    badges: ['Solid Bronze Alloy', 'Friction-Free Cut', 'Naturally Antimicrobial'],
    ecoBenefit: 'Copper tools deposit beneficial trace micronutrients into the topsoil as you cultivate.',
    impactMetric: {
      label: 'Longevity',
      value: 'Rust-Proof Forever',
    },
    materials: ['95% Copper & Tin Alloy', 'FSC-Certified Beechwood', 'Recycled Brass Rivets'],
    endOfLife: '100% recyclable precious bronze and compostable handle.',
    description: 'Beloved by biodynamic growers worldwide. Copper tools glide through compacted soil with half the physical effort of steel, never rust, and naturally discourage slugs and fungal pathogens.',
    features: [
      'Hand-cast heavy bronze blade with double-bevel sharp edge',
      'Does not magnify magnetic disturbance in living soil layers',
      'Ergonomically shaped steamed beechwood handle',
      'Self-sharpening with regular garden usage'
    ],
    inStock: true,
    featured: false,
  },
  {
    id: 'rainwater-gravity-drip',
    name: 'Solar-Assisted Gravity Drip Irrigation Kit',
    tagline: 'Zero-power precision micro-watering connected to your rain barrel',
    category: 'watering',
    price: 54.00,
    rating: 4.8,
    reviewsCount: 118,
    image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=800&q=80',
    badges: ['Zero Electricity', 'Recycled Rubber Tubing', 'Expands to 20 Pots'],
    ecoBenefit: 'Harnesses free rainwater gravity to water plants on auto-pilot with zero grid energy.',
    impactMetric: {
      label: 'Tap Water Conserved',
      value: '1,200 Liters/mo',
    },
    materials: ['Recycled Natural Rubber Soaker Hoses', 'Brass Flow Regulator', 'Bio-Polymer Drip Emitters'],
    endOfLife: 'Modular parts can be refurbished or recycled indefinitely.',
    description: 'An ultra-low pressure micro-drip kit tailored specifically for rain barrels and elevated water storage tanks. Delivers slow, measured drops directly to the base of each plant root zone.',
    features: [
      'Works with water pressure as low as 1.5 PSI (gravity fed)',
      'Includes 15 meters of non-toxic food-safe feeder lines and 20 adjustable drippers',
      'Prevents soil compaction and nutrient leaching',
      'Fast 15-minute tool-free snap installation'
    ],
    inStock: true,
    featured: false,
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Clara M.',
    location: 'Bristol, UK',
    rating: 5,
    comment: 'The Olla pots completely saved my container tomatoes during the heatwave. I only filled them once a week, and my crop yield was the sweetest yet. Plus, zero plastic anywhere in the package!',
    productName: 'Ancient Terracotta Olla Pot',
    gardenerType: 'Urban Balcony Grower',
    verified: true,
    date: '3 days ago'
  },
  {
    id: 'rev-2',
    author: 'Julian D.',
    location: 'Portland, OR',
    rating: 5,
    comment: 'I swapped all my plastic seedling starter trays for the coconut coir and CowPot kit. Zero transplant root shock and my squashes took off immediately upon hitting the raised bed.',
    productName: 'Peat-Free Coconut Coir & CowPot Set',
    gardenerType: 'Backyard Market Gardener',
    verified: true,
    date: '1 week ago'
  },
  {
    id: 'rev-3',
    author: 'Elena R.',
    location: 'Melbourne, AU',
    rating: 5,
    comment: 'The bronze hoe feels like an heirloom tool from a different era. Cuts through weeds like butter and knowing it helps deposit micronutrients into the soil makes gardening feel so deeply intentional.',
    productName: 'Solid Bronze Hand Weeding Hoe',
    gardenerType: 'Permaculture Allotment',
    verified: true,
    date: '2 weeks ago'
  }
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: '100% Peat-Free Guarantee',
    description: 'We never harvest from pristine carbon-capturing peatlands. All our growing mediums use circular upcycled coconut coir and regional compost.',
    stat: '0% Peat Used',
  },
  {
    title: 'Plastic-Free Packaging',
    description: 'Every order arrives in water-activated unbleached kraft boxes sealed with plant cellulose tape and cornstarch dissolvable packing peanuts.',
    stat: '100% Plastic Free',
  },
  {
    title: 'Designed for Generations',
    description: 'We reject planned obsolescence. Our tools are forged from solid recycled steels, bronze alloys, and repairable FSC-certified hardwoods.',
    stat: 'Lifetime Built',
  },
  {
    title: '1% For Soil Restoration',
    description: '1% of every purchase directly funds community living soil rehabilitation and native pollinator sanctuaries across urban food deserts.',
    stat: '1% For The Planet',
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Products & Materials',
    question: 'Why is peat-free gardening so important for the environment?',
    answer: 'Peat bogs cover only 3% of Earth’s land but store over 30% of all terrestrial soil carbon. Harvesting peat for garden potting mix releases massive CO2 emissions and destroys ancient ecosystems. Our living alternatives use upcycled coconut husks and aged forest humus that perform even better for root aeration without destroying bogs.'
  },
  {
    category: 'Water Conservation',
    question: 'How do Terracotta Olla pots work under the soil?',
    answer: 'Olla pots rely on basic physics and soil tension: when the soil surrounding the buried clay vessel dries out, soil suction pulls water through the micro-porous walls directly to plant root hairs. When the soil is moist from rainfall, the flow automatically halts. This prevents up to 70% of water loss caused by midday sun evaporation.'
  },
  {
    category: 'Composting & Biology',
    question: 'Can I really put cooked food, dairy, and meat in the Bokashi bin?',
    answer: 'Yes! Unlike traditional outdoor compost piles that attract rodents or produce bad smells when animal proteins are added, Bokashi relies on anaerobic fermentation driven by lactic acid microbes. The airtight seal pickling process stabilizes all food scraps safely in 14 days without unpleasant odor.'
  },
  {
    category: 'Shipping & Packaging',
    question: 'How do you package and ship orders without plastic?',
    answer: 'We use FSC-certified unbleached kraft cartons, water-activated starch tape, non-toxic algae ink printing, and 100% water-soluble cornstarch loose fill (which dissolves instantly under your garden tap). Even our product tags are embedded with wildflower seeds!'
  }
];
