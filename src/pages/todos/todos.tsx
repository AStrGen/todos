import { Component, ReactElement } from 'react';
import Todo from '../../components/todo/todo';
import Main from '../main/main';

class Todos extends Component {
    todos: ReactElement[] = [];
    enteredText = '';

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.todos = [];
        this.enteredText = '';
        this.state = {todos: []}; 
    }

    handlePress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            this.todos.push(<Todo id={this.todos.length + 1 } text={this.enteredText} />)
            this.setEnteredText('');
            this.setState({todos: this.todos});
        }
    };

    setEnteredText(text: string) {
        this.enteredText = text;
    }

    render () {
        return (
            <header className='header'>
                <h1>todos</h1>
                <input type='text' className='new-todo' placeholder='What needs to be done?' onKeyPress={(e) => this.handlePress(e)} onChange={(e) => this.setEnteredText(e.target.value)} />
                <Main>
                    {this.todos}
                </Main>
            </header>
        );
    }    
}

export default Todos;