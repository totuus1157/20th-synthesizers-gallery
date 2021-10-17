import React, { useState } from "react";
import modelList from "./modelList";
import AppBar from "@material-ui/core/AppBar";
import HeadsetIcon from "@material-ui/icons/Headset";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
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
    table: {
      minWidth: 150,
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

  const handleClose = (): void => {
    setOpen(false);
  };

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
              ２０世紀音楽シーンを彩った
              <Hidden smUp>
                <br />
              </Hidden>
              シンセサイザーの名機たち
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
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableBody>
                    <TableRow key={targetModel.id}>
                      <TableCell component="th" scope="row">
                        価格（円）
                      </TableCell>
                      <TableCell align="right">{targetModel.price}</TableCell>
                    </TableRow>
                    <TableRow key={targetModel.id}>
                      <TableCell component="th" scope="row">
                        発売年
                      </TableCell>
                      <TableCell align="right">
                        {targetModel.dateProduced}
                      </TableCell>
                    </TableRow>
                    <TableRow key={targetModel.id}>
                      <TableCell component="th" scope="row">
                        音源方式
                      </TableCell>
                      <TableCell align="right">
                        {targetModel.oscillatorType}
                      </TableCell>
                    </TableRow>
                    <TableRow key={targetModel.id}>
                      <TableCell component="th" scope="row">
                        同時発音数
                      </TableCell>
                      <TableCell align="right">
                        {targetModel.polyphony}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <p id="simple-modal-description">{targetModel.description}</p>
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
