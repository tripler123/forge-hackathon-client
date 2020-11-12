import ForgeViewer from './components/ForgeViewer.jsx';
import ViewerPanel from './components/ViewerPanel.jsx';
require('./index.css');
function App() {
  return (
    <div className="">
      <ViewerPanel />
      <ForgeViewer />
    </div>
  );
}

export default App;
