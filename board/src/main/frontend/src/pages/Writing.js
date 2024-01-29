import Sidebar from "../common/Sidebar";
import Writing from "../common/Writing_main";
export default function () {
  return (
    <main style={{ display: "flex", maxWidth: "1500px" }}>
      <Sidebar style={{ flex: "1" }} />
      <Writing style={{ flex: "1" }} />
    </main>
  );
}
