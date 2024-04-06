const Notification =({notificationData}) =>{
    const notificationStyle = {
        position: 'absolute',
        top:100 ,
        right:30,
        backgroundColor:'green',
        color:'white',
        padding:20,
        borderRadius:10,
    }
    return(
        <article style={notificationStyle}>
            <h3>Succes</h3>
            {notificationData.text}
        </article>
    )
}
export default Notification 