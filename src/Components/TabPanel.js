import React from 'react';
import {Typography, Box} from "@material-ui/core";

const TabPanel = ({children, value, currentValue, className}) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== currentValue}
    >
      {value === currentValue && <Box my={3}>{children}</Box>}
    </Typography>
  );
};

export default TabPanel;