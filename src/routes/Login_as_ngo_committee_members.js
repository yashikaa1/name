import { useNavigate } from "react-router-dom";
import { FacebookLoginButton,GoogleLoginButton } from "react-social-login-buttons";
import {
  TextField,
  Box,
  Typography,
  Autocomplete,
  Button,
} from "@mui/material";
//import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Login_as_ngo_committee_members = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/navbar', {
      state: { user: { type: 'committee' } } 
    });
  }
    return (
      

  
  <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        <Box sx={{ width: "50%" }} bgcolor="white">
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              mt: "20px",
            }}
          >
            Login as Committee
          </Typography>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: "10px", margin: "20px" }}>
          console.log("Login button before clicked");
            <Button  onClick ={handleLogin} variant="contained" fullWidth sx={{ padding: "15px" }}>
              Login as committee
            </Button>
            console.log("Login button after clicked");
          </Box>
      <Typography align="center">

      <a href="#">Forgot Password?</a>
      </Typography>
      {/* <p>
        Don't have an account? <a href="#">Sign up here</a>
      </p>
           */}
      <Typography align="center">
        <p>OR Sign In with:</p>
      </Typography>
      
          <Box sx={{ width: '100%',
          // display: "flex",
          // justifyContent: "center",
          p: "20px", }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
              <GoogleLoginButton onClick={() => alert("Hello")} />
              </Grid>
              <Grid item xs={6}>
              <FacebookLoginButton onClick={() => alert("Hello")} />
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Box>


    );
};
export default Login_as_ngo_committee_members;