import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const CustomerRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registered, setRegistered] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`顧客登録されました: ${name}, ${email}, ${phone}, ${registered}`);
  };

  return (
    <Box sx={{ width: 400, margin: "auto", paddingTop: "20px" }}>
      <Typography variant="h6">顧客登録</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="名前"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="メールアドレス"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="電話番号"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="登録日"
          variant="outlined"
          fullWidth
          margin="normal"
          value={registered}
          onChange={(e) => setRegistered(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: "20px" }}>
          登録
        </Button>
      </form>
    </Box>
  );
};

export default CustomerRegister;
