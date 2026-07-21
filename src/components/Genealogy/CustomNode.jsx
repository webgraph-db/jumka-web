import "./CustomNode.css";
    import { Handle, Position } from "@xyflow/react";

    export default function CustomNode({ data }) {
      return (
        <div className={`person-card ${data.id === 1 ? "root-card" : ""}`}>

          <Handle type="target" position={Position.Top} />

          <div className="avatar">
            {data.photo ? (
              <img src={data.photo} alt={data.name} />
            ) : (
              <span>{data.id === 1 ? "👑" : "👤"}</span>
            )}
          </div>

          <h3>{data.name}</h3>

          {data.nickname && (
            <p className="nickname">{data.nickname}</p>
          )}

          {data.year && (
            <p className="year">{data.year}</p>
          )}

          <Handle type="source" position={Position.Bottom} />

        </div>
      );
    }
