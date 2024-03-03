//Single selection
//Multiple Selection

import data from "./data";
import { useState } from "react";
import './styles.css';

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnabledMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
    }

    function handleMultipleSelection(currentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(currentId);
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(copyMultiple);
    }

    return <div className="wrapper">
        <button onClick={
            () => { setEnabledMultiSelection(!enableMultiSelection); setMultiple([]); setSelected(null); }
        }>
            Enable Multi Selection
        </button>
        <div className="accordion">
            {
                data && data.length > 0 ? data.map(dataItem =>
                    <div className="item" key={dataItem.id}>
                        <div onClick={
                            enableMultiSelection
                                ? () => handleMultipleSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)
                        }
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className="content">{dataItem.answer}</div> : null
                        }
                    </div>
                )
                    : <div>No data found!</div>
            }
        </div>
    </div >
}