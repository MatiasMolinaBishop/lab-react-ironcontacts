import AddContact from "./AddContact"

function OriginalList (props) {

    const contacts = props.currentContacts
    

    return(
        <div className="App">
        
        <AddContact contacts = {contacts}></AddContact>

        {contacts.map((contact)=>{
             return (
        <div class='productFlex row-style'>
        
                <table class='tableStyle'>
                    <thead>
                    <th>
                    <img src={contact.pictureUrl} height={100} alt="food" />
                    </th>
                <th>
                    <p>{contact.name}</p>
                </th>
                <th>
                <p>{contact.popularity}</p>
                </th>
                <th>
                <p>
                    {contact.wonOscar === true && <p>YES</p>}
                    {contact.wonOscar === false && <p>NO</p>}
                    {/* {contact.wonOscar === true && <FontAwesomeIcon icon={faStar}/>} */}
                </p>
                </th>
                <th>
                <p>
                {contact.wonEmmy === true && <p>YES</p>}
                {contact.wonEmmy ===false && <p>NO</p>}
                </p>
                </th>
                <th>
                    <button>DELETE</button>
               
                </th>
                </thead>
                </table>
        </div>
        )
    })}

        </div>
    )
}

export default OriginalList