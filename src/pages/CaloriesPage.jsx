// pages/CaloriesPage.jsx
import { useState } from "react";
import {
  Paper, TextField, Button, MenuItem,
  Typography, Stack, Alert
} from "@mui/material";
import { basalMetabolicRate, dailyCalorieNeeds } from "../utils/healthUtils";

export default function CaloriesPage() {
  const [input, setInput] = useState({
    weight: "", height: "", age: "", sex: "male", activity: 1.55,
  });
  const [calories, setCalories] = useState(null);

  const handle = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const bmr = basalMetabolicRate({
      weightKg: +input.weight,
      heightCm: +input.height,
      age: +input.age,
      isMale: input.sex === "male",
    });
    setCalories(dailyCalorieNeeds(bmr, +input.activity));
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>Daily Calorie Calculator</Typography>
      <form onSubmit={submit}>
        <Stack spacing={3}>
          <TextField label="Age" name="age" value={input.age} onChange={handle} required type="number" />
          <TextField label="Weight (kg)" name="weight" value={input.weight} onChange={handle} required type="number" />
          <TextField label="Height (cm)" name="height" value={input.height} onChange={handle} required type="number" />
          <TextField
            select label="Sex" name="sex" value={input.sex} onChange={handle}>
            <MenuItem value="male">Արական</MenuItem>
            <MenuItem value="female">Իգական</MenuItem>
          </TextField>
          <TextField
            select label="Activity Level" name="activity"
            value={input.activity} onChange={handle}>
            <MenuItem value={1.2}>Նստակյաց</MenuItem>
            <MenuItem value={1.375}>Թեթև</MenuItem>
            <MenuItem value={1.55}>Չափավոր</MenuItem>
            <MenuItem value={1.725}>Ակտիվ</MenuItem>
            <MenuItem value={1.9}>Մարզիկ</MenuItem>
          </TextField>

          <Button variant="contained" type="submit">Estimate</Button>

          {calories && (
            <Alert severity="success">
              Առաջարկվող ընդունում. <strong>{calories}</strong> կկալ մեկ օրում
            </Alert>
          )}
        </Stack>
      </form>
    </Paper>
  );
}
