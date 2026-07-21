export default function TreeNode({ person }) {
  return (
    <li>
      <div className={`person ${person.id === 1 ? "root" : ""}`}>
        <div className="avatar">
          {person.id === 1 ? "👑" : "👤"}
        </div>

        <h4>{person.name}</h4>

        {person.role && <p>{person.role}</p>}

        {person.year && <span>{person.year}</span>}
      </div>

      {person.children?.length > 0 && (
        <ul>
          {person.children.map((child) => (
            <TreeNode
              key={child.id}
              person={child}
            />
          ))}
        </ul>
      )}
    </li>
  );
}