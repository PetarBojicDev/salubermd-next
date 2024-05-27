import React from "react";
import HomepageCard from "../../../../components/HomepageCard";

const TemplateAppointments: React.FC = () => {

  return (
    <div className="block w-full h-5/6 pr-5">
			<div className="h-1/4 mb-2">
				<HomepageCard customStyle="mb-2 w-full h-full bg-gray-card">
					<></>
				</HomepageCard>
			</div>
			<div className="h-1/4 mb-2">
				<HomepageCard customStyle="mb-2 w-full h-full bg-gray-card">
					<></>
				</HomepageCard>
			</div>
			<div className="h-1/4 mb-2">
				<HomepageCard customStyle="mb-2 w-full h-full bg-gray-card">
					<></>
				</HomepageCard>
			</div>
			<div className="h-1/4 mb-2">
				<HomepageCard customStyle="mb-2 w-full h-full bg-gray-card">
					<></>
				</HomepageCard>
			</div>
		</div>
  );
}

export default TemplateAppointments;
