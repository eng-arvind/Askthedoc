import React from 'react'
import {Typography, Stack} from '@mui/material'

const CardPage = (data) => {
  return (
     <Stack width="100" sx={{width:{sx:'95%',md:'45%'},padding:"10px", display:"flex", justifyContent:"center", alignItem:"center", background:"#0f172a" , borderRadius:"8px"}}>
        <Typography sx={{color:"#fff" ,fontSize:"18px" , fontWeight:"600", display:"flex", alignItems:"center",justifyContent:"center", paddingBottom:"10px" }}>{data.title}</Typography>
        <Typography sx={{color:"#fff", fontSize:"16px" , fontFamily:"sans-serif", display:"flex", alignItems:"center",justifyContent:"center" }}>
            {data.content}
        </Typography>
     </Stack>
  )
}

export default CardPage