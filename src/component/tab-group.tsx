import Tab from "./tab";

export type Item = {
  text: string;
  slug?: string;
  segment?: string;
};

const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {items.map((item) => (
        <Tab key={path + item.slug} item={item} path={path} />
      ))}
    </div>
  );
};
export default TabGroup;
