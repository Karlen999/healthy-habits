import { Card, CardContent, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const iconMap = {
  exercise: <FitnessCenterIcon color="primary" />,
  diet: <RestaurantIcon color="success" />,
  sleep: <BedtimeIcon color="secondary" />,
};

export default function TipCard({ title, category, text }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        {iconMap[category]}
        <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Card>
  );
}
