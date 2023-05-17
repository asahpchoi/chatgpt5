import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Paper from "@mui/material/Paper";
import { v1 as uuidv1 } from "uuid";
import { Cards } from "./Cards";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

function Content() {
  const [cards, setCards] = React.useState([
    { id: uuidv1(), type: "transcript", content: "XXX" },
    { id: uuidv1(), type: "summary", content: "XXX" }
  ]);
  const [recording, setRecording] = React.useState(false);

  function removeCard(id) {
    let newCards = [...cards].filter((c) => c.id !== id);
    setCards(newCards);
  }
  return (
    <>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        style={{ height: "100vh" }}
        maxWidth
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Paper
          elevation={2}
          maxWidth
          style={{
            height: "100%",
            backgroundColor: "#EEEEEE",
            overflowY: "auto",
            width: "100vw",
            alignContent: "start",
            margin: 0
          }}
        >
          <Cards cards={cards} removeCard={removeCard} />
        </Paper>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Record"
            icon={!recording ? <MicIcon /> : <MicOffIcon />}
            onClick={() => {
              let newCards = [...cards];
              newCards.push({
                id: uuidv1(),
                type: "transcript",
                content: "XXX"
              });
              console.log(newCards);
              setCards(newCards);
            }}
          />
        </BottomNavigation>
      </Stack>
    </>
  );
}

export { Content };
