import Sidebar from "./component/Sidebar";
import TopBar from "./component/TopBar";
import RightBar from "./component/RightBar";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar/>
      <div className="basis-[100%] bg-[#F8F8F8]">
        <div className="flex-col flex">
        <TopBar/>
          <div className="basis-[80%]">
            <div className="flex flex-row justify-between">
              <div className="basis-[75%]"></div>
             <RightBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
