import { formatTImestampToTime, formatTimestampToDateWithTime } from "@/public/constants/utils";

export default function NotificationDetail({
  notification,
}: {
  notification: Object;
}) {

  return (
		<div className="h-1/4 w-full border-b border-gray-light">
			<div className="p-5 inline-grid w-full">
				<label className="text-xs text-gray">
					{formatTimestampToDateWithTime(notification?.date) + " " + formatTImestampToTime(notification?.date)} 
					</label>
				<label className="text-base font-bold">{notification?.title}</label>
				<label className="text-base">{notification?.message}</label>
			</div>
		</div>
  );
}
