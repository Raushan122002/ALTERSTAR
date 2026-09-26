import { useLocation } from "react-router-dom";

/**
 * Page transition keyed to the route path.
 *
 * This wraps the entire <main> of every page, so it is the single riskiest
 * place to start content at opacity 0: if the reveal never runs, the whole page
 * is invisible. It is therefore a plain CSS class, not a JS-driven animation.
 * The key forces a remount per path so the animation replays on navigation.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
