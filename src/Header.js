import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Home from './home';

function Header(obj) {
  const { children, value, index, ...other } = obj;

  return (
    <div
      role="tabpanel"

      hidden={value !== index}
      id={`sections-${index}`}
      aria-labelledby={`section-${index}`}
      {...other}
    >
      {value === index && (
        <Box bgcolor="white" p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function Page(index) {
  return {
    id: `section-${index}`,
    'aria-controls': `sections-${index}`,
  };
}

function Link(obj) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...obj}
      />
    );
  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.red",  

  },
  })
);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
      
    <div className={classes.root} >
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
        <Link label="Home" href ="/home" {...Page(0)} />
        <Link label="Starters" href ="/SectionOne" {...Page(1)} />
        <Link label="Main course" href ="/SectionTwo" {...Page(2)} />
        <Link label="Deserts" href ="/SectionThree" {...Page(3)} />
        </Tabs>
      </AppBar>
      <Header value={value} index={0}>
        <Home />
      </Header>
      <Header value={value} index={1}>
        <SectionOne />
      </Header>
      <Header value={value} index={2}>
        <SectionTwo />
      </Header>
      <Header value={value} index={3}>
        <SectionThree />
      </Header>
    </div>
    
  );
}