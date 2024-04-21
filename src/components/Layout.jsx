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
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import hrLogo from "../assets/hrLogo.svg";
import {
  ChatBubbleOutline,
  FolderOutlined,
  InsertDriveFileOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CopyrightFooter from "./copyrightFooter";
import profileImg from "../assets/profileImg.svg";
import CustomSearchBox from "./CustomSearchBox";
import CustomNotificationIcon from "./CustomNotificationIcon";

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
    <Box
      sx={{
        backgroundColor: "#4D90F0",
        height: "100vh",
        padding: "0 1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
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
                  color:
                    location.pathname === item.link ? "#4D90F0" : "#FFFFFF",
                  borderRadius: "4px",
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "#ffffff3d",
                    color: "#fff",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "inherit",
                    fontSize: ".8rem",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <Typography
                  variant="body2"
                  sx={{ fontSize: ".9rem", textAlign: "left" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    backgroundColor: "#F95252",
                    borderRadius: "30px",
                    fontWeight: 700,
                    width: "3em",
                    marginLeft: "2em",
                    display: item.newNotification <= 0 ? "none" : "block",
                  }}
                >
                  {item.newNotification}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          backgroundColor: "#DFECEB",
          borderRadius: "12px",
          padding: ".4em .7em",
          marginBottom: "1em",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box sx={{ width: "2em" }}>
          <img src={profileImg} alt="" style={{ width: "100%" }} />
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: ".8em",
              fontWeight: 500,
              fontFamily: "DM Sans",
              lineHeight: "1em",
            }}
          >
            Elon Rust
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: ".7em",
              fontWeight: 400,
              fontFamily: "DM Sans",
              color: "#2586F8",
            }}
          >
            Admin
          </Typography>
        </Box>
      </Box>
    </Box>
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

          <CustomSearchBox />

          <CustomNotificationIcon notificationNumber={2} />
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
    newNotification: 4,
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
