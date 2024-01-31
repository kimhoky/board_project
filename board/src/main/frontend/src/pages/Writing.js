import Sidebar from "../common/Sidebar";
import Writing from "../common/Writing_main";
import { useLocation } from 'react-router-dom';

export default function () {
 const location = useLocation();
  const dataList = location.state && location.state.data;
  console.log(dataList);
  return (
    <main style={{ display: "flex", maxWidth: "1500px" }}>
      <Sidebar style={{ flex: "1" }} />
      <Writing style={{ flex: "1" }} dataList={dataList}/>
    </main>
  );
}
