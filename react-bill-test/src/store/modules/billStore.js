// 编写账单相关的store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useDispatch } from "react-redux";

const billStore = createSlice({
    name: 'billStore',
    initialState: {
        billList: []
    },
    reducers:{
        // 同步修改方法
        setbillList(state, action){
            state.billList = action.payload
        }
    }
})


// 编写异步
const getBillList = () => {
                //  这里的dispatch是函数被调用的时候useEffect 依赖传入的
    return async (dispatch)=>{
        const res = await axios.get('http://localhost:9999/ka')
        dispatch(setbillList(res.data))
    }
}

// 导出action Create函数
const{  setbillList } = billStore.actions

export { getBillList }
// 导出reduce
const billStoreReduce = billStore.reducer

export default billStoreReduce