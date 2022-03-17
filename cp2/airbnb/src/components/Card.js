import React from "react"
import star from "../images/Star.png"

export default function Card(props) {
    let badgeText
    if (props.db.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.db.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {props.db.openSpots === 0 && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={`../images/${props.db.coverImg}`} alt="card"></img>
            <div className="card-info">
               <img className="star" src={star} alt="star"></img>
               <span>{props.db.stats.rating}</span>
               <span className="gray"> ({props.db.stats.reviewCount})</span>
               <span className="gray"> • {props.db.location}</span>
            </div>
            <p>{props.db.title}</p>
            <p><span className="bold">From $ {props.db.price}</span> / person </p>
        </div>
    )
}


// export default function Card() {
//     return (
//         <div className="card">
//             <img src={cardPhoto} className="card--image" />
//             <div className="card--stats">
//                 <img src={star} className="card--star" />
//                 <span>5.0</span>
//                 <span className="gray">(6) • </span>
//                 <span className="gray">USA</span>
//             </div>
//             <p>Life Lessons with Katie Zaferes</p>
//             <p><span className="bold">From $136</span> / person</p>
//         </div>
//     )
// }