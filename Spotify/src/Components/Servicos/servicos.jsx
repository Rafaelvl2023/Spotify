import { Container, Grid } from "@mui/material";
import './servicos.css'

const Servicos = () => {

    return (
        <Container className="section2">
            <Grid container spacing={0}>
                <Grid className="fotos" item xs={12} md={6}>
                    <Grid container spacing={3}>
                        <Grid className="imagem" item xs={12} md={6}>
                            <img className="ajuste" src="../../../img/img1.jpg" alt="" />
                        </Grid>
                        <Grid className="imagem" item xs={12} md={6}>
                            <img src="../../../img/img2.jpg" alt="" />
                        </Grid>
                        <Grid className="imagem" item xs={12} md={6}>
                            <img className="ajuste" src="../../../img/img3.jpg" alt="" />
                        </Grid>
                        <Grid className="imagem" item xs={12} md={6}>
                            <img src="../../../img/img4.jpg" alt="" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid className="servicos" xs={12}>
                        <h1 className="TituloServicos">O que o Spotify tem?</h1>
                        <div className="servico1">
                            <h2>Músicas</h2>
                            <h4>O Spotify tem milhões de músicas. Escute seus sons favoritos, descubra novas músicas e reúna seus favoritos em um só lugar.</h4>
                        </div>
                        <div className="servico2">
                            <h2>Playlists</h2>
                            <h4>No Spotify você encontra uma playlist para cada momento. Todas feitas por fanáticos e especialistas da música.</h4>
                        </div>
                        <div className="servico3">
                            <h2>Novos lançamentos</h2>
                            <h4>Escutes novos lançamentos de singles e álbuns da semana e veja o que está bombando no top 50.</h4>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Servicos;

