import { IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Box from "src/components/atoms/Box";
import Button from "src/components/atoms/Button";
import Spinner from "src/components/atoms/Spinner";
import { useDeleteCategory } from "src/config/mutators";
import { useCategories } from "src/config/queries";
import { useCategoriesFilter } from "../../views/Categories/use-categories-filter";

export default function CategoryTable() {
  const navigate = useNavigate();
  const [filter, setFilter] = useCategoriesFilter();
  const { data, isLoading, refetch } = useCategories({
    params: {
      populate: "*",
      pagination: {
        page: filter.page,
        pageSize: filter.pageSize,
      },
    },
  });

  const { mutateAsync: performDeleteCategory } = useDeleteCategory();

  if (isLoading) {
    return <Spinner />;
  }

  const handleEdit = (documentId: string) => {
    navigate("?id=" + documentId);
  };

  const handleDelete = async (documentId: string) => {
    if (!window.confirm("Are you sure ?")) return;

    try {
      await performDeleteCategory({ id: documentId });
      refetch();
      toast.success("Category deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaginate = (page: number) => {
    setFilter({ page });
  };

  const handleNextPrev = (direction: "next" | "prev") => {
    setFilter({
      page: direction === "next" ? filter.page + 1 : filter.page - 1,
    });
  };

  return (
    <Box title="Browse Categories">
      <div className="overflow-x-auto flex flex-col justify-between min-h-[330px]">
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
                    <Button
                      onClick={() => handleEdit(category.documentId)}
                      size="sm"
                      variant="success"
                      outline
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(category.documentId)}
                      size="sm"
                      variant="danger"
                      outline
                    >
                      <IconTrash size={20} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="join flex items-end justify-end">
          <button
            disabled={data.meta?.pagination?.page === 1}
            onClick={() => handleNextPrev("prev")}
            className="join-item btn bg-white border hover:bg-warning"
          >
            Prev
          </button>
          {Array.from(
            { length: data?.meta?.pagination?.pageCount || 1 },
            (_, index) => {
              return (
                <button
                  onClick={() => handlePaginate(index + 1)}
                  key={`pagination-${index}`}
                  className={`join-item btn bg-white border hover:bg-warning ${
                    filter.page === index + 1
                      ? "bg-warning hover:bg-warning"
                      : ""
                  }`}
                >
                  {index + 1}
                </button>
              );
            }
          )}
          <button
            disabled={
              data.meta?.pagination?.pageCount == data.meta?.pagination?.page
            }
            onClick={() => handleNextPrev("next")}
            className="join-item btn bg-white border hover:bg-warning"
          >
            Next
          </button>
        </div>
      </div>
    </Box>
  );
}
