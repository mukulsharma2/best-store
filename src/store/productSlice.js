import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        showGridView: true,
        sortedData: [],
        filters: {
            text: "",
            category: "all",
            company: "all",
            color: "all",
            price: 0,
        },
    },
    reducers: {
        setGridView: (state)=>{
            state.showGridView = true
        },
        setListView: (state)=>{
            state.showGridView = false
        },
        setSortedData: (state, action)=>{
            state.sortedData = action.payload
        },
        sortProducts: (state, action)=>{
            const fn = (a, b) => {
                if (action.payload === "lowest")return a.price - b.price;
                if (action.payload === "highest")return b.price - a.price;
                if (action.payload === "a-z") return a.name.localeCompare(b.name);
                if (action.payload === "z-a")return  b.name.localeCompare(a.name);
            }
            state.sortedData.sort(fn);
        },
        filterProducts: (state, action)=>{
            state.filters = {
                ...state.filters,
                [action.payload.name]: action.payload.value
            }

            state.sortedData = action.payload.fullData

      const { text, category, company, color, price } = state.filters;

      if (text) {
        state.sortedData = state.sortedData.filter(curElem => curElem.name.toLowerCase().includes(text.toLowerCase()));
      }

      if (category !== "all") {
        state.sortedData = state.sortedData.filter(curElem => curElem.category === category);
      }

      if (company !== "all") {
        state.sortedData = state.sortedData.filter(curElem => curElem.company.toLowerCase() === company.toLowerCase());
      }

      if (color !== "all") {
        state.sortedData = state.sortedData.filter(curElem => curElem.colors.includes(color));
      }

    
        if (price) {
            state.sortedData = state.sortedData.filter(curElem => curElem.price <= price);
         }
        },
    clearFilters: (state, action)=>{
        state.sortedData = action.payload.fullData
        state.filters =  {
            text: "",
            category: "all",
            company: "all",
            color: "all",
            price: action.payload.maxPrice,
        }
    },
    },
})

export default productSlice.reducer
export const {setGridView, setListView, setSortedData, sortProducts, filterProducts, clearFilters} =  productSlice.actions