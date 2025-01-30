import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import styles from "./styles.module.css";

export default function BasicPie() {
  return (
    <div className={styles.container}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 20, label: "Meat" },
              { id: 1, value: 15, label: "Grape" },
              { id: 2, value: 40, label: "Fish" },
              { id: 3, value: 30, label: "Banana" },
              { id: 4, value: 20, label: "Apple" },
            ],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            cx: 150,
            cy: 150,
          },
        ]}
        width={400}
        height={300}
      />
    </div>
  );
}
