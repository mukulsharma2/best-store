export const API = "https://api.pujakaitem.com/api/products";

export const SINGLE_PRODUCT_API = "https://api.pujakaitem.com/api/products?id=";

export const formatPrice = (value) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value / 100);
};
