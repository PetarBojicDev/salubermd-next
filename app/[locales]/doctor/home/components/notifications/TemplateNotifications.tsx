import React from "react";
import "server-only";
import useTranslate from "@/public/translate/translate";

export default async function TemplateNotifications() {

	const { notificationsLabels } = await useTranslate();

  return (
    <div className="block w-full">
			<div className="h-7 inline-flex justify-between w-full">
					<label className="font-bold text-md text-gray">{notificationsLabels.labelNotifications}</label>
			</div>
			<div className="w-full rounded-lg shadow-md bg-gray-card">
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className="h-1/4 w-full border-b border-divider">
						<div className="p-5 inline-grid w-full pt-7">
							<div className={`bg-gray-card-text h-4 w-1/2 rounded-xl mb-1 skeleton`}></div>
							<div className={`bg-gray-card-text h-4 w-2/3 rounded-xl mb-1 skeleton`}></div>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}
