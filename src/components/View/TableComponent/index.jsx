import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";
const TableComponent = ({ data, dataAvail }) => {
    const renderData = [
        {
            companyName: "141 Capital",
            symbol: "ONCP",
            marketCap: "$145.4k",
            action: "view",
            currentPrice: "$0.001 USD"
        },

        {
            companyName: "141 Capital",
            symbol: "BCOV",
            marketCap: "$394M",
            action: "Save",
            currentPrice: "$0.10 USD"
        },

    ]

    return (
        <div className="table">

            <div className="table_data_container">
                <div className="table_cont_header">
                    <div className="fields">
                        SAVE DATA TABLE
                    </div>

                </div>
                {
                    renderData.map((val, ind) => {
                        return (
                            <div className="table_cont_body" key={ind}>
                                <div className="fields">
                                    {val.companyName}
                                </div>
                                <div className="fields">
                                    <span className="symbol">
                                        {val.symbol}
                                    </span>
                                </div>
                                <div className="fields">
                                    {val.marketCap}
                                </div>
                                <div className="fields">

                                    <button className="btn_view prl">DELETE</button>

                                </div>
                                <div className="fields">
                                    {val.currentPrice}
                                </div>
                            </div>

                        )
                    })
                }


            </div>
            <div className="table_footer center">
                <Link to="/"> <button className="btn_view prl">BACK</button></Link>

            </div>
        </div>
    )

}

export default TableComponent