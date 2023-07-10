import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '@/config/db'

export default async function handler(req:NextApiRequest,res:NextApiResponse) 
{
   const myBody={...req.body, fecha:new Date(req.body.fecha),paciente_id:Number(req.body.paciente_id)}
   await pool.query("INSERT INTO Consultas SET ?",myBody)
}