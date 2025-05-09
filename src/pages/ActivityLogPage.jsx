import { useMemo } from "react";
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ActivityLogPage() {
  const history = useMemo(
    () => JSON.parse(localStorage.getItem("bmiHistory") || "[]"),
    []
  );

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>BMI History</Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={(d)=>d.slice(0,10)} />
          <YAxis domain={["dataMin-1", "dataMax+1"]} />
          <Tooltip />
          <Line type="monotone" dataKey="bmi" />
        </LineChart>
      </ResponsiveContainer>

      <Table sx={{ mt: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>BMI</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.date.slice(0, 10)}</TableCell>
              <TableCell>{r.bmi}</TableCell>
              <TableCell>{r.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
