import { Input, SearchInputContainer } from "./styles";

type SearchInputProps = {
    placeholder: string;
    onChange: (value: string) => void;
}

export function SearchInput({ placeholder, onChange }: SearchInputProps) {
    return (
        <SearchInputContainer>
            <Input placeholder={placeholder} onChange={({ target }) => onChange(target.value)}/>
        </SearchInputContainer>
    )
}
