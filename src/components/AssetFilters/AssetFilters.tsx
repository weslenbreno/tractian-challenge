import { Filter, FilterName, Filters, FiltersContainer, RadioButtons } from './styles'
import { SearchInput } from '../SearchInput'
import { useAppStore } from 'src/store'
import { useMemo } from 'react'

export default function AssetFilters() {
    const { setFilters } = useAppStore()
    const filters = useMemo(() => [
        {
            name: 'Tipo de sensor',
            key: 'sensorType',
            options: [
                { name: 'Todos', value: '' },
                { name: 'Energia', value: 'energy' },
                { name: 'Vibração', value: 'vibration' },
            ]
        },
        {
            name: 'Status',
            key: 'status',
            options: [
                { name: 'Todos', value: '' },
                { name: 'Operando', value: 'operating' },
                { name: 'Alerta', value: 'alert' },
            ]
        }
    ], [])

    const handleSearch = (value: string) => {
        setFilters({ name: value })
    }

    const handleFilter = (key: string, value: string) => {
        setFilters({ [key]: value })
    }

    return (
        <FiltersContainer>
            <SearchInput placeholder='Buscar Ativo ou Local' onChange={handleSearch} />
            <Filters>
                {filters.map(filter => (
                    <Filter key={filter.name}>
                        <FilterName>{filter.name}</FilterName>
                        <RadioButtons>
                            {filter.options.map(option => (
                                <label key={option.value}>
                                    <input
                                        type='radio'
                                        name={filter.name}
                                        value={option.value}
                                        onChange={(e) => handleFilter(filter.key, e.target.value)}
                                    />
                                    <label htmlFor={filter.name}>{option.name}</label>
                                </label>
                            ))}
                        </RadioButtons>
                    </Filter>
                ))}
            </Filters>
        </FiltersContainer>
    )
}


