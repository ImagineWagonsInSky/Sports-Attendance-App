import React from "react";
import { useState } from 'react';
import axios from 'axios';

const AddSessionPage = () => {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleAddSession = () => {
        axios.post('http://localhost:8000/api/sessions/create/', {
            date: date,
            description: description,
        })
            .then(res => {
                alert('Session created!');
            })  
            .catch(err => console.log(err));
    };
    return (
        <div>
            <text>This is the adding session page</text>
            <div>
                <form>
                    <label>Date:
                        <input
                            type="datetime-local"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </label>
                    <label>Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <button onClick={handleAddSession}>Add Session</button>
                </form>
            </div>
        </div>
        
    );
};

export default AddSessionPage;