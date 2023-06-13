import {render} from "@testing-library/react";
import Header from "../Header";

test("Logo should load on rendering header",()=>{
    // load header
    // react testing library is giving us this container
    const header=render(<Header/>);

    console.log(header);

    // check if logo is loaded
})