import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import './menu.css'
import Posts from '../Posts/Posts';
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
                    <TabList className='tablist' orientation='vertical' onChange={handleChange} aria-label="lab API tabs example">
                        <div className='instagram-logo'><h1>Instagram</h1></div>
                        <Tab sx={{"&.MuiTab-textColorPrimary": {color:'white'}}} className='tab' iconPosition='start' icon={<HomeOutlinedIcon />} label="Home" value="1" />
                        <Tab sx={{"&.MuiTab-textColorPrimary": {color:'white'}}} className='tab' iconPosition='start' icon={<SearchOutlinedIcon />} label="Search" value="2" />
                        <Tab sx={{"&.MuiTab-textColorPrimary": {color:'white'}}} className='tab' iconPosition='start' icon={<AddCircleOutlineOutlinedIcon />} label="Create" value="3" />
                    </TabList>

                    <TabPanel className='tabpanel' value="1">
                        <div>
                            <h1>Home (All the posts here)</h1>
                            <Posts />
                        </div>
                    </TabPanel>
                    <TabPanel className='tabpanel' value="2"><h1>Search (Search component)</h1></TabPanel>
                    <TabPanel className='tabpanel' value="3"><h1>Create (Create a post component)</h1></TabPanel>
                </Box>
            </TabContext>

        </Box>
    )
}

export default Menu