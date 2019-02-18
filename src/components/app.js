import React, {Component} from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import contactData from '../data/contacts.js';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: contactData
        }
        this.addContact = this.addContact.bind(this);
    }

    addContact(contact) {

        console.log('App: addComponent:', contact);

        this.setState({
            contact : [contact,...this.state.contacts]
        })
    }





render(){


    return (
        <div className='container'>
            <h1 className='text-center'>AddressBook</h1>
            <div className="row">
                <div className="col-4">
                    <ContactForm add={this.addContact}/>
                </div>
                <ContactList contact={this.state.contacts}/>

            </div>
        </div>

    )
}
}

export default App;

