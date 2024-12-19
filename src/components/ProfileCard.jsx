const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h2>Student Profile</h2>
      <div className="profile-container">
        <div className="details-section">
          <h3>Course/Programme Details:</h3>
          <p>
            <strong>Form No.:</strong> 333914
          </p>
          <p>
            <strong>Admission Year:</strong> 2023
          </p>
          <p>
            <strong>Registration No.:</strong> 23910203948
          </p>
          <p>
            <strong>Course Type:</strong> Post Graduate
          </p>
          <p>
            <strong>Course Name:</strong> MBA (Banking and Finance)
          </p>
        </div>
        <div className="details-section">
          <h3>Personal Details:</h3>
          <p>
            <strong>Name:</strong> Sharanjeet Singh
          </p>
          <p>
            <strong>Fathers Name:</strong> Parbinder Singh
          </p>
          <p>
            <strong>Gender:</strong> Male
          </p>
          <p>
            <strong>Category:</strong> General
          </p>
          <p>
            <strong>Date of Birth:</strong> 2002-06-30
          </p>
          <p>
            <strong>Nationality:</strong> Indian
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
