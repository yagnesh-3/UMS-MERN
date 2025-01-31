import React from 'react'
import style from './css/timetable.module.css'
import timetable from '../data/timetable'
const Timetable = () => {
  return (
    <div>
      <div className={style.body}>
        <div className={style.body2}>

          <div className={style.tablediv}>
            <h1 className={style.heading}>Timetable</h1>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>

                </tr>
              </thead>
              <tbody>
                {timetable.map((item) => (
                  <tr key={item.time}>
                    <td>{item.time}</td>
                    <td>{item.monday || "-"}</td>
                    <td>{item.tuesday || "-"}</td>
                    <td>{item.wednesday || "-"}</td>
                    <td>{item.thursday || "-"}</td>
                    <td>{item.friday || "-"}</td>
                    <td>{item.saturday || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Timetable
