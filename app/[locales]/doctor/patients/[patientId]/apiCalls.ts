export const apiGetPatientInfo = async (server: string, token: string, userId: string) => {
  try {
      const response = await fetch(`${server}/backoffice/webdoctor/getUserInfo/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': token
        }
      });
      if(response?.status === 200){
          const responsePayload = await response.json();
          return responsePayload;
      }else{
          return null;
      }
  } catch (error) {
      console.log(`Error in getting patient info call: ${error}`);
      return null;
  }
}

export const apiGetPatientHealthData = async (server: string, token: string, userId?: string) => {
  try {
      const response = await fetch(`${server}/backoffice/health/fetchHealthData/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': token
        }
      });
      if(response?.status === 200){
          const responsePayload = await response.json();
          return responsePayload;
      }else{
          return null;
      }
  } catch (error) {
      console.log(`Error in getting patient health data call: ${error}`);
      return null;
  }
}