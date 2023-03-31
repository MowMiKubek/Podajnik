import {useEffect} from 'react'
import Screw from "./Screw/Screw"

export default function ScrewContainer(props) {
    // const backendData = [
    //     {
    //         name: "Śrubka",
    //         code: "scr001",
    //         quantity: 123,
    //     },
    //     {
    //         name: "Gwóźdź",
    //         code: 'scr002',
    //         quantity: 100,
    //     },
    //     {
    //         name: "Wkręt",
    //         code: 'scr003',
    //         quantity: 12,
    //     },
    //     {
    //         name: "Nakrętka",
    //         code: 'scr004',
    //         quantity: 10,
    //     }
    // ]
    return (
        <>
            <h1>Main content</h1>
            <div className="d-flex srubki-container">
                {backendData.map(sruba => (
                    <Screw key={sruba.code} {...sruba} />
                ))}
            </div>
        </>
    )
}