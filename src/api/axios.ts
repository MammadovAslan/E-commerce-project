import axios from "axios";
import Commerce from "@chec/commerce.js";
const commerce = new Commerce("pk_test_49345777b530535805f20e84799523e72c5f6a7dab8cb");

export const axiosInstance = axios.create({
  baseURL: "https://api.chec.io/v1/customers",
  headers: {
    "X-Authorization": "sk_493457d0d7c10bd93938cb193c2f141f589a69dc2261f",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getChechoutToken = (id: string) =>
  commerce.checkout.generateToken(id, { type: "cart" });

export const getShippingCountries = (id: string) =>
  commerce.services.localeListShippingCountries(id);

export const getSubdivisions = (country_code: string) =>
  commerce.services.localeListSubdivisions(country_code);

export const getShippingMethods = (checkout_token: string, country: string, region: string) =>
  commerce.checkout.getShippingOptions(checkout_token, { country: country, region: region });

export const captureOrder = (id: string, order: any) => commerce.checkout.capture(id, order);

export const getOrder = (id: string, token: string) => {
  const headers = {
    "X-Authorization": "sk_493457d0d7c10bd93938cb193c2f141f589a69dc2261f",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return axios.get(`https://api.chec.io/v1/customers/${id}/orders`, { headers });
};
export const getAdresses = (id: string, token: string) => {
  const headers = {
    "X-Authorization": "sk_493457d0d7c10bd93938cb193c2f141f589a69dc2261f",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return axios.get(`https://api.chec.io/v1/customers/${id}/addresses`, { headers });
};
