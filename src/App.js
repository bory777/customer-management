import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LoginForm from "./components/LoginForm";
import CustomerList from "./components/CustomerList";
import CustomerRegister from "./components/CustomerRegister";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // ログイン処理
  const handleLogin = (userId, password) => {
    if (userId.trim() && password.trim()) {
      setIsLoggedIn(true);
    }
  };

  // ログアウト処理
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Drawerの開閉
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Router>
      <Box sx={{ display: "block" }}>
        <AppBar position="fixed">
          <Toolbar>
            {/* ハンバーガーアイコン */}
            {isLoggedIn && (
              <Button color="inherit" onClick={() => toggleDrawer(true)}>
                <MenuIcon />
              </Button>
            )}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              顧客管理システム
            </Typography>

            {isLoggedIn && (
              <Button color="inherit" onClick={handleLogout}>
                ログアウト
              </Button>
            )}
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <List sx={{ width: 240 }}>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/customer-list" onClick={() => toggleDrawer(false)}>
                <ListItemText primary="顧客一覧" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/customer-register" onClick={() => toggleDrawer(false)}>
                <ListItemText primary="顧客登録" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        {/* メインコンテンツ */}
        <Box
          component="main"
          sx={{
            marginTop: "64px",
            p: 3,
          }}
        >
          {!isLoggedIn ? (
            <LoginForm onLogin={handleLogin} />
          ) : (
            <Routes>
              <Route path="/" element={<CustomerList />} />
              <Route path="/customer-list" element={<CustomerList />} />
              <Route path="/customer-register" element={<CustomerRegister />} />
            </Routes>
          )}
        </Box>
      </Box>
    </Router>
  );
}

export default App;
