import SelectFilter from "../../FilterSelected/SelectFilter";
import { useTranslation } from "react-i18next";


const FilterContainer = ({ onOrderChange, onRoleChange, onGameModeChange, isHeroe }) => {
  const { t } = useTranslation();

  const roleOptions = [
    { value: "all", label: t("Todos los roles") },
    { value: "tank", label: t("Tank") },
    { value: "damage", label: t("Damage") },
    { value: "support", label: t("Support") },
  ];

  const gameModeOptions = [
    { value: "all", label: t("Todos los modos") },
    { value: "assault", label: "Assault" },
    { value: "control", label: "Control" },
    { value: "escort", label: "Escort" },
    { value: "hybrid", label: "Hybrid" },
    { value: "flashpoint", label: "Flashpoint" },
    { value: "push", label: "Push" },
    { value: "capture-the-flag", label: "Captura la bandera" },
    { value: "deathmatch", label: "Deathmatch" },
    { value: "team-deathmatch", label: "Deathmatch en equipo" },
  ];
  const orderOptions = [
    { value: "asc", label: "A - Z" },
    { value: "desc", label: "Z - A" },
  ];

  return (
    <div className="flex justify-center pb-4 gap-2" style={{ backgroundColor: '#111F27' }}>
      {isHeroe ? (
        <SelectFilter options={roleOptions} onChange={onRoleChange} />
      ) : (
        <SelectFilter options={gameModeOptions} onChange={onGameModeChange} />
      )}
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
