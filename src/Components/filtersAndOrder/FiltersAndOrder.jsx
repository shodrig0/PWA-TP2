import React,{useState} from 'react'
import useHeroes from '../../Hooks/useHeroes'

function FiltersAndOrder() {
    const {  orderAlphabetically } = useHeroes()
    const [selectedOrder, setSelectedOrder] = useState('asc')

    const handleSelectChange = (e) => {
        const value = e.target.value
        setSelectedOrder(value)
        orderAlphabetically(value)
    }
  return (
    <select value={selectedOrder} onChange={handleSelectChange}>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>
  )
}

export default FiltersAndOrder
