function ProfileCard({name,role,avatar}){
    return(
        <div className="card">
            <span>{avatar}</span>
            <div>
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
        </div>
    );
}

export default ProfileCard;