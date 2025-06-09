import type { CallRecord } from "../../types/conversation.type"
import Chevron from "../../assets/chevron.svg";
import React from "react";
import '../../routes/Demo.css'

// added truncate tool
const truncate = (str: string, max: number) =>
  str.length > max ? str.slice(0, max) + "…" : str;

interface TableProps {
  records: CallRecord[];
  onOpenFollowUpNotes?: (recordId: string) => void;
  isConnected?: boolean
}

export function Table({records, onOpenFollowUpNotes}: TableProps) {
  const uniqueRecords = React.useMemo(() => {
    const uniqueIds = new Set();
    return records.filter(record => {
      // If we've seen this ID before, filter it out
      if (uniqueIds.has(record.id)) {
        console.warn(`Duplicate record detected with ID: ${record.id}`);
        return false;
      }
      // Otherwise, add it to our set and keep the record
      uniqueIds.add(record.id);
      return true;
    });
  }, [records]);
  
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
      {uniqueRecords.map((record) => {
        let callStatus = 'Ongoing'
        if (record.details.summaryTitle !== 'Active Call') {
          callStatus = 'Completed'
        }
        return (
          <React.Fragment key={record.id}>
            <tr>
              <td>{record.id}</td>
              {/* applied truncate tool */}
              <td data-label="Call ID">{truncate(record.callId, 8)}</td>
              <td className="status-container" data-label="Call Status">
                <span className={`status ${callStatus.toLowerCase()}`}>
                  {callStatus}
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
              {/* definitely needs to be fixed for scalability */}
              <td data-label="Transfer To">
                <span
                  className={`pill ${
                    record.details.structuredData.transferTo === 'DVERT'   ? 'dvert'   :
                    record.details.structuredData.transferTo === 'MSF'     ? 'msf'     :
                    record.details.structuredData.transferTo === 'APS'     ? 'aps'     :
                    record.details.structuredData.transferTo === 'NAVH'    ? 'navh'    :
                    record.details.structuredData.transferTo === 'SPF'     ? 'spf'     :
                    record.details.structuredData.transferTo === 'SCDF'    ? 'scdf'    :
                    record.details.structuredData.transferTo === 'PAVE'    ? 'pave'    :
                    record.details.structuredData.transferTo === 'TRANS'   ? 'trans'   :
                    record.details.structuredData.transferTo === 'START'   ? 'start'   :
                    record.details.structuredData.transferTo === 'AWARE'   ? 'aware'   :
                    record.details.structuredData.transferTo === 'SACC'    ? 'sacc'    :
                    record.details.structuredData.transferTo === 'CPS'     ? 'cps'     :
                    record.details.structuredData.transferTo === 'BIGLOVE' ? 'biglove' :
                    record.details.structuredData.transferTo === 'HEART'   ? 'heart'   :
                    record.details.structuredData.transferTo === 'TINKLE'  ? 'tinkle'  :
                    record.details.structuredData.transferTo === 'SOS'     ? 'sos'     :
                    record.details.structuredData.transferTo === 'IMH'     ? 'imh'     :
                    record.details.structuredData.transferTo === 'CCCH'    ? 'ccch'    :
                    record.details.structuredData.transferTo === 'TOUCH'   ? 'touch'   :
                    record.details.structuredData.transferTo === 'SILVER'  ? 'silver'  :
                    record.details.structuredData.transferTo === 'CARELINE'? 'careline':
                    record.details.structuredData.transferTo === 'FSC'     ? 'fsc'     :
                    record.details.structuredData.transferTo === 'STAR'    ? 'star'    :
                    record.details.structuredData.transferTo === 'CRWH'    ? 'crwh'    :
                    record.details.structuredData.transferTo === 'GSC'     ? 'gsc'     :
                    record.details.structuredData.transferTo === 'PCWG'    ? 'pcwg'    :
                    record.details.structuredData.transferTo === 'LAB'     ? 'lab'     :
                    record.details.structuredData.transferTo === 'CLC'     ? 'clc'     :
                    record.details.structuredData.transferTo === 'CJC'     ? 'cjc'     :
                    record.details.structuredData.transferTo === 'MSC'     ? 'msc'     :
                    'not-applicable'
                  }`}
                >
                  {record.details.structuredData.transferTo || 'Not Applicable'}
                </span>
              </td>
              <td data-label="Transfer Status">
                <span className={`pill ${record.details.structuredData.transferred === true ? 'transferred' : record.details.structuredData.transferred === false ? 'not-transferred' : 'not-applicable'}`}>
                  {record.details.structuredData.transferred === true ? 'Transferred' : record.details.structuredData.transferred === false ? 'Not transferred' : 'Not Applicable'}
                </span>
              </td>
              {/* applied truncate tool */}
              <td data-label="Short Description">{truncate(record.details.summaryTitle, 30)}</td>
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