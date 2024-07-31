import { NavigationHistoryProvider } from "./components/NavigationHistoryContext"
import NavigationTracker from "./components/NavigationTracker"


function App() {

  return (
    <>
      <NavigationHistoryProvider>
        <NavigationTracker />
      </NavigationHistoryProvider>
    </>
  )
}

export default App
