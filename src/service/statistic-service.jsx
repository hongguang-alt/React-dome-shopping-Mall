import MUtil from 'util/mm.jsx'
const _mm = new MUtil()
class Statistic {
    homeData(){
        return  _mm.request({
            url:"/api/manage/statistic/base_count.do"
        })
    }
}

export default Statistic