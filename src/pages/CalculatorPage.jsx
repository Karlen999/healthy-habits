import { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
} from "@mui/material";
import { calculateBMI } from "../utils/healthUtils";

export default function CalculatorPage() {
  const [form, setForm] = useState({ age: "", weight: "", height: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { weight, height } = form;
    const calc = calculateBMI(Number(weight), Number(height));
    setResult(calc);

    // Optional: store in localStorage for future “progress tracker”
    const history = JSON.parse(localStorage.getItem("bmiHistory") || "[]");
    history.push({ date: new Date().toISOString(), ...calc });
    localStorage.setItem("bmiHistory", JSON.stringify(history));
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Typography variant="h5">BMI Calculator</Typography>

          <TextField
            label="Age"
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            required
          />
          <TextField
            label="Weight (kg)"
            name="weight"
            type="number"
            value={form.weight}
            onChange={handleChange}
            required
          />
          <TextField
            label="Height (cm)"
            name="height"
            type="number"
            value={form.height}
            onChange={handleChange}
            required
          />

          <Button variant="contained" type="submit">
            Calculate
          </Button>

          {result && (
            <Alert severity="info">
              BMI: <strong>{result.bmi}</strong> — {result.category}.{" "}
              {result.advice}
            </Alert>
          )}
        </Stack>
      </form>
    </Paper>
  );
}
