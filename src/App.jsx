import { Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";

/* pages */
import HomePage from "./pages/HomePage";
import TipsPage from "./pages/TipsPage";
import CalculatorPage from "./pages/CalculatorPage";
import CaloriesPage from "./pages/CaloriesPage";
import HydrationPage from "./pages/HydrationPage";
import ExercisePage from "./pages/ExercisePage";
import ActivityLogPage from "./pages/ActivityLogPage";

export default function App() {
  return (
    <>
      {/* Top navigation bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Healthy Habits
          </Typography>

          {/* Buttons auto‑wrap on smaller screens */}
          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/tips">
              Tips
            </Button>
            <Button color="inherit" component={Link} to="/calculator">
              BMI
            </Button>
            <Button color="inherit" component={Link} to="/calories">
              Calories
            </Button>
            <Button color="inherit" component={Link} to="/hydration">
              Water
            </Button>
            <Button color="inherit" component={Link} to="/exercise">
              Exercise
            </Button>
            <Button color="inherit" component={Link} to="/activity">
              Progress
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Route outlet */}
      <Container sx={{ mt: 4, mb: 6 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/calories" element={<CaloriesPage />} />
          <Route path="/hydration" element={<HydrationPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/activity" element={<ActivityLogPage />} />
        </Routes>
      </Container>
    </>
  );
}
