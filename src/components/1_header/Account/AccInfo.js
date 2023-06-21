import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logged from "./logged/Logged";
import UserAcc from "./user/UserAcc";

const Stats = styled.div`
    width: 175px;
    height: 63px;
    /* background: #D9D9D9; */
    /* opacity: 0.3; */
    background: rgba(217,217,217, 0.3);
    border-radius: 5px;
    padding: 0;

    display: flex;
    /* display: none; */
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    gap: 7px;
`


const Autorization=styled.div`
    min-width: 251px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
    const Astyled=styled.a`
        color: #000000;
        opacity: 0.4;
        text-decoration: none;
    `
    const Separator=styled.div`
        width: 2px;
        height: 26px;
        background: #029491;
        opacity: 0.6;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    `
    const BtnLogin=styled.button`
        width: 65px;
        height: 26px;
        background: #7CE3E1;
        border-radius: 5px;
        border-style: none;
        
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        letter-spacing: 0.01em;
    `

const urlBase="https://gateway.scan-interfax.ru";

function fGetAccInfo(token,loadingChange) {
    fetch(urlBase+"/api/v1/account/info", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
    })
        .then((response)=>{
            console.log("AccInfo response",response);
            // const vOut = response.url;
            // console.log("response url",vOut);
            // console.log("response.body",response.body);
            // console.log("response.body.accessToken",response.body.accessToken);
            // console.log("response.body.expire",response.body.expire);
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then((data)=>{
            console.log("AccInfo",data);
            loadingChange(false);
        })
        .catch(() => { 
            console.log('AccInfo error');
        });
}


function AccInfo(props) {

    const {auth, token, logged, loading, logout, name, avatar} = props;

    useEffect(()=>{
        if (loading) {
            fGetAccInfo(token,auth);
        }
    })

    const fLogout = () => {
        localStorage.removeItem("auth");
        logout();
    }

    return(
        <>
            {
                logged?
                    <>
                        <Stats>
                            <Logged 
                                loading={loading}
                                // loading={ auth(false)}
                                used={1}
                                limit={1}
                            />
                        </Stats>

                        <UserAcc 
                            logout={fLogout} 
                            name={name} 
                            avatar={avatar}
                        />
                    </>
                :
                    <Autorization>
                        <Astyled href="#">Зарегистрироваться</Astyled>

                        <Separator></Separator>

                        <Link to="/autorization" >
                            <BtnLogin>Войти</BtnLogin>
                        </Link>
                    </Autorization>
            }
        </>
    )
}

// export default AccInfo;

export default connect(
    state => ({
        logged  : state.rLogin[state.rLogin.length-1].logged,
        loading : state.rLogin[state.rLogin.length-1].loading,
        token   : state.rLogin[state.rLogin.length-1].token,
    }),
    dispatch => ({
        auth: (loading) => {
            dispatch({ 
                type : "END_LOADING",
                loading : loading,
            });
        },
        logout: () => {
            dispatch({ type: 'LOGOUT'});
        }
    })
)(AccInfo);
