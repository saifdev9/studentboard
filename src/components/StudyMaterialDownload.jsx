const StudyMaterialDownload = () => {
  const materials = [
    { title: "Introduction to Calculus", size: "2.5 MB", date: "2024-03-10" },
    { title: "Organic Chemistry Notes", size: "1.8 MB", date: "2024-03-12" },
    { title: "Physics Lab Manual", size: "3.2 MB", date: "2024-03-14" },
  ];

  return (
    <div className="material-container">
      <h2>Study Material Download</h2>
      {materials.map((material, index) => (
        <div key={index} className="material-item">
          <div>
            <h3>{material.title}</h3>
            <p>PDF • {material.size}</p>
            <p>Uploaded: {material.date}</p>
          </div>
          <button>Download</button>
        </div>
      ))}
    </div>
  );
};

export default StudyMaterialDownload;
