import React from 'react';
import {Typography, Box} from "@material-ui/core";

const TabPanel = ({children, value, currentValue}) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== currentValue}
    >
      {value === currentValue && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

export default TabPanel;