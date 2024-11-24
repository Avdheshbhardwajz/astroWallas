import { UiData } from "../models/section.modal.js";

export const fetchData = async (req, res) => {
  try {
    const data = await UiData.find();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: error?.message,
    });
  }
};

export const fetchSection = async (req, res) => {
  try {
    const { sectionName } = req.query;
    if (!sectionName) {
      return res
        .status(400)
        .json({ success: false, message: "Section name is required" });
    }

    const data = await UiData.findOne({ sectionName });
    if (!data) {
      return res.status(404).json({
        success: false,
        message: `No data found for the provided section: ${sectionName}`,
      });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: error?.message,
    });
  }
};

export const editSection = async (req, res) => {
  try {
    const { sectionName, data } = req.body;
    if (!sectionName) {
      return res
        .status(400)
        .json({ success: false, message: "Section name is required" });
    }

    const existingData = await UiData.findOne({ sectionName });
    if (!existingData) {
      return res.status(404).json({
        success: false,
        message: `No data found for the provided section: ${sectionName}`,
      });
    }

    existingData.data = data;
    await existingData.save();
    res.status(200).json({ success: true, message: "Data updated" });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: error?.message,
    });
  }
};
