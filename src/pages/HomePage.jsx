import { Paper, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

import InsightsIcon from "@mui/icons-material/Insights";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const tiles = [
  { label: "BMI Calculator", icon: <InsightsIcon />, to: "/calculator" },
  { label: "Calorie Needs",   icon: <RestaurantIcon />, to: "/calories" },
  { label: "Water Intake",    icon: <LocalDrinkIcon />, to: "/hydration" },
  { label: "Exercise Ideas",  icon: <DirectionsRunIcon />, to: "/exercise" },
  { label: "Healthy Tips",    icon: <LibraryBooksIcon />, to: "/tips" },
];

export default function HomePage() {
  return (
    <Paper elevation={4} sx={{ p: 5 }}>
      <Typography variant="h3" gutterBottom>
        Ապրել ավելի լավ՝ հետևելով առողջ ապրելակերպի կանոններին
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
      Գործնական գործիքներ՝ հետևելու, սովորելու և առողջանալու համար։
      </Typography>

      <Grid container spacing={3}>
        {tiles.map(({ label, icon, to }) => (
          <Grid key={label} item xs={12} sm={6} md={4} lg={3}>
            <Button
              component={Link}
              to={to}
              fullWidth
              variant="outlined"
              size="large"
              startIcon={icon}
              sx={{ py: 3 }}
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
