import AdminTemplate from "../components/templates/AdminTemplate";
import StatCards from "../components/molecules/StatCards";

export default function Dashboard() {
  return (
    <AdminTemplate>
      <div className="space-y-6">
        <StatCards
          statCards={[
            {
              label: "All Products",
              value: 60,
            },
            {
              label: "Total Revenue",
              value: "Rp 2,999,999",
              color: "red",
            },
            {
              label: "All Products",
              value: 60,
            },
            {
              label: "All Products",
              value: 60,
            },
          ]}
        />
        <div className="py-6 px-6 shadow rounded-xl space-y-6">
          <p className="text-base font-bold md:text-lg">Today Orders</p>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Order ID</th>
                  <th>Ordered Items</th>
                  <th>Table</th>
                  <th>Additional Notes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>ORD/2021/01</td>
                  <td>2 items</td>
                  <td>Table 1</td>
                  <td>-</td>
                  <td>
                    <button className="btn btn-sm btn-success btn-outline">
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}
