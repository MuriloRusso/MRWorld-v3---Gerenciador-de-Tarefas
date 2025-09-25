import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import { inputProps, Option } from '../../types/input';
import { useEffect } from 'react';

type AutoCompleteProps<T> = {
  options: Option[];
  state: inputProps;
  onChange: (fieldName: keyof T, newValue: string) => void;
  fieldName: keyof T; // Novo prop para especificar o campo
};

export default function AutoComplete<T>({options, state, onChange, fieldName}: AutoCompleteProps<T>) {
  // Encontrar o objeto da opção correspondente ao value atual
  
  const selectedOption = options.find(option => option.value.toString() === state.value.toString()) || null;

  const onChangeFunction = (_:any, newValue: Option | null) => {
    onChange(fieldName, newValue?.value.toString() || '');
  }

  useEffect(() => {
    onChangeFunction('', selectedOption);
    console.log('selectedOption...', selectedOption);
    
  }, [])
  
  return (
    <Autocomplete
      disablePortal
      value={selectedOption}
      noOptionsText="Sem resultados"
      onChange={onChangeFunction}
      options={options}
      getOptionLabel={(option) => option.text}
      sx={{ width: 300 }}
      // autoSelect={true}      
      renderInput={(params) => (
        <TextField
          {...params}
          label={state.label}
          error={state.error}
          helperText={state.error ? state.errorText || 'Campo obrigatório' : ''}
          // onSelect={}
          // value={state.value}
        />
      )}
    />
  );
}