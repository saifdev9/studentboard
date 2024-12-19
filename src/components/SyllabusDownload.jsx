const SyllabusDownload = () => {
  const syllabus = [
    { subject: "Mathematics", semester: "1", updatedDate: "2024-03-15" },
    { subject: "Physics", semester: "1", updatedDate: "2024-03-15" },
    { subject: "Chemistry", semester: "1", updatedDate: "2024-03-15" },
  ];

  return (
    <div className="syllabus-container">
      <h2>Syllabus Download</h2>
      {syllabus.map((item, index) => (
        <div key={index} className="syllabus-item">
          <div>
            <h3>{item.subject}</h3>
            <p>Semester {item.semester}</p>
            <p>Last updated: {item.updatedDate}</p>
          </div>
          <button>Download</button>
        </div>
      ))}
    </div>
  );
};

export default SyllabusDownload;
