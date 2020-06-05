import MUtil from 'util/mm.jsx'
const _mm = new MUtil()
class User {
    login(loginInfo){
        return  _mm.request({
            type:"post",
            url:"/api/user/login.do",
            data:loginInfo
        })
    }
    checkLogin(loginInfo){
        if(loginInfo.username.length===0){
            return {
                status:false,
                msg:'用户名不能为空！'
            }
        }
        if(loginInfo.password.length===0){
            return {
                status:false,
                msg:'密码不能为空！'
            }
        }
        return {
            status:true
        }
    }
    loginOut(){
        return _mm.request({
            url:"/api/user/logout.do",
            type:"post"
        })
    }
    getUserData(pageNum){
        return _mm.request({
            url:"/api/manage/user/list.do",
            type:"post",
            data:{
                pageNum
            }
        })
    }
}

export default User