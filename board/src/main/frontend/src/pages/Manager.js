import Sidebar from "../common/Sidebar";
import Manager_Main from "../common/Manager/Manager_Main";

export default function Manager() {
  return (
    <main style={{ display: "flex", maxWidth: "1500px" }}>
      <Sidebar style={{ flex: "1" }} />
      <Manager_Main style={{ flex: "1" }} />
    </main>
  );
}
