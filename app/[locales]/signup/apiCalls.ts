interface CheckCodeProps {
    code: string;
}

export const apiGetServerByCode = async (payload: CheckCodeProps) => {
    try {
        const response = await fetch(`https://devel.salubermd.com/backoffice/shared/getServerByCode`, {
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
    let {hostAPI} = require('../../../public/constants/hostApi'); 
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
    let {hostAPI} = require('../../../public/constants/hostApi'); 
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


export const getSpecialtyByInitiativeId = async (language: string, initiativeId: number) => {
    let {hostAPI} = require('../../../public/constants/hostApi'); 
    try {
        const response = await fetch(`${hostAPI}/backoffice/webdoctor/getSpecialtyByInitiativeId/${language}/${initiativeId}`, {
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
        console.log(`Error in getSpecialtyByInitiativeId call: ${error}`);
        return null;
    }
}

interface AddUserProps {
    role: number,
    email: string,
    birthdate: string,
    username: string,
    locale: string,
    country: string,
    password: string,
    code: string,
    fee: number,
    currency: string,
    timeslot: number,
    privacyAgreed: string,
    signaturealt: string,
    signature: string,
    password1: string,
    nome: string,
    cognome: string,
    dob: string,
    gender: number,
    address: string,
    city: string,
    mobile: string,
    specializations: number[],
    school: string,
    lengthPractise: string,
    version: string,
    provider: number,
    licenseNumber: string,
    otpCode: string,
    deviceUUID?:string,
    codice_fiscale: string
}

export const apiPostAddUser = async (payload: AddUserProps) => {
    let {hostAPI} = require('../../../public/constants/hostApi'); 
    try {
        const response = await fetch(`${hostAPI}/backoffice/demo/addUser`, {
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

