import Box from '@mui/material/Box'



const SignIn=()=>{
     
  return ( 

    <Box
    sx={{
      alignContent: 'center',
      width: 300,
      height: 300,
      backgroundColor: ' #010412',
      '&:hover': {
        backgroundColor: '#010410',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  />
    
  );
};
export default SignIn;