const ResultDownload = () => {
  const semesters = [
    {
      semester: "Semester 1",
      gpa: 8,
      status: "Passed",
      subjects: [
        { name: "Mathematics", grade: "A", points: 9 },
        { name: "Physics", grade: "A-", points: 8 },
        { name: "Chemistry", grade: "B+", points: 7 },
      ],
    },
    {
      semester: "Semester 2",
      gpa: 8,
      status: "Passed",
      subjects: [
        { name: "Mathematics II", grade: "A", points: 9 },
        { name: "Physics II", grade: "B+", points: 7 },
        { name: "Chemistry II", grade: "A-", points: 8 },
      ],
    },
  ];

  return (
    <div className="result-container">
      <h2>Result Download</h2>
      {semesters.map((semester, index) => (
        <div key={index} className="semester-result">
          <h3>{semester.semester}</h3>
          <p>
            GPA: {semester.gpa} • {semester.status}
          </p>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {semester.subjects.map((subject, i) => (
                <tr key={i}>
                  <td>{subject.name}</td>
                  <td>{subject.grade}</td>
                  <td>{subject.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>Download Result</button>
        </div>
      ))}
    </div>
  );
};

export default ResultDownload;
