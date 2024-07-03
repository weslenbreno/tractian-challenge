import { Filters, FiltersContainer } from './styles'
import { SearchInput } from '../SearchInput'
import { useAppStore } from 'src/store'
import { useMemo } from 'react'
import { FilterSelector } from '../FilterSelector'

export function AssetFilters() {
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
                    <FilterSelector key={filter.name} onChange={(value) => handleFilter(filter.key, value)} filter={filter} />
                ))}
            </Filters>
        </FiltersContainer>
    )
}


