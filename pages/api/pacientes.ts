import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '@/config/db'

export default async function handler(req:NextApiRequest,res:NextApiResponse) 
{
  console.log(req.query)

  try
  {
    if(req.method==='POST')
    {
      await pool.query("insert into Pacientes set ?",req.body)
    }
    if(req.method==='GET')
    {
      return res.json((await pool.query("select id from pacientes"))[0]) 
    }  
  }
  catch(err)
  {
    return {err}
  }
}