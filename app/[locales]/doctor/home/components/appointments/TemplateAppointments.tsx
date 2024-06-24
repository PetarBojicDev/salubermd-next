import React from "react";
import "server-only";
import styles from '../../home.module.css';
import useTranslate from "@/public/translate/translate";

export default async function TemplateAppointments() {

	const { appointmentsLabels } = await useTranslate();

  return (
    <div className="mb-5 md:mr-5 mr-0">
			<div className="h-7">
					<label className="font-bold text-md text-gray">{appointmentsLabels.labelAppointments}</label>
			</div>
			<div className="w-full">
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className="md:w-full w-1/2 inline-block">
						<div className={`rounded-lg shadow-md w-full bg-gray-card inline-flex
							${index == 0 && "mr-5 md:mb-0 mb-5"}`}>
							<div className="w-1/4">
								<div className="p-5 inline-grid w-full pt-7">
									<div className="bg-gray-card-text h-4 w-2/3 rounded-md mb-1 skeleton"></div>
									<div className="bg-gray-card-text h-4 w-3/4 rounded-md mb-1 skeleton"></div>
								</div>
							</div>
							<div className="h-full w-3/4">
								<div className="h-7 inline-flex justify-between w-full">
									<div className="p-5 inline-grid w-full pt-7">
										<div className="bg-gray-card-text h-4 w-1/4 rounded-md mb-1 skeleton"></div>
										<div className="bg-gray-card-text h-4 w-1/3 rounded-md mb-1 skeleton"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}
