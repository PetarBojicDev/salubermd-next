import React from "react";
import HomepageCard from "../../../../components/HomepageCard";
import "server-only";
import styles from '../../home.module.css';

const TemplateAppointments: React.FC = () => {

  return (
    <div className={`block w-full pr-5 ${styles.height70}`}>
			<div className="h-1/4">
				<HomepageCard customStyle="mb-2 w-full h-full bg-gray-card">
					<></>
				</HomepageCard>
			</div>
			<div className="h-1/4">
				<HomepageCard customStyle="mb-2 w-full h-full bg-gray-card">
					<></>
				</HomepageCard>
			</div>
			<div className="h-1/4">
				<HomepageCard customStyle="mb-2 w-full h-full bg-gray-card">
					<></>
				</HomepageCard>
			</div>
			<div className="h-1/4">
				<HomepageCard customStyle="mb-2 w-full h-full bg-gray-card">
					<></>
				</HomepageCard>
			</div>
		</div>
  );
}

export default TemplateAppointments;
