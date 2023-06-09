import React from "react";
import styled from "styled-components";

const Div=styled.div`
    display: flex;
    width:          ${props => props.width}px;
    height:         ${props => props.height}px;
    flex-direction: ${props => props.direction};
    justify-content:${props => props.justify};
    align-items:    ${props => props.align};
    gap:            ${props => props.gap}px;
    margin-top:     ${props => props.m_top}px;
    margin-right:   ${props => props.m_right}px;
    margin-bottom:  ${props => props.m_bottom}px;
    margin-left:    ${props => props.m_left}px;
    position:       ${props => props.position};
    top     :       ${props => props.top        }px;
    right   :       ${props => props.right      }px;
    bottom  :       ${props => props.bottom     }px;
    left    :       ${props => props.left       }px;
    z-index :       ${props => props.zindex};
`

export default function DivFlex(props){
    const { 
        render      ,
        width       ,
        height      ,
        direction   ,
        justify     ,
        align       ,
        gap         ,
        m_top       ,
        m_right     ,
        m_bottom    ,
        m_left      ,
        position    ,
        top         ,
        right       ,
        bottom      ,
        left        ,
        zindex      ,
     } = props;

    return (
        <Div 
            width       ={width     }
            height      ={height    }
            direction   ={direction }
            justify     ={justify   }
            align       ={align     }
            gap         ={gap       }
            m_top       ={m_top     }
            m_right     ={m_right   }
            m_bottom    ={m_bottom  }
            m_left      ={m_left    }
            position    ={position  }
            top         ={top       }
            right       ={right     }
            bottom      ={bottom    }
            left        ={left      }
            zindex      ={zindex    }
        >
            {render}
        </Div>
    )

}