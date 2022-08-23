import React from "react";

class Todos extends React.Component {

    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">
                    Stack Todos
                </h1>
            </div>
        )
    }
};

export default Todos; 


const todo = {
    id: 'laksd',
    text: 'main todo text',
    description: 'simple description',
    time: 'date',
    isComplete: false,
    isSelect: false

}

