import { IconTrash } from "@tabler/icons-react";
import Box from "src/components/atoms/Box";
import Button from "src/components/atoms/Button";

export default function CategoryTable() {
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
            <tr>
              <td>1</td>
              <td>🍔</td>
              <td>All Menu</td>
              <td>all-menu</td>
              <td>23</td>
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
          </tbody>
        </table>
      </div>
    </Box>
  );
}
