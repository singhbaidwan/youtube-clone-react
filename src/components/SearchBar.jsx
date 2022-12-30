import React from 'react';
import {useState} from 'react';
import { Paper,IconButton } from '@mui/material';
// import { SearchIcon } from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
function SearchBar() {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate()
  function handleSubmit(event){
    event.preventDefault();
    if(searchTerm)
    {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  }
  


  return (
    <Paper
    component="form"
    onSubmit = {handleSubmit}
    sx={{
        borderRadius:20,
        border: '1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr: {sm : 5}
    }}
    >
        <input 
        className='search-bar'
        placeholder='Search...'
        value = {searchTerm}
        onChange={ (event)=> {setsearchTerm(event.target.value)}}
        />
        <IconButton type = "submit" sx={{
            p:'10px',color:'red'
        }}>
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar