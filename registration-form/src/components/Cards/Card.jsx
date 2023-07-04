
const Card = ({user}) => (
     

    <> 
        <h2 className="user-name card-title">{user.firstName} {user.lastName}</h2>
      <div className="details-container">
        <p className="detail">
          <span className="detail-label">&#9742;</span> {/* Phone symbol */}
          <span className="detail-value">{user.mobile}</span>
        </p>
        <p className="detail">
          <span className="detail-label">&#9993;</span> {/* Email symbol */}
          <span className="detail-value">{user.email}</span>
        </p>
        <p className="detail">
          <span className="detail-label">&#127757;</span> {/* State symbol */}
          <span className="detail-value">{user.state}</span>
        </p>
        <p className="detail">
          <span className="detail-label">&#127758;</span> {/* Country symbol */}
          <span className="detail-value">{user.country}</span>
        </p>
        <p className="detail">
          <span className="detail-label">&#127968;</span> {/* Address symbol */}
          <span className="detail-value">{user.address1}</span>
        </p>
        <p className="detail">
          <span className="detail-label">&#127968;</span> {/* Address symbol */}
          <span className="detail-value">{user.address2}</span>
        </p>
        <p className="detail">
          <span className="detail-label">&#127760;</span> {/* Zip Code symbol */}
          <span className="detail-value">{user.zipCode}</span>
        </p>
      </div>
    </>

)


export default Card