import { Header } from "../components/Header";

// 7 x 5
export function Dashboard() {
  return (
    <div className="px-14 pb-16">
      <Header employeeRole="zookeeper" employeeName="Luigi" />
      <div className="grid grid-cols-5 gap-2 [&>div]:bg-grayish text-center">
        <div className="rounded-xl">
          <p>Total of animal</p>
          <p>0000</p>
        </div>
        <div className="rounded-xl">
          <p>Diferent Species</p>
          <p>0000</p>
        </div>
        <div className="rounded-xl">
          <p>hdoewihf</p>
          <p>0000</p>
        </div>
      </div>
    </div>
  );
}
