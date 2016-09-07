import {pie} from 'd3-shape';
export default function () {
    var data = [1, 1, 2, 3, 5, 8, 13, 21];
    return pie()(data);
};
