const navigateLink =
    process.env.REACT_APP_ENV === 'prod' ? process.env.REACT_APP_ESST_PROD :
        process.env.REACT_APP_ENV === 'stag' ? process.env.REACT_APP_ESST_STAG :
            process.env.REACT_APP_ENV === 'dev' ? process.env.REACT_APP_ESST_DEV :
                process.env.REACT_APP_ESST_LOCAL

export const GOOGLE_CLIENT_ID = "283076070078-op1g1106sul7fdrrgl7nn3vq4v0n0d7d.apps.googleusercontent.com";
export const GOOGLE_LOGOUT_HREF = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${navigateLink}`;