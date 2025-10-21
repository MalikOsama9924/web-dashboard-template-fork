import { projectName } from "@/theme/theme-config";
import type { Metadata } from "next";

export const getImageBase64URL = async (file: File) => {
  if (!file) return null;

  return await new Promise((res) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      res(reader.result);
    };
  }).then((res) => res);
};

export const convertObjectToFormData = <T extends Record<string, unknown>>(
  data: T
): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      Object.entries(value as Record<string, unknown>).forEach(
        ([_key, _value]) => {
          formData.append(`${key}[${_key}]`, _value as string);
        }
      );
    } else {
      formData.append(key, value as string);
    }
  });

  return formData;
};

export const generateRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += letters[randomIndex];
  }

  return color;
};

export const getMetadata = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  const metadata: Metadata = {};

  if (title) metadata.title = `${projectName} | ${title}`;
  if (description) metadata.description = description;

  return metadata;
};
