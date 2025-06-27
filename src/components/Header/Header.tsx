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
  return (
    <header>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.key} style={item.itemStyle}>
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
