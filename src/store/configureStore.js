import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import reducer from "./reducer"

const middleware = [...getDefaultMiddleware()]
export default function () {
  return configureStore({reducer, middleware})
}
