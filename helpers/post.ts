"use server"
import pool from "@/config/db"


export default async function post(query:string,data:any,table:string='') 
{
  try
  {
    const res:any = await pool.query(query,data)
    return {err:false,id:res[0].insertId,table}
  }
  catch(err)
  {
    console.log(err)
    return {err}
  }
}