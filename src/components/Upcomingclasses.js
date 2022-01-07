import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Cbox } from './innercomponents/Cbox';
import { Webd } from './innercomponents/Webd';
import {C2box} from"./innercomponents/C2box";

export default function Upcomingclasses() {
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: "100%",
            padding:"2%"
          },
        }}
      >
        <Paper elevation={5} style={{backgroundColor:" rgba(255,255, 255, 0.6) "}}>
          <div style={{display:"flex",justifyContent:'flex-start'}}>
            
              <img style={{width:"6%",height: "4%" , marginRight:"1%"}} 
              src="upcomingheader.png" alt="upcomingheader pic"/>
            
            <div>
              <Typography variant="h4" style={{fontWeight:"bold",}} gutterBottom component="div">
                Upcoming classes   
              </Typography> 
            </div>
          </div>
          <div >
            <div style={{display:"flex"}}>
              <Typography variant="h10" gutterBottom component="div">
                Today   
              </Typography>
              <hr style={{width: "92%",
                height: "15%",
                marginTop: "2%"}}>
              </hr>
            </div>
            <Cbox/>
            <Webd/>
            <div style={{display:"flex"}}>
              <Typography variant="h10" gutterBottom component="div">
                16/09/21   
              </Typography>
              <hr style={{width: "89%",
                height: "15%",
                marginTop: "2%"}}>
              </hr>
            </div>
            <C2box/>
            <Webd/> 
            <C2box/>
            <Webd/>
          </div>
        </Paper>
      </Box>   
    )
}
