import type { CallRecord } from "../../types/conversation.type"
import { useState, useEffect } from "react";
import Chevron from "../../assets/chevron.svg";
import React from "react";
import '../../routes/Demo.css'

interface TableProps {
  records: CallRecord[];
  onOpenFollowUpNotes?: (recordId: string) => void;
}


export function Table({records, onOpenFollowUpNotes}: TableProps) {
  const [newRecordIds, setNewRecordIds] = useState<string[]>(records.map(record => record.id));

  useEffect(() => {
    if (records.length > 0) {
      const latestRecord = records[0]; 
      if (latestRecord && !newRecordIds.includes(latestRecord.id)) {
        setNewRecordIds(prev => [...prev, latestRecord.id]);
        
        setTimeout(() => {
          setNewRecordIds(prev => prev.filter(id => id !== latestRecord.id));
        }, 5000);
      }
    }
  }, [records, newRecordIds]);
  
  const handleOpenFollowUpNotes = (recordId: string) => {
    if (onOpenFollowUpNotes) {
      onOpenFollowUpNotes(recordId);
    }
  }
  

  return (
    <table className="history-table">
      <thead>
        <tr>
          <th className="header-left-corner">ID</th>
          <th>Call&nbsp;ID</th>
          <th>Call&nbsp;Status</th>
          <th>Created&nbsp;Date</th>
          <th>Duration</th>
          <th>Urgent&nbsp;Status</th>
          <th>Transfer&nbsp;To</th>
          <th>Transfer&nbsp;Status</th>
          <th>Short&nbsp;Description</th>
          <th className="header-right-corner">Call&nbsp;Details</th>
        </tr>
      </thead>
      <tbody>
      {records.map((record) => {
        return (
          <React.Fragment key={record.id}>
            <tr className={newRecordIds.includes(record.id) ? "new-record-highlight" : ""}>
              <td>{record.id}</td>
              <td data-label="Call ID">{record.callId}…</td>
              <td className="status-container" data-label="Call Status">
                <span className="status ongoing">
                  Ongoing
                  <div className="circle" />
                </span>
              </td>
              <td data-label="Created Date">{record.createdDate}</td>
              <td data-label="Duration">{record.duration}</td>
              <td data-label="Urgent Status">
                <span className={`pill ${record.details.structuredData.urgentStatus ? 'urgent' : 'not-urgent'}`}>
                  {record.details.structuredData.urgentStatus ? 'Urgent' : 'Not Urgent'}
                </span>
              </td>
              <td data-label="Transfer To">
                <span className={`pill ${record.details.structuredData.transferTo === 'DVERT' ? 'dvert' : record.details.structuredData.transferTo === 'MSF' ? 'msf' : record.details.structuredData.transferTo === 'APS' ? 'aps' : 'not-applicable'}`}>
                  {record.details.structuredData.transferTo ? record.details.structuredData.transferTo : 'Not Applicable'}
                </span>
              </td>
              <td data-label="Transfer Status">
                <span className={`pill ${record.details.structuredData.transferred === true ? 'transferred' : record.details.structuredData.transferred === false ? 'not-transferred' : 'not-applicable'}`}>
                  {record.details.structuredData.transferred === true ? 'Transferred' : record.details.structuredData.transferred === false ? 'Not transferred' : 'Not Applicable'}
                </span>
              </td>
              <td data-label="Short Description">{record.details.summaryTitle}</td>
              <td className="expand-column">
                <button onClick={() => handleOpenFollowUpNotes(record.id)}>
                  <span>Expand View</span>
                  <img className="toggled" src={Chevron} alt="" />
                </button>
              </td>
            </tr>
          </React.Fragment>
        )})}
        
      </tbody>
    </table>
  )
}