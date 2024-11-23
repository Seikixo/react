
function Status(props){

    if(props.isOnline){
        return(
            <p>Online</p>
        );
    }
    
    return(
        <p>Offline</p>
    );

}

export default Status;