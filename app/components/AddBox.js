import React from 'react';
import Create from 'react-icons/lib/md/create'
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import Forms from './Forms'

const CreateButton = ({ onClick} ) => {
 const style={ 
    position: 'fixed',
    left: '50%',
    bottom: '20px',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto'
  }

  return(
    <Create style={style} onClick={onClick} size='4em'/>
)}
const AddBoxDialog = ( { fields, open, onClose, onSubmit } ) => { 
  const actions = [<FlatButton
    label="Cancel"
    secondary={true}
    onClick={onClose}
    />,
  <FlatButton
    label="Create"
    primary={true}
    onClick={onSubmit}
    />]
  return(
        <Dialog
          title='Add a new idea'
          modal={false}
          open={open}
          onRequestClose={onClose}
        >
        <Forms fields={fields} onSubmit={onSubmit} />
        </Dialog>
)}

export default ( {isOpen, openFn, closeFn, submitFn, fields} ) => {
  return(<div>
         <CreateButton onClick={openFn} />
         <AddBoxDialog open={isOpen} onClose={closeFn} onSubmit={submitFn} fields={fields} />
         </div>
        )}

