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
            color: "",
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

    //   if (color !== "all") {
    //     state.sortedData = state.sortedData.filter((curElem) =>
    //       curElem.colors.includes(color)
    //     );
    //   }

    //   if (price === 0) {
    //     state.sortedData = state.sortedData.filter(
    //       (curElem) => curElem.price == price
    //     );
    //   } else {
    //     state.sortedData = state.sortedData.filter(
    //       (curElem) => curElem.price <= price
    //     );
    //   }
    //   return {
    //     ...state,
    //     filter_products: state.sortedData,
    //   };

    // case "CLEAR_FILTERS":
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       text: "",
    //       category: "all",
    //       company: "all",
    //       color: "all",
    //       maxPrice: 0,
    //       price: state.filters.maxPrice,
    //       minPrice: state.filters.maxPrice,
    //     },
    //   };



        },
    },
})

export default productSlice.reducer
export const {setGridView, setListView, setSortedData, sortProducts, filterProducts} =  productSlice.actions