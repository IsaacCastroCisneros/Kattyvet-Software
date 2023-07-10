export default function settingPath(url:string,id:string)
{
  const key ='PATH_COLLECTION'
  const prev:Array<{url:string,id:string}>= JSON.parse(sessionStorage.getItem(key)||'[]')
 
  const current = [...prev,{url,id}]

  sessionStorage.setItem(key,JSON.stringify(current))
}