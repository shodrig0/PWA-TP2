import Title from "../../Components/Title/Title"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import useHeroes from '../../Hooks/useHeroes'

const Details = () => {
  const { heroes, searchValue, onSearchClickHandle, onSearchChangeHandle } = useHeroes()

  return (
    <>
      <Title title={"Detalles"} />
      <Input className={``} onChange={onSearchChangeHandle} value={searchValue} />
      <Button className={``} onClick={onSearchClickHandle} nombre={`Buscar Personaje`} />
      {heroes && heroes.portrait && (
        <img src={heroes.portrait} />
      )}
      {/* <Button className={``} onClick={handleGoToHome} nombre={`Home`} /> */}
      {/* <div>
        <div>{loadingInfo}</div>
      </div> */}
    </>
  )
}

export default Details