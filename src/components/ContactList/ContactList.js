import { List, ListItem, Button } from './ContactList.styled';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <Button onClick={() => onDelete(contact.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
