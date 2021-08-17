import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hamburguer from '../../Assets/Img/hamburguer2.png'
import { HamburguerIcon } from './styles';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <HamburguerIcon src={Hamburguer} alt="Icone Menu"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href='#top'>Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='#middleMobile'>Sobre nós</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='#bottom'>Contato</a></MenuItem>
      </Menu>
    </div>
  );
}