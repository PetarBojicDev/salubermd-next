import React from "react";
import HomepageCard from "../../../../components/HomepageCard";

const TemplateVisits: React.FC = () => {

  return (
    <div className="inline-flex w-full h-5/6">
        <div className="w-1/4">
            <HomepageCard customStyle="mr-5 h-full bg-gray-card">
                <></>
            </HomepageCard>
        </div>
        <div className="w-1/4">
            <HomepageCard customStyle="mr-5 h-full bg-gray-card">
                <></>
            </HomepageCard>
        </div>
        <div className="w-1/4">
            <HomepageCard customStyle="mr-5 h-full bg-gray-card">
                <></>
            </HomepageCard>
        </div>
        <div className="w-1/4">
            <HomepageCard customStyle="mr-5 h-full bg-gray-card">
                <></>
            </HomepageCard>
        </div>
    </div>
  );
}

export default TemplateVisits;
