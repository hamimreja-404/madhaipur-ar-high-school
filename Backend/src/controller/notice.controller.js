import { Notice } from "../models/Notice.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const noticeUpload = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const noticeLocalPath = req.file?.path;

  if (!title || !noticeLocalPath) {
    throw new ApiError(400, "Title and file are required");
  }

  const noticeURL = await uploadOnCloudinary(noticeLocalPath);

  console.log("Notice URL:", noticeURL);
  if (!noticeURL) {
    throw new ApiError(500, "Failed to upload to Cloudinary");
  }

  const notice = await Notice.create({
    title,
    fileURL: noticeURL.secure_url,
    date: new Date(),
  });

  return res.status(201).json(new ApiResponse(201, notice, "Notice uploaded successfully"));
});

export { noticeUpload };
