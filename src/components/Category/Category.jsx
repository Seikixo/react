
function Category(props){

    const headers = props.section;

    const listNames = headers.map(header => 
                                            <li>{header.name}</li>
                                )

    return(
        <>
            <h3>{listNames}</h3>
        </>
    );
}

export default Category;