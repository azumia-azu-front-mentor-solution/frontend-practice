import { useState } from "react";
import css from "./Header.module.scss";

type MenuItem = {
  key: string;
  label: string;
  href: string;
  icon?: string;
  itemStyle?: React.CSSProperties;
};

type HeaderProps = {
  items: MenuItem[];
};

function Header({ items }: HeaderProps) {
  const [activeItemKey, setActiveItemKey] = useState<string | null>(null);

  function handleItemClick(item: MenuItem) {
    setActiveItemKey(item.key);
  }

  return (
    <header className={css.header}>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.key} style={item.itemStyle} onClick={() => handleItemClick(item)} className={item.key === activeItemKey ? "active" : ""}>
              <a href={item.href}>
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={`${item.label}`}
                  />
                ) : (
                  item.label
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
export type { HeaderProps, MenuItem };
