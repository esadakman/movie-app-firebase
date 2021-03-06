import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GoogleButton from "react-google-button";
import Flex, { FormButton } from "../components/globalStyles/Flex";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { GoogleRegister, register } from "../auth/firebase";
import { Button } from "@mui/material";
import { toastWarn } from "../helpers/ToastNotify";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "85vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    height: "1rem",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const classes = useStyles();
  // const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //

  // const { register } = UserAuth();
  const navigate = useNavigate();
  //
  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    if (email && password && firstName && lastName) {
      await register(email, password, displayName, navigate);
    } else {
      toastWarn("Please fill out all fields.");
    }
    // const user = register(email, password, displayName, navigate);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSignUp}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  size="small"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  size="small"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  size="small"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
              style={{ width: "100%", borderRadius: "1px" }}
              // className={classes.submit}
            >
              Sign Up
            </Button>
            <Flex style={{ marginBottom: "1rem" }}>
              <GoogleButton
                // style={{ margi: "0" }}
                label="Sign up with Google"
                onClick={() => {
                  GoogleRegister(navigate);
                }}
              />
            </Flex>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login" component={RouterLink}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;

// const MadeWithLove = () => (
//   <Typography variant="body2" color="textSecondary" align="center">
//     {"Built with love by the "}
//     <Link color="inherit" href="https://material-ui.com/">
//       Material-UI
//     </Link>
//     {" team."}
//   </Typography>
// );

// useEffect(() => {
//   signUp(firstName, lastName, email, password)
//     .then(() => {
//       console.log("signed up");
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }, []);

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const userInfo = {
//   username: `${firstName}  ${lastName}`,
//   email: `${email}`,
//   password: `${password}`,
// };
// const handleSubmit = useCallback(e) => {
//   e.preventDefault();
//   // console.log(userInfo);
// };
// const handleSignUp = (e) => {
// e.preventDefault();
// const { firstName, lastName, email, password } = event.target.elements;
// console.log(firstName);
// };

// import Box from "@material-ui/core/Box";
// import { signUp } from "../config/firebase";
