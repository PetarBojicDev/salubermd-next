interface PreLoginPayload {
  username: string,
  password: string
}

interface LoginPayload {
  username: string,
  password: string,
  code: string
}

interface UserPayload {
  username: string,
  email: string
}

interface RegisterPushPayload {
  deviceUUID: string,
  platform: string,
  token: string,
  fcmToken: string,
  userToken: string
}

export const apiGetServerByUser = async (payload: UserPayload) => {
  try {
    const response = await fetch(`http://192.168.0.107:8080/backoffice/shared/getServerByUser`, {
      method: 'POST',
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json;charset=UTF-8',
        'x-requested-with': 'com.salubermd.mobile'
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
      console.log(`Error in apiGetServerByUser call: ${error}`);
      return null;
  }
}

export const apiPreLogin = async (server: string, payload: PreLoginPayload) => {
  try {
      const response = await fetch(`${server}/backoffice/preLogin`, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          'access-control-request-headers': 'X-AUTH-TOKEN',
          'X-Requested-With': 'com.salubermd.mobile'
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
      console.log(`Error in apiPreLogin call: ${error}`);
      return null;
  }
}

export const apiAuthenticate = async (server: string, payload: LoginPayload) => {
  let { hostAPI } = require('../global/hostApi'); 
  try {
      const response = await fetch(`${server}/backoffice/auth`, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          'access-control-request-headers': 'X-AUTH-TOKEN'
        },
        body: JSON.stringify(payload),
      });
      return response;
  } catch (error) {
      console.log(`Error in apiLogin call: ${error}`);
      return null;
  }
}

export const apiRegisterPush = async (server: string, payload: RegisterPushPayload) => {
  try {
      const response = await fetch(`${server}/backoffice/registerTokenWeb`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': payload.userToken
        },
        body: JSON.stringify(payload)
      });
      if(response?.status === 200){
        const responsePayload = await response.json();
        return responsePayload;
      }else{
          return null;
      }
  } catch (error) {
      console.log(`Error in apiRegisterPush call: ${error}`);
      return false;
  }
}
