import "./principal.css";
import { Grid } from "@mui/material";

const Principal = () => {
    return (
        <div className="imagemPrincipal">
            <Grid container>
                <img className="imagemPublica" src="../../../img/capa.png" alt="" />
                <img className="imagemFundo" src="../../../img/ruido.png" alt="" />
            </Grid>
            <div className="textoCentralizado">
                <Grid>
                    <h1>Música para todos</h1>
                </Grid>
                <Grid container spacing={1} style={{ marginTop: "70px" }}>
                    <Grid item xs={12} md={6}>
                        <a href=""><button className="botao1" style={{ background: "linear-gradient(to bottom, rgba(102, 74, 255, 0.6), rgba(85, 0, 248, 0.9))", color: "white"}}><b>Aproveite o Spotify Free</b></button></a>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <a href=""><button className="botao2"><b>Obter Spotify Premium</b></button></a>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Principal;


