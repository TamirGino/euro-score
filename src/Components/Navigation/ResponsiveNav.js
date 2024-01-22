import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { tabData } from '../../Constants/Constants';

const ResponsiveNav = () => {

  const [tab, setTab] = useState("bets");

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Tabs
      value={tab} onChange={handleTabChange} scrollButtons
      TabIndicatorProps={{
        style: {
          backgroundColor: "#59DF72",
        }
      }}
        >
      {tabData.map((tab) => (
        <Tab
          key={tab.value}
          sx={{
            '&.Mui-selected': {
              color: '#59DF72',
            },
            color: 'white',
            minWidth: '20px',
          }}
          icon={tab.icon}
          value={tab.value}
          component={Link}
          to={`/${tab.value.toLowerCase()}`}
        />
      ))}
    </Tabs>
  );
}

export default ResponsiveNav;