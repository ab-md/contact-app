import styles from "./contactList.module.css";
import ContactItem from "./ContactItem";
import { confirmToast } from "../scripts/alerts";

const ContactList = ({ contacts, setContacts }) => {

    const deleteContact = (id) => {
        if (confirm("Are you sure you want to delete the contact?")) {
            // if (confirmToast()) {
            const newContacts = contacts.filter(item => item.id !== id);
            setContacts(newContacts);
        } else {
            return;
        }
    }

    return (
        <div className="p-12 lg:p-0 lg:py-12">
            <p className="text-xl text-indigo-600 font-bold">
                Contact's List
            </p>

            <div
                className={
                    `${contacts?.length && `bg-white ${styles.shadow}`} 
                    bg-gray-300 mt-6 p-8 rounded-lg grid gap-y-3`
                }
            >
                {
                    !contacts?.length ? (
                        <p className="text-gray-700 font-bold text-center">
                            No Contacts Yet!
                        </p>
                    ) : (
                        contacts?.map(contact => (
                            <ContactItem
                                key={contact.id}
                                contact={contact}
                                deleteContact={deleteContact}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default ContactList;