import { ReactFragment } from "react";

function Main({children}: {children: ReactFragment}){

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" />
            <ul className="todo-list">
                {children}
            </ul>
        </section>
    );
}

export default Main;