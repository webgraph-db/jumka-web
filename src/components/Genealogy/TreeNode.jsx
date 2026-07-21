export default function TreeNode({ person }) {
  return (
    <li>
      <div className={`person ${person.id === 1 ? "root" : ""}`}>

        <div className="avatar">
          {person.id === 1 ? "👑" : "👤"}
        </div>

        <h4>{person.name}</h4>

        {person.nickname && (
          <p className="nickname">{person.nickname}</p>
        )}

        {person.year && (
          <span className="year">{person.year}</span>
        )}

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