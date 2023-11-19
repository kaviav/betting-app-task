import Rightlongbanner from "./Rightlongbanner";
import Rightsmallbanner from "./Rightsmallbanner";
import "./RightSidebr.css";

function RightSidebar() {
  return (
    <div className="rightcontainer">
      <Rightsmallbanner />
      <Rightlongbanner />
    </div>
  );
}
export default RightSidebar;
