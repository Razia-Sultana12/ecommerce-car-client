import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Home from '../Home/Home/Home';
import CreateAdmin from './Admin/CreateAdmin/CreateAdmin';
import AddProduct from './Admin/AddProduct/AddProduct';
import ManageProducts from './Admin/ManageProducts/ManageProducts';

import { ShoppingBag } from '@mui/icons-material';
import MyOrders from './NormalUser/MyOrders/MyOrders';
import Review from './NormalUser/Review/Review';
import Pay from './NormalUser/Pay/Pay';
import ManageAllOrders from './Admin/ManageAllOrders/ManageAllOrders';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import { Logout } from '@mui/icons-material';
import About from '../Home/About/About';

const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin,logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to='/home'><Button color='inherit'>Home</Button></Link>
            {!admin && <Box>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}><Button color="inherit">Payment</Button></Link>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to={`${url}/review`}><Button color="inherit">Review</Button></Link></Box>}
            {admin && <Box>
                <Divider />
                <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
                <Divider />
            <Link style={{ textDecoration: 'none' }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
            <Divider />
            <Link style={{ textDecoration: 'none' }} to={`${url}/createAdmin`}><Button color="inherit">Make Admin</Button></Link>
                </Box>}
                <Divider />
                <Button onClick={logout} color="inherit">LogOut <Logout /></Button>
            
            
            
             
          
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <About></About>

                <Switch>
                <AdminRoute path={`${path}/createAdmin`}>
                        <CreateAdmin></CreateAdmin>
                    </AdminRoute>
                    <AdminRoute
                    path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    

                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    window: PropTypes.func,
};

export default DashBoard;
