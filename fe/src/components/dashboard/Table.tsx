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
        <thead>
          <tr className="p-2 border">
            <th className="p-2 border">Created Date</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Call ID</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Transfer To</th>
            <th className="p-2 border">Transferred</th>
            <th className="p-2 border">Show summary</th>
          </tr>
        </thead>
        <tbody>

          <tr className="p-2 border">
            <td className="p-2 border">{createdDate.toLocaleDateString()}</td>
            <td className="p-2 border">{duration}</td>
            <td className="p-2 border">{callId}</td>
            <td className="p-2 border">{urgent ? <span>Urgent</span> : <span>Not urgent</span>}</td>
            <td className="p-2 border">{transfer_to}</td>
            <td className="p-2 border">{transferred}</td>
            <td className="p-2 border">hidden</td>
          </tr>
        </tbody>
      </table>
      <p>name: {name}</p>
      <p>location: {location}</p>
    </div>
  )
}