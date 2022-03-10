import counterStore from "./store/counterStore";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <div className="app">
      <button onClick={counterStore.addCount}>{counterStore.count}</button>
      <button onClick={counterStore.addList}>修改原数组</button>
      {/* 原数组 */}
      <ul>
        {counterStore.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* 新数组 */}
      <ul>
        {counterStore.filterList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default observer(App);
