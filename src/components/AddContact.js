import jasonData from '../contacts.json';

function AddContact (props) {


const contacts = props.contacts 


const addRandom = (event) => {
console.log(event.target.value)
let rando = Math.floor(Math.random()*jasonData.length)
console.log(rando)
contacts.push(jasonData[rando])
let newArr =  contacts.push(jasonData[rando])
console.log(newArr)

//setContacts(newArr)



    return(
        <div>
            <button onClick={addRandom}>Add Random currentContacts</button>
        </div>
    )

    }
}

export default AddContact