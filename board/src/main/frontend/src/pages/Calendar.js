import Sidebar from "../common/Sidebar";
import Calendar_Main from "../common/Calendar_Main";
export default function () {
  return (
    <main style={{ display: "flex", maxWidth: "1500px" }}>
      <Sidebar style={{ flex: "1" }} />
      <Calendar_Main style={{ flex: "1" }} />
    </main>
  );
}
