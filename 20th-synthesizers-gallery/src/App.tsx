import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import HeadsetIcon from "@material-ui/icons/Headset";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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
import ReactPlayer from "react-player/youtube";
import "fontsource-roboto";
import Copyright from "./Copyright";

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
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  })
);

const App: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [selectedId, setSelectedId] = useState(1);
  const [open, setOpen] = useState(false);

  const handleOpen = (id: number): void => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  interface ModelList {
    id: number;
    name: string;
    image: string;
    videoUrl: string;
  }

  const modelList: Readonly<ModelList[]> = [
    {
      id: 1,
      name: "MOOG minimoog",
      image: "minimoog.jpg",
      videoUrl: "https://www.youtube.com/embed/2xsHN3NTyk0",
    },
    {
      id: 2,
      name: "ARP Odyssey",
      image: "odyssey.jpg",
      videoUrl: "https://www.youtube.com/embed/g4Q15TXnBNg",
    },
    {
      id: 3,
      name: "SCI Prophet-5",
      image: "prophet5.jpg",
      videoUrl: "https://www.youtube.com/embed/3T2UJHhj0jE",
    },
    {
      id: 4,
      name: "Oberheim OB-8",
      image: "ob8.jpg",
      videoUrl: "https://www.youtube.com/embed/0usuXTksRTE",
    },
    {
      id: 5,
      name: "ROLAND JUPITER-6",
      image: "jupiter6.jpg",
      videoUrl: "https://www.youtube.com/embed/xEoYmoiEETo",
    },
    {
      id: 6,
      name: "YAMAHA DX7IID",
      image: "dx7IId.jpg",
      videoUrl: "https://www.youtube.com/embed/xIn-n2ebENo",
    },
    {
      id: 7,
      name: "Oberheim matrix12",
      image: "matrix12.jpg",
      videoUrl: "https://www.youtube.com/embed/nZ_tj1aQsnU",
    },
    {
      id: 8,
      name: "ROLAND D-50",
      image: "d50.jpg",
      videoUrl: "https://www.youtube.com/embed/-x1fKX-tzWg",
    },
    {
      id: 9,
      name: "KORG M1",
      image: "m1.jpg",
      videoUrl: "https://www.youtube.com/embed/f6TYxRfeZos",
    },
    {
      id: 10,
      name: "YAMAHA SY99",
      image: "sy99.jpg",
      videoUrl: "https://www.youtube.com/embed/csHut1_F4eI",
    },
    {
      id: 11,
      name: "KORG WAVESTATION EX",
      image: "wavestation.jpg",
      videoUrl: "https://www.youtube.com/embed/JWjGIaQZVvI",
    },
    {
      id: 12,
      name: "YAMAHA VL1",
      image: "vl1.jpg",
      videoUrl: "https://www.youtube.com/embed/OYWxCrz3vmQ",
    },
  ];

  const targetModel = modelList.find((model): boolean => {
    return model.id === selectedId;
  })!;

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
            {modelList.map(
              (modelItem): JSX.Element => {
                return (
                  <Grid item key={modelItem.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardActionArea
                        onClick={(): void => {
                          setSelectedId(modelItem.id);
                          setOpen(true);
                        }}
                      >
                        <CardMedia
                          className={classes.cardMedia}
                          image={modelItem.image}
                          title={modelItem.name}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography
                            variant="h5"
                            component="h2"
                            align="center"
                          >
                            {modelItem.name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              }
            )}
          </Grid>
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={classes.paper}>
              <CardMedia
                component="iframe"
                title={targetModel.name}
                src={targetModel.videoUrl}
              />
              <h2 id="simple-modal-title">{targetModel.name}</h2>
              <p id="simple-modal-description">{targetModel.videoUrl}</p>
            </div>
          </Modal>
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
