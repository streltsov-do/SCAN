import React from "react";
import styled from "styled-components/macro";

const Btn=styled.button`
    width: ${props => props.width || 335}px;
    height: ${props => props.height || 59}px;
    background: #5970FF;
    border-radius: 5px;
    border-style: none;
    margin-top:     ${props => props.m_top      }px;
    margin-right:   ${props => props.m_right    }px;
    margin-bottom:  ${props => props.m_bottom   }px;
    margin-left:    ${props => props.m_left     }px;
    position:       ${props => props.position   };
    top     :       ${props => props.top        }px;
    right   :       ${props => props.right      }px;
    bottom  :       ${props => props.bottom     }px;
    left    :       ${props => props.left       }px;
    align-self  :   ${props => props.align      };
    justify-self:   ${props => props.justify    };
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`

export default function Button(props) {
    const { 
        name        ,
        width       ,
        height      ,
        m_top       ,
        m_right     ,
        m_bottom    ,
        m_left      ,
        position    ,
        top         ,
        right       ,
        bottom      ,
        left        ,
        align       ,
        justify     ,
    } = props;

    return(
        <Btn 
            width   ={width     }
            height  ={height    }
            m_top   ={m_top     }
            m_right ={m_right   }
            m_bottom={m_bottom  }
            m_left  ={m_left    }
            position={position  }
            top     ={top       }
            right   ={right     }
            bottom  ={bottom    }
            left    ={left      }
            align   ={align     }
            justify ={justify   }
        >
            {name}
        </Btn>
    )
}