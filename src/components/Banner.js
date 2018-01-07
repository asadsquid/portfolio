import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({

  bannerBox: {
    minimumWidth: 900,
    overflow: 'hidden',
  },
  topSpacer: {
    height: 100,
  },
  line: {
    height: 8,
    backgroundColor:theme.palette.p1.tint,
    opacity: .3,
  },
  titleWrapper: {
    display: 'flex',
    height: '124px',
    backgroundColor: theme.palette.p1.tint,
    alignItems: 'center',
    justifyContent: 'left',
    opacity: .7,
  },
  mainTitle: {
    letterSpacing: -2,
    display: 'flex',
    flexWrap: 'nowrap',
    fontWeight: '300',
    fontSize: '64px',
    fontFamily: theme.font.f1,
  },
  subTitle: {
    paddingLeft: 24,
    letterSpacing: -2,
    fontFamily: theme.font.f1,
    fontSize: '36px',
  },
});

class Banner extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.bannerBox}>
        <div className={classes.topSpacer} />
        <div className={classes.line} />
        <div className={classes.titleWrapper}>
          <div className={classes.subTitle}>hi im</div>
          <div className={classes.mainTitle}>&nbsp;CUONG</div>
        </div>
        <div className={classes.line} />
      </div>
    );
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
