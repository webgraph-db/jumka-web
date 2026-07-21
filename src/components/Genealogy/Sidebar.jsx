export default function Sidebar({ person, onClose }) {

      if (!person) return null;

      return (
        <div className="sidebar">

          <button className="close-btn" onClick={onClose}>✖</button>

          <div className="profile">

            {person.photo ? (
              <img src={person.photo} alt={person.name}/>
            ) : (
              <div className="photo-placeholder">👤</div>
            )}

            <h2>{person.name}</h2>

            <p>{person.nickname}</p>

            <p>{person.year}</p>

            {person.description && (
              <>
                <h3>परिचय</h3>
                <p>{person.description}</p>
              </>
            )}

          </div>

        </div>
      );
    }

