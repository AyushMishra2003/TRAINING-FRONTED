import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
  courseData: [],
  loading: false,
  error: null
};

export const getAllCourse = createAsyncThunk("/course", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("/course");
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const createNewCourse = createAsyncThunk("/course/create", async (data, { rejectWithValue }) => {
  try {
    let formData = new FormData();
    formData.append("title", data?.title);
    formData.append("description", data?.description);
    formData.append("category", data?.category);
    formData.append("createdBy", data?.createdBy);
    formData.append("thumbnail", data?.thumbnail);

    const response = await axiosInstance.post("/courses", formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteCourse = createAsyncThunk("/course/delete", async (cid, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.delete(`/courses/${cid}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courseData = action.payload;
      })
      .addCase(getAllCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createNewCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courseData.push(action.payload);
      })
      .addCase(createNewCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courseData = state.courseData.filter(course => course.id !== action.meta.arg);
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default courseSlice.reducer;
