import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import uuid from "react-uuid";

//*-----------MUI-------------------
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//*-----------Redux-------------------
import { useSelector, useDispatch } from "react-redux";
import {
  setShippingCountrie,
  setSubdivision,
  setCountryName,
  setSubdivisionName,
  setAdress,
  setApartment,
  setZip,
  setComments,
  setShippingMethod,
  setShippingMethodName,
} from "../../../../../redux/reducer/checkoutReducer";
import { subdivisionsAction } from "../../../../../redux/action/chechout";
import { shipppingMethodsAction } from "../../../../../redux/action/chechout";
import { CheckoutFormsProps } from "../Checkout";
import { shippingCountriesAction } from "../../../../../redux/action/chechout";

const Delivery = (props: CheckoutFormsProps) => {
  //*-----------Redux checkout states-------------------
  const {
    shippingCountries,
    shippingCountrie,
    countryName,
    subdivisions,
    subdivision,
    subdivisionName,
    adress,
    apartment,
    zip,
    comments,
    checkoutToken,
    shippingMethods,
    shippingMethod,
    shippingMethodName,
  } = useSelector((state: any) => state.checkout);
  const dispatch = useDispatch();

  //*-------------Get shipping countries------------------
  useEffect(() => {
    Object.keys(checkoutToken).length>0 &&dispatch(shippingCountriesAction(checkoutToken.id));
  }, [checkoutToken]);

  //*-------------Get subdivisions------------------
  useEffect(() => {
    shippingCountrie.length > 0 && Object.keys(checkoutToken).length>0 && dispatch(subdivisionsAction(shippingCountrie));
  }, [shippingCountrie]);

  //*-------------Get shipping methods------------------

  useEffect(() => {
    !!subdivision &&
      dispatch(
        shipppingMethodsAction({
          checkout_token: checkoutToken.id,
          country: shippingCountrie,
          region: subdivision,
        })
      );
  }, [subdivision]);

  type Inputs = {
    adress: string;
    apartments: string;
    zip: string;
    comments: string;
  };

  //*-----------UseForm-------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ adress, apartments, zip, comments }) => {
    dispatch(setAdress(adress));
    dispatch(setApartment(apartments));
    dispatch(setZip(zip));
    dispatch(setComments(comments));
    props.setSubmit(true);
  };

  //*-----------Onchange handlers-------------------

  const countryOnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setShippingCountrie(e.target.value));
    dispatch(
      setCountryName(shippingCountries.filter((el: string[]) => el[0] === e.target.value)[0][1])
    );
  };

  const subdivisionOnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSubdivision(e.target.value));
    dispatch(
      setSubdivisionName(subdivisions.filter((el: string[]) => el[0] === e.target.value)[0][1])
    );
  };
  const shippingMethodOnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setShippingMethod(e.target.value));
    dispatch(
      setShippingMethodName(
        shippingMethods.filter((el: any) => el.id === e.target.value)[0].description
      )
    );
  };

  if (props.submit) {
    return (
      <div className="submitted-results">
        <p className="country">
          <span>{countryName}</span>, <span>{subdivisionName}</span>
        </p>
        <p className="adress">{adress}</p>
        <p className="apartment">{apartment}</p>
        <p className="zip">{zip}</p>
        <p className="shipping-method">{shippingMethodName}</p>
        {comments.lentgh > 0 && <p className="comments">*{comments}</p>}
      </div>
    );
  }

  return (
    <div className="devilery">
      <form className="delivery-form" onSubmit={handleSubmit(onSubmit)}>
        {/*----------Country select--------- */}
        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-standard-label">Counrty</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Shipping counrty"
            value={shippingCountries && shippingCountrie}
            disabled={shippingCountries && shippingCountries.length === 0}
            onChange={(e: any) => countryOnchangeHandler(e)}
          >
            {shippingCountries?.length > 0 &&
              shippingCountries.map((el: string[]) => (
                <MenuItem key={uuid()} value={el[0]}>
                  {el[1]}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {/*----------Subdivision select--------- */}
        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-standard-label">City/state</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Shipping subdivision"
            defaultValue=""
            disabled={subdivisions && subdivisions.length === 0}
            value={subdivisions && subdivision}
            onChange={(e: any) => subdivisionOnchangeHandler(e)}
            MenuProps={{
              style: {
                maxHeight: "300px",
              },
            }}
          >
            {subdivisions?.length > 0 &&
              subdivisions.map((el: string[]) => (
                <MenuItem key={uuid()} value={el[0]}>
                  {el[1]}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-standard-label">Shipping method</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Shipping methods"
            disabled={shippingMethods?.length === 0}
            value={shippingMethods && subdivisions && shippingMethod}
            onChange={(e: any) => shippingMethodOnchangeHandler(e)}
            MenuProps={{
              style: {
                maxHeight: "300px",
              },
            }}
          >
            {shippingMethods?.length > 0 &&
              shippingMethods.map((method: any) => (
                <MenuItem key={uuid()} value={method.id}>
                  {`${method.description} - ${method.price.formatted_with_symbol}`}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {!!shippingCountrie && !!subdivision && !!shippingMethod && (
          <>
            {/*----------Adress inputs--------- */}
            <div className="delivery-adress">
              <div className="input-field">
                <label className="inform-label">
                  Ünvan{" "}
                  <input
                    type="text"
                    {...register("adress", { required: true, minLength: 2 })}
                    placeholder="Ünvanı daxil edin"
                  />
                </label>
                <p className="error-message">
                  {errors?.adress?.type === "required" && "*Ünvanı daxil edin"}
                </p>
              </div>
              <div className="input-field">
                <label className="inform-label">
                  Bina/Mənzil{" "}
                  <input
                    type="text"
                    {...register("apartments", { required: true, minLength: 2 })}
                    placeholder="Daxil edin"
                  />
                </label>
                <p className="error-message">
                  {errors?.apartments?.type === "required" && "*Binanı/Mənzili daxil edin"}
                </p>
              </div>
              <div className="input-field">
                <label className="inform-label">
                  ZIP Kod{" "}
                  <input
                    type="text"
                    {...register("zip", { required: true, minLength: 2 })}
                    placeholder="Daxil edin"
                  />
                </label>
                <p className="error-message">
                  {errors?.zip?.type === "required" && "*ZIP Kodu daxil edin"}
                </p>
              </div>
              <div className="input-field comments">
                <label className="inform-label">
                  Bina/Mənzil{" "}
                  <textarea
                    className="delivery-comments"
                    rows={5}
                    style={{ resize: "none" }}
                    placeholder="Mətni daxil edin..."
                    {...register("comments")}
                  ></textarea>
                </label>
              </div>
            </div>
            <button className="main-button">Yadda saxla </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Delivery;
