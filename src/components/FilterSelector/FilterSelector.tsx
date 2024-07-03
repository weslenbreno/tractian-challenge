import { useRef, useState } from "react";
import { FilterName, FilterOption, FilterSelect, FilterSelectDropDown, FilterSelectorContainer, OptionSelected } from "./styles";
import { useOnClickOutside } from "src/hooks";
import FilterIcon from 'src/assets/icons/filter.svg?react';

type TFilterOption = {
    name: string;
    value: string;
}

type TFilter = {
    name: string;
    key: string;
    options: TFilterOption[];
}

type TFilterSelectorProps = {
    filter: TFilter;
    onChange: (value: string) => void;
}

export function FilterSelector({ filter, onChange }: TFilterSelectorProps) {
    const [selectedOption, setSelectedOption] = useState<TFilterOption | null>(filter.options[0] || null);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => {
        setOpen(false);
    });

    function handleSelectClick() {
        setOpen(!open);
    }

    return (
        <FilterSelectorContainer ref={ref}>
            <FilterSelect onClick={handleSelectClick}>
                <div>
                    <FilterName>{filter.name}</FilterName>
                    <OptionSelected>{selectedOption?.name || '-'}</OptionSelected>
                </div>
                <FilterIcon width={20} height={20} fill="#333"/>
            </FilterSelect>
            <FilterSelectDropDown open={open}>
                {filter.options.map(option => (
                    <FilterOption key={option.name} onClick={() => {
                        setSelectedOption(option);
                        onChange(option.value);
                        setOpen(false);
                    }}>
                        {option.name}
                    </FilterOption>
                ))}
            </FilterSelectDropDown>
        </FilterSelectorContainer>
    )
}
