import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import "./nav.css";
import { Container, Grid } from "@mui/material";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="principal">
            <Container>
                <Grid container spacing={3}>
                    <Grid className="icon" item xs={6} md={2}>
                        <img style={{ width: "40px" }} src="../../../img/icon.png" alt="Spotify Icon" />
                        <h2 className="iconText">Spotify</h2>
                    </Grid>
                    <Grid className="links" item xs={6} md={10}>
                        <div className="desktopLinks">
                            <a href=""><b>Premium</b></a>
                            <a href=""><b>Ajuda</b></a>
                            <a href=""><b>Baixar</b></a>
                            <h2>|</h2>
                            <a href=""><b>Inscrever-se</b></a>
                            <a href=""><b>Entrar</b></a>
                        </div>
                        <div className="menuIcon" onClick={toggleMenu}>
                            <DehazeIcon style={{ color: 'aliceblue', fontSize: '25px' }} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className={`mobileLinks ${menuOpen ? 'show' : ''}`}>
                <a href=""><b>Premium</b></a>
                <a href=""><b>Ajuda</b></a>
                <a href=""><b>Baixar</b></a>
                <a href=""><b>Inscrever-se</b></a>
                <a href=""><b>Entrar</b></a>
            </div>
        </div>
    );
};

export default Navigation;


