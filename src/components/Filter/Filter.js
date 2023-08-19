import { FilterInput, Label, Wrapper } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <FilterInput
        type="text"
        value={value}
        placeholder="Type name..."
        onChange={evt => {
          onChange(evt.target.value);
        }}
      />
    </Wrapper>
  );
};
