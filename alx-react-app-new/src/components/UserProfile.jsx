function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#4B0082', fontSize: '24px', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px', marginBottom: '4px' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '16px', color: '#333' }}>{props.bio}</p>
    </div>
  );
}

export default UserProfile;

