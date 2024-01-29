import Sidebar from "../common/Sidebar";
import Post_Content from "../common/Post_Content";
export default function Post() {
  return (
    <main style={{ display: "flex", maxWidth: "1500px" }}>
      <Sidebar />
      <Post_Content />
    </main>
  );
}
