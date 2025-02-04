import { useState } from "react";
import { IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { RiArrowDownSLine } from "react-icons/ri";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  if (!isMobile) return null;

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{ "& .MuiDrawer-paper": { backgroundColor: "#373737" } }}>
        <List sx={{ width: '50vw', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4vw', fontFamily: '"Overpass Mono", serif', fontSize: '3vw' }}>
          <h5 style={{marginTop: '2vw', fontSize: '6vw'}}>Menu</h5>
          <button href='#' style={{marginTop: '2vw'}}><span style={{color: '#D35858'}}>#</span>Projects</button>
          <button href='#'><span style={{color: '#D35858'}}>#</span>Skills</button>
          <button href='#'><span style={{color: '#D35858'}}>#</span>About-me</button>
          <button href='#'><span style={{color: '#D35858'}}>#</span>Contacts</button>
          <button id="lang-burger" style={{display: 'flex', alignItems: 'center',}}>Eng<RiArrowDownSLine  /></button>
        </List>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
