interface CheckCodeProps {
    code: string;
}

export const apiGetServerByCode = async (payload: CheckCodeProps) => {
    try {
        const response = await fetch(`https://wseu.salubermd.com/backoffice/shared/getServerByCode`, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                'access-control-request-headers': 'X-AUTH-TOKEN'
            },
            body: JSON.stringify(payload),
        });
        if(response?.status === 200){
            const responsePayload = await response.json();
            return responsePayload;
        }else{
            return null;
        }
    } catch (error) {
        console.log(`Error in apiGetServerByCode call: ${error}`);
        return null;
    }
}

export const callAPILsLanguage = async () => {
    let {hostAPI} = require('../global/hostApi'); 
    try {
        const response = await fetch(`${hostAPI}/backoffice/util/getAllLingue`, {
            method: 'GET',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                'access-control-request-headers': 'X-AUTH-TOKEN'
            }
        });
        if(response?.status === 200){
            const responsePayload = await response.json();
            return responsePayload;
        }else{
            return null;
        }
    } catch (error) {
        console.log(`Error in callAPILsLanguage call: ${error}`);
        return null;
    }
}

interface CheckEmailProps {
    code: string;
    email: string;
    locale: string;
}

export const apiPostCheckEmail = async (payload: CheckEmailProps) => {
    let {hostAPI} = require('../global/hostApi'); 
    try {
        const response = await fetch(`${hostAPI}/backoffice/webdoctor/checkEmailCode`, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                'access-control-request-headers': 'X-AUTH-TOKEN'
            },
            body: JSON.stringify(payload),
        });
        if(response?.status === 200){ 
            const responsePayload = await response.json();
            return responsePayload;
        }else{
            return null
        }
    } catch (error) {
        console.log(`Error in apiPostCheckEmail call: ${error}`);
        return null;
    }
}

