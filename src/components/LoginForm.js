import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const LoginForm = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!userId || !password) {
      setError("ユーザーIDとパスワードを入力してください");
      return;
    }
    setError("");
    // 親コンポーネントへログイン情報を渡す
    onLogin(userId, password);
  };

  // テストユーザーID/パスワードを自動入力
  const handleTestUserLogin = () => {
    const testUserId = "testuser";
    const testUserPassword = "password123";
    setUserId(testUserId);
    setPassword(testUserPassword);
    setError("");
  };

  return (
    <Box sx={{ maxWidth: 300, margin: "auto", paddingTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        ログイン
      </Typography>
      {error && (
        <Typography color="error" variant="body2" align="center">
          {error}
        </Typography>
      )}
      <TextField
        label="ユーザーID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        label="パスワード"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        onClick={handleLogin}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: "20px" }}
      >
        ログイン
      </Button>

      <Button
        onClick={handleTestUserLogin}
        variant="text"
        color="secondary"
        fullWidth
        sx={{ marginTop: "10px" }}
      >
        テストユーザーを入力
      </Button>
    </Box>
  );
};

export default LoginForm;
