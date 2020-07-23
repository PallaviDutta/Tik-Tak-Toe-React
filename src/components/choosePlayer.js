// import React, { Component } from "react";

// class Player extends Component {
//   handleForm(e) {
//     e.preventDefault();
//     this.props.player(e.target.player.value);
//   }
//   render() {
//     return (
//       <form onSubmit={(e) => this.handleForm(e)}>
//         <label>
//           Player X
//           <input type="radio" name="player" value="X" />
//         </label>
//         <label>
//           Player O
//           <input type="radio" name="player" value="O" />
//         </label>
//         <input type="submit" value="Start" />
//       </form>
//     );
//   }
// }

// export default Player;

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: 14,
  },
  marginLeftProp: {
    marginLeft: 5,
  },
  textField: {
    marginTop: theme.spacing(3.5),
    marginBottom: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    minWidth: 240,
    marginTop: theme.spacing(3.5),
    marginBottom: theme.spacing(1),
  },
}));

function Player(props) {
  const classes = useStyles();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [finalPlayer1, setFinalPlayer1] = useState("player1");
  const [finalPlayer2, setFinalPlayer2] = useState("player2");
  const [playerValue1, setPlayerValue1] = useState();
  const [playerValue2, setPlayerValue2] = useState();

  async function setStartingPlayer(e) {
    setFinalPlayer1(`${player1}`);
    setFinalPlayer2(`${player2}`);
    //e.preventDefault();
    //this.props.player({ playerValue1 });

    // setPlayerValue1(e.target.value);
    // setPlayerValue2(e.target.value);
  }
  const handleChangeStatus = (e) => {
    setPlayerValue1(e.target.value);
    // setPlayerValue2(e.target.value);
  };

  function handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }

  return (
    <div>
      {/* Edit Player Name and Choose X or 0 */}
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <TextField
            id="player1"
            label="Enter Player1 (X)"
            defaultValue="Player1"
            variant="outlined"
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <FormControl component="fieldset">
            <FormLabel className={classes.root} component="legend">
              Choose X or 0
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
              className={classes.marginLeftProp}
            >
              <FormControlLabel
                value="X"
                control={<Radio color="primary" />}
                label="X"
              />
              <FormControlLabel
                value="0"
                control={<Radio color="primary" />}
                label="0"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={5}>
          <TextField
            id="player2"
            label="Enter Player2 (0)"
            defaultValue="Player2"
            variant="outlined"
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <FormControl component="fieldset">
            <FormLabel className={classes.root} component="legend">
              Choose X or 0
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
              className={classes.marginLeftProp}
            >
              <FormControlLabel
                value="X"
                control={<Radio color="primary" />}
                label="X"
              />
              <FormControlLabel
                value="0"
                control={<Radio color="primary" />}
                label="0"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
            onClick={setStartingPlayer}
          >
            Start
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
      {/* Edit Player Name and Choose X or 0 */}

      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.margin}
          >
            {finalPlayer1}
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.margin}
          >
            {finalPlayer2}
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default Player;
