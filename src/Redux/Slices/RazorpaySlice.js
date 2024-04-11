import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helper/axiosInstance";


const initialState = {
    key: "",
    subscription_id: "",
    isPaymentVerified: false,
    allPayments: {},
    finalMonths: {},
    monthlySalesRecord: []
}

export const getRazorPayId = createAsyncThunk("/razorpay/getId", async () => {
    try {
        const response = await axiosInstance.get("/payements/razorpay-key");
        console.log(response);
        return response.data;
    } catch(error) {
        toast.error("Failed to load data");
    }
})


export const purchaseCourseBundle = createAsyncThunk("/purchaseCourse", async () => {
    try {
        const response = await axiosInstance.post("/payements/subscribe");
        console.log(response)
        return response.data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

export const verifyUserPayment = createAsyncThunk("/payements/verify", async (data) => {
    try {
        console.log("i am verify user payement")
        console.log(data)
        const response = await axiosInstance.post("/payements/verify", {
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_subscription_id: data.razorpay_subscription_id,
            razorpay_signature: data.razorpay_signature
        });
        console.log(response)
        return response.data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

export const getPaymentRecord = createAsyncThunk("/payements/record", async () => {
    try {
        const response = axiosInstance.get("/payements?count=100", );
        // console.log(response);
        toast.promise(response, {
            loading: "Getting the payment records",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to get payment records"
        })
        return (await response).data;
    } catch(error) {
        toast.error("Operation failed");
    }
});

export const cancelCourseBundle = createAsyncThunk("/payements/cancel", async () => {
    try {
        const response = axiosInstance.post("/payements/unsubscribe");
        toast.promise(response, {
            loading: "unsubscribing the bundle",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to ubsubscribe"
        })
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

const razorpaySlice = createSlice({
    name: "razorpay",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getRazorPayId.fulfilled, (state, action) =>{
            state.key = action?.payload?.key;
        })
        .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
            state.subscription_id = action?.payload?.subscription_id;
        })
        .addCase(verifyUserPayment.fulfilled, (state, action) => {
            console.log(action);
            toast.success(action?.payload?.message);
            state.isPaymentVerified = action?.payload?.success;
        })
        .addCase(verifyUserPayment.rejected, (state, action) => {
            console.log(action);
            toast.success(action?.payload?.message);
            state.isPaymentVerified = action?.payload?.success;
        })
        .addCase(getPaymentRecord.fulfilled, (state, action) => {
            state.allPayments = action?.payload?.allPayments;
            state.finalMonths = action?.payload?.finalMonths;
            state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
        })
    }
});

export default razorpaySlice.reducer;