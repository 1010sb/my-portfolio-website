import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `cursor-pointer rounded-[10px] px-5 py-2.5 text-[0.95rem] font-semibold no-underline transition-all duration-300 ${
    isActive ? 'bg-accent/15 text-accent' : 'text-muted hover:bg-accent/15 hover:text-accent'
  }`;

export default function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative z-10 mx-auto max-w-[1100px]">
      <div className="relative mb-8 flex items-center justify-center rounded-[20px] border border-border bg-card p-5 px-8 backdrop-blur-2xl">
        <nav className="flex gap-2">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About & Contact
          </NavLink>
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          className="absolute right-8 rounded-[10px] border border-border p-2 text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <Outlet />
    </div>
  );
}
