import { ReactFragment } from "react";

function Main({children}: {children: ReactFragment}){

    return (
        <section>
            <ul>
                {children}
            </ul>
        </section>
    );
}

export default Main;