import { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <h2>Simple Counter</h2>
      <Count value={count} />

      <Button label="Add 1!" onClick={() => setCount(count + 1)} />
      <Button label="Subtract 1" onClick={() => setCount(prev => Math.max(prev - 1, 0))} />
      <Button label="+2" onClick={() => setCount(count + 2)} />
      <Button label="-2" onClick={() => setCount(prev => Math.max(prev - 2, 0))} />

      <p>{feedback}</p>
    </div>
  );
}

export default Counter;
