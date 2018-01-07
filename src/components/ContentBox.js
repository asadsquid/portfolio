import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  contentBox: {
    height: '600px',
    backgroundColor: theme.palette.p1.coffee,
  },

});


class ContentBox extends React.Component {

  render() {
    const { classes } = this.props;

    return (

     <div className={classes.contentBox}>

     </div>
   );
  }
}

ContentBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentBox);
