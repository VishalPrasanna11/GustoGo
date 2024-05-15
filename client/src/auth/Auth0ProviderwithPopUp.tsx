import { Auth0Provider,AppState,User} from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
type Props = {
    children: React.ReactNode;
}; 

const Auth0ProviderWithPopup = ({ children }: Props) => {


const navigate = useNavigate();

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

if (!domain || !clientId || !redirectUri) {
    throw new Error(
        "Please define the AUTH0_DOMAIN, AUTH0_CLIENT_ID, and AUTH0_REDIRECT_URI environment variables"
    );
}
         

        const onRedirectCallback = (appState?:AppState,user?:User) => {
            navigate("/auth-callback");
         
        }


        return (
            <Auth0Provider
                domain={domain}
                clientId={clientId}
                
                authorizationParams={{
                    redirect_uri: redirectUri,
                }}
                
                onRedirectCallback={onRedirectCallback}
                
            >
                {children}
            </Auth0Provider>
        );
    };

export default Auth0ProviderWithPopup;
