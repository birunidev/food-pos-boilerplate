import { IconTrash } from "@tabler/icons-react";
import Box from "src/components/atoms/Box";
import Button from "src/components/atoms/Button";
import Spinner from "src/components/atoms/Spinner";
import { useCategories } from "src/config/queries";

export default function CategoryTable() {
  const { data, isLoading } = useCategories({
    params: {
      populate: "*",
      pagination: {
        page: 1,
        pageSize: 10,
      },
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  console.log("Categories Data:", data);

  return (
    <Box title="Browse Categories">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Emoji</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Total Products</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map?.((category, index) => (
              <tr key={`category-${category.id}`}>
                <td>{index + 1}</td>
                <td>{category.emoji}</td>
                <td>{category.name}</td>
                <td>{category.slug}</td>
                <td>{category.products?.length}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="success" outline>
                      Edit
                    </Button>
                    <Button size="sm" variant="danger" outline>
                      <IconTrash size={20} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}
