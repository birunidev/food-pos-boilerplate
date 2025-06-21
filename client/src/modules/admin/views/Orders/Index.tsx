import OrderCards from "src/components/organisms/OrderCards";
import OrderFilter from "../../components/molecules/OrderFilter";
import AdminTemplate from "../../components/templates/AdminTemplate";
import { useOrders } from "src/config/queries";
import { useFormik } from "formik";
import moment from "moment";
import { useSearchParams } from "react-router-dom";

moment.locale("utc");

export default function OrderIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { values, setFieldValue } = useFormik({
    initialValues: {
      date_from: searchParams.get("date_from"),
      date_to: searchParams.get("date_to"),
    },
    onSubmit: () => {},
  });

  const { data: orderData } = useOrders({
    params: {
      populate: "*",
      filters: {
        order_date: {
          $gte: values.date_from
            ? moment(values.date_from).add(1, "d").startOf("day").toISOString()
            : undefined,
          $lte: values.date_to
            ? moment(values.date_to).add(1, "d").endOf("day").toISOString()
            : undefined,
        },
      },
    },
  });

  const handleFilterChange = (name: string, value: string) => {
    setFieldValue(name, value);
    const newParams = {
      ...Object.fromEntries(searchParams.entries()),
      [name]: value,
    };
    setSearchParams(newParams);
  };

  return (
    <AdminTemplate
      title="Manage Orders"
      links={[{ label: "Manage Orders", link: "#", isActive: true }]}
    >
      <OrderFilter values={values} onChange={handleFilterChange} />
      <OrderCards orders={orderData?.data} isAdmin={true} />
    </AdminTemplate>
  );
}
