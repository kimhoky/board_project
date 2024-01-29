import Sidebar from "../common/Sidebar";
import Board_Main from "../common/Board_Main";
export default function Board() {
  return (
    <main style={{ display: "flex", maxWidth: "1500px" }}>
      <Sidebar style={{ flex: "1" }} />
      <Board_Main style={{ flex: "1" }} />
    </main>
  );
}
