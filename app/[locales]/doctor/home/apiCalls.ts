export const fetchDoctorHomepageData = async () => {
    let uuid = "temp";
    let server = localStorage.getItem("server");
    let token = localStorage.getItem("X-AUTH-TOKEN");
    try {
        const response = await fetch(`${server}/backoffice/getDoctorData/${uuid}`, {
          method: 'GET',
          headers: {
            'X-AUTH-TOKEN': `${token}`
          }
        });
        if(response?.status === 200){
            const responsePayload = await response.json();
            return responsePayload;
        }else{
            return null;
        }
    } catch (error) {
        console.log(`Error in apiGetDoctorData call: ${error}`);
        return null;
    }
}

export const fetchDoctorSlotsData = async () => {
    let server = localStorage.getItem("server");
    let token = localStorage.getItem("X-AUTH-TOKEN");
    try {
        const response = await fetch(`${server}/backoffice/appointment?action=search`, {
          method: 'GET',
          headers: {
            'X-AUTH-TOKEN': `${token}`
          }
        });
        if(response?.status === 200){
            const responsePayload = await response.json();
            return responsePayload;
        }else{
            return null;
        }
    } catch (error) {
        console.log(`Error in apiGetDoctorData call: ${error}`);
        return null;
    }
}

export const fetchDoctorAppointmentData = async () => {
    let server = localStorage.getItem("server");
    let token = localStorage.getItem("X-AUTH-TOKEN");
    let offSet = new Date().getTimezoneOffset();
    try {
        const response = await fetch(`${server}/backoffice/getDoctorAppointment/${offSet}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'X-AUTH-TOKEN': `${token}`
          }
        });
        if(response?.status === 200){
            const responsePayload = await response.json();
            return responsePayload;
        }else{
            return null;
        }
    } catch (error) {
        console.log(`Error in apiGetDoctorAppointments call: ${error}`);
        return null;
    }
}