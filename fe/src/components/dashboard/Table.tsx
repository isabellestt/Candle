import type { CallRecord } from "../../types/conversation.type"
import { useState, useEffect } from "react";
import chevron from "../../assets/chevron.svg";
import copyIdIcon from "../../assets/copy-icon.svg";
import React from "react";
import '../../routes/Demo.css'

interface TableProps {
  records: CallRecord[];
  onSelectRecord?: (record: CallRecord) => void;
  onDeleteRecord?: (recordId: string) => void;
  onOpenFollowUpNotes?: (recordId: string) => void;
}


export function Table({records, onSelectRecord, onDeleteRecord, onOpenFollowUpNotes}: TableProps) {
  const [expandedRecordId, setExpandedRecordId] = useState<string | null>("1");
  const [copiedCallId, setCopiedCallId] = useState<string | null>(null);
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
  

  const toggleRow = (id: string) => {
    setExpandedRecordId(expandedRecordId === id ? null : id);

    const selectedRecord = records.find(record => record.id === id);
    if (selectedRecord && onSelectRecord) {
      onSelectRecord(selectedRecord);
    }
  }

  const handleOpenFollowUpNotes = (recordId: string) => {
    if (onOpenFollowUpNotes) {
      onOpenFollowUpNotes(recordId);
    }
  }
  const handleDelete = (recordId: string) => {
    if (onDeleteRecord) {
      onDeleteRecord(recordId);
    }
  }
  
  const copyCallId = (callId: string) => {
    navigator.clipboard.writeText(callId);
    setCopiedCallId(callId);
    
    setTimeout(() => {
      setCopiedCallId(null);
    }, 2000);
  }

  return (
    <table className='history-table'>
      <thead>
        <tr>
          <th className="header-left-corner">Created&nbsp;Date</th>
          <th>Duration</th>
          <th>Call&nbsp;ID</th>
          <th>Urgent&nbsp;Status</th>
          <th>Transfer&nbsp;To</th>
          <th>Transfer&nbsp;Status</th>
          <th>Short&nbsp;Description</th>
          <th className="header-right-corner"></th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => {
          return (
            <React.Fragment key={record.id}>
              <tr className={newRecordIds.includes(record.id) ? "new-record-highlight" : ""}>
                <td data-label="Created Date">{record.createdDate}</td>
                <td data-label="Duration">{record.duration}</td>
                <td data-label="Call ID">{record.callId}…</td>
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
                <td>
                  <button onClick={() => toggleRow(record.id)} >
                    <img 
                      className={expandedRecordId === record.id ? "toggled" : ""} 
                      src={chevron} 
                      alt="" 
                    />
                  </button>
                </td>
              </tr>

              <tr className={`details-row ${expandedRecordId === record.id ? "" : "hidden"}`}>
              <td colSpan={8}>
                {record.details && (
                  <>
                    <div className="details-top-row">
                      <div className="details-call-id">call_{record.callId}..</div>
                      <button onClick={() => copyCallId(record.callId)}>

                        <img
                          className="copy-id-icon cursor-pointer"
                          src={copyIdIcon}
                          alt="Copy call ID"
                        />
                        {copiedCallId === record.callId && (
                          <span className="copied-indicator">Copied!</span>
                        )}
                      </button>
                    </div>
                    <div className="details-middle-row">
                      <div className="details-title">Call Summary</div>
                    </div>
                    <div className="details-bottom-row">
                      <div className="details-bottom-left">
                        <div className="summary-row">
                          <div className="summary-key">Call Started at:</div>
                          <div className="summary-value">{record.createdDate}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Call Duration:</div>
                          <div className="summary-value">{record.duration}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Type of Abuse:</div>
                          <div className="summary-value">{record.details.structuredData.abuseType}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Urgent Status:</div>
                          <div className="summary-value">{record.details.structuredData.urgentStatus ? 'Urgent' : 'Not Urgent'}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Transfer to:</div>
                          <div className="summary-value">{record.details.structuredData.transferTo ? record.details.structuredData.transferTo : 'Not Applicable'}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Transfer Status:</div>
                          <div className="summary-value">
                            {record.details.structuredData.transferred === true ? 'TRUE' : 
                              record.details.structuredData.transferred === false ? 'FALSE' : 'N/A'}
                          </div>
                        </div>
                      </div>
                      <div className="details-bottom-right">
                        <div className="summary-row">
                          <div className="summary-key">Caller Name:</div>
                          <div className="summary-value">{record.details.structuredData.callerName}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Caller Location:</div>
                          <div className="summary-value">{record.details.structuredData.callerLocation}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Latest Incident:</div>
                          <div className="summary-value">{record.details.structuredData.latestIncident}</div>
                        </div>
                        <div className="actions-row">
                          <button onClick={()=> handleOpenFollowUpNotes(record.id)} className="follow-up-button">
                            Open Follow-up Notes
                          </button>
                          <button onClick={() => handleDelete(record.id)}className="delete-case-button">Delete Case</button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </td>
            </tr>
            </React.Fragment>
          )
        })}
      </tbody>
    </table>
  )
}