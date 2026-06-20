export const TOP_LINKS = [
  { label: "Shop All", slug: "shop-all" },
  { label: "Bestsellers", slug: "bestsellers" },
  { label: "New", slug: "new" },
  { label: "Sale", slug: "sale" },
];


const COMMON_CATEGORIES = [
  { label: "T-Shirts", slug: "t-shirts" },
  { label: "Hoodies", slug: "hoodies" },
  { label: "Shorts", slug: "shorts" },
  { label: "Pants", slug: "pants" },
  { label: "Headwear", slug: "headwear" },
];

export const MENU = [
  {
    label: "MEN",
    slug: "men",
    children: [{ label: "All Men", slug: "all" }, ...COMMON_CATEGORIES],
  },
  {
    label: "WOMEN",
    slug: "women",
    children: [{ label: "All Women", slug: "all" }, ...COMMON_CATEGORIES],
  },
];