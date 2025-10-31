import axios from 'axios';
const commonAPI= async(httpmethod,url,reqbody)=>{
    const reqconfig={
        method:httpmethod,
        url,
        data:reqbody
    }
    //api calling using axios
    return await axios(reqconfig).then(res=>{
        return res
    })
    .catch(err=>{
        return err
    })
}
export default commonAPI