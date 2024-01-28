import Sidebar from "../common/Sidebar";
import TestSidebar from "../common/Testsidebar";
export default function () {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <TestSidebar></TestSidebar>
    </main>
  );
}
