// import { Box, Input } from '@chakra-ui/react';
import React from 'react'
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';

// import Login from '../Components/Login';
import Navbar from '../Components/Navbar';
// import Signup from '../Components/Signup';
import { CloseIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const handleSignup =()=>{
        navigate("/signup");
      };
  return (
    <div>
      <Box width="100%" bg="#ff80ab" textAlign="center" >
        <Flex gap="1rem" p="1rem">
        <Spacer/>
        <p>Want to join a presentation?</p>
        <input type="text" placeholder='Enter code here' />
        <Button colorScheme='blue' borderRadius="none">Join</Button>
        <Spacer/>
        <CloseIcon/>
        </Flex>
       </Box>
       <br/>
       <Navbar/>
       <br />
       <br />
       <br />
       <div style={{marginTop:'300px',width:"60%", textAlign:"center",margin:'auto'}}>
        <Heading fontSize='50px'>Engage your audience & eliminate awkward silences</Heading>
        <p style={{fontSize:'32px', color: "rgba(16, 24, 52, 0.75)"}}>Our easy-to-build presentations, interactive Polls, Quizzes, and Word Clouds mean more participation and less stress</p>
        <br />
        <Button onClick={handleSignup} colorScheme='blue' size='lg' borderRadius="none">Sign up</Button>
        <p style={{fontSize:'8px', color: "rgba(16, 24, 52, 0.75)"}}>No credit card needed</p>
       </div>
       <br />
       <div style={{width:'50%',margin:'auto'}}>
       <iframe src="https://player.vimeo.com/video/401017176" width="680" height="500" 
            frameborder="0" title="mentivideo" allow="fullscreen" allowfullscreen></iframe>
        </div>
        <br />
        <br />
        <div style={{width:"90%",textAlign:"center",margin:"auto"}}>
            <br />
            <Heading fontSize='32px' color="rgb(25, 108, 255)">What is Mentimeter?</Heading>
            <br />
            <div style={{display:"flex",textAlign:"center"}}>
                <div style={{textAlign:"center"}}>
                    <img style={{width:"285px", height:"162px"}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNDQ3Ljk5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2I0Y2NlNTt9LmNscy0ye2ZpbGw6IzBkNmI0NTt9LmNscy0ze2ZpbGw6IzZlNTRiZDt9LmNscy00e2ZpbGw6I2ZmODBhYjt9LmNscy01e2ZpbGw6I2ZmYzczODt9LmNscy02e2ZpbGw6I2ZmNDAzZDt9LmNscy03e2ZpbGw6IzAwZGI5MTt9LmNscy04e2ZpbGw6IzEwMTgzNDt9LmNscy05e2ZpbGw6I2ZmZjt9LmNscy0xMHtmaWxsOiMxOTZjZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5NZW50aW1ldGVyX1dlYl9Ib21lcGFnZV8yMDIwPC90aXRsZT48cG9seWdvbiBwb2ludHM9Ijc5OS45OSA0MzkuOTkgNzk5Ljk5IDQ0Ny45OSAwIDQ0Ny45OSAwIDQzOS45OSA4MCA0MzkuOTkgNTIwIDQzOS45OSA3MTkuOTkgNDM5Ljk5IDc5OS45OSA0MzkuOTkiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNjgwIDMxOS45OCA2ODAgMzU5Ljk5IDY0MC4wMSAzNTkuOTkgNjQwLjAxIDMxOS45OSA2NDAuMDEgMzE5Ljk4IDY4MCAzMTkuOTgiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjgwIDI3OS45OCA2ODAgMjgwLjAxIDY3OS45NyAyODAuMDEgNjgwIDI3OS45OCIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNjQwLjAxIiB5PSIyNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzOS45OCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2ODAgMTYwIDY4MCAyMDAgNjQwLjAxIDIwMCA2NDAuMDEgMTk5Ljk5IDY0MC4wMSAxOTAgNjQwLjAxIDE2MCA2ODAgMTYwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjY4MCAyNzkuOTggNjc5Ljk3IDI4MC4wMSA2NDAuMDEgMjgwLjAxIDY0MC4wMSAyNzkuOTkgNjQwLjAxIDI3OS45OCA2ODAgMjc5Ljk4Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI2MzkuOTkiIHk9IjMxOS45NyIgd2lkdGg9IjAuMDEiIGhlaWdodD0iMC4wMSIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iNjM5Ljk5IiB5PSIyNzkuOTgiIHdpZHRoPSIwLjAxIiBoZWlnaHQ9IjAuMDEiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjYzOS45OSIgeT0iMjQwIiB3aWR0aD0iMC4wMSIgaGVpZ2h0PSIzOS45OCIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNjM5Ljk5IiB5PSIxOTkuOTkiIHdpZHRoPSIwLjAxIiBoZWlnaHQ9IjAuMDEiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjYzOS45OSIgeT0iMTkwIiB3aWR0aD0iMC4wMSIgaGVpZ2h0PSI5Ljk4Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI2MzkuOTkiIHk9IjE2MCIgd2lkdGg9IjAuMDEiIGhlaWdodD0iMzAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iNjQwLjAxIDMxOS45OSA2MzkuOTkgMzIwIDYzOS45OSAzMTkuOTkgNjQwLjAxIDMxOS45OSIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTY0MCw4MEg1NjBWMEE4MCw4MCwwLDAsMSw2NDAsODBaIi8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSI1OTkuOTkiIHk9IjI3OS45OCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjAuMDEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTUiIHBvaW50cz0iMzYwIDI3OS45OSAzNDAgMjc5Ljk5IDM0MCAzNTkuOTkgMzQwIDM2MCAzNjAgMzYwIDM4MC4wMSAzNjAgMzgwLjAxIDM1OS45OSAzODAuMDEgMzMyLjgyIDM4MC4wMSAzMTkuOTkgMzgwLjAxIDI3OS45OSAzNjAgMjc5Ljk5Ii8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNNDgwLDgwaDgwVjBBODAsODAsMCwwLDAsNDgwLDgwWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNiIgcG9pbnRzPSIyNjAuMDEgMTk5Ljk3IDI2MC4wMSAxOTkuOTkgMjYwLjAxIDI0MCAyNjAuMDEgMjUwIDI2MC4wMSAyNjAgMjYwLjAxIDI2OS45OSAyNjAuMDEgMzU5Ljk5IDI2MC4wMSAzNjAgMjgwLjAxIDM2MCAzMDAuMDEgMzYwIDMwMC4wMSAzNTkuOTkgMzAwLjAxIDMxOS45OCAzMDAuMDEgMjUwIDMwMC4wMSAyNDAgMzAwLjAxIDE5OS45NyAyNzkuOTkgMTk5Ljk3IDI2MC4wMSAxOTkuOTciLz48cG9seWdvbiBjbGFzcz0iY2xzLTciIHBvaW50cz0iNDQyLjM0IDI0MCA0MzkuOTkgMjQwIDQyMC4wMSAyNDAgNDIwLjAxIDI2My43MSA0MjAuMDEgMzE5Ljk5IDQyMC4wMSAzMzAuMzIgNDIwLjAxIDMzMi44MiA0MjAuMDEgMzU5Ljk5IDQyMC4wMSAzNjAgNDYwLjAxIDM2MCA0NjAuMDEgMzU5Ljk5IDQ2MC4wMSAzMzIuODIgNDYwLjAxIDMzMC4zMiA0NjAuMDEgMzE5Ljk5IDQ2MC4wMSAyNDAgNDQyLjM0IDI0MCIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTQwLjgsMFYyNDBIODBWMTIwYTQwLDQwLDAsMCwxLDQwLTQwSDI0MS4yVjM5LjNMMjAwLDBaTTE2MCw1OUg3OS41NlY1Mi44MkgxNjBabTQwLTEzLjUySDc5LjU2VjM5LjNIMjAwWiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iNzkuNTYiIHk9IjM5LjMiIHdpZHRoPSIxMjAuNDQiIGhlaWdodD0iNi4xNiIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTYwMCwxOTBWMTYwaDgwVjEyMEgxMjBWNDAwSDY4MFYzNjBINjAwVjMyMGg4MFYyODBINjQwdjBINjAwVjI0MGg4MFYyMDBINjAwWk00MjAsMjQwaDQwVjM2MEg0MjBWMjQwWm0tNDAsODB2NDBIMzQwVjI4MGg0MFpNMzAwLDIwMFYzNjBIMjYwVjIwMGg0MFoiLz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9Ijc5LjU2IiB5PSI1Mi44MiIgd2lkdGg9IjgwLjQ0IiBoZWlnaHQ9IjYuMTYiLz48cmVjdCBjbGFzcz0iY2xzLTkiIHg9IjI0MC4wMSIgeT0iMzU3Ljk5IiB3aWR0aD0iMjQxLjU5IiBoZWlnaHQ9IjQiLz48cGF0aCBjbGFzcz0iY2xzLTEwIiBkPSJNNjgwLDgwSDEyMGE0MCw0MCwwLDAsMC00MCw0MFY0NDBINzIwVjEyMEE0MCw0MCwwLDAsMCw2ODAsODBabTAsMTYwVjQwMEgxMjBWMTIwSDY4MFYyNDBaIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xMCIgcG9pbnRzPSI2MzkuOTkgMzE5Ljk5IDYzOS45OSAzMTkuOTggNjAwIDMxOS45OCA2MDAgMzE5Ljk5IDYwMCAzMzkuOTkgNjAwIDM1OS45OSA2MDAgMzYwIDYwMC4wMSAzNTkuOTkgNjM5Ljk5IDM1OS45OSA2NDAuMDEgMzU5Ljk5IDY0MC4wMSAzMTkuOTkgNjM5Ljk5IDMyMCA2MzkuOTkgMzE5Ljk5Ii8+PHJlY3QgY2xhc3M9ImNscy0xMCIgeD0iNTk5Ljk5IiB5PSIyNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzOS45OCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMTAiIHBvaW50cz0iNjM5Ljk5IDE5OS45OSA2MzkuOTkgMTkwIDYzOS45OSAxNjAgNjAwIDE2MCA2MDAgMTkwIDYwMCAxOTkuOTkgNjAwIDIwMCA2MzkuOTkgMjAwIDYzOS45OSAxOTkuOTkiLz48cmVjdCBjbGFzcz0iY2xzLTEwIiB4PSIxNjUuMTgiIHk9IjE0OSIgd2lkdGg9IjM0OS42NSIgaGVpZ2h0PSIxMC45OSIvPjwvc3ZnPg==" alt='vvss'/>
                    <Heading fontSize='20px' color="#101834">Prepare</Heading>
                    <Heading fontSize='16px' color="#101834">Build interactive presentations with the easy-to-use online editor. Add questions, polls, quizzes, slides, images, gifs and more to your presentation to create fun and engaging presentations.</Heading>
                </div>
                <div style={{textAlign:"center"}}>
                    <img style={{width:"285px", height:"162px"}} src="https://www.mentimeter.com/_next/static/media/engage.ba9959f7.svg" alt='vsv'/>
                    <Heading fontSize='20px' color="#101834">Engage</Heading>
                    <Heading fontSize='16px' color="#101834">Your audience uses their smartphones to connect to the presentation where they can answer questions. Visualize their responses in real-time to create a fun and interactive experience.</Heading>
                </div>
                <div style={{textAlign:"center"}}>
                    <img style={{width:"285px", height:"162px"}} src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDQ0Ny45OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxOTZjZmY7fS5jbHMtM3tmaWxsOiMxMDE4MzQ7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO30uY2xzLTV7ZmlsbDojMGQ2YjQ1O30uY2xzLTZ7ZmlsbDojZmY0MDNkO30uY2xzLTd7ZmlsbDojMDBkYTkwO30uY2xzLTh7ZmlsbDojZmZjNjM4O30uY2xzLTl7ZmlsbDojZmY4MGFiO308L3N0eWxlPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj48cmVjdCBjbGFzcz0iY2xzLTEiIHk9IjcyLjc2IiB3aWR0aD0iODAwIiBoZWlnaHQ9IjM3NS4yMyIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZT5NZW50aW1ldGVyX1dlYl9Ib21lcGFnZV8yMDIwPC90aXRsZT48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjM0Mi44NiIgeT0iMjc3LjU4IiB3aWR0aD0iMTk1LjciIGhlaWdodD0iMTY0Ljc4Ii8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSIzNDIuODYiIHk9IjI4Ny45NCIgd2lkdGg9IjE5NS43IiBoZWlnaHQ9IjE1NC40MSIvPjxnIGNsYXNzPSJjbHMtNCI+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNNjE1LDMxOS4xOGgwbDUzLjIyLDcwLjI2LDE2LjM4LDIxLjYzLDAsMCwyMy4wNiwzMC40NS4yMy4zVjI4OEExNTMuMjEsMTUzLjIxLDAsMCwwLDYxNSwzMTkuMThaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNNzA1LjI3LDEwMy4zMWE0Ni4xOCw0Ni4xOCwwLDEsMCwyLjYzLDE1LjM4QTQ2LjE3LDQ2LjE3LDAsMCwwLDcwNS4yNywxMDMuMzFaIi8+PHBvbHlnb24gY2xhc3M9ImNscy02IiBwb2ludHM9IjQ0Ni44NCAzNDguNTYgNDQ2Ljg0IDM3Ny41OSA0NDYuODQgMzgzLjg5IDQ0Ni44NCA0NDEuODcgNDc3LjYgNDQxLjg3IDQ3Ny42IDM4MC4zMyA0NzcuNiAzNDguNTYgNDYxLjY3IDM0OC41NiA0NDYuODQgMzQ4LjU2Ii8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNzA3LjY3LDQ0MS41NmwtMjMuMDYtMzAuNDUsMCwwTDY2OC4yLDM4OS40NSw2MTUsMzE5LjE5aDBhMTU0LjM2LDE1NC4zNiwwLDAsMC0zMC4xOSwzMC4zMywxNTMuNTgsMTUzLjU4LDAsMCwwLTI3LjcxLDYxLjU3QTE1NS4zLDE1NS4zLDAsMCwwLDU1NCw0NDEuODZINzA3LjlaIi8+PHBvbHlnb24gY2xhc3M9ImNscy03IiBwb2ludHM9IjQxNi4wNyAzODAuMyA0MTYuMDcgNDQxLjg3IDQ0Ni44MiA0NDEuODcgNDQ2LjgyIDM4My44IDQ0Ni44MiAzODAuMyA0NDYuNTEgMzgwLjMgNDE2LjA3IDM4MC4zIi8+PHJlY3QgY2xhc3M9ImNscy04IiB4PSIzODUuMjkiIHk9IjQxMS4wOCIgd2lkdGg9IjMwLjc2IiBoZWlnaHQ9IjMwLjc5Ii8+PHBvbHlnb24gY2xhc3M9ImNscy05IiBwb2ludHM9IjUyMy4yMyAxMDMuNDkgNDkyLjY0IDEzNC4wNyA0ODQuNjQgMTQyLjA3IDQ3Ny42IDE0OS4xMiA1MTUuODggMTg3LjQgNTIzLjIzIDE5NC43NSA1MjMuMjMgMTgwLjM1IDUyMy4yMyAxMzQuMDcgNTIzLjQyIDEzNC4wNyA1MjMuNDIgMTAzLjMxIDUyMy4yMyAxMDMuNDkiLz48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik0xNDEuMzcsMjg2LjI0QTMwLjc4LDMwLjc4LDAsMSwwLDE1My44OSwzMTEsMzAuNjgsMzAuNjgsMCwwLDAsMTQxLjM3LDI4Ni4yNFoiLz48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik0xMjMuMTIsMTY0LjhhMTUuMzYsMTUuMzYsMCwxLDAtMTUuMzgtMTUuMzZBMTUuMzYsMTUuMzYsMCwwLDAsMTIzLjEyLDE2NC44WiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI2MTkuMTIgMjUwLjY3IDU4NC43OSAyNTAuNjcgNTg0Ljc5IDI1Ny4xOSA2MTEuOTIgMjU3LjE5IDY3Ny4xMiAyNTcuMTkgNjc3LjEyIDI1MC42NyA2MTkuMTIgMjUwLjY3Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjU4NC43OSAyNjYuMDYgNTg0Ljc5IDI3Mi41OCA2MDIuODEgMjcyLjU4IDY0Ni4zNCAyNzIuNTggNjQ2LjM0IDI2Ni4wNiA2MDUuNjkgMjY2LjA2IDU4NC43OSAyNjYuMDYiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zMjYuMzMsMTM0LjA4SDIxNS40NXY5Mi4zM2g5Mi4zM3Y3LjdIMjE1LjQ1VjM0OS41Mmg5Mi4zM3Y3LjdIMjE1LjQ1djcuN0gyNzd2Ny42OUgyMTUuNDV2Ny42OUgxNTMuODl2NDkuMzFhMTIuMjQsMTIuMjQsMCwwLDAsMTIuMjMsMTIuMjNIMzI2LjMzYTEyLjI0LDEyLjI0LDAsMCwwLDEyLjIzLTEyLjIzVjE0Ni4zMUExMi4yMywxMi4yMywwLDAsMCwzMjYuMzMsMTM0LjA4Wk0yNzcsMjE4LjcySDI0Ni4yM1YyMTFoNjEuNTV2Ny42OVoiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMTUzLjg5IDIyNi40MSAxNDEuMzcgMjI2LjQxIDYxLjU2IDIyNi40MSA2MS41NiAyMzQuMTEgMTQxLjM3IDIzNC4xMSAxNTMuODkgMjM0LjExIDE1My44OSAyMjYuNDEiLz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjYxLjU2IiB5PSIyNDEuOCIgd2lkdGg9IjYxLjU2IiBoZWlnaHQ9IjcuNyIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTY2MS43MywxNjQuODVhNDYuMiw0Ni4yLDAsMCwxLTQzLjU0LTYxLjU0SDUyMy40MnY5MS42M2wtLjE5LS4xOVY0NDEuODhoNjEuNTZ2MEg1NTRhMTU1LjMsMTU1LjMsMCwwLDEsMy4wNy0zMC43OCwxNTMuNTgsMTUzLjU4LDAsMCwxLDI3LjcxLTYxLjU3QTE1My44NywxNTMuODcsMCwwLDEsNzA3LjksMjg4VjExOC42OUE0Ni4xNiw0Ni4xNiwwLDAsMSw2NjEuNzMsMTY0Ljg1Wk02NDYuMzQsMjcyLjU4SDU4NC43OXYtNi41Mmg2MS41NVptLTM0LjQyLTE1LjM5SDU4NC43OXYtNi41Mmg5Mi4zM3Y2LjUyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI1MjMuMjMgMTAzLjQ5IDUyMy40MiAxMDMuMzEgNTIzLjIzIDEwMy4zMSA1MjMuMjMgMTAzLjQ5Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzM0LjYyLDEyMy4ySDIxNS40NVY3Mi41M0gzMC43OFYzODAuM0gxNDEuMzd2NTZhMTYuNDYsMTYuNDYsMCwwLDAsMTYuNDYsMTYuNDZIMzM0LjYyYTE2LjQ2LDE2LjQ2LDAsMCwwLDE2LjQ2LTE2LjQ2VjEzOS42NkExNi40NSwxNi40NSwwLDAsMCwzMzQuNjIsMTIzLjJabS0xOTMuMjUsMTYzYTMwLjc3LDMwLjc3LDAsMSwxLTE4LjI1LTZBMzAuNzYsMzAuNzYsMCwwLDEsMTQxLjM3LDI4Ni4yNFptMTIuNTItNTkuODN2Ny43SDYxLjU2di03LjdoOTIuMzNaTTEyMy4xMiwyNDEuOHY3LjdINjEuNTZ2LTcuN1ptMC0xMDcuNzJhMTUuMzYsMTUuMzYsMCwxLDEtMTUuMzgsMTUuMzZBMTUuMzYsMTUuMzYsMCwwLDEsMTIzLjEyLDEzNC4wOFpNMzM4LjU2LDI2NS40MlY0MjkuNjFhMTIuMjQsMTIuMjQsMCwwLDEtMTIuMjMsMTIuMjNIMjc2LjU3djBIMjQ2djBIMTY2LjEyYTEyLjI0LDEyLjI0LDAsMCwxLTEyLjIzLTEyLjIzVjM4MC4zaDYxLjU2di03LjY5SDI3N3YtNy42OUgyMTUuNDV2LTcuN2g5Mi4zM3YtNy43SDIxNS40NVYyMzQuMTFoOTIuMzN2LTcuN0gyMTUuNDVWMTM0LjA4SDMyNi4zM2ExMi4yMywxMi4yMywwLDAsMSwxMi4yMywxMi4yM1YyNjUuNDJaIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI0Ni4yMiAyMTEuMDMgMjQ2LjIyIDIxOC43MiAyNzcgMjE4LjcyIDMwNy43OCAyMTguNzIgMzA3Ljc4IDIxMS4wMyAyNzcgMjExLjAzIDI0Ni4yMiAyMTEuMDMiLz48cmVjdCB5PSI0NDAuMzgiIHdpZHRoPSI4MDAuMjMiIGhlaWdodD0iNy42MiIvPjwvZz48L3N2Zz4=" alt='vav'/>
                    <Heading fontSize='20px' color="#101834">Follow-up</Heading>
                    <Heading fontSize='16px' color="#101834">Once your Mentimeter presentation is over, share and export your results for further analysis and even compare data over time to measure the progress of your audience.'</Heading>
                </div>
            </div>
            <br />
                <Button colorScheme='blue' variant='outline' borderRadius='none'>Explore features</Button>
        </div>
        <br />
        <br />
        <div style={{width:"90%",textAlign:"center",margin:"auto"}}>
            <Heading fontSize='32px' color="#101834">Millions of voices have<br/> already been heard</Heading>
            <br />
            <div style={{display:"flex",textAlign:"center"}}>
                <div style={{textAlign:'center'}}>
                    <Heading fontSize='48x' color="#101834">280 M</Heading>
                    <hr />
                    <Heading fontSize='20px' color="#101834">Voters</Heading>
                </div>
                <Spacer/>
                <div>
                    <Heading fontSize='48x' color="#101834">14 M</Heading>
                    <hr />
                    <Heading fontSize='20px' color="#101834">Presenters</Heading>
                </div>
                <Spacer/>
                <div>
                    <Heading fontSize='48x' color="#101834">220 +</Heading>
                    <hr />
                    <Heading fontSize='20px' color="#101834">Countries & territories</Heading>
                </div>
            </div>
        </div>

        <div style={{display:'flex',textAlign:'center',margin:'auto',width:'90%'}}>
            <div><img style={{width:"80%",height:'70%'}} src="https://static.mentimeter.com/content-web/prod/_next/static/images/andrew-hollo-0945db78aec2febf69d18b614a67fe32.png" alt='vcv'/></div>
            {/* <Spacer/> */}
            <div style={{marginTop:'100px',lineHeight:'20px',width:'30%'}}>
                <Heading fontSize='20px' color="#101834">"I can pose a question easily and within a minute or two, have aggregated responses from every participant."</Heading>
                <br />
                <Heading fontSize='16px' color="blue">Andrew Hollo, Workwell Consulting</Heading>
                <br />
                <Button colorScheme='blue' variant='outline' borderRadius='none'>Explore More Stories</Button>
            </div>
        </div>
        <div>
            <div style={{backgroundColor:"#196cff"}}>
                <Heading ontSize='32px' color="#101834">Impress with interactive<br/> presentations</Heading>
                <br />
                <Button colorScheme='blue' variant='outline' borderRadius='none'>Get Started</Button>
                <br />
                <br />
                <br />
            </div>    
        </div>
        <br />
        <br />
        <div style={{width:"90%",textAlign:"center",margin:"auto",display:'flex'}}>
            <div>
                <img style={{width:"250px", height:"25px"}} src="data:image/png;base64,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" alt="logo"/>
            </div>
            <Spacer/>
            <div>
                <Heading fontSize='16px' color="#101834">Features</Heading>
                <p>Overview</p>
                <p>Live Polling</p>
                <p>Word Cloud</p>
                <p>Quiz</p>
                <p>Q&A</p> 
                <p>Powerpoint</p>
                <p>Translations</p>
            </div>
            <Spacer/>
            <div>
                <Heading fontSize='16px' color="#101834">Resources</Heading>
                <hr />
                <p>Blog</p>
                <p>Solutions</p>
                <p>Templates</p>
                <p>Webinars</p>
                <p>Compaigns</p> 
                <p>Stories</p>
            </div>
            <Spacer/>
            <div>
                <Heading fontSize='16px' color="#101834">Details</Heading>
                <hr />
                <p>Terms of use</p>
                <p>Policies</p>
                <p>Accessibility</p>
                <p>Help Center</p>
                <p>Requirements</p>
            </div>
            <Spacer/>
            <div>
                <Heading fontSize='16px' color="#101834">About us</Heading>
                <hr />
                <p>Press info</p>
                <p>The Team</p>
                <p>Jobs</p>
                <p>Contect us</p>
            </div>
            <Spacer/>
            <div>
                <div> 
                    <img style={{width:'100px'}} src="https://images.ctfassets.net/rvt0uslu5yqp/JPNan1L2EJNCdjd6fW7R1/52f5e66f8167312dee85d81f7c015e78/Mentimeter_Branding_Logo_2020_RGB-11.png" alt='vv'/>
                </div>
                <div style={{display:'flex'}}>
                    <img style={{width:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3eCW3OnuBtcJMsS9skHDbDdTOMhmxhrOCg&usqp=CAU" alt="" />
                    <img style={{width:'30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAAvLy8MDAwbGxtCQkLS0tKPj4+Li4vh4eGHh4cgICDa2tpjY2P6+vqlpaV2dnY7OzuwsLDs7Oy6urpQUFBtbW0nJyfNzc3Gxsa0tLQ9PT1ISEiVlZU1NTUsLCyBgYFXV1cWFhZfX1+enp7w8PB6enqJSqg0AAAD80lEQVR4nO2d61rjIBBAu602qa29V2utva36/o+4u99u1TYMkERgkj3nN6ScT0MGGKDTAQAAAAAAAAAAAAAAaBLj5WE17Kni8Zg/fZvf6P6HUu7G3+E3Vuv3h3l9wVFqBwcPdQX7qQ2c1FRcpG6/B5Naho+pm+/DWw3BSerGezGtYZi67Z5U/2asUzfdk2Vlwyx10z05VDY8pm66J6vKht3UTfdkV9nwJnXTPdm33rCLIYbqwRBD/WCIoX4wxFA/GNY0vJ88jUb9ZTYL7SET0vC0+Sy9OESQMRLQMLssv9jH8CkSzrC4vHWM4FMkmKFp/e45jtMloQwzU5VxJKkLAhn2zHVSLAQEMpTWJmNpfSGQoVTpLpbXJ2EMf0qVEqyphjF8FWtFE/sgjKGc6nGKZnYmjGFfrLWNZnYmtuEqmtmZ2P+l8cOaMIZyqk40sQ/CGL5LlRIkqIQxFIK2TmcTTeyDQDGN1NXE70pDGQpBTYo8uFCjJ/MfMcUAMdgI2JSo8xLH6ZJghs/FGvM4SleEm6fZX+fMJUoxCjmbeJH52N9FsDERdkY47/99HQeTdFPC4Wf1991eUAMXrFtgqB8MMdQPhhjGa+huV22JtQGGq9f14vyji/Wk7G65MIbTLDeRXc2Wmkvl2Zcwb7cpDjTX0/SGI6HO1RBYevTwXGAmzPeMX1MbShNRV0NE16M3UoHf5C0wnNm3nQ2Ghh9ulOG9swV+fY5aQ59ddV4ryloN/ba3+igqNdx6NuKhsYberXDPb6k0FL+nRd6aaVhmA7YzCUmlYSlc8XjzDV37kZtv2HFMNrfAcNl6Q0f2QxsM7ZFNGwzta+e6DZeH7al3s8rX9mKNNfxa2jYYtkeneg2vUlGPlqLWLB21hoVvgCEx4MygiYZPxYdaxsQNNDTmv8kjDtsZHUoNjalF8rDY1tXoNBQCsYFU3pbIotNQGBG9SOVtg0SVhlKQMpMq2IJvlYbinL1UwdDz6jYUOw6pN7VtVFFpKObZSud22WJvlYbiYX7SFJUtqFFpKK65SJ1p4wzFR+etN7zDEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBDD/89QzInSkzE07xsZXR33MBKKiY9+EGrEzy/VBIYY6gdDDPWDIYb6wRBD/WAok+SKsQrcVjb0OKJJBe5T0STETYLKEDeeOrFugleEfKuPk0Q3NpaluqDr5BslGK8p9MW2z18Npns2vGnCm1jmYDQDaa7kKIPv6YQi2r8Yw7qCSe5vKkG31kv4j4Hi7ka8Oawky1TXqzg4+h8v6WQwmW5vVbF6n9sPIQYAAAAAAAAAAAAAANDGL7YZd1brXhwbAAAAAElFTkSuQmCC" alt="" />
                    <img style={{width:'30px'}} src="data:image/png;base64,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" alt="" />
                    <img style={{width:'30px'}} src="data:image/png;base64,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" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;