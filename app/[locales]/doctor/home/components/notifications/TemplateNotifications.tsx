import React from "react";
import "server-only";
import styles from '../../home.module.css';
import useTranslate from "@/public/translate/translate";

export default async function TemplateNotifications() {

	const { notificationsLabels } = await useTranslate();

  return (
    <div className={`block w-full ${styles.height70}`}>
			<div className={`${styles.height5} inline-flex justify-between w-full`}>
					<label className="font-bold text-md text-gray">{notificationsLabels.labelNotifications}</label>
			</div>
			<div className={`w-full rounded-lg shadow-md h-full bg-gray-card ${styles.height95}`}>
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className="h-1/4 w-full border-b border-divider">
						<div className="p-5 inline-grid w-full pt-7">
							<div className={`bg-gray-card-text h-4 w-1/2 rounded-md mb-1 skeleton`}></div>
							<div className={`bg-gray-card-text h-4 w-2/3 rounded-md mb-1 skeleton`}></div>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}
