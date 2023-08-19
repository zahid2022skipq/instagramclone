import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import './menu.css'
const Menu = () =>
{

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) =>
    {
        setValue(newValue);
    };

    return (
        <Box>
            <TabContext value={value}>
                <Box className='tab-container' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList orientation='vertical' onChange={handleChange} aria-label="lab API tabs example">
                        <div className='instagram-logo'><h1>Instagram</h1></div>
                        <Tab className='tab' iconPosition='start' icon={<HomeOutlinedIcon />} label="Home" value="1" />
                        <Tab className='tab' iconPosition='start' icon={<SearchOutlinedIcon />} label="Search" value="2" />
                        <Tab className='tab' iconPosition='start' icon={<AddCircleOutlineOutlinedIcon />} label="Create" value="3" />
                    </TabList>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </Box>
            </TabContext>

        </Box>
    )
}

export default Menu