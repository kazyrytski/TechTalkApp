import React from "react";
import DatePicker from "react-datepicker";
import {makeStyles} from "@material-ui/core/styles";
import TimePicker from 'react-time-picker';

const useStyles = makeStyles({
    input: {
        marginBottom: 20,
    },
    editor: {
        minHeight: 300,
        WebkitBoxShadow: "0px 0px 8px -1px rgba(34, 60, 80, 0.3)",
        MozBoxShadow: "0px 0px 8px -1px rgba(34, 60, 80, 0.3)",
        BoxShadow: "0px 0px 8px -1px rgba(34, 60, 80, 0.3)",
        boxSizing: "border-box",
        padding: 10
    }
    ,
    dateBlock: {
        margin: "10px 10px",
        padding: "0",
        display: "flex",
        justifyContent: "space-between"
    },
    dateField: {
        width: 150
    },
    element: {

    },
    title: {
        paddingBottom: 5,
        display: 'flex'
    },
    pick: {
        height: 34,
        width: 155,
        padding: "0 5px",
        border: "1px solid black",
        cursor: "pointer",
        boxShadow: "none",
        zIndex: 3
    },
    pickTime: {
        height: 34,
        width: 155,
        boxSizing: 'border-box',
        padding: "0 0px",
        cursor: "pointer",
        boxShadow: "none",
        zIndex: 3
    }

});

export default function CustomDatePicker({date, setDate, time, setTime}) {
    const classes = useStyles();

    return (
        <div className={classes.dateBlock}>
            <div >
                <div className={classes.title}>Start Date
                    <div style={{ color: "#d9dadb", marginLeft: "3px", letterSpacing: "-0.2px" }}>
                        &nbsp; (inclusive)
                    </div>
                </div>
                <DatePicker
                    className={classes.pick}
                    selected={date}
                    onChange={date => {
                        setDate(date)
                    }}
                    dateFormat="d MMM yyyy"
                />
            </div>
            <div >
                <div className={classes.title}>Start Date
                    <div style={{ color: "#d9dadb", marginLeft: "3px", letterSpacing: "-0.2px" }}>
                        &nbsp; (inclusive)
                    </div>
                </div>
                <TimePicker
                    className={classes.pickTime}
                    onChange={setTime}
                    value={time}
                />
            </div>

        </div>
    )
}