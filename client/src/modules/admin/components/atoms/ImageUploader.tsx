import { IconUpload } from "@tabler/icons-react";
import Button from "src/components/atoms/Button";

export default function ImageUploader() {
  return (
    <div className="space-y-3">
      <label htmlFor="" className="font-bold label-text">
        Image
      </label>
      <div>
        <img src="/assets/images/placeholder.png" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-secondary">No Image Selected</p>
        <Button type="button" outline variant="danger">
          <IconUpload /> Upload
        </Button>
      </div>
    </div>
  );
}
