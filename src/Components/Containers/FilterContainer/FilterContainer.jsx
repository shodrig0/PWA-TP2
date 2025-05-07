import SelectFilter from "../../FilterSelected/SelectFilter";

const FilterContainer = ({ onOrderChange, onRoleChange, onGameModeChange, isHeroe }) => {
  const roleOptions = [
    { value: "all", label: "Todos los roles" },
    { value: "tank", label: "Tank" },
    { value: "damage", label: "Damage" },
    { value: "support", label: "Support" },
  ];

  const gameModeOptions = [
    { value: "all", label: "Todos los modos" },
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
    </div>
  );
};

export default FilterContainer;
