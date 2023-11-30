import { TextField } from "@mui/material";
import React from "react";

export default function SearchBar({searchText,handleInputSearch}) {
  return (
    <div>
        <TextField type="text" placeholder="Search By name, email or role" value={searchText} onChange={handleInputSearch}/>
      
    </div>
  );
}
