export const API_NOTICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, Please wait'
    },
    success: {
        title : 'Success',
        message: 'Data successgfully loaded'
    },
    responseFailure : {
        title : 'Error',
        message : 'An error occured while fetching response from the server. Please try again'
    },
    requestFailure : {
        title : 'Error',
        message : 'An error occured while parsing request data'
        
    },
    networkError : {
        title : 'Error',
        message : 'Unable to connect to the server. Please check internet connectivity and try again later'
    }
}

export const SERVICE_URLS = {
    userSignup : {url: '/signup',method: 'POST'}
}