import type { CallRecord } from "../../types/conversation.type"
import { useState } from "react";
import chevron from "../../assets/chevron.svg";
import copyIdIcon from "../../assets/copy-icon.svg";
import React from "react";
import '../../routes/Demo.css'

interface TableProps {
  records: CallRecord[];
  onSelectRecord?: (record: CallRecord) => void;
}


export function Table({records, onSelectRecord}: TableProps) {
  const [expandedRecordId, setExpandedRecordId] = useState<string | null>("1");
  const toggleRow = (id: string) => {
    setExpandedRecordId(expandedRecordId === id ? null : id);

    const selectedRecord = records.find(record => record.id === id);
    if (selectedRecord && onSelectRecord) {
      onSelectRecord(selectedRecord);
    }
  }

  const copyCallId = (callId: string) => {
    navigator.clipboard.writeText(callId)
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
              <tr>
                <td data-label="Created Date">{record.createdDate}</td>
                <td data-label="Duration">{record.duration}</td>
                <td data-label="Call ID">{record.callId}…</td>
                <td data-label="Urgent Status">
                  <span className={`pill ${record.urgentStatus ? 'urgent' : 'not-urgent'}`}>
                    {record.urgentStatus ? 'Urgent' : 'Not Urgent'}
                  </span>
                </td>
                <td data-label="Transfer To">
                  <span className={`pill ${record.transferTo === 'DVERT' ? 'dvert' : record.transferTo === 'MSF' ? 'msf' : record.transferTo === 'APS' ? 'aps' : 'not-applicable'}`}>
                    {record.transferTo}
                  </span>
                </td>
                <td data-label="Transfer Status">
                  <span className={`pill ${record.transferred === true ? 'transferred' : record.transferred === false ? 'not-transferred' : 'not-applicable'}`}>
                    {record.transferred === true ? 'Transferred' : record.transferred === false ? 'Not transferred' : 'Not Applicable'}
                  </span>
                </td>
                <td data-label="Short Description">{record.summaryTitle}</td>
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
                      <img
                        className="copy-id-icon cursor-pointer"
                        src={copyIdIcon}
                        alt="Copy call ID"
                        onClick={() => copyCallId(record.callId)}
                      />
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
                          <div className="summary-value">{record.details.abuseType}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Urgent Status:</div>
                          <div className="summary-value">{record.urgentStatus ? 'Urgent' : 'Not Urgent'}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Transfer to:</div>
                          <div className="summary-value">{record.transferTo}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Transfer Status:</div>
                          <div className="summary-value">
                            {record.transferred === true ? 'TRUE' : 
                              record.transferred === false ? 'FALSE' : 'N/A'}
                          </div>
                        </div>
                      </div>
                      <div className="details-bottom-right">
                        <div className="summary-row">
                          <div className="summary-key">Caller Name:</div>
                          <div className="summary-value">{record.details.callerName}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Caller Location:</div>
                          <div className="summary-value">{record.details.callerLocation}</div>
                        </div>
                        <div className="summary-row">
                          <div className="summary-key">Latest Incident:</div>
                          <div className="summary-value">{record.details.latestIncident}</div>
                        </div>
                        <div className="actions-row">
                          <button className="follow-up-button">
                            Open Follow-up Notes
                          </button>
                          <button className="delete-case-button">Delete Case</button>
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