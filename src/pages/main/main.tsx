import { ReactFragment } from "react";

function Main({children}: {children: ReactFragment}){

    return (
        <section className="main">
            <ul className="todo-list">
                {children}
            </ul>
        </section>
    );
}

export default Main;