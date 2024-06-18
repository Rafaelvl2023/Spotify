import { Container, Grid } from "@mui/material";
import './recursos.css';

const Recursos = () => {

    return (
        <div>
            <div className="box3">
                <Grid container>
                    <Grid item xs={12}>
                        <img className="imagemPublicaRecursos" src="../../../img/capa.png" alt="" />
                        <img className="imagemFundoRecursos" src="../../../img/ruido.png" alt="" />
                    </Grid>
                </Grid>
                <Container className="positionClass">
                    <Grid container spacing={2} alignItems="center">
                        <Grid className="textos" item md={4} xs={12}>
                            <div className="TitleRecursos">
                                <h1>Fácil</h1>
                            </div>
                            <div className="textRecursos">
                                <h2>Buscar</h2>
                                <h4>Já sabe o que escutar? É só procurar e apertar o play.</h4>
                            </div>
                            <div className="textRecursos">
                                <h2>Navegar</h2>
                                <h4>Veja os novos lançamentos, o que está bombando nas paradas e as melhores playlists para o seu momento.</h4>
                            </div>
                            <div className="textRecursos">
                                <h2>Descobrir</h2>
                                <h4>Curta músicas novas toda segunda-feira com uma playlist personalizada pra você. Ou relaxe e curta uma das rádios.</h4>
                            </div>
                        </Grid>
                        <Grid item md={8} xs={12} className="iphone">
                            <img src="../../../img/iphone1.png" alt="" />
                            <img src="../../../img/iphone2.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Recursos;





