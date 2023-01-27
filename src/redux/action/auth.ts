import { createAsyncThunk } from "@reduxjs/toolkit";
import Commerce from "@chec/commerce.js";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");
import axios from "axios";
import { axiosInstance } from "../../api/axios";

// export const getAuthAction: any = createAsyncThunk("auth/getAuth", async () => {
//   try {

//     const headers ={
//         "X-Authorization": "pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3",
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     }


//     const data = await axios.post("https://api.chec.io/v1/customers",{})
//     return data;
//   } catch (error) {
//     return error;
//   }
// });
