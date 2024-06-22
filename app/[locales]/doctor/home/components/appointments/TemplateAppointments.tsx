import React from "react";
import "server-only";
import styles from '../../home.module.css';
import useTranslate from "@/public/translate/translate";

export default async function TemplateAppointments() {

	const { appointmentsLabels } = await useTranslate();

  return (
    <div className={`block w-full pr-5 ${styles.height70}`}>
			<div className={`${styles.height5} inline-flex justify-between w-full`}>
					<label className="font-bold text-md text-gray">{appointmentsLabels.labelAppointments}</label>
			</div>
			<div className={`w-full ${styles.height95}`}>
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className="h-1/4">
						<div className={`${styles.height90} w-full`}>
							<div className="rounded-lg shadow-md w-full h-full mb-2 bg-gray-card inline-flex">
								<div className={`h-full ${styles.width25}`}>
									<div className="p-5 inline-grid w-full pt-7">
										<div className={`bg-gray-card-text h-4 ${styles.width67} rounded-md mb-1 skeleton`}></div>
										<div className={`bg-gray-card-text h-4 ${styles.width80} rounded-md mb-1 skeleton`}></div>
									</div>
								</div>
								<div className={`h-full ${styles.width5} pt-2 pb-2`}>
									<div className="divider divider-horizontal h-full"></div>
								</div>
								<div className={`h-full ${styles.width70}`}>
									<div className="h-7 inline-flex justify-between w-full">
										<div className="p-5 inline-grid w-full pt-7">
											<div className={`text-xs bg-gray-card-text h-4 ${styles.width25} rounded-md mb-1 skeleton`}></div>
											<div className={`text-xs bg-gray-card-text h-4 ${styles.width30} rounded-md mb-1 skeleton`}></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.height10} w-full`}/>
					</div>
				))}
			</div>
		</div>
  );
}
