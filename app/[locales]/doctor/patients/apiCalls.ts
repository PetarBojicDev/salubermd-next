export const fetchPatients = async (server: string, token: string, page: number, id: number, filter: string, sort: boolean) => {
  try {
      const response = await fetch(`${server}/backoffice/fetchPatientList/${page}/${id}/${sort ? 1 : 0}?filter=${filter}`, {
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
      console.log(`Error in fetchPatients call: ${error}`);
      return null;
  }
}