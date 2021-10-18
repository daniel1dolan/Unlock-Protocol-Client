import {useState, useEffect} from "react";
import './App.css';

function App() {
  // const hasAccess = true;
  const [hasAccess, setHasAccess] = useState(false);

  const enableAccess = () => {
    setHasAccess(true)
  }

  const promptCheckout = () => {
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal(/* optional configuration*/)

  }

  window.addEventListener('unlockProtocol.status', function(e) {
    // e as unlockEvent;
    var state = e.detail.state;

    console.log(state);
    if (state === "unlocked") {
      enableAccess()
    }
    // the state is a string whose value can either be 'unlocked' or 'locked'...
    // If state is 'unlocked': implement code here which will be triggered when 
    // the current visitor has a valid lock key  
    // If state is 'locked': implement code here which will be
    // triggered when the current visitor does not have a valid lock key
  })

  return (
    <div className="App">
      <header className="App-header">
        {hasAccess ? 
        <video src="https://vh0staging0storage.blob.core.windows.net/asset-6681a20b-a3e6-45d4-9d45-020ff388452d/Video-0003589_2f6902fe-4d3d-4a0f-937b--HD-5000.mp4" controls style={{height: "65vh"}} />
      :     <h2>Attach <button onClick={promptCheckout}>Wallet</button> to View Rufus Boofin</h2>
      }
      </header>
    </div>
  );
}

export default App;
