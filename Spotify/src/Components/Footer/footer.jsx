import { Container, Grid } from '@mui/material';
import './footer.css'

const Footer = () => {

    return (

        <div className='footer'>
            <Container>
                <Grid container>
                    <Grid className='rodape' item md={2} xs={12}>
                        <img style={{ height: '35px', width: '35px' }} src="../../../img/icon.png" alt="" />
                        <h3 className='titleFooter'>Spotify</h3>
                    </Grid>
                    <Grid className='navBar' item md={2} xs={12}>
                        <div>
                            <h4 className='titleLink'>Company</h4>
                            <ul>
                                <h4><a href="">Sobre</a></h4>
                                <h4><a href="">Empregos</a></h4>
                                <h4><a href="">Imprensa</a></h4>
                                <h4><a href="">Novidades</a></h4>
                            </ul>
                        </div>
                    </Grid>
                    <Grid className='navBar' item md={2} xs={12}>
                        <div>
                            <h4 className='titleLink'>Comunidades</h4>
                            <ul>
                                <h4><a href="">Artistas</a></h4>
                                <h4><a href="">Desenvolvedores</a></h4>
                                <h4><a href="">Marcas</a></h4>
                            </ul>
                        </div>
                    </Grid>
                    <Grid className='navBar' item md={2} xs={12}>
                        <div>
                            <h4 className='titleLink'>Links uteis</h4>
                            <ul>
                                <h4><a href="">Ajuda</a></h4>
                                <h4><a href="">Presentes</a></h4>
                                <h4><a href="">Player da web</a></h4>
                            </ul>
                        </div>
                    </Grid>
                    <Grid className='redesSociais' item md={4} xs={12}>
                        <a href=""><img style={{ height: '40px', width: '40px', marginRight: '15px' }} src="../../../img/instagram.png" alt="" /></a>
                        <a href=""><img style={{  height: '40px', width: '40px', marginRight: '15px' }} src="../../../img/twitter.png" alt="" /></a>
                        <a href=""><img style={{  height: '40px', width: '40px'}} src="../../../img/facebook.png" alt="" /></a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;

