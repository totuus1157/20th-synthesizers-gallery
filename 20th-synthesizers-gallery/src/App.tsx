import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import HeadsetIcon from "@material-ui/icons/Headset";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Modal from "@material-ui/core/Modal";
import "fontsource-roboto";
/* import Model from "./model"; */

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/totuus1157/20th-synthesizers-gallery"
      >
        Totuus1157
      </Link>{" "}
      {"All Rights Reserved."}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  const modelList = [
    {
      name: "MOOG minimoog",
      image: "minimoog.jpg",
      movie: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2xsHN3NTyk0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },
    { name: "ARP Odyssey", image: "odyssey.jpg" },
    { name: "SCI Prophet-5", image: "prophet5.jpg" },
    { name: "Oberheim OB-8", image: "ob8.jpg" },
    { name: "ROLAND JUPITER-6", image: "jupiter6.jpg" },
    { name: "YAMAHA DX7IID", image: "dx7IId.jpg" },
    { name: "Oberheim matrix12", image: "matrix12.jpg" },
    { name: "ROLAND D-50", image: "d50.jpg" },
    { name: "KORG M1", image: "m1.jpg" },
    { name: "YAMAHA SY99", image: "sy99.jpg" },
    { name: "KORG WAVESTATION EX", image: "wavestation.jpg" },
    { name: "YAMAHA VL1", image: "vl1.jpg" },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HeadsetIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            20th century synthesizer gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Synthesizer gallery
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              ２０世紀音楽シーンを彩ったシンセサイザーの名機たち
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {modelList.map((modelItem) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={modelItem.image}
                      title={modelItem.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" component="h2" align="center">
                        {modelItem.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End Footer */}
    </React.Fragment>
  );
};

export default App;
