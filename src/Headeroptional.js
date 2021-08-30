import { AppBar, Toolbar, Typography, Button,Grid } from "@material-ui/core";
import {React} from "react";
import { makeStyles } from "@material-ui/core";
import {BrowserRouter, Link} from "react-router-dom";
import "./index.js";

const headersData = [
    {
      label: "Section 1",
      href: "/SectionOne",
    },
    {
      label: "Section 2",
      href: "/SectionTwo",
    },
    {
      label: "Section 3",
      href: "/SectionThree",
    },
  ];

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#400CCC",
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },    
  }));
  

export default function Header() {

     const { header, logo, menuButton } = useStyles();
  const displayDesktop = () => {
    return( <Toolbar><BrowserRouter> {LOGO}<Grid container justify="flex-end"><div className="toolbar">{getMenuButtons()}</div></Grid></BrowserRouter> </Toolbar>);
  };

  const LOGO = (    
    <Typography variant="h6" component="h1" className={logo}>
    <BrowserRouter>Heading</BrowserRouter>
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <BrowserRouter><Link>
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: Link,
            className: menuButton
          }}
        >
         {label}
        </Button></Link>
        </BrowserRouter>
      );
    });
  };



  
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}



