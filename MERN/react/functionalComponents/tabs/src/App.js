import './App.css';
import Tabs from './components/Tabs';

function App() {
  const tabItems = [
    {header: "Tab 1", content: "This is some content"},
    {header: "Tab 2", content: "This is some more content"},
    {header: "Tab 3", content: "This is a lot of content"}
  ]
  return (
    <section className="section">
      <div className="container">
        <Tabs items={tabItems}></Tabs>
      </div>
    </section>
  );
}

export default App;
