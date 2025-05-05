// components/Filter.jsx
const FilterAndOrder = ({ onOrderChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
      <select
        onChange={(e) => onOrderChange(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white border border-gray-600"
      >
        <option value="">Ordenar por nombre</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>
  );
};

export default FilterAndOrder;
