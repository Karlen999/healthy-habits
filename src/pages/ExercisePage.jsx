import { useState } from "react";
import { Paper, TextField, Button, Stack, Alert, Typography } from "@mui/material";
import { calculateBMI, exerciseIdeas } from "../utils/healthUtils";

export default function ExercisePage() {
  const [input, setInput] = useState({ weight: "", height: "" });
  const [ideas, setIdeas] = useState(null);

  const go = (e) => {
    e.preventDefault();
    const { category } = calculateBMI(+input.weight, +input.height);
    setIdeas(exerciseIdeas(category));
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 450, mx: "auto" }}>
      <Typography variant="h5">Exercise Suggestions</Typography>
      <form onSubmit={go}>
        <Stack spacing={3} sx={{ mt: 2 }}>
          <TextField label="Weight (kg)" type="number"
            value={input.weight} onChange={(e)=>setInput({...input,weight:e.target.value})} required/>
          <TextField label="Height (cm)" type="number"
            value={input.height} onChange={(e)=>setInput({...input,height:e.target.value})} required/>
          <Button variant="contained" type="submit">Suggest</Button>
          {ideas && (
            <Alert severity="success">
              Փորձի՛ր: {ideas.join(", ")}
            </Alert>
          )}
        </Stack>
      </form>
    </Paper>
  );
}
