import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import hrLogo from "../assets/hrLogo.svg";
import {
  ChatBubbleOutline,
  FolderOutlined,
  InsertDriveFileOutlined,
  NotificationsNoneOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CopyrightFooter from "./copyrightFooter";
import { StyledTextField } from "../styled-components/styledInputs";

const drawerWidth = 240;

const Layout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  const drawer = (
    <div
      style={{
        backgroundColor: "#4D90F0",
        height: "100vh",
        padding: "0 1em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: ".7em 0",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ width: "3em" }}>
          <img src={hrLogo} alt="" style={{ width: "100%" }} />
        </Box>
        <Typography
          variant="h4"
          sx={{ color: "#fff", fontSize: "1rem", fontWeight: 700 }}
        >
          HR App
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ margin: ".5em 0" }}>
            <ListItemButton
              disableRipple
              onClick={() => navigate(item.link)}
              sx={{
                backgroundColor:
                  location.pathname === item.link ? "#F9F9F9" : "#4D90F0",
                color: location.pathname === item.link ? "#4D90F0" : "#FFFFFF",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor:
                    location.pathname === item.link ? "#F9F9F9" : "#4D90F0",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.link ? "#4D90F0" : "#FFFFFF",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#F9F9F9",
          boxShadow: "none",
          paddingTop: "1em",
        }}
      >
        <Toolbar sx={{ gap: 3 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>

          <Box
            sx={{
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <StyledTextField
              placeholder="Search…"
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                border: "1px solid #E7EAE9",
              }}
            />
            <IconButton
              sx={{
                color: "#000",
                position: "absolute",
                left: { xs: "82%", sm: "87%", md: "94%", lg: "96%" },
                borderRadius: "4px",
              }}
              disableRipple
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              color="inherit"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "6px",
                border: "1px solid #E7EAE9",
              }}
            >
              <Badge badgeContent={2} color="error">
                <NotificationsNoneOutlined sx={{ color: "#000" }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#F9F9F9",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
        <CopyrightFooter />
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

const navItems = [
  {
    id: 1,
    name: "Sent",
    link: "/sent",
    icon: <ChatBubbleOutline />,
  },
  {
    id: 2,
    name: "Inbox",
    link: "/",
    icon: <FolderOutlined />,
  },
  {
    id: 3,
    name: "Users",
    link: "/users",
    icon: <PeopleAltOutlined />,
  },
  {
    id: 4,
    name: "Reports",
    link: "/reports",
    icon: <InsertDriveFileOutlined />,
  },
];

export default Layout;
