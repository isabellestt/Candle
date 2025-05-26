interface TableProps {
  createdDate: Date;
  duration: number;
  callId: string;
  transferred: boolean;
  transfer_to: string;
  urgent: boolean;
  name: string;
  location: string;
}

export function Table({
  createdDate,
  duration,
  callId,
  transferred,
  transfer_to,
  urgent,
  name,
  location
}: TableProps) {

  return (
    <div>

      <table>
        <tr>
          <th>Created Date</th>
          <th>Duration</th>
          <th>Call ID</th>
          <th>Status</th>
          <th>Transfer To</th>
          <th>Transferred</th>
          <th>Show summary</th>
        </tr>
        <tr>
          <td>{createdDate.toLocaleDateString()}</td>
          <td>{duration}</td>
          <td>{callId}</td>
          <td>{urgent ? <span>Urgent</span> : <span>Not urgent</span>}</td>
          <td>{transfer_to}</td>
          <td>{transferred}</td>
        </tr>
      </table>
      <span>{name}</span>
      <span>{location}</span>
    </div>
  )
}