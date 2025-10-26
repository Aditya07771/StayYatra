"use client";

export default function TestEnv() {
  console.log("✅ Cloudinary:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
  const add = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  return <div>Testing Cloudinary env {add} </div>;
}
