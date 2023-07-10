import axios from "axios"

type method='GET'|'POST'
type type='consultas'|'pacientes'

export default async function request(method:method,type:type,body:any='',query:string='')
{
   const url =`http://localhost:3000/api/${type}/${query}`
   let data:any=undefined

   try
   {
       if(method==='GET')
       {
        data= await get(url)
       }
       if(method==='POST')
       {
        data= await post(url,body)
       }

       return {res:data,err:false}
   }
   catch(err)
   {
     return { res: [], err };
   }
}

async function get(url:string)
{
   return (await axios.get(url)).data
}

async function post(url:string,body:any)
{
  return (await axios.post(url,body)).data
}