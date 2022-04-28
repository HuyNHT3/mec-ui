const navigateLink =
    process.env.REACT_APP_ENV === 'prod' ? process.env.REACT_APP_ESST_PROD :
    process.env.REACT_APP_ENV === 'stag' ? process.env.REACT_APP_ESST_STAG :
    process.env.REACT_APP_ESST_DEV

    export const GOOGLE_CLIENT_ID = `283076070078-clm2l26cldbit1gl8fq77b3jtr1qne54.apps.googleusercontent.com`;
export const GOOGLE_LOGOUT_HREF = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${navigateLink}`;