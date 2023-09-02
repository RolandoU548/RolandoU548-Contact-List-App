const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: []
    },
    actions: {
      loadContacts: async () => {
        try {
          let response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/agenda/rolando"
          );
          let data = await response.json();
          setStore({
            contacts: data
          });
        } catch (error) {
          console.log(error);
        }
      },
      addContact: async currentContact => {
        try {
          let response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                full_name: currentContact.full_name,
                email: currentContact.email,
                agenda_slug: "rolando",
                address: currentContact.address,
                phone: currentContact.phone
              })
            }
          );
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            getActions().loadContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
      editContact: async currentContact => {
        try {
          let response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${currentContact.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                full_name: currentContact.full_name,
                email: currentContact.email,
                agenda_slug: "rolando",
                address: currentContact.address,
                phone: currentContact.phone
              })
            }
          );
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            getActions().loadContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
      deleteContact: async currentContactId => {
        try {
          let response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${currentContactId}`,
            {
              method: "DELETE"
            }
          );
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            getActions().loadContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
      formatData: data => {
        return data
          .sort((a, b) => {
            return a.full_name.localeCompare(b.full_name);
          })
          .map(contact => {
            const firstNameLetter = contact.full_name.charAt(0).toUpperCase();
            const restOfName = contact.full_name.slice(1).toLowerCase();
            const firstAddressLetter = contact.address.charAt(0).toUpperCase();
            const restOfAddress = contact.address.slice(1).toLowerCase();
            const email = contact.email.toLowerCase();
            return {
              ...contact,
              full_name: firstNameLetter + restOfName,
              address: firstAddressLetter + restOfAddress,
              email: email
            };
          });
      }
    }
  };
};

export default getState;
