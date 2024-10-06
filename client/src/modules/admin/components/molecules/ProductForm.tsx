import FormInput from "src/components/atoms/FormInput";
import ImageUploader from "../atoms/ImageUploader";
import Button from "src/components/atoms/Button";

export default function ProductForm() {
  return (
    <form className="max-w-sm space-y-4">
      <FormInput
        label="Menu Name"
        value=""
        onChange={(e) => console.log(e.target.value)}
        onBlur={(e) => console.log(e.target.value)}
        error=""
        touched={false}
      />
      <FormInput
        label="Price"
        value=""
        onChange={(e) => console.log(e.target.value)}
        onBlur={(e) => console.log(e.target.value)}
        error=""
        touched={false}
      />
      <ImageUploader />
      <Button variant="warning" block>
        Save Menu
      </Button>
    </form>
  );
}
