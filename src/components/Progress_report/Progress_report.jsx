import React from 'react'
import './Progress_report.css'
import bar_chart from '../../assets/bar_chart.png'

const Progress_report = () => {
  return (
    <div className="progress_report_main">
        <div className="progress_report_left">
            <div className="progress_report_left_top">
                Mock Test Analysis
            </div>
            <div className="progress_report_left_bottom">
                <button className="progress_report_button">
                    View
                </button>
            </div>
        </div>

        <div className="progress_report_right">
            <div className="barchart_logo">
                <img src={bar_chart} alt="Barchrt"></img>
            </div>
        </div>
    </div>
  )
}

export default Progress_report