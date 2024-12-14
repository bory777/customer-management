import React, { useState } from "react";
import { Box, TextField, Button, Card, CardContent, Typography, Grid } from "@mui/material";

const CustomerList = () => {
  const customers = [
    { name: "佐藤 太郎", email: "taro@example.com", phone: "090-1234-5678", registered: "2023-03-01" },
    { name: "鈴木 花子", email: "hanako@example.com", phone: "090-2345-6789", registered: "2023-02-15" },
    { name: "田中 一郎", email: "ichiro@example.com", phone: "090-3456-7890", registered: "2023-01-10" },
  ];

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // 検索機能
  const filteredCustomers = customers.filter((customer) =>
    customer.name.includes(search)
  );

  // 並び替え機能
  const sortedCustomers = filteredCustomers.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return new Date(a.registered) - new Date(b.registered);
    }
  });

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      {/* 検索バー */}
      <TextField
        label="顧客名で検索"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/* 並び替えボタン */}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setSortBy(sortBy === "name" ? "registered" : "name")}
        sx={{ marginTop: "10px", marginBottom: "20px" }}
      >
        並び替え: {sortBy === "name" ? "登録日順" : "名前順"}
      </Button>

      {/* 顧客カードの表示 */}
      <Grid container spacing={2}>
        {sortedCustomers.map((customer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h6">{customer.name}</Typography>
                <Typography variant="body2" color="text.secondary">{customer.email}</Typography>
                <Typography variant="body2" color="text.secondary">{customer.phone}</Typography>
                <Typography variant="body2" color="text.secondary">{customer.registered}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerList;
