
export default function CustomNode({ data }) {
  return (
    <div className="person">
      <div className="avatar">
        {data.id === 1 ? "👑" : "👤"}
      </div>

      <h4>{data.name}</h4>

      {data.nickname && <p>{data.nickname}</p>}

      {data.year && <span>{data.year}</span>}
    </div>
  );
}