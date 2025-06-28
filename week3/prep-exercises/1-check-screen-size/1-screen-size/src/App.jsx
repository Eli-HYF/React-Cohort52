import useWindowSize from './hooks/useWindowSize';

function App() {
  const size = useWindowSize();

  return (
    <div>
      <h1>Window Size Checker</h1>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}

export default App;
