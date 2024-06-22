import React from "react";
import "server-only";
import { cookies } from 'next/headers';
import styles from '../../home.module.css';
import useTranslate from "@/public/translate/translate";
import NotificationDetail from "./NotificationDetail";

async function getNotifications(server: string, token: string) {
  let offSet = new Date().getTimezoneOffset();
  const response = await fetch(`${server}/backoffice/webdoctor/notificationHistoryApp/0`, {
    method: 'GET',
    headers: {
      'X-AUTH-TOKEN': `${token}`
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  //put this here just to see suspense
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  const notifications = data.notifiche;
	const slicedNotifications = notifications.slice(0, 4);

	return slicedNotifications;
}

  export default async function Notifications() {

    const { notificationsLabels } = await useTranslate();
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const server = cookieStore.get("server")?.value;
    const notifications = await getNotifications(server || "", token || "");

		return (
			<div className={`block w-full ${styles.height70}`}>
				<div className={`${styles.height5} inline-flex justify-between w-full`}>
						<label className="font-bold text-md">{notificationsLabels.labelNotifications}</label>
						{notifications.length > 0 && 
          		<label className="font-bold text-md text-blue hover:underline underline-offset-2">
								{notificationsLabels.labelSeeAll}
							</label>}
				</div>
				<div className={`w-full rounded-lg shadow-md h-full bg-white ${styles.height95}`}>
					{notifications.map((element: Object, index: number) => {
						return (
							<NotificationDetail key={index} notification={element}/>
						);
						})
					}
				</div>
			</div>
		);
  }


