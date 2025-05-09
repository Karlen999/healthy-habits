// pages/TipsPage.jsx
import { useState } from "react";
import { Grid, Chip, Stack } from "@mui/material";
import TipCard from "../components/TipCard";

const tipData = [
  {
    category: "diet",
    items: [
      { title: "Բանջարեղեն", text: "Յուրաքանչյուր ափսեի կեսը…" },
      { title: "Նախապատվությունը՝ ամբողջահատիկին", text: "Փոխարինի՛ր սպիտակ հացը…" },
    ],
  },
  {
    category: "exercise",
    items: [
      { title: "30 րոպե արագ քայլ", text: "Խթանում է սրտի առողջությունը" },
      { title: "Ձգումների ընդմիջում գրասեղանի մոտ", text: "Յուրաքանչյուր 60 րոպեն մեկ կանգնի՛ր" },
    ],
  },
  {
    category: "sleep",
    items: [
      { title: "Հաստատուն գրաֆիկ", text: "Քնելու/արթնանալու հաստատուն ժամեր" },
      { title: "Առանց էկրանների քնելուց 1 ժամ առաջ", text: "Կապույտ լույսը խանգարում է քունը" },
    ],
  },
];

export default function TipsPage() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", ...tipData.map((c) => c.category)];

  const tips = filter === "all"
    ? tipData.flatMap((c) => c.items.map((i) => ({ ...i, category: c.category })))
    : tipData
        .find((c) => c.category === filter)
        ?.items.map((i) => ({ ...i, category: filter })) ?? [];

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        {categories.map((c) => (
          <Chip
            key={c}
            label={c.toUpperCase()}
            color={filter === c ? "primary" : "default"}
            onClick={() => setFilter(c)}
            clickable
          />
        ))}
      </Stack>

      <Grid container spacing={3}>
        {tips.map((tip, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <TipCard {...tip} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
