import mongoose from "mongoose";

const uiDataSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

export const UiData = mongoose.model("UiData", uiDataSchema);
