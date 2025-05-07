import React from 'react';

function SelectFilter({ onChange, options }) {
  return (
    <div className="z-10">
      <select
        onChange={(e) => onChange(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white border border-gray-600"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectFilter;

