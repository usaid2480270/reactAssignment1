function StudentCard({ student, onView }) {
  return (
    <article className="card student-card h-100">
      <div className="student-avatar" aria-hidden="true">
        <div className="avatar-head" />
        <div className="avatar-body" />
      </div>

      <div className="card-body">
        <h2 className="card-title">{student.name}</h2>

        <div className="student-summary">
          <p>ID: {student.id}</p>
          <p>Views: {student.views}</p>
        </div>

        {student.isExpanded && (
          <div className="student-extra-details">
            <p>Major: {student.major}</p>
            <p>Year: {student.year}</p>
            <p>GPA: {student.gpa}</p>
          </div>
        )}

        <div className="student-actions">
          <button
            className="btn btn-sm btn-outline-primary"
            type="button"
            onClick={() => onView(student.id)}
          >
            {student.isExpanded ? "Hide Details" : "View Profile"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default StudentCard;
