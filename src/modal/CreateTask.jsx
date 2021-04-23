import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTask = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (e) =>{

        const{name, value} = e.target;
        if(name === "taskName")
            setTaskName(value)
        else    
            setDescription(value);
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        taskObj["Completed"] = false;
        save(taskObj);
    }
    return (
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create a New Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div>
                            <label>Task Name</label>
                            <input type="text" className="form-control" value= {taskName} onChange={handleChange} name="taskName"/>
                        </div>
                        <div>
                            <label>Task Description</label>
                            <textarea rows="6" className="form-control" value= {description} onChange={handleChange} name="description"></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={handleSave}>Add</Button>{' '}
                <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>    
    );
}

export default CreateTask;