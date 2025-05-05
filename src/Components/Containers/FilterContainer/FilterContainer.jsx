import FilterAndOrder from "../../filtersAndOrder/filtersAndOrder";
import SelectFilter from "../../selectFilter/SelectFilter";

const FilterContainer = ({ onOrderChange ,onRoleChange}) => {

  const roleOptions = [
    { value: "", label: "Todos los roles" },
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
    <SelectFilter options={roleOptions} onChange={onRoleChange}/>
    <SelectFilter options={orderOptions} onChange={onOrderChange}/>
    </div>
  );
};

export default FilterContainer;