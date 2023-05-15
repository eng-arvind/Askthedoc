import React from "react";
import { Stack, Box, Typography, Link } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Stack sx={{background:"#0e2447",borderTop: "1px solid #0f172a",padding:"20px 30px",color: "white"}}>
      <Stack sx={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", marginTop:"10px"}}>  
        <Box>
          <Typography sx={{fontSize:"20px",fontWeight:"600"}}>About</Typography>
          <Typography sx={{fontSize:"14px",color:"gray",padding:"2px 0"}}>Askthedoc</Typography>
          <Typography sx={{fontSize:"14px",color:"gray",padding:"2px 0"}}>Aman Ali</Typography>
          <Typography sx={{fontSize:"14px",color:"gray",padding:"2px 0"}}>Arvind Kumar</Typography>
        </Box>
        <Box>
        <Typography sx={{fontSize:"20px",fontWeight:"600"}}>Services</Typography>
        <Link to="/privecy"><Typography  sx={{fontSize:"14px",color:"gray",padding:"2px 0"}}>Privacy Policy</Typography></Link>
        <Link><Typography  sx={{fontSize:"14px",color:"gray",padding:"2px 0"}}>Terms of use</Typography></Link>
        </Box>
        <Box>
          <Typography sx={{fontSize:"20px",fontWeight:"600"}}>Contact Us</Typography>
          <Typography  sx={{fontSize:"14px",color:"gray",padding:"2px 0"}}>amanali500@gmail.com</Typography>
          <Box sx={{display:"flex",justifyContent:"space-between",padding:"2px 0"}}>
            <Link href="https://www.instagram.com/"><InstagramIcon></InstagramIcon></Link> 
            <Link><TwitterIcon></TwitterIcon></Link>
            <Link><FacebookIcon></FacebookIcon></Link>
            <Link><LinkedInIcon></LinkedInIcon></Link>
          </Box>
        </Box>
      </Stack>
      <Stack sx={{display:"flex", alignItems:"center",justifyContent:"center",marginTop:"10px",borderTop:"1px solid gray"}}>
      <Typography sx={{fontFamily:"monospace"}}>Copyright © 2023 Askthedoc. All Rights Reserved</Typography>
      </Stack>
      </Stack>
  );
}

export default Footer;
