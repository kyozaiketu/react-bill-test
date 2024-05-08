// 配置store  config
import billStoreReduce from "./modules/billStore";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        bill: billStoreReduce
    }
})

export default store