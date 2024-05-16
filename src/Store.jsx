import { configureStore } from "@reduxjs/toolkit";
import CartSystem from "./redux/CartSystem";

const Stored=configureStore({
    reducer:{
        user:CartSystem
    }
})
export default Stored;