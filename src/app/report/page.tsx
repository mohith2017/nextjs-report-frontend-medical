import fs from 'fs';
import type { Metadata } from 'next';
import { getReportData } from '../../../api/cohelm';

export const metadata: Metadata = {
  title: 'Cohelm: Report',
  description: 'Check out your report here!'
}




export default async function Page() {
  const report  = await getReportData(); 

  return (
    <>
      Report page
        <p>{report.case_id}</p>
        
    </>


  )
}