function get_data(){
    const data_try = require('./db.json')
    return data_try
}
const resultado = get_data()
export default resultado