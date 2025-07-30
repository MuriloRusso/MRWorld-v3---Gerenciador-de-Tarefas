import ButtonPrimary from "../ButtonPrimary";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function ButtonSearch({onclick}:{onclick: () => void}){        
    return <ButtonPrimary Icon={SearchOutlinedIcon} sx={{height: '55px'}} onClick={onclick}/>    
}