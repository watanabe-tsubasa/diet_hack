import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-gray-800"
      : "border-transparent hover:bg-gray-100";
  return (
    <nav class="border-b">
      <ul class="container flex items-center p-3 text-gray-600">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <a href="/">DeadLift</a>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <a href="/about">AbRoller</a>
        </li>
      </ul>
    </nav>
  );
}
