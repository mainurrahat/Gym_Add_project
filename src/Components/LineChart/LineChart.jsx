import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const students_marks = [
    { name: "Alice", mathMarks: 78, physicsMarks: 82, chemistryMarks: 74 },
    { name: "Bob", mathMarks: 85, physicsMarks: 79, chemistryMarks: 88 },
    { name: "Charlie", mathMarks: 92, physicsMarks: 95, chemistryMarks: 89 },
    { name: "David", mathMarks: 74, physicsMarks: 70, chemistryMarks: 68 },
    { name: "Emma", mathMarks: 88, physicsMarks: 84, chemistryMarks: 91 },
    { name: "Frank", mathMarks: 67, physicsMarks: 72, chemistryMarks: 65 },
    { name: "Grace", mathMarks: 91, physicsMarks: 87, chemistryMarks: 93 },
    { name: "Hannah", mathMarks: 76, physicsMarks: 80, chemistryMarks: 78 },
    { name: "Ian", mathMarks: 83, physicsMarks: 78, chemistryMarks: 85 },
    { name: "Jack", mathMarks: 95, physicsMarks: 92, chemistryMarks: 90 },
  ];
  return (
    <div>
      <LChart width={800} height={400} data={students_marks}>
        <XAxis dataKey={name}></XAxis>
        <YAxis dataKey={name}></YAxis>

        <Line type="monotone" dataKey={"physicsMarks"} stroke="red" />
        <Line type="monotone" dataKey={"chemistryMarks"} stroke="blue" />
        <Line type="monotone" dataKey={"mathMarks"} stroke="Yellow" />
      </LChart>
    </div>
  );
};

export default LineChart;
