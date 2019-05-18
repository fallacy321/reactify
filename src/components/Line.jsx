import React from 'react';
import { LinePlot } from "d3plus-plot";

class Line extends React.PureComponent {
    render() {
        var data = [
            { id: "alpha", x: 4, y: 9 },
            { id: "alpha", x: 5, y: 17 },
            { id: "alpha", x: 6, y: 13 },
            { id: "beta", x: 4, y: 17 },
            { id: "beta", x: 5, y: 8 },
            { id: "beta", x: 6, y: 13 },
            { id: "gamma", x: 4, y: 14 },
            { id: "gamma", x: 5, y: 9 },
            { id: "gamma", x: 6, y: 11 }
        ];

        return <LinePlot />
        // .data(data)
        // .groupBy("id")
        // .shapeConfig({
        //     Line: {
        //         strokeLinecap: "round",
        //         strokeWidth: 10
        //     },
        //     sort: function (a, b) {
        //         if (a.id === "beta") return 1;
        //         else return -1;
        //     }
        // })
        //.render();
        // return <div>test</div>
    }
}
export default Line;