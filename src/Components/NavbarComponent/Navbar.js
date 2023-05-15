import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import google from "../../images/google.png";

const Navbar = () => {
  return (
    <Stack
      direction={{ sm: "row", sx: "column" }}
      p={1}
      sx={{
        position: "sticky",
        top: "0",
        justifyContent: "space-between",
      }}  style={{display:"flex", justifyContent:"flex-end", alignItems:"end", boxShadow: "0px 1px 1px #0f172a", background:"#0e2447"}}
    >
      <Link to="/login" style={{display: "flex",justifyContent:"flex-end",width:"fit-content", background:"#0f172a", padding:"8px 20px", borderRadius:"2px",textDecoration: "none", cursor:"pointer", border:"1px solid gray" }}>
        <img src={google} alt="logo" height={20} style={{marginRight:"5px"}} />
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Fjalla One",
            fontSize: "16px",lineHeight:'1.3'
          }}
        >
          Login
        </Typography>
      </Link>
    </Stack>
  );
}

export default Navbar;
