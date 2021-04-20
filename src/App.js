import { React, Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './component/ContactForm';
import Container from './component/Container';
import ContactList from './component/ContactList';
import Filter from './component/Filter';
import { contactsSelectors } from './redux/contacts';

class App extends Component {
  render() {
    return (
      <Container>
        {this.props.isLoadingContacts && <h1>loading...</h1>}
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

export default connect(mapStateToProps)(App);
