import { useState } from "react";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

const initialStudents = [
  { id: 101, name: "Usaid Zeeshan", major: "Arts", year: 3, gpa: 3.67, views: 0, isExpanded: false },
  { id: 102, name: "Shahzeb", major: "Software Engineering", year: 3, gpa: 4, views: 0, isExpanded: false },
  { id: 103, name: "Abdullah Aslam", major: "Computer Science", year: 2, gpa: 3.5, views: 0, isExpanded: false },
  { id: 104, name: "Ibrahim Hayat", major: "Computer Science", year: 1, gpa: 3.9, views: 0, isExpanded: false },
  { id: 105, name: "Hassan Abdul Qadir", major: "Software Engineering", year: 3, gpa: 3.8, views: 0, isExpanded: false },
  { id: 106, name: "Saim Hassan", major: "Information Technology", year: 1, gpa: 3.4, views: 0, isExpanded: false },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  function handleViewProfile(studentId) {
  setStudents((currentStudents) =>
    currentStudents.map((student) => {
      if (student.id === studentId) {
        return {
          ...student,
          views: student.isExpanded
            ? student.views
            : student.views + 1,
          isExpanded: !student.isExpanded,
        };
      }

      return student;
    })
  );
}

  return (
    <div className="app">
      <Navbar />

      <main className="container page-container">
        <Breadcrumb />

        <div className="page-heading">
          <h1>Student Directory</h1>
          <button className="btn add-student-button" type="button">
            Add New Student
          </button>
        </div>

        <section className="student-grid" aria-label="Student directory">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onView={handleViewProfile}
            />
          ))}
        </section>

        <nav aria-label="Pagination">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled"><span className="page-link">Previous</span></li>
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><span className="page-link">2</span></li>
            <li className="page-item"><span className="page-link">3</span></li>
            <li className="page-item"><span className="page-link">Next</span></li>
          </ul>
        </nav>

        <div className="alert alert-info portal-alert" role="status">
          <span>Student records have been successfully updated.</span>
          <span className="alert-close" aria-hidden="true">×</span>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
