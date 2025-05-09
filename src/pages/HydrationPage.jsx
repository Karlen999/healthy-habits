import { useState } from "react";
import { Paper, TextField, Button, Stack, Typography, Alert } from "@mui/material";
import { dailyWaterLiters } from "../utils/healthUtils";

export default function HydrationPage() {
  const [kg, setKg] = useState("");
  const [liters, setLiters] = useState(null);

  const calc = (e) => {
    e.preventDefault();
    setLiters(dailyWaterLiters(+kg));
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 400, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>Water Intake</Typography>
      <form onSubmit={calc}>
        <Stack spacing={3}>
          <TextField
            label="Weight (kg)"
            type="number"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            required
          />
          <Button variant="contained" type="submit">Calculate</Button>
          {liters && (
            <Alert severity="info">
              Նպատակադրի՛ր այսօր խմել մոտավորապես <strong>{liters} L</strong> լիտր ջուր։
            </Alert>
          )}
        </Stack>
      </form>
    </Paper>
  );
}
