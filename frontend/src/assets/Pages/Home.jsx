import React, { useState } from 'react'
import style from './css/home.module.css'
const Home = () => {
    const attendence = [{ course: "CSE329", value: 95 },
    { course: "CSE330", value: 90 },
    { course: "CSE331", value: 81 },
    { course: "CSE331", value: 72 }];
    const aggatt = useState(88);

    const timetable = [{ course: "CSE329", time: "09:00AM TO 10:00AM", room: "26-601A" },
    { course: "CSE330", time: "09:00AM TO 10:00AM", room: "26-601A" },
    { course: "CSE331", time: "10:00AM TO 11:00AM", room: "26-601A" },
    { course: "CSE332", time: "11:00AM TO 12:00PM", room: "26-601A" },
    { course: "CSE333", time: "01:00PM TO 02:00PM", room: "26-601A" },

    ]
    return (
        <div className={style.body}>
            <div className={style.body2}>
                <h1 className={style.heading}>Attendence View</h1>

                <div className={style.attendence}>
                    {attendence.map((item) =>

                        <div className={style.attmain}>
                            <h3>{item.course} </h3>
                            <div className={style.bar}>
                                <div className={style.fill} style={{ width: `${item.value}%` }}>
                                    <p>{item.value}%</p>
                                </div>
                            </div>

                        </div>

                    )}
                    <h3 id={style.agg}>ATTENDENCE : {aggatt}%</h3>
                </div>
                <div className={style.timetable}>
                    <h1 className={style.heading}>TOday TimeTable</h1>
                    <div className={style.cards_container}>

                        {timetable.map((item) => {
                            return (
                                <div className={style.card}>
                                    <h1>{item.course}</h1>
                                    <p>{item.room}</p>
                                    <h2>{item.time} </h2>

                                </div>
                            )
                        })}


                    </div>
                    <center>

                        <button className={style.heading}>View Full TimeTable</button>
                    </center>
                    <hr />
                </div>

                <div className={style.lastSection}>
                    <div className={style.Announcements}>
                        <h1>Announcments</h1>
                        <hr />
                        <p>No Announcements till now</p>

                    </div>
                    <div className={style.teacherOnLeave}>
                        <h1>Teacher on Leave</h1>
                        <hr />
                        <p>No results Found</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
