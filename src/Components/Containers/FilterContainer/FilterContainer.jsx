// import FilterAndOrder from "../../FiltersAndOrder/FiltersAndOrder";
import SelectFilter from "../../FilterSelected/SelectFilter";

const FilterContainer = ({ onOrderChange, onRoleChange }) => {

  const roleOptions = [
    { value: "all", label: "Todos los roles" },
    { value: "tank", label: "Tank" },
    { value: "damage", label: "Damage" },
    { value: "support", label: "Support" },
  ];

  const orderOptions = [
    { value: "asc", label: "A - Z" },
    { value: "desc", label: "Z - A" },
  ];
  return (
    <div className="flex justify-center">
      <SelectFilter options={roleOptions} onChange={onRoleChange} />
      <SelectFilter options={orderOptions} onChange={onOrderChange} />
    </div>
  );
};

export default FilterContainer;