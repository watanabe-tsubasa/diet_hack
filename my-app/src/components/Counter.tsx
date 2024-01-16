import { createSignal } from "solid-js";
import { Button } from "./ui/button";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <Button
        onClick={() => setCount(count() + 1)}
      >
        Clicks: {count()}
      </Button>
    </div>
  );
}
