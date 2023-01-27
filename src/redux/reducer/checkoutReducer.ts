import { createSlice } from "@reduxjs/toolkit";
import { checkoutAction } from "../action/chechout";
import { shippingCountriesAction } from "../action/chechout";
import { subdivisionsAction } from "../action/chechout";
import { shipppingMethodsAction } from "../action/chechout";
import { orderAction } from "../action/chechout";
import { orderCaptureAction } from "../action/chechout";
import { getAdressesAction } from "../action/chechout";

interface CheckoutI {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  adress: string;
  apartment: string;
  zip: string;
  comments?: string;
  paymentMethod: string;
  checkoutToken: object;
  shippingCountries: object;
  shippingCountrie: string;
  countryName: string;
  subdivisions: object;
  subdivision: string;
  subdivisionName: string;
  shippingMethods: object;
  shippingMethod: string;
  shippingMethodName: string;
  checkoutSubmit: boolean;
  orderCapture: object;
  proceedCheckout:boolean;
  orders: object[];
  adresses: object;
  loading: boolean;
  error: boolean | null;
}

const initialState: CheckoutI = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  adress: "",
  apartment: "",
  zip: "",
  comments: "",
  paymentMethod: "",
  checkoutToken: {},
  shippingCountries: [],
  shippingCountrie: "",
  countryName: "",
  subdivisions: [],
  subdivision: "",
  subdivisionName: "",
  shippingMethods: [],
  shippingMethod: "",
  shippingMethodName: "",
  checkoutSubmit: false,
  orderCapture: {},
  proceedCheckout:false,
  orders: [],
  adresses: {},
  loading: false,
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setFirstname: (state, { payload }) => {
      state.firstname = payload;
      return state;
    },
    setLastname: (state, { payload }) => {
      state.lastname = payload;
      return state;
    },
    setPhone: (state, { payload }) => {
      state.phone = payload;
      return state;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
      return state;
    },
    setAdress: (state, { payload }) => {
      state.adress = payload;
      return state;
    },
    setApartment: (state, { payload }) => {
      state.apartment = payload;
      return state;
    },
    setZip: (state, { payload }) => {
      state.zip = payload;
      return state;
    },
    setComments: (state, { payload }) => {
      state.comments = payload;
      return state;
    },
    setPaymentMethod: (state, { payload }) => {
      state.paymentMethod = payload;
      return state;
    },
    setShippingCountrie: (state, { payload }) => {
      state.shippingCountrie = payload;
      return state;
    },
    setCheckoutToken: (state, { payload }) => {
      state.checkoutToken = payload;
      return state;
    },
    setShippingCountries: (state, { payload }) => {
      state.shippingCountries = payload;
      return state;
    },
    setCountryName: (state, { payload }) => {
      state.countryName = payload;
      return state;
    },
    setSubdivision: (state, { payload }) => {
      state.subdivision = payload;
      return state;
    },
    setSubdivisions: (state, { payload }) => {
      state.subdivisions = payload;
      return state;
    },
    setSubdivisionName: (state, { payload }) => {
      state.subdivisionName = payload;
      return state;
    },
    setShippingMethod: (state, { payload }) => {
      state.shippingMethod = payload;
      return state;
    },
    setShippingMethods: (state, { payload }) => {
      state.shippingMethods = payload;
      return state;
    },
    setShippingMethodName: (state, { payload }) => {
      state.shippingMethodName = payload;
      return state;
    },
    setCheckoutSubmit: (state, { payload }) => {
      state.checkoutSubmit = payload;
      return state;
    },
    setOrderCapture: (state, { payload }) => {
      state.orderCapture = payload;
      return state;
    },
    setProceedCheckout: (state, { payload }) => {
      state.proceedCheckout = payload;
      return state;
    },
  },
  extraReducers: {
    //*-----------Get Checkout token-------------------
    [checkoutAction.pending]: (state) => {
      state.loading = true;
    },
    [checkoutAction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [checkoutAction.fulfilled]: (state, { payload }) => {
      state.checkoutToken = payload;
      state.loading = false;
      return state;
    },
    //*-----------Get Shipping Countries token-------------------
    [shippingCountriesAction.pending]: (state) => {
      state.loading = true;
    },
    [shippingCountriesAction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [shippingCountriesAction.fulfilled]: (state, { payload }) => {
      state.shippingCountries = payload;
      state.loading = false;
      return state;
    },
    //*-----------Get Subdivisions token-------------------
    [subdivisionsAction.pending]: (state) => {
      state.loading = true;
    },
    [subdivisionsAction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [subdivisionsAction.fulfilled]: (state, { payload }) => {
      state.subdivisions = payload;
      state.loading = false;
      return state;
    },
    //*-----------Get Shipping methods token-------------------

    [shipppingMethodsAction.pending]: (state) => {
      state.loading = true;
    },
    [shipppingMethodsAction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [shipppingMethodsAction.fulfilled]: (state, { payload }) => {
      state.shippingMethods = payload;
      state.loading = false;
      return state;
    },
    //*-----------Order capture-------------------

    [orderCaptureAction.pending]: (state) => {
      state.loading = true;
    },
    [orderCaptureAction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [orderCaptureAction.fulfilled]: (state, { payload }) => {
      state.orderCapture = payload;
      state.loading = false;
      return state;
    },
    //*-----------get Orders-------------------

    [orderAction.pending]: (state) => {
      state.loading = true;
    },
    [orderAction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [orderAction.fulfilled]: (state, { payload }) => {
      state.orders = payload;
      state.loading = false;
      return state;
    },
    //*-----------get Orders-------------------

    [getAdressesAction.pending]: (state) => {
      state.loading = true;
    },
    [getAdressesAction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [getAdressesAction.fulfilled]: (state, { payload }) => {
      state.adresses = payload;
      state.loading = false;
      return state;
    },
  },
});

export const checkoutReducer = checkoutSlice.reducer;
export const {
  setFirstname,
  setLastname,
  setPhone,
  setEmail,
  setAdress,
  setApartment,
  setZip,
  setComments,
  setPaymentMethod,
  setShippingCountrie,
  setShippingCountries,
  setCountryName,
  setSubdivision,
  setSubdivisions,
  setSubdivisionName,
  setShippingMethod,
  setShippingMethods,
  setShippingMethodName,
  setProceedCheckout,
  setCheckoutSubmit,
  setOrderCapture,
  setCheckoutToken,
} = checkoutSlice.actions;
