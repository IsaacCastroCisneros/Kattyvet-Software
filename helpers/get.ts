"use server"

import pool from "@/config/db"

export default async function get(query:string) 
{

  try
  {
    const res =(await pool.query(query))[0] as Array<any>
    return {res,err:false}
  }
  catch(err)
  {
    return {res:[],err}
  }
}