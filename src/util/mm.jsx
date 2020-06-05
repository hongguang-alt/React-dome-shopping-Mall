class MUtil{
    request(param){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type :param.type || "get",
                url :param.url ||  "",
                dataType :param.dataType || "json",
                data :param.data || null ,
                success(res){
                    if(res.status===0){
                        typeof resolve ==="function" && resolve(res.data,res.msg);
                    }else if(res.status === "10"){ //没有登陆状态，强制登陆
                        this.doLogin()
                    }else{
                        typeof reject ==="function" && reject(res.data || res.msg);
                    }
                },
                error(err){
                    typeof reject ==="function" && reject(err.statusText);
                }
            })
        })
    }
    //跳转登陆
    doLogin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    errorTips(msg){
        alert(msg || "好像哪里不对~")
    }
    getUrlParam(name){
        //?usernam='1234'&text="20"
        let queryString = window.location.search.split('?')[1] || '',
            reg =new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result  = queryString.match(reg);
        return result ? encodeURIComponent(result[2]) : null
    }
    //封装存储信息模块
    setStorage(name,data){
        let typeData = typeof data
        if(typeData === 'object'){
            window.localStorage.setItem(name,JSON.stringify(data))
        }else if(["number","string","boolean"].indexOf(typeData) >0){
            window.localStorage.setItem(name,data)
        }else{
            alert("不能存储的数据类型！")
        }
    }
    getStorage(name){
        let data = window.localStorage.getItem(name)
        if(!data) return ''
        return JSON.parse(data)
    }
    removeStorage(name){
        window.localStorage.removeItem(name)
    }

}
export default MUtil