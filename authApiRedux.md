# 🔐 Auth API with Redux Toolkit Query

This project shows how to implement **authentication (register & login)** using [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) with Redux store setup.

---

## 📌 Features
- User **registration** (`/register`)
- User **login** (`/login`)
- Built with **RTK Query**
- **Cookies enabled** (`credentials: "include"`)
- Dynamic API `baseUrl`

---

## 📂 Auth API Code

```javascript
// auth api
// features/auth/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/getBaseUrl";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/auth`,
    credentials: "include", // send cookies
  }),
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
    }),
    logInUser: build.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLogInUserMutation } = authApi;
export default authApi;
```
```javascript
// store
import { configureStore } from "@reduxjs/toolkit";
import authApi from "./features/auth/authApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
```
```javascript
// implement 
const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      console.log(response);
      toast.success(response.message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log("register failed", error);
      toast.error(error.data.message);
    }
  };


