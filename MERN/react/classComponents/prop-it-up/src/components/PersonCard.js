import {useState} from 'react'

// class PersonCard extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             age: props.age
//         }
//     }

//     birthday = () => {
//         this.setState(state => {
//             return { age: state.age + 1}
//         })
//     }

//     render() {
//         const {firstName, lastName, hairColor} = this.props
//         return (
//             <div>
//                 <h1>{lastName}, {firstName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 <p>Hair Color: {hairColor}</p>
//                 <button onClick={this.birthday}>Birthday Button for {firstName} {lastName}</button>
//             </div>
//         )
//     }
// }

const PersonCard = props => {
    const [state, setState] = useState({
        age: props.age
    })

    const birthday = () => {
        setState({age: state.age+1})
    }

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {state.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={birthday}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard