import React from 'react'
import { Stack , Box , Typography} from '@mui/material'
import CardPage from './CardPage'

const Home = () => {
  return (
    <Stack sx={{padding:"10px"}}>
      <Box sx={{ padding: "10px",display:"flex", alignItems:"center", justifyContent:"center" }}>
        <Typography sx={{fontSize:"30px", fontWeight:"700"}}>Askthedoc</Typography>
      </Box>
      <Box sx={{ padding: "10px",display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Typography sx={{fontSize:"16px", fontFamily:"unset" }}>Introducing a new and convenient way to extract important information from your PDFs without the hassle of going through numerous pages.
          Thanks to the power of AI, you can now easily chat with your documents and quickly identify the essential details you need.
           With this innovative tool, you no longer have to spend countless hours sifting through pages to find the information you need.
           Try it out and experiance the efficiency and convenience of extracting key insights from your PDFs with ease.
        </Typography>
      </Box>
      <Box sx={{marginBottom:"20px"}}>
        <Typography color="initial" sx={{ fontSize:"20px", fontWeight:"600" }}>Use Cases</Typography>
      </Box>
      <Box sx={{marginBottom:"20px"}}>
        <CardPage title="For Study" content="Whether it's textbooks, handouts, presentation, or research papers, this platform makes it effortless to extract and 
        understand the most important concepts and ideas. Say goodbye to hours spent flipping through pages and articles, and hello to a more efficient and responsible 
        way of supporting your academic growth. With askthedoc, you can access a wealth of knowledge and succeed in your studies
        with confidence. Try it out today and experience the benefits of this powerful learning tool."></CardPage>
      </Box>
      <Box sx={{display:"flex", justifyContent:"flex-end"}}>
      <CardPage title="For Work" content="With Askthedoc, you can access the information you need in record time, without the need for extensive reading or manual analysis.
      This powerful tool can help you make better decision and take more informed actions, saving you time and  effort in the process. So why not give Askthedoc a try today and discover how it can streamline your document analysis process? "></CardPage>
      </Box>
    </Stack>
  )
}

export default Home