function UserInfo(props){
    // console.log(props);
    return(
        <>
        <p style={{color:props.favColor}}>my name is {props.name}   </p>
        <p>my Fav food {props.Food}</p>
        </>
    )
}

export default UserInfo;
