import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const cycleData = [

  
  { day: "Day 1", flow: 4 },
  { day: "Day 2", flow: 5 },
  { day: "Day 3", flow: 3 },
  { day: "Day 4", flow: 2 },
  { day: "Day 5", flow: 1 },


];

export default function CycleChart() {
  return (
    <LineChart width={500} height={300} data={cycleData}>
      <XAxis dataKey="day" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <Line type="monotone" dataKey="flow" stroke="#ff6384" />
    </LineChart>
  );
}
