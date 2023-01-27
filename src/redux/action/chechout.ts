import { getShippingCountries } from "./../../api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChechoutToken } from "../../api/axios";
import { getSubdivisions } from "./../../api/axios";
import { getShippingMethods } from "./../../api/axios";
import { getOrder } from "./../../api/axios";
import { captureOrder } from "./../../api/axios";
import { AnyCnameRecord } from "dns";
import { getAdresses } from "./../../api/axios";

export const checkoutAction: any = createAsyncThunk(
  "chechout/getCheckoutToken",
  async (id: string, thunkApi) => {
    try {
      const data = await getChechoutToken(id);
      return data;
    } catch (error) {
      console.log(error);

      thunkApi.rejectWithValue(error);
    }
  }
);

export const shippingCountriesAction: any = createAsyncThunk(
  "shippingCountries/getShippingCountries",
  async (id: string, thunkApi) => {
    try {
      const countries = await getShippingCountries(id);

      return Object.entries(countries.countries).map((el: object) => {
        return el;
      });
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const subdivisionsAction: any = createAsyncThunk(
  "subdivisions/getSubdivisions",
  async (country_code: string, thunkApi) => {
    try {
      const subdivisions = await getSubdivisions(country_code);

      return Object.entries(subdivisions.subdivisions).map((el: object) => {
        return el;
      });
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

interface shippingMethodsI {
  checkout_token: string;
  country: string;
  region: string;
}

export const shipppingMethodsAction: any = createAsyncThunk(
  "shippingMethods/getShippingMethods",
  async ({ checkout_token, country, region }: shippingMethodsI, thunkApi) => {
    try {
      const shippingMethods = await getShippingMethods(checkout_token, country, region);
      return shippingMethods;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

interface OrderCaptureProps {
  id: string;
  order: AnyCnameRecord;
}

export const orderCaptureAction: any = createAsyncThunk(
  "order/captureOrder",
  async ({ id, order }: OrderCaptureProps, thunkApi) => {
    try {
      const orderCapture = await captureOrder(id, order);
      return orderCapture;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

interface OrderProps {
  id: string;
  token: string;
}

export const orderAction: any = createAsyncThunk(
  "orders/getOrders",
  async ({ id, token }: OrderProps, thunkApi) => {
    try {
      const orders = await getOrder(id, token);
      return orders.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
export const getAdressesAction: any = createAsyncThunk(
  "adresses/getAdresses",
  async ({ id, token }: OrderProps, thunkApi) => {
    try {
      const adresses = await getAdresses(id, token);
      return adresses.data
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
