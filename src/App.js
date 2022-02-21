import React, { useState } from "react";
import "./App.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Checkbox from "@mui/material/Checkbox";

import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import TextField from "@mui/material/TextField";
import { SettingsInputAntenna } from "@mui/icons-material";

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState([]);

  const saveInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    setTask((prevState) => [...task, prevState]);
  };

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        border: "3px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#FAF9F6",
          margin: "auto",
          borderRadius: "8px",
        }}
      >
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={task} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem
          secondaryAction={
            <IconButton onClick={addTask} edge="end" aria-label="add">
              <AddCircleIcon />
            </IconButton>
          }
        >
          <TextField
            label="Add task name..."
            id="outlined-size-small"
            defaultValue=""
            size="small"
            onChange={saveInput}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default App;
