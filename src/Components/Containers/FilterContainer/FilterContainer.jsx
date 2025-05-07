import { useTranslation } from "react-i18next";
import SelectFilter from "../../FilterSelected/SelectFilter";

const FilterContainer = ({ onOrderChange, onRoleChange }) => {
  const { t } = useTranslation();

  const roleOptions = [
    { value: "all", label: t("filters.rol.all") },
    { value: "tank", label: t("filters.rol.tank") },
    { value: "damage", label: t("filters.rol.damage") },
    { value: "support", label: t("filters.rol.support") },
  ];

  const orderOptions = [
    { value: "asc", label: "A - Z" },
    { value: "desc", label: "Z - A" },
  ]
  return (
    <div className="flex justify-center pb-4 z-20" style={{ backgroundColor: '#001922' }}>
      <SelectFilter options={roleOptions} onChange={onRoleChange} />
      <SelectFilter options={orderOptions} onChange={onOrderChange} />
      <img
    src="/bot_diver.png"
    alt="TopDiviver"
    className="absolute hidden md:flex w-full -bop-6 left-1/2 -translate-x-1/2   object-contain"
  />
    </div>
  );
};

export default FilterContainer;
