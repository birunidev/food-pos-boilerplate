import Box from "src/components/atoms/Box";
import Button from "src/components/atoms/Button";
import FormInput from "src/components/atoms/FormInput";

export default function CategoryForm() {
  return (
    <Box title="Manage Category Form">
      <div className="space-y-3">
        <div className="space-y-2">
          <FormInput
            label="Name"
            value=""
            onChange={(e) => console.log(e.target.value)}
            onBlur={(e) => console.log(e.target.value)}
            error=""
            touched={false}
          />
          <FormInput
            label="Emoji"
            value=""
            onChange={(e) => console.log(e.target.value)}
            onBlur={(e) => console.log(e.target.value)}
            error=""
            touched={false}
          />
          <FormInput
            label="Slug"
            value=""
            onChange={(e) => console.log(e.target.value)}
            onBlur={(e) => console.log(e.target.value)}
            error=""
            touched={false}
          />
        </div>
        <Button block type="submit" variant="warning">
          Save Category
        </Button>
      </div>
    </Box>
  );
}
