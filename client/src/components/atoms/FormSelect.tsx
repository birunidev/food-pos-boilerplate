export default function FormSelect() {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text font-bold">Update Status</span>
      </div>
      <select className="select select-bordered">
        <option disabled selected>
          Pick one
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </label>
  );
}
