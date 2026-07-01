"use client";

import { useState } from "react";
import { ImagePlus, Loader2, CheckCircle2 } from "lucide-react";

export default function ImageUploader({ setImageUrl }) {
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        const uploadedUrl = data.data.url;
        setImageUrl(uploadedUrl);
        setPreviewUrl(uploadedUrl);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-[10px] uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
        Profile Picture
      </label>

      <label
        htmlFor="profile-image"
        className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 p-5 text-center transition-all duration-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-700 dark:from-[#0d1527] dark:to-[#111c31] dark:hover:border-blue-500"
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover:scale-105 dark:bg-blue-500/15 dark:text-blue-400">
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : previewUrl ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <ImagePlus className="h-5 w-5" />
          )}
        </div>

        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          {loading
            ? "Uploading your image..."
            : previewUrl
            ? "Image uploaded successfully"
            : "Upload profile photo"}
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          PNG, JPG, or WEBP up to 5MB
        </p>

        <input
          id="profile-image"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="sr-only"
        />
      </label>

      {fileName && (
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Selected file: <span className="font-medium text-slate-700 dark:text-slate-200">{fileName}</span>
        </p>
      )}

      {previewUrl && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900/40 dark:bg-emerald-950/20">
          <img
            src={previewUrl}
            alt="Uploaded preview"
            className="h-16 w-16 rounded-xl object-cover ring-2 ring-white dark:ring-slate-900"
          />
          <div>
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              Preview ready
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Your profile image is ready to use.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}