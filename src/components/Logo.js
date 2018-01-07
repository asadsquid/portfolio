import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import logo from '../images/logo.png'

const styles = theme => ({

  group: {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    fontFamily: "AvenirNext-UltraLight, Avenir Next",
    fontWeight: "200",
    fill: "#1E2019",
  },

  svg: {
    height: theme.svgSizing.mainLogo,
  },

  hi: {
    fill: theme.palette.p1.textAccent,
  },
});


class ContentBox extends React.Component {

  render() {
    const { classes } = this.props;

    return (

     <div className={ classes.logo }>

<svg className={classes.svg} preserveAspectRatio="xMidyMid meet" viewBox="0 0 467 369" version="1.1">
  <g className={classes.group} transform="translate(-34.000000, -94.000000)">
    <text className={classes.hi} id="HI" font-size="324" letter-spacing="-0.00450000027">
      <tspan x="0" y="324">HI</tspan>
    </text>
    <text id="IM" transform="translate(404.000000, 209.500000) rotate(90.000000) translate(-404.000000, -209.500000) " font-size="247" letter-spacing="-0.00686111115">
      <tspan x="263" y="288">IM</tspan>
    </text>
    <text id="CUONG" font-size="125" letter-spacing="-0.00173611124">
      <tspan x="25" y="460">CUONG</tspan>
    </text>
  </g>
</svg>

       {/* <img src={logo} /> */}
     </div>
   );
  }
}

ContentBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentBox);
