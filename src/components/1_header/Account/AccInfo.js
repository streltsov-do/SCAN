import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";

import UserStats from "./UserStats/UserStats";
import UserAcc from "./user/UserAcc";
import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";
import BtnMenu from "./user/BtnMenu/BtnMenu";


const Stats = styled.div`
    width: 175px;
    height: 63px;
    background: rgba(217,217,217, 0.3);
    border-radius: 5px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 132px;
        height: 75px;
        flex-shrink: 0;
    }
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

function AccInfo(props) {

    const {
        auth, token, logged, loading, logout, name, avatar,
        openMenu, isMenuOpened
    } = props;

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT});
    
    const [ stats, setStats ] = useState({
        used: 0,
        limit: 0
    })

    useEffect(()=>{
        const localData = JSON.parse(localStorage.getItem("userData"));
        if (localData!=undefined) {
            setStats(localData);
        }
        if (loading) {
            fGetAccInfo(token,auth);
        }
    },[loading])

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
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then((data)=>{
                let userData = {
                    used: data.eventFiltersInfo.usedCompanyCount,
                    limit: data.eventFiltersInfo.companyLimit
                };
                setStats(userData);

                localStorage.setItem("userData",JSON.stringify(userData));

                loadingChange(false);
            })
            .catch(() => { 
                console.log('AccInfo error');
            });
    }

    return(
        <>
            {logged?
                <>
                    <Stats>
                        <UserStats
                            loading={loading}
                            used={stats.used}
                            limit={stats.limit}
                        />
                    </Stats>

                    {isMobile?
                        
                        <BtnMenu
                            openMenu={openMenu}
                            isMenuOpened={isMenuOpened}
                        />
                    : 
                        <UserAcc
                            logout={logout} 
                            name={name} 
                            avatar={avatar}
                        />
                    }
                </>
            :
                
                isMobile?
                    <BtnMenu
                        openMenu={openMenu}
                        isMenuOpened={isMenuOpened}
                    />
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

export default connect(
    state => ({
        logged  : state.login.logged,
        loading : state.login.loading,
        token   : state.login.token,
    }),
    dispatch => ({
        auth: (loading) => {
            dispatch({ 
                type : "END_LOADING",
                loading : loading,
            });
        },
    })
)(AccInfo);
