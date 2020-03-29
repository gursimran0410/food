import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 95Kf92muA01dVC_y_8kDiGqKruBZSGu4SD9-JDZFgD8KrI99x-h0OqVGc7bsOrpYtv2-Mjax-rG5LBKrN7TvjmD_vntFF591xwV37gENhM2sfRuN3rtsVCsUo1WAXnYx'
    }
})