import { IconUpload } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import Button from "src/components/atoms/Button";
import { getThumbnailUrl } from "src/utils/image";

interface ImageUploaderProps {
  value: string;
  onChange: (value: File) => void;
}

const allowedTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/bmp",
  "image/webp",
];

const UPLOAD_SIZE_LIMIT = 2 * 1024 * 1024; // 2MB

export default function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const uploadRef = useRef<HTMLInputElement | null>(null);

  const [imageValue, setImageValue] = useState<string | null>(value);
  const [imageMeta, setImageMeta] = useState<File | null>(null);

  const handleTriggerUpload = () => {
    uploadRef.current?.click();
  };

  const onUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // get file
    const file: File = e.target.files?.[0];
    if (!file) return;

    // check if file is an image
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a valid image file (JPG, JPEG, PNG, BMP, or WEBP).");
      return;
    }

    // check if file is more than 2MB
    if (file.size > UPLOAD_SIZE_LIMIT) {
      alert("Image size should not exceed 2MB.");
      return;
    }
    // set file to imageMeta state
    setImageMeta(file);
    // convert file to blob URL

    setImageValue(URL.createObjectURL(file));

    // trigger onChange callback with the file
    onChange(file);
  };

  useEffect(() => {
    if (value) {
      setImageValue(getThumbnailUrl(value));
    }
  }, [value]);

  return (
    <div className="space-y-3">
      <label htmlFor="" className="font-bold label-text">
        Image
      </label>
      <div>
        <img
          className="w-[100px] h-[100px] object-cover"
          alt=""
          src={imageValue || "/assets/images/placeholder.png"}
        />
      </div>
      <input
        onChange={onUploadChange}
        ref={uploadRef}
        type="file"
        className="opacity-0 hidden"
      />
      <div className="flex justify-between items-center">
        <p className="text-sm text-secondary">
          {imageMeta ? imageMeta.name : "No image selected"}
        </p>
        <Button
          onClick={handleTriggerUpload}
          type="button"
          outline
          variant="danger"
        >
          <IconUpload /> Upload
        </Button>
      </div>
    </div>
  );
}
