const BasicInfo =(props)=>{
    return (
        <div className="basicInfoStyle">
            <div className="nameDiv">
                <img src={props.image} alt="" />
                <p> <span>{props.name}</span></p>
            </div>
            <div className="basicDetails">
                
                <p>Age: <span>{props.age}</span></p>
                <p>Location: <span>{props.location}</span></p>
                <p>Telephone: <span>{props.telephone}</span></p>
            </div>
        </div>
    );
}

export default BasicInfo